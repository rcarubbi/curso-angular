import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-exemplo-pipes',
  templateUrl: './exemplo-pipes.component.html',
  styleUrls: ['./exemplo-pipes.component.css']
})
export class ExemploPipesComponent implements OnInit {

  livro: any = {
      titulo: 'Learning JavaScript Data Structures and Algorithms - Second Edition',
      rating: 4.54321,
      numeroPaginas: 314,
      preco: 44.99,
      dataLancamento: new Date(2016, 5, 23),
      url: 'http://a.co/glgjpRP'
  };

  filtro: string = "";
  livros: string[] = [ 'Angular 2', 'C#']; 

  constructor() { }

  addCurso(curso: string) {
    this.livros.push(curso);
  }

  obterCursos() {
    if (this.livros.length === 0 || this.filtro === null || this.filtro.trim() === '')
    { 
      return this.livros;
    }
 
    return this.livros.filter((v) => { 
       if (v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0) {
         return true;
       } 
       return false;
    });
  }

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve('Valor Assíncrono');
    }, 2000);
  });

  valorAsync2 = Observable.interval(2000).map(valor => 'Valor Assíncrono 2');

  ngOnInit() {
  }

}
