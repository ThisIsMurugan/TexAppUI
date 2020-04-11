import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import { TextileAppModule } from './BasicDetailsApp/Ledger/BasicDetailsApp.Ledger.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(TextileAppModule)
  .catch(err => console.error(err));
