import {Injectable} from '@angular/core';
import {FishCatch} from './fishcatch';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';



@Injectable()
export class FishcatchesService {
  private fishCatchPostUrl: string = 'http://localhost:3000/api/fishcatch/insert';
  private fishCatchGetUrl: string = 'http://localhost:3000/api/fishcatch/getall';
  private fishCatchGetOneUrl: string = 'http://localhost:3000/api/fishcatch/';

  constructor(public http: Http) {}
  getAll() {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Accept', 'application/json');
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('Token'));

    let options = new RequestOptions({headers: headers});
    return this.http.get(this.fishCatchGetUrl, options).map(res => res.json().fishCatches);
  }
  get(id: string) {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Accept', 'application/json');
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('Token'));

    let options = new RequestOptions({headers: headers});

    return this.http.get(this.fishCatchGetOneUrl + id, options).map(res => res.json());
  }

  post(fishcatch: FishCatch): Observable<FishCatch> {
    let body = JSON.stringify(fishcatch);
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Accept', 'application/json');
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('Token'));

    let options = new RequestOptions({headers: headers});

    return this.http.post(this.fishCatchPostUrl, body, options).map(res => res.json());
  }
}
