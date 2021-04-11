import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MatDialogRef } from '@angular/material';

import { TemplateService } from '../../comum/template.service';

@Component({
  selector: 'app-administracao-templates-novo-dialog',
  templateUrl: './administracao-templates-novo-dialog.component.html',
  styleUrls: ['./administracao-templates-novo-dialog.component.css']
})
export class AdministracaoTemplatesNovoDialogComponent implements OnInit {

  uploadForm: FormGroup;

  file: File;

  uploading: boolean = false;
  

  constructor(public dialogRef: MatDialogRef<AdministracaoTemplatesNovoDialogComponent>, private templateService: TemplateService) {}

  ngOnInit() {
    this.uploadForm = new FormGroup({
      nomeTemplate: new FormControl('')
    });
  }

  cancelar(): void {
    this.dialogRef.close(0);
  }

  fileInputChange(fileInputEvent: any) {
    this.file = fileInputEvent.target.files[0];    
  }

  criar() {

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

      this.templateService.criarTemplate(this.uploadForm.controls['nomeTemplate'].value, this.file.size, arquivo).subscribe((dados: number) => {
        this.uploading = false;
        this.dialogRef.close(1);
      });

    });   

 }

}
