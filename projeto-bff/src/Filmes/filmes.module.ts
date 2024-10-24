import { Module } from '@nestjs/common';
import { FilmesController } from './filmes.controller';
import { FilmesService } from './filmes.service';


@Module({
  imports: [],
  controllers: [FilmesController],
  providers: [FilmesService],
})
export class FilmesModule {}
