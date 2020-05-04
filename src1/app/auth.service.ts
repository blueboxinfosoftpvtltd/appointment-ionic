import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { LoadingController,ToastController  } from '@ionic/angular';
import { Observable } from 'rxjs';
import {Event} from '../app/event';
import { WebDriver } from 'protractor';

@Injectable({
  providedIn: 'root'
})

// export class Appointment {
//   text: string;
//   startDate: Date;
//   endDate: Date;
//   allDay?: boolean;
// }






export class AuthService {
  dealerlist:any;
  loading: any;
  toast: any;
  url: any;
  today: any;
  isLogin:boolean = false;
  custidvin:any;
  advisor:any;
  appointments: Event[];
  idsflag:any;
  constructor(private http : HttpClient,public loadingController: LoadingController,public toastController:ToastController) {
   
    this.url="http://appointmentapi.itsguru.com/api/Appointment";

    
  }

   async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Please wait'
    });
    await this.loading.present();
  }

  async dismissLoading() {
    this.loading.dismiss();
  }

  showToast(msg) {
    this.toast = this.toastController.create({
      message: msg,
      duration: 2000
    }).then((toastData)=>{
      console.log(toastData);
      toastData.present();
    });
  }

  HideToast(){
    this.toast = this.toastController.dismiss();
  }


   doLogin(username,Password){
    let logindata = {
      "UserName": username,
      "Password": Password
    }
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    return this.http.post(this.url + "/GetloginData", logindata, { headers: header });
    // let headers = new HttpHeaders();
    // headers.append('Content-Type', 'application/json');
    // return this.http.get("http://appointmentapi.itsguru.com/api/Appointment/GetloginData?Username="+username+"&Password="+Password, { headers: headers });
    /* get api  http://192.168.1.200:138/api/Appointment/GetloginData?Username=admin&Password=India@2141  for login data   */
  }

  GetSearchCustomer(dealerid,fname,lname,cname){
    if(fname == '' || fname == undefined || fname == null){
      fname = ''
    }
    if(lname == '' || lname == undefined || lname == null){
      lname = ''
    }
    if(cname == '' || cname == undefined || cname == null){
      cname = ''
    }
    let searchdata = {
      "DealershipId":dealerid,
      "FirstName":fname,      
      "LastName":lname,      
      "OtherName":cname,      
      "MobilePhone":"",
      "VIN":"",
      "IDSFlag": this.idsflag,
      "From":"0",
      "To":"10"
      }
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    return this.http.post(this.url + "/GetSearchCustomer", searchdata, { headers: header });
  }

  getDealership(){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.url + "/GetAllDealership", { headers: headers });
  }

  GetYearDetails(dealerid){

    let ydata = {
      "DealershipId":dealerid,
      "IDSFlag": this.idsflag
      }
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    return this.http.post(this.url + "/GetYearDetails", ydata, { headers: header });
    // let headers = new HttpHeaders();
    // headers.append('Content-Type', 'application/json');
    // return this.http.get(this.url + "/GetYearDetails", { headers: headers });
  }

  GetMakeDetails(dealerid){
    let mdata = {
      "IDSFlag": this.idsflag,
      "DealershipId":dealerid, 
      }
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    return this.http.post(this.url + "/GetMakeDetails", mdata, { headers: header });
    // let headers = new HttpHeaders();
    // headers.append('Content-Type', 'application/json');
    // return this.http.get(this.url + "/GetMakeDetails", { headers: headers });
  }

  GetColors(dealerid){
    let cdata = {
      "DealershipId":dealerid,
      "IDSFlag": this.idsflag
      }
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    return this.http.post(this.url + "/GetColorDetails", cdata, { headers: header });
    // let headers = new HttpHeaders();
    // headers.append('Content-Type', 'application/json');
    // return this.http.get(this.url + "/GetColorDetails", { headers: headers });
  }

  GetModelDetails(makeid,dealerid){
    let modeldata = {
        "MakeId":makeid,
        "DealershipId":dealerid,
        "IDSFlag":this.idsflag        
    }
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    return this.http.post(this.url + "/GetModelDetails", modeldata, { headers: header });
  }

  GetTrimDetails(dealerid){
    let tdata = {
      "DealershipId":dealerid,
      "IDSFlag": this.idsflag
      }
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    return this.http.post(this.url + "/GetTrimDetails", tdata, { headers: header });
    // let header = new HttpHeaders();
    // header.append('Content-Type', 'application/json');
    // return this.http.get(this.url + "/GetTrimDetails", { headers: header });
  }

  InsertVehicle(FkCustomerId,ColorId,LicensePlate,AverageMilesMonth,Milage,VIN,MakeId,YearId,ModelId,TrimId,UserId,FkDealershipId){
    this.today = new Date();
    let vehicledata = {
      "FkCustomerId":FkCustomerId,      
      "ColorId":ColorId,      
      "LicensePlate":LicensePlate,      
      "AverageMilesMonth":AverageMilesMonth,
      "Milage":Milage,      
      "VIN":VIN,      
      "MakeId":MakeId,
      "YearId":YearId,      
      "ModelId":ModelId,      
      "TrimId":TrimId,      
      "UserId":UserId,      
      "EntryDate":this.today.toLocaleDateString("en-US"),
      "ModifiedBy":UserId,
      "ModifiedDate":this.today.toLocaleDateString("en-US"),
      "FkDealershipId":FkDealershipId,
      "IDSFlag": this.idsflag      
      }
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    return this.http.post(this.url + "/InsertIntoVehicleDetail", vehicledata, { headers: header });
  }

  GetCountry(dealerid){
    let codata = {
      "IDSFlag": this.idsflag,
      "DealershipId":dealerid,
      }
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    return this.http.post(this.url + "/GetCountry", codata, { headers: header });
    // let headers = new HttpHeaders();
    // headers.append('Content-Type', 'application/json');
    // return this.http.get(this.url + "/GetCountry", { headers: headers });
  }

  GetState(CountryId,dealerid){
    let state={
      "CountryId":CountryId,
      "IDSFlag": this.idsflag,
      "DealershipId":dealerid
    }
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url + "/GetState", state, { headers: headers });
  }

  GetCity(StateId,dealerid){
    let city={
      "StateId":StateId,
      "IDSFlag": this.idsflag,
      "DealershipId":dealerid
    }
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url + "/GetCity", city, { headers: headers });
  }

  CustomerInsertUpdate(CustomerId,fname,lname,email,homephone,workphone,mobile,saddress,saddress1,countryid,
    cityid,stateid,zipcode,userid,dealerid){
    let customerdata={
      "CustomerId":CustomerId,
      "UserName":"",
      "Password":"",
      "FirstName":fname,
      "LastName":lname,
      "OtherName":"",
      "EmailId":email,
      "HomePhone":homephone,
      "WorkPhone":workphone,
      "MobilePhone":mobile,
      "Address1":saddress,
      "Address2":saddress1,
      "CountryId":countryid,
      "CityId":cityid,
      "StateId":stateid,
      "ZipCode":zipcode,
      "ColorId":"0",
      "LicensePlate":"0",
      "AverageMilesOrMonth":"0",
      "VIN":"",
      "Mileage":"0",
      "MakeId":"0",
      "YearId":"0",
      "ModelId":"0",
      "TrimId":"0",
      "UserId":userid,
      "ModifiedBy":fname,
      "DealershipId":dealerid,
      "IDSFlag":this.idsflag
      }

      
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url + "/UpdateCustomer", customerdata, { headers: headers });
  }

  InsertNewCustomer(dealerid,fname,lname,companyname,saddress
    ,countryid,stateid,cityid,mobile,email,vin,username,password,saddress1,zipcode,homephone,workphone,yearid,makeid,modelid,
    trimid,colorid,mileage,avgmileage,licenseplate,userid){
    let customerdata={
      "UserName":username,
      "Password":password,
      "FirstName":fname,
      "LastName":lname,
      "OtherName":companyname,
      "EmailId":email,
      "HomePhone":homephone,
      "WorkPhone":workphone,
      "MobilePhone":mobile,
      "Address1":saddress,
      "Address2":saddress1,
      "CountryId":countryid,
      "CityId":cityid,
      "StateId":stateid,
      "ZipCode":zipcode,
      "ColorId":colorid,
      "LicensePlate":licenseplate,
      "AverageMilesOrMonth":avgmileage,
      "VIN":vin,
      "Mileage":mileage,
      "MakeId":makeid,
      "YearId":yearid,
      "ModelId":modelid,
      "TrimId":trimid,
      "UserId":userid,
      "ModifiedBy":userid,
      "DealershipId":dealerid,
      "IDSFlag":this.idsflag
      }

      
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url + "/InsertCustomer", customerdata, { headers: headers });
  }

  GetCustomer(delaershipid,customerid){
    let customerdata={
      "DealershipId":delaershipid,
      "CustomerId":customerid,
      "IDSFlag":this.idsflag
    }
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url + "/GetCustomerByCustomerID", customerdata, { headers: headers });
  }

  GetVehicleDetailByVINCustomerID(delaershipid,customerid,vin,appointmentid){
    let vindata={
      "FkDealershipId":delaershipid,
      "FkCustomerId":customerid,
      "VIN":vin,
      "IDSFlag":this.idsflag,
      "FkAppointmentId":appointmentid
    }
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url + "/GetVehicleDetailByVINCustomerID", vindata, { headers: headers });
  }

  GetMOPCode(delarshipid,from,to,searchword){
    let opdata={
      "DlrshipId":delarshipid,
      "From":from,
      "To":to,
      "OPCodeSearch":searchword,
      "IDSFlag":this.idsflag
    }
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url + "/GetMOPCodeListByPage", opdata, { headers: headers });
  }


  MOPCodeInsert(opcode,sale,hours,desc,userid,dealerid){
    let opdatainsert={
      "OpCode":opcode,
      "Description":desc,
      "Sale":sale,
      "Hours":hours,
      "UserId":userid,
      "DlrshipId":dealerid,
      "IDSFlag":this.idsflag    
      }
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url + "/MOPCodeInsert", opdatainsert, { headers: headers });
  }

  GetTransportationList(delaershipid){
    let transportata={
      "DealershipId":delaershipid,
      "IDSFlag":this.idsflag 
    }
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url + "/GetTransportationList", transportata, { headers: headers });
  }

  GetWeekDays(){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.url + "/GetWeekDays", { headers: headers });
  }

  CalculateDealershipHRS(delaershipid,weekday,value,userid){
    let dealershipata={
      "DealershipId":delaershipid,
      "FieldName":weekday,
      "FieldValue":true,
      "UserId":userid
    }
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url + "/CalculateDealershipHRS", dealershipata, { headers: headers });
  }

  GetAdvisorList(delaershipid){
    let advisordata={
      "DealershipId":delaershipid,
      "IDSFlag":this.idsflag 
    }
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url + "/GetAdvisorList", advisordata, { headers: headers });
  }

  
  GetTimeIntervals(delaershipid,advisorid,date,appid){
    var d = new Date().toLocaleTimeString(); // for now time
    let intervaldata={
      "DealershipId":delaershipid,
      "CreatedFor":advisorid,
      "CurrentDate":date,
      "CurrentTime": d,
      "AppointmentID":appid
    }
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url + "/GetTimeIntervals", intervaldata, { headers: headers });
  }

  // this.dealerid,this.CustomerId,this.fname,this.lname,this.userid,"Pending",this.myForm.value.player1,this.sdate1,this.Promisetime,this.AppointmentTime,this.tvalue,this.colorid,this.licenseplate,this.avgmileage,this.mileage,this.VIN,this.makeid,this.yearid,
  // this.modelid,this.trimid,this.opArray,this.lfw,this.lft,this.lrw,this.lrt,this.rfw,this.rft,this.rrw,this.rrt,this.WipersAndLightsList,this.appointmentid



  InsertAppointment(dealerid,CustomerId,fname,lname,cname,userid,status,notes,sdate,time,AppointmentTime,tvalue,colorid,licenseplate
    ,avgmileage,mileage,VIN,makeid,yearid,modelid,trimid,opArray,lfw,lft,lrw,lrt,rfw,rft,rrw,rrt,WipersAndLightsList,appointmentid,advisorid,makename,modelname,custemail,yname,aname,semail,stext,homeno,workphone,cellno,zip,country,state,city,add1,add2,sub){

      var CustomerName;
      if(fname == "" || fname == undefined || fname == null){
        if(lname == "" || lname == undefined || lname == null){
           CustomerName = cname;
        }
        else{
           CustomerName = fname + " " + lname;
        }
      }
    

   if(this.idsflag == 0){
    homeno="";
    workphone="";
    cellno="";
    zip="";
    country="";
    state="";
    city="";
    add1="";
    add2="";
   }
    let appointmentdata={
      "DealershipId":dealerid,
      "CustomerId":CustomerId,
      "CustomerName":CustomerName,
      "StartDate":"",
      "EndDate":"",
      "CreatedBy":userid,
      "CreatedFor":advisorid,
      "Status":status,
      "NotesList":notes,
      "PromiseDate":sdate,
      "Promisetime":time,
      "AppointmentTime":AppointmentTime,
      "Transportation":tvalue,
      "ColorId":colorid,
      "LicensePlate":licenseplate,
      "AverageMilesOrMonth":avgmileage,
      "Mileage":mileage,
      "VIN":VIN,
      "MakeId":makeid,
      "YearId":yearid,
      "ModelId":modelid,
      "TrimId":trimid,
      "UserId":userid,
      "ModifiedBy":"",
      "UsedHRS":"",
      "LeftFrontwheel":lfw,
      "LeftFrontTire":lft,
      "LeftRearwheel":lrw,
      "LeftRearTire":lrt,
      "RightFrontWheel":rfw,
      "RightFrontTire":rft,
      "RightRearWheel":rrw,
      "RightRearTire":rrt,
      "OPCodeList": opArray,
      "WipersAndLightsList":WipersAndLightsList,
      "AppointmentId":appointmentid,
      "CustomerEmail":custemail,
      "Vehicalemake":makename,
      "Vehicalemodel":modelname,
      "Vehicaleyear":yname,
      "AdvisorName":aname,
      "SendEmail":semail,
      "SendText":stext,
      "HomeNo":homeno,
      "WorkNo":workphone,
      "CellNo":cellno,
      "Zip":zip,
      "Country":country,
      "State":state,
      "City":city,
      "Address1":add1,
      "Address2":add2,
      "IDSFlag":this.idsflag,
      "Notes":sub
    }
    console.log(appointmentdata);
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url + "/InsertAppointment", appointmentdata, { headers: headers });
  }

  UpdateAppointment(dealerid,CustomerId,fname,lname,cname,userid,status,notes,sdate,time,AppointmentTime,tvalue,colorid,licenseplate
    ,avgmileage,mileage,VIN,makeid,yearid,modelid,trimid,opArray,lfw,lft,lrw,lrt,rfw,rft,rrw,rrt,WipersAndLightsList,appointmentid,advisorid,makename,modelname,custemail,yname,aname,semail,stext,homeno,workphone,cellno,zip,country,state,city,add1,add2,sub){
  // UpdateAppointment(dealerid,CustomerId,fname,lname,userid,status,notes,sdate,time,AppointmentTime,tvalue,colorid,licenseplate
  //   ,avgmileage,mileage,VIN,makeid,yearid,modelid,trimid,opArray,lfw,lft,lrw,lrt,rfw,rft,rrw,rrt,WipersAndLightsList,appointmentid,advisorid,homeno,workphone,cellno,zip,country,state,city,add1,add2){
    var CustomerName;
    if(fname == "" || fname == undefined || fname == null){
      if(lname == "" || lname == undefined || lname == null){
         CustomerName = cname;
      }
      else{
         CustomerName = fname + " " + lname;
      }
    }
   if(this.idsflag == 0){
    homeno="";
    workphone="";
    cellno="";
    zip="";
    country="";
    state="";
    city="";
    add1="";
    add2="";
   }


    let appointmentdata={
      "DealershipId":dealerid,
      "CustomerId":CustomerId,
      "CustomerName":CustomerName,
      "StartDate":"",
      "EndDate":"",
      "CreatedBy":userid,
      "CreatedFor":advisorid,
      "Status":status,
      "NotesList":notes,
      "PromiseDate":sdate,
      "Promisetime":time,
      "AppointmentTime":AppointmentTime,
      "Transportation":tvalue,
      "ColorId":colorid,
      "LicensePlate":licenseplate,
      "AverageMilesOrMonth":avgmileage,
      "Mileage":mileage,
      "VIN":VIN,
      "MakeId":makeid,
      "YearId":yearid,
      "ModelId":modelid,
      "TrimId":trimid,
      "UserId":userid,
      "ModifiedBy":"",
      "UsedHRS":"",
      "LeftFrontwheel":lfw,
      "LeftFrontTire":lft,
      "LeftRearwheel":lrw,
      "LeftRearTire":lrt,
      "RightFrontWheel":rfw,
      "RightFrontTire":rft,
      "RightRearWheel":rrw,
      "RightRearTire":rrt,
      "OPCodeList": opArray,
      "WipersAndLightsList":WipersAndLightsList,
      "AppointmentId":appointmentid,
      "CustomerEmail":custemail,
      "Vehicalemake":makename,
      "Vehicalemodel":modelname,
      "Vehicaleyear":yname,
      "AdvisorName":aname,
      "SendEmail":semail,
      "SendText":stext,
      "HomeNo":homeno,
      "WorkNo":workphone,
      "CellNo":cellno,
      "Zip":zip,
      "Country":country,
      "State":state,
      "City":city,
      "Address1":add1,
      "Address2":add2,
      "IDSFlag":this.idsflag,
      "Notes":sub


      // "DealershipId":dealerid,
      // "CustomerId":CustomerId,
      // "CustomerName":CustomerName,
      // "StartDate":"",
      // "EndDate":"",
      // "CreatedBy":userid,
      // "CreatedFor":advisorid,
      // "Status":status,
      // "NotesList":notes,
      // "PromiseDate":sdate,
      // "Promisetime":time,
      // "AppointmentTime":AppointmentTime,
      // "Transportation":tvalue,
      // "ColorId":colorid,
      // "LicensePlate":licenseplate,
      // "AverageMilesOrMonth":avgmileage,
      // "Mileage":mileage,
      // "VIN":VIN,
      // "MakeId":makeid,
      // "YearId":yearid,
      // "ModelId":modelid,
      // "TrimId":trimid,
      // "UserId":userid,
      // "ModifiedBy":"",
      // "UsedHRS":"",
      // "LeftFrontwheel":lfw,
      // "LeftFrontTire":lft,
      // "LeftRearwheel":lrw,
      // "LeftRearTire":lrt,
      // "RightFrontWheel":rfw,
      // "RightFrontTire":rft,
      // "RightRearWheel":rrw,
      // "RightRearTire":rrt,
      // "OPCodeList": opArray,
      // "WipersAndLightsList":WipersAndLightsList,
      // "AppointmentId":appointmentid,
      // "CustomerEmail":"",
      // "Vehicalemake":"",
      // "Vehicalemodel":"",
      // "Vehicaleyear":"",
      // "AdvisorName":"",
      // "SendEmail":"false",
      // "SendText":"false",
      // "HomeNo":homeno,
      // "WorkNo":workphone,
      // "CellNo":cellno,
      // "Zip":zip,
      // "Country":country,
      // "State":state,
      // "City":city,
      // "Address1":add1,
      // "Address2":add2,
      // "IDSFlag":this.idsflag 
    }
    console.log(appointmentdata);
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url + "/UpdateAppointment", appointmentdata, { headers: headers });
  }

  SearchAppointment(date,dearshipid,fname,lname,vin){
    if(fname == '' || fname == undefined || fname == null){
      fname = ''
    }
     if(lname == '' || lname == undefined || lname == null){
      lname = ''
    }
     if(vin == '' || vin == undefined || vin == null){
      vin = ''
    }
    let aptdata={
      "DealershipId":dearshipid,
      "FirstName":fname,
      "LastName":lname,
      "VIN":vin,
      "CurrentDate":date
    }
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url + "/SearchAppointment", aptdata, { headers: headers });
  }

  CarImageInsert(delaershipid,AppointmentId,VIN,userid,type,CompleteImage,takeorder){
    var d = new Date().toLocaleTimeString(); // for now time
    let imgdata=
    {
    "DealershipID": delaershipid,
    "AppointmentID": AppointmentId,
    "VIN":VIN,
    "CreatedBy":userid,
    "ImageType": type,   /* 0 For Car Image 1 For Signature */
    "ImagePathList":CompleteImage,
    "DisplayOrderList":takeorder,
    "IDSFlag":this.idsflag
    }
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url + "/CarImageInsert", imgdata, { headers: headers });
  }

  GetWheelsTiresDetails(dealerid){
    let wdata={
      "IDSFlag":this.idsflag,
      "DealershipId":dealerid
    }
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url + "/GetWheelsTiresDetails", wdata, { headers: headers });
    // let headers = new HttpHeaders();
    // headers.append('Content-Type', 'application/json');
    // return this.http.get(this.url + "/GetWheelsTiresDetails", { headers: headers });
  }

  GetWipersAndLightsType(dealerid){
    let wpdata={
      "IDSFlag":this.idsflag,
      "DealershipId":dealerid
    }
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url + "/GetWipersAndLightsType", wpdata, { headers: headers });
    // let headers = new HttpHeaders();
    // headers.append('Content-Type', 'application/json');
    // return this.http.get(this.url + "/GetWipersAndLightsType", { headers: headers });
  }

  setdealers(dealers){
   this.dealerlist = dealers;
  }

  getdealers(){
    return this.dealerlist;
  }

  secustidvin(data){
   this.custidvin = data;
  }

  getcustidvin(){
    return new Observable((observer)=>{
       observer.next(this.custidvin);
    })
  }

  setadvisor(data){
   this.advisor = data;
  }

  getadvisor(){
    return new Observable((observer)=>{
      observer.next(this.advisor);
    })
  }

  getappointdata(advisorid,fkdealer,showall,cdate,type): Observable<Event>{
    let appointmentdata={
      "AdvisorId":advisorid,
      "FkDealershipId":fkdealer,
      "Type":type,
      "ShowAll":showall,
      "IDSFlag":this.idsflag,
      "CurrentDate":cdate,
      
    }
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
   return this.http.post(this.url + "/GetAppointmentDetails", appointmentdata, { headers: headers })
  }

  getAppointments(): Event[] {
    return this.appointments;
}

setids(val){
  this.idsflag = val;
}
getids(){
  return this.idsflag;
}
}

