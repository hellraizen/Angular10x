import { Usuario } from './usuario';
import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarioSubject = new BehaviorSubject<Usuario>({});
  constructor(private tokenService:TokenService) {
    if (this.tokenService.possuiToken()) {
      this.decodificarJWT();
    }
   }

  private decodificarJWT(){
    const token = this.tokenService.retornToken();
    const usuario = jwt_decode(token) as Usuario;
    this.usuarioSubject.next(usuario);
  }

  retornaUsuario() {
    return this.usuarioSubject.asObservable();
  }

  salvaToken(token: string){
    this.tokenService.salvarToken(token);
    this.decodificarJWT();
  }

  logout(){
    this.tokenService.excluirToken();
    this.usuarioSubject.next({});
  }

  isLogin(){
    return this.tokenService.possuiToken();
  }

}
