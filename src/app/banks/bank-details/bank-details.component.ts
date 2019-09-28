import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Bank } from '../bank.model';
import { BanksService } from '../banks.service';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit , OnDestroy{

  bank: Bank;
  paramsSubscription: Subscription;

  constructor(private banksService: BanksService
            , private router: Router
            , private route: ActivatedRoute) { }

  ngOnInit() {
    const bankCode = this.route.snapshot.params.code;
    this.bank = this.banksService.getBankByCode(bankCode);
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.bank = this.banksService.getBankByCode(params.code);
      });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

  onEdit() {
    // this.router.navigate(['edit'], {relativeTo: this.route , queryParams: {allowEdit: 'true'}});
    this.router.navigate(['edit'], {relativeTo: this.route , queryParamsHandling: 'preserve'});
  }

}
