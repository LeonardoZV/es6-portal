import { Injectable, OnDestroy } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject, Subscription} from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment'

import { Capitulo } from './Capitulo';
import { CapituloArquivo } from './CapituloArquivo';

@Injectable({
  providedIn: 'root'
})
export class CapituloService implements OnDestroy {

  private headers = new HttpHeaders();

  private capitulosSubject = new BehaviorSubject<Capitulo[]>(new Array<Capitulo>());
  capitulos = this.capitulosSubject.asObservable();

  private versoesSubject = new BehaviorSubject<CapituloArquivo[]>(new Array<CapituloArquivo>());
  versoes = this.versoesSubject.asObservable();

  constructor(private http: HttpClient) {
    this.headers = this.headers.append('Content-Type', 'application/json');
    this.headers = this.headers.append('Authorization', `Bearer`);
   }

  // obterCapitulos(): Observable<Capitulo[]> {
  //   return this.http.get<Capitulo[]>(`${environment.apiUrl}/capitulos`);
  // }

  atualizarCapitulos(codigoRelatorio: number) {
    this.http.get<Capitulo[]>(`${environment.apiUrl}/capitulos?codigoRelatorio=${codigoRelatorio}`).subscribe((dados: Capitulo[]) => {
      this.capitulosSubject.next(dados);
    });
  }

  // obterCapitulo(codigoCapitulo: number): Observable<Capitulo> {
  //   return this.http.get<Capitulo>(`${environment.apiUrl}/capitulos/${codigoCapitulo}`);
  // }

  criarCapitulo(nomeCapitulo: string, codigoRelatorio: number, codigoTipoCapitulo: number, codigoContentType: number, codigoCapituloPai: number) {
    return new Observable((subscriber) => {
      this.http.post(`${environment.apiUrl}/capitulos`, { nomeCapitulo, relatorio: { codigoRelatorio }, tipoCapitulo: { codigoTipoCapitulo }, contentType: { codigoContentType }, codigoCapituloPai }).subscribe((dados: Capitulo) => {
        const lista = this.capitulosSubject.value;
        lista.push(dados);
        this.capitulosSubject.next(lista);
        subscriber.next(true);
      });
    });
  }

  deletarCapitulo(codigoCapitulo: number) {
    this.http.delete<any>(`${environment.apiUrl}/capitulos/${codigoCapitulo}`).subscribe((dados) => { 
      let lista = this.capitulosSubject.value.filter(function(value, index, arr) {
        return value.codigoCapitulo !== codigoCapitulo;
      });
      this.capitulosSubject.next(lista);
    });
  }

  travarCapitulo(codigoCapitulo: number) {
    return this.http.put(`${environment.apiUrl}/capitulos/${codigoCapitulo}`, { indicadorTrava: 1 }).subscribe((dados: number) => {
      const capitulo = this.capitulosSubject.value.find(c => c.codigoCapitulo === codigoCapitulo);
      if (capitulo) {

      }
    });
  }

  destravarCapitulo(codigoCapitulo: number) {
    return this.http.put(`${environment.apiUrl}/capitulos/${codigoCapitulo}`, { indicadorTrava: 0 }).subscribe((dados: number) => {
      const capitulo = this.capitulosSubject.value.find(c => c.codigoCapitulo === codigoCapitulo);
      if (capitulo) {

      }
    });
  }

  atualizarVersoes(codigoCapitulo: number) {
    this.http.get<CapituloArquivo[]>(`${environment.apiUrl}/capitulos/${codigoCapitulo}/versoes`).subscribe((dados: CapituloArquivo[]) => {
      this.versoesSubject.next(dados);
    });
  }

  criarArquivo(codigoCapitulo: number, comentarioCriacaoArquivo: string, tamanhoArquivo: number, arquivo: string) {
    return this.http.post<number>(`${environment.apiUrl}/capitulos/${codigoCapitulo}/versoes`, { codigoCapitulo, comentarioCriacaoArquivo, tamanhoArquivo, arquivo });
  }

  ngOnDestroy() {

  }

}
