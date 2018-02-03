import { YoutubePage } from './../youtube/youtube';
import { CourseServiceProvider } from './../../providers/course-service/course-service';
import { Subscription } from 'rxjs/Subscription';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from 'ionic-angular/components/item/item';

/**
 * Generated class for the CourseDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-course-detail',
  templateUrl: 'course-detail.html',
})
export class CourseDetailPage {
  id: number;
  cDetail: string;
  items: Item[];
  sub: Subscription;
  errorMessage: string;
  // ch_title: string;
  // ch_url: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private CourseServiceProvider: CourseServiceProvider) {
      this.id = this.navParams.get('id');
      this.cDetail = this.navParams.get('c_detail');
      // this.ch_title = this.navParams.get('c_title');
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CourseDetailPage');
  }

  ionViewWillEnter(){
    this.getCourseDetail();
  }

  ionViewWillLeave(){
    this.sub.unsubscribe();
  }

  private getCourseDetail(){
    this.sub = this.CourseServiceProvider.getCourseDetail(this.id).subscribe(
      (res) => this.items = res,
      (error) => this.errorMessage = <any> error
    );
  }

  itemSelected(c):void{
    this.navCtrl.push(YoutubePage,{
      ch_title: c.ch_title,
      ch_url: c.ch_url
    })
  }

}
