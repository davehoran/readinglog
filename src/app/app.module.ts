import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { FIREBASE_CONFIG } from './app.firebase.config';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { BookListPage } from '../pages/book-list/book-list';
import { ReadBookPage } from '../pages/read-book/read-book';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ReportsPage } from '../pages/reports/reports';
import { SettingsPage } from '../pages/settings/settings';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuthProvider } from '../providers/angular-fire-auth/angular-fire-auth';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    BookListPage,
    ReadBookPage,
    LoginPage,
    RegisterPage,
    ReportsPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    BookListPage,
    ReadBookPage,
    LoginPage,
    RegisterPage,
    ReportsPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuthProvider
  ]
})
export class AppModule {}
