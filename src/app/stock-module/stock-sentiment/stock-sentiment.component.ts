import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sentiment } from '../models/sentiment';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-stock-sentiment',
  templateUrl: './stock-sentiment.component.html',
  styleUrls: ['./stock-sentiment.component.css']
})
export class StockSentimentComponent implements OnInit {
  symbol!: string;
  isLoading: boolean = false;
  stockSentimentDetails: any[] = [];
  imgUpArrowPath = "../../../assets/images/up-arrow.png";
  imgDownArrowPath = "../../../assets/images/down-arrow.png";
  monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  sentiment: Sentiment = {
    Symbol: '',
    Month: 0,
    Change: 0,
    MSPR: 0
  };
  stocks: any;
  stockName: any;
  constructor(private route: ActivatedRoute, private stockService: StockService) {
    var stockList = localStorage.getItem('stockList');
    if (stockList) {
      this.stocks = JSON.parse(stockList);
    }
   }

  ngOnInit(): void {
    this.isLoading = true;
    debugger;
    this.route.params.subscribe(params => {
      this.symbol = params['id'];
      this.stockName = this.stocks.find((x: { Symbol: string; }) => x.Symbol === this.symbol).StockName;
      this.fetchStockSentiment();
    });
  }


  private fetchStockSentiment() {
    this.isLoading = true;
    let toDate = new Date();
    let fromDate = new Date();
    fromDate.setDate(toDate.getDate() - 90);
    var fromDateString = new Date(fromDate.getTime() - (fromDate.getTimezoneOffset() * 60000))
      .toISOString()
      .split("T")[0];
    var toDateString = new Date(toDate.getTime() - (toDate.getTimezoneOffset() * 60000))
      .toISOString()
      .split("T")[0];
    this.stockService.getStockSentiment(this.symbol, fromDateString, toDateString).subscribe((response: any) => {
      response.data.map((item: { month: number; mspr: number; change: number; symbol: string; }) => {
        this.sentiment.Month = item.month;
        this.sentiment.MSPR = item.mspr;
        this.sentiment.Change = item.change;
        this.sentiment.Symbol = item.symbol;

        this.stockSentimentDetails.push(this.sentiment);
      });
      this.stockSentimentDetails = response.data;
      this.isLoading = false;
    });
  }

  getMonthName(monthNumber: number) {
    return this.monthNames[monthNumber - 1];
  }
}
