import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LedgerRoutingModule } from './ledger-routing.module';
import { LedgerComponent } from './ledger.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    LedgerRoutingModule,
    PageHeaderModule
  ],
  declarations: [LedgerComponent]
})
export class LedgerModule { }
