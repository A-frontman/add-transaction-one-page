import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionListComponent } from './list/transaction-list.component';

@NgModule({
  declarations: [TransactionListComponent],
  imports: [
    CommonModule
  ],
  exports: [TransactionListComponent]
})
export class ShowTransactionsModule { }
