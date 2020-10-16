import { Transaction } from 'src/app/model/transaction';


export class AddTransaction {
    static readonly type = '[Todo] GetAll';

    public constructor(public payload: Transaction) {}
}

