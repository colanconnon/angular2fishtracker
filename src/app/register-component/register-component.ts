import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';
import {RegisterService} from './register-service';
declare var toastr;
@Component({
  selector: 'register-component',
  templateUrl: 'app/\/register-component/register-component.html',
  styleUrls: ['app/\/register-component/register-component.css'],
  providers: [RegisterService],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
export class RegisterComponent {
  public username: string;
  public password: string;
  public confirmPassword: string;

  constructor(private _router: Router, private registerService: RegisterService) {}

  registerClick() {
    this.registerService.Register(this.username, this.password, this.confirmPassword)
        .subscribe(res => {
           toastr.success(`You are now registed with username ${this.username}`, "Registration Successful");
           this._router.navigate(['Login']); 
          });
  }
}
