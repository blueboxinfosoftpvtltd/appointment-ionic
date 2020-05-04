import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AppointmentdispPage } from './appointmentdisp.page';
import {DxSchedulerModule} from 'devextreme-angular';
const routes: Routes = [
  {
    path: '',
    component: AppointmentdispPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    DxSchedulerModule
  ],
  declarations: [AppointmentdispPage]
})
export class AppointmentdispPageModule {}
