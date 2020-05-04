import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CustomeinfoComponent } from '../component/customeinfo/customeinfo.component';
import { VehicleinfoComponent } from '../component/vehicleinfo/vehicleinfo.component';
import { MaintenanceComponent } from '../component/maintenance/maintenance.component';
import { TransportationComponent } from '../component/transportation/transportation.component';
import { AdvisorsComponent } from '../component/advisors/advisors.component';
import { DatetimeComponent } from '../component/datetime/datetime.component';
import { NotesComponent } from '../component/notes/notes.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [
                CustomeinfoComponent,
                VehicleinfoComponent,
                MaintenanceComponent,
                TransportationComponent,
                AdvisorsComponent,
                NotesComponent,
                DatetimeComponent],
  exports: [CustomeinfoComponent,
            VehicleinfoComponent,
            MaintenanceComponent,
            TransportationComponent,
            AdvisorsComponent,
            NotesComponent,
            DatetimeComponent]
})
export class ComponentsModule { }
