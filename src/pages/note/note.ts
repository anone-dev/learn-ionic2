import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-note',
  templateUrl: 'note.html',
})
export class NotePage {
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;

  key: string;
  topic: string;
  dueDate: string;
  isToogle: boolean = false;

  constructor(private af: AngularFireDatabase,
              public navCtrl: NavController, 
              public navParams: NavParams) {
  }

  ionViewWillEnter(){
    this.showData();
  }

  showData(){
    this.itemsRef = this.af.list('/');
    this.items = this.itemsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val()}));
    });
  }

  select(item){
    this.topic = item.note.topic;
    this.dueDate = item.note.dueDate;
    this.key = item.key;
  }

  save(note: any){
    if(this.key){
      this.itemsRef.update(this.key, {note});
      this.isToogle = false;
    }
  }

  update(note: any){
    if(this.key){
      this.itemsRef.update(this.key, {note});
      this.isToogle = false;
    }
  }

  delete(item: any){
    this.itemsRef.remove(item.key);
    this.isToogle = false;
  }

  openForm(){
    this.isToogle = !this.isToogle;
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad NotePage');
  }

}
