import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';

import { CapituloUploadDialogComponent } from '../capitulo-upload-dialog/capitulo-upload-dialog.component';

import { environment } from '../../../environments/environment';

import { CapituloService } from 'src/app/comum/capitulo.service';
import { Capitulo } from '../../comum/Capitulo';
import { CapituloArquivo } from 'src/app/comum/CapituloArquivo';

@Component({
  selector: 'app-capitulo-geral',
  templateUrl: './capitulo-geral.component.html',
  styleUrls: ['./capitulo-geral.component.css']
})
export class CapituloGeralComponent implements OnInit, OnChanges {

  @Input() node: any;

  apiUrl: string;

  capitulo: Capitulo;

  ultimaVersaoArquivoCapitulo: CapituloArquivo;

  carregando = false;

  constructor(public dialog: MatDialog, private snackBar: MatSnackBar, private capituloService: CapituloService) {
    this.apiUrl = environment.apiUrl;
  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.node.currentValue != null) {
      this.capitulo = changes.node.currentValue.objeto;
      this.capituloService.capitulos.subscribe((dados: Capitulo[]) => {
        if (dados.length > 0) {
          this.capitulo = dados.find(d => d.codigoCapitulo === this.capitulo.codigoCapitulo);
        }
      });
      this.capituloService.versoes.subscribe((dados: CapituloArquivo[]) => {
        if (dados.length > 0) {
          const maiorVersao = Math.max.apply(Math, dados.map(function(item){ return item.numeroVersaoArquivo; }));
          this.ultimaVersaoArquivoCapitulo = dados.find(v => v.numeroVersaoArquivo === maiorVersao);
        } else {
          this.ultimaVersaoArquivoCapitulo = null;
        }
      });
    }
  }

  openUploadDialog(): void {
    const dialogRef = this.dialog.open(CapituloUploadDialogComponent, {
      width: '400px',
      data: { codigoCapitulo: this.capitulo.codigoCapitulo }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result == 1) {
        this.snackBar.open("Capítulo carregado com sucesso.", "Fechar", {
          duration: 2000,
        });
        this.capituloService.atualizarCapitulos(this.capitulo.relatorio.codigoRelatorio);
      }
      if (result == 2) {
        this.snackBar.open("Erro no upload do capítulo.", "Fechar", {
          duration: 2000,
        });
      }
    });
  }

  get ordenacao() {
    if (this.capitulo) {
      let primeiroNivel: number = Number(this.capitulo.ordenacao.substr(0, 3));
      let segundoNivel: number = Number(this.capitulo.ordenacao.substr(3, 3));
      let terceiroNivel: number = Number(this.capitulo.ordenacao.substr(6, 3));
      let quartoNivel: number = Number(this.capitulo.ordenacao.substr(9, 3));
      if (quartoNivel == 0)
        if (terceiroNivel == 0)
          if (segundoNivel == 0)
            return `${primeiroNivel}`;
          else
            return `${primeiroNivel}.${segundoNivel}`;
        else
          return `${primeiroNivel}.${segundoNivel}.${terceiroNivel}`;
      else
        return `${primeiroNivel}.${segundoNivel}.${terceiroNivel}.${quartoNivel}`;
    }
  }

  travar() {
    this.capituloService.travarCapitulo(this.capitulo.codigoCapitulo);
  }

  destravar() {
    this.capituloService.destravarCapitulo(this.capitulo.codigoCapitulo);
  }

}
