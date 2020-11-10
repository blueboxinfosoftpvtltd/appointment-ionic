import {catchError, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HttpErrorHandlerService, HandleError} from './http-error-handler.service';
import { Event } from './event';
import { AuthService } from './auth.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EventService {
  private handleError: HandleError;

  constructor(private http: HttpClient, exceptionSvc: HttpErrorHandlerService,private authservice :  AuthService) {
    this.handleError = exceptionSvc.createHandleError('EventService');
  }

  getEvents(dealerid,advisorid,showall): Observable<Array<Event>> {
   
    // this.authservice.getappointment().subscribe<Event[]>((res)=>{

    // })
    // const url = `api/events`;
    // return this.http.get<Event[]>(url)
    //                 .pipe(tap(events => {
    //                    for (const event of events) {
    //                     // for(let i=0 ; i<events.length;i++){
    //                     this.setEventDateTime(event);
    //                   }
    //                 }), catchError(this.handleError('getEvents', new Array<Event>())));

    //const url = "http://appointmentapi.itsguru.com/api/Appointment";
    const url = "http://appointmentapiprod.itsguru.com/api/Appointment";
    
    let appointmentdata={
      "AdvisorId":advisorid,
      "FkDealershipId":dealerid,
      "Type":"2",
      "ShowAll":showall
    }
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<Event[]>(url + "/GetAppointmentDetails", appointmentdata, { headers: headers }).pipe(tap(events =>{
      console.log(events);
      for(const event of events){
        this.setEventDateTime(event);
      }
    }),catchError(this.handleError('getEvents', new Array<Event>())));
  }

  getEvent(id: number): Observable<Event> {
    const url = `api/events/?id=${id}`;
    return this.http.get<Event>(url)
                    .pipe(tap(ev => { this.setEventDateTime(ev); }), catchError(this.handleError('getEvent', {} as Event)));
  }

  createEvent(event: Event): Observable<Event> {
    const url = `api/events`;
    return this.http.post<Event>(url, event, httpOptions)
                    .pipe(tap(ev => { this.setEventDateTime(ev); }), catchError(this.handleError('createEvent', event)));
  }

  updateEvent(event: Event): Observable<Event> {
    const url = `api/events`;
    return this.http.put<Event>(url, event, httpOptions)
                    .pipe(catchError(this.handleError('updateEvent', event)));
  }

  deleteEvent(id: number) {
    const url = `api/events/${id}`;
    return this.http.delete(url, httpOptions)
                    .pipe(catchError(this.handleError('deleteEvent')));
  }

  private setEventDateTime(ev: Event) {
    const start = new Date(ev.start);
    ev.start = start;
    const end = new Date(ev.end);
    ev.end = end;
  }
}
