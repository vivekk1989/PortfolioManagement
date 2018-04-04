import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfitLossRoutingModule } from './profit-loss-routing.module';
import { ProfitLossComponent } from './profit-loss.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    ProfitLossRoutingModule,
    PageHeaderModule
  ],
  declarations: [ProfitLossComponent]
})
export class ProfitLossModule { }
