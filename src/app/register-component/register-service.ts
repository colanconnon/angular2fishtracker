import {Injectable} from '@angular/core';
import {Headers, RequestOptions, Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class RegisterService {
  private RegisterUrl: string = 'http://localhost:3000/public/api/user/signup';
  constructor(private http: Http) {}

  Register(username: string, password: string, confirmPassword: string): Observable<string> {
    let body =
        JSON.stringify({username: username, password: password, confirmpassword: confirmPassword});
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.post(this.RegisterUrl, body, options).map(res => res.json()).do(res => {
      console.log(res);
    });
  }
}