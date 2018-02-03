import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { FeedBack } from '../../models/feedback';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  myForm: FormGroup;
  fullname: FormControl;
  email: FormControl;
  password: FormControl;
  errorMessage: string;
  data: FeedBack;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private fb: FormBuilder,
              private authServiceProvider: AuthServiceProvider,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController) {

      this.fullname = fb.control("", Validators.required);
      this.email = fb.control("", Validators.compose([Validators.required, SignupPage.emailValidator]));
      this.password = fb.control("", Validators.compose([Validators.required, Validators.minLength(3)]));
      this.myForm = fb.group({
        'fullname': this.fullname,
        'email': this.email,
        'password': this.password
      });
  }

  static emailValidator(control: FormControl){
    let email_regxp: any = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return email_regxp.test(control.value) ? null : { invalidEmail: true };
  }

  signup():void{
    let fullname = this.myForm.controls['fullname'].value;
    let email = this.myForm.controls['email'].value;
    let password = this.myForm.controls['password'].value;

    let loader = this.loadingCtrl.create({
      content: "กำลังบันทึกข้อมูล..."
    });
    loader.present();
    // console.log(this.myForm.value);


    this.authServiceProvider.singup(fullname, email, password).subscribe(
      res => { 
        this.data = res;
        if (this.data.status === 'ok'){
          let alert = this.alertCtrl.create({
            title: this.data.message,
            buttons: ['ตกลง']
          });
          // console.log('signup ok');
          alert.present();
          this.myForm.reset();
        }else{
          let alert = this.alertCtrl.create({
            title: this.data.message,
            buttons: ['ตกลง']
          });
          // console.log('signup not ok');
          alert.present();
        }
      },
      error => {
        this.errorMessage = <any> error
        console.log(this.errorMessage);
        loader.dismiss();
      },
      ()=>{
        loader.dismiss();
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
