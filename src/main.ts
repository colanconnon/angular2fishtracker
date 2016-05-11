import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Fishtrackerangular2AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(Fishtrackerangular2AppComponent);
