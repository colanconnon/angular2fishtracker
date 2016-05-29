import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {Lake, LakesService} from '../lakes/lakes.service';
import {FishcatchesService} from '../fishcatches/fishcatches.service';
import {FishCatch} from '../fishcatches/fishcatch';

@Component({
  selector: 'fish-catch-add-component',
  templateUrl: 'app///fish-catch-add-component/fish-catch-add-component.html',
  styleUrls: ['app///fish-catch-add-component/fish-catch-add-component.css'],
  providers: [LakesService, FishcatchesService],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
export class FishCatchAddComponent {
  private lakes: Lake[];
  public fishCatch: FishCatch;
  private success: boolean;
  constructor(private _lakeService: LakesService, private _fishCatchService: FishcatchesService) {
    this._lakeService.getAll().subscribe(result => this.lakes = result);
    this.fishCatch = new FishCatch();
  }

  submit() {
    this._fishCatchService.post(this.fishCatch).subscribe(result => {
      this.success = true;
    });
  }
}
