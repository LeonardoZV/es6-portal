import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CapituloService } from 'src/app/comum/capitulo.service';

export interface DialogData {
  codigoCapitulo: number
}

@Component({
  selector: 'app-capitulo-upload-dialog',
  templateUrl: './capitulo-upload-dialog.component.html',
  styleUrls: ['./capitulo-upload-dialog.component.css']
})
export class CapituloUploadDialogComponent implements OnInit {

  uploadForm: FormGroup;
  
  file: File;

  uploading: boolean = false;

  constructor(public dialogRef: MatDialogRef<CapituloUploadDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData, private capituloService: CapituloService) {}

  ngOnInit() {
    this.uploadForm = new FormGroup({
      comentario: new FormControl()
    });
  }

  cancelar(): void {
    this.dialogRef.close(0);
  }

  fileInputChange(fileInputEvent: any) {
    this.file = fileInputEvent.target.files[0];    
  }

  upload() {

    this.uploading = true;

    const _this = this; 

    var promise = new Promise((resolve) => {
      
      var reader: FileReader = new FileReader();    
      
      reader.onloadend = function (e) {
        var arrayBuffer = reader.result as ArrayBuffer;
        var bytes = new Uint8Array(arrayBuffer);
        resolve(bytes);
      }
      
      reader.readAsArrayBuffer(_this.file);

    });

    promise.then((data: Uint8Array) => {

      var arquivo = btoa(data.reduce(function (data, byte) {
        return data + String.fromCharCode(byte);
      }, ''));

      this.capituloService.criarArquivo(this.data.codigoCapitulo, this.uploadForm.controls['comentario'].value, this.file.size, arquivo).subscribe((dados: number) => {
        this.uploading = false;
        this.dialogRef.close(1);
      });

    });   
    
  }
 
}
