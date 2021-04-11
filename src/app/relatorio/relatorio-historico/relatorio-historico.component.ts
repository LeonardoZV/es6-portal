import { Component, OnInit } from '@angular/core';

export interface Historico {
  versao: number;
  acao: string;
  usuario: string;
  data: string;
  comentario: string;
}

const historico: Historico[] = [
  {versao: 1, acao: 'Travar documento', usuario: 'Mauricio Floriani', data: '31/01/2017 01:00:00', comentario: ''},
  {versao: 2, acao: 'Destravar documento', usuario: 'Mauricio Floriani', data: '31/01/2017 02:00:00', comentario: ''},
  {versao: 3, acao: 'Download documento', usuario: 'Mauricio Floriani', data: '31/01/2017 02:00:00', comentario: ''},
  {versao: 4, acao: 'Upload documento', usuario: 'Mauricio Floriani', data: '31/01/2017 02:00:00', comentario: ''},
  {versao: 5, acao: 'Aprovação documento', usuario: 'Mauricio Floriani', data: '31/01/2017 02:00:00', comentario: ''},
  {versao: 6, acao: 'Travar documento', usuario: 'Mauricio Floriani', data: '31/01/2017 02:00:00', comentario: ''},
  {versao: 7, acao: 'Destravar documento', usuario: 'Mauricio Floriani', data: '31/01/2017 02:00:00', comentario: ''},
  {versao: 8, acao: 'Travar documento', usuario: 'Mauricio Floriani', data: '31/01/2017 02:00:00', comentario: ''},
  {versao: 9, acao: 'Destravar documento', usuario: 'Mauricio Floriani', data: '31/01/2017 02:00:00', comentario: ''},
];


@Component({
  selector: 'app-relatorio-historico',
  templateUrl: './relatorio-historico.component.html',
  styleUrls: ['./relatorio-historico.component.css']
})
export class RelatorioHistoricoComponent implements OnInit {

  displayedColumns = ['versao', 'acao', 'usuario', 'data', 'comentario'];
  dataSource = historico;

  constructor() { }

  ngOnInit() {
  }

}
