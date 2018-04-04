import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LedgerComponent } from './ledger.component';

const routes: Routes = [
  {
      path: '',
      component: LedgerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LedgerRoutingModule { }
