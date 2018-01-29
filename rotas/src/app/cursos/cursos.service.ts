import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  constructor() { }

  getCursos() {
    return [
      { id: 1, nome: 'Angular 2'},
      { id: 2, nome: 'C#' }
    ] 
  }

  getCurso(id: number) {
    for (const curso of this.getCursos()) {
      if (curso.id == id) {
        return curso;
      }
    }

    return null;
  }
}
