import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { zip } from 'rxjs/internal/observable/zip';
import { LocalStorageHandlerService } from '../../shared-module/services/local-storage-handler.service';
import { Quote } from '../models/quote';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-stock-search',
  templateUrl: './stock-search.component.html',
  styleUrls: ['./stock-search.component.css']
})
export class StockSearchComponent implements OnInit {
  @Output() updateQuotes = new EventEmitter();
  isLoading: boolean = false;
  myForm!: FormGroup;
  quoteDetails: Quote = {
    CurrentPrice: 0,
    Change: 0,
    PercentChange: 0,
    HighPriceOfTheDay: 0,
    LowPriceOfTheDay: 0,
    OpenPriceOfTheDay: 0,
    PreviousClosePrice: 0,
    StockName: '',
    Symbol: ''
  };
  stocks: any;
  constructor(
    private fb: FormBuilder,
    private stockService: StockService,
    private localStorageService: LocalStorageHandlerService) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      stockSymbol: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(5)]]
    });
  }

  blockSpecialChar(e: KeyboardEvent) {
    var k;
    document.all ? k = e.keyCode : k = e.which;
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
  }

  getStockName() {
    return this.stockService.getStockName(this.myForm.value.stockSymbol);
  }

  getStockDetails() {
    return this.stockService.getStock(this.myForm.value.stockSymbol);
  }

  onSubmit(myForm: FormGroup) {
    if (this.myForm.value.stockSymbol.length > 0 && this.myForm.value.stockSymbol.length < 5) {
      this.isLoading = true;
      const groupedResponse = zip(this.getStockName(), this.getStockDetails());

      groupedResponse.subscribe({
        next: (values) => {
          let nameDetails = values[0];
          let stockDetails = values[1];
          let stockName = nameDetails.result.find((s: { displaySymbol: any; }) => s.displaySymbol == this.myForm.value.stockSymbol).description;
          this.quoteDetails.Change = stockDetails.d;
          this.quoteDetails.CurrentPrice = stockDetails.c;
          this.quoteDetails.HighPriceOfTheDay = stockDetails.h;
          this.quoteDetails.LowPriceOfTheDay = stockDetails.l;
          this.quoteDetails.OpenPriceOfTheDay = stockDetails.o;
          this.quoteDetails.PreviousClosePrice = stockDetails.pc;
          this.quoteDetails.StockName = stockName;
          this.quoteDetails.Symbol = this.myForm.value.stockSymbol;

          this.localStorageService.setItem(this.quoteDetails);

          this.isLoading = false;
          this.myForm.reset();
          this.updateQuotes.emit(true);
        },
        error: (error) => {
          this.isLoading = false;
          alert('There was an error in retrieving data from the server');
        }
      });
    }


  }

}
