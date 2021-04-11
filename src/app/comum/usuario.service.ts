import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment'

import { Usuario } from './Usuario'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private headers = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.headers = this.headers.append('Content-Type', 'application/json');
    this.headers = this.headers.append('Authorization', `Bearer`);
   }

  obterUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${environment.apiUrl}/usuarios`);
  }

  obterUsuario(funcional: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${environment.apiUrl}/usuarios/${funcional}`);
  }

  cadastrarUsuario(funcional: string, nome: string, email: string) {
    return this.http.post<number>(`${environment.apiUrl}/usuarios`, { funcional, nome, email });
  }

}
