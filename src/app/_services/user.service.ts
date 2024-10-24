import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { UserGit } from '../models/userGit';

import { ChangeDetectorRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlBase: string = environment.urlApi;

  constructor(private userServices: UserService, private toastr: ToastrService, private cd: ChangeDetectorRef) {}

  userGitget() {
      this.user = undefined; // Limpa o usuário antes de fazer a nova requisição
      this.userServices.userGitget(this.username).subscribe(
          (response: UserGit) => {
              this.user = response;
              this.cd.detectChanges(); // Força a atualização da interface
          },
          (error) => {
              this.toastr.error(error.error.message);
          }
      );
  }
