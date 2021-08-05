import { AuthUser } from './../../models/authUser';
import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userAuth:AuthUser = { email:'', password:'' };

  constructor(
    private authService: AutenticacaoService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.autenticar(this.userAuth).subscribe((res)=>{
      this.router.navigate(['animais']);
    },(error) =>{
      console.error(error);
    }
    );
  }

}
