import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RohistorypdfPage } from './rohistorypdf.page';

const routes: Routes = [
  {
    path: '',
    component: RohistorypdfPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RohistorypdfPage]
})
export class RohistorypdfPageModule {}
