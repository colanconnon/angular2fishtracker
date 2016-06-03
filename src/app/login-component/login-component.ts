import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';
import {LoginService} from './login-service';

declare var toastr;
@Component({
  selector: 'login-component',
  templateUrl: 'app/\/login-component/login-component.html',
  styleUrls: ['app/\/login-component/login-component.css'],
  providers: [],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;

  constructor(private loginService: LoginService, private _router: Router) {}

  ngOnInit() {}

  login() {
    this.loginService.Login(this.username, this.password).subscribe(res => {
      this.loginService.annouceLogin(true);
      this._router.navigate(['FishCatches']); 

      toastr.success("You are now logged in!", "Successful login", {
          "closeButton": true
      });
    }, (error) => {
      toastr.error("Error logging in, check username and password and try again", "Error", {
        "positionClass": "toast-top-full-width",
         "closeButton": true
      });
    });
  }
}
