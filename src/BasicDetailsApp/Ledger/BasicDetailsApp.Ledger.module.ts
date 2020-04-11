import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from '../BasicDetailsApp-routing.module';
import { LedgerComponent } from './BasicDetailsApp.Ledger.component';

@NgModule({
  declarations: [
    LedgerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [LedgerComponent]
})
export class TextileAppModule { }
