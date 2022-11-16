import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SearchResponse} from './response/response.module';


@Injectable({
  providedIn: 'root'
})
export class WebSearchService {

  constructor(private http: HttpClient) { }
  search(q: string, pageSize: number): Observable<SearchResponse> {
    return this.http.get<SearchResponse>('https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI', {
      headers: new HttpHeaders()
        .set('X-RapidAPI-Key', '3aec8b01b5mshc066a393136b7bfp1e661cjsnadde8ab9a568')
        .set('X-RapidAPI-Host', 'contextualwebsearch-websearch-v1.p.rapidapi.com'),
      params: new HttpParams()
        .set('q', q)
        .set('pageNumber', '1')
        .set('pageSize', `${pageSize}`)
        .set('autoCorrect', 'false')
        .set('safeSearch', 'false')
    });
  }
}
