import {Component, OnInit} from '@angular/core';
import {LoginService} from '../login-component/login-service';


@Component({
  selector: 'logout-component',
  templateUrl: 'app/\/logout-component/logout-component.html',
  styleUrls: ['app/\/logout-component/logout-component.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class LogoutComponent implements OnInit {
  constructor(private loginService: LoginService) { this.loginService.Logout(); }

  ngOnInit() { this.loginService.annouceLogout(false); }
}
