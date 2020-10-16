import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddTransaction } from './actions/addTransaction';
import { GetTransactions } from './actions/getTransactions';
import { Transaction } from './model/transaction';
import { TransactionState } from './states/transaction.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Select(TransactionState.getTransactionList) transactions: Observable<Transaction[]>;

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.store.dispatch(new GetTransactions());
  }

  public addTransaction(): void {
    this.store.dispatch(new AddTransaction(new Transaction('MOJA TRANs')));
  }
}
