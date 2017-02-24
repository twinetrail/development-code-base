import { Injectable } 	from '@angular/core';
import { Http, Headers, Response } 		from '@angular/http';
import { Observable }	from 'rxjs';


@Injectable()
export class AppService {

  constructor(private http: Http) { }

  headers = new Headers({'Content-Type':'application/json'});

  getRequest(): Observable<any> {
  	let url = 'http://0.0.0.0:3000/api/Client';
  	return this.http.get(url,{headers: this.headers})
  		.map(response => response.json())
  		.catch(err => Observable.throw(err));
  }
}
