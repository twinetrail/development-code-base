import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';

import { User } from './user';


@Injectable()
export class UserService implements OnInit{
	headers: Headers = new Headers(
			{'Content-Type': 'application/json'}
			);
	constructor(private http: Http) {}
	siteUrl = 'http://0.0.0.0:3000/api';

	loginUser(email: string, password: string): Observable<any>{
		let url = this.siteUrl + '/Clients/login?include=user';
		return(this.http.post(url,{'email':email, 'password':password},{'headers':this.headers})
			.map(response => response.json())
			.catch(err => {
				return Observable.throw(err);
			})
		)
	}

	ngOnInit(){}
}