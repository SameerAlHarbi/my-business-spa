import { Component, OnInit } from '@angular/core';
import { Bank } from '../bank.model';
import { BanksService } from '../banks.service';

@Component({
  selector: 'app-banks-list',
  templateUrl: './banks-list.component.html',
  styleUrls: ['./banks-list.component.css']
})
export class BanksListComponent implements OnInit {

  banks: Bank[] = [];
  creating = false;

  constructor(private banksService: BanksService) {

   }

  ngOnInit() {
    this.banks = this.banksService.getBanks();
    this.banksService.banksChanged.subscribe(
      (banksList: Bank[]) => {
        this.banks = banksList;
      }
    );
  }

  onNewBanks() {
    this.creating = true;
    setTimeout(() => {
      this.creating = !this.creating;
    }, 9000);
  }

}
