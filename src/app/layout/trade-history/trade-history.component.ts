import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { DataTableDirective } from 'angular-datatables';

import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

class TradeHistory {
  date: string;
  details: string;
  credit: string;
  debit: string;
  balance: string;
}

@Component({
  selector: 'app-trade-history',
  templateUrl: './trade-history.component.html',
  styleUrls: ['./trade-history.component.scss'],
  animations: [routerTransition()]
})
export class TradeHistoryComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  tradeHistories: TradeHistory[] = [];

  // We use this trigger because fetching the list of tradeHistory can be quite long,
  // thus we ensure the data is fetched before rendering
   dtTrigger: Subject<any> = new Subject();

  constructor(private http: Http) { }

  ngOnInit() {
    const that = this;

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      ordering: false
    };
     this.http.get('http://localhost:8088/PortfolioManagement/api/tradeHistory/')
       .map(this.extractData)
      .subscribe(th => {
        this.tradeHistories = th;
       // Calling the DT trigger to manually render the table
         this.dtTrigger.next();
       },
     error => {this.dtTrigger.next();});
  }

   private extractData(res: Response) {
     const body = res.json();
     return body || {};
   }

}
