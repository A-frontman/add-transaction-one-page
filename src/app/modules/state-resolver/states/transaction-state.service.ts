import { GetTransactions } from '../actions/getTransactions';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { Transaction } from 'src/app/model/transaction';
import { TransactionRepositoryService } from '../../database';
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
export class TransactionStateService {

    constructor(private readonly transactionRepositoryService: TransactionRepositoryService) {
    }

    @Selector()
    static getTransactionList(state: TransactionStateModel): Transaction[] {
        return state.Transactions;
    }

    @Action(GetTransactions)
    getTransactions({ getState, setState }: StateContext<TransactionStateModel>) {
        const state = getState();
        const transactions = this.transactionRepositoryService.fetchTransactions();
        return setState({
            ...state,
            Transactions: transactions,
        });
    }

    @Action(AddTransaction)
    public addTransaction({ getState, patchState }: StateContext<TransactionStateModel>, { payload }: AddTransaction) {
        const newTransaction = this.transactionRepositoryService.addTransaction(payload);

        const state = getState();
        return patchState({
            Transactions: [...state.Transactions, newTransaction]
        });
    }
}

