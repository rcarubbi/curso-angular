import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunosService } from './alunos.service';
import { AlunosGuard } from './../guards/alunos.guard';
import { DeactivateAlunoGuard } from '../guards/deactivate-aluno.guard';
import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';

@NgModule({
  imports: [
    CommonModule,
    AlunosRoutingModule,
    FormsModule
  ],
  declarations: [AlunosComponent, AlunoFormComponent, AlunoDetalheComponent],
  providers: [ AlunosService, AlunosGuard, DeactivateAlunoGuard, AlunoDetalheResolver]
})
export class AlunosModule { }
