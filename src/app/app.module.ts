import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { BarcodePage } from './../pages/barcode/barcode';
import { CameraPage } from './../pages/camera/camera';
import { NotePage } from './../pages/note/note';
import { SignupPage } from './../pages/signup/signup';
import { YoutubePage } from './../pages/youtube/youtube';
import { CoursePage } from './../pages/course/course';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CourseServiceProvider } from '../providers/course-service/course-service';
import { HttpModule } from '@angular/http';
import { NewsPage } from '../pages/news/news';
import { NewsServiceProvider } from '../providers/news-service/news-service';
import { CourseDetailPage } from '../pages/course-detail/course-detail';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { IonicStorageModule } from '@ionic/storage';
import { SQLite } from '@ionic-native/sqlite';
import { CustomerPage } from '../pages/customer/customer';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { Camera } from '@ionic-native/camera';

export const config = {
  apiKey: "AIzaSyBuxL3r45mvPizP-Jnlg7RogCifBKl5fcs",
  authDomain: "ionicebook-a88d4.firebaseapp.com",
  databaseURL: "https://ionicebook-a88d4.firebaseio.com",
  projectId: "ionicebook-a88d4",
  storageBucket: "ionicebook-a88d4.appspot.com",
  messagingSenderId: "720906584720"

};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AboutPage, 
    ContactPage,
    CoursePage,
    NewsPage,
    CourseDetailPage,
    YoutubePage,
    SignupPage,
    CustomerPage,
    NotePage,
    CameraPage,
    BarcodePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AboutPage, 
    ContactPage,
    CoursePage,
    NewsPage,
    CourseDetailPage,
    YoutubePage,
    SignupPage,
    CustomerPage,
    NotePage,
    CameraPage,
    BarcodePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    AngularFireDatabase,
    Camera,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CourseServiceProvider,
    NewsServiceProvider,
    AuthServiceProvider,
  ]
})
export class AppModule {}
