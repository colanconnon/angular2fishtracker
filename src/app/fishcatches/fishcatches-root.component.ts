import {Component} from '@angular/core';
import {RouteConfig, RouterOutlet} from '@angular/router-deprecated';

import {FishcatchesListComponent} from './fishcatches-list.component';
import {FishcatchesDetailComponent} from './fishcatches-detail.component';
import {FishcatchesService} from './fishcatches.service';
import {FishCatchAddComponent} from '../fish-catch-add-component/fish-catch-add-component';

@Component({
  template: '<router-outlet></router-outlet>',
  providers: [FishcatchesService],
  directives: [RouterOutlet]
})
@RouteConfig([
  {path: '/', name: 'FishcatchesList', component: FishcatchesListComponent, useAsDefault: true},
  {path: '/:id', name: 'FishcatchesDetail', component: FishcatchesDetailComponent},
  {path: '/new', name: 'FishCatchAdd', component: FishCatchAddComponent}
])
export class FishcatchesRoot {
  constructor() {}
}
