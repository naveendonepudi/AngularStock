import { Component, OnInit } from '@angular/core';
import { Quote } from '../models/quote';

@Component({
  selector: 'app-stock-dashboard',
  templateUrl: './stock-dashboard.component.html',
  styleUrls: ['./stock-dashboard.component.css']
})
export class StockDashboardComponent implements OnInit {
  stocks = [];
  constructor() { }

  ngOnInit(): void {
    this.refreshStocksList();
  }

  private refreshStocksList() {
    var stockList = localStorage.getItem('stockList');
    if (stockList) {
      this.stocks = JSON.parse(stockList);
    }
  }

  updatedQuoteDetails(isUpdate: boolean){
    if(isUpdate){
      this.refreshStocksList();
    }
  }

}
