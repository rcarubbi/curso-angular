import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { AlunosService } from '../alunos.service';
import { IformCanDeactivate } from '../../guards/iform-can-deactivate';


@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements IformCanDeactivate, OnInit, OnDestroy {

  formMudou: boolean
  private id: number
  private inscricao: Subscription;
  aluno: any;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService,
    private router: Router
  ) {
  }

  onInput() {
    this.formMudou = true;
  }

  podeDesativar() {
    if (this.formMudou) {
      return confirm("Tem certeza que quer sair?");
    }
    else
      return true;
  }

  ngOnInit() {


    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = this.route.snapshot.params['id'];
        this.aluno = this.alunosService.getAluno(this.id);

        if (this.aluno == null) {
          this.aluno = {};
        }
      }
    );
  }

  ngOnDestroy() {
    if (this.inscricao != null) {
      this.inscricao.unsubscribe();
    }
  }

}
