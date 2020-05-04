import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { SchedulerComponent } from 'sw-scheduler';
import { Subscription, Subscriber } from 'rxjs';
import { switchMap, subscribeOn } from 'rxjs/operators';
import * as _ from 'lodash';
import { Router, ActivatedRoute } from '@angular/router';
import { EventService } from '../event.service';
import { SchedulerService } from './scheduler.service';
import { LoaderService } from '../loader.service';
import { Event } from '../event';
import { EventInfo } from '../event-info';
import { RecurringEventViewModel } from '../recurring-event-view-model';
import { AuthService } from '../auth.service';
import { Storage } from '@ionic/storage';
import { CreateappointmentPage } from '../createappointment/createappointment.page';
import * as moment from "moment";

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css'],
  providers: [SchedulerService]
})
export class AppSchedulerComponent implements OnInit, OnDestroy {
  private eventAddedSubscription: Subscription;
  private eventUpdatedSubscription: Subscription;
  private eventDeletedSubscription: Subscription;

  processing = false;
  editMode = false;
  ensureEventVisibleId: number;
  view: any = 'weekView';
  tempview:any;
  date = new Date();
  calendars = new Array<{name: string, events: Array<Event>}>();
  advisorid:any;
  custvin:any;
  dealerid:any;
  showall:any;
  currentdate:any;
  currenttime:any;
  appointmentdate:any;
  appointmenttime:any;
  @ViewChild(SchedulerComponent, {static: false}) scheduler: SchedulerComponent;

  getNewEvent = (eventInfo: EventInfo): Event => {
    console.log(eventInfo);
    const event = {
      start: eventInfo.startTime,
      end: eventInfo.endTime
    };
    if(eventInfo.startTime != null && eventInfo.endTime){
 
      //console.log("click");
    }
    return event;
  }

  constructor(private schedulerSvc: SchedulerService, private eventSvc: EventService, private loaderSvc: LoaderService,private authservice : AuthService,public storage : Storage,private router: Router) { 
    this.currentdate = (moment(new Date).format('YYYY-MM-DD'));
    this.currenttime = (moment(new Date).format('HH:mm'));
    console.log(this.currentdate);
    console.log(this.currenttime);
  }

  ngOnInit() {
    this.authservice.presentLoading();
    
    // this.eventAddedSubscription = this.schedulerSvc.eventAdded$.subscribe(event => {
    //   // add new event to the calendar
    //   let calendar: {name: string, events: Array<Event>};
    //   const calendars = this.calendars.filter(cal => cal.name.toUpperCase() === event.instructor.toUpperCase());
    //   if (calendars.length > 0) {
    //     calendar = calendars[0];
    //   } else {
    //     calendar = {name: event.instructor, events: []};
    //     this.calendars.push(calendar);
    //   }
    //   calendar.events.push(event);

    //   this.ensureEventVisibleId = event.id;

    //   // close the modal
    //   this.scheduler.closeSelectedEvent();
    // });
    // this.eventUpdatedSubscription = this.schedulerSvc.eventUpdated$.subscribe(event => {
    //   // close the modal
    //   this.scheduler.closeSelectedEvent();
    // });
    // this.eventDeletedSubscription = this.schedulerSvc.eventDeleted$.subscribe(id => {
    //   // removes the event from the calendar
    //   for (const calendar of this.calendars) {
    //     for (let i = 0; i < calendar.events.length; i++) {
    //       if (calendar.events[i].id === id) {
    //         calendar.events.splice(i, 1);
    //         break;
    //       }
    //     }
    //   }
    //   // close the modal
    //   this.scheduler.closeSelectedEvent();
    // });

    // get all events
    this.loaderSvc.load(true);
      this.storage.get('userid').then((val)=>{
      this.advisorid = val;
      this.storage.get('dealerid').then((val) =>{
        this.dealerid = val;
        this.storage.get('showall').then((val) =>{
          this.showall = val;
        this.eventSvc.getEvents(this.dealerid,this.advisorid,this.showall).subscribe(events => {
      for (const event of events) {
        let calendar: {name: string, events: Array<Event>};
        const calendars = this.calendars.filter(data => data.name === event.instructor);
        if (calendars.length > 0) {
          calendar = calendars[0];
        } else {
          calendar = {
            name: event.Description,
            events: new Array<Event>()
          };
          this.calendars.push(calendar);
          console.log(this.calendars);
        }
        calendar.events.push(event);
      }
       this.view = "dayView";
       this.authservice.dismissLoading();
      //this.ensureFirstEventVisible();
      this.loaderSvc.load(false);
    });
  })
})
})
  }

  ngOnDestroy() {
    if (this.eventAddedSubscription) {
      this.eventAddedSubscription.unsubscribe();
    }
    if (this.eventUpdatedSubscription) {
      this.eventUpdatedSubscription.unsubscribe();
    }
    if (this.eventDeletedSubscription) {
      this.eventDeletedSubscription.unsubscribe();
    }
  }

  // edit(){
  //   console.log("click");
  // }

  // onUpdateEvent(eventInfo: EventInfo) {
  
  //       for (const calendar of this.calendars) {
  //        for (const ev of calendar.events) {
  //         const updatedEvent = new Event();
  //         console.log(ev.id);
  //         console.log(eventInfo);
  //         //  if (ev.id === eventInfo.rootAppointment.id) {
  //         //   console.log(eventInfo);
  //         //   }
        
  //        }
  //       }
  // }


  onAddEvent(event: Event) {

  }

  onSelectEvent(event: Event) {
    console.log(event);
    let data = {
      'CustomerId' : event.FkCustomerId,
      "VIN": event.VIN,
      "data":event
    }
    this.appointmentdate = moment(event.StartDate).format('YYYY-MM-DD');
    console.log(this.appointmentdate);
    this.appointmenttime = moment(event.StartDate).format('HH:mm');
    console.log(this.appointmenttime);
    if(this.appointmentdate == this.currentdate){
    if(this.currenttime < "18:00"){
      if(this.appointmenttime > this.currenttime){
      this.authservice.secustidvin(data);
     this.router.navigateByUrl('/createappointment');
      }
    }
  }
 else if(this.appointmentdate > this.currentdate){
      this.authservice.secustidvin(data);
     this.router.navigateByUrl('/createappointment');
  }
    //this.authservice.secustidvin(data);
    //this.router.navigateByUrl('/createappointment');
    // event.preventDefault();
  }

  // onUpdateEvent(eventInfo: EventInfo) {
  //   console.log(eventInfo);
  //   // check if this is a recurring event
  //   if (eventInfo.rootAppointment && eventInfo.rootAppointment.id) {

  //     // updates the recurrence exception on the root appointment
  //     for (const calendar of this.calendars) {
  //       for (const ev of calendar.events) {
  //         const updatedEvent = new Event();
  //         Object.assign(updatedEvent, _.cloneDeep(ev));

  //         if (ev.id === eventInfo.rootAppointment.id) {
  //           if (eventInfo.rootAppointment.recurrenceException) {
  //             if (ev.recurrenceException) {
  //               updatedEvent.recurrenceException += ',';
  //             } else {
  //               updatedEvent.recurrenceException = '';
  //             }
  //             updatedEvent.recurrenceException += eventInfo.rootAppointment.recurrenceException;
  //           }

  //           this.processing = true;
  //           this.eventSvc.updateEvent(ev)
  //                        .pipe(switchMap(() => {
  //                          const newEvent = _.cloneDeep(ev) as Event;
  //                          newEvent.id = null;
  //                          newEvent.start = eventInfo.startTime;
  //                          newEvent.end = eventInfo.endTime;
  //                          newEvent.recurrenceException = null;
  //                          newEvent.recurrencePattern = null;
  //                          return this.eventSvc.createEvent(newEvent);
  //                        }))
  //                        .subscribe(event => {
  //                          ev.recurrenceException = updatedEvent.recurrenceException;
                           
  //                          calendar.events.push(event);
  //                          this.ensureEventVisibleId = event.id;
  //                          this.processing = false;
  //                        }) ;
  //         }
  //       }
  //     }
  //     return;
  //   }

  //   let found = false;
  //   for (const calendar of this.calendars) {
  //     for (const ev of calendar.events) {
  //       if (ev.id === eventInfo.id) {
  //         found = true;

  //         // saves to the database
  //         const copy = _.cloneDeep(ev);
  //         copy.start = eventInfo.startTime;
  //         copy.end = eventInfo.endTime;

  //         this.processing = true;
  //         this.eventSvc.updateEvent(copy).subscribe(() => {
  //           // updates the event
  //           ev.start = eventInfo.startTime;
  //           ev.end = eventInfo.endTime;

  //           this.processing = false;
  //         });
  //         return;
  //       }
  //     }
  //   }

  //   if (!found) {
  //     // this.scheduler.render();
  //   }
  // }

  onCloseEventModal() {

  }

  onViewChanged(args: any) {
  //   this.authservice.presentLoading();
  //   if(this.view == "dayView"){
  //     this.view = "weekView";
  //     this.tempview = "dayView";
  //   }
  //   else{
  //     this.view = "dayView";
  //     this.tempview = "weekView";
  //   }
   
  //  setTimeout(() => {
  //    if(this.tempview == "dayView"){
  //     this.view = "dayView";
  //    }
  //    else{
  //      this.view = "weekView";
  //    }
    
  //   this.authservice.dismissLoading();
  //  }, 500);
  }

  onDateChanged(args: any) {
    console.log(this.view);
    this.authservice.presentLoading();
    if(this.view == "dayView"){
      this.view = "weekView";
      this.tempview = "dayView";
    }
     else if(this.view == "weekView"){
      console.log(this.view);
      this.view = "monthView";
      this.tempview = "weekView";
    }
    else if(this.view == "monthView"){
      console.log(this.view);
      this.view = "dayView";
      this.tempview = "monthView";
    }
   
   setTimeout(() => {
     if(this.tempview == "dayView"){
      this.view = "dayView";
     }
     else if(this.tempview == "weekView"){
       this.view = "weekView";
     }
     else if(this.tempview == "monthView"){
      this.view = "monthView";
    }
    
    this.authservice.dismissLoading();
   }, 200);
  
   console.log("call");
  }

  // ensureFirstEventVisible() {
  //   let last: Event = null;

  //   let startTime = new Date();
  //   for (const calendar of this.calendars) {
  //     for (const event of calendar.events) {
  //       if (!last) {
  //         last = event;
  //         startTime.setHours(event.start.getHours(), event.start.getMinutes(), 0);
  //       } else {
  //         const start = new Date();
  //         start.setHours(event.start.getHours(), event.start.getMinutes(), 0);

  //         if (start < startTime) {
  //           startTime = start;
  //           last = event;
  //         }
  //       }
  //     }
  //   }

  //   if (last) {
  //     this.ensureEventVisibleId = last.id;
  //   } else {
  //     this.ensureEventVisibleId = null;
  //   }
  // }
}
