import { CourseDetailPage } from './../course-detail/course-detail';
import { CourseServiceProvider } from './../../providers/course-service/course-service';
import { Course } from './../../models/course';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';

/**
 * Generated class for the CoursePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-course',
  templateUrl: 'course.html',
})
export class CoursePage {

courses: Course[];
sub:Subscription;
errorMessage:string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private CourseServiceProvider: CourseServiceProvider
            ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoursePage');
  }
  
  private getCourse(){
    this.sub = this.CourseServiceProvider.getCourse().subscribe(
      (res) => this.courses = res,
      (error) => this.errorMessage = <any> error
    );
  }

  ionViewWillEnter(){
    this.getCourse();
  }

  ionViewwillLeave(){
    this.sub.unsubscribe();
  }

  itemSelected(c):void{
    this.navCtrl.push(CourseDetailPage,{
      id: c.id,
      c_detail: c.c_detail
    })
  }

  getItems(ev: any){
    let val = ev.target.value;
    if (val && val.trim() != ''){
      this.courses = this.courses.filter((course:Course) => {
        return(course.c_detail.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }else{
      this.getCourse();
    }
  }

}
