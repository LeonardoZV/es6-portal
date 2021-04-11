import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MatDialogRef } from '@angular/material';
import { MatSnackBar } from '@angular/material';

import { PeriodoService } from '../../comum/periodo.service'
import { Periodo } from '../../comum/Periodo'
import { TipoRelatorioService } from 'src/app/comum/tipo-relatorio.service';
import { TipoRelatorio } from 'src/app/comum/TipoRelatorio';
import { LocalidadeService } from 'src/app/comum/localidade.service';
import { Localidade } from 'src/app/comum/Localidade';
import { RelatorioService } from 'src/app/comum/relatorio.service';

@Component({
  selector: 'app-administracao-relatorios-novo-dialog',
  templateUrl: './administracao-relatorios-novo-dialog.component.html',
  styleUrls: ['./administracao-relatorios-novo-dialog.component.css']
})
export class AdministracaoRelatoriosNovoDialogComponent implements OnInit {

  relatorioForm: FormGroup;

  periodos: Periodo[];
  tiposRelatorios: TipoRelatorio[];
  localidades: Localidade[];

  constructor(
    public dialogRef: MatDialogRef<AdministracaoRelatoriosNovoDialogComponent>,
    private periodoService: PeriodoService,
    private tipoRelatorioService: TipoRelatorioService,
    private localidadeService: LocalidadeService,
    private relatorioService: RelatorioService,
    private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.relatorioForm = new FormGroup({
      nomeRelatorio: new FormControl(),
      periodo: new FormControl(),
      tipoRelatorio: new FormControl(),
      localidade: new FormControl()
    });
    this.carregarPeriodos();
    this.carregarTiposRelatorios();
    this.carregarLocalidades();
  }

  carregarPeriodos() {
    this.periodoService.obterPeriodos().subscribe((dados: Periodo[]) => {
      this.periodos = dados;
    });
  }

  carregarTiposRelatorios() {
    this.tipoRelatorioService.obterTiposRelatorios().subscribe((dados: TipoRelatorio[]) => {
      this.tiposRelatorios = dados;
    });
  }

  carregarLocalidades() {
    this.localidadeService.obterLocalidades().subscribe((dados: Localidade[]) => {
      this.localidades = dados;
    });
  }

  criar() {
    this.relatorioService.criarRelatorio(this.relatorioForm.controls['nomeRelatorio'].value, this.relatorioForm.controls['periodo'].value, this.relatorioForm.controls['tipoRelatorio'].value, this.relatorioForm.controls['localidade'].value).subscribe((dados: any) => {
      this.snackBar.open("Relatório criado!", "Fechar", { duration: 2000 });
      this.dialogRef.close(true);
    });
  }

  cancelar(): void {
    this.dialogRef.close(false);
  }

}
