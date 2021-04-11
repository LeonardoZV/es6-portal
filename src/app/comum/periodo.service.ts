import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment'

import { Periodo } from './Periodo'

@Injectable({
  providedIn: 'root'
})
export class PeriodoService {

  private headers = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.headers = this.headers.append('Content-Type', 'application/json');
    this.headers = this.headers.append('Authorization', `Bearer`);
   }

  obterPeriodos(): Observable<Periodo[]> {
    return this.http.get<Periodo[]>(`${environment.apiUrl}/periodos`);
  }

  obterPeriodo(codigoPeriodo: number): Observable<Periodo> {
    return this.http.get<Periodo>(`${environment.apiUrl}/periodos/${codigoPeriodo}`);
  }

  criarPeriodo(nomePeriodo: string) {
    return this.http.post<number>(`${environment.apiUrl}/periodos`, { nomePeriodo });
  }

}
