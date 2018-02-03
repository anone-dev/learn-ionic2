import { Subscription } from 'rxjs/Subscription';
import { News } from './../../models/news';

import { NewsServiceProvider } from './../../providers/news-service/news-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  news: Array<News>;
  sub: Subscription;
  errorMessage: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private newsService: NewsServiceProvider,
              private loadingCtrl: LoadingController) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad NewsPage');
  // }

  ionViewWillEnter(){
    this.getNews();
  }

  ionViewLeave(){
    this.sub.unsubscribe();
  }

  private getNews(){
    let loading = this.loadingCtrl.create({
      content: 'กำลังโหลดข้อมูล...',
      //spinner: 'dots'
    });
    loading.present();

    this.sub = this.newsService.getNews().subscribe(
      (res) => this.news = res,
      (error) => { this.errorMessage = <any> error,
        loading.dismiss()
      },
      () => loading.dismiss()
    );
  }

}
