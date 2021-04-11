import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material';

import { AdministracaoRelatoriosNovoDialogComponent } from '../administracao-relatorios-novo-dialog/administracao-relatorios-novo-dialog.component';

import { RelatorioService } from 'src/app/comum/relatorio.service';
import { Relatorio } from '../../comum/Relatorio';

@Component({
  selector: 'app-administracao-relatorios',
  templateUrl: './administracao-relatorios.component.html',
  styleUrls: ['./administracao-relatorios.component.css']
})
export class AdministracaoRelatoriosComponent implements OnInit {

  displayedColumns = ['nomeRelatorio', 'tipoRelatorio', 'nomePeriodo', 'localidade'];
  dataSource: Relatorio[];
  carregando: boolean = true;

  constructor(public dialog: MatDialog, private relatorioService: RelatorioService) {}

  ngOnInit() {
    this.carregarRelatorios();
  }

  carregarRelatorios() {
    this.relatorioService.obterRelatorios().subscribe((dados: Relatorio[]) => {
      this.dataSource = dados;
      this.carregando = false;
    });
  }

  exibirNovoRelatorioDialog(): void {
    const dialogRef = this.dialog.open(AdministracaoRelatoriosNovoDialogComponent, {
      width: '400px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result == true) {
        this.carregarRelatorios();
      }
    });
  }

}
