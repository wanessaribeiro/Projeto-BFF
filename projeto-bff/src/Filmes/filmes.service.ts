import { Injectable } from '@nestjs/common';

@Injectable()
export class FilmesService {
  getFilmes(): FilmeDTO[] {
    const filmesMock: FilmeDTO[] = [{id: 1, titulo: 'Filme o filme', ano: '2003'}, {id: 2, titulo: "filme sobre filmes", ano: '1970'}]
    return filmesMock;
  }
}
