import { Component, OnInit } from '@angular/core';
import {DxSchedulerModule} from 'devextreme-angular';
import * as AspNetData from "devextreme-aspnet-data-nojquery";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {AuthService} from '../../app/auth.service';
import * as moment from "moment";
import { Event} from '../event';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-appointmentdisp',
  templateUrl: './appointmentdisp.page.html',
  styleUrls: ['./appointmentdisp.page.scss'],
})
export class AppointmentdispPage {
  //appointmentsData: any[];
  appointmentsData:any;
  //resdata:any;
  currentDate: any;
  advisorid:any;
  dealerid:any;
  //currentDate: Date = new Date(2017, 4, 23);
  constructor(private http : HttpClient,private auth : AuthService,public storage : Storage) { 

    
    this.currentDate = (moment(new Date).format('YYYY-MM-DD'));
    //var url = "http://appointmentapi.itsguru.com/api/Appointment";
    // var url = "https://js.devexpress.com/Demos/Mvc/api/SchedulerData";
    // this.appointmentsData = AspNetData.createStore({
    //     key: "AppointmentId",
    //     loadUrl: url + "/Get",
    //     insertUrl: url + "/Post",
    //     updateUrl: url + "/Put",
    //     deleteUrl: url + "/Delete",
    //     onBeforeSend: function (method, ajaxOptions) {
    //         ajaxOptions.xhrFields = { withCredentials: true };
    //     }
    // });

    // const url = "http://appointmentapi.itsguru.com/api/Appointment";
//     this.storage.get('userid').then((val)=>{
//       this.advisorid = val;
//       this.storage.get('dealerid').then((val) =>{
//         this.dealerid = val; 
//     this.auth.getappointdata(this.advisorid,this.dealerid,"").subscribe((res) =>{
//      this.appointmentsData = res;
//       // for(let i=0 ; i<this.resdata.length;i++){
//       //   this.appointmentsData.push(this.resdata[i]);
//       // }
//     })
//   })
// })

    // this.appointmentsData = this.auth.getAppointments();
    console.log(this.appointmentsData);
}
  }
 


