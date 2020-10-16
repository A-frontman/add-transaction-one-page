import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Transaction } from 'src/app/model/transaction';
import { GetTransactions, TransactionStateService } from '../../state-resolver';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  @Select(TransactionStateService.getTransactionList) transactions: Observable<Transaction[]>;

  public constructor(private store: Store) { }

  public ngOnInit() {
    this.store.dispatch(new GetTransactions());
  }

}
