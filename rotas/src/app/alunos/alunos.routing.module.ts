import { DeactivateAlunoGuard } from './../guards/deactivate-aluno.guard';
import { NgModule, ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule, CanActivateChild } from '@angular/router';

import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';
import { AlunosGuard } from "../guards/alunos.guard";
import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';

const alunosRoutes: Routes = [
    {
        // path: 'alunos', component: AlunosComponent, children: [
        //     { path: 'new', component: AlunoFormComponent },
        //     { path: ':id', component: AlunoDetalheComponent },
        //     { path: ':id/edit', component: AlunoFormComponent }
        // ]
        path: '', component: AlunosComponent, 
        canActivateChild: [AlunosGuard],
        children: [
            { path: 'new', component: AlunoFormComponent },
            { path: ':id', component: AlunoDetalheComponent,
                resolve: { aluno: AlunoDetalheResolver }
            },
            { path: ':id/edit', component: AlunoFormComponent, canDeactivate: [ DeactivateAlunoGuard ] }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule],
  
})
export class AlunosRoutingModule { }