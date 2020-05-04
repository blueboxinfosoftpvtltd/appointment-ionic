import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HighlightimagePage } from './highlightimage.page';

const routes: Routes = [
  {
    path: '',
    component: HighlightimagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HighlightimagePage]
})
export class HighlightimagePageModule {}
