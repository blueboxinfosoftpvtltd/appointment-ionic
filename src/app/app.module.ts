import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

//import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DatePipe } from '@angular/common'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AddvehiclePageModule } from './addvehicle/addvehicle.module'
import { AddnewopcodePageModule } from './addnewopcode/addnewopcode.module';

import { SearchopcodePageModule } from './searchopcode/searchopcode.module';

import { PopoverPageModule } from './popover/popover.module'
import { EditEventComponent } from './edit-event/edit-event.component';
import { AppSchedulerComponent } from './scheduler/scheduler.component';
import { RecurringEventComponent } from './recurring-event/recurring-event.component';
import { TimePickerComponent} from './time-picker/time-picker.component';
import { LimitToPipe } from './time-picker/limit-to.pipe';
import { DateFormatPipe } from './time-picker/date-format.pipe';
import { LoaderComponent} from './loader/loader.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { InMemEventService } from './in-mem-event-service';
import { ComponentsModule } from '../app/component/components.module';
import { HttpErrorHandlerService } from './http-error-handler.service';
import { HighlightimagePageModule } from './highlightimage/highlightimage.module';
import {CitylistPageModule} from './citylist/citylist.module';
import { MessageService } from './message.service';
import { EventService } from './event.service';
import { LoaderService } from './loader.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule , HttpXhrBackend, HttpBackend, HTTP_INTERCEPTORS} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { SchedulerModule} from 'sw-scheduler';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture/ngx';
import { Media } from '@ionic-native/media/ngx';
import { StreamingMedia } from '@ionic-native/streaming-media/ngx';
// import { AnimateItemsDirective } from './directives/animate-items.directive';
import { IonicStorageModule } from '@ionic/storage';
import { VideoEditor } from '@ionic-native/video-editor/ngx';
import { HTTP} from '@ionic-native/http/ngx'
import Scheduler from "devextreme/ui/scheduler";
import { DocumentViewer,DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
// import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
//import { VideoCapturePlus, VideoCapturePlusOptions, } from '@ionic-native/video-capture-plus/ngx';
//import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import * as firebase from 'firebase';
import { LogInterceptor } from './interceptors/log.interceptor';

import { Keyboard } from '@ionic-native/keyboard/ngx';
import { Ionic4DatepickerModule } from '@logisticinfotech/ionic4-datepicker';
import { CommonInterceptor } from './interceptors/common.interceptor';


var firebaseConfig = {
  apiKey: "AIzaSyBh2JUhyoH4ud90Cd4cffv5crtXhoCzv88",
  authDomain: "appointment-1cebd.firebaseapp.com",
  databaseURL: "https://appointment-1cebd.firebaseio.com",
  projectId: "appointment-1cebd",
  storageBucket: "appointment-1cebd.appspot.com",
  messagingSenderId: "861556203367",
  appId: "1:861556203367:web:fd46ee68fede9eafad99c2",
  measurementId: "G-CET0FGHEJW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
@NgModule({
  declarations: [AppComponent

    
    ],
  entryComponents: [],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
   // HttpClientInMemoryWebApiModule.forRoot(InMemEventService, {delay: 1500, dataEncapsulation: false}),
    SchedulerModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AddvehiclePageModule,
    PopoverPageModule,
    AddnewopcodePageModule,
    SearchopcodePageModule,
    HighlightimagePageModule,
    CitylistPageModule,
    ComponentsModule,
    Ionic4DatepickerModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpErrorHandlerService,
    MessageService,
    EventService,
    LoaderService,
    MediaCapture,
    File,
    VideoPlayer,
    Camera,
    DatePipe,
    VideoEditor,
    HTTP,
    AndroidPermissions,
    DocumentViewer,
    Base64,
    ScreenOrientation,
    Media,
    StreamingMedia,
    FileTransfer,
    Keyboard,
    //ideoCapturePlus,
   // FileTransfer,
    // PreviewAnyFile,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy  },
    { provide: HTTP_INTERCEPTORS, useClass: LogInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: CommonInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
