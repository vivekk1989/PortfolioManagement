import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TradeHistoryComponent } from './trade-history.component';

const routes: Routes = [
  {
      path: '',
      component: TradeHistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TradeHistoryRoutingModule { }
