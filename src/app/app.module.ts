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
import { MessageService } from './message.service';
import { EventService } from './event.service';
import { LoaderService } from './loader.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule , HttpXhrBackend, HttpBackend} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { SchedulerModule} from 'sw-scheduler';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture/ngx';
// import { AnimateItemsDirective } from './directives/animate-items.directive';
import { IonicStorageModule } from '@ionic/storage';
import { VideoEditor } from '@ionic-native/video-editor/ngx';
import { HTTP} from '@ionic-native/http/ngx'
import Scheduler from "devextreme/ui/scheduler";
import { DocumentViewer,DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
// import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { VideoCapturePlus, VideoCapturePlusOptions, } from '@ionic-native/video-capture-plus/ngx';
//import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
@NgModule({
  declarations: [AppComponent

    
    ],
  entryComponents: [],
  imports: [
    BrowserModule,
    ReactiveFormsModule ,
    FormsModule,
    HttpClientModule,
   // HttpClientInMemoryWebApiModule.forRoot(InMemEventService, {delay: 1500, dataEncapsulation: false}),
    SchedulerModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AddvehiclePageModule,
    PopoverPageModule,
    AddnewopcodePageModule,
    HighlightimagePageModule,
    ComponentsModule,
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
    VideoCapturePlus,
   // FileTransfer,
    // PreviewAnyFile,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
