import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
  // outputs: ['mudouValor']
})
export class DataBindingComponent implements OnInit {

 url: string = 'http://smartlmsweb.azurewebsites.net';
 urlImg: string = 'http://lorempixel.com/400/200/nature/';
 cursoAngular: boolean = true;
 valorAtual: string;
 valorSalvo: string;
 isMouseOver: boolean = false;
 nomeDoCurso: string = 'Curso de Angular';

  constructor() { 


  }

  getCurtirCurso() {
    return true;
  }

  getValor() {
    return 1;
  }

  onKeyup(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  onClick() {
    alert("botão clicado");
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento) {
    console.log(`Novo valor ${evento.novoValor}`);
  
  }

  ngOnInit() {
  }

}
