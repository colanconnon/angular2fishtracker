import {Component} from '@angular/core';
import {Lake, LakesService} from '../lakes/lakes.service';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

declare var toastr;

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
  constructor(private lakeService: LakesService) {
    this.lake = new Lake();
  }

  onSubmitLake() {
    this.lakeService.post(this.lake).subscribe((result) => {
      toastr.success(`Successfully added Lake: ${this.lake.lakeName}`, "New Lake Added");
      this.lake.lakeName = "";
      this.lake.id = 0;
    });
  }
}
