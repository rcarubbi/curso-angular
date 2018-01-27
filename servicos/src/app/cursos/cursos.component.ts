import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'] 
})
export class CursosComponent implements OnInit {

  cursos: string[];
  
  constructor(private cursosService: CursosService) {
   

   }

  ngOnInit() { 
    this.cursos = this.cursosService.getCursos();

    CursosService.emitirCursosCriados.subscribe(curso => this.cursos.push(curso));
  }
}
