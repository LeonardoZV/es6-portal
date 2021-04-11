import { Component, OnInit } from '@angular/core';

import { FlatTreeControl } from '@angular/cdk/tree';
import { MatDialog } from '@angular/material';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

import { CapituloNovoDialogComponent } from './capitulo-novo-dialog/capitulo-novo-dialog.component';

import { PeriodoService } from '../comum/periodo.service';
import { Periodo } from '../comum/Periodo';
import { RelatorioService } from '../comum/relatorio.service';
import { Relatorio } from '../comum/Relatorio';
import { CapituloService } from '../comum/capitulo.service';
import { Capitulo } from '../comum/Capitulo';

export interface Node {
  codigoObjeto: number;
  name: string;
  tipoObjeto: number;
  objeto: any;
  children?: Node[];
}

interface ExampleFlatNode {
  codigoObjeto: number;
  name: string;
  tipoObjeto: number;
  objeto: any;
  level: number;
  expandable: boolean;
}

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent implements OnInit {

  periodos: Periodo[];

  relatorios: Relatorio[];

  relatorioSelecionado: Relatorio;

  activeNode: Node;

  tabAtivas = false;

  TREE_DATA: Node[] = [];

  private transformer = (node: Node, level: number) => {
    return {
      codigoObjeto: node.codigoObjeto,
      name: node.name,
      tipoObjeto: node.tipoObjeto,
      objeto: node.objeto,
      level: level,
      expandable: !!node.children && node.children.length > 0
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(this.transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(public dialog: MatDialog, private periodoService: PeriodoService, private relatorioService: RelatorioService, private capituloService: CapituloService) {

  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  ngOnInit() {
    this.periodoService.obterPeriodos().subscribe((dados: Periodo[]) => {
      this.periodos = dados;
    });
    this.capituloService.capitulos.subscribe((dados: Capitulo[]) => {
      if (this.relatorioSelecionado) {

        let capitulos: Node[] = [];

        var pais = dados.filter(d => d.codigoCapituloPai == null).sort(function(a, b) {
          var nameA = a.ordenacao.toLowerCase(), nameB = b.ordenacao.toLowerCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });

        let ordenacao: number = 1;

        pais.forEach(element => {
          capitulos.push(this.montarPai(`${ordenacao}`, element, dados));
          ordenacao = ordenacao + 1;
        });

        let nodeRelatorio: Node = {
          codigoObjeto: this.relatorioSelecionado.codigoRelatorio,
          name: this.relatorioSelecionado.nomeRelatorio,
          tipoObjeto: 1,
          objeto: this.relatorioSelecionado,
          children: capitulos
        }

        this.TREE_DATA = [];
        this.TREE_DATA.push(nodeRelatorio);

        this.dataSource.data = [];
        this.dataSource.data = this.TREE_DATA;

        this.tabAtivas = true;
        this.treeControl.expand(this.treeControl.dataNodes[0]);

      }
    });
  }

  carregarRelatorios(novoValor: any) {
    this.relatorioService.obterRelatoriosPorCodigoPeriodo(novoValor.value).subscribe((dados: Relatorio[]) => {
      this.relatorios = dados;
      this.tabAtivas = false;
    });
  }

  selecionarRelatorio(novoValor: any) {
    this.relatorioSelecionado = novoValor.value;
    this.capituloService.atualizarCapitulos(this.relatorioSelecionado.codigoRelatorio);
  }

  montarPai(ordenacao: string, pai: Capitulo, dados: Capitulo[]): Node {

    let nodeFilhos: Node[] = [];

    var filhos = dados.filter(d => d.codigoCapituloPai === pai.codigoCapitulo).sort(function(a, b) {
      var nameA = a.ordenacao.toLowerCase(), nameB = b.ordenacao.toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
     });

    let ordenacaoFilho: number = 1;

    filhos.forEach(element => {
      nodeFilhos.push(this.montarPai(`${ordenacao}.${ordenacaoFilho}`, element, dados));
      ordenacaoFilho = ordenacaoFilho + 1;
    });

    let nodePai: Node = { codigoObjeto: pai.codigoCapitulo, name: `${ordenacao} - ${pai.nomeCapitulo}`, tipoObjeto: 2, objeto: pai, children: nodeFilhos };

    return nodePai;

  }

  selecionarNode(node: Node) {
    this.activeNode = node;
    this.capituloService.atualizarVersoes(this.activeNode.objeto.codigoCapitulo);
  }

  criarCapitulo() {
    this.dialog.open(CapituloNovoDialogComponent, {
      width: '400px',
      data: {
        codigoRelatorio: this.activeNode.tipoObjeto === 1 ? this.activeNode.objeto.codigoRelatorio : this.activeNode.objeto.relatorio.codigoRelatorio,
        codigoCapitulo: this.activeNode.tipoObjeto === 1 ? null : this.activeNode.codigoObjeto
      }
    });
  }

  deletarCapitulo() {
    if(this.activeNode && this.activeNode.tipoObjeto == 2) {
      this.capituloService.deletarCapitulo(this.activeNode.codigoObjeto);
    }
  }

}
