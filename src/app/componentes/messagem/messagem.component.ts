import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-messagem',
  templateUrl: './messagem.component.html',
  styleUrls: ['./messagem.component.css']
})
export class MessagemComponent implements OnInit {

  @Input()
  mensagem = "";

  constructor() { }

  ngOnInit(): void {
  }

}
