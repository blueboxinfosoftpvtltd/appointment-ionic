import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchappoinmentPage } from './searchappoinment.page';

const routes: Routes = [
  {
    path: '',
    component: SearchappoinmentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchappoinmentPage]
})
export class SearchappoinmentPageModule {}
