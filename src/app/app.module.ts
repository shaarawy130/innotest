import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {AngularFireModule, AuthMethods, AuthProviders} from 'angularfire2';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


//Providers


export const firebaseConfig ={

  apiKey: "AIzaSyBc-qEsxFSFSQzCmvM2kppsLqjkUTwuCnk",
    authDomain: "innogarage-63f7e.firebaseapp.com",
    databaseURL: "https://innogarage-63f7e.firebaseio.com",
    projectId: "innogarage-63f7e",
    storageBucket: "innogarage-63f7e.appspot.com",
    messagingSenderId: "626260651884"
}

const myFirebaseAuthConfig = {
  provider : AuthProviders.Password,
  method : AuthMethods.Password
}

@NgModule({
  declarations: [
    MyApp,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp), AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

  ],
  providers: [
    StatusBar,
    SplashScreen,

    
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
