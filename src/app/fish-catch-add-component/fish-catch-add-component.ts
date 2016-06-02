import {Component, ElementRef, ViewChild, AfterViewInit, Renderer, NgZone} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {Lake, LakesService} from '../lakes/lakes.service';
import {FishcatchesService} from '../fishcatches/fishcatches.service';
import {FishCatch} from '../fishcatches/fishcatch';

declare var google;
declare var toastr;
@Component({
  selector: 'fish-catch-add-component',
  templateUrl: 'app///fish-catch-add-component/fish-catch-add-component.html',
  styleUrls: ['app///fish-catch-add-component/fish-catch-add-component.css'],
  providers: [LakesService, FishcatchesService],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
export class FishCatchAddComponent implements AfterViewInit {
  private lakes: Lake[];
  public fishCatch: FishCatch;
  @ViewChild('map') map: any;
  constructor(private _lakeService: LakesService, private _fishCatchService: FishcatchesService,
    private renderer: Renderer, private _zone: NgZone) {
    this._lakeService.getAll().subscribe(result => this.lakes = result);
    this.fishCatch = new FishCatch();

  }
  ngAfterViewInit() {
    this.initMap();

  }

  submit() {
    this._fishCatchService.post(this.fishCatch).subscribe(result => {
      toastr.success("FishCatch Added to the database", "Fish Catch Added");
      this.fishCatch = new FishCatch();
    });
  }


  initMap() {
    let gmap = new google.maps.Map(this.map.nativeElement, {
      center: { lat: 38.06539235133249, lng: -92.63671875 },
      zoom: 3
    });

    gmap.addListener( 'click', (event: any) => {
      this._zone.run(() => {
        this.fishCatch.latitude = event.latLng.lat();
        this.fishCatch.longitude = event.latLng.lng();
      });
    });
  }
}
