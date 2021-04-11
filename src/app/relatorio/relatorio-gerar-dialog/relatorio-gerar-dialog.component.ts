import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { RelatorioService } from 'src/app/comum/relatorio.service';
import { TemplateService } from 'src/app/comum/template.service';
import { Template } from '../../comum/Template'

export interface DialogData {
  codigoRelatorio: number
}

@Component({
  selector: 'app-relatorio-gerar-dialog',
  templateUrl: './relatorio-gerar-dialog.component.html',
  styleUrls: ['./relatorio-gerar-dialog.component.css']
})
export class RelatorioGerarDialogComponent implements OnInit {

  gerarRelatorioForm: FormGroup;

  templates: Template[];

  gerando: boolean = false;

  constructor(public dialogRef: MatDialogRef<RelatorioGerarDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData, private relatorioService: RelatorioService, private templateService: TemplateService) { }

  ngOnInit() {
    this.gerarRelatorioForm = new FormGroup({
      template: new FormControl('', Validators.required)
    });
    this.templateService.obterTemplates().subscribe((dados: any) => {
      this.templates = dados;
    });
  }

  cancelar(): void {
    this.dialogRef.close(0);
  }

  gerar() {
    this.gerando = true;
    this.relatorioService.gerarRelatorio(this.data.codigoRelatorio, this.gerarRelatorioForm.controls['template'].value.codigoTemplate).subscribe((dados: any) => {
      this.gerando = false;
      this.dialogRef.close(1);
    });
  }

}
