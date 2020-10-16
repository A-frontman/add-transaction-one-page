import { GetTransactions } from '../actions/getTransactions';
import { Transaction } from '../model/transaction';
import { TransactionService } from '../transaction-service';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { AddTransaction } from '../actions/addTransaction';

export class TransactionStateModel {
    Transactions: Transaction[];
}

@Injectable()
@State<TransactionStateModel>({
    name: 'Transactions',
    defaults: {
        Transactions: [],
    }
})
export class TransactionState {

    constructor(private readonly transactionService: TransactionService) {
    }

    @Selector()
    static getTransactionList(state: TransactionStateModel): Transaction[] {
        return state.Transactions;
    }

    @Action(GetTransactions)
    getTransactions({ getState, setState }: StateContext<TransactionStateModel>) {
        const state = getState();
        const transactions = this.transactionService.fetchTransactions();
        return setState({
            ...state,
            Transactions: transactions,
        });
    }

    @Action(AddTransaction)
    public addTransaction({ getState, patchState }: StateContext<TransactionStateModel>, { payload }: AddTransaction) {
        const newTransaction = this.transactionService.addTransaction(payload);

        const state = getState();
        return patchState({
            Transactions: [...state.Transactions, newTransaction]
        });
    }
}

