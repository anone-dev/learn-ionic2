import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { FeedBack } from '../../models/feedback';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  constructor(public http: Http) {
    // console.log('Hello AuthServiceProvider Provider');
  }

  public singup(fullname:string, email:string, password:string):Observable<FeedBack>{
    let myHeader = new Headers();
    myHeader.append('Content-Type', 'application/json');

    let data = {
      'fullname': fullname,
      'email': email,
      'password': password
    }

    return this.http.post('https://codingthailand.com/api/insert_user.php', data, { headers: myHeader })
    .map((res:  Response) => {
      let data = res.json();
      return data;
    }).catch(this.handleError);

  }

  private handleError(error: any) {
    return Observable.throw(error.json().errorMessage || 'Server เกิดข้อผิดพลาด');
    }

}
