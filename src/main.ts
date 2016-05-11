import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';

import { Fishtrackerangular2AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(Fishtrackerangular2AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);
