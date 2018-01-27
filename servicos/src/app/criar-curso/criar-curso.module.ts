import { CursosService } from './../cursos/cursos.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriarCursoComponent } from './criar-curso.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CriarCursoComponent
  ],
  exports: [
    CriarCursoComponent
  ],
  providers: [CursosService],
})
export class CriarCursoModule { }
