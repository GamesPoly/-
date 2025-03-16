import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import * as uuid from 'uuid';

@Injectable()
export class FilesService {

    async createCover(cover): Promise<string> {
        try {
            const coverName = uuid.v4() + '.png'
            const coverPath = path.resolve(__dirname, '..', 'static/covers')
            if (!fs.existsSync(coverPath)) {
                fs.mkdirSync(coverPath, { recursive: true })
            }
            fs.writeFileSync(path.join(coverPath, coverName), cover.buffer)
            return coverName
        } catch (e) {
            throw new HttpException('Error during file creation', HttpStatus.INTERNAL_SERVER_ERROR) 
        }
    }

    async createScreenshot(file): Promise<string> {
        try {
            const fileName = uuid.v4() + '.png'
            const filePath = path.resolve(__dirname, '..', 'static/screenshots')
            if (!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath, { recursive: true })
            }
            fs.writeFileSync(path.join(filePath, fileName), file.buffer)
            return fileName
        } catch (e) {
            throw new HttpException('Error during file creation', HttpStatus.INTERNAL_SERVER_ERROR) 
        }
    }

    async createTrailer(file): Promise<string> {
        try {
            const fileName = uuid.v4() + '.mp4'
            const filePath = path.resolve(__dirname, '..', 'static/trailers')
            if (!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath, { recursive: true })
            }
            fs.writeFileSync(path.join(filePath, fileName), file.buffer)
            return fileName
        } catch (e) {
            throw new HttpException('Error during file creation', HttpStatus.INTERNAL_SERVER_ERROR) 
        }
    }

    async createFiles(file): Promise<string> {
        try {
            const fileName = uuid.v4() + '.zip'
            const filePath = path.resolve(__dirname, '..', 'static/files')
            if (!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath, { recursive: true })
            }
            fs.writeFileSync(path.join(filePath, fileName), file.buffer)
            return fileName
        } catch (e) {
            throw new HttpException('Error during file creation', HttpStatus.INTERNAL_SERVER_ERROR) 
        }
    }
}
