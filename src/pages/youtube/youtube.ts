import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the YoutubePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-youtube',
  templateUrl: 'youtube.html',
})
export class YoutubePage {
  chTitle: string;
  chUrl: string;
  chUrlTrusted: SafeResourceUrl;

  constructor(private domSanitizer: DomSanitizer, 
              public navCtrl: NavController, 
              public navParams: NavParams) {
      this.chTitle = this.navParams.get('ch_title');
      this.chUrl = 'https://www.youtube.com/embed/' + this.navParams.get('ch_url');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad YoutubePage');
  }

  ionViewWillEnter(){
    this.chUrlTrusted = this.domSanitizer.bypassSecurityTrustResourceUrl(this.chUrl);
  }
}
