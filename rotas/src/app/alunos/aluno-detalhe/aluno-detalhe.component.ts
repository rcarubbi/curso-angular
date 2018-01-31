import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { AlunosService } from './../alunos.service';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {


  private id: number
  private inscricao: Subscription;
  aluno: any;

  constructor(
    private route: ActivatedRoute, 
    private alunosService: AlunosService,
    private router: Router
  ) {
  }

  ngOnInit() {
    // this.inscricao = this.route.params.subscribe(
    //   (params: any) => {
    //     this.id = this.route.snapshot.params['id'];
    //     this.aluno = this.alunosService.getAluno(this.id);

    //      if (this.aluno== null){
    //        this.router.navigate(['/aluno-nao-encontrado']);
    //      }
    //   }
    // );

    this.inscricao = this.route.data.subscribe(
      (data: { aluno: Aluno }) => {
          this.aluno = data.aluno; 
      });
  }

  ngOnDestroy() {
    if (this.inscricao != null) {
      this.inscricao.unsubscribe();
    }
  }

  editarContato() {
    this.router.navigate(['/alunos', this.aluno.id, 'edit']); 
  }

}


 




 