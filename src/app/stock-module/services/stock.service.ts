import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  baseUrl: string = 'https://finnhub.io/api/v1/';
  constructor(private http: HttpClient) { }

  getStock(stockSymbol: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}quote?symbol=${stockSymbol}`);
  }

  getStockName(stockSymbol: string) : Observable<any> {
    return this.http.get<any>(`${this.baseUrl}search?q=${stockSymbol}`);
  }

  getStockSentiment(symbol: string, startDate: string, endDate: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}stock/insider-sentiment?symbol=${symbol}&from=${startDate}&to=${endDate}`);
  }

}
