import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'Dashboard' },
            { path: 'Dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'Ledger', loadChildren: './ledger/ledger.module#LedgerModule' },
            { path: 'ProfitLoss', loadChildren: './profit-loss/profit-loss.module#ProfitLossModule' },
            { path: 'CurrentHoldings', loadChildren: './current-holdings/current-holdings.module#CurrentHoldingsModule' },
            { path: 'TradeHistory', loadChildren: './trade-history/trade-history.module#TradeHistoryModule' }/* ,
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' } ,
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' }*/
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
