import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core'

import { Usuario } from './usuario';


@Injectable()
export class AuthService {
  private usuarioAutenticado: boolean = false;

  constructor(private router: Router) { }

  mostrarMenuEmmiter = new EventEmitter<boolean>();

  usuarioEstaAutenticado(): boolean {
    return this.usuarioAutenticado;
  }

  fazerLogin(usuario: Usuario) {
    if (usuario.nome === "usuario@email.com.br" &&
    usuario.senha === "123456")
    {
      this.usuarioAutenticado = true;
      this.mostrarMenuEmmiter.emit(true);
      this.router.navigate(["/"]);
      
    }else{
      this.usuarioAutenticado = false;
    }
  }
}
