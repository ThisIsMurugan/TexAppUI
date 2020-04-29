import { LedgerModel } from './BasicDetailsApp.Ledger.LedgerModel';
import { Component } from '@angular/core';

@Component({
  templateUrl: './BasicDetailsApp.Ledger.view.html',
  styleUrls: ['./BasicDetailsApp.Ledger.component.css']
})
export class LedgerComponent {
  title = 'Tex ????';
  LedgerModelObj: LedgerModel = new LedgerModel();
  LedgerModelsObj: Array<LedgerModel> = new Array<LedgerModel>();

  Add() {
    this.LedgerModelsObj.push(this.LedgerModelObj);
    this.Reset();
  }

  Reset() {
    this.LedgerModelObj = new LedgerModel();
  }
  HasValidationError(typeofValidator: string,
                     controlName: string)
                      : boolean {
    return this.LedgerModelObj.formLedgerGorup
            .controls[controlName]
            .hasError(typeofValidator);
  }
}
