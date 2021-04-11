import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment'

import { ContentType } from './ContentType'

@Injectable({
  providedIn: 'root'
})
export class ContentTypeService {

  private headers = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.headers = this.headers.append('Content-Type', 'application/json');
    this.headers = this.headers.append('Authorization', `Bearer`);
   }

  obterContentTypes(): Observable<ContentType[]> {
    return this.http.get<ContentType[]>(`${environment.apiUrl}/contenttypes`);
  }

  obterContentType(codigoContentType: number): Observable<ContentType> {
    return this.http.get<ContentType>(`${environment.apiUrl}/contenttypes/${codigoContentType}`);
  }

}
