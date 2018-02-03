import { Item } from 'ionic-angular/components/item/item';
import { Course } from './../../models/course';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

/*
  Generated class for the CourseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CourseServiceProvider {

  constructor(public http: Http) {
    // console.log('Hello CourseServiceProvider Provider');
  }

  getCourse():Observable<Course[]>{
    return this.http.get('https://codingthailand.com/api/get_courses.php')
    .map((res:Response) => <Course[]> res.json())
    .catch(this.handleError);

  }

  getCourseDetail(id:number): Observable<Item[]>{
    return this.http.get('https://codingthailand.com/api/get_course_detail.php?course_id='+id)
    .map((res:Response) => <Item[]> res.json())
    .catch(this.handleError);
  }

  private handleError(error:any) {
    return Observable.throw(error.json().errorMessage || 'เกิดข้อผิดพลาดจาก Server');
    }

}
