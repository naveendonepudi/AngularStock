import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockDashboardComponent } from './stock-dashboard/stock-dashboard.component';
import { StockSentimentComponent } from './stock-sentiment/stock-sentiment.component';

const routes: Routes = [
    { path: '', component: StockDashboardComponent },
    { path: 'sentiment/:id', component: StockSentimentComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StockRoutingModule { }