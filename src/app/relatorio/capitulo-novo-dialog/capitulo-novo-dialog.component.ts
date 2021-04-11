import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CapituloService } from 'src/app/comum/capitulo.service';
import { TipoCapituloService } from 'src/app/comum/tipo-capitulo.service';
import { TipoCapitulo } from 'src/app/comum/TipoCapitulo';
import { ContentTypeService } from 'src/app/comum/content-type.service';
import { ContentType } from 'src/app/comum/ContentType';

export interface DialogData {
    codigoRelatorio: number;
    codigoCapitulo: number;
}

@Component({
  selector: 'app-capitulo-novo-dialog',
  templateUrl: './capitulo-novo-dialog.component.html',
  styleUrls: ['./capitulo-novo-dialog.component.css']
})
export class CapituloNovoDialogComponent implements OnInit {

  novoCapituloForm: FormGroup;

  tiposCapitulos: TipoCapitulo[];

  contentTypes: ContentType[];

  constructor(
    public dialogRef: MatDialogRef<CapituloNovoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private capituloService: CapituloService,
    private tipoCapituloService: TipoCapituloService,
    private contentTypeServices: ContentTypeService) {}

  ngOnInit() {
    this.novoCapituloForm = new FormGroup({
      tipoCapitulo: new FormControl(),
      nomeCapitulo: new FormControl(),
      contentType: new FormControl()
    });
    this.tipoCapituloService.obterTiposCapitulos().subscribe((dados: any) => {
      this.tiposCapitulos = dados;
    });
    this.contentTypeServices.obterContentTypes().subscribe((dados: any) => {
      this.contentTypes = dados;
    });
  }

  cancelar() {
    this.dialogRef.close(0);
  }

  criar() {
    this.capituloService.criarCapitulo(
      this.novoCapituloForm.controls['nomeCapitulo'].value,
      this.data.codigoRelatorio,
      this.novoCapituloForm.controls['tipoCapitulo'].value.codigoTipoCapitulo,
      this.novoCapituloForm.controls['contentType'].value.codigoContentType,
      this.data.codigoCapitulo).subscribe((retorno) => {
        this.dialogRef.close(1);
      });
  }

}
