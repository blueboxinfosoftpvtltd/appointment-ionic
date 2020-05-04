import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreateappointmentPage } from './createappointment.page';
import { ComponentsModule } from '../component/components.module';
// import { CustomeinfoComponent } from '../component/customeinfo/customeinfo.component';
// import { VehicleinfoComponent } from '../component/vehicleinfo/vehicleinfo.component';
// import { MaintenanceComponent } from '../component/maintenance/maintenance.component';
// import { TransportationComponent } from '../component/transportation/transportation.component';
// import { AdvisorsComponent } from '../component/advisors/advisors.component';
// import { DatetimeComponent } from '../component/datetime/datetime.component';
// import { NotesComponent } from '../component/notes/notes.component';
const routes: Routes = [
  {
    path: '',
    component: CreateappointmentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CreateappointmentPage],

})
export class CreateappointmentPageModule {}
