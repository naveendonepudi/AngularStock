import { Injectable } from '@angular/core';
import { Quote } from '../../stock-module/models/quote';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageHandlerService {
  stocks: any;

  constructor() { }

  setItem(quote: Quote) {
    let stockList = localStorage.getItem('stockList');
    if (stockList) {
      this.stocks = JSON.parse(stockList);
    } else {
      this.stocks = [];
    }
    this.stocks.push(quote);
    localStorage.setItem('stockList', JSON.stringify(this.stocks));
  }

  removeItem(key: string) {
    this.stocks = localStorage.getItem('stockList');
    let stocksList = JSON.parse(this.stocks);
    var stock = stocksList.find((x: { Symbol: string; }) => x.Symbol === key);
    stocksList.splice(stocksList.indexOf(stock), 1);
    localStorage.setItem('stockList', JSON.stringify(stocksList));
  }
}
