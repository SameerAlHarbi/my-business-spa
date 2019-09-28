import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BanksService } from '../banks.service';

@Component({
  selector: 'app-bank-edit',
  templateUrl: './bank-edit.component.html',
  styleUrls: ['./bank-edit.component.css']
})
export class BankEditComponent implements OnInit {

  bankId: number;
  allowEdit = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.bankId = +this.route.snapshot.params.id;
    this.route.params.subscribe(
      (params: Params) => {
        this.bankId = params.id;
      }
    );

    this.route.queryParams.subscribe(
      (qParams: Params) => {
        this.allowEdit = qParams['allowEdit'];
      }
    );

    if (!this.bankId) {
      this.bankId  = 0;
    }
  }

}
