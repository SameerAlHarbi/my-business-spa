import { Component, OnInit } from '@angular/core';
import { Bank } from './bank.model';
import { BanksService } from './banks.service';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.css'],
  providers: [BanksService]
})
export class BanksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
