import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administracao-lixeira',
  templateUrl: './administracao-lixeira.component.html',
  styleUrls: ['./administracao-lixeira.component.css']
})
export class AdministracaoLixeiraComponent implements OnInit {

  carregando: boolean = true;

  constructor() { }

  ngOnInit() {
    this.carregando = false;
  }

}
