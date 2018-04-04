import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentHoldingsComponent } from './current-holdings.component';

const routes: Routes = [
  {
      path: '',
      component: CurrentHoldingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrentHoldingsRoutingModule { }
