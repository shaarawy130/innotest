import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { DataProvider } from '../../providers/data';
import * as firebase from 'firebase';
import { AngularFire} from 'angularfire2';
/**
 * Generated class for the Welcome page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class Welcome {
user;
uid="Q0x7Fk8kAEO41QeVuMuRnR5Buk73"

  constructor(public navCtrl: NavController, public navParams: NavParams, public angularfire:AngularFire) {}

  ionViewDidLoad() {
   // console.log('ionViewDidLoad WelcomePage');
    //this.user = this.angularfire.database.object('/voda/' + this.uid);
   // this.user = this.angularfire.database.object('/voda/' + this.uid);
   // console.log(this.user)
   // firebase.database().ref("/voda/"+this.uid).once('value').
   // then( snapchat => {this.user=snapchat.val();
    //  console.log(snapchat.val());})

   this.angularfire.database.object('/voda/' + this.uid).subscribe(user=> {
       this.user=user;
       console.log(this.user)
      })
 //     this.dataProvider.getUser("Q0x7Fk8kAEO41QeVuMuRnR5Buk73").subscribe(user=> {
   //    this.user=user;
     //  console.log(user)
     // })
  }


  toCharts(){
    console.log("charts")
    
    this.navCtrl.push('Chart');
  }

    toEvents(){
    console.log("charts")
    this.navCtrl.push('Events');
  }

  editProfile(){
  this.navCtrl.push('Home')
}

toPolls(){
  console.log(this.user)
  this.navCtrl.push('Polls')
}

}
