import { Controller, Get } from '@nestjs/common';
import { FilmesService } from './filmes.service';


@Controller('/filmes')
export class FilmesController {
  constructor(private readonly filmesService: FilmesService) {}

  @Get()
  getFilmes(): FilmeDTO[] {
    return this.filmesService.getFilmes()
  }
}
