import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StateResolverModule } from './modules/state-resolver';
import { TransactionModule } from './modules/transaction';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule,
      StateResolverModule,
      TransactionModule,
      ReactiveFormsModule,
      AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
