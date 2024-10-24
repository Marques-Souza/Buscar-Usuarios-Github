import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { UserGit } from '../models/userGit';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlBase: string = environment.urlApi;

  constructor(private http: HttpClient) { }
  
  userGitget(username: string) {
    return this.http.get<UserGit>(this.urlBase + 'users/' + username).pipe(
        map((response: UserGit) => {
            return response;
        }),
        catchError((error) => {

            console.error('Erro na requisição:', error);
            return throwError(() => new Error(error.message || 'Erro ao buscar usuário'));
        })
    );
}
}