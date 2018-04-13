import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Trade } from "../trade";
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

import {NgbDateAdapter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { NgbDateNativeAdapter } from '../../../shared/services/ngbDateNativeAdapter';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]
})

export class HeaderComponent implements OnInit {
    pushRightClass: string = 'push-right';
    closeResult: string;

    modalReference: NgbModalRef;
    trade = new Trade();
    stocks: string[] = [];
    

    constructor(private translate: TranslateService, public router: Router, private modalService: NgbModal, private http: Http) {

        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });

    }

    ngOnInit() {
       // this.stocks = ['SUZLON', 'PNB', 'RELIANCE'];
        this.http.get('http://localhost:8088/PortfolioManagement/api/stocks/')
            .map(this.extractData)
            .subscribe(th => {
                this.stocks = th;
                console.log(this.stocks);
            },
            error => {
                console.log(error);
            }
        );
    }

    private extractData(res: Response) {
        const body = res.json();
        return body || {};
      }

    get diagnostic() { return JSON.stringify(this.trade); }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }

    changeLang(language: string) {
        this.translate.use(language);
    } 

    open(content) {
        this.modalReference = this.modalService.open(content, { size: 'lg',  centered: true});
        this.modalReference.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
            console.log(this.closeResult);
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            console.log(this.closeResult);
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }

    save(result: string){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        this.http.post('http://localhost:8088/PortfolioManagement/api/trade/', this.trade, options).subscribe(res => {
            if(res.status == 200){
                this.trade.clearAllData();
                this.modalReference.close(result);
                alert("Saved Successfully");
                window.location.reload();
            }else{
                alert("Error Status not 200: Check console for more information.");
                console.log(res);
            }
        },
          err => {
            alert("Error occured: Check console for more information.");
            console.log("Error occured: " + err);
          });      
    }
}
