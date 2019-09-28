import { Component, OnInit, OnDestroy } from '@angular/core';
import { Bank } from '../bank.model';
import { BanksService } from '../banks.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-banks-list',
  templateUrl: './banks-list.component.html',
  styleUrls: ['./banks-list.component.css']
})
export class BanksListComponent implements OnInit , OnDestroy {

  banks: Bank[] = [];
  creating = false;
  subscription: Subscription;

  constructor( private banksService: BanksService
             , private router: Router
             , private route: ActivatedRoute) {

   }

  ngOnInit() {
    this.banks = this.banksService.getBanks();
    this.subscription = this.banksService.banksChanged.subscribe(
      (banksList: Bank[]) => {
        this.banks = banksList;
      }
    );
  }

  onNewBanks() {
    this.creating = true;
    setTimeout(() => {
      this.router.navigate(['new'], {relativeTo: this.route});
      this.creating = !this.creating;
    }, 9000);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
