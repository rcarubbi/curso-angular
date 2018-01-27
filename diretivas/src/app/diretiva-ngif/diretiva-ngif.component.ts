import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
 

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.scss']
})
export class DiretivaNgifComponent implements OnInit {

  cursos: string[] = ["Angular 2", "ReactJS"];
  mostrarCursos: boolean = false;
  

  constructor() { }

  ngOnInit() {
  }

  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;

  }

  

}
