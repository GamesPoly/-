import { Injectable } from '@nestjs/common';
import { createGameDto } from './dto/create-game.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Game } from './games.model';
import { FilesService } from 'src/files/files.service';

@Injectable()
export class GamesService {

    constructor(@InjectModel(Game) private gameRepository: typeof Game,
                private fileService: FilesService) { }

    async createGame(dto: createGameDto, files: {cover?: Express.Multer.File[], screenshot?: Express.Multer.File[], trailer?: Express.Multer.File[], gameFiles?: Express.Multer.File[]}) {
        
        const coverName = await this.fileService.createCover(files.cover[0])
        const screenshotName = await this.fileService.createScreenshot(files.screenshot[0])
        const trailerName = await this.fileService.createTrailer(files.trailer[0])
        const gameFilesName = await this.fileService.createFiles(files.gameFiles[0])

        const game = await this.gameRepository.create({...dto, cover: coverName, screenshot: screenshotName, trailer: trailerName, gameFiles: gameFilesName})
        
        return game
    }

    async getAllGames() {
        return await this.gameRepository.findAll({include: { all: true }})
    }

    async getGameByName(title: string) {
        return await this.gameRepository.findOne({where: {title}, include: { all: true }})
    }

}
