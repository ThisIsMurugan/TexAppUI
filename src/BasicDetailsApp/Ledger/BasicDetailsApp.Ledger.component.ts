import { BaseLogger } from './../../Utility/Utility.Logger';
import { LedgerModel } from './BasicDetailsApp.Ledger.LedgerModel';
import { Component,Injector } from '@angular/core';

@Component({
  templateUrl: './BasicDetailsApp.Ledger.view.html',
  styleUrls: ['./BasicDetailsApp.Ledger.component.css']
})
export class LedgerComponent {
  LoggerObj: BaseLogger = null;
  constructor(_injecter: Injector) {
    this.LoggerObj = _injecter.get('1');
    this.LoggerObj.Log();
  }
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
  SelectedLedger(_selected: LedgerModel){
    this.LedgerModelObj = _selected;
  }
}
