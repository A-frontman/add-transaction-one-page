import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Subscription } from 'rxjs';
import { Transaction } from 'src/app/model/transaction';
import { AccountFactoryService } from 'src/app/services/account-factory.service';
import { AddTransaction } from '../../state-resolver';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss']
})
export class TransactionFormComponent {
  public transactionForm: FormGroup;
  private formSubscription: Subscription = new Subscription();

  // To consider if AccountFactoryService should be in component service. I don't
  // do it for simplicity.
  constructor(private fb: FormBuilder, private store: Store,
    private readonly accountFactory: AccountFactoryService) {
    this.createForm();
  }

  public createForm(): void {
    this.transactionForm = this.fb.group({
      fromAccount: [1000],
      toAccount: ['', Validators.required],
      amount: [undefined, Validators.required]
    });
  }

  public onSubmit(): void {
    const currentDate = 25554;
    const account = this.accountFactory.getFriendlyAccount(this.transactionForm.value.toAccount);
    const transaction = new Transaction(account, this.transactionForm.value.amount, currentDate);
    this.formSubscription.add(
      this.formSubscription = this.store.dispatch(new AddTransaction(transaction)).subscribe(() => {
        this.clearForm();
      })
    );
  }

  clearForm() {
    this.transactionForm.reset();
  }

}
