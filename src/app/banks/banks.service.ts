import { Bank } from './bank.model';
import { EventEmitter } from '@angular/core';


export class BanksService {

  banksChanged = new EventEmitter<Bank[]>();

  private banksList: Bank[] = [
    new Bank('0001', 'AlAhli', '1234', undefined,
     'https://lh3.googleusercontent.com/f5-j7DPz58-qL8tUqrTj50wjaxSImvLalTDjIpOdfQkM9XMh9r_D9IjnvrNyr8QPy9bU'),
    new Bank('0002', 'BAJ', '1235', undefined,
      'http://www.aleqt.com/sites/default/files/rbitem/2018/04/8/810791-1878954177.png'),
    new Bank('0001', 'SAMBA', '1236', undefined,
      'https://pbs.twimg.com/amplify_video_thumb/1121016061149814785/img/btEi3O52INNh96DH.jpg'),
    new Bank('0001', 'AlFransi'
    , '1237', undefined, ''),
  ];

  getBanks() {
    return this.banksList.slice();
  }

  addBank(newBank: Bank) {
    this.banksList.push(newBank);
    this.banksChanged.emit(this.banksList.slice());
  }

}
