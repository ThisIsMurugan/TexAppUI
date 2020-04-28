import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { LedgerComponent } from './BasicDetailsApp.Ledger.component';

@NgModule({
  declarations: [
    LedgerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [LedgerComponent]
})
export class BasicDetailsLedgerModule { }
