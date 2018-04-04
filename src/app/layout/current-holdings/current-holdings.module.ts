import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrentHoldingsRoutingModule } from './current-holdings-routing.module';
import { CurrentHoldingsComponent } from './current-holdings.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    CurrentHoldingsRoutingModule,
    PageHeaderModule
  ],
  declarations: [CurrentHoldingsComponent]
})
export class CurrentHoldingsModule { }
