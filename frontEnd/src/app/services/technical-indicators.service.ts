import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';


const baseUrl = 'http://localhost:4000/api/MACD';
const baseUrl2 = 'http://localhost:4000/api/EMA50';
const baseUrl3 = 'http://localhost:4000/api/SMA50';
const baseUrl4 = 'http://localhost:4000/api/RSI';
const baseUrl5 = 'http://localhost:4000/api/STOCH';
const baseUrl6 = 'http://localhost:4000/api/BB';
const baseUrl7 = 'http://localhost:4000/api/predict';


 

@Injectable({
  providedIn: 'root'
})
export class TechnicalIndicatorsService {


  constructor(private http: HttpClient) { }

  getMACD(code: string, dateFrom: string): Observable<any> {
    return this.http.get<any>(`${baseUrl}/${code}/${dateFrom}`);
  }
  
  getEMA50(code: string, dateFrom: string): Observable<any> {
    return this.http.get<any>(`${baseUrl2}/${code}/${dateFrom}`);
  }
  
  getSMA50(code: string, dateFrom: string): Observable<any> {
    return this.http.get<any>(`${baseUrl3}/${code}/${dateFrom}`);
  }
  
  getRSI(code: string, dateFrom: string): Observable<any> {
    return this.http.get<any>(`${baseUrl4}/${code}/${dateFrom}`);
  }
  
  getSTOCH(code: string, dateFrom: string): Observable<any> {
    return this.http.get<any>(`${baseUrl5}/${code}/${dateFrom}`);
  }
  
  getBB(code: string, dateFrom: string): Observable<any> {
    return this.http.get<any>(`${baseUrl6}/${code}/${dateFrom}`);
  }
  
  getPredictions(code: string, dateFrom: string): Observable<any> {
    return this.http.get<any>(`${baseUrl7}/${code}/${dateFrom}`);
  }
  
}
