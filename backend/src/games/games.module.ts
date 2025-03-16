import { Module } from '@nestjs/common';
import { GamesService } from './games.service';
import { GamesController } from './games.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../users/user.model';
import { Game } from './games.model';
import { FilesModule } from 'src/files/files.module';

@Module({
  providers: [GamesService],
  controllers: [GamesController],
  imports: [
    SequelizeModule.forFeature([User, Game]),
    FilesModule
  ]
})
export class GamesModule {}
