import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionFormComponent } from './form/transaction-form.component';

@NgModule({
  declarations: [TransactionFormComponent],
  imports: [
    CommonModule
  ],
  exports: [TransactionFormComponent]
})
export class AddTransactionModule { }
