export class BankAccountModel {

  constructor(
      public code: string
    , public name: string
    , public accountNumber: string
    , public cashAmount: number
    , public bankCode: string
    , public bankName: string
    , public accountIPAN?: string) { }

}
