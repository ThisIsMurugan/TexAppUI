import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LedgerReportComponent } from './../Reports/Ledgers/Reports.LedgersComponent';
import { LedgerTransactionComponent } from './../Transaction/Ledgers/Transaction.LedgerTransactionComponent';
import { LedgerComponent } from './../BasicDetailsApp/Ledger/BasicDetailsApp.Ledger.component';
import { HomePageComponent } from './../Home/Home.HomePageComponent';


const routes: Routes = [
  {path: 'Home', component: HomePageComponent},
  {path: 'BasicDetails-Ledger', component: LedgerComponent},
  {path: 'Transaction-Ledger', component: LedgerTransactionComponent},
  {path: 'Reports-Ledger', component: LedgerReportComponent},
  {path: '', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
