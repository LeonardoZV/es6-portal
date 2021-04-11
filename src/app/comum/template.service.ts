import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment'

import { Template } from './Template'

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  private headers = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.headers = this.headers.append('Content-Type', 'application/json');
    this.headers = this.headers.append('Authorization', `Bearer`);
   }

  obterTemplates(): Observable<Template[]> {
    return this.http.get<Template[]>(`${environment.apiUrl}/templates`);
  }

  obterTemplate(codigoTemplate: number): Observable<Template> {
    return this.http.get<Template>(`${environment.apiUrl}/templates/${codigoTemplate}`);
  }

  criarTemplate(nomeTemplate: string, tamanhoArquivo: number, arquivo: string) {
    return this.http.post<number>(`${environment.apiUrl}/templates`, { nomeTemplate, tamanhoArquivo, arquivo });
  }

}
