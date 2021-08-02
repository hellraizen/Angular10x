import { AuthUser } from './../models/authUser';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private url = 'http://localhost:4201';
  constructor(private httpClient: HttpClient) { }

   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  autenticar(user:AuthUser): Observable<AuthUser>{
    return this.httpClient.post<AuthUser>(this.url + '/auth/login', JSON.stringify(user), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

   handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
