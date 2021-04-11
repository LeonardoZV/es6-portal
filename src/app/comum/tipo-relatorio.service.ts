import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment'

import { TipoRelatorio } from './TipoRelatorio'

@Injectable({
  providedIn: 'root'
})
export class TipoRelatorioService {

  private headers = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.headers = this.headers.append('Content-Type', 'application/json');
    this.headers = this.headers.append('Authorization', `Bearer`);
  }

  obterTiposRelatorios(): Observable<TipoRelatorio[]> {
    return this.http.get<TipoRelatorio[]>(`${environment.apiUrl}/tiposrelatorios`);
  }

  obterTipoRelatorio(codigoTipoRelatorio: number): Observable<TipoRelatorio> {
    return this.http.get<TipoRelatorio>(`${environment.apiUrl}/tiposrelatorios/${codigoTipoRelatorio}`);
  }

}
