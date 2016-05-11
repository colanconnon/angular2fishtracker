import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Http, Response} from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class LoginService {
  private LoginUrl: string = 'http://localhost:3000/public/api/user/login';
  private _loginAlertService = new Subject<boolean>();
  private _logoutAlertService = new Subject<boolean>();

  loginAlertService$ = this._loginAlertService.asObservable();
  logoutAlertService$ = this._logoutAlertService.asObservable();

  constructor(public http: Http) {}

  annouceLogin(message: boolean) { this._loginAlertService.next(message); }

  annouceLogout(message: boolean) { this._logoutAlertService.next(message); }

  Login(username: string, password: string) {
    let body = JSON.stringify({username: username, password: password});
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.LoginUrl, body, options).map(res => res.json()).do(res => {
      console.log(res);
      localStorage.setItem('Token', res.token);
    });
  }

  Logout() {
    localStorage.setItem('Token', null);
    console.log(localStorage.getItem('Token'));
    this.annouceLogout(true);
  }

  CheckLogin() {
    console.log(localStorage.getItem('Token'));
    if (localStorage.getItem('Token') !== null || localStorage.getItem('Token') !== undefined) {
      console.log('Test');
      this.annouceLogin(true);
    } else {
      console.log('Test123');
      this.annouceLogout(false);
    }
  }
}