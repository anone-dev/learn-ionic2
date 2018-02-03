import { ContactPage } from './../contact/contact';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public storage: Storage) {
      storage.ready().then(() => {
        storage.set('phone', '085 4952624');
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  goToContact(){
    this.navCtrl.push(ContactPage,{
      companyName: 'CodingThialand',
      companyWebsite: 'https://codingthialand.com'
    });
    // this.navCtrl.setRoot(ContactPage);
  }

}
