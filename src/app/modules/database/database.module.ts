import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatabaseConnetion } from '.';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: 'IDatabaseConnetion', useClass: DatabaseConnetion },
  ]
})
export class DatabaseModule { }
