import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';

import { RelatorioGerarDialogComponent } from '../relatorio-gerar-dialog/relatorio-gerar-dialog.component'

import { environment } from '../../../environments/environment'

import { RelatorioService } from 'src/app/comum/relatorio.service';
import { Relatorio } from '../../comum/Relatorio';
import { RelatorioArquivo } from 'src/app/comum/RelatorioArquivo';

@Component({
  selector: 'app-relatorio-geral',
  templateUrl: './relatorio-geral.component.html',
  styleUrls: ['./relatorio-geral.component.css']
})
export class RelatorioGeralComponent implements OnInit, OnChanges {

  @Input() node: any;

  apiUrl: string

  relatorio: Relatorio;

  ultimaVersaoArquivoRelatorio: RelatorioArquivo;

  carregando: boolean = false;

  constructor(public dialog: MatDialog, private snackBar: MatSnackBar, private relatorioService: RelatorioService) {
    this.apiUrl = environment.apiUrl;
  }

  ngOnInit() {
    this.relatorioService.obterVersoes().subscribe((dados: RelatorioArquivo[]) => {
      if (dados.length > 0) this.ultimaVersaoArquivoRelatorio = dados[dados.length - 1];
    });
  }

  ngOnChanges(changes: SimpleChanges) {    
    if (changes.node.currentValue != null) {
      this.relatorio = changes.node.currentValue.objeto;
      this.relatorioService.atualizarVersoes(this.relatorio.codigoRelatorio);
    }
  }

  obterRelatorio() {
    this.relatorioService.obterRelatorio(this.relatorio.codigoRelatorio).subscribe((dados: Relatorio) => {
      this.relatorio = dados;
    });
  }
  
  gerar() {
    const dialogRef = this.dialog.open(RelatorioGerarDialogComponent, {
      width: '500px',
      data: { codigoRelatorio: this.relatorio.codigoRelatorio }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result == 1) {
        this.snackBar.open("Relatório gerado com sucesso.", "Fechar", {
          duration: 2000,
        });
        this.relatorioService.atualizarVersoes(this.relatorio.codigoRelatorio);
      }
      if (result == 2) {
        this.snackBar.open("Erro na geração do relatório.", "Fechar", {
          duration: 2000,
        });
      }
    });
  }

  travar() {
    this.relatorioService.travarRelatorio(this.relatorio.codigoRelatorio).subscribe((dados: number) => {
      this.obterRelatorio();
    });
  }

  destravar() {
    this.relatorioService.destravarRelatorio(this.relatorio.codigoRelatorio).subscribe((dados: number) => {
      this.obterRelatorio();
    });
  }

}
