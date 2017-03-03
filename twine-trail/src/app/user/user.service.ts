import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import { AuthService } from './auth.service';

import { User } from './user';


@Injectable()
export class UserService implements OnInit{
	
	constructor(private http: Http, private authService: AuthService) {}
	siteUrl = 'http://0.0.0.0:3000/api';
	headers: Headers = new Headers({
			'Content-Type': 'application/json',
			});

	loginUser(email: string, password: string): Observable<any>{
		let url = this.siteUrl + '/Clients/login?include=user';
		return(this.http.post(url,{'email':email, 'password':password},{'headers':this.headers})
			.map(response => response.json())
			.catch(err => {
				return Observable.throw(err);
			})
		)
	}

	registerUser(user: User): Observable<any>{
		let url = this.siteUrl + '/Clients';
		this.headers.delete('Authorization');

		return(this.http.post(url,user,{'headers':this.headers})
			.map(response => response.json())
			.catch(err => {
				return Observable.throw(err);
			})
		)
	}

	 logout(): Observable<any>{
	 	let token = this.authService.getToken();
	 	this.headers.append('Authorization', token);
	    let url = this.siteUrl + '/Clients/logout';
	    let data = {'accessTokenID': this.authService.getToken()};
	    return this.http.post(url, data, {'headers':this.headers}).map(res => res.json()).catch(err => {
	     return Observable.throw(err);
	    });
	 }

	ngOnInit(){}
}