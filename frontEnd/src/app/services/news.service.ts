import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


const baseUrl = 'http://localhost:4000/api/news/';
const baseUrl2 = 'http://localhost:4000/api/companyNews';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNews(): Observable<any> {
    return this.http.get<any>(baseUrl);
  }

  getCompanyNews(code: string, dateFrom: string): Observable<any> {
    return this.http.get<any>(`${baseUrl2}/${code}/${dateFrom}`);
  }
}