(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["createappointment-createappointment-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/createappointment/createappointment.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/createappointment/createappointment.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button text=\"\" icon=\"ios-arrow-back\" style=\"color: #ffffff\"></ion-back-button>\n        </ion-buttons>\n        <ion-title style=\"color: #ffffff\">{{title}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<div ion-fixed class=\"thumnails\">\n    <div class=\"list-thumbnail\">\n        <ion-row style=\"flex: 20\" nowrap class=\"img-thumb\" scrollX=\"true\">\n            <ion-col ion-item no-lines col-3 style=\"margin-top: 5px;\">\n                <button class=\"btnstyle\" ion-button full (click)=\"activestep('1')\" [ngStyle]=\"{'background-color': button1Color,'color' : txt1color,'padding': padding, 'border' : border}\">Customer Info</button>\n            </ion-col>\n            <ion-col ion-item no-lines col-3 style=\"margin-top: 5px;\">\n                <button class=\"btnstyle\" ion-button full (click)=\"activestep('2')\" [ngStyle]=\"{'background-color': button2Color,'color' : txt2color,'padding': padding, 'border' : border}\">Vehicle Info</button>\n            </ion-col>\n            <ion-col ion-item no-lines col-3 style=\"margin-top: 5px;\">\n                <button class=\"btnstyle\" ion-button full (click)=\"activestep('3')\" [ngStyle]=\"{'background-color': button3Color,'color' : txt3color,'padding': padding, 'border' : border}\">Maintenance & Repairs</button>\n            </ion-col>\n            <ion-col ion-item no-lines col-3 style=\"margin-top: 5px;\">\n                <button class=\"btnstyle\" ion-button full (click)=\"activestep('4')\" [ngStyle]=\"{'background-color': button4Color,'color' : txt4color,'padding': padding, 'border' : border}\">Transportation</button>\n            </ion-col>\n            <ion-col ion-item no-lines col-3 style=\"margin-top: 5px;\">\n                <button class=\"btnstyle\" ion-button full (click)=\"activestep('5')\" [ngStyle]=\"{'background-color': button5Color,'color' : txt5color,'padding': padding, 'border' : border}\">Advisor & Teams</button>\n            </ion-col>\n            <ion-col ion-item no-lines col-3 style=\"margin-top: 5px;\">\n                <button class=\"btnstyle\" ion-button full (click)=\"activestep('6')\" [ngStyle]=\"{'background-color': button6Color,'color' : txt6color,'padding': padding, 'border' : border}\">Date & Time</button>\n            </ion-col>\n            <ion-col ion-item no-lines col-3 style=\"margin-top: 5px;\">\n                <button class=\"btnstyle\" ion-button full (click)=\"activestep('7')\" [ngStyle]=\"{'background-color': button7Color,'color' : txt7color,'padding': padding, 'border' : border}\">Wheels & Tires</button>\n            </ion-col>\n            <ion-col ion-item no-lines col-3 style=\"margin-top: 5px;\">\n                <button class=\"btnstyle\" ion-button full (click)=\"activestep('8')\" [ngStyle]=\"{'background-color': button8Color,'color' : txt8color,'padding': padding, 'border' : border}\">Wipers & Lights</button>\n            </ion-col>\n            <ion-col ion-item no-lines col-3 style=\"margin-top: 5px;\">\n                <button class=\"btnstyle\" ion-button full (click)=\"activestep('9')\" [ngStyle]=\"{'background-color': button9Color,'color' : txt9color,'padding': padding, 'border' : border}\">Complain/Notes</button>\n            </ion-col>\n        </ion-row>\n\n    </div>\n</div>\n<ion-content scroll=\"false\">\n    \n\n    <div *ngIf=\"step == 1\" class=\"scroll\">\n        <ion-row class=\"rawcss\">\n            <ion-col ion-item size=\"6\" class=\"colcss\">\n                <ion-label class=\"labelcss\">First Name</ion-label>\n            </ion-col>\n            <ion-col ion-item size=\"6\">\n                <ion-input type='text' placeholder='First Name' [(ngModel)]='fname' class=\"inputcss\"></ion-input>\n            </ion-col>\n        </ion-row>\n        <ion-row class=\"rawcss\">\n            <ion-col ion-item size=\"6\" class=\"colcss\">\n                <ion-label class=\"labelcss\">Last Name</ion-label>\n            </ion-col>\n            <ion-col ion-item size=\"6\">\n                <ion-input type='text' placeholder='Last Name' [(ngModel)]='lname' class=\"inputcss\"></ion-input>\n            </ion-col>\n        </ion-row>\n        <ion-row class=\"rawcss\">\n            <ion-col ion-item size=\"6\" class=\"colcss\">\n                <ion-label class=\"labelcss\">Street Address </ion-label>\n            </ion-col>\n            <ion-col ion-item size=\"6\">\n                <ion-input type='text' placeholder='Street Address' [(ngModel)]='saddress' class=\"inputcss\"></ion-input>\n            </ion-col>\n        </ion-row>\n        <ion-row class=\"rawcss\">\n            <ion-col ion-item size=\"6\" class=\"colcss\">\n                <ion-label class=\"labelcss\">Street Address 1</ion-label>\n            </ion-col>\n            <ion-col ion-item size=\"6\">\n                <ion-input type='text' placeholder='Street Address 1' [(ngModel)]='saddress1' class=\"inputcss\"></ion-input>\n            </ion-col>\n        </ion-row>\n        <ion-row class=\"rawcss\">\n            <ion-col ion-item size=\"6\" class=\"colcss\">\n                <ion-label class=\"labelcss\">Country</ion-label>\n            </ion-col>\n            <ion-col ion-item size=\"6\">\n                <ion-select placeholder=\"Country\" class=\"selectcss\" (ionChange)=\"ChangeCountry($event)\" value=\"{{countryid}}\">\n                    <ion-select-option value=\"{{c.CountryId}}\" *ngFor=\"let c of country\">{{c.CountryName}}</ion-select-option>\n                </ion-select>\n            </ion-col>\n        </ion-row>\n        <ion-row class=\"rawcss\">\n            <ion-col ion-item size=\"6\" class=\"colcss\">\n                <ion-label class=\"labelcss\">State</ion-label>\n            </ion-col>\n            <ion-col ion-item size=\"6\">\n                <ion-select placeholder=\"State\" class=\"selectcss\" (ionChange)=\"ChangeState($event)\" value=\"{{stateid}}\">\n                    <ion-select-option value=\"{{s.StateId}}\" *ngFor=\"let s of state\">{{s.StateName}}</ion-select-option>\n                </ion-select>\n            </ion-col>\n        </ion-row>\n        <ion-row class=\"rawcss\">\n            <ion-col ion-item size=\"6\" class=\"colcss\">\n                <ion-label class=\"labelcss\">City</ion-label>\n            </ion-col>\n            <ion-col ion-item size=\"6\">\n                <ion-select placeholder=\"City\" class=\"selectcss\" (ionChange)=\"ChangeCity($event)\" value=\"{{cityid}}\">\n                    <ion-select-option value=\"{{cities.CityId}}\" *ngFor=\"let cities of city\">{{cities.CityName}}</ion-select-option>\n                </ion-select>\n            </ion-col>\n        </ion-row>\n        <ion-row class=\"rawcss\">\n            <ion-col ion-item size=\"6\" class=\"colcss\">\n                <ion-label class=\"labelcss\">Zipcode</ion-label>\n            </ion-col>\n            <ion-col ion-item size=\"6\">\n                <ion-input type='text' placeholder='Zipcode' [(ngModel)]='zipcode' class=\"inputcss\"></ion-input>\n            </ion-col>\n        </ion-row>\n        <ion-row class=\"rawcss\">\n            <ion-col ion-item size=\"6\" class=\"colcss\">\n                <ion-label class=\"labelcss\">Mobile No. </ion-label>\n            </ion-col>\n            <ion-col ion-item size=\"6\">\n                <ion-input type='text' placeholder='Mobile No.' [(ngModel)]='mobile' class=\"inputcss\"></ion-input>\n            </ion-col>\n        </ion-row>\n        <ion-row class=\"rawcss\">\n            <ion-col ion-item size=\"6\" class=\"colcss\">\n                <ion-label class=\"labelcss\">Work Phone</ion-label>\n            </ion-col>\n            <ion-col ion-item size=\"6\">\n                <ion-input type='text' placeholder='Work Phone' [(ngModel)]='workphone' class=\"inputcss\"></ion-input>\n            </ion-col>\n        </ion-row>\n        <ion-row class=\"rawcss\">\n            <ion-col ion-item size=\"6\" class=\"colcss\">\n                <ion-label class=\"labelcss\">Home Phone</ion-label>\n            </ion-col>\n            <ion-col ion-item size=\"6\">\n                <ion-input type='text' placeholder='Home Phone' [(ngModel)]='homephone' class=\"inputcss\"></ion-input>\n            </ion-col>\n        </ion-row>\n        <ion-row class=\"rawcss\">\n            <ion-col ion-item size=\"6\" class=\"colcss\">\n                <ion-label class=\"labelcss\">Email</ion-label>\n            </ion-col>\n            <ion-col ion-item size=\"6\">\n                <ion-input type='text' placeholder='Email' [(ngModel)]='email' class=\"inputcss\"></ion-input>\n            </ion-col>\n        </ion-row>\n\n    </div>\n\n    <div *ngIf=\"step == 2\" class=\"scroll\">\n        <ion-row class=\"rawcss\">\n            <ion-col ion-item size=\"6\" class=\"colcss\">\n                <ion-label class=\"labelcss\">VIN</ion-label>\n            </ion-col>\n            <ion-col ion-item size=\"6\">\n                <ion-input type='text' placeholder='VIN' [(ngModel)]='vin' class=\"inputcss\" [readonly]=\"true\"></ion-input>\n            </ion-col>\n        </ion-row>\n\n        <ion-row class=\"rawcss\">\n            <ion-col ion-item size=\"6\" class=\"colcss\">\n                <ion-label class=\"labelcss\">Year</ion-label>\n            </ion-col>\n            <ion-col ion-item size=\"6\">\n                <ion-select placeholder=\"Year\" class=\"selectcss\" value=\"{{yearid}}\" (ionChange)=\"ChangeYear($event)\">\n                    <ion-select-option value=\"{{y.YearId}}\" *ngFor=\"let y of years\">{{y.Year}}</ion-select-option>\n                </ion-select>\n            </ion-col>\n        </ion-row>\n\n        <ion-row class=\"rawcss\">\n            <ion-col ion-item size=\"6\" class=\"colcss\">\n                <ion-label class=\"labelcss\">Make</ion-label>\n            </ion-col>\n            <ion-col ion-item size=\"6\">\n                <ion-select placeholder=\"Make\" class=\"selectcss\" value=\"{{makeid}}\" (ionChange)=\"ChangeMake($event)\">\n                    <ion-select-option value=\"{{m.MakeId}}\" *ngFor=\"let m of make\">{{m.Make}}</ion-select-option>\n                </ion-select>\n            </ion-col>\n        </ion-row>\n\n        <ion-row class=\"rawcss\">\n            <ion-col ion-item size=\"6\" class=\"colcss\">\n                <ion-label class=\"labelcss\">Model </ion-label>\n            </ion-col>\n            <ion-col ion-item size=\"6\" *ngIf=\"model\">\n                <ion-select placeholder=\"Model\" class=\"selectcss\" (ionChange)=\"ChangeModel($event)\" value=\"{{modelid}}\">\n                    <ion-select-option value=\"{{modeldetail.ModelId}}\" *ngFor=\"let modeldetail of model\">{{modeldetail.Modal}}</ion-select-option>\n                </ion-select>\n            </ion-col>\n        </ion-row>\n\n        <ion-row class=\"rawcss\">\n            <ion-col ion-item size=\"6\" class=\"colcss\">\n                <ion-label class=\"labelcss\">Trim </ion-label>\n            </ion-col>\n            <ion-col ion-item size=\"6\">\n                <ion-select placeholder=\"Trim\" class=\"selectcss\" (ionChange)=\"ChangeTrim($event)\" value=\"{{trimid}}\">\n                    <ion-select-option value=\"{{trimdetail.TrimId}}\" *ngFor=\"let trimdetail of trim\">{{trimdetail.Trim}}</ion-select-option>\n                </ion-select>\n            </ion-col>\n        </ion-row>\n\n        <ion-row class=\"rawcss\">\n            <ion-col ion-item size=\"6\" class=\"colcss\">\n                <ion-label class=\"labelcss\">Color</ion-label>\n            </ion-col>\n            <ion-col ion-item size=\"6\">\n                <ion-select placeholder=\"Color\" class=\"selectcss\" (ionChange)=\"ChangeColor($event)\" value=\"{{colorid}}\">\n                    <ion-select-option value=\"{{color.ColorId}}\" *ngFor=\"let color of colors\">{{color.ColorName}}</ion-select-option>\n                </ion-select>\n            </ion-col>\n        </ion-row>\n\n        <ion-row class=\"rawcss\">\n            <ion-col ion-item size=\"6\" class=\"colcss\">\n                <ion-label class=\"labelcss\">Mileage</ion-label>\n            </ion-col>\n            <ion-col ion-item size=\"6\">\n                <ion-input type='text' placeholder='Mileage' [(ngModel)]='mileage' class=\"inputcss\"></ion-input>\n            </ion-col>\n        </ion-row>\n\n        <ion-row class=\"rawcss\">\n            <ion-col ion-item size=\"6\" class=\"colcss\">\n                <ion-label class=\"labelcss\">Average Miles/Month</ion-label>\n            </ion-col>\n            <ion-col ion-item size=\"6\">\n                <ion-input type='text' placeholder='Average Miles/Month' [(ngModel)]='avgmileage' class=\"inputcss\"></ion-input>\n            </ion-col>\n        </ion-row>\n\n        <ion-row class=\"rawcss\">\n            <ion-col ion-item size=\"6\" class=\"colcss\">\n                <ion-label class=\"labelcss\">License Plate</ion-label>\n            </ion-col>\n            <ion-col ion-item size=\"6\">\n                <ion-input type='text' placeholder='License Plate' [(ngModel)]='licenseplate' class=\"inputcss\"></ion-input>\n            </ion-col>\n        </ion-row>\n\n    \n    </div>\n\n    <div *ngIf=\"step == 3\" class=\"scroll\">\n        <ion-searchbar (ionChange)=\"SearchOp()\" [(ngModel)]='searchword'></ion-searchbar> \n        <ion-list style=\"margin-left: 5px;margin-right: 5px;\" *ngFor=\"let op of codelist;\">\n            <ion-row class=\"rawcss\" style=\"margin-left: 5px;margin-right: 5px;\">\n                <ion-col>\n                    <ion-item>\n                        <ion-label style=\"margin-left: 30px;white-space: inherit;\">\n                            <h3>\n                                <b>OpCode:</b> {{op.OpCode}}</h3>\n                            <h4>\n                                <b>Description:</b>{{op.Description}}</h4>\n                            <p> Duration: {{op.Hours}}</p>\n                            <p> Price: ${{op.Sale}}</p>\n                        </ion-label>\n                        <ion-checkbox style=\"margin: -16px;\" slot=\"start\" (ionChange)=\"SelectOP($event,op)\"  [(ngModel)]=\"op.isChecked\"  ></ion-checkbox>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n        </ion-list>\n        <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\" >\n            <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\"></ion-infinite-scroll-content>\n          </ion-infinite-scroll>\n    </div>\n\n    <div *ngIf=\"step == 4\" class=\"scroll\">\n        <ion-list>\n            <ion-radio-group>\n                <ion-item *ngFor=\"let trasnaport of transportdata;let i = index;\" (ionSelect)=\"Selection(trasnaport.TransportationName,$event);\">\n                    <!-- checked=\"{{trasnaport.TransportationName}}\" -->\n                    <ion-label>{{trasnaport.TransportationName}}</ion-label>\n                    <ion-radio slot=\"start\" color=\"primary\" value={{trasnaport.TransportationName}} [checked]=\"trasnaport.checked\"></ion-radio>\n                    <!-- <ion-checkbox color=\"primary\" checked={{trasnaport.TransportationName}}  slot=\"start\"  (ionChange)=\"Selection(trasnaport.TransportationName);\"></ion-checkbox> -->\n                </ion-item>\n               <br>\n                    <ion-select  *ngIf=\"tvalue == 'Drop Off'\" [(ngModel)]=\"weekday\" placeholder=\"Select Week Day\" class=\"selectcss\" (ionChange)=\"ChangeWeekDay($event)\" style=\"margin-left: 0px;\">\n                        <ion-select-option [value]=\"weekday\" *ngFor=\"let weekday of weekdata\">{{weekday.DayName}}</ion-select-option>\n                    </ion-select>\n\n                    <div *ngIf=\"dayname != undefined\" style=\"    margin-left: 15px;\">\n                    <p><b>Total Drop Off Limit : {{totaldropoff}}</b></p>\n                    <p><b>Used Drop Off Limit : {{useddropoff}}</b></p>\n                    <p><b>Total Hrs  : {{totalhrs}}</b></p>\n                    <p><b>Total Used Hrs : {{totalusedhrs}}</b></p>\n                    </div>\n            </ion-radio-group>\n        </ion-list>        \n    </div>\n\n    <div *ngIf=\"step == 5\" class=\"scroll\">\n        <ion-list>\n            <ion-radio-group>\n                <ion-item *ngFor=\"let advisor of advisordata;let i = index;\">\n                    <ion-label>{{advisor.AdvisorName}}</ion-label>\n                    <ion-radio slot=\"start\" color=\"primary\" value={{advisor.AdvisorId}} (ionSelect)=\"AdvisorSelection(advisor.AdvisorId,$event);\" [checked]=\"advisor.checked\"></ion-radio>\n                    <!-- <ion-checkbox color=\"primary\" checked slot=\"start\"></ion-checkbox> -->\n                </ion-item>\n            </ion-radio-group>\n        </ion-list>\n    </div>\n\n    <div *ngIf=\"step == 6\" class=\"scroll\">\n        <ion-row class=\"rawcss\">\n            <ion-col size=\"6\" style=\"margin-top: 10px;\">\n                <ion-label>Select Date</ion-label>\n            </ion-col>\n\n            <ion-col size=\"6\">\n                <ion-datetime max=\"2025-12-31\" placeholder='Start Date' [(ngModel)]=\"sdate\" displayFormat=\"MM/DD/YYYY\" pickerFormat=\"MMMM DD YYYY\"\n                    (ionChange)=\"ChangeDate($event)\"></ion-datetime>\n            </ion-col>\n        </ion-row>\n\n        <ion-row class=\"rawcss\" *ngIf=\"sdate != null && intervaldata != null\">\n            <ion-col ion-item size=\"6\" style=\"margin-top: 10px;\">\n                <ion-label class=\"labelcss\">Time Slots</ion-label>\n            </ion-col>\n            <ion-col ion-item size=\"6\">\n                <ion-select [(ngModel)]=\"interval\" placeholder=\"Select Time Slots\" class=\"selectcss\" (ionChange)=\"ChangeTime($event)\" style=\"margin-left: 0px;\">\n                    <ion-select-option [value]=\"interval\" *ngFor=\"let interval of intervaldata\">{{interval.TimeInerrvals}}</ion-select-option>\n                </ion-select>\n            </ion-col>\n        </ion-row>\n    </div>\n\n    <div *ngIf=\"step == 7\" class=\"scroll\">\n        <!-- <ion-item>\n           <img src=\"../assets/imgs/images.png\">\n        </ion-item>  -->\n        <!-- <div class=\"container\">\n                <a id=\"btnleftfront\" class=\"btncircleselected\" href=\"#\" style=\"margin-top: 117px;margin-left: 27px;\"><i id=\"imgbtnleftfront\" class=\"glyphicon glyphicon-icons glyphicon-ok d-none\" name=\"btnimagecircle\"></i></a>\n            <! <div class=\"tag\">Featured</div> -->\n            <!-- <img src=\"../assets/imgs/images.png\">\n     </div>      -->\n     <ion-row>\n            <ion-col size=\"2\">\n                    <div>\n                            <label>{{lfront}}</label>\n                            <br>\n                            <label>\n                                W\n                            </label>\n                            <label>\n                                :\n                            </label>\n                            <ion-input [(ngModel)]=\"lfw\" [readonly]=\"true\" style=\"    --padding-start: 0px;\n                            font-size: 11px;\"></ion-input>\n                     \n                            <label>\n                                T\n                            </label>\n                            <label>\n                                :\n                            </label>\n                            <ion-input [(ngModel)]=\"lft\" [readonly]=\"true\" style=\"    --padding-start: 0px;\n                            font-size: 11px;\"></ion-input>\n                        </div>\n                        <br>\n                        <div>\n                            <label>{{lrear}}</label>\n                            <br>\n                            <label>\n                                W :\n                            </label>\n                            <ion-input [(ngModel)]=\"lrw\" [readonly]=\"true\" style=\"    --padding-start: 0px;\n                            font-size: 11px;\"></ion-input>\n                          \n                            <label>\n                                T :\n                            </label>\n                            <ion-input [(ngModel)]=\"lrt\" [readonly]=\"true\" style=\"    --padding-start: 0px;\n                            font-size: 11px;\">\n                            </ion-input>\n                        </div>\n                </ion-col>\n<ion-col size=\"8\">\n    <!-- style=\"width: 365px;margin-left: -75px;\" -->\n        <div class=\"col-md-4\" >\n                <a  [ngClass]=\"{btncircleselected : ((lfw == undefined && lft == undefined) || (lfw != undefined && lft == undefined) || (lfw == undefined && lft != undefined)),\n                     btncircle:(lfw != undefined && lft != undefined)}\"\n                style=\"margin-top: 32px;margin-left: 38px;\">\n                    <i *ngIf=\"lfw != undefined && lft != undefined\" class=\"glyphicon glyphicon-icons glyphicon-ok\" name=\"btnimagecircle\"></i>\n                </a>\n                <a [ngClass]=\"{btncircleselected : ((lrw == undefined && lrt == undefined) || (lfw != undefined && lft != undefined)),\n                    btncircle:(lrw != undefined && lrt != undefined)  || (lrw == undefined && lrt != undefined)}\" style=\"margin-top: 148px;margin-left: 38px;\">\n                    <i  *ngIf=\"(lrw != undefined && lrt != undefined && lfw != undefined && lft != undefined) \" class=\"glyphicon glyphicon-icons glyphicon-ok d-none\" name=\"btnimagecircle\"></i>\n                </a>\n                <a [ngClass]=\"{btncircleselected : ((rfw == undefined && rft == undefined) || (lrw != undefined && lrt != undefined)),\n                    btncircle:(rfw != undefined && rft != undefined)  || (rfw == undefined && rft != undefined)}\" style=\"margin-top: 33px;margin-left: 144px;\">\n                    <i  *ngIf=\"rfw != undefined && rft != undefined && lfw != undefined && lft != undefined && lrw != undefined && lrt != undefined\" class=\"glyphicon glyphicon-icons glyphicon-ok d-none\" name=\"btnimagecircle\"></i>\n                </a>\n                <a [ngClass]=\"{btncircleselected : ((rrw == undefined && rrt == undefined) || (rfw != undefined && rft != undefined) ),\n                    btncircle:(rrw != undefined && rrt != undefined) || (rrw == undefined && rrt != undefined)}\" style=\"margin-top: 148px;margin-left: 144px;\">\n                    <i  *ngIf=\"rrw != undefined && rrt != undefined && lrw != undefined && lrt != undefined && rfw != undefined && rft != undefined && lfw != undefined && lft != undefined\" class=\"glyphicon glyphicon-icons glyphicon-ok d-none\" name=\"btnimagecircle\"></i>\n                </a>\n                <img id=\"ContentPlaceHolder1_Image2\" style=\"margin: auto;display: block;\" src=\"../assets/imgs/sidecar.png\">\n         </div>\n</ion-col>\n<ion-col size=\"2\">\n        <div>\n            <label>{{rfront}}</label>\n            <br>\n            <label>\n                W :\n            </label>\n            <ion-input [(ngModel)]=\"rfw\" [readonly]=\"true\" style=\"    --padding-start: 0px;\n            font-size: 11px;\">\n            </ion-input>\n          \n            <label>\n                T :\n            </label>\n            <ion-input [(ngModel)]=\"rft\" [readonly]=\"true\" style=\"    --padding-start: 0px;\n            font-size: 11px;\">\n            </ion-input>\n        </div>\n        <br>\n        <div>\n            <label>{{rrear}}</label>\n            <br>\n            <label>\n                W :\n            </label>\n            <ion-input [(ngModel)]=\"rrw\" [readonly]=\"true\" style=\"    --padding-start: 0px;\n            font-size: 11px;\">\n            </ion-input>\n           \n            <label>\n                T :\n            </label>\n            <ion-input [(ngModel)]=\"rrt\" [readonly]=\"true\" style=\"    --padding-start: 0px;\n            font-size: 11px;\">\n            </ion-input>\n        </div>\n    </ion-col>\n</ion-row>     \n<label>WHEEL</label>\n<ion-select [(ngModel)]=\"wheel\" style=\"border: 1px solid #000;margin-right: 12px;margin-left: 1px;border-radius: 5px;\" placeholder=\"Select Wheel\" class=\"selectcss\" (ionChange)=\"ChangeWheel($event)\">\n    <ion-select-option [value]=\"wheel\" *ngFor=\"let wheel of WheelsTypeList\">{{wheel.WheelType}}</ion-select-option>\n</ion-select>\n<br>\n<label>TIRE TREAD DEPTH (MM)</label>\n<ion-select [(ngModel)]=\"tire\" placeholder=\"Select Tire Tread Depth\" class=\"selectcss\" (ionChange)=\"ChangeTire($event)\" style=\"border: 1px solid #000;margin-right: 12px;margin-left: 1px;border-radius: 5px;\">\n        <ion-select-option [value]=\"tire\" *ngFor=\"let tire of wheelsDepthList\">{{tire.WheelDepth}}</ion-select-option>     \n</ion-select>\n    </div>\n\n    <div *ngIf=\"step == 8\" class=\"scroll\">\n     <ion-label style=\"font-size: 17px;margin-left: 6px;\"><b>FRONT</b></ion-label>\n        <ion-row class=\"rawcss\">            \n            <ion-col size=\"6\" style=\"margin-top: 10px;\">\n                <ion-label>FOG LIGHTS</ion-label>\n            </ion-col>\n\n            <ion-col size=\"6\">\n                <ion-select [(ngModel)]=\"fogspeed\" placeholder=\"Select Speed Type\" class=\"selectcss\" (ionChange)=\"ChangeSpeed($event,'Front','FogLights')\" style=\"margin-left: 0px;\">\n                    <ion-select-option value=\"Average\">Average</ion-select-option>\n                    <ion-select-option value=\"Good\">Good</ion-select-option>\n                    <ion-select-option value=\"N/A\">N/A</ion-select-option>\n                    <ion-select-option value=\"Replace\">Replace</ion-select-option>\n                </ion-select>\n            </ion-col>\n        </ion-row>  \n\n        <ion-row class=\"rawcss\">            \n                <ion-col size=\"6\" style=\"margin-top: 10px;\">\n                    <ion-label>DAYTIME LIGHTS</ion-label>\n                </ion-col>\n    \n                <ion-col size=\"6\">\n                    <ion-select [(ngModel)]=\"dayspeed\" placeholder=\"Select Speed Type\" class=\"selectcss\" (ionChange)=\"ChangeSpeed($event,'Front','DayTimeLights')\" style=\"margin-left: 0px;\">\n                        <ion-select-option value=\"Average\">Average</ion-select-option>\n                        <ion-select-option value=\"Good\">Good</ion-select-option>\n                        <ion-select-option value=\"N/A\">N/A</ion-select-option>\n                        <ion-select-option value=\"Replace\">Replace</ion-select-option>\n                    </ion-select>\n                </ion-col>\n        </ion-row>  \n\n        <ion-row class=\"rawcss\">            \n                <ion-col size=\"6\" style=\"margin-top: 10px;\">\n                    <ion-label>HIGH BEAM LIGHTS</ion-label>\n                </ion-col>\n    \n                <ion-col size=\"6\">\n                    <ion-select [(ngModel)]=\"highspeed\" placeholder=\"Select Speed Type\" class=\"selectcss\" (ionChange)=\"ChangeSpeed($event,'Front','HighBeamLights')\" style=\"margin-left: 0px;\">\n                        <ion-select-option value=\"Average\">Average</ion-select-option>\n                        <ion-select-option value=\"Good\">Good</ion-select-option>\n                        <ion-select-option value=\"N/A\">N/A</ion-select-option>\n                        <ion-select-option value=\"Replace\">Replace</ion-select-option>\n                    </ion-select>\n                </ion-col>\n        </ion-row>  \n        <ion-row class=\"rawcss\">            \n                <ion-col size=\"6\" style=\"margin-top: 10px;\">\n                    <ion-label>WIPERS</ion-label>\n                </ion-col>\n    \n                <ion-col size=\"6\">\n                    <ion-select [(ngModel)]=\"wiperspeed\" placeholder=\"Select Speed Type\" class=\"selectcss\" (ionChange)=\"ChangeSpeed($event,'Front','Wipers')\" style=\"margin-left: 0px;\">\n                        <ion-select-option value=\"Average\">Average</ion-select-option>\n                        <ion-select-option value=\"Good\">Good</ion-select-option>\n                        <ion-select-option value=\"N/A\">N/A</ion-select-option>\n                        <ion-select-option value=\"Replace\">Replace</ion-select-option>\n                    </ion-select>\n                </ion-col>\n        </ion-row>  \n    \n        <br>\n\n        <ion-label style=\"font-size: 17px;margin-left: 6px;\"><b>REAR</b></ion-label>\n        <ion-row class=\"rawcss\">            \n            <ion-col size=\"6\" style=\"margin-top: 10px;\">\n                <ion-label>REAR WIPERS</ion-label>\n            </ion-col>\n\n            <ion-col size=\"6\">\n                <ion-select [(ngModel)]=\"rearwiper\" placeholder=\"Select Speed Type\" class=\"selectcss\" (ionChange)=\"ChangeSpeed($event,'Rear','RearWipers')\" style=\"margin-left: 0px;\">\n                    <ion-select-option value=\"Average\">Average</ion-select-option>\n                    <ion-select-option value=\"Good\">Good</ion-select-option>\n                    <ion-select-option value=\"N/A\">N/A</ion-select-option>\n                    <ion-select-option value=\"Replace\">Replace</ion-select-option>\n                </ion-select>\n            </ion-col>\n        </ion-row>  \n\n        <ion-row class=\"rawcss\">            \n                <ion-col size=\"6\" style=\"margin-top: 10px;\">\n                    <ion-label>REAR LIGHTS</ion-label>\n                </ion-col>\n    \n                <ion-col size=\"6\">\n                    <ion-select [(ngModel)]=\"rearlights\" placeholder=\"Select Speed Type\" class=\"selectcss\" (ionChange)=\"ChangeSpeed($event,'Rear','RearLights')\" style=\"margin-left: 0px;\">\n                        <ion-select-option value=\"Average\">Average</ion-select-option>\n                        <ion-select-option value=\"Good\">Good</ion-select-option>\n                        <ion-select-option value=\"N/A\">N/A</ion-select-option>\n                        <ion-select-option value=\"Replace\">Replace</ion-select-option>\n                    </ion-select>\n                </ion-col>\n        </ion-row>  \n\n        <ion-row class=\"rawcss\">            \n                <ion-col size=\"6\" style=\"margin-top: 10px;\">\n                    <ion-label>BRAKE LIGHTS</ion-label>\n                </ion-col>\n    \n                <ion-col size=\"6\">\n                    <ion-select [(ngModel)]=\"brakelight\" placeholder=\"Select Speed Type\" class=\"selectcss\" (ionChange)=\"ChangeSpeed($event,'Rear','BrakeLights')\" style=\"margin-left: 0px;\">\n                        <ion-select-option value=\"Average\">Average</ion-select-option>\n                        <ion-select-option value=\"Good\">Good</ion-select-option>\n                        <ion-select-option value=\"N/A\">N/A</ion-select-option>\n                        <ion-select-option value=\"Replace\">Replace</ion-select-option>\n                    </ion-select>\n                </ion-col>\n        </ion-row>  \n       \n    </div>\n\n    <div *ngIf=\"step == 9\" class=\"scroll\">\n        <!-- <ion-item>\n            <ion-textarea placeholder=\"Enter Subject/Notes here...\" [(ngModel)]=\"notes\"></ion-textarea>\n        </ion-item>      -->\n\n        <form [formGroup]=\"myForm\">\n            <ion-item *ngFor=\"let control of myForm.controls | keyvalue;let i = index;\">\n                <ion-textarea required placeholder=\"Enter Subject/Notes here...\" [formControlName]=\"control.key\"></ion-textarea>\n              <!-- <ion-input required type=\"text\"  placeHolder=\"player name...\"></ion-input> -->\n              <ion-icon (click)=\"removeControl(control)\" name=\"close-circle\" *ngIf=\"i != 0\"></ion-icon>\n              <ion-icon (click)=\"addControl(control)\" name=\"md-add-circle\"></ion-icon>\n            </ion-item>\n            <!-- <ion-button size=\"small\" style=\"float: right;\" class=\"footerbtn\" (click)=\"addControl(control)\">Add More</ion-button>  -->\n          </form>\n       \n    </div>\n\n    <!-- <div *ngIf=\"step == 8\" class=\"scroll\">\n            <app-notes></app-notes>\n      </div> -->\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>    \n    <ion-row style=\"margin-top: 8%;margin-right: 10px;\" class=\"btn\" *ngIf=\"step == 9\" >\n        <ion-col>\n            <ion-button expand=\"full\" class=\"footerbtn\" (click)=\"BookAppointment()\">Book Appoinment</ion-button>\n        </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top: 8%;margin-right: 10px;\" class=\"btn\" *ngIf=\"step == 6\">\n        <ion-col>\n            <ion-button expand=\"full\" class=\"footerbtn\" (click)=\"DateNext()\">Next</ion-button>\n        </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top: 8%;margin-right: 10px;\" class=\"btn\" *ngIf=\"step == 5\">\n        <ion-col>\n            <ion-button expand=\"full\" class=\"footerbtn\" (click)=\"AdvisorNext()\">Next</ion-button>\n        </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top: 8%;margin-right: 10px;\" class=\"btn\" *ngIf=\"step == 4\">\n        <ion-col>\n            <ion-button expand=\"full\" class=\"footerbtn\" (click)=\"TransNext()\">Next</ion-button>\n        </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top: 8%;margin-right: 10px;margin-left: -16px;bottom: -5px;\" class=\"btn\" *ngIf=\"step == 3\">\n        <ion-col size=\"5\">\n            <ion-button class=\"footerbtn\" (click)=\"AddNewOPCode()\" style=\"width: 50%;\">Add New OPCode</ion-button>\n        </ion-col>\n        <ion-col size=\"5\">\n            <ion-button class=\"footerbtn\" (click)=\"Next()\" style=\"width: 50%;\">Next</ion-button>\n        </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top: 8%;margin-right: 10px;\" class=\"btn\" *ngIf=\"step == 2\">\n        <ion-col>\n            <ion-button expand=\"full\" class=\"footerbtn\" (click)=\"UpdateVehicleInfo()\">Update</ion-button>\n        </ion-col>\n    </ion-row>\n\n     \n    <ion-row style=\"margin-top: 8%;margin-right: 10px;\" class=\"btn\" *ngIf=\"step == 1\">\n        <ion-col>\n            <ion-button expand=\"full\" class=\"footerbtn\" (click)=\"UpdateCustomerInfo()\">Update</ion-button>\n        </ion-col>\n    </ion-row>\n    \n</ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/createappointment/createappointment.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/createappointment/createappointment.module.ts ***!
  \***************************************************************/
/*! exports provided: CreateappointmentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateappointmentPageModule", function() { return CreateappointmentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _createappointment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createappointment.page */ "./src/app/createappointment/createappointment.page.ts");
/* harmony import */ var _component_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/components.module */ "./src/app/component/components.module.ts");








// import { CustomeinfoComponent } from '../component/customeinfo/customeinfo.component';
// import { VehicleinfoComponent } from '../component/vehicleinfo/vehicleinfo.component';
// import { MaintenanceComponent } from '../component/maintenance/maintenance.component';
// import { TransportationComponent } from '../component/transportation/transportation.component';
// import { AdvisorsComponent } from '../component/advisors/advisors.component';
// import { DatetimeComponent } from '../component/datetime/datetime.component';
// import { NotesComponent } from '../component/notes/notes.component';
const routes = [
    {
        path: '',
        component: _createappointment_page__WEBPACK_IMPORTED_MODULE_6__["CreateappointmentPage"]
    }
];
let CreateappointmentPageModule = class CreateappointmentPageModule {
};
CreateappointmentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _component_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ],
        declarations: [_createappointment_page__WEBPACK_IMPORTED_MODULE_6__["CreateappointmentPage"]],
    })
], CreateappointmentPageModule);



/***/ }),

/***/ "./src/app/createappointment/createappointment.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/createappointment/createappointment.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fixed {\n  width: 100%;\n  background: #fff;\n}\n\n.header-ios ion-toolbar:last-child {\n  --border-width: 0 0 0.55px;\n  --background: #374767;\n}\n\n.header-md ion-toolbar:last-child {\n  --border-width: 0 0 0.55px;\n  --background: #374767;\n}\n\n.steps {\n  margin: 0 auto;\n}\n\n.step {\n  color: white;\n  margin: 1px;\n  border: 1px solid #000;\n  display: inline;\n  padding: 3px 7px;\n}\n\n.scroll {\n  width: 100%;\n  height: 100vh;\n  margin-top: 5%;\n  margin: 5px;\n  margin-bottom: 30%;\n}\n\n.thumnails {\n  z-index: 10;\n  background: #fff;\n  overflow-x: scroll;\n  overflow-y: hidden;\n}\n\n.thumnails .list-thumbnail {\n  height: 100%;\n  white-space: nowrap;\n}\n\n.thumnails .list-thumbnail .img-thumb {\n  display: inline-block;\n  line-height: 53px;\n  padding: 3px;\n}\n\n::-webkit-scrollbar {\n  display: none;\n}\n\n.footerbtn {\n  --background: #009688;\n}\n\n.btnstyle {\n  height: 40px;\n}\n\n.rawcss {\n  border-bottom: 1px solid #d4d4d4;\n}\n\n.labelcss {\n  padding-top: 14px;\n  font-size: 15px;\n}\n\n.inputcss {\n  font-size: 15px;\n}\n\n.colcss {\n  padding: 14px;\n}\n\n.selectcss {\n  font-size: 15px;\n  margin-left: -6px;\n}\n\n.btn {\n  position: fixed;\n  left: 0;\n  bottom: -23px;\n  right: 0;\n  z-index: 100;\n}\n\n.forecast_container {\n  overflow-x: scroll !important;\n  overflow-y: hidden;\n  word-wrap: break-word;\n}\n\n.fixed {\n  width: 100%;\n  background: #fff;\n}\n\n.btncircleselected {\n  display: block;\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  border: 5px solid red;\n  position: absolute;\n}\n\n.btncircle {\n  display: block;\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  border: 5px solid #333;\n  position: absolute;\n}\n\n.container {\n  border: 1px solid #DDDDDD;\n  width: 200px;\n  height: 200px;\n  position: relative;\n}\n\n.tag {\n  float: left;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  z-index: 1000;\n  background-color: #92AD40;\n  padding: 5px;\n  color: #FFFFFF;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ibHVlYm94L0Rlc2t0b3AvYXBwb2ludG1lbnQxL3NyYy9hcHAvY3JlYXRlYXBwb2ludG1lbnQvY3JlYXRlYXBwb2ludG1lbnQucGFnZS5zY3NzIiwic3JjL2FwcC9jcmVhdGVhcHBvaW50bWVudC9jcmVhdGVhcHBvaW50bWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBR0EsZ0JBQUE7QUNESjs7QURJQTtFQUNJLDBCQUFBO0VBQ0EscUJBQUE7QUNESjs7QURJRTtFQUNFLDBCQUFBO0VBQ0EscUJBQUE7QUNESjs7QURHQTtFQUVJLGNBQUE7QUNESjs7QURHQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0VKOztBRERJO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDR047O0FERk07RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0lSOztBREFFO0VBQ0UsYUFBQTtBQ0dKOztBRERFO0VBQ0UscUJBQUE7QUNJSjs7QURGQTtFQUNJLFlBQUE7QUNLSjs7QURIQTtFQUNJLGdDQUFBO0FDTUo7O0FESkE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUNPSjs7QURMQTtFQUNJLGVBQUE7QUNRSjs7QUROQTtFQUNJLGFBQUE7QUNTSjs7QURQQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ1VKOztBRFJBO0VBQ0ksZUFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUNXSjs7QURUQTtFQUNJLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ1lKOztBRFRBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDWUo7O0FEVkE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNhSjs7QURYQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ2NKOztBRFhBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDY0o7O0FEWkM7RUFDRyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNlSiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZWFwcG9pbnRtZW50L2NyZWF0ZWFwcG9pbnRtZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maXhlZCB7XHJcbiAgICB3aWR0aDogMTAwJTsgLy8gb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC8vIG1hcmdpbjogMCA0cHggNHB4IDRweDtcclxuICAgIC8vIGhlaWdodDogMTAlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1jaGlsZCB7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMCAwIDAuNTVweDtcclxuICAgIC0tYmFja2dyb3VuZDogIzM3NDc2NztcclxuICB9XHJcbiAgXHJcbiAgLmhlYWRlci1tZCBpb24tdG9vbGJhcjpsYXN0LWNoaWxkIHtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAwIDAgMC41NXB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMzc0NzY3O1xyXG4gIH1cclxuLnN0ZXBzIHtcclxuICAgIC8vIHdpZHRoOiAxMjBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5zdGVwIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogMXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIHBhZGRpbmc6IDNweCA3cHg7XHJcbn1cclxuLnNjcm9sbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzAlO1xyXG59XHJcbi50aHVtbmFpbHN7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICAubGlzdC10aHVtYm5haWx7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgLmltZy10aHVtYntcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICAgICAgIFxyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1M3B4O1xyXG4gICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHsgXHJcbiAgICBkaXNwbGF5OiBub25lOyBcclxuICB9XHJcbiAgLmZvb3RlcmJ0bntcclxuICAgIC0tYmFja2dyb3VuZDogIzAwOTY4ODtcclxufVxyXG4uYnRuc3R5bGV7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuLnJhd2Nzc3tcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDRkNGQ0O1xyXG59XHJcbi5sYWJlbGNzc3tcclxuICAgIHBhZGRpbmctdG9wOiAxNHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi5pbnB1dGNzc3tcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4uY29sY3Nze1xyXG4gICAgcGFkZGluZzogMTRweDtcclxufVxyXG4uc2VsZWN0Y3Nze1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC02cHg7XHJcbn1cclxuLmJ0biB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAtMjNweDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG59XHJcbi5mb3JlY2FzdF9jb250YWluZXJ7XHJcbiAgICBvdmVyZmxvdy14OiBzY3JvbGwhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIFxyXG59XHJcbi5maXhlZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuLmJ0bmNpcmNsZXNlbGVjdGVkIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDVweCBzb2xpZCByZWQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLmJ0bmNpcmNsZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgIzMzMztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjREREREREO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuIH1cclxuIC50YWcge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTJBRDQwO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuIH0iLCIuZml4ZWQge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1jaGlsZCB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMC41NXB4O1xuICAtLWJhY2tncm91bmQ6ICMzNzQ3Njc7XG59XG5cbi5oZWFkZXItbWQgaW9uLXRvb2xiYXI6bGFzdC1jaGlsZCB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMC41NXB4O1xuICAtLWJhY2tncm91bmQ6ICMzNzQ3Njc7XG59XG5cbi5zdGVwcyB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uc3RlcCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAxcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgcGFkZGluZzogM3B4IDdweDtcbn1cblxuLnNjcm9sbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgbWFyZ2luOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDMwJTtcbn1cblxuLnRodW1uYWlscyB7XG4gIHotaW5kZXg6IDEwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cbi50aHVtbmFpbHMgLmxpc3QtdGh1bWJuYWlsIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLnRodW1uYWlscyAubGlzdC10aHVtYm5haWwgLmltZy10aHVtYiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGluZS1oZWlnaHQ6IDUzcHg7XG4gIHBhZGRpbmc6IDNweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5mb290ZXJidG4ge1xuICAtLWJhY2tncm91bmQ6ICMwMDk2ODg7XG59XG5cbi5idG5zdHlsZSB7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLnJhd2NzcyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDRkNGQ0O1xufVxuXG4ubGFiZWxjc3Mge1xuICBwYWRkaW5nLXRvcDogMTRweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uaW5wdXRjc3Mge1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5jb2xjc3Mge1xuICBwYWRkaW5nOiAxNHB4O1xufVxuXG4uc2VsZWN0Y3NzIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogLTZweDtcbn1cblxuLmJ0biB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAtMjNweDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuLmZvcmVjYXN0X2NvbnRhaW5lciB7XG4gIG92ZXJmbG93LXg6IHNjcm9sbCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cblxuLmZpeGVkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5idG5jaXJjbGVzZWxlY3RlZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogNXB4IHNvbGlkIHJlZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uYnRuY2lyY2xlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiA1cHggc29saWQgIzMzMztcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0RERERERDtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50YWcge1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xuICB6LWluZGV4OiAxMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTJBRDQwO1xuICBwYWRkaW5nOiA1cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/createappointment/createappointment.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/createappointment/createappointment.page.ts ***!
  \*************************************************************/
/*! exports provided: CreateappointmentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateappointmentPage", function() { return CreateappointmentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addnewopcode_addnewopcode_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../addnewopcode/addnewopcode.page */ "./src/app/addnewopcode/addnewopcode.page.ts");
/* harmony import */ var _app_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");










let CreateappointmentPage = class CreateappointmentPage {
    constructor(formBuilder, events, storage, authservice, modalCtrl, datepipe, router) {
        this.formBuilder = formBuilder;
        this.events = events;
        this.storage = storage;
        this.authservice = authservice;
        this.modalCtrl = modalCtrl;
        this.datepipe = datepipe;
        this.router = router;
        this.WipersAndLightsList = [];
        this.WheelsAndTiresList = [];
        this.notearray = [];
        this.playerCount = 1;
        this.Appoinmentdata = new Array();
        this.checkedIdx = 0;
        this.page = 10;
        console.log(this.lfw);
        console.log(this.lft);
        this.myForm = formBuilder.group({
            player1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]
        });
        this.lrw = "";
        this.lrt = "";
        this.rfw = "";
        this.rft = "";
        this.rrw = "";
        this.rrt = "";
        this.title = 'Customer Info';
        this.step = '1';
        this.step1 = '1';
        this.button1Color = '#009688';
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
        this.GetMOPCode();
        this.opArray = new Array();
        this.GetTransportationList();
        this.GetWheelsTiresDetails();
        this.GetWipersAndLightsType();
    }
    ngOnInit() {
        this.authservice.getcustidvin().subscribe((data) => {
            console.log(data);
            this.rescustvin = data;
            this.CustomerId = this.rescustvin.CustomerId;
            this.VIN = this.rescustvin.VIN;
        });
        this.storage.get('dealerid').then((val) => {
            console.log('dealerid', val);
            this.dealerid = val;
            this.GetAdvisorList();
        });
        this.storage.get('userid').then((val) => {
            console.log('userid', val);
            this.userid = val;
            this.GetCustomer();
            this.getYears();
        });
        this.authservice.getadvisor().subscribe((advisorid) => {
            // user and time are the same arguments passed in `events.publish(user, time)`
            this.advisorid = advisorid;
        });
    }
    removeControl(control) {
        console.log(control.key);
        this.myForm.removeControl(control.key);
        for (var i = 0; i < this.notearray.length; i++)
            if (this.notearray[i].id === control.key) {
                this.notearray.splice(i, 1);
                break;
            }
        console.log(this.notearray);
    }
    addControl(control) {
        console.log(control);
        let object1 = {
            id: 'player' + this.playerCount,
            Note: control.value.value
        };
        this.notearray.push(object1);
        this.playerCount++;
        this.myForm.addControl('player' + this.playerCount, new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required));
        console.log(this.notearray);
    }
    ChangeSpeed(event, wtypename, wmainname) {
        this.WipersAndLightsList = [];
        console.log(event);
    }
    ChangeWheel(event) {
        console.log(event);
        this.wheelvalue = event.detail.value.WheelType;
        if (this.lfw == undefined) {
            this.lfw = this.wheelvalue;
            this.lrw = undefined;
        }
        else if (this.lrw == undefined) {
            this.lrw = this.wheelvalue;
            this.rfw = undefined;
        }
        else if (this.rfw == undefined) {
            this.rfw = this.wheelvalue;
            this.rrw = undefined;
        }
        else if (this.rrw == undefined) {
            this.rrw = this.wheelvalue;
        }
    }
    ChangeTire(event) {
        console.log(event);
        this.tirevalue = event.detail.value.WheelDepth;
        if (this.lft == undefined) {
            this.lft = this.tirevalue;
            this.lrt = undefined;
        }
        else if (this.lrt == undefined) {
            this.lrt = this.tirevalue;
            this.rft = undefined;
        }
        else if (this.rft == undefined) {
            this.rft = this.tirevalue;
            this.rrt = undefined;
        }
        else if (this.rrt == undefined) {
            this.rrt = this.tirevalue;
        }
    }
    activestep(op) {
        this.step = op;
        if (op == '1') {
            this.title = 'Customer Info';
            this.button1Color = '#009688';
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
        }
        else if (op == '2') {
            this.title = 'Vehicle Info';
            this.button1Color = '#fff';
            this.button2Color = '#009688';
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
        }
        else if (op == '3') {
            this.title = 'Maintenance & Repairs';
            this.button1Color = '#fff';
            this.button2Color = '#fff';
            this.button3Color = '#009688';
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
        }
        else if (op == '4') {
            if (this.opArray == '' || this.opArray == null || this.opArray == undefined) {
                this.authservice.showToast("Please select opcode first");
                this.activestep(3);
            }
            else {
                this.title = 'Transportation';
                this.button1Color = '#fff';
                this.button2Color = '#fff';
                this.button3Color = '#fff';
                this.button4Color = '#009688';
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
            }
        }
        else if (op == '5') {
            this.title = 'Advisors & Teams';
            this.button1Color = '#fff';
            this.button2Color = '#fff';
            this.button3Color = '#fff';
            this.button4Color = '#fff';
            this.button5Color = '#009688';
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
        }
        else if (op == '6') {
            if (this.advisorid == '' || this.advisorid == null || this.advisorid == undefined) {
                this.authservice.showToast("Please select advisor first");
                this.activestep(5);
            }
            else {
                this.title = 'Date & Time';
                this.button1Color = '#fff';
                this.button2Color = '#fff';
                this.button3Color = '#fff';
                this.button4Color = '#fff';
                this.button5Color = '#fff';
                this.button6Color = '#009688';
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
            this.button7Color = '#009688';
            this.txt1color = '#000';
            this.txt2color = '#000';
            this.txt3color = '#000';
            this.txt4color = '#000';
            this.txt5color = '#000';
            this.txt6color = '#000';
            this.txt7color = '#fff';
            this.txt8color = '#000';
            this.txt9color = '#000';
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
            this.button8Color = '#009688';
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
            this.button9Color = '#009688';
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
        }
    }
    //for Customer Info
    getCountry() {
        this.authservice.GetCountry().subscribe(res => {
            this.country = res;
            this.countryid = this.customerdata[0].CountryId;
            this.getState();
            console.log(this.country);
        });
    }
    GetCustomer() {
        this.authservice.presentLoading();
        this.authservice.GetCustomer(this.dealerid, this.CustomerId).subscribe(res => {
            this.customerdata = res;
            this.fname = this.customerdata[0].FirstName;
            this.lname = this.customerdata[0].LastName;
            this.saddress = this.customerdata[0].Address1;
            this.saddress1 = this.customerdata[0].Address2;
            this.zipcode = this.customerdata[0].ZipCode;
            this.mobile = this.customerdata[0].MobilePhone;
            this.workphone = this.customerdata[0].WorkPhone;
            this.homephone = this.customerdata.HomePhone;
            this.email = this.customerdata[0].EmailId;
            console.log(this.customerdata);
            this.getCountry();
        });
    }
    ChangeCountry(event) {
        this.countryid = event.detail.value;
        console.log(this.countryid);
        this.getState();
    }
    getState() {
        this.authservice.GetState(this.countryid).subscribe(res => {
            this.state = res;
            this.stateid = this.customerdata[0].StateId;
            this.GetCity();
            console.log(this.state);
        });
    }
    ChangeState(event) {
        this.stateid = event.detail.value;
        console.log(this.stateid);
        this.GetCity();
    }
    GetCity() {
        this.authservice.GetCity(this.stateid).subscribe(res => {
            this.city = res;
            console.log("call again");
            if (this.city != "" || this.city != undefined) {
                this.cityid = this.customerdata[0].CityId;
            }
            this.authservice.dismissLoading();
            console.log(this.city);
        });
    }
    ChangeCity(event) {
        this.cityid = event.detail.value;
        console.log(this.cityid);
    }
    UpdateCustomerInfo() {
        if (this.fname == null || this.fname == '' || this.fname == undefined) {
            this.authservice.showToast("Please enter first name");
        }
        else if (this.lname == null || this.lname == '' || this.lname == undefined) {
            this.authservice.showToast("Please enter last name");
        }
        else if (this.saddress == null || this.saddress == '' || this.saddress == undefined) {
            this.authservice.showToast("Please enter Street Address");
        }
        else if (this.countryid == null || this.countryid == '' || this.countryid == undefined) {
            this.authservice.showToast("Please select country");
        }
        else if (this.stateid == null || this.stateid == '' || this.stateid == undefined) {
            this.authservice.showToast("Please select state");
        }
        else if (this.cityid == null || this.cityid == '' || this.cityid == undefined) {
            this.authservice.showToast("Please select city");
        }
        else if (this.mobile == null || this.mobile == '' || this.mobile == undefined) {
            this.authservice.showToast("Please enter mobile no.");
        }
        else if (this.email == null || this.email == '' || this.email == undefined) {
            this.authservice.showToast("Please enter email");
        }
        else {
            this.authservice.presentLoading();
            this.authservice.CustomerInsertUpdate(this.CustomerId, this.fname, this.lname, this.email, this.homephone, this.workphone, this.mobile, this.saddress, this.saddress1, this.countryid, this.cityid, this.stateid, this.zipcode, this.userid, this.dealerid).subscribe(res => {
                this.res = res;
                console.log(this.res);
                this.authservice.dismissLoading();
                this.authservice.showToast(this.res.Message);
            });
        }
    }
    // for Vehicle Info page
    getYears() {
        this.authservice.GetYearDetails().subscribe(res => {
            this.years = res;
            this.getMake();
            console.log(this.years);
        });
    }
    getMake() {
        this.authservice.GetMakeDetails().subscribe(res => {
            this.make = res;
            this.getColors();
            console.log(this.make);
        });
    }
    getColors() {
        this.authservice.GetColors().subscribe(res => {
            this.colors = res;
            this.GetTrimDetails();
            console.log(this.colors);
        });
    }
    GetModelDetails() {
        console.log(this.makeid);
        this.authservice.GetModelDetails(this.makeid).subscribe(res => {
            if (res != null) {
                this.model = res;
            }
            this.authservice.dismissLoading();
            console.log(this.model);
        });
    }
    GetTrimDetails() {
        this.authservice.GetTrimDetails().subscribe(res => {
            this.trim = res;
            this.GetVehicleDetailByVINCustomerID();
            console.log(this.trim);
        });
    }
    ChangeYear(event) {
        this.yearid = event.detail.value;
        console.log(this.yearid);
    }
    ChangeMake(event) {
        this.makeid = event.detail.value;
        console.log(this.makeid);
    }
    ChangeModel(event) {
        this.modelid = event.detail.value;
        console.log(this.modelid);
    }
    ChangeTrim(event) {
        this.trimid = event.detail.value;
        console.log(this.trimid);
    }
    ChangeColor(event) {
        this.colorid = event.detail.value;
        console.log(this.colorid);
    }
    GetVehicleDetailByVINCustomerID() {
        this.authservice.GetVehicleDetailByVINCustomerID(this.dealerid, this.CustomerId, this.VIN).subscribe(res => {
            this.vehicledata = res;
            this.vin = this.vehicledata[0].VIN;
            this.yearid = this.vehicledata[0].YearId;
            this.makeid = this.vehicledata[0].MakeId;
            this.modelid = this.vehicledata[0].ModelId;
            this.trimid = this.vehicledata[0].TrimId;
            this.colorid = this.vehicledata[0].ColorId;
            this.mileage = this.vehicledata[0].Milage;
            this.avgmileage = this.vehicledata[0].AverageMilesMonth;
            this.licenseplate = this.vehicledata[0].LicensePlate;
            this.GetModelDetails();
        });
    }
    UpdateVehicleInfo() {
        if (this.vin == null || this.vin == '' || this.vin == undefined) {
            this.authservice.showToast("Please enter VIN");
        }
        else if (this.yearid == null || this.yearid == '' || this.yearid == undefined || this.yearid == "0") {
            this.authservice.showToast("Please select Year");
        }
        else if (this.makeid == null || this.makeid == '' || this.makeid == undefined || this.makeid == "0") {
            this.authservice.showToast("Please select Make");
        }
        else if (this.modelid == null || this.modelid == '' || this.modelid == undefined || this.modelid == "0") {
            this.authservice.showToast("Please select Model");
        }
        else {
            this.authservice.presentLoading();
            this.authservice.InsertVehicle(this.CustomerId, this.colorid, this.licenseplate, this.avgmileage, this.mileage, this.vin, this.makeid, this.yearid, this.modelid, this.trimid, this.userid, this.dealerid).subscribe(res => {
                this.res = res;
                console.log(this.res);
                this.authservice.dismissLoading();
                this.authservice.showToast(this.res.Message);
            });
        }
    }
    // for Maintainance
    AddNewOPCode() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _addnewopcode_addnewopcode_page__WEBPACK_IMPORTED_MODULE_3__["AddnewopcodePage"],
                componentProps: {
                    "paramID": 123,
                    "paramTitle": "Add Vehicle"
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    this.dataReturned = dataReturned.data;
                    //alert('Modal Sent Data :'+ dataReturned);
                    this.GetMOPCode();
                }
            });
            return yield modal.present();
        });
    }
    GetMOPCode() {
        // this.authservice.presentLoading(); 
        this.authservice.GetMOPCode(this.dealerid, "1", "10", this.searchword).subscribe(res => {
            this.codelist = res;
            console.log(this.codelist);
            // this.authservice.dismissLoading();
        });
    }
    SearchOp() {
        // this.authservice.presentLoading(); 
        this.authservice.GetMOPCode(this.dealerid, "1", "10", this.searchword).subscribe(res => {
            this.codelist = res;
            console.log(this.codelist);
            // this.authservice.dismissLoading();
        });
    }
    doInfinite(infiniteScroll) {
        this.from = this.page + 1;
        this.page = this.page + 10;
        setTimeout(() => {
            this.authservice.GetMOPCode(this.dealerid, this.from, this.page, this.searchword)
                .subscribe(res => {
                this.data = res;
                console.log(this.data);
                for (let i = 0; i < this.data.length; i++) {
                    this.codelist.push(this.data[i]);
                }
            }, error => console.log("eror"));
            console.log(this.codelist);
            console.log('Async operation has ended');
            infiniteScroll.target.complete();
        }, 1000);
    }
    toggleInfiniteScroll() {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    }
    Next() {
        if (this.opArray == '' || this.opArray == undefined || this.opArray == null) {
            this.authservice.showToast("Please select opcode first");
        }
        else {
            // this.events.publish('opArray', this.opArray);
            this.activestep(4);
        }
    }
    SelectOP(event, data) {
        let checked = 0;
        if (event.detail.checked == true) {
            this.opArray.push(data);
        }
        else {
            let newArray = this.opArray.filter(function (el) {
                return el.OpCode !== data.OpCode;
            });
            this.opArray = newArray;
        }
        console.log(this.opArray);
    }
    // for Transportation
    TransNext() {
        if (this.tvalue != 'Drop Off') {
            // this.events.publish('step:created', "step4");
        }
        else {
            // this.events.publish('stepskip:created', "step6");
        }
        this.activestep(5);
        // this.events.publish('Transportation', this.tvalue);
    }
    GetTransportationList() {
        // this.authservice.presentLoading();    
        this.authservice.GetTransportationList(this.dealerid).subscribe(res => {
            this.transportdata = res;
            console.log(this.transportdata);
            this.GetWeekDays();
            // this.authservice.dismissLoading();
        });
    }
    GetWheelsTiresDetails() {
        this.authservice.GetWheelsTiresDetails().subscribe(res => {
            console.log(res);
            this.wheelsTireList = res;
            this.lfront = this.wheelsTireList.wheelsTireList[0].WheelTire;
            this.lrear = this.wheelsTireList.wheelsTireList[0].WheelTire;
            this.rfront = this.wheelsTireList.wheelsTireList[0].WheelTire;
            this.rrear = this.wheelsTireList.wheelsTireList[0].WheelTire;
            this.WheelsTypeList = this.wheelsTireList.WheelsTypeList;
            this.wheelsDepthList = this.wheelsTireList.wheelsDepthList;
        });
    }
    GetWipersAndLightsType() {
        this.authservice.GetWipersAndLightsType().subscribe(res => {
            console.log(res);
        });
    }
    GetWeekDays() {
        // this.authservice.presentLoading();    
        this.authservice.GetWeekDays().subscribe(res => {
            this.weekdata = res;
            console.log(this.weekdata);
            // this.authservice.dismissLoading();
        });
    }
    CalculateDealershipHRS() {
        // this.authservice.presentLoading();    
        this.authservice.CalculateDealershipHRS(this.dealerid, this.dayname, "value", this.userid).subscribe(res => {
            this.dealershipdata = res;
            console.log(this.dealershipdata);
            this.totaldropoff = this.dealershipdata[0].DropOffAppointmentLimit;
            this.useddropoff = this.dealershipdata[0].UsedAppt;
            this.totalhrs = this.dealershipdata[0].TotalHrsDuration;
            this.totalusedhrs = this.dealershipdata[0].UsedHRS;
            // this.authservice.dismissLoading();
        });
    }
    Selection(name, e) {
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
        });
        console.log(this.transportdata);
    }
    ChangeWeekDay(event) {
        console.log(event);
        this.dayname = event.detail.value.DayName;
        this.CalculateDealershipHRS();
    }
    // for Advisor
    AdvisorNext() {
        if (this.advisorid == null || this.advisorid == '' || this.advisorid == undefined) {
            this.authservice.showToast("Please Select Advisor");
        }
        else {
            // this.events.publish('advisorid', this.advisorid);
            this.activestep(6);
        }
    }
    GetAdvisorList() {
        // this.authservice.presentLoading();   
        this.authservice.GetAdvisorList(this.dealerid).subscribe(res => {
            this.advisordata = res;
            console.log(this.advisordata);
            // this.authservice.dismissLoading();
        });
    }
    AdvisorSelection(id, e) {
        console.log(id);
        console.log(e.detail.value);
        this.advisorid = id;
        this.advisordata.forEach(x => {
            x.checked = false;
            if (x.AdvisorId == e.detail.value) {
                x.checked = true;
            }
        });
    }
    // For data/time
    DateNext() {
        if (this.sdate == '' || this.sdate == null || this.sdate == undefined) {
            this.authservice.showToast("Please select date");
        }
        else if (this.sdate == '' || this.sdate == null || this.sdate == undefined) {
            this.authservice.showToast("Please select time slot");
        }
        else {
            // this.events.publish('step:created', "step6");
            this.activestep(7);
        }
    }
    GetTimeIntervals() {
        // this.authservice.presentLoading();
        this.authservice.GetTimeIntervals(this.dealerid, this.advisorid, this.sdate1).subscribe(res => {
            this.intervaldata = res;
            console.log(this.intervaldata);
            // this.authservice.dismissLoading();
            if (this.intervaldata == null) {
                this.authservice.showToast("Timeslots not available");
            }
        });
    }
    ChangeDate(event) {
        this.sdate1 = this.datepipe.transform(this.sdate, 'MM/dd/yyyy');
        console.log(this.sdate1);
        this.GetTimeIntervals();
    }
    ChangeTime(event) {
        console.log(this.interval);
        this.Promisetime = this.interval.TimeInerrvals;
        this.AppointmentTime = this.interval.AppointmentTimeId;
    }
    // for Notes
    BookAppointment() {
        console.log(this.myForm.value.player1);
        this.WipersAndLightsList = [];
        if (this.opArray == '' || this.opArray == null || this.opArray == undefined) {
            this.authservice.showToast("Please select opcode");
        }
        else if (this.advisorid == '' || this.advisorid == null || this.advisorid == undefined) {
            this.authservice.showToast("Please select advisor");
        }
        else if (this.sdate == '' || this.sdate == null || this.sdate == undefined) {
            this.authservice.showToast("Please select date");
        }
        else if (this.interval == '' || this.interval == null || this.interval == undefined) {
            this.authservice.showToast("Please select timeslot");
        }
        else if (this.myForm.value.player1 == '' || this.myForm.value.player1 == null || this.myForm.value.player1 == undefined) {
            this.authservice.showToast("Please enter note");
        }
        else {
            this.authservice.presentLoading();
            if (this.fogspeed != undefined) {
                let object1 = {
                    WTypeName: "Front",
                    WMainName: "FogLights",
                    WSpeedType: this.fogspeed
                };
                this.WipersAndLightsList.push(object1);
            }
            if (this.dayspeed != undefined) {
                let object2 = {
                    WTypeName: "Front",
                    WMainName: "DayTimeLights",
                    WSpeedType: this.dayspeed
                };
                this.WipersAndLightsList.push(object2);
            }
            if (this.highspeed != undefined) {
                let object3 = {
                    WTypeName: "Front",
                    WMainName: "HighBeamLights",
                    WSpeedType: this.highspeed
                };
                this.WipersAndLightsList.push(object3);
            }
            if (this.wiperspeed != undefined) {
                let object4 = {
                    WTypeName: "Front",
                    WMainName: "Wipers",
                    WSpeedType: this.wiperspeed
                };
                this.WipersAndLightsList.push(object4);
            }
            if (this.rearwiper != undefined) {
                let object5 = {
                    WTypeName: "Rear",
                    WMainName: "RearWipers",
                    WSpeedType: this.rearwiper
                };
                this.WipersAndLightsList.push(object5);
            }
            if (this.rearlights != undefined) {
                let object6 = {
                    WTypeName: "Rear",
                    WMainName: "RearLights",
                    WSpeedType: this.rearlights
                };
                this.WipersAndLightsList.push(object6);
            }
            if (this.brakelight != undefined) {
                let object7 = {
                    WTypeName: "Rear",
                    WMainName: "BrakeLights",
                    WSpeedType: this.brakelight
                };
                this.WipersAndLightsList.push(object7);
            }
            this.authservice.InsertAppointment(this.dealerid, this.CustomerId, this.fname, this.lname, this.userid, "Pending", this.myForm.value.player1, this.sdate1, this.Promisetime, this.AppointmentTime, this.tvalue, this.colorid, this.licenseplate, this.avgmileage, this.mileage, this.VIN, this.makeid, this.yearid, this.modelid, this.trimid, this.opArray, this.lfw, this.lft, this.lrw, this.lrt, this.rfw, this.rft, this.rrw, this.rrt, this.WipersAndLightsList).subscribe(res => {
                console.log(res);
                this.aptdata = res;
                this.authservice.dismissLoading();
                this.authservice.showToast("Appointment booked successfully !!");
                // this.router.navigateByUrl('/takeimage');
                this.router.navigate(['/takeimage'], { queryParams: { AppointmentId: this.aptdata.AppointmentId, VIN: this.VIN, backpage: "true" }, replaceUrl: true });
            });
        }
    }
};
CreateappointmentPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _app_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
], CreateappointmentPage.prototype, "infiniteScroll", void 0);
CreateappointmentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-createappointment',
        template: __webpack_require__(/*! raw-loader!./createappointment.page.html */ "./node_modules/raw-loader/index.js!./src/app/createappointment/createappointment.page.html"),
        styles: [__webpack_require__(/*! ./createappointment.page.scss */ "./src/app/createappointment/createappointment.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _app_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
], CreateappointmentPage);



/***/ })

}]);
//# sourceMappingURL=createappointment-createappointment-module-es2015.js.map