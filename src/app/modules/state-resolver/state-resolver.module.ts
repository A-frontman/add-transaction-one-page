import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { DatabaseModule } from '../database';
import { TransactionStateService } from './states/transaction-state.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DatabaseModule,
    NgxsModule.forRoot([
      TransactionStateService
  ])]
})
export class StateResolverModule { }
