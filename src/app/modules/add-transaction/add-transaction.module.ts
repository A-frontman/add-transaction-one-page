import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionFormComponent } from './form/transaction-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TransactionFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [TransactionFormComponent]
})
export class AddTransactionModule { }
