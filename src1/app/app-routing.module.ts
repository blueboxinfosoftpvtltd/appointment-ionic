import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'appointment', loadChildren: './appointment/appointment.module#AppointmentPageModule' },
  { path: 'addvehicle', loadChildren: './addvehicle/addvehicle.module#AddvehiclePageModule' },
  { path: 'createappointment', loadChildren: './createappointment/createappointment.module#CreateappointmentPageModule' },
  { path: 'addnewopcode', loadChildren: './addnewopcode/addnewopcode.module#AddnewopcodePageModule' },
  { path: 'calender', loadChildren: './calender/calender.module#CalenderPageModule' },
  { path: 'popover', loadChildren: './popover/popover.module#PopoverPageModule' },
  { path: 'signature', loadChildren: './signature/signature.module#SignaturePageModule' },
  { path: 'takeimage', loadChildren: './takeimage/takeimage.module#TakeimagePageModule' },
  { path: 'playvideo', loadChildren: './playvideo/playvideo.module#PlayvideoPageModule' },
  { path: 'highlightimage', loadChildren: './highlightimage/highlightimage.module#HighlightimagePageModule' },
  { path: 'searchappoinment', loadChildren: './searchappoinment/searchappoinment.module#SearchappoinmentPageModule' },
  { path: 'createcust', loadChildren: './createcust/createcust.module#CreatecustPageModule' },
  { path: 'appointmentdisp', loadChildren: './appointmentdisp/appointmentdisp.module#AppointmentdispPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
