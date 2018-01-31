import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { MaterializeModule } from 'angular2-materialize';

//import { CursosModule } from './cursos/cursos.module';
//import { AlunosModule } from './alunos/alunos.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
 
//import { routing } from './app.routing';
//import { AlunosGuard } from './guards/alunos.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AuthGuard } from './guards/auth.guard';
import { AppRoutingModule } from './app.routing.module';
import { AuthService } from './login/auth.service';
import { PaginaNaoEnconradaComponent } from './pagina-nao-enconrada/pagina-nao-enconrada.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PaginaNaoEnconradaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    //CursosModule,
   // AlunosModule
   // routing
  ],
  providers: [
    AuthService, 
    AuthGuard,
    CursosGuard, 
    //AlunosGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
