import { Component, OnInit } from '@angular/core';
import { Bank } from '../bank.model';

@Component({
  selector: 'app-banks-list',
  templateUrl: './banks-list.component.html',
  styleUrls: ['./banks-list.component.css']
})
export class BanksListComponent implements OnInit {

  banks: Bank[] = [];
  creating = false;

  constructor() { }

  ngOnInit() {
    this.banks = [
      new Bank('0001', 'AlAhli', '1234', undefined,
       'https://lh3.googleusercontent.com/f5-j7DPz58-qL8tUqrTj50wjaxSImvLalTDjIpOdfQkM9XMh9r_D9IjnvrNyr8QPy9bU'),
      new Bank('0002', 'BAJ', '1235', undefined,
        'http://www.aleqt.com/sites/default/files/rbitem/2018/04/8/810791-1878954177.png'),
      new Bank('0001', 'SAMBA', '1236', undefined,
        'https://pbs.twimg.com/amplify_video_thumb/1121016061149814785/img/btEi3O52INNh96DH.jpg'),
      new Bank('0001', 'AlFransi'
      , '1237', undefined, ''),
    ];
  }

  onNewBanks() {
    this.creating = true;
    setTimeout(() => {
      this.creating = !this.creating;
    }, 9000);
  }

}
