import { Component } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { UserGit } from '../../models/userGit';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  user: UserGit | undefined;
  username: string = '';
  errorMessage: string = '';
  constructor(private userServices: UserService, private toastr: ToastrService){}

  userGitget(){
    this.userServices.userGitget(this.username).subscribe((response: UserGit) =>{
      this.user = response;
    },(error)=>{
      this.toastr.error(error.error.message)
      

    });
  }

}
