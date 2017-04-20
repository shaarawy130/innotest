import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Team } from './team';

@NgModule({
  declarations: [
    Team,
  ],
  imports: [
    IonicPageModule.forChild(Team),
  ],
  exports: [
    Team
  ]
})
export class TeamModule {}
