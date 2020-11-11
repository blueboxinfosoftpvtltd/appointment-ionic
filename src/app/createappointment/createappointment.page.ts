import { Component, OnInit,ViewChild, ElementRef  } from '@angular/core';
import { Events,ModalController,AlertController } from '@ionic/angular';
import { AddnewopcodePage } from '../addnewopcode/addnewopcode.page';
import { AuthService } from '../../app/auth.service';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';
import { IonInfiniteScroll } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import * as moment from "moment";
import { IonContent } from '@ionic/angular';
import { zip } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';
import { Keyboard } from '@ionic-native/keyboard/ngx';

declare var $: any;

@Component({
  selector: 'app-createappointment',
  templateUrl: './createappointment.page.html',
  styleUrls: ['./createappointment.page.scss'],
})
export class CreateappointmentPage implements OnInit {
  @ViewChild(IonContent,{static: false}) ionContent: IonContent;
  @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;
  @ViewChild("buttonContainerRef", { static: false }) buttonContainerRef : ElementRef;

  WipersAndLightsList: any =  [];
  WheelsAndTiresList: any =  [];
  notearray: any =  [];
  lfront: any;
  lrear: any;
  rfront: any;
  rrear: any;
  private playerCount: number = 0;
  fogspeed: any;
  dayspeed: any;
  highspeed: any;
  wiperspeed: any;
  rearwiper: any;
  rearlights: any;
  brakelight: any;
  isedit:number;
  wheel: any;
  timeid:any;
  tire: any;
  totaldropoff: any;
  useddropoff: any;
  totalhrs: any;
  totalusedhrs: any;
  aptdata: any;
  isIndeterminate: any;
  masterCheck: any;
  Promisetime: any;
  AppointmentTime: any;
  interval: any;
  Tempinterval: any;
  Temptime: any;
  dealershipdata: any;
  weekdata: any;
  title: any;
  step1: any;
  step: any;
  AppointmentId: any;
  step2: any;
  cname:any;
  step3: any;
  step4: any;
  step5: any;
  step6: any;
  step7: any;
  step8: any;
  button1Color: any;
  button2Color: any;
  button3Color: any;
  button4Color: any;
  button5Color: any;
  button6Color: any;
  button7Color: any;
  button8Color: any;
  button9Color: any;
  txt1color: any;
  txt2color: any;
  txt3color: any;
  txt4color: any;
  txt5color: any;
  txt6color: any;
  txt7color: any;
  txt8color: any;
  txt9color: any;
  years: any;
  GetCustomerId: any;
  padding: any;
  border: any;
  fname: any;
  lname: any;
  saddress: any;
  saddress1: any;
  zipcode: any;
  mobile: any;
  dayname: any;
  workphone: any;
  isupdate:boolean = false;
  homephone: any;
  email: any;
  countryid: any;
  country: any;
  stateid: any;
  cuname:any;
  sname:any;
   ciname:any;
  state: any;
  city: any;
  cres:any;
  cityid: any;
  dealerid: any;
  empdealerid: any;
  userid: any;
  res: any;
  CustomerId: any;
  VIN: any;
  customerdata: any;
  Appoinmentdata : any =new Array();
  searchword: any;
  vin: any;
  mileage: any;
  avgmileage: any;
  licenseplate: any;
  make: any;
  colors: any;
  vehicledata: any;
  yearid: any;
  makeid: any;
  year: any;
  modelid: any;
  trimid: any;
  weekday: any;
  colorid: any;
  trim: any;
  model: any;
  dataReturned: any;
  codelist: any;
  opArray: any;
  wheelsDepthList: any;
  WheelsTypeList: any;
  wheelsTireList: any;
  appointmentid:any;
  searchopcode:any;
  transportdata: any
  selectedSchedules: any;
  tvalue: any;
  checkedIdx=0;
  yearname:any;
  modelname:any;
  colorname:any;
  makename:any;
  advisordata: any;
  advisorid: any;
  currentdate:any;
  intervaldata: any;
  sdate: any;
  sdate1: any;
  currDate:any;
  curr:number = 0;
  notes: any;
  to: any;
  from: any;
  page = 10;
  data: any;
  rescustvin:any;
  s1:boolean = false;
  s2:boolean = false;
  s3:boolean = false;
  s4:boolean = false;
  b1:boolean = false;
  b2:boolean = false;
  b3:boolean = false;
  b4:boolean = false;
  c1:boolean = false;
  c2:boolean = false;
  c3:boolean = false;
  c4:boolean = false;
  lfw: any;
  lft: any;
  lrw: any;
  lrt: any;
  rfw: any;
  rft: any;
  rrw: any;
  rrt: any;
  selectedtire:any;
  advisorname:any;
  wheelvalue: any;
  tirevalue: any;
  checkop:any[]=[];
  isSearch:boolean = false;
  unaddvalue:any;
  swheel:any;
  swhelld:any;
  isadd:boolean = true;
  sub:any;
  pagename:any;
  public myForm: FormGroup;
  date: string;
  type: 'string';
  username: any;
  newusername: any;

  public backdisabled = false;
  

  datePickerObj: any = {};

  monthsList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  weeksList = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  constructor(private formBuilder: FormBuilder,public events: Events,private storage: Storage,private authservice:AuthService,
    private keyboard: Keyboard, public modalCtrl : ModalController,public datepipe: DatePipe,private router: Router,private alertController :AlertController) {  
    console.log(this.lfw);
    console.log(this.lft);  
    this.myForm = formBuilder.group({
      player0: ['', Validators.required]
    });

  //  this.lfw="";
   // this.lft="";    
    this.lrw = "";
    this.lrt = "";
    this.rfw ="";
    this.rft = "";
    this.rrw = "";
    this.rrt = "";

    this.title = 'Customer Info';
    this.step = '1';
    this.step1 = '1';
    // this.button1Color = '#009688';
    this.button1Color = '#374767';
    this.button2Color = '#fff';
    this.button3Color = '#fff';
    this.button4Color = '#fff';
    this.button5Color = '#fff';
    this.button6Color = '#fff';
    this.button7Color = '#fff';
    this.button8Color = '#fff';
    this.button9Color = '#fff';
    this.padding = '6px';
    this.border = '1px solid #bfbfbf';
    this.txt1color = '#fff';
    this.txt2color = '#000';
    this.txt3color = '#000';
    this.txt4color = '#000';
    this.txt5color = '#000';
    this.txt6color = '#000';
    this.txt7color = '#000';  
    this.txt8color = '#000'; 
    this.txt9color = '#000';  
    
    
  }  

  ngOnInit() {
    this.currentdate = new Date().toISOString();
    this.codelist = "";
    this.b1 = false;
    this.b2 = true;
    this.b3 = true;
    this.b4 = true;
    this.s1 = true;
   // this.selectedtire = "t1";
    this.authservice.getcustidvin().subscribe((data)=>{
      console.log(data);
      this.rescustvin = data;
      this.CustomerId = this.rescustvin.CustomerId;
      this.VIN = this.rescustvin.VIN;
      //this.pagename = this.rescustvin.page;  
      if(this.rescustvin.data){
         this.isupdate = true;
        
          this.cname = this.rescustvin.data.OtherName;
         if(this.rescustvin.data.Notes != null || this.rescustvin.data.Notes != "" || this.rescustvin.data.Notes != undefined ){
           this.sub = this.rescustvin.data.Notes;
         }
        if(this.rescustvin.data.NotesList != null || this.rescustvin.data.NotesList != "" || this.rescustvin.data.NotesList != undefined ){
          var note = [];
          var index;
          // this.myForm.controls = this.rescustvin.data.NotesList.Notes;
          for(let i=0;i<this.rescustvin.data.NotesList.length;i++){
            if(this.rescustvin.data.NotesList[i] != null)
            {
              if(this.rescustvin.data.NotesList[i].Notes != null)
              {
                var text = 'player';
                this.notearray.push(this.rescustvin.data.NotesList[i].Notes);
                text = text+i;
                console.log(text);
                if(i >= 1){
                  this.myForm.addControl(text, new FormControl('', Validators.required));
                }
                
                this.myForm.controls[text].setValue(this.rescustvin.data.NotesList[i].Notes);
                index = i;
              // note.push(this.rescustvin.data.NotesList[i].Notes);
              }
          }
          }
          this.curr = index;
          console.log(this.curr);
          //this.unaddvalue = "";
         // this.myForm.controls['player1'].setValue(this.notearray);
          console.log(this.notearray);
          // this.myForm.controls = note;
        }
        else{
          this.curr = 0;
        }
       
        setTimeout(() => {
          this.sdate = this.rescustvin.data.Date; 
          this.sdate1 =this.datepipe.transform(this.sdate, 'MM/dd/yyyy');
        this.GetTimeIntervals();
       
        this.interval = this.rescustvin.data.AppointmentTime;
        this.Tempinterval = this.rescustvin.data.AppointmentTimeId;
        console.log(this.Tempinterval);
    
      
       /* this.rescustvin.data.forEach(el =>{
          el.checked = false;
          if(this.Tempinterval == el.timeid){
            el.checked = true;
          }
        })*/

        console.log(this.interval);
        }, 2000); 
        if(this.rescustvin.data.WheelTireList){
        this.lfw=this.rescustvin.data.WheelTireList[0].LeftFrontwheel;
        this.lft=this.rescustvin.data.WheelTireList[0].LeftFrontTire;
        this.lrw=this.rescustvin.data.WheelTireList[0].LeftRearwheel;
        this.lrt=this.rescustvin.data.WheelTireList[0].LeftRearTire;
        this.rfw=this.rescustvin.data.WheelTireList[0].RightFrontWheel;
        this.rft=this.rescustvin.data.WheelTireList[0].RightFrontTire;
        this.rrw=this.rescustvin.data.WheelTireList[0].RightRearWheel;
        this.rrt=this.rescustvin.data.WheelTireList[0].RightRearTire;
        if(this.lfw !== "" && this.lft !== ""){
          this.b1 = true;
          this.c1 = true;
         // this.selectedtire = "t1";
        }
        else{
          this.b1 = true;
        this.s1 = false;
       // this.selectedtire = null;
        }
      
       
        if(this.lrw !== "" && this.lrt !== ""){
          this.b2 = true;
          this.c2 = true;
        }
        else{
            this.s2 = false;
        }
        if(this.rfw !== "" && this.rft !== ""){
          this.b3 = true;
          this.c3 = true;
        }
       else{
         this.s3 = false;
       }
        if(this.rrw !== "" && this.rrt !== ""){
          this.b4 = true;
          this.c4 = true;
        }
        else{
          this.s4 = false;
        }
        
      }
      if(this.rescustvin.data.WipersAndLightsList){
        if(this.rescustvin.data.WipersAndLightsList.length == 1){
          this.fogspeed=this.rescustvin.data.WipersAndLightsList[0].LblValue;
        }
        if(this.rescustvin.data.WipersAndLightsList.length == 2){
          this.fogspeed=this.rescustvin.data.WipersAndLightsList[0].LblValue;
          this.dayspeed=this.rescustvin.data.WipersAndLightsList[1].LblValue;
        }
        if(this.rescustvin.data.WipersAndLightsList.length == 3){
          this.fogspeed=this.rescustvin.data.WipersAndLightsList[0].LblValue;
          this.dayspeed=this.rescustvin.data.WipersAndLightsList[1].LblValue;
          this.highspeed=this.rescustvin.data.WipersAndLightsList[2].LblValue;
        }
        if(this.rescustvin.data.WipersAndLightsList.length == 4){
          this.fogspeed=this.rescustvin.data.WipersAndLightsList[0].LblValue;
          this.dayspeed=this.rescustvin.data.WipersAndLightsList[1].LblValue;
          this.highspeed=this.rescustvin.data.WipersAndLightsList[2].LblValue;
          this.wiperspeed=this.rescustvin.data.WipersAndLightsList[3].LblValue;
        }
        if(this.rescustvin.data.WipersAndLightsList.length == 5){
          this.fogspeed=this.rescustvin.data.WipersAndLightsList[0].LblValue;
          this.dayspeed=this.rescustvin.data.WipersAndLightsList[1].LblValue;
          this.highspeed=this.rescustvin.data.WipersAndLightsList[2].LblValue;
          this.wiperspeed=this.rescustvin.data.WipersAndLightsList[3].LblValue;
          this.rearwiper=this.rescustvin.data.WipersAndLightsList[4].LblValue;
        }
        if(this.rescustvin.data.WipersAndLightsList.length == 6){
          this.fogspeed=this.rescustvin.data.WipersAndLightsList[0].LblValue;
          this.dayspeed=this.rescustvin.data.WipersAndLightsList[1].LblValue;
          this.highspeed=this.rescustvin.data.WipersAndLightsList[2].LblValue;
          this.wiperspeed=this.rescustvin.data.WipersAndLightsList[3].LblValue;
          this.rearwiper=this.rescustvin.data.WipersAndLightsList[4].LblValue;
          this.rearlights=this.rescustvin.data.WipersAndLightsList[5].LblValue;
        }
        if(this.rescustvin.data.WipersAndLightsList.length == 7){
          this.fogspeed=this.rescustvin.data.WipersAndLightsList[0].LblValue;
          this.dayspeed=this.rescustvin.data.WipersAndLightsList[1].LblValue;
          this.highspeed=this.rescustvin.data.WipersAndLightsList[2].LblValue;
          this.wiperspeed=this.rescustvin.data.WipersAndLightsList[3].LblValue;
          this.rearwiper=this.rescustvin.data.WipersAndLightsList[4].LblValue;
          this.rearlights=this.rescustvin.data.WipersAndLightsList[5].LblValue;
          this.brakelight=this.rescustvin.data.WipersAndLightsList[6].LblValue;
        }
      }
      this.appointmentid  = this.rescustvin.data.AppointmentId;
      if(this.rescustvin.data.AppointmentTimeId != null){
        this.AppointmentTime = this.rescustvin.data.AppointmentTimeId;
      }
      if(this.rescustvin.data.AppointmentTime != null){
        this.Promisetime = this.rescustvin.data.AppointmentTime;
      }
      
    }

    //this.isupdate  = false;
      
    })

    this.storage.get('dealerid').then((val) => {
      console.log('dealerid', val);
      this.dealerid = val;
      this.GetAdvisorList();    
      this.GetMOPCode();
      this.getYears();
    this.opArray=new Array();

    this.GetTransportationList();

    this.GetWheelsTiresDetails();

    this.GetWipersAndLightsType();
    });

   /* this.storage.get("Employee_id").then((val) => {
      console.log(val);
      console.log(this.dealerid);

      this.empdealerid = val.filter((item) => {
        console.log(item);
        return item.DealershipId == this.dealerid;

      });
      console.log(this.empdealerid);
      if(this.empdealerid.length > 0){
        this.userid = this.empdealerid[0].PKEmployeeID;
      }
      
      console.log(this.userid);
    
      this.GetCustomer();
     
    });*/

     
    this.storage.get('userid').then((val) => {
      console.log('userid', val);
      this.userid = val;
      this.GetCustomer();
     
    });
    this.storage.get('username').then((val => {
      this.newusername = val;
    }))

    this.authservice.getadvisor().subscribe((advisorid)=>{
      // user and time are the same arguments passed in `events.publish(user, time)`
    this.advisorid = advisorid;
    }) 

        // this.lfw=undefined;
        // this.lft=undefined;
        // this.lrw=undefined;
        // this.lrt=undefined;
        // this.rfw=undefined;
        // this.rft=undefined;
        // this.rrw=undefined;
        // this.rrt=undefined;
        this.datecalender();
        
  }
  datecalender()
  {
    const disabledDates: Date[] = [
      new Date(1545911005644),
      new Date(),
      new Date(2020, 12, 12), // Months are 0-based, this is August, 10th.
      new Date('Monday, August 31, 2020'), // Works with any valid Date formats like long format
      new Date('12-14-2020'), // Short format
    ];

    this.datePickerObj = {
      // inputDate: new Date('12'), // If you want to set month in dateObject of date-picker
      // inputDate: new Date('2018'), // If you want to set year in dateObject of date-picker
      // inputDate: new Date('2018-12'), // If you want to set year & month in dateObject of date-picker
      // inputDate: new Date('2018-12-01'), // If you want to set date in dateObject of date-picker
      // inputDate: '1', // If you want to set date as a string in date-picker
      // inputDate: '2018', // If you want to set date as a string in date-picker
      // inputDate: '2018-12', // If you want to set date as a string in date-picker
      // inputDate: '2018-12-12', // If you want to set date as a string in date-picker
      // inputDate: moment(new Date('12')), // If you want to set date as a moment object in date-picker
      // inputDate: moment(new Date('2018')), // If you want to set date as a moment object in date-picker
      // inputDate: moment(new Date('2018-12')), // If you want to set date as a moment object in date-picker
      // inputDate: moment(new Date('2018-12-12')), // If you want to set date as a moment object in date-picker
    //  inputDate: moment(new Date('12-01-2020')),
       fromDate: new Date(), // need this in order to have toDate
       toDate: new Date('2030-12-31'),
       showTodayButton: false,
      closeOnSelect: true,
      disableWeekDays: [0],
      mondayFirst: true,
      // setLabel: 'Select a Date',
      // todayLabel: 'Today',
      // closeLabel: 'Close',
      // disabledDates: [],
      // titleLabel: 'Select a Date',
      // monthsList: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
      // weeksList: ['S', 'S', 'M', 'T', 'W', 'T', 'F'],
     // dateFormat: 'YYYY-MM-DD',
         dateFormat: 'MM/DD/YYYY',
     
       clearButton: false,
      // momentLocale: 'pt-BR',
      // yearInAscending: true,
      btnCloseSetInReverse: true,

      btnProperties: {
        expand: 'block', // "block" | "full"
        fill: '', // "clear" | "default" | "outline" | "solid"
        size: '', // "default" | "large" | "small"
        disabled: '', // boolean (default false)
        strong: '', // boolean (default false)
        color: ''
        // "primary", "secondary", "tertiary", "success", "warning", "danger", "light", "medium", "dark" , and give color in string
      },

      arrowNextPrev: {
        nextArrowSrc: '../assets/arrow_right.svg',
        prevArrowSrc: '../assets/arrow_left.svg'
      }, // This object supports only SVG files.

      // highlightedDates: [
      //   { date: new Date('2019-07-10'), color: '#ee17bf' },
      //   { date: new Date('2019-07-12'), color: '#50f2b1' },
      //   { date: new Date('2019-07-14'), color: '#f2ef50' },
      //   { date: new Date('2019-08-10'), color: '#ee17bf' },
      //   { date: new Date('2019-08-12'), color: '#50f2b1' },
      //   { date: new Date('2019-08-14'), color: '#f2ef50' },
      // ],
      // isSundayHighlighted: {
      //   fontColor: 'red'
      // }
    };

  }
  showkeyboard(){
    this.keyboard.show();
  }

  logout() {
    this.showAlert();
  }

  async  showAlert() {
    const prompt = this.alertController.create({
      header: "Appointment",
      message: "Are you sure you want to logout?",
      backdropDismiss: false,
      buttons: [
        {
          text: 'Yes',
          handler: data => {
            this.storage.set('islogin', false);
            this.router.navigateByUrl('/login', { replaceUrl: true });

          }
        },
        {
          text: 'No',
          handler: data => {
            console.log('No clicked');
          }
        }
      ]
    });
    (await prompt).present();
  }


  removeControl(control,i){
    if(this.playerCount == 0){
      this.playerCount = this.curr;
    }
    this.curr = this.playerCount - 1;
    console.log(control.key)
    this.myForm.removeControl(control.key);
    //for (var i = 0; i < this.notearray.length; i++){
      this.notearray.splice(i, 1);
      this.playerCount--;
      //  break;
   // }
     console.log(this.notearray)
  }

  addtext(index,control){
      console.log(index);
      this.unaddvalue = control.value.value;
      console.log(control.value.value);

     
      this.notearray[index] = control.value.value
      //this.notearray.push(control.value.value);
         
  }
  
  addControl(control,index){
    console.log(control);
    console.log(index);

    // let object1 = {
    //   'Notes': control.value.value
    // }
    if(this.notearray.length <= 9)
    {
    if(this.notearray.length == index + 1 )
    {
      if(this.playerCount <= 9)
      {
        if(this.playerCount <= 8)
        {
            this.playerCount = this.curr;
            console.log('If Current Player: ' + this.playerCount);

            this.curr= this.playerCount+ 1;
            console.log('If Current : ' + this.curr);

            this.playerCount=this.playerCount+1;
            console.log('If Current End : ' + this.playerCount);

          
            this.myForm.addControl('player' + this.playerCount, new FormControl('', Validators.required));
            console.log('If player : ' + this.playerCount);
        }
        else
        {
          this.authservice.alertshow("Maximum 10  Notes Allow");
        }
      }
     
    }
    else
    {
      if(this.playerCount <= 9)
      {
        if(this.playerCount <= 8)
        {
          this.curr = this.playerCount + 1;
          console.log('Else Current : ' + this.curr);

          this.notearray.push(control.value.value);
          console.log('Else Array List : ' + this.notearray);

          this.playerCount=this.playerCount+1;
          console.log('Else Player Count : ' + this.playerCount);

          this.myForm.addControl('player' + this.playerCount, new FormControl('', Validators.required));
          console.log('Else player : ' + this.playerCount);
        }
      }
    }
  }
  else
  {
    this.authservice.alertshow("Maximum 10 Notes Allow");
  }
    //control.value.value=null;
    console.log(this.notearray)
  }

  ChangeSpeed(event,wtypename, wmainname){
    this.WipersAndLightsList = [];
    console.log(event);
  }


  //  start Change Wheel
  ChangeWheel(event)
  {
      // check if tire is seleccted or not
     /* console.log("selectedtire: " + this.selectedtire);
      
      if (!this.selectedtire) 
      {
        alert('show error message' + this.selectedtire);  
        return;
      }*/
      console.log(event);
      console.log(this.wheel);
      this.wheelvalue = event.detail.value.WheelType;
      console.log(this.wheel);
      if(this.wheel != null && this.selectedtire == undefined)
      {
              if(this.lfw == undefined){
                this.lfw = this.wheel.WheelType;
                this.lrw = undefined;
                this.rfw = undefined;
                this.rrw = undefined;
              }
                else if (this.lrw == undefined){
                    this.lrw = this.wheel.WheelType;
                    this.rfw = undefined;
                    this.rrw = undefined;
                  }
                    else if (this.rfw == undefined){
                    this.rfw= this.wheel.WheelType;
                      this.rrw = undefined;
                    }
                        else if (this.rrw == undefined){
                          this.rrw = this.wheel.WheelType;
                    }
              if(this.lfw != undefined && this.lft != undefined && this.c1 == false){
                this.s1 = false;
                this.b2 = false;
                this.s2 = true;
                this.c1=true;
                this.b1=true;
              }
                  else if(this.lrw != undefined && this.lrt != undefined && this.c2 == false){
                      this.s2 = false;
                      this.b3 = false;
                      this.s3 = true;
                      this.c2=true;
                      this.b2=true;
                    }
                          else if(this.rfw != undefined && this.rft != undefined && this.c3 == false){
                            this.s3 = false;
                            this.b4 = false;
                            this.s4 = true;
                            this.c3=true;
                            this.b3=true;
                          }
                              else if(this.rrw != undefined && this.rrt != undefined && this.c4 == false){
                                this.s4 = false;
                                this.c4=true;
                                this.b4=true;
                              }
                                          // if(this.lfw == undefined){  
                                          //   this.lfw = this.wheel.WheelType;
                                          //   this.lrw = undefined;     
                                          // }else if (this.lrw == undefined){
                                          //   this.lrw = this.wheel.WheelType;
                                          //   this.rfw = undefined;
                                          // }else if (this.rfw == undefined){
                                          //   this.rfw= this.wheel.WheelType;
                                          //   this.rrw = undefined;
                                          // }else if (this.rrw == undefined){
                                          //   this.rrw = this.wheel.WheelType;
                                          // }
              if(this.wheel != null && this.tire != null){
                this.tire=null;
                setTimeout(() => {
                  this.wheel = null;
                }, 100);
                
              } 
      }
  
      else
      {
          if(this.selectedtire == "t1"){
              this.lfw = this.wheel.WheelType;
              if(this.wheel != null && this.tire != null){
                this.wheel = null;
                setTimeout(() => {
                  this.tire=null;
                  this.s1= false;
                  this.b1= true;
                  this.c1= true;
                }, 100);
                
              }
          }
            else if(this.selectedtire == "t2"){
              this.lrw = this.wheel.WheelType;
              if(this.wheel != null && this.tire != null){
                this.wheel = null;
                setTimeout(() => {
                  this.tire=null;
                  this.s2= false;
                  this.b2= true;
                  this.c2= true;
                }, 100);
                
              }
            }
              else if(this.selectedtire == "t3"){
                this.rfw= this.wheel.WheelType;
                if(this.wheel != null && this.tire != null){
                  this.wheel = null;
                  setTimeout(() => {
                    this.tire=null;
                    this.s3= false;
                    this.b3= true;
                    this.c3= true;
                  }, 100);
                  
                }
              }
                  else if(this.selectedtire == "t4"){
                    this.rrw = this.wheel.WheelType;
                    if(this.wheel != null && this.tire != null){
                      this.wheel = null;
                      setTimeout(() => {
                        this.tire=null;
                        this.s4= false;
                        this.b4= true;
                        this.c4= true;
                      }, 100);
                      
                    }
                  }
      }
     
     
  }   //  End Change Wheel
  
  //------------------------------------------ 
  
  // Start Change Tire
  
  ChangeTire(event)
  {
      console.log(event);
      console.log(this.tire);
      if(this.tire != null && this.selectedtire == undefined)
      {
          this.tirevalue = event.detail.value.WheelDepth;
          if(this.lft == undefined){
            this.lft = this.tire.WheelDepth;
            this.lrt = undefined;
            this.rft = undefined;
            this.rrt = undefined;
          }
              else if(this.lrt == undefined){
                  this.lrt = this.tire.WheelDepth;
                  this.rft = undefined;
                  this.rrt = undefined;
                }
                else if(this.rft == undefined){
                    this.rft = this.tire.WheelDepth;
                    this.rrt = undefined;
                  }
                  else if(this.rrt == undefined){
                    this.rrt = this.tire.WheelDepth;
                  }   
          if(this.lfw != undefined && this.lft != undefined && this.c1 == false){
            this.s1 = false;
            this.b2 = false;
            this.s2 = true;
            this.c1=true;
            this.b1=true;
          }
              else if(this.lrw != undefined && this.lrt != undefined && this.c2 == false){
                this.s2 = false;
                this.b3 = false;
                this.s3 = true;
                this.c2=true;
                this.b2=true;
              }
                else if(this.rfw != undefined && this.rft != undefined && this.c3 == false){
                  this.s3 = false;
                  this.b4 = false;
                  this.s4 = true;
                  this.c3=true;
                  this.b3=true;
                }
                  else if(this.rrw != undefined && this.rrt != undefined && this.c4 == false) {
                    this.s4 = false;
                    this.c4=true;
                    this.b4=true;
                  }
                        // if(this.lft == undefined){
                        //   this.lft = this.tire.WheelDepth;
                        //   this.lrt = undefined;
                        // }else if(this.lrt == undefined){
                        //   this.lrt = this.tire.WheelDepth;
                        //   this.rft = undefined;
                        // }else if(this.rft == undefined){
                        //   this.rft = this.tire.WheelDepth;
                        //   this.rrt = undefined;
                        // }else if(this.rrt == undefined){
                        //   this.rrt = this.tire.WheelDepth;
                        // }   
  
          if(this.wheel != null && this.tire != null)
          {
          this.wheel = null;
          setTimeout(() => {
            this.tire=null;
          }, 100);
          
          }
  
         // this.selectedtire = null;
      }
      else
      {
        if(this.selectedtire == "t1"){
          this.lft = this.tire.WheelDepth;
          if(this.wheel != null && this.tire != null){
            this.wheel = null;
            setTimeout(() => {
              this.tire=null;
              this.s1= false;
              this.b1= true;
              this.c1= true;
            }, 100);
            
          }
        }
        else if(this.selectedtire == "t2"){
          this.lrt = this.tire.WheelDepth;
          if(this.wheel != null && this.tire != null){
            this.wheel = null;
            setTimeout(() => {
              this.tire=null;
              this.s2= false;
              this.b2= true;
              this.c2= true;
            }, 100);
            
          }
        }
        else if(this.selectedtire == "t3"){
          this.rft = this.tire.WheelDepth;
          if(this.wheel != null && this.tire != null){
            this.wheel = null;
            setTimeout(() => {
              this.tire=null;
              this.s3= false;
              this.b3= true;
              this.c3= true;
            }, 100);
            
          }
        }
        else if(this.selectedtire == "t4"){
          this.rrt = this.tire.WheelDepth;
          if(this.wheel != null && this.tire != null){
            this.wheel = null;
            setTimeout(() => {
              this.tire=null;
              this.s4= false;
              this.b4= true;
              this.c4= true;
            }, 100);
            
          }
          
        }
      }
  } //  End Change Tire
  
  

  edittw(val){
   
    if(this.rescustvin.data != undefined){
      this.selectedtire = val;
    if(val == "t1"){
     this.lfw = undefined;
     this.lft = undefined; 
     this.s1= true;
     this.b1=false;
     this.c1= false;
     
    }
   else if(val == "t2"){
     this.lrw = undefined;
     this.lrt = undefined;
    this.s2= true;
    this.b2=false;
    this.c2= false;
    }
   else if(val == "t3"){
     this.rfw = undefined;
     this.rft = undefined;
    this.s3= true;
    this.b3=false;
    this.c3= false;
   
    }
   else if(val == "t4"){
     this.rrw = undefined;
     this.rrt = undefined;
    this.s4= true;
    this.b4=false;
    this.c4= false;
   
    }
  }

  }

  scrollToCenter(_page: any) {
    const page = parseInt(_page);
    const element = document.getElementById("thumnails");
    const scrollWidth = element.scrollWidth;
    const clientWidth = element.clientWidth;
    const centerOfScreen = clientWidth/2;

    const target = document.getElementById("btn_"+page);
    const targetLeft = target.offsetLeft;

    console.log('target left : ' + targetLeft);
    

    console.log("scroll : " + scrollWidth + " client : " + clientWidth + " offset : " + offsetWidth);
    
    element.scrollLeft = 300;

  }

  activestep(op: any) {

    this.scrollToCenter(op);

    this.step = op;
    this.ionContent.scrollToTop();
    if (op == '1') {
      this.title = 'Customer Info';
      // this.button1Color = '#009688';
      this.button1Color = '#374767';
      this.button2Color = '#fff';
      this.button3Color = '#fff';
      this.button4Color = '#fff';
      this.button5Color = '#fff';
      this.button6Color = '#fff';
      this.button7Color = '#fff';
      this.button8Color = '#fff';
      this.button9Color = '#fff';
      this.txt1color = '#fff';
      this.txt2color = '#000';
      this.txt3color = '#000';
      this.txt4color = '#000';
      this.txt5color = '#000';
      this.txt6color = '#000';
      this.txt7color = '#000';
      this.txt8color = '#000'; 
      this.txt9color = '#000'; 
      this.backdisabled = false;
      
    }
    else if (op == '2') {
      this.title = 'Vehicle Info';
      this.button1Color = '#fff';
      // this.button2Color = '#009688';
      this.button2Color = '#374767';
      this.button3Color = '#fff';
      this.button4Color = '#fff';
      this.button5Color = '#fff';
      this.button6Color = '#fff';
      this.button7Color = '#fff';
      this.button8Color = '#fff';
      this.button9Color = '#fff';
      this.txt1color = '#000';
      this.txt2color = '#fff';
      this.txt3color = '#000';
      this.txt4color = '#000';
      this.txt5color = '#000';
      this.txt6color = '#000';
      this.txt7color = '#000';
      this.txt8color = '#000'; 
      this.txt9color = '#000'; 
      this.backdisabled = true;
    }
    else if (op == '3') {
      this.title = 'Maintenance & Repairs';
      this.button1Color = '#fff';
      this.button2Color = '#fff';
      // this.button3Color = '#009688';
      this.button3Color = '#374767';
      this.button4Color = '#fff';
      this.button5Color = '#fff';
      this.button6Color = '#fff';
      this.button7Color = '#fff';
      this.button8Color = '#fff';
      this.button9Color = '#fff';
      this.txt1color = '#000';
      this.txt2color = '#000';
      this.txt3color = '#fff';
      this.txt4color = '#000';
      this.txt5color = '#000';
      this.txt6color = '#000';
      this.txt7color = '#000';
      this.txt8color = '#000'; 
      this.txt9color = '#000'; 
      this.backdisabled = true;
    }
    else if (op == '4') 
    {      
      var finalopcode = [];
      for(let i = 0 ; i<this.codelist.length;i++){
        if(this.codelist[i].isChecked == true){
          finalopcode.push(this.codelist[i]);
        }
      }
  
      if(this.sub == '' || this.sub == null || this.sub == undefined){
        this.authservice.alertshow("Please fill the Subject");
        this.activestep(3);
      }
      else if(finalopcode.length == 0){
        this.authservice.alertshow("Please select opcode");
        this.activestep(3);
      }
      
      else{
        this.title = 'Transportation';
        this.button1Color = '#fff';
        this.button2Color = '#fff';
        this.button3Color = '#fff';
        //this.button4Color = '#009688';
        this.button4Color = '#374767';
        this.button5Color = '#fff';
        this.button6Color = '#fff';
        this.button7Color = '#fff';
        this.button8Color = '#fff';
        this.button9Color = '#fff';
        this.txt1color = '#000';
        this.txt2color = '#000';
        this.txt3color = '#000';
        this.txt4color = '#fff';
        this.txt5color = '#000';
        this.txt6color = '#000';
        this.txt7color = '#000';
        this.txt8color = '#000';
        this.txt9color = '#000';
        this.backdisabled = true;
      }

    }
    else if (op == '5') {
      this.title = 'Advisors & Teams';
      this.button1Color = '#fff';
      this.button2Color = '#fff';
      this.button3Color = '#fff';
      this.button4Color = '#fff';
      //this.button5Color = '#009688';
      this.button5Color = '#374767';
      this.button6Color = '#fff';
      this.button7Color = '#fff';
      this.button8Color = '#fff';
      this.button9Color = '#fff';
      this.txt1color = '#000';
      this.txt2color = '#000';
      this.txt3color = '#000';
      this.txt4color = '#000';
      this.txt5color = '#fff';
      this.txt6color = '#000';
      this.txt7color = '#000';
      this.txt8color = '#000';
      this.txt9color = '#000';
      this.backdisabled = true;
    }
    else if (op == '6') {      
      if(this.advisorid == '' || this.advisorid == null || this.advisorid == undefined){
        this.authservice.alertshow("Please select advisor first");
        this.activestep(5);
      }else{
      this.title = 'Date & Time';
      this.button1Color = '#fff';
      this.button2Color = '#fff';
      this.button3Color = '#fff';
      this.button4Color = '#fff';
      this.button5Color = '#fff';
      // this.button6Color = '#009688';
      this.button6Color = '#374767';
      this.button7Color = '#fff';
      this.button8Color = '#fff';
      this.button9Color = '#fff';
      this.txt1color = '#000';
      this.txt2color = '#000';
      this.txt3color = '#000';
      this.txt4color = '#000';
      this.txt5color = '#000';
      this.txt6color = '#fff';
      this.txt7color = '#000';
      this.txt8color = '#000';
      this.txt9color = '#000';
      this.backdisabled = true;
      }
    }
    else if (op == '7') {
      // this.events.publish("Appointmentdata",this.Appoinmentdata);
      this.title = 'Wheels & Tires';
      this.button1Color = '#fff';
      this.button2Color = '#fff';
      this.button3Color = '#fff';
      this.button4Color = '#fff';
      this.button5Color = '#fff';
      this.button6Color = '#fff';
      this.button8Color = '#fff';
      this.button9Color = '#fff';
      // this.button7Color = '#009688';
      this.button7Color = '#374767';
      this.txt1color = '#000';
      this.txt2color = '#000';
      this.txt3color = '#000';
      this.txt4color = '#000';
      this.txt5color = '#000';
      this.txt6color = '#000';
      this.txt7color = '#fff';
      this.txt8color = '#000';
      this.txt9color = '#000';
      this.backdisabled = true;
    }
    else if (op == '8') {
      // this.events.publish("Appointmentdata",this.Appoinmentdata);
      this.title = 'Wipers & Lights';
      this.button1Color = '#fff';
      this.button2Color = '#fff';
      this.button3Color = '#fff';
      this.button4Color = '#fff';
      this.button5Color = '#fff';
      this.button6Color = '#fff';
      // this.button8Color = '#009688';
      this.button8Color = '#374767';
      this.button9Color = '#fff';
      this.button7Color = '#fff';
      this.txt1color = '#000';
      this.txt2color = '#000';
      this.txt3color = '#000';
      this.txt4color = '#000';
      this.txt5color = '#000';
      this.txt6color = '#000';
      this.txt7color = '#000';
      this.txt8color = '#fff';
      this.txt9color = '#000';
      this.backdisabled = true;
    }
    else if (op == '9') {
      // this.events.publish("Appointmentdata",this.Appoinmentdata);
      this.title = 'Subject/Notes';
      this.button1Color = '#fff';
      this.button2Color = '#fff';
      this.button3Color = '#fff';
      this.button4Color = '#fff';
      this.button5Color = '#fff';
      this.button6Color = '#fff';
      this.button8Color = '#fff';
      // this.button9Color = '#009688';
      this.button9Color = '#374767';
      this.button7Color = '#fff';
      this.txt1color = '#000';
      this.txt2color = '#000';
      this.txt3color = '#000';
      this.txt4color = '#000';
      this.txt5color = '#000';
      this.txt6color = '#000';
      this.txt7color = '#000';
      this.txt8color = '#000';
      this.txt9color = '#fff';
      this.backdisabled = true;
    }
  }


  //for Customer Info

  getCountry(){
    this.authservice.GetCountry(this.dealerid).subscribe(res =>{
      this.country = res;
      this.countryid = this.customerdata[0].CountryId;
      this.getState();
      console.log(this.country);
    })
  }

GetCustomer(){
  this.authservice.presentLoading();
      this.authservice.GetCustomer(this.dealerid,this.CustomerId).subscribe(res =>{
        this.customerdata = res;
        this.fname = this.customerdata[0].FirstName;
        this.lname = this.customerdata[0].LastName;
        this.cname = this.customerdata[0].OtherName;
        this.saddress = this.customerdata[0].Address1;
        this.saddress1 = this.customerdata[0].Address2;
        this.zipcode = this.customerdata[0].ZipCode;
        this.mobile = this.customerdata[0].MobilePhone;
        this.workphone = this.customerdata[0].WorkPhone;
        this.homephone = this.customerdata[0].HomePhone;
        this.email = this.customerdata[0].EmailId;
        console.log(this.customerdata);
        this.getCountry();       
      })
  }

  ChangeCountry(event){
    this.countryid = event.detail.value;
    console.log(this.countryid);
    for(let i=0;i<this.country.length;i++){
     if(this.countryid == this.country[i].CountryId){
       this.cuname = this.country[i].CountryName;
     }
    }
    this.getState();
  }

  getState(){
    this.authservice.GetState(this.countryid,this.dealerid).subscribe(res =>{
      this.state = res;
      this.stateid = this.customerdata[0].StateId;
      //this.GetCity();
      console.log(this.state);
    })
}

  ChangeState(event){
    this.stateid = event.detail.value;
    console.log(this.stateid);
    for(let i=0;i<this.state.length;i++){
      if(this.stateid == this.state[i].StateId){
        this.sname = this.state[i].StateName;
      }
    }
    this.GetCity();
  }

  GetCity(){
  this.authservice.GetCity(this.stateid,this.dealerid,this.customerdata[0].CityId).subscribe(res =>{
    this.city = res;
  //   JSON.parse(this.cres).forEach(item => {
  //     this.city.push(item);
  // });
    console.log("call again");
    // if(this.city.length != 0 ){
      this.cityid = this.customerdata[0].CityId;
    // }
    this.authservice.dismissLoading();
    console.log(this.city);
  })
}

ChangeCity(event){
  this.cityid = event.detail.value;
  for(let i=0;i<this.city.length;i++){
    if(this.cityid == this.city[i].CityId){
      this.ciname = this.city[i].CityName;
    }
  }
  console.log(this.cityid);
}

UpdateCustomerInfo(){
  // if(this.fname== null || this.fname=='' || this.fname==undefined){
  //   this.authservice.alertshow("Please enter first name");
  // }else if(this.lname== null || this.lname=='' || this.lname==undefined){
  //   this.authservice.alertshow("Please enter last name");
  // }
   if(this.saddress== null || this.saddress=='' || this.saddress==undefined){
    this.authservice.alertshow("Please enter Street Address");
  }else if(this.countryid== null || this.countryid=='' || this.countryid==undefined){
    this.authservice.alertshow("Please select country");
  }else if(this.stateid== null || this.stateid=='' || this.stateid==undefined){
    this.authservice.alertshow("Please select state");
  }else if(this.cityid== null || this.cityid=='' || this.cityid==undefined){
    this.authservice.alertshow("Please select city");
  }
  // else if(this.mobile== null || this.mobile=='' || this.mobile==undefined){
  //   this.authservice.alertshow("Please enter mobile no.");
  // }
  // else if(this.email== null || this.email=='' || this.email==undefined){
  //   this.authservice.alertshow("Please enter email");
  // }
  else{   
    this.authservice.presentLoading();
    this.authservice.CustomerInsertUpdate(this.CustomerId,this.fname,this.lname,this.email,this.homephone,this.workphone,this.mobile,this.saddress,this.saddress1,this.countryid,this.cityid,this.stateid,this.zipcode,this.userid,this.dealerid).subscribe(res =>{
      this.res = res;
      console.log(this.res);
      this.authservice.dismissLoading();
      this.authservice.alertshow(this.res.Message);  
    })
  }
 
}

// for Vehicle Info page

getYears(){
  this.authservice.GetYearDetails(this.dealerid).subscribe(res =>{
    this.years = res;
    this.getMake();
    console.log(this.years);
  })
}

getMake(){
  this.authservice.GetMakeDetails(this.dealerid).subscribe(res =>{
    this.make = res;
    this.getColors();
    console.log(this.make);
  })
}

getColors(){
  this.authservice.GetColors(this.dealerid).subscribe(res =>{
    this.colors = res;
    //this.GetTrimDetails();
    this.GetVehicleDetailByVINCustomerID();
    console.log(this.colors);
  })
}

GetModelDetails(){
console.log(this.makeid);
this.authservice.GetModelDetails(this.makeid,this.dealerid).subscribe(res =>{
  if(res != null){
    this.model = res;   
  }
  this.authservice.dismissLoading();
  console.log(this.model);
})
}

GetTrimDetails(){
this.authservice.GetTrimDetails(this.dealerid).subscribe(res =>{
this.trim = res;
this.GetVehicleDetailByVINCustomerID();
console.log(this.trim);
})
}

ChangeYear(event){
this.yearid = event.detail.value;
console.log(this.yearid);
for(let i=0 ;i<this.years.length;i++){
  if(this.yearid == this.years[i].YearId){
    this.yearname = this.years[i].Year;
  }
}
this.storage.get('idsflag').then((val) =>{
  if(val == 0){
this.yearid = this.yearid;
  }
  else if(val == 1){
 this.yearid = this.yearname;
  }
})
}

ChangeMake(event){
this.makeid = event.detail.value;
console.log(this.makeid);

for(let i=0 ;i<this.make.length;i++){
  if(this.makeid == this.make[i].MakeId){
    this.makename = this.make[i].Make;
  }

this.GetModelDetails();
}
}

ChangeModel(event){
this.modelid = event.detail.value;
console.log(this.modelid);
for(let i=0 ;i<this.model.length;i++){
  if(this.modelid == this.model[i].ModelId){
    this.modelname = this.model[i].Modal;
  }
}
} 

ChangeTrim(event){
this.trimid = event.detail.value;
console.log(this.trimid);
}


/*ChangeColor(event){
this.colorid = event.detail.value;
console.log(this.colorid);
}*/

ChangeColor(event){
  this.colorid = event.detail.value;
  console.log(this.colorid);
  for(let i=0 ;i<this.colors.length;i++)
  {
    if(this.colorid == this.colors[i].ColorId){
      this.colorname = this.colors[i].ColorName;
    }
   }
  } 

GetVehicleDetailByVINCustomerID(){
  setTimeout(() => {
    if(this.appointmentid == undefined){
      this.appointmentid = "0";
    }
  console.log(this.dealerid);
  console.log(this.CustomerId);
  console.log(this.VIN);
  console.log(this.appointmentid);
  
  this.authservice.GetVehicleDetailByVINCustomerID(this.dealerid,this.CustomerId,this.VIN,this.appointmentid).subscribe(res =>{
    this.vehicledata = res;
    console.log(this.vehicledata);
    this.vin = this.vehicledata[0].VIN;
    this.authservice.setvin(this.vin);

    this.yearid = this.vehicledata[0].YearId;
    setTimeout(() => {
      for(let i=0 ;i<this.years.length;i++){
        if(this.yearid == this.years[i].YearId){
          this.yearname = this.years[i].Year;
        }
      }
      console.log(this.yearname);
    }, 3000);
    if(this.appointmentid == "0"){
      this.appointmentid = undefined;
    }
    
    this.makeid = this.vehicledata[0].MakeId;
    setTimeout(() => {
      for(let i=0 ;i<this.make.length;i++){
        if(this.makeid == this.make[i].MakeId){
          this.makename = this.make[i].Make;
        }
      }
      console.log(this.makename);
    }, 3000);
    
    
    this.modelid = this.vehicledata[0].ModelId;
    setTimeout(() => {
      for(let i=0 ;i<this.model.length;i++){
        if(this.modelid == this.model[i].ModelId){
          this.modelname = this.model[i].Modal;
        }
      }
      console.log(this.modelname);
    }, 3000);
    
    
    this.trimid = this.vehicledata[0].TrimId;
    //this.colorid = this.vehicledata[0].ColorId;

    console.log(this.vehicledata[0].ColorId);

    console.log(this.vehicledata[0]);
    
     this.colorid = this.vehicledata[0].ColorId;
     setTimeout(() => {
       for(let i=0 ;i<this.colors.length;i++){
         if(this.colorid == this.colors[i].ColorId){
           this.colorname = this.colors[i].ColorName;
         }
       }
 
       console.log(this.colorname);
     }, 3000);

    this.mileage = this.vehicledata[0].Milage;
    this.avgmileage = this.vehicledata[0].AverageMilesMonth;
    this.licenseplate =  this.vehicledata[0].LicensePlate;
    this.GetModelDetails();
  })  
  }, 1000);
  
}

UpdateVehicleInfo(){
if(this.vin== null || this.vin=='' || this.vin==undefined){
this.authservice.alertshow("Please enter VIN");
}else if(this.yearid== null || this.yearid=='' || this.yearid==undefined || this.yearid == "0"){
this.authservice.alertshow("Please select Year");
}else if(this.makeid== null || this.makeid=='' || this.makeid==undefined || this.makeid == "0"){
this.authservice.alertshow("Please select Make");
}else if(this.modelid== null || this.modelid=='' || this.modelid==undefined || this.modelid == "0"){
this.authservice.alertshow("Please select Model");
}else{
this.authservice.presentLoading();
this.authservice.InsertVehicle(this.CustomerId,this.colorid,this.licenseplate,this.avgmileage,this.mileage,this.vin,this.makeid,this.yearid,this.modelid,this.trimid,this.userid,this.dealerid).subscribe(res =>{
  this.res = res;
  console.log(this.res);
  this.authservice.dismissLoading();
  this.authservice.alertshow(this.res.Message);
})
}
}


// for Maintainance

async AddNewOPCode() {
  const modal = await this.modalCtrl.create({
    component: AddnewopcodePage,
    componentProps: {
      "paramID": 123,
      "paramTitle": "Add Vehicle"
    }
  });
  modal.onDidDismiss().then((dataReturned) => {
    if (dataReturned !== null) {
      this.dataReturned = dataReturned.data;
      //alert('Modal Sent Data :'+ dataReturned);
      //this.GetMOPCode();
    }
  });
  return await modal.present();
}

GetMOPCode(){
  var getoplist=[];
  var stringoplist;
  // this.authservice.presentLoading(); 
  if(this.searchword == undefined){
    this.searchword = "";
  }
  this.authservice.GetMOPCode(this.dealerid,"0","10",this.searchword).subscribe(res =>{
    this.codelist = res;
    console.log(this.codelist);

    if(this.rescustvin.data.OPCodeList){
      this.codelist = this.rescustvin.data.OPCodeList;
      this.codelist.forEach(element => {
         element.isChecked = true;
      })
      // for(let i =0 ; i<this.rescustvin.data.OPCodeList.length;i++){
      //   getoplist.push(this.rescustvin.data.OPCodeList[i].OpCode);
      //   this.opArray.push(this.rescustvin.data.OPCodeList[i]);
      // }
      // stringoplist = getoplist.join();
      // var a = stringoplist;
      // if (a.includes(",")) {
      //   var b = a.split(",");
      // }
      // else {
      //   var b = a;
      // }
  
      // this.codelist.forEach(element => {
      //   element.isChecked = false;
      //   if (b.indexOf(element.OpCode) != -1) {
      //     element.isChecked = true;
      //   }
      // });
      // console.log("codelist",this.codelist);
    }
   
    // this.authservice.dismissLoading();
  })
}

SearchOp(){
  // this.authservice.presentLoading(); 
  if(this.searchword.length >= 2){
    this.isSearch = true;
  this.authservice.GetMOPCode(this.dealerid,"1","10",this.searchword).subscribe(res =>{
    this.searchopcode = res;
    console.log(this.searchopcode);
    for(let i = 0; i<this.searchopcode.length;i++){
     this.codelist.unshift(this.searchopcode[i]);
    }
   this.codelist = [...new Map(this.codelist.map(item =>
  [item["OpCode"], item])).values()];
    // for(let i = 0; i<this.searchopcode.length;i++){
    //   this.codelist.push(this.searchopcode[i]);
    // //  this.codelist.forEach(function (el, index) {
    // //     console.log(index);
    // //     if(this.codelist[index].OpCode.indexOf(this.searchopcode[i].OpCode) === -1){
    // //       this.codelist.push(this.searchopcode[i]);
    // //     }
    // //   });
    // //   if(this.codelist[index].OpCode.indexOf(this.searchopcode[i].OpCode) === -1){
    // //     this.codelist.push(this.searchopcode[i]);
    // //   }
      
    // //   //  if(el.OpCode != this.searchopcode[i].OpCode){
        
    // //   //  }
       
    // //  })
     
    // }
    // this.codelist = [... new Set(this.codelist)];
    // //return Array.from(new Set(this.codelist));
    // console.log(this.codelist);
    // this.authservice.dismissLoading();
  })

}
else if(this.searchword.length == 0){
  for(let i = 0; i <this.searchopcode.length;i++){
    if(this.searchopcode[i].isChecked == true){
     // this.codelist.unshift(this.searchopcode[i]);
    }
   
    
  }
  console.log(this.codelist);
  //this.codelist.forEach(function(el){
    //console.log(p.has(el.OpCode));
  // if(!p.has(el.OpCode)) p.add(el)
  // if(p.has(el.OpCode)){
  //   console.log();
  // }
  
//})

//this.codelist = this.codelist.distinct();
console.log(this.codelist);
   this.codelist = [... new Set(this.codelist)];
  this.isSearch = false;
}
}

cancelsearch(){
  console.log("cancel");
  // for(let i = 0; i <this.searchopcode.length;i++){
  //   if(this.searchopcode[i].isChecked == true){
  //     this.codelist.unshift(this.searchopcode[i]);
  //   }
  // }
  // this.codelist = [... new Set(this.codelist)];
  this.isSearch = false;
}

doInfinite(infiniteScroll) {
  this.from = this.page + 1;
  this.page = this.page+10;
  setTimeout(() => {
    this.authservice.GetMOPCode(this.dealerid,this.from,this.page,"")
       .subscribe(
         res => {
           this.data = res; 
           console.log(this.data);
           for(let i=0; i<this.data.length; i++) {
             
                this.codelist.push(this.data[i]);
               }
           
          
         },
         error =>  console.log("eror"));
         //this.codelist = [... new Set(this.codelist)];
    console.log(this.codelist);
    console.log('Async operation has ended');
    infiniteScroll.target.complete();
  }, 1000);
}

toggleInfiniteScroll() {
  this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
}

Next(val){
  this.ionContent.scrollToTop();
  if(val == 'one'){
    this.activestep(2);
  }
  if(val == 'two'){
    this.activestep(3);
  }
  if(val == 'three'){
    this.activestep(4);
  }
  if(val == 'four'){
    this.activestep(5);
  }
  if(val == 'five'){
    this.activestep(6);
  }
  if(val == 'six'){
    this.activestep(7);
  }
  if(val == 'seven'){
    this.activestep(8);
  }
  if(val == 'eight'){
    this.activestep(9);
  }

  // if(this.opArray == '' || this.opArray == undefined || this.opArray == null){
  //   this.authservice.showToast("Please select opcode first");
  // }else{
  //   // this.events.publish('opArray', this.opArray);
   // this.activestep(4);
  // }  
}


prev(val){
  this.ionContent.scrollToTop();
  if(val == 'two'){
    this.activestep(1);
  }
  if(val == 'three'){
    this.activestep(2);
  }
  if(val == 'four'){
    this.activestep(3);
  }
  if(val == 'five'){
    this.activestep(4);
  }
  if(val == 'six'){
    this.activestep(5);
  }
  if(val == 'seven'){
    this.activestep(6);
  }
  if(val == 'eight'){
    this.activestep(7);
  }
  if(val == 'nine'){
    this.activestep(8);
  }

  // if(this.opArray == '' || this.opArray == undefined || this.opArray == null){
  //   this.authservice.showToast("Please select opcode first");
  // }else{
  //   // this.events.publish('opArray', this.opArray);
   // this.activestep(4);
  // }  
}
SelectOP(event,data){
  console.log(data);
  let checked = 0;
  if(data.isChecked == true )
  {

    this.checkop.push(data.OpCode);

    /*if(this.checkop.length == 0)
    {
      this.checkop.push(data.OpCode);
    }
    else
    {
      for(let i = 0;i <this.checkop.length;i++){
        if(this.checkop[i] == data.OpCode)
        {
        
        }
        else
        {
          this.checkop.push(data.OpCode);
          console.log("Else OP Check:" , this.checkop);
        }
      }
    }*/
    //this.checkop = [... new Set(this.checkop)];
        
        console.log(this.checkop);
    // for(let i = 0 ; i<this.codelist.length;i++){
    //   if(this.codelist[i].Opcode == data.OpCode){
    //     this.codelist.splice(i,1);
    //   }
    // }
   //this.codelist.push(data);
  }
  else
  {
    for(let i = 0;i <this.checkop.length;i++){
      if(this.checkop[i] == data.OpCode){
        this.checkop.splice(i,1);
      }
    }
    console.log(this.checkop);
    //this.checkop.splice(data.OpCode,1);
    // for(let i=0 ; i<this.codelist.length;i++){
    //   if(this.codelist[i].OpCode == data.OpCode){
    //     this.codelist.splice(i,1);
    //   }
    // }
    // let newArray = this.opArray.filter(function(el) {
    //   return el.OpCode !== data.OpCode;
    // });
    // this.opArray = newArray;
  }

  console.log(this.codelist);
 }

 // for Transportation

 TransNext(){
  this.ionContent.scrollToTop();
 /* if(this.transportdata.TransportationName == null || this.transportdata.TransportationName  == '' || this.transportdata.TransportationName  == undefined){
    this.authservice.alertshow("Please Select Transportation");
   
  }
  else{
    this.activestep(5);
  } */
  if(this.tvalue != 'Drop Off'){
    // this.events.publish('step:created', "step4");
  }else{
    // this.events.publish('stepskip:created', "step6");
  }
  this.activestep(5);
  // this.events.publish('Transportation', this.tvalue);
}

GetTransportationList(){
  // this.authservice.presentLoading();    
  this.authservice.GetTransportationList(this.dealerid).subscribe(res =>{
    this.transportdata = res;
    console.log(this.transportdata);
    console.log(this.transportdata.TransportationName);
    
    if(this.rescustvin.data.Transportation){
      this.tvalue = this.rescustvin.data.Transportation;
      this.transportdata.forEach(element => {
        element.checked = false;
        if (this.rescustvin.data.Transportation == element.TransportationName) {
          element.checked = true;
        }
      });
      //console.log("codelist",this.codelist);
    }
    this.GetWeekDays();
    // this.authservice.dismissLoading();
})
}

GetWheelsTiresDetails(){  
  this.authservice.GetWheelsTiresDetails(this.dealerid).subscribe(res =>{
    console.log(res);
    this.wheelsTireList = res;
    this.lfront = this.wheelsTireList.wheelsTireList[0].WheelTire;
    this.lrear = this.wheelsTireList.wheelsTireList[0].WheelTire;
    this.rfront = this.wheelsTireList.wheelsTireList[0].WheelTire;
    this.rrear = this.wheelsTireList.wheelsTireList[0].WheelTire;

    this.WheelsTypeList = this.wheelsTireList.WheelsTypeList;
    this.wheelsDepthList = this.wheelsTireList.wheelsDepthList;



})
}

GetWipersAndLightsType(){    
  this.authservice.GetWipersAndLightsType(this.dealerid).subscribe(res =>{
    console.log(res);
})
}

GetWeekDays(){
  // this.authservice.presentLoading();    
  this.authservice.GetWeekDays().subscribe(res =>{
    this.weekdata = res;
    console.log(this.weekdata);
    // this.authservice.dismissLoading();
})
}

CalculateDealershipHRS(){
  // this.authservice.presentLoading();    
  this.authservice.CalculateDealershipHRS(this.dealerid,this.dayname,"value",this.userid).subscribe(res =>{
    this.dealershipdata = res;
    console.log(this.dealershipdata);
    this.totaldropoff = this.dealershipdata[0].DropOffAppointmentLimit;
    this.useddropoff = this.dealershipdata[0].UsedAppt;
    this.totalhrs = this.dealershipdata[0].TotalHrsDuration;
    this.totalusedhrs = this.dealershipdata[0].UsedHRS;
    // this.authservice.dismissLoading();
   
})
}

Selection(name: string,e) {
  console.log(name);
  console.log(e);
  this.tvalue = name;
  this.transportdata.forEach(x => {
    x.checked = false;
    console.log(name);
    console.log(e.detail.value);
    if (x.TransportationName == e.detail.value) {
      x.checked = true;
    }
  })
  console.log(this.transportdata);
}

ChangeWeekDay(event) {
  console.log(event);
  this.dayname = event.detail.value.DayName;
  this.CalculateDealershipHRS();
}

// for Advisor


AdvisorNext(){
  this.ionContent.scrollToTop();
  if(this.advisorid == null || this.advisorid == '' || this.advisorid == undefined){
    this.authservice.alertshow("Please Select Advisor")
  }else{
    // this.events.publish('advisorid', this.advisorid);
    this.activestep(6);
  }   
}

GetAdvisorList(){
  var getadvisor;
  // this.authservice.presentLoading();   
  this.authservice.GetAdvisorList(this.dealerid).subscribe(res =>{
    this.advisordata = res;
    console.log(this.advisordata);
    
    if(this.rescustvin.data){
      getadvisor = this.rescustvin.data.AdvisorId;
      this.advisorid = getadvisor;
      this.advisordata.forEach(el =>{
        el.checked = false;
        if(getadvisor == el.AdvisorId){
          el.checked = true;
        }
      })
      for(let i=0;i<this.advisordata.length;i++){
        if(this.rescustvin.data.AdvisorId == this.advisordata[i].AdvisorId){
          this.advisorname = this.advisordata[i].AdvisorName;
        }
      }
      console.log("advisor",this.advisordata);
    }
    // this.authservice.dismissLoading();
  })
}

AdvisorSelection(id,e){
  console.log(id);
  console.log(e.detail.value);
  for(let i=0;i<this.advisordata.length;i++){
    if(id == this.advisordata[i].AdvisorId){
      this.advisorname = this.advisordata[i].AdvisorName;
    }
  }
  this.advisorid = id; 
  this.advisordata.forEach(x => {
    x.checked = false;
    if (x.AdvisorId == e.detail.value) {
      x.checked = true;
    }
  })  
  console.log("advisor id",this.advisorid);
}

// For data/time

DateNext(){
  this.ionContent.scrollToTop();
  if(this.sdate == '' || this.sdate == null || this.sdate == undefined){
    this.authservice.alertshow("Please select date")
  }else if(this.sdate == '' || this.sdate == null || this.sdate == undefined){
    this.authservice.alertshow("Please select time slot")
  }else{
    // this.events.publish('step:created', "step6");
    this.activestep(7);
  }
}

GetTimeIntervals(){
  if(this.appointmentid == undefined){
    this.timeid = "0";
  }
  else{
    this.timeid = this.appointmentid;
  }
  // this.authservice.presentLoading();
  console.log(this.dealerid);
  console.log(this.advisorid);
  console.log(this.sdate1);
  console.log(this.timeid);

  this.authservice.GetTimeIntervals(this.dealerid,this.advisorid,this.sdate1,this.timeid).subscribe(res =>{
    this.intervaldata = res;
    console.log(this.intervaldata);
    // this.authservice.dismissLoading();
    if(this.intervaldata[0].TimeInerrvals == "null"){
      this.authservice.alertshow(this.intervaldata[0].message);
      this.sdate = "";
    }    
  })

  //this.checktimeslot();
}

ChangeDate(event){
  this.sdate1 =this.datepipe.transform(this.sdate, 'MM/dd/yyyy');
  console.log(this.sdate1);
  this.GetTimeIntervals();

 
  //this.checktimeslot();

}
checktimeslot(){
  var currentdate1;
  currentdate1 =this.datepipe.transform(this.currentdate, 'MM/dd/yyyy');
  
  console.log(currentdate1);
  console.log(this.sdate1);
  
  if(currentdate1 == this.sdate1)
  {
   // Date.parse('01/01/2011 10:20:45') > Date.parse('01/01/2011 5:10:10')
    this.Temptime = (moment(new Date).format('h:mm A'));
    console.log(this.Temptime);
  }

}


ChangeTime(event){
 
  if(this.rescustvin.data){
   
     if(this.interval == undefined){
       this.interval = this.rescustvin.data.AppointmentTime;
     }
  
    // this.timeid = this.interval;
     this.intervaldata.forEach(el =>{
       el.checked = false;
       if(this.interval == el.timeid){
         el.checked = true;
       }
     })
   }
 
   this.interval = this.interval;
   this.Promisetime = this.interval;
 
 
   
   for(let i=0;i<this.intervaldata.length;i++){
     if(this.interval == this.intervaldata[i].TimeInerrvals){
       this.AppointmentTime = this.intervaldata[i].AppointmentTimeId;
      
     }
   }

   if(this.interval == '' || this.interval == null || this.interval == undefined)
   {
    this.Tempinterval = this.interval;
  
   }
   //this.Tempinterval = this.interval;
   console.log(this.Tempinterval);
   
   console.log(this.interval);
   console.log(this.AppointmentTime);
   
  // console.log(this.interval);
   //console.log(this.timeid);
   
  
 }

 

/*ChangeTime(event){
  
  this.interval = this.interval;
  this.Promisetime = this.interval;
  for(let i=0;i<this.intervaldata.length;i++){
    if(this.interval == this.intervaldata[i].TimeInerrvals){
      this.AppointmentTime = this.intervaldata[i].AppointmentTimeId;
    }
  }
  console.log(this.interval);
  console.log(this.AppointmentTime);
}*/

// async presentAlertCheckbox() {
//   var email,text;
//   const alert = await this.alertController.create({
//     header: 'Do You Want?',
//     inputs: [
//       {
//         name: 'Email',
//         type: 'checkbox',
//         label: 'Email',
//         value: 'email', 
//       },

//       {
//         name: 'Text',
//         type: 'checkbox',
//         label: 'Text',
//         value: 'text'
//       },

//       {
//         name: 'None',
//         type: 'checkbox',
//         label: 'None',
//         value: 'none'
//       },
//     ],
//     buttons: [
//       {
//         text: 'Cancel',
//         role: 'cancel',
//         cssClass: 'secondary',
//         handler: () => {
//           console.log('Confirm Cancel');
//         }
//       }, {
//         text: 'Ok',
//         handler: (data) => {
//           console.log(data)
//           console.log('Confirm Ok');

//           if(data.length == 0){
//             this.authservice.showToast("Please select option");
//           }
//           else{
//             if(data.length == 2){
//               email = true;
//               text = true;
//             }
//             else{
//               if(data[0] == "email"){
//                 email = true;
//                 text = false;
//               }
//               else if(data[0] == "text"){
//                 text=true;
//                 email = false
//               }
//               else{
//                 text=false;
//                 email = false
//               }
//             }
//             var finalopcode = [];
//             for(let i = 0 ; i<this.codelist.length;i++){
//               if(this.codelist[i].isChecked == true){
//                 finalopcode.push(this.codelist[i]);
//               }
//             }
//            // if(this.appointmentid != "" && this.isupdate == false){
//             if(this.unaddvalue != "" || this.unaddvalue != null || this.unaddvalue != undefined){
//               if(this.unaddvalue){
//                 this.notearray.push(this.unaddvalue);
//               }
             
//             }
//          // }
//               //console.log(this.myForm.value.player1)
//               this.WipersAndLightsList = [];
//                if(finalopcode.length == 0){
//                  this.authservice.showToast("Please select opcode");
//                }
//               else if(this.advisorid == '' || this.advisorid == null || this.advisorid == undefined){
//                 this.authservice.showToast("Please select advisor");
//               }else if(this.sdate == '' || this.sdate == null || this.sdate == undefined){
//                 this.authservice.showToast("Please select date");
//               }else if(this.interval == '' || this.interval == null || this.interval == undefined){
//                 this.authservice.showToast("Please select timeslot");
//                // if(this.appointmentid != "" || this.appointmentid == undefined){
//               } 
              
//              else if(this.notearray.length == 0){
//                 this.authservice.showToast("Please enter note");
//               }
//               else{  
//               this.authservice.presentLoading();
//               if(this.fogspeed != undefined){
//                 let object1 = {
//                   WTypeName : "Front",
//                   WMainName: "FogLights",
//                   WSpeedType:this.fogspeed
//                 }
//                 this.WipersAndLightsList.push(object1);
//               }
            
//               if(this.dayspeed != undefined){
//                 let object2 = {
//                   WTypeName : "Front",
//                   WMainName: "DayTimeLights",
//                   WSpeedType:this.dayspeed
//                 }
//                 this.WipersAndLightsList.push(object2);
//               }
            
//             if(this.highspeed != undefined){
//               let object3 = {
//                 WTypeName : "Front",
//                 WMainName: "HighBeamLights",
//                 WSpeedType:this.highspeed
//               }
//               this.WipersAndLightsList.push(object3);
//             }
            
//             if(this.wiperspeed != undefined){
            
//               let object4 = {
//                 WTypeName : "Front",
//                 WMainName: "Wipers",
//                 WSpeedType:this.wiperspeed
//               }
//               this.WipersAndLightsList.push(object4);
//             }
            
//             if(this.rearwiper != undefined){
//               let object5 = {
//                 WTypeName : "Rear",
//                 WMainName: "RearWipers",
//                 WSpeedType:this.rearwiper
//               }
//               this.WipersAndLightsList.push(object5);
//             }
            
//             if(this.rearlights != undefined){
//               let object6 = {
//                 WTypeName : "Rear",
//                 WMainName: "RearLights",
//                 WSpeedType:this.rearlights
//               }
//               this.WipersAndLightsList.push(object6);
//             }
            
//             if(this.brakelight != undefined){
//               let object7 = {
//                 WTypeName : "Rear",
//                 WMainName: "BrakeLights",
//                 WSpeedType:this.brakelight
//               }
//               this.WipersAndLightsList.push(object7);
//             }
//             var finalopcode = [];
//             for(let i = 0 ; i<this.codelist.length;i++){
//               if(this.codelist[i].isChecked == true){
//                 finalopcode.push(this.codelist[i]);
//               }
//             }
//             if(this.fname == undefined || this.fname == "" || this.fname == null){
//               this.fname = "";
//             }
//             if(this.lname == undefined || this.lname == "" || this.lname == null){
//               this.lname = "";
//             }
//             if(this.cname == undefined || this.cname == "" || this.cname == null){
//               this.cname = "";
//             }

//             var fnotearr = this.notearray.join();
//             if(this.appointmentid == undefined){
//               this.appointmentid = "";
//               this.authservice.InsertAppointment(this.dealerid,this.CustomerId,this.fname,this.lname,this.cname,this.userid,"Pending",fnotearr,this.sdate1,this.Promisetime,this.AppointmentTime,this.tvalue,this.colorid,this.licenseplate,this.avgmileage,this.mileage,this.VIN,this.makeid,this.yearid,
//               this.modelid,this.trimid,finalopcode,this.lfw,this.lft,this.lrw,this.lrt,this.rfw,this.rft,this.rrw,this.rrt,this.WipersAndLightsList,this.appointmentid,this.advisorid,this.makename,this.modelname,this.email,this.yearname,this.advisorname,email,text,this.homephone,this.workphone,this.mobile,this.zipcode,this.countryid,this.stateid,this.cityid,this.saddress,this.saddress1,this.sub).subscribe(res =>{
//               console.log(res);
//               this.aptdata =res;
//                 this.authservice.dismissLoading();
//                 this.authservice.showToast(this.aptdata.message);
//                 // this.router.navigateByUrl('/takeimage');
//                 this.router.navigate(['/takeimage'],{ queryParams: {AppointmentId :this.aptdata.AppointmentId ,VIN: this.VIN,backpage:"true",Isedit:false},replaceUrl: true });
//               })
//             }
//             else{
//               this.authservice.UpdateAppointment(this.dealerid,this.CustomerId,this.fname,this.lname,this.cname,this.userid,"Pending",fnotearr,this.sdate1,this.Promisetime,this.AppointmentTime,this.tvalue,this.colorid,this.licenseplate,this.avgmileage,this.mileage,this.VIN,this.makeid,this.yearid,
//               this.modelid,this.trimid,finalopcode,this.lfw,this.lft,this.lrw,this.lrt,this.rfw,this.rft,this.rrw,this.rrt,this.WipersAndLightsList,this.appointmentid,this.advisorid,this.makename,this.modelname,this.email,this.yearname,this.advisorname,email,text,this.homephone,this.workphone,this.mobile,this.zipcode,this.countryid,this.stateid,this.cityid,this.saddress,this.saddress1,this.sub).subscribe(res =>{
//               // this.authservice.UpdateAppointment(this.dealerid,this.CustomerId,this.fname,this.lname,this.userid,"Pending",fnotearr,this.sdate1,this.Promisetime,this.AppointmentTime,this.tvalue,this.colorid,this.licenseplate,this.avgmileage,this.mileage,this.VIN,this.makeid,this.yearid,
//               // this.modelid,this.trimid,finalopcode,this.lfw,this.lft,this.lrw,this.lrt,this.rfw,this.rft,this.rrw,this.rrt,this.WipersAndLightsList,this.appointmentid,this.advisorid,email,text,this.homephone,this.workphone,this.mobile,this.zipcode,this.countryid,this.stateid,this.cityid,this.saddress,this.saddress1).subscribe(res =>{
//               console.log(res);
//               this.aptdata =res;
//                 this.authservice.dismissLoading();
//                 this.authservice.showToast(this.aptdata.message);
//                 // this.router.navigateByUrl('/takeimage');
//                 this.router.navigate(['/takeimage'],{ queryParams: {AppointmentId :this.aptdata.AppointmentId ,VIN: this.VIN,backpage:"true",Isedit:true},replaceUrl: true });
//               })
//             }
//             }
//           }
//         }
//       }
//     ]
//   });

//   await alert.present();
// }

// async presentAlertCheckbox1() {
//   var email,text;
//   const alert = await this.alertController.create({
//     header: 'Do you want to create RO?',
//     inputs: [
//       {
//         name: 'Yes',
//         type: 'radio',
//         label: 'Yes',
//         value: 'yes', 
//       },

//       {
//         name: 'No',
//         type: 'radio',
//         label: 'No',
//         value: 'no'
//       },
//     ],
//     buttons: [
//       {
//         text: 'Cancel',
//         role: 'cancel',
//         cssClass: 'secondary',
//         handler: () => {
//           console.log('Confirm Cancel');
//         }
//       }, {
//         text: 'Ok',
//         handler: (data) => {
//           console.log(data)
//           console.log('Confirm Ok');
          
//           if(data == "yes"){
//            this.continuero();
//           }
//           else if(data == "no"){
//             this.presentAlertCheckbox();
//           }
          
//           }
//         }
//     ]
//   });

//   await alert.present();

// }





// continuero(){
//   console.log("ro");
//   var finalopcode = [];
//             for(let i = 0 ; i<this.codelist.length;i++){
//               if(this.codelist[i].isChecked == true){
//                 finalopcode.push(this.codelist[i]);
//               }
//             }
//             if(finalopcode.length == 0){
//               this.authservice.showToast("Please select opcode");
//             }
//             else{
//               console.log(finalopcode);
//               let data = {
//                 'opcode' : finalopcode,
//                 'dlrid':this.dealerid,
//                 'cid':this.CustomerId,
//                 'vin':this.VIN,
//                 'add1':this.saddress,
//                 'add2':this.saddress1,
//                 'city':this.cityid,
//                 'state':this.stateid,
//                 'zip':this.zipcode,
//                 'homeno':this.homephone,
//                 'workno':this.workphone,
//                 'email':this.email,
//                 'year':this.yearid,
//                 'make':this.makeid,
//                 'model':this.modelid,
//                 'license':this.licenseplate,
//                 'color':this.colorid,
//                 'uid':this.userid,
//               }
//               this.authservice.setopcodero(data);
//               this.router.navigate(['/createro', finalopcode ]);
//             }
       
// }

Gotopic(){

  var finalopcode = [];
  for(let i = 0 ; i<this.codelist.length;i++){
    if(this.codelist[i].isChecked == true){
      finalopcode.push(this.codelist[i]);
    }
  }
 // if(this.appointmentid != "" && this.isupdate == false){
  
 /* if(this.unaddvalue != "" && this.unaddvalue != null && this.unaddvalue != undefined)
  {
    if(this.unaddvalue  && this.unaddvalue.length > 0 && this.unaddvalue.trim() !='' ) 
    {
      console.log('Add Value Time: ',this.unaddvalue);
     // this.myForm.addControl('player' + this.unaddvalue, new FormControl('', Validators.required));
 
    //  this.notearray.push(this.myForm.addControl('player' + this.unaddvalue, new FormControl('', Validators.required)));  
      this.notearray.push(this.unaddvalue);
      console.log('Next Time: ',this.notearray);
    }
      
  }*/

// }
    //console.log(this.myForm.value.player1)
    this.WipersAndLightsList = [];
     if(finalopcode.length == 0){
       this.authservice.alertshow("Please select opcode");
     }
    /*else if(this.transportdata.TransportationName == null || this.transportdata.TransportationName  == '' || this.transportdata.TransportationName  == undefined){
      this.authservice.alertshow("Please Select Transportation");
     
    }*/
    else if(this.advisorid == '' || this.advisorid == null || this.advisorid == undefined){
      this.authservice.alertshow("Please select advisor");
    }else if(this.sdate == '' || this.sdate == null || this.sdate == undefined){
      this.authservice.alertshow("Please select date");
    }else if(this.interval == '' || this.interval == null || this.interval == undefined){
      this.authservice.alertshow("Please select timeslot");
     // if(this.appointmentid != "" || this.appointmentid == undefined){
    } 
    
   else if(this.notearray.length == 0){
      this.authservice.alertshow("Please enter note");
    }
    else{  
    //this.authservice.presentLoading();
    if(this.fogspeed != undefined){
      let object1 = {
        WTypeName : "Front",
        WMainName: "FogLights",
        WSpeedType:this.fogspeed
      }
      this.WipersAndLightsList.push(object1);
    }
  
    if(this.dayspeed != undefined){
      let object2 = {
        WTypeName : "Front",
        WMainName: "DayTimeLights",
        WSpeedType:this.dayspeed
      }
      this.WipersAndLightsList.push(object2);
    }
  
  if(this.highspeed != undefined){
    let object3 = {
      WTypeName : "Front",
      WMainName: "HighBeamLights",
      WSpeedType:this.highspeed
    }
    this.WipersAndLightsList.push(object3);
  }
  
  if(this.wiperspeed != undefined){
  
    let object4 = {
      WTypeName : "Front",
      WMainName: "Wipers",
      WSpeedType:this.wiperspeed
    }
    this.WipersAndLightsList.push(object4);
  }
  
  if(this.rearwiper != undefined){
    let object5 = {
      WTypeName : "Rear",
      WMainName: "RearWipers",
      WSpeedType:this.rearwiper
    }
    this.WipersAndLightsList.push(object5);
  }
  
  if(this.rearlights != undefined){
    let object6 = {
      WTypeName : "Rear",
      WMainName: "RearLights",
      WSpeedType:this.rearlights
    }
    this.WipersAndLightsList.push(object6);
  }
  
  if(this.brakelight != undefined){
    let object7 = {
      WTypeName : "Rear",
      WMainName: "BrakeLights",
      WSpeedType:this.brakelight
    }
    this.WipersAndLightsList.push(object7);
  }
  var finalopcode = [];
  for(let i = 0 ; i<this.codelist.length;i++){
    if(this.codelist[i].isChecked == true){
      finalopcode.push(this.codelist[i]);
    }
  }
  if(this.fname == undefined || this.fname == "" || this.fname == null){
    this.fname = "";
  }
  if(this.lname == undefined || this.lname == "" || this.lname == null){
    this.lname = "";
  }
  if(this.cname == undefined || this.cname == "" || this.cname == null){
    this.cname = "";
  }

  var fnotearr = this.notearray.join('~');
  console.log("Notes Detail:" +  fnotearr);
  if(this.appointmentid == undefined){
     this.appointmentid = "";
    // this.authservice.InsertAppointment(this.dealerid,this.CustomerId,this.fname,this.lname,this.cname,this.userid,"Pending",fnotearr,this.sdate1,this.Promisetime,this.AppointmentTime,this.tvalue,this.colorid,this.licenseplate,this.avgmileage,this.mileage,this.VIN,this.makeid,this.yearid,
    // this.modelid,this.trimid,finalopcode,this.lfw,this.lft,this.lrw,this.lrt,this.rfw,this.rft,this.rrw,this.rrt,this.WipersAndLightsList,this.appointmentid,this.advisorid,this.makename,this.modelname,this.email,this.yearname,this.advisorname,"email","text",this.homephone,this.workphone,this.mobile,this.zipcode,this.countryid,this.stateid,this.cityid,this.saddress,this.saddress1,this.sub).subscribe(res =>{
    // console.log(res);
    // this.aptdata =res;
    //   this.authservice.dismissLoading();
    //   this.authservice.showToast(this.aptdata.message);
    //   // this.router.navigateByUrl('/takeimage');
    //   this.router.navigate(['/takeimage'],{ queryParams: {AppointmentId :this.aptdata.AppointmentId ,VIN: this.VIN,backpage:"true",Isedit:false},replaceUrl: true });
    // })

  //   var CustomerName;
  //   if(this.fname == "" || this.fname == undefined || this.fname == null){
  //     if(this.lname == "" || this.lname == undefined || this.lname == null){
  //        CustomerName = this.cname;
  //     }
      
  //   }
  //   else{
  //     CustomerName = this.fname + " " + this.lname;
  //  }
    let appointmentdata={
      "DealershipId":this.dealerid,
      "CustomerId":this.CustomerId,
      "fname":this.fname,
      "lname":this.lname,
      "cname":this.cname,
      "StartDate":"",
      "EndDate":"",
      "CreatedBy":this.userid,
      "CreatedFor":this.advisorid,
      "Status":"Pending",
      "NotesList":fnotearr,
      "PromiseDate":this.sdate1,
      "Promisetime":this.Promisetime,
      "AppointmentTime":this.AppointmentTime,
      "Transportation":this.tvalue,
      "ColorId":this.colorid,
      "LicensePlate":this.licenseplate,
      "AverageMilesOrMonth":this.avgmileage,
      "Mileage":this.mileage,
      "VIN":this.VIN,
      "MakeId":this.makeid,
      "YearId":this.yearid,
      "ModelId":this.modelid,
      "TrimId":this.trimid,
      "UserId":this.userid,
      "ModifiedBy":"",
      "UsedHRS":"",
      "LeftFrontwheel":this.lfw,
      "LeftFrontTire":this.lft,
      "LeftRearwheel":this.lrw,
      "LeftRearTire":this.lrt,
      "RightFrontWheel":this.rfw,
      "RightFrontTire":this.rft,
      "RightRearWheel":this.rrw,
      "RightRearTire":this.rrt,
      "OPCodeList": finalopcode,
      "WipersAndLightsList":this.WipersAndLightsList,
      "AppointmentId":this.appointmentid,
      "CustomerEmail":this.email,
      "Vehicalemake":this.makename,
      "Vehicalemodel":this.modelname,
      "Vehicaleyear":this.yearname,
      "AdvisorName":this.advisorname,
      "SendEmail":"semail",
      "SendText":"stext",
      "HomeNo":this.homephone,
      "WorkNo":this.workphone,
      "CellNo":this.mobile,
      "Zip":this.zipcode,
      "Country":this.countryid,
      "State":this.stateid,
      "City":this.cityid,
      "Address1":this.saddress,
      "Address2":this.saddress1,
      "Notes":this.sub
    }
    this.authservice.setappdata(appointmentdata);

   /* if (this.isupdate = true) {
      this.router.navigate(['/takeimage'],{ queryParams: {AppointmentId :this.appointmentid,backpage:"true",Isedit:true} });
 
    }
    else{
      
      this.router.navigate(['/takeimage'],{ queryParams: {AppointmentId :this.appointmentid,backpage:"true",Isedit:false} });
 
    }*/
    this.router.navigate(['/takeimage'],{ queryParams: {AppointmentId :this.appointmentid,backpage:"true",Isedit:false} });
 
  }
  else{
    // this.authservice.UpdateAppointment(this.dealerid,this.CustomerId,this.fname,this.lname,this.cname,this.userid,"Pending",fnotearr,this.sdate1,this.Promisetime,this.AppointmentTime,this.tvalue,this.colorid,this.licenseplate,this.avgmileage,this.mileage,this.VIN,this.makeid,this.yearid,
    // this.modelid,this.trimid,finalopcode,this.lfw,this.lft,this.lrw,this.lrt,this.rfw,this.rft,this.rrw,this.rrt,this.WipersAndLightsList,this.appointmentid,this.advisorid,this.makename,this.modelname,this.email,this.yearname,this.advisorname,"email","text",this.homephone,this.workphone,this.mobile,this.zipcode,this.countryid,this.stateid,this.cityid,this.saddress,this.saddress1,this.sub).subscribe(res =>{
    // // this.authservice.UpdateAppointment(this.dealerid,this.CustomerId,this.fname,this.lname,this.userid,"Pending",fnotearr,this.sdate1,this.Promisetime,this.AppointmentTime,this.tvalue,this.colorid,this.licenseplate,this.avgmileage,this.mileage,this.VIN,this.makeid,this.yearid,
    // // this.modelid,this.trimid,finalopcode,this.lfw,this.lft,this.lrw,this.lrt,this.rfw,this.rft,this.rrw,this.rrt,this.WipersAndLightsList,this.appointmentid,this.advisorid,email,text,this.homephone,this.workphone,this.mobile,this.zipcode,this.countryid,this.stateid,this.cityid,this.saddress,this.saddress1).subscribe(res =>{
    // console.log(res);
    // this.aptdata =res;
    //   this.authservice.dismissLoading();
    //   this.authservice.showToast(this.aptdata.message);
    //   // this.router.navigateByUrl('/takeimage');
    //   this.router.navigate(['/takeimage'],{ queryParams: {AppointmentId :this.aptdata.AppointmentId ,VIN: this.VIN,backpage:"true",Isedit:true},replaceUrl: true });
    // })

  //   var CustomerName;
  //   if(this.fname == "" || this.fname == undefined || this.fname == null){
  //     if(this.lname == "" || this.lname == undefined || this.lname == null){
  //        CustomerName = this.cname;
  //     }
      
  //   }
  //   else{
  //     CustomerName = this.fname + " " + this.lname;
  //  }
    let appointmentdata={
      "DealershipId":this.dealerid,
      "CustomerId":this.CustomerId,
      "fname":this.fname,
      "lname":this.lname,
      "cname":this.cname,
      "StartDate":"",
      "EndDate":"",
      "CreatedBy":this.userid,
      "CreatedFor":this.advisorid,
      "Status":"Pending",
      "NotesList":fnotearr,
      "PromiseDate":this.sdate1,
      "Promisetime":this.Promisetime,
      "AppointmentTime":this.AppointmentTime,
      "Transportation":this.tvalue,
      "ColorId":this.colorid,
      "LicensePlate":this.licenseplate,
      "AverageMilesOrMonth":this.avgmileage,
      "Mileage":this.mileage,
      "VIN":this.VIN,
      "MakeId":this.makeid,
      "YearId":this.yearid,
      "ModelId":this.modelid,
      "TrimId":this.trimid,
      "UserId":this.userid,
      "ModifiedBy":"",
      "UsedHRS":"",
      "LeftFrontwheel":this.lfw,
      "LeftFrontTire":this.lft,
      "LeftRearwheel":this.lrw,
      "LeftRearTire":this.lrt,
      "RightFrontWheel":this.rfw,
      "RightFrontTire":this.rft,
      "RightRearWheel":this.rrw,
      "RightRearTire":this.rrt,
      "OPCodeList": finalopcode,
      "WipersAndLightsList":this.WipersAndLightsList,
      "AppointmentId":this.appointmentid,
      "CustomerEmail":this.email,
      "Vehicalemake":this.makename,
      "Vehicalemodel":this.modelname,
      "Vehicaleyear":this.yearname,
      "AdvisorName":this.advisorname,
      "SendEmail":"semail",
      "SendText":"stext",
      "HomeNo":this.homephone,
      "WorkNo":this.workphone,
      "CellNo":this.mobile,
      "Zip":this.zipcode,
      "Country":this.countryid,
      "State":this.stateid,
      "City":this.cityid,
      "Address1":this.saddress,
      "Address2":this.saddress1,
      "Notes":this.sub
    }
    this.authservice.setappdata(appointmentdata);
    console.log(appointmentdata);
   
    /*if (this.isupdate = true) {
      this.router.navigate(['/takeimage'],{ queryParams: {AppointmentId :this.appointmentid,backpage:"true",Isedit:true} });
 
    }
    else{
      
      this.router.navigate(['/takeimage'],{ queryParams: {AppointmentId :this.appointmentid,backpage:"true",Isedit:false} });
 
    }*/
    this.router.navigate(['/takeimage'],{ queryParams: {AppointmentId :this.appointmentid,backpage:"true",Isedit:true} });

  }
  }  
}

// for Notes

BookAppointment(){
 // this.presentAlertCheckbox1();
//   var finalopcode = [];
// for(let i = 0 ; i<this.codelist.length;i++){
//   if(this.codelist[i].isChecked == true){
//     finalopcode.push(this.codelist[i]);
//   }
// }
//   console.log(this.myForm.value.player1)
//   this.WipersAndLightsList = [];
//    if(finalopcode.length == 0){
//      this.authservice.showToast("Please select opcode");
//    }
//   else if(this.advisorid == '' || this.advisorid == null || this.advisorid == undefined){
//     this.authservice.showToast("Please select advisor");
//   }else if(this.sdate == '' || this.sdate == null || this.sdate == undefined){
//     this.authservice.showToast("Please select date");
//   }else if(this.interval == '' || this.interval == null || this.interval == undefined){
//     this.authservice.showToast("Please select timeslot");
//   } else if(this.myForm.value.player1 == '' || this.myForm.value.player1== null || this.myForm.value.player1 == undefined){
//     this.authservice.showToast("Please enter note");
//   }else{  
//   this.authservice.presentLoading();
//   if(this.fogspeed != undefined){
//     let object1 = {
//       WTypeName : "Front",
//       WMainName: "FogLights",
//       WSpeedType:this.fogspeed
//     }
//     this.WipersAndLightsList.push(object1);
//   }

//   if(this.dayspeed != undefined){
//     let object2 = {
//       WTypeName : "Front",
//       WMainName: "DayTimeLights",
//       WSpeedType:this.dayspeed
//     }
//     this.WipersAndLightsList.push(object2);
//   }

// if(this.highspeed != undefined){
//   let object3 = {
//     WTypeName : "Front",
//     WMainName: "HighBeamLights",
//     WSpeedType:this.highspeed
//   }
//   this.WipersAndLightsList.push(object3);
// }

// if(this.wiperspeed != undefined){

//   let object4 = {
//     WTypeName : "Front",
//     WMainName: "Wipers",
//     WSpeedType:this.wiperspeed
//   }
//   this.WipersAndLightsList.push(object4);
// }

// if(this.rearwiper != undefined){
//   let object5 = {
//     WTypeName : "Rear",
//     WMainName: "RearWipers",
//     WSpeedType:this.rearwiper
//   }
//   this.WipersAndLightsList.push(object5);
// }

// if(this.rearlights != undefined){
//   let object6 = {
//     WTypeName : "Rear",
//     WMainName: "RearLights",
//     WSpeedType:this.rearlights
//   }
//   this.WipersAndLightsList.push(object6);
// }

// if(this.brakelight != undefined){
//   let object7 = {
//     WTypeName : "Rear",
//     WMainName: "BrakeLights",
//     WSpeedType:this.brakelight
//   }
//   this.WipersAndLightsList.push(object7);
// }
// var finalopcode = [];
// for(let i = 0 ; i<this.codelist.length;i++){
//   if(this.codelist[i].isChecked == true){
//     finalopcode.push(this.codelist[i]);
//   }
// }
// var fnotearr = this.notearray.join();
// if(this.appointmentid == undefined){
//   this.appointmentid = "";
//   this.authservice.InsertAppointment(this.dealerid,this.CustomerId,this.fname,this.lname,this.userid,"Pending",fnotearr,this.sdate1,this.Promisetime,this.AppointmentTime,this.tvalue,this.colorid,this.licenseplate,this.avgmileage,this.mileage,this.VIN,this.makeid,this.yearid,
//   this.modelid,this.trimid,finalopcode,this.lfw,this.lft,this.lrw,this.lrt,this.rfw,this.rft,this.rrw,this.rrt,this.WipersAndLightsList,this.appointmentid,this.advisorid,this.makename,this.modelname,"ashishvadhwa@blueboxinfosoft.com",this.yearname,this.advisorname,"semail","stext").subscribe(res =>{
//   console.log(res);
//   this.aptdata =res;
//     this.authservice.dismissLoading();
//     this.authservice.showToast("Appointment booked successfully !!");
//     // this.router.navigateByUrl('/takeimage');
//     this.router.navigate(['/takeimage'],{ queryParams: {AppointmentId :this.aptdata.AppointmentId ,VIN: this.VIN,backpage:"true"},replaceUrl: true });
//   })
// }
// else{
//   this.authservice.UpdateAppointment(this.dealerid,this.CustomerId,this.fname,this.lname,this.userid,"Pending",fnotearr,this.sdate1,this.Promisetime,this.AppointmentTime,this.tvalue,this.colorid,this.licenseplate,this.avgmileage,this.mileage,this.VIN,this.makeid,this.yearid,
//   this.modelid,this.trimid,finalopcode,this.lfw,this.lft,this.lrw,this.lrt,this.rfw,this.rft,this.rrw,this.rrt,this.WipersAndLightsList,this.appointmentid,this.advisorid).subscribe(res =>{
//   console.log(res);
//   this.aptdata =res;
//     this.authservice.dismissLoading();
//     this.authservice.showToast("Appointment booked successfully !!");
//     // this.router.navigateByUrl('/takeimage');
//     this.router.navigate(['/takeimage'],{ queryParams: {AppointmentId :this.aptdata.AppointmentId ,VIN: this.VIN,backpage:"true"},replaceUrl: true });
//   })
// }
  
// }
}

//end


}
