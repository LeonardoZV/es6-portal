import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material';

import { AdministracaoTemplatesNovoDialogComponent } from '../administracao-templates-novo-dialog/administracao-templates-novo-dialog.component'

import { TemplateService } from '../../comum/template.service'
import { Template } from '../../comum/Template'

@Component({
  selector: 'app-administracao-templates',
  templateUrl: './administracao-templates.component.html',
  styleUrls: ['./administracao-templates.component.css']
})
export class AdministracaoTemplatesComponent implements OnInit {

  displayedColumns = ['nomeTemplate', 'tamanhoArquivo'];
  dataSource: Template[];
  carregando: boolean = true;

  constructor(public dialog: MatDialog, private templateService: TemplateService) { }

  ngOnInit() {
    this.carregarTemplates();
  }

  carregarTemplates() {
    this.templateService.obterTemplates().subscribe((dados: Template[]) => {
      this.dataSource = dados;
      this.carregando = false;
    });
  }

  exibirNovoTemplateDialog(): void {
    const dialogRef = this.dialog.open(AdministracaoTemplatesNovoDialogComponent, {
      width: '400px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result == true) {
        this.carregarTemplates();
      }
    });
  }

}
