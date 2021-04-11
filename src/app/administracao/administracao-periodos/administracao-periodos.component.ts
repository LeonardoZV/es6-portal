import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material';

import { AdministracaoPeriodosNovoDialogComponent } from '../administracao-periodos-novo-dialog/administracao-periodos-novo-dialog.component'

import { PeriodoService } from '../../comum/periodo.service'
import { Periodo } from '../../comum/Periodo'

@Component({
  selector: 'app-administracao-periodos',
  templateUrl: './administracao-periodos.component.html',
  styleUrls: ['./administracao-periodos.component.css']
})
export class AdministracaoPeriodosComponent implements OnInit {

  displayedColumns = ['nomePeriodo'];
  dataSource: Periodo[];
  carregando: boolean = true;
  
  constructor(public dialog: MatDialog, private periodoService: PeriodoService) {}

  ngOnInit() {
    this.carregarPeriodos();
  }

  carregarPeriodos() {
    this.periodoService.obterPeriodos().subscribe((dados: Periodo[]) => {
      this.dataSource = dados;
      this.carregando = false;
    });
  }

  exibirNovoPeriodoDialog(): void {
    const dialogRef = this.dialog.open(AdministracaoPeriodosNovoDialogComponent, {
      width: '400px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result == true) {
        this.carregarPeriodos();
      }
    });
  }

}
