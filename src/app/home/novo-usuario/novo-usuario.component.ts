import { NovoUsuarioService } from './novo-usuario.service';
import { AuthUser } from './../../models/authUser';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { usuarioSenhaIguaisValidator } from './usuario-senha.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  novoUsuarioForm !: FormGroup;

  constructor(
    private novoUsuarioService:NovoUsuarioService,
    private formBuilder: FormBuilder,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      email: ['',
        [
          Validators.required,
          Validators.email
        ]
      ],
      password: ['', [
        Validators.required,
      ]],
    },
    {
      Validators: [usuarioSenhaIguaisValidator],
    }
    );
  }

  create(){
    const novoUsuario = this.novoUsuarioForm.getRawValue() as AuthUser;
    this.novoUsuarioService.create(novoUsuario).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['']);
    },(error) =>{
      console.error(error);
    });
  }

}
