import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';

export class Lake {
  id: number;
  lakeName : string;
  
  constructor() {
    
  }
}

@Injectable()
export class LakesService {
  private lakeUrl: string = 'http://localhost:3000/api/lakes/getlakes';
  private oneLakeUrl: string = 'http://localhost:3000/api/lake/';
  private postLakeUrl: string = 'http://localhost:3000/api/lakes/newlake'
  constructor(private http: Http) {}
  getAll() {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('Token'));
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({headers: headers});
    return this.http.get(this.lakeUrl, options)
        .do(response => console.log(response))
        .map(response => response.json().lakes)
        .do(result => console.log(result));
  }
  get(id: string) {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('Token'));
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({headers: headers});
    return this.http.get(this.oneLakeUrl + id, options).map(res => res.json());
  }

  post(lake: Lake) {
    let body = JSON.stringify(lake);
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('Token'));
    headers.append('Accept', 'applicaiton/json');

    let options = new RequestOptions({headers: headers});

    return this.http.post(this.postLakeUrl, body, options).map(res => res.json());
  }
}
