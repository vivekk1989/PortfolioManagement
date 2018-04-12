import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LedgerRoutingModule } from './ledger-routing.module';
import { LedgerComponent } from './ledger.component';
import { PageHeaderModule } from '../../shared';

import { DataTablesModule } from 'angular-datatables';

@NgModule({
  imports: [
    CommonModule,
    LedgerRoutingModule,
    PageHeaderModule,
    DataTablesModule
  ],
  declarations: [LedgerComponent]
})
export class LedgerModule { }
