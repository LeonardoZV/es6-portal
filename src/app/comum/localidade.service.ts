import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment'

import { Localidade } from './Localidade'

@Injectable({
  providedIn: 'root'
})
export class LocalidadeService {

  private headers = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.headers = this.headers.append('Content-Type', 'application/json');
    this.headers = this.headers.append('Authorization', `Bearer`);
   }

  obterLocalidades(): Observable<Localidade[]> {
    return this.http.get<Localidade[]>(`${environment.apiUrl}/localidades`);
  }

  obterLocalidade(codigoLocalidade: string): Observable<Localidade> {
    return this.http.get<Localidade>(`${environment.apiUrl}/localidades/${codigoLocalidade}`);
  }

}
