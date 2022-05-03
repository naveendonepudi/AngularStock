import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockRoutingModule } from './stock-routing.module';
import { StockDashboardComponent } from './stock-dashboard/stock-dashboard.component';
import { StockSearchComponent } from './stock-search/stock-search.component';
import { SharedModule } from '../shared-module/shared-module.module';
import { StockDetailComponent } from './stock-detail/stock-detail.component';
import { MaterialComponentsModule } from '../material-components/material-components.module';
import { StockSentimentComponent } from './stock-sentiment/stock-sentiment.component';



@NgModule({
  declarations: [
    StockDashboardComponent,
    StockSearchComponent,
    StockDetailComponent,
    StockSentimentComponent
  ],
  imports: [
    CommonModule,
    StockRoutingModule,
    MaterialComponentsModule,
    SharedModule
  ]
})
export class StockModuleModule { }
