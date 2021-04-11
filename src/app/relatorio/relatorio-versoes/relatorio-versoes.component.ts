import { Component, OnInit, Input, ViewChild, OnChanges, SimpleChanges } from '@angular/core';

import { MatSort, MatTableDataSource } from '@angular/material';

import { RelatorioService } from 'src/app/comum/relatorio.service';
import { RelatorioArquivo } from 'src/app/comum/RelatorioArquivo';

@Component({
  selector: 'app-relatorio-versoes',
  templateUrl: './relatorio-versoes.component.html',
  styleUrls: ['./relatorio-versoes.component.css']
})
export class RelatorioVersoesComponent implements OnInit, OnChanges {

  @Input() node: any;

  displayedColumns = ['numeroVersaoArquivo', 'tamanhoArquivo', 'usuarioCriacaoArquivo', 'dataHoraCriacaoArquivo', 'comentarioCriacaoArquivo'];

  dataSource = new MatTableDataSource();

  carregando: boolean = false;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private relatorioService: RelatorioService) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.relatorioService.obterVersoes().subscribe((dados: RelatorioArquivo[]) => { 
      this.dataSource.data = dados;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.node.currentValue != null) {
      this.relatorioService.atualizarVersoes(this.node.objeto.codigoRelatorio);      
    }
  }

}
