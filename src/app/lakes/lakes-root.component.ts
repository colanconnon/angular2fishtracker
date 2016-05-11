import {Component} from '@angular/core';
import {RouteConfig, RouterOutlet} from '@angular/router-deprecated';
import {NewlakeComponent} from '../newlake-component/newlake-component';

import {LakesListComponent} from './lakes-list.component';
import {LakesDetailComponent} from './lakes-detail.component';
import {LakesService} from './lakes.service';

@Component({
  template: '<router-outlet></router-outlet>',
  providers: [LakesService],
  directives: [RouterOutlet]
})
@RouteConfig([
  {path: '/', name: 'LakesList', component: LakesListComponent, useAsDefault: true},
  {path: '/:id', name: 'LakesDetail', component: LakesDetailComponent},
  {path: '/newlake', name: 'NewLake', component: NewlakeComponent}
])
export class LakesRoot {
  constructor() {}
}
