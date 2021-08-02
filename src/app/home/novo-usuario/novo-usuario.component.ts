import { AuthUser } from './../../models/authUser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  user:AuthUser = { email:'', password:'' };

  constructor() { }

  ngOnInit(): void {
  }

  create(){

  }

}
