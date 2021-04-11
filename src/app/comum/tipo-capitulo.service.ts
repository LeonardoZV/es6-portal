import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment'

import { TipoCapitulo } from './TipoCapitulo'

@Injectable({
  providedIn: 'root'
})
export class TipoCapituloService {

  private headers = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.headers = this.headers.append('Content-Type', 'application/json');
    this.headers = this.headers.append('Authorization', `Bearer`);
  }

  obterTiposCapitulos(): Observable<TipoCapitulo[]> {
    return this.http.get<TipoCapitulo[]>(`${environment.apiUrl}/tiposcapitulos`);
  }

  obterTipoCapitulo(codigoTipoCapitulo: number): Observable<TipoCapitulo> {
    return this.http.get<TipoCapitulo>(`${environment.apiUrl}/tiposcapitulos/${codigoTipoCapitulo}`);
  }

}
