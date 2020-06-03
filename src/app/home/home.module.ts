import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import {DxSchedulerModule} from 'devextreme-angular';
import { HomePage } from './home.page';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
//import Scheduler from 'devextreme/ui/scheduler';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DxSchedulerModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage],
  providers: [SpeechRecognition]
})
export class HomePageModule {}
