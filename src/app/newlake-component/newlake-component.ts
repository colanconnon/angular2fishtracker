import {Component} from '@angular/core';
import {Lake, LakesService} from '../lakes/lakes.service';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
  selector: 'newlake-component',
  templateUrl: 'app///newlake-component/newlake-component.html',
  styleUrls: ['app///newlake-component/newlake-component.css'],
  providers: [LakesService],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
export class NewlakeComponent {
  public lake: Lake;
  public lakeSuccess: boolean = false;
  constructor(private lakeService: LakesService) {
    this.lake = new Lake();
  }

  onSubmitLake() {
    this.lakeService.post(this.lake).subscribe((result) => {
      this.lakeSuccess = true;
    });
  }
}
