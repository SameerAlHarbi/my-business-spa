import { BankAccountModel } from './bank-account.model';

export class Bank {
    constructor(public code: string
              , public name: string
              , public bankAccounts: BankAccountModel[]
              , public imagePath?: string) {
    }
}
