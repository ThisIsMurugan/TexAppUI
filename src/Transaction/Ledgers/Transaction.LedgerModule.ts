import { LedgerTransactionComponent } from './Transaction.LedgerTransactionComponent';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    LedgerTransactionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [LedgerTransactionComponent]
})
export class LedgerTransactionModule { }
