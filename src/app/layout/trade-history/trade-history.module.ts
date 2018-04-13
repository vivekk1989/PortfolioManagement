import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TradeHistoryRoutingModule } from './trade-history-routing.module';
import { TradeHistoryComponent } from './trade-history.component';
import { PageHeaderModule } from '../../shared';

import { DataTablesModule } from 'angular-datatables';

@NgModule({
  imports: [
    CommonModule,
    TradeHistoryRoutingModule,
    PageHeaderModule,
    DataTablesModule
  ],
  declarations: [TradeHistoryComponent]
})
export class TradeHistoryModule { }
