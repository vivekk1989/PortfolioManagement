import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TradeHistoryRoutingModule } from './trade-history-routing.module';
import { TradeHistoryComponent } from './trade-history.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    TradeHistoryRoutingModule,
    PageHeaderModule
  ],
  declarations: [TradeHistoryComponent]
})
export class TradeHistoryModule { }
