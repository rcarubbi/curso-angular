import { Injectable, EventEmitter } from '@angular/core';
 

@Injectable()
export class CursosService {
  static emitirCursosCriados = new EventEmitter<string>();

  cursos: string[] = ["Angular", "C#", "node.js"];

  constructor() {
    console.log('Cursos Service');
   }

  getCursos() {
    return this.cursos;
  }

  addCurso(curso: string){
    this.cursos.push(curso);
    CursosService.emitirCursosCriados.emit(curso);
  }


}
