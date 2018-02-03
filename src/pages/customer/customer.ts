import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { Platform } from 'ionic-angular/platform/platform';

/**
 * Generated class for the CustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-customer',
  templateUrl: 'customer.html',
})
export class CustomerPage {
  customers: Array<object>;
  isToogle: boolean = false;

  constructor(public sqlite: SQLite,
              public toastCtrl: ToastController,
              public platform: Platform,
              public alertCtrl: AlertController,
              public navCtrl: NavController, 
              public navParams: NavParams) {
      this.platform.ready().then(() => {
        this.sqlite.create({
          name: "data.db",
          location: "default"
        }).then((db:SQLiteObject) => {
          db.executeSql("CREATE TABLE IF NOT EXISTS customer (id INTEGER PRIMARY KEY AUTOINCREMENT, fullname TEXT, phone TEXT)", {})
          .then((data) => {
            console.log("TABLE CREATED: ", data);
          }, (error) => {

          });
        }, (error) => {

        });
      });
  }

  public add(form){
    this.sqlite.create({
      name: "data.db",
      location: "default"
    }).then((db: SQLiteObject) => {
      db.executeSql("INSERT INTO customer (fullname, phone) VALUES (?, ?)", 
      [form.fullname, form.phone]).then((data) => {
        let toast = this.toastCtrl.create({
          message: "เพิ่มข้อมูลเรียบร้อย",
          duration: 3000
        });
        toast.present();
        this.showData();
        this.isToogle = false;
      }, (error) => {

      });
    });
  }

  public showData(){
    this.sqlite.create({
      name: "data.db",
      location: "default"
    }).then((db:SQLiteObject) => {
      db.executeSql("SELECT * FROM customer ORDER BY id DESC", [])
      .then((data) => {
          this.customers = [];
          if(data.rows.length > 0) {
            for(var i = 0; i < data.rows.length; i++) {
              this.customers.push({id: data.rows.item(i).id, fullname: data.rows.item(i).fullname,
                phone: data.rows.item(i).phone });
            }
          }
      }, (error) => {

      });
    });
  }

  public delete(item){
    let confirm = this.alertCtrl.create({
      title: 'ยืนยันการลบข้อมูล',
      message: `แน่ใจว่าต้องการลบ [${item.fullname}] ? `, 
      buttons: [{
        text: 'ยกเลิก',
        handler:() => {

        }
      }, {
        text: 'ตกลง',
        handler: () => {
          this.sqlite.create({
            name: "data.db",
            location: "default"
          }).then((db:SQLiteObject) => {
            db.executeSql('DELETE FROM customer WHERE id=?', 
            [item.id]).then((data) => {
              let toast = this.toastCtrl.create({
                message: 'ลบข้อมูลเรียบร้อย',
                duration: 3000
              });
              toast.present();
              this.showData();
            }, (error) => {

            });
          });
        }
      }]
    });
    confirm.present();
  }

  ionViewWillEnter(){
    this.showData();
  }

  openForm(){
    this.isToogle = !this.isToogle;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerPage');
  }

}
