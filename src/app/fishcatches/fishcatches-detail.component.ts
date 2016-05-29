import {Component, OnInit} from '@angular/core';
import {FishcatchesService} from './fishcatches.service';
import {RouteParams, Router} from '@angular/router-deprecated';
import {CanDeactivate, ComponentInstruction} from '@angular/router-deprecated';
import {FishCatch} from './FishCatch';
/// <reference path="./google.maps.d.ts" />

declare var google: any;
@Component({
  templateUrl: 'app/fishcatches/fishcatches-detail.component.html',
  styleUrls: ['app/fishcatches/fishcatches-detail.component.css']
})
export class FishcatchesDetailComponent implements OnInit {
  fishcatch: FishCatch;
  editName: string;

  constructor(
      private _service: FishcatchesService, private _router: Router,
      private _routeParams: RouteParams) {}

  ngOnInit() {
    let id = this._routeParams.get('id').toString();
    this._service.get(id).subscribe(result => {
      this.fishcatch = result;

      setTimeout(() => { this.initMap(parseFloat(this.fishcatch.latitude.toString()), parseFloat(this.fishcatch.longitude.toString())); }, 100);
    });
    // this._service.get(id).then(fishcatch => {
    //   if (fishcatch) {

    //     this.fishcatch = fishcatch;


    //   } else {
    //     this.gotoList();
    //   }
    // });
  }

  cancel() { this.gotoList(); }

  save() { this.gotoList(); }

  gotoList() { this._router.navigate(['FishcatchesList']); }

  initMap(latitude, longitude) {
    var map = new google.maps.Map(
        document.getElementById('mapcanvas'), {center: {lat: latitude, lng: longitude}, zoom: 13});
    new google.maps.Marker({position: {lat: latitude, lng: longitude}, map: map});
  }
}
