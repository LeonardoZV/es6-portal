import { Component, OnInit, Input, ViewChild, OnChanges, SimpleChanges } from '@angular/core';

import { MatSort, MatTableDataSource } from '@angular/material';

import { CapituloService } from 'src/app/comum/capitulo.service';
import { CapituloArquivo } from 'src/app/comum/CapituloArquivo';

@Component({
  selector: 'app-capitulo-versoes',
  templateUrl: './capitulo-versoes.component.html',
  styleUrls: ['./capitulo-versoes.component.css']
})
export class CapituloVersoesComponent implements OnInit, OnChanges {

  @Input() node: any;

  displayedColumns = ['numeroVersaoArquivo', 'tamanhoArquivo', 'usuarioCriacaoArquivo', 'dataHoraCriacaoArquivo', 'comentarioCriacaoArquivo'];

  dataSource = new MatTableDataSource();

  carregando = false;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private capituloService: CapituloService) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.capituloService.versoes.subscribe((dados: CapituloArquivo[]) => {
      this.dataSource.data = dados;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    //if (changes.node.currentValue != null) {
    //  this.capituloService.obterVersoes(this.node.objeto.codigoCapitulo, true);
    //}
  }

}
