import { Injectable } from '@angular/core';
import {bank} from './bank.model';

@Injectable({
  providedIn: 'root'
})
export class BanksService {

  bank: bank[] = [];

  constructor() { }
}
