import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { DatabaseModule } from '../database';
import { TransactionStateService } from './states/transaction-state.service';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

@NgModule({
  declarations: [],
  imports: [
    NgxsModule.forRoot([
      TransactionStateService
    ]),
    NgxsReduxDevtoolsPluginModule,
    NgxsLoggerPluginModule,
    CommonModule,
    DatabaseModule,
   ]
})
export class StateResolverModule { }
