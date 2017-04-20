import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Groupchat } from './groupchat';

@NgModule({
  declarations: [
    Groupchat,
  ],
  imports: [
    IonicPageModule.forChild(Groupchat),
  ],
  exports: [
    Groupchat
  ]
})
export class GroupchatModule {}
