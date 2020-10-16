import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TransactionState } from './states/transaction.state';
import { DatabaseConnetion } from './database/database-connection';
import { NgxsModule } from '@ngxs/store';
import { TransactionService } from './transaction-service';

@NgModule({
  declarations: [
      AppComponent,
      // ListComponent,
      // FormComponent
  ],
  imports: [
      BrowserModule,
      NgxsModule.forRoot([
          TransactionState
      ]),
      ReactiveFormsModule,
      AppRoutingModule
  ],
  providers: [
    { provide: 'IDatabaseConnetion', useClass: DatabaseConnetion },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
