import { UsuarioService } from './usuario/usuario.service';
import { AuthUser } from './../models/authUser';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private url = 'http://localhost:4201';
  constructor(
    private httpClient: HttpClient,
    private usuarioService:UsuarioService,
    ) { }

   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  autenticar(userAuth:AuthUser): Observable<any>{
    return this.httpClient.post<any>(this.url + '/auth/login', JSON.stringify(userAuth), this.httpOptions)
      .pipe(
        retry(2),
        tap((res) =>{
          const authToken = res.access_token;
          this.usuarioService.salvaToken(authToken);
        })
      );
  }

}
