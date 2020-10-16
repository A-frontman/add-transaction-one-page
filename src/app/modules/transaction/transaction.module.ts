import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionFormComponent, TransactionListComponent } from '.';

@NgModule({
  declarations: [TransactionListComponent, TransactionFormComponent],
  imports: [
    CommonModule
  ],
  exports: [TransactionListComponent, TransactionFormComponent]
})
export class TransactionModule { }
