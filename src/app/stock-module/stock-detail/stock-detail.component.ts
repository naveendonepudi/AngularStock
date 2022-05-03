import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LocalStorageHandlerService } from 'src/app/shared-module/services/local-storage-handler.service';
import { Quote } from '../models/quote';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.css']
})
export class StockDetailComponent implements OnInit {
  @Input() stock!: Quote;
  @Output() updateQuotes = new EventEmitter();
  imgDownArrowPath!: string;
  imgUpArrowPath!: string;
  constructor(private localStorageHandler: LocalStorageHandlerService) {
    this.imgDownArrowPath = 'assets/images/down-arrow.png';
    this.imgUpArrowPath = 'assets/images/up-arrow.png';
   }

  ngOnInit(): void {
  }

  removeStockFromList(){
    this.localStorageHandler.removeItem(this.stock.Symbol);
    this.updateQuotes.emit(true);
  }

}
