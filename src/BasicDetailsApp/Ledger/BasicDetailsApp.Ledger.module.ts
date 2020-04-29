import { GridComponent } from './../../Utility/App.GridComponent';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { LedgerComponent } from './BasicDetailsApp.Ledger.component';
import {BasicDetailsLedgerRoute} from '../../Routing/BasicDetails.LedgerRouting.module';
@NgModule({
  declarations: [
    LedgerComponent, GridComponent
  ],
  imports: [
    RouterModule.forChild(BasicDetailsLedgerRoute),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [LedgerComponent]
})
export class BasicDetailsLedgerModule { }
