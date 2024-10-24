import { Module } from '@nestjs/common';
import { FilmesModule } from './Filmes/filmes.module';

@Module({
  imports: [
    FilmesModule
  ],
})
export class AppModule {}
