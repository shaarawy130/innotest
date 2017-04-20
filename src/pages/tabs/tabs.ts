import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import * as firebase from 'firebase';
/**
 * Generated class for the Tabs page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class Tabs {

unreadGroupMessagesCount;
  groupsInfo;
  groupList;
  tab;
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = 'Welcome';
  tab2Root: any = 'Team';
  tab3Root: any = 'Groupchat';
  constructor(public navCtrl: NavController, public navParams: NavParams,public af: AngularFire) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tabs');

    
  }


go(){
  this.navCtrl.push('Login')
}
}
