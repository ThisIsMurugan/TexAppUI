import { HomePageComponent } from './Home.HomePageComponent';
import { MasterPageComponent } from './Home.MasterPageComponent';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from 'src/Routing/Home-HomeRouting.module';
import { BasicDetailsLedgerModule } from 'src/BasicDetailsApp/Ledger/BasicDetailsApp.Ledger.module';
import { LedgerReportModule } from 'src/Reports/Ledgers/Reports.LedgersModule';
import { LedgerTransactionModule } from 'src/Transaction/Ledgers/Transaction.LedgerModule';

@NgModule({
  declarations: [
    HomePageComponent,
    MasterPageComponent
  ],
  imports: [
    HomeRoutingModule,
    BrowserModule,
    BasicDetailsLedgerModule,
    LedgerReportModule,
    LedgerTransactionModule
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class HomeModule { }
