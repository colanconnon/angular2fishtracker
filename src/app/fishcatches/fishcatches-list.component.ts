import {Component, OnInit} from '@angular/core';
import {FishcatchesService} from './fishcatches.service';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {FishCatch} from './fishcatch';

@Component({
  templateUrl: 'app/fishcatches/fishcatches-list.component.html',
  styleUrls: ['app/fishcatches/fishcatches-list.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class FishcatchesListComponent implements OnInit {
  fishcatches: FishCatch[];
  constructor(private _service: FishcatchesService) {}
  ngOnInit() { this._service.getAll().subscribe(res =>{
    this.fishcatches = res;
  } ) }
}
