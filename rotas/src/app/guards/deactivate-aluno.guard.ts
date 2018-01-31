import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';

import { IformCanDeactivate } from './iform-can-deactivate';
import { AlunoFormComponent } from '../alunos/aluno-form/aluno-form.component';


@Injectable()
export class DeactivateAlunoGuard implements CanDeactivate<IformCanDeactivate> {

  canDeactivate(
    component: IformCanDeactivate,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    return component.podeDesativar();

  }
}

