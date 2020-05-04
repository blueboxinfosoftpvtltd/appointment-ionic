import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CalenderPage } from './calender.page';
import { LoaderComponent } from '../loader/loader.component';
import { AppSchedulerComponent } from '../scheduler/scheduler.component';
import { SchedulerModule} from 'sw-scheduler';
import { EditEventComponent } from '../edit-event/edit-event.component';
import { SpinnerComponent } from '../spinner/spinner.component';
import { TimePickerComponent} from '../time-picker/time-picker.component';
import { RecurringEventComponent } from '../recurring-event/recurring-event.component';
import { LimitToPipe } from '../time-picker/limit-to.pipe';
import { DateFormatPipe } from '../time-picker/date-format.pipe';
const routes: Routes = [
  {
    path: '',
    component: CalenderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SchedulerModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CalenderPage,LimitToPipe,DateFormatPipe,
    LoaderComponent,AppSchedulerComponent,EditEventComponent,SpinnerComponent,TimePickerComponent,
    RecurringEventComponent],
  exports: [ LoaderComponent,AppSchedulerComponent,EditEventComponent,SpinnerComponent,TimePickerComponent,RecurringEventComponent
  ]
})
export class CalenderPageModule {}
