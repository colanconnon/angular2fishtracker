import {Component, OnInit} from '@angular/core';
import {Lake, LakesService} from './lakes.service';
import {RouteParams, Router, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {CanDeactivate, ComponentInstruction} from '@angular/router-deprecated';

@Component({
  templateUrl: 'app/lakes/lakes-detail.component.html',
  styleUrls: ['app/lakes/lakes-detail.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class LakesDetailComponent implements OnInit,
    CanDeactivate {
  lake: Lake;
  editName: string;

  constructor(
      private _service: LakesService, private _router: Router, private _routeParams: RouteParams) {}

  ngOnInit() {
    let id = this._routeParams.get('id');
    this._service.get(id).subscribe(result => {
      console.log(result);
      this.lake = result;
    });
    // this._service.get(id).then(lakes => {
    //   if (lakes) {
    //     this.editName = lakes.name;
    //     this.lakes = lakes;
    //   } else {
    //     this.gotoList();
    //   }
    // });
  }

  routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction): any {}

  cancel() {}

  save() {}

  gotoList() { this._router.navigate(['LakesList']); }
}
