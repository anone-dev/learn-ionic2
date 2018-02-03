import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  companyName:string;
  companyWebsite:string;
  phone: string;

  constructor(public storage: Storage, public navCtrl: NavController, public navParams: NavParams) {
    this.companyName = this.navParams.get('companyName');
    this.companyWebsite = this.navParams.get('companyWebsite');
    this.storage.ready().then(() => {
      this.storage.get('phone').then((val) => {
        this.phone = val;
      })
    });
  }

  ionViewWillLeave(){
    this.storage.remove('phone');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

  goBack(){
    this.navCtrl.pop();
  }

}
