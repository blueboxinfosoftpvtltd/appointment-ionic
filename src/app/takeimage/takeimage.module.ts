import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import {
  MediaCapture,
  MediaFile,
  CaptureError
} from '@ionic-native/media-capture/ngx';
import { File, FileEntry } from '@ionic-native/File/ngx';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { StreamingMedia } from '@ionic-native/streaming-media/ngx';
import { TakeimagePage } from './takeimage.page';
import { VideoEditor } from '@ionic-native/video-editor/ngx';
//import {VideoPageModule} from '../video/video.module';
const routes: Routes = [
  {
    path: '',
    component: TakeimagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  
    //VideoPageModule
  ],
  providers :[
    MediaCapture,
    File,
    Media,
    StreamingMedia,
    VideoEditor
  ],
  declarations: [TakeimagePage]
})
export class TakeimagePageModule {}
