import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner'

/**
 * Generated class for the BarcodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-barcode',
  templateUrl: 'barcode.html',
})
export class BarcodePage {
  data: any;

  constructor(private barcodeScanner: BarcodeScanner,
              public navCtrl: NavController, 
              public navParams: NavParams) {
  }

  scan(){
    this.barcodeScanner.scan().then((barcodeData) => {
      this.data = barcodeData.text
    }, (err) =>{

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarcodePage');
  }

}
