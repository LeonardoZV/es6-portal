import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { MatDialogRef } from '@angular/material';
import { MatSnackBar } from '@angular/material';

import { PeriodoService } from '../../comum/periodo.service'
import { Periodo } from '../../comum/Periodo'

@Component({
  selector: 'app-administracao-periodos-novo-dialog',
  templateUrl: './administracao-periodos-novo-dialog.component.html',
  styleUrls: ['./administracao-periodos-novo-dialog.component.css']
})
export class AdministracaoPeriodosNovoDialogComponent implements OnInit {

  nomePeriodo = new FormControl('');

  constructor(
    public dialogRef: MatDialogRef<AdministracaoPeriodosNovoDialogComponent>,
    private periodoService: PeriodoService,
    private snackBar: MatSnackBar) {}

  ngOnInit() {
  }

  criar(): void {
    this.periodoService.criarPeriodo(this.nomePeriodo.value).subscribe((dados: any) => {
      this.snackBar.open("Período criado!", "Fechar", { duration: 2000 });
      this.dialogRef.close(true);      
    });
  }

  cancelar(): void {
    this.dialogRef.close(false);
  }

}
