import {Component, OnInit} from '@angular/core';
import {Lake, LakesService} from './lakes.service';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
  templateUrl: 'app/lakes/lakes-list.component.html',
  styleUrls: ['app/lakes/lakes-list.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class LakesListComponent implements OnInit {
  lakes: Lake[];
  constructor(private _service: LakesService) {}
  ngOnInit() {
    this._service.getAll().subscribe(result => {
      console.log(result);
      this.lakes = result;
    });
  }
}
