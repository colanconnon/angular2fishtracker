import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {LoginService} from './login-service';

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

  constructor(private loginService: LoginService) {}

  ngOnInit() {}

  login() {
    this.loginService.Login(this.username, this.password).subscribe(res => {
      this.loginService.annouceLogin(true);
    });
  }
}
