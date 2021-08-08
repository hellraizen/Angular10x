import { environment } from './../../environments/environment.prod';
import { UsuarioService } from './usuario/usuario.service';
import { AuthUser } from './../models/authUser';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';

const API = environment.loginUrl;

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {


  constructor(
    private httpClient: HttpClient,
    private usuarioService:UsuarioService,
    ) { }

   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  autenticar(userAuth:AuthUser): Observable<any>{
    return this.httpClient.post<any>(API + '/auth/login', JSON.stringify(userAuth), this.httpOptions)
      .pipe(
        tap((res) =>{
          const authToken = res.access_token;
          this.usuarioService.salvaToken(authToken);
        })
      );
  }

}
