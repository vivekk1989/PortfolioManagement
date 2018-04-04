import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.scss'],
  animations: [routerTransition()]
})
export class LedgerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
