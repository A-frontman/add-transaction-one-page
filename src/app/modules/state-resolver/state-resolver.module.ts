import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { TransactionStateService } from '.';
import { DatabaseModule } from '../database';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DatabaseModule,
    NgxsModule.forRoot([
      TransactionStateService
  ]),
  ]
})
export class StateResolverModule { }
