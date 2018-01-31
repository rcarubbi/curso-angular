import { PaginaNaoEnconradaComponent } from './pagina-nao-enconrada/pagina-nao-enconrada.component';
import { NgModule, ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosGuard } from "./guards/cursos.guard";
import { AlunosGuard } from './guards/alunos.guard';

const APP_ROUTES: Routes = [
    { 
        path: 'cursos', 
        loadChildren: 'app/cursos/cursos.module#CursosModule', 
        canActivate: [AuthGuard], 
        canActivateChild: [CursosGuard],
        canLoad: [AuthGuard]
    },
    { 
        path: 'alunos', 
        loadChildren: 'app/alunos/alunos.module#AlunosModule', 
        canActivate: [AuthGuard],
        canLoad: [AuthGuard]         
     // canActivateChild: [AlunosGuard] 
    },
    { 
        path: 'login', 
        component: LoginComponent
    },
    { 
        path: 'home', 
        component: HomeComponent, 
        canActivate: [AuthGuard] 
    },
    {   path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: '**', 
        component: PaginaNaoEnconradaComponent,
        //canActivate: [AuthGuard]
    }
];

@NgModule({
    imports : [RouterModule.forRoot(APP_ROUTES, {useHash: true})],
    exports: [RouterModule]
}) 
export class AppRoutingModule {}