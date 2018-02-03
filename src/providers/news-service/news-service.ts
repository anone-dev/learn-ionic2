import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { News } from '../../models/news';


/*
  Generated class for the NewsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsServiceProvider {

  constructor(public http: Http) {
    // console.log('Hello NewsServiceProvider Provider');
  }


  getNews():Observable<News[]>{
    return this.http.get('https://newsapi.org/v1/articles?source=techcrunch&apiKey=ab0d4aca4cea481e8157d31c68eb2b23')
    .map((res:Response) => <News[]> res.json().articles)
    .catch(this.handleError);
  }


  private handleError(error:any) {
    return Observable.throw(error.json().errorMessage || 'เกิดข้อผิดพลาดจากServer');
    }
}
