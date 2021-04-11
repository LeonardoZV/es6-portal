import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { environment } from '../../environments/environment'

import { Periodo } from './Periodo'
import { Relatorio } from './Relatorio'
import { TipoRelatorio } from './TipoRelatorio'
import { Localidade } from './Localidade'
import { RelatorioArquivo } from './RelatorioArquivo';

@Injectable({
  providedIn: 'root'
})
export class RelatorioService {

  private headers = new HttpHeaders();
  private versoesSubject = new BehaviorSubject<RelatorioArquivo[]>(new Array<RelatorioArquivo>());

  constructor(private http: HttpClient) {
    this.headers = this.headers.append('Content-Type', 'application/json');
    this.headers = this.headers.append('Authorization', `Bearer`);
  }

  obterRelatorios(): Observable<Relatorio[]> {
    return this.http.get<Relatorio[]>(`${environment.apiUrl}/relatorios`);
  }

  obterRelatoriosPorCodigoPeriodo(codigoPeriodo: number): Observable<Relatorio[]> {
    return this.http.get<Relatorio[]>(`${environment.apiUrl}/relatorios?codigoPeriodo=${codigoPeriodo}`);
  }

  obterRelatorio(codigoRelatorio: number): Observable<Relatorio> {
    return this.http.get<Relatorio>(`${environment.apiUrl}/relatorios/${codigoRelatorio}`);
  }

  criarRelatorio(nomeRelatorio: string, codigoPeriodo: number, codigoTipoRelatorio: number, codigoLocalidade: string) {
    const periodo: Periodo = { codigoPeriodo: codigoPeriodo, nomePeriodo: '' }
    const tipoRelatorio: TipoRelatorio = { codigoTipoRelatorio: codigoTipoRelatorio, nomeTipoRelatorio: '' }
    const localidade: Localidade = { codigoLocalidade: codigoLocalidade, nomeLocalidade: '' }
    const indicadorTrava: number = 0;
    return this.http.post<number>(`${environment.apiUrl}/relatorios`, { nomeRelatorio, periodo, tipoRelatorio, localidade, indicadorTrava });
  }

  obterVersoes(): Observable<RelatorioArquivo[]> {
    return this.versoesSubject.asObservable();
  }

  atualizarVersoes(codigoCapitulo: number) {
    this.http.get<RelatorioArquivo[]>(`${environment.apiUrl}/relatorios/${codigoCapitulo}/versoes`).subscribe((value) => {
      this.versoesSubject.next(value);
    });
  }

  gerarRelatorio(codigoRelatorio: number, codigoTemplate: number) {
    return this.http.post<number>(`${environment.apiUrl}/relatorios/${codigoRelatorio}/versoes/${codigoTemplate}`, {});
  }

  travarRelatorio(codigoRelatorio: number) {
    return this.http.patch(`${environment.apiUrl}/relatorios/${codigoRelatorio}`, { indicadorTrava: 1 });
  }

  destravarRelatorio(codigoRelatorio: number) {
    return this.http.patch(`${environment.apiUrl}/relatorios/${codigoRelatorio}`, { indicadorTrava: 0 });
  }

}
