import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material';

import { CapituloService } from 'src/app/comum/capitulo.service';
import { Capitulo } from 'src/app/comum/capitulo';
import { CapituloArquivo } from 'src/app/comum/CapituloArquivo';

export interface Cockpit {
  nomeCapitulo: string;
  nomeUsuarioTrava: string;
  versao: number;
  tamanhoArquivo: number;
  nomeUsuarioUltimaModificacao: string;
  dataUltimaModificacao: string;
  nomeTipoCapitulo: string;
}

@Component({
  selector: 'app-relatorio-cockpit',
  templateUrl: './relatorio-cockpit.component.html',
  styleUrls: ['./relatorio-cockpit.component.css']
})
export class RelatorioCockpitComponent implements OnInit {

  displayedColumns = ['capitulo', 'usuarioTrava', 'versao', 'tamanho', 'usuarioUltimaModificacao', 'dataUltimaModificacao', 'tipoCapitulo'];

  dataSource = new MatTableDataSource();

  capitulos: Capitulo[];

  versoes: CapituloArquivo[];

  constructor(private capituloService: CapituloService) { }

  ngOnInit() {
    this.capituloService.capitulos.subscribe((dados: Capitulo[]) => {
      this.capitulos = dados;
      this.montarCockpit();
    });
    this.capituloService.versoes.subscribe((dados: CapituloArquivo[]) => {
      this.versoes = dados;
      this.montarCockpit();
    });
  }

  montarCockpit() {
    if (this.capitulos && this.versoes) {
      const cockpit: Cockpit[] = [];
      this.capitulos.forEach(c => {
        const maximaVersao = this.versoes.filter(v => v.codigoCapitulo === c.codigoCapitulo).pop();
        cockpit.push({
          nomeCapitulo: c.nomeCapitulo,
          nomeUsuarioTrava: c.usuarioTrava == null ? null : c.usuarioTrava.nome,
          versao: maximaVersao == null ? null : maximaVersao.numeroVersaoArquivo,
          tamanhoArquivo: maximaVersao == null ? null : maximaVersao.tamanhoArquivo,
          nomeUsuarioUltimaModificacao: maximaVersao == null ? null : maximaVersao.usuarioCriacaoArquivo.nome,
          dataUltimaModificacao: maximaVersao == null ? null : maximaVersao.dataHoraCriacaoArquivo,
          nomeTipoCapitulo: c.tipoCapitulo.nomeTipoCapitulo
        });
      });
      this.dataSource.data = cockpit;
    }
  }

}
