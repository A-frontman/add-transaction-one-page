import { Inject, Injectable } from '@angular/core';
import { Transaction } from 'src/app/model/transaction';
import { IDatabaseConnetion } from './database-connection';
import { ITransactionEntity } from './transaction-entity';

@Injectable({
    providedIn: 'root'
})
export class TransactionRepositoryService {
    public constructor(
        @Inject('IDatabaseConnetion') private readonly database: IDatabaseConnetion
    ) {
    }

    public fetchTransactions(): Transaction[] {
        let entities: ITransactionEntity[] = [];

        try {
            entities = this.database.get();
        } catch (e) {
            console.error(e)
            // Handle error with getting the database
        }
        const transactions: Transaction[] = [];
        entities.forEach((entity) => {
            transactions.push(new Transaction(entity.merchant.name));
        });

        return transactions;
    }

    public addTransaction(payload: Transaction): Transaction {
        const entity = this.convertTransactionToEntity(payload);
        // Simulating success
        this.database.create(entity);
        return payload;
    }

    private convertTransactionToEntity(transaction: Transaction): ITransactionEntity {
        return {
            // This is only a mock. In requirements there is no information about storing new 
            // transactions in the database.
        }
    }
}


