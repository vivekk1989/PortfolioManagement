import { Component, OnInit} from '@angular/core';
import { routerTransition } from '../../router.animations';
import { DataTableDirective } from 'angular-datatables';

import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

class Ledger {
  date: string;
  details: string;
  credit: string;
  debit: string;
  balance: string;
}

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.scss'],
  animations: [routerTransition()]
})
export class LedgerComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  ledgers: Ledger[] = [];

  // We use this trigger because fetching the list of ledgers can be quite long,
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
     this.http.get('http://localhost:8088/PortfolioManagement/api/ledger/')
       .map(this.extractData)
      .subscribe(l => {
        this.ledgers = l;
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
