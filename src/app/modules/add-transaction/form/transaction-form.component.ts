import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Transaction } from 'src/app/model/transaction';
import { AddTransaction } from 'src/app/modules/state-resolver';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss']
})
export class TransactionFormComponent {

  public constructor(private store: Store) { }

  public addTransaction(): void {
    this.store.dispatch(new AddTransaction(new Transaction('MOJA TRANs')));
  }

}
