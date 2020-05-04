import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PdfviewPage } from './pdfview.page';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';
const routes: Routes = [
  {
    path: '',
    component: PdfviewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PdfViewerModule,
    PdfJsViewerModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PdfviewPage]
})
export class PdfviewPageModule {}
