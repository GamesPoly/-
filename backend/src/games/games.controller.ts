import { Controller, Post, Get, UploadedFiles, UseInterceptors, Param} from '@nestjs/common';
import { createGameDto } from './dto/create-game.dto';
import { GamesService } from './games.service';
import { Body } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express/multer';



@Controller('games')
export class GamesController {

    constructor(private gamesService: GamesService) { }

    @Post()
    @UseInterceptors(FileFieldsInterceptor([{name: 'cover'}, {name: 'screenshot'}, {name: 'trailer'}, {name: 'gameFiles'}]))
    createGame(@Body() dto: createGameDto,
                @UploadedFiles() files: {cover?: Express.Multer.File[], screenshot?: Express.Multer.File[], trailer?: Express.Multer.File[], gameFiles?: Express.Multer.File[]}){
        return this.gamesService.createGame(dto, files)
    }

    @Get()
    getGames() {
        return this.gamesService.getAllGames()
    }

    @Get('/:title')
    getGame(@Param('title') title: string) {
        return this.gamesService.getGameByName(title)
    }

}
