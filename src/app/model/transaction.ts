import { BankAccount } from './bank-account';
import { TransactionType } from './transaction-type.enum';

export class Transaction {
    public constructor(
        private readonly _account: BankAccount,
        private readonly _amount: number,
        private readonly _date: number,
        private readonly _type = TransactionType.OnlineTransfer
    ) {}
    
    public get account(): BankAccount {
        return this._account;
    }
    
    public get amount(): number {
        return this._amount;
    }
    
    public get date(): number {
        return this._date;
    }
    
    public get type(): TransactionType {
        return this._type;
    }
}