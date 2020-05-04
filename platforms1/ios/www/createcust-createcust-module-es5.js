(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["createcust-createcust-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/createcust/createcust.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/createcust/createcust.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n       <ion-buttons slot=\"start\">\n            <ion-back-button text=\"\" icon=\"ios-arrow-back\" style=\"color: #ffffff\"></ion-back-button>\n        </ion-buttons>\n        <ion-title style=\"color: #ffffff\">\n          Add Customer\n       </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- <div *ngIf=\"step == 1\" class=\"scroll\"> -->\n    <ion-row class=\"rawcss\">\n        <ion-col ion-item size=\"6\" class=\"colcss\">\n            <ion-label class=\"labelcss\">First Name</ion-label>\n        </ion-col>\n        <ion-col ion-item size=\"6\">\n            <ion-input type='text' placeholder='First Name' [(ngModel)]='fname' class=\"inputcss\"></ion-input>\n        </ion-col>\n    </ion-row>\n    <ion-row class=\"rawcss\">\n        <ion-col ion-item size=\"6\" class=\"colcss\">\n            <ion-label class=\"labelcss\">Last Name</ion-label>\n        </ion-col>\n        <ion-col ion-item size=\"6\">\n            <ion-input type='text' placeholder='Last Name' [(ngModel)]='lname' class=\"inputcss\" (ionChange)=\"Changelname()\"></ion-input>\n        </ion-col>\n    </ion-row>\n    <ion-row class=\"rawcss\">\n            <ion-col ion-item size=\"6\" class=\"colcss\">\n                <ion-label class=\"labelcss\">Company Name</ion-label>\n            </ion-col>\n            <ion-col ion-item size=\"6\">\n                <ion-input type='text' placeholder='Comapny Name' [(ngModel)]='companyname' class=\"inputcss\"></ion-input>\n            </ion-col>\n        </ion-row>\n    <ion-row class=\"rawcss\">\n        <ion-col ion-item size=\"6\" class=\"colcss\">\n            <ion-label class=\"labelcss\">Street Address </ion-label>\n        </ion-col>\n        <ion-col ion-item size=\"6\">\n            <ion-input type='text' placeholder='Street Address' [(ngModel)]='saddress' class=\"inputcss\"></ion-input>\n        </ion-col>\n    </ion-row>\n    <ion-row class=\"rawcss\">\n        <ion-col ion-item size=\"6\" class=\"colcss\">\n            <ion-label class=\"labelcss\">Street Address 1</ion-label>\n        </ion-col>\n        <ion-col ion-item size=\"6\">\n            <ion-input type='text' placeholder='Street Address 1' [(ngModel)]='saddress1' class=\"inputcss\"></ion-input>\n        </ion-col>\n    </ion-row>\n    <ion-row class=\"rawcss\">\n        <ion-col ion-item size=\"6\" class=\"colcss\">\n            <ion-label class=\"labelcss\">Country</ion-label>\n        </ion-col>\n        <ion-col ion-item size=\"6\">\n            <ion-select placeholder=\"Country\" class=\"selectcss\" (ionChange)=\"ChangeCountry($event)\" value=\"{{countryid}}\">\n                <ion-select-option value=\"{{c.CountryId}}\" *ngFor=\"let c of country\">{{c.CountryName}}</ion-select-option>\n            </ion-select>\n        </ion-col>\n    </ion-row>\n    <ion-row class=\"rawcss\">\n        <ion-col ion-item size=\"6\" class=\"colcss\">\n            <ion-label class=\"labelcss\">State</ion-label>\n        </ion-col>\n        <ion-col ion-item size=\"6\">\n            <ion-select placeholder=\"State\" class=\"selectcss\" (ionChange)=\"ChangeState($event)\" value=\"{{stateid}}\">\n                <ion-select-option value=\"{{s.StateId}}\" *ngFor=\"let s of state\">{{s.StateName}}</ion-select-option>\n            </ion-select>\n        </ion-col>\n    </ion-row>\n    <ion-row class=\"rawcss\">\n        <ion-col ion-item size=\"6\" class=\"colcss\">\n            <ion-label class=\"labelcss\">City</ion-label>\n        </ion-col>\n        <ion-col ion-item size=\"6\">\n            <ion-select placeholder=\"City\" class=\"selectcss\" (ionChange)=\"ChangeCity($event)\" value=\"{{cityid}}\">\n                <ion-select-option value=\"{{cities.CityId}}\" *ngFor=\"let cities of city\">{{cities.CityName}}</ion-select-option>\n            </ion-select>\n        </ion-col>\n    </ion-row>\n    <ion-row class=\"rawcss\">\n        <ion-col ion-item size=\"6\" class=\"colcss\">\n            <ion-label class=\"labelcss\">Zipcode</ion-label>\n        </ion-col>\n        <ion-col ion-item size=\"6\">\n            <ion-input type='text' placeholder='Zipcode' [(ngModel)]='zipcode' class=\"inputcss\"></ion-input>\n        </ion-col>\n    </ion-row>\n    <ion-row class=\"rawcss\">\n        <ion-col ion-item size=\"6\" class=\"colcss\">\n            <ion-label class=\"labelcss\">Mobile No. </ion-label>\n        </ion-col>\n        <ion-col ion-item size=\"6\">\n            <ion-input type='text' placeholder='Mobile No.' [(ngModel)]='mobile' class=\"inputcss\"></ion-input>\n        </ion-col>\n    </ion-row>\n    <ion-row class=\"rawcss\">\n        <ion-col ion-item size=\"6\" class=\"colcss\">\n            <ion-label class=\"labelcss\">Work Phone</ion-label>\n        </ion-col>\n        <ion-col ion-item size=\"6\">\n            <ion-input type='text' placeholder='Work Phone' [(ngModel)]='workphone' class=\"inputcss\"></ion-input>\n        </ion-col>\n    </ion-row>\n    <ion-row class=\"rawcss\">\n        <ion-col ion-item size=\"6\" class=\"colcss\">\n            <ion-label class=\"labelcss\">Home Phone</ion-label>\n        </ion-col>\n        <ion-col ion-item size=\"6\">\n            <ion-input type='text' placeholder='Home Phone' [(ngModel)]='homephone' class=\"inputcss\"></ion-input>\n        </ion-col>\n    </ion-row>\n    <ion-row class=\"rawcss\">\n        <ion-col ion-item size=\"6\" class=\"colcss\">\n            <ion-label class=\"labelcss\">Email</ion-label>\n        </ion-col>\n        <ion-col ion-item size=\"6\">\n            <ion-input type='text' placeholder='Email' [(ngModel)]='email' class=\"inputcss\"></ion-input>\n        </ion-col>\n    </ion-row>\n\n<!-- </div>\n\n<div *ngIf=\"step == 2\" class=\"scroll\"> -->\n    <ion-row class=\"rawcss\">\n        <ion-col ion-item size=\"6\" class=\"colcss\">\n            <ion-label class=\"labelcss\">VIN</ion-label>\n        </ion-col>\n        <ion-col ion-item size=\"6\">\n            <ion-input type='text' placeholder='VIN' [(ngModel)]='vin' class=\"inputcss\" maxlength=\"17\" minlength=\"17\"></ion-input>\n        </ion-col>\n    </ion-row>\n\n    <ion-row class=\"rawcss\">\n        <ion-col ion-item size=\"6\" class=\"colcss\">\n            <ion-label class=\"labelcss\">Year</ion-label>\n        </ion-col>\n        <ion-col ion-item size=\"6\">\n            <ion-select placeholder=\"Year\" class=\"selectcss\" value=\"{{yearid}}\" (ionChange)=\"ChangeYear($event)\">\n                <ion-select-option value=\"{{y.YearId}}\" *ngFor=\"let y of years\">{{y.Year}}</ion-select-option>\n            </ion-select>\n        </ion-col>\n    </ion-row>\n\n    <ion-row class=\"rawcss\">\n        <ion-col ion-item size=\"6\" class=\"colcss\">\n            <ion-label class=\"labelcss\">Make</ion-label>\n        </ion-col>\n        <ion-col ion-item size=\"6\">\n            <ion-select placeholder=\"Make\" class=\"selectcss\" value=\"{{makeid}}\" (ionChange)=\"ChangeMake($event)\">\n                <ion-select-option value=\"{{m.MakeId}}\" *ngFor=\"let m of make\">{{m.Make}}</ion-select-option>\n            </ion-select>\n        </ion-col>\n    </ion-row>\n\n    <ion-row class=\"rawcss\">\n        <ion-col ion-item size=\"6\" class=\"colcss\">\n            <ion-label class=\"labelcss\">Model </ion-label>\n        </ion-col>\n        <ion-col ion-item size=\"6\" *ngIf=\"makeid != null\">\n            <ion-select placeholder=\"Model\" class=\"selectcss\" (ionChange)=\"ChangeModel($event)\" value=\"{{modelid}}\">\n                <ion-select-option value=\"{{modeldetail.ModelId}}\" *ngFor=\"let modeldetail of model\">{{modeldetail.Modal}}</ion-select-option>\n            </ion-select>\n        </ion-col>\n\n        <ion-col ion-item size=\"6\" *ngIf=\"makeid == null\">\n                <ion-input type='text' placeholder='Model'(click)=\"SelectModel()\" [readonly]=\"true\" class=\"inputcss\"></ion-input>\n            </ion-col>\n    </ion-row>\n\n    <ion-row class=\"rawcss\">\n        <ion-col ion-item size=\"6\" class=\"colcss\">\n            <ion-label class=\"labelcss\">Trim </ion-label>\n        </ion-col>\n        <ion-col ion-item size=\"6\" >\n            <ion-select placeholder=\"Trim\" class=\"selectcss\" (ionChange)=\"ChangeTrim($event)\" value=\"{{trimid}}\">\n                <ion-select-option value=\"{{trimdetail.TrimId}}\" *ngFor=\"let trimdetail of trim\">{{trimdetail.Trim}}</ion-select-option>\n            </ion-select>\n        </ion-col>\n    </ion-row>\n\n    <ion-row class=\"rawcss\">\n        <ion-col ion-item size=\"6\" class=\"colcss\">\n            <ion-label class=\"labelcss\">Color</ion-label>\n        </ion-col>\n        <ion-col ion-item size=\"6\">\n            <ion-select placeholder=\"Color\" class=\"selectcss\" (ionChange)=\"ChangeColor($event)\" value=\"{{colorid}}\">\n                <ion-select-option value=\"{{color.ColorId}}\" *ngFor=\"let color of colors\">{{color.ColorName}}</ion-select-option>\n            </ion-select>\n        </ion-col>\n    </ion-row>\n\n    <ion-row class=\"rawcss\">\n        <ion-col ion-item size=\"6\" class=\"colcss\">\n            <ion-label class=\"labelcss\">Mileage</ion-label>\n        </ion-col>\n        <ion-col ion-item size=\"6\">\n            <ion-input type='text' placeholder='Mileage' [(ngModel)]='mileage' class=\"inputcss\"></ion-input>\n        </ion-col>\n    </ion-row>\n\n    <ion-row class=\"rawcss\">\n        <ion-col ion-item size=\"6\" class=\"colcss\">\n            <ion-label class=\"labelcss\">Average Miles/Month</ion-label>\n        </ion-col>\n        <ion-col ion-item size=\"6\">\n            <ion-input type='text' placeholder='Average Miles/Month' [(ngModel)]='avgmileage' class=\"inputcss\"></ion-input>\n        </ion-col>\n    </ion-row>\n\n    <ion-row class=\"rawcss\">\n        <ion-col ion-item size=\"6\" class=\"colcss\">\n            <ion-label class=\"labelcss\">License Plate</ion-label>\n        </ion-col>\n        <ion-col ion-item size=\"6\">\n            <ion-input type='text' placeholder='License Plate' [(ngModel)]='licenseplate' class=\"inputcss\"></ion-input>\n        </ion-col>\n    </ion-row>\n\n    <ion-row class=\"rawcss\">\n            <ion-col ion-item size=\"6\" class=\"colcss\">\n                <ion-label class=\"labelcss\">User Name</ion-label>\n            </ion-col>\n            <ion-col ion-item size=\"6\">\n                <ion-input type='text' [readonly]=\"true\" placeholder='User Name' [(ngModel)]='username' class=\"inputcss\"></ion-input>\n            </ion-col>\n    </ion-row>\n\n    <ion-row class=\"rawcss\">\n            <ion-col ion-item size=\"6\" class=\"colcss\">\n                <ion-label class=\"labelcss\">Password</ion-label>\n            </ion-col>\n            <ion-col ion-item size=\"6\">\n                <ion-input type='password' placeholder='Password' [(ngModel)]='password' class=\"inputcss\"></ion-input>\n            </ion-col>\n    </ion-row>\n\n\n<!-- </div> -->\n</ion-content>\n<ion-footer>\n        <ion-toolbar>\n                <ion-button expand=\"full\" class=\"footerbtn\" (click)=\"InsertCustomerInfo()\">Submit</ion-button>\n        </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/createcust/createcust.module.ts":
/*!*************************************************!*\
  !*** ./src/app/createcust/createcust.module.ts ***!
  \*************************************************/
/*! exports provided: CreatecustPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatecustPageModule", function() { return CreatecustPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _createcust_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createcust.page */ "./src/app/createcust/createcust.page.ts");







var routes = [
    {
        path: '',
        component: _createcust_page__WEBPACK_IMPORTED_MODULE_6__["CreatecustPage"]
    }
];
var CreatecustPageModule = /** @class */ (function () {
    function CreatecustPageModule() {
    }
    CreatecustPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_createcust_page__WEBPACK_IMPORTED_MODULE_6__["CreatecustPage"]]
        })
    ], CreatecustPageModule);
    return CreatecustPageModule;
}());



/***/ }),

/***/ "./src/app/createcust/createcust.page.scss":
/*!*************************************************!*\
  !*** ./src/app/createcust/createcust.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-ios ion-toolbar:last-child {\n  --border-width: 0 0 0.55px;\n  --background: #374767;\n}\n\n.header-md ion-toolbar:last-child {\n  --border-width: 0 0 0.55px;\n  --background: #374767;\n}\n\n.fixed {\n  width: 100%;\n  background: #fff;\n}\n\n.steps {\n  margin: 0 auto;\n}\n\n.step {\n  color: white;\n  margin: 1px;\n  border: 1px solid #000;\n  display: inline;\n  padding: 3px 7px;\n}\n\n.scroll {\n  width: 100%;\n  height: 100vh;\n  margin-top: 5%;\n  margin: 5px;\n  margin-bottom: 30%;\n}\n\n.thumnails {\n  z-index: 10;\n  background: #fff;\n  overflow-x: scroll;\n  overflow-y: hidden;\n}\n\n.thumnails .list-thumbnail {\n  height: 100%;\n  white-space: nowrap;\n}\n\n.thumnails .list-thumbnail .img-thumb {\n  display: inline-block;\n  line-height: 53px;\n  padding: 3px;\n}\n\n::-webkit-scrollbar {\n  display: none;\n}\n\n.footerbtn {\n  --background: #009688;\n}\n\n.btnstyle {\n  height: 40px;\n}\n\n.rawcss {\n  border-bottom: 1px solid #d4d4d4;\n}\n\n.labelcss {\n  padding-top: 14px;\n  font-size: 15px;\n}\n\n.inputcss {\n  font-size: 15px;\n}\n\n.colcss {\n  padding: 14px;\n}\n\n.selectcss {\n  font-size: 15px;\n  margin-left: -6px;\n}\n\n.btn {\n  position: fixed;\n  left: 0;\n  bottom: -23px;\n  right: 0;\n  z-index: 100;\n}\n\n.forecast_container {\n  overflow-x: scroll !important;\n  overflow-y: hidden;\n  word-wrap: break-word;\n}\n\n.fixed {\n  width: 100%;\n  background: #fff;\n}\n\n.footerbtn {\n  --background: #009688;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ibHVlYm94L0Rlc2t0b3AvYXBwb2ludG1lbnQxL3NyYy9hcHAvY3JlYXRlY3VzdC9jcmVhdGVjdXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvY3JlYXRlY3VzdC9jcmVhdGVjdXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFRTtFQUNFLDBCQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURDRTtFQUNFLFdBQUE7RUFHQSxnQkFBQTtBQ0FKOztBREdBO0VBRUksY0FBQTtBQ0RKOztBREdBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEREk7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNHTjs7QURGTTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDSVI7O0FEQUU7RUFDRSxhQUFBO0FDR0o7O0FEREU7RUFDRSxxQkFBQTtBQ0lKOztBREZBO0VBQ0ksWUFBQTtBQ0tKOztBREhBO0VBQ0ksZ0NBQUE7QUNNSjs7QURKQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQ09KOztBRExBO0VBQ0ksZUFBQTtBQ1FKOztBRE5BO0VBQ0ksYUFBQTtBQ1NKOztBRFBBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDVUo7O0FEUkE7RUFDSSxlQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQ1dKOztBRFRBO0VBQ0ksNkJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDWUo7O0FEVEE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNZSjs7QURWQTtFQUNJLHFCQUFBO0FDYUoiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGVjdXN0L2NyZWF0ZWN1c3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1jaGlsZCB7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMCAwIDAuNTVweDtcclxuICAgIC0tYmFja2dyb3VuZDogIzM3NDc2NztcclxuICB9XHJcbiAgXHJcbiAgLmhlYWRlci1tZCBpb24tdG9vbGJhcjpsYXN0LWNoaWxkIHtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAwIDAgMC41NXB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMzc0NzY3O1xyXG4gIH1cclxuICAuZml4ZWQge1xyXG4gICAgd2lkdGg6IDEwMCU7IC8vIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAvLyBtYXJnaW46IDAgNHB4IDRweCA0cHg7XHJcbiAgICAvLyBoZWlnaHQ6IDEwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbi5zdGVwcyB7XHJcbiAgICAvLyB3aWR0aDogMTIwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uc3RlcCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDFweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBwYWRkaW5nOiAzcHggN3B4O1xyXG59XHJcbi5zY3JvbGwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwJTtcclxufVxyXG4udGh1bW5haWxze1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgLmxpc3QtdGh1bWJuYWlse1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIC5pbWctdGh1bWJ7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAgICAgICBcclxuICAgICAgICBsaW5lLWhlaWdodDogNTNweDtcclxuICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgOjotd2Via2l0LXNjcm9sbGJhciB7IFxyXG4gICAgZGlzcGxheTogbm9uZTsgXHJcbiAgfVxyXG4gIC5mb290ZXJidG57XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwMDk2ODg7XHJcbn1cclxuLmJ0bnN0eWxle1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcbi5yYXdjc3N7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q0ZDRkNDtcclxufVxyXG4ubGFiZWxjc3N7XHJcbiAgICBwYWRkaW5nLXRvcDogMTRweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4uaW5wdXRjc3N7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLmNvbGNzc3tcclxuICAgIHBhZGRpbmc6IDE0cHg7XHJcbn1cclxuLnNlbGVjdGNzc3tcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNnB4O1xyXG59XHJcbi5idG4ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogLTIzcHg7XHJcbiAgICByaWdodDogMDtcclxuICAgIHotaW5kZXg6IDEwMDtcclxufVxyXG4uZm9yZWNhc3RfY29udGFpbmVye1xyXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICBcclxufVxyXG4uZml4ZWQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcbi5mb290ZXJidG57XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwMDk2ODg7XHJcbn1cclxuIiwiLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1jaGlsZCB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMC41NXB4O1xuICAtLWJhY2tncm91bmQ6ICMzNzQ3Njc7XG59XG5cbi5oZWFkZXItbWQgaW9uLXRvb2xiYXI6bGFzdC1jaGlsZCB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMC41NXB4O1xuICAtLWJhY2tncm91bmQ6ICMzNzQ3Njc7XG59XG5cbi5maXhlZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uc3RlcHMge1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnN0ZXAge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHBhZGRpbmc6IDNweCA3cHg7XG59XG5cbi5zY3JvbGwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIG1hcmdpbjogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAzMCU7XG59XG5cbi50aHVtbmFpbHMge1xuICB6LWluZGV4OiAxMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG4udGh1bW5haWxzIC5saXN0LXRodW1ibmFpbCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi50aHVtbmFpbHMgLmxpc3QtdGh1bWJuYWlsIC5pbWctdGh1bWIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiA1M3B4O1xuICBwYWRkaW5nOiAzcHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZm9vdGVyYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA5Njg4O1xufVxuXG4uYnRuc3R5bGUge1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5yYXdjc3Mge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q0ZDRkNDtcbn1cblxuLmxhYmVsY3NzIHtcbiAgcGFkZGluZy10b3A6IDE0cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmlucHV0Y3NzIHtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uY29sY3NzIHtcbiAgcGFkZGluZzogMTRweDtcbn1cblxuLnNlbGVjdGNzcyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IC02cHg7XG59XG5cbi5idG4ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogLTIzcHg7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAxMDA7XG59XG5cbi5mb3JlY2FzdF9jb250YWluZXIge1xuICBvdmVyZmxvdy14OiBzY3JvbGwgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5maXhlZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uZm9vdGVyYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA5Njg4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/createcust/createcust.page.ts":
/*!***********************************************!*\
  !*** ./src/app/createcust/createcust.page.ts ***!
  \***********************************************/
/*! exports provided: CreatecustPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatecustPage", function() { return CreatecustPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var CreatecustPage = /** @class */ (function () {
    function CreatecustPage(authservice, storage, router) {
        this.authservice = authservice;
        this.storage = storage;
        this.router = router;
    }
    CreatecustPage.prototype.ngOnInit = function () {
        var _this = this;
        this.getCountry();
        this.getYears();
        this.storage.get('dealerid').then(function (val) {
            console.log('dealerid', val);
            _this.dealerid = val;
        });
        this.storage.get('userid').then(function (val) {
            console.log('userid', val);
            _this.userid = val;
        });
    };
    CreatecustPage.prototype.getCountry = function () {
        var _this = this;
        this.authservice.GetCountry().subscribe(function (res) {
            _this.country = res;
            //this.countryid = this.customerdata[0].CountryId;
            _this.getState();
            console.log(_this.country);
        });
    };
    CreatecustPage.prototype.getState = function () {
        var _this = this;
        this.authservice.GetState(this.countryid).subscribe(function (res) {
            _this.state = res;
            //this.stateid = this.customerdata[0].StateId;
            _this.GetCity();
            console.log(_this.state);
        });
    };
    CreatecustPage.prototype.GetCity = function () {
        var _this = this;
        this.authservice.GetCity(this.stateid).subscribe(function (res) {
            _this.city = res;
            console.log("call again");
            if (_this.city != "" || _this.city != undefined) {
                // this.cityid = this.customerdata[0].CityId;
            }
            _this.authservice.dismissLoading();
            console.log(_this.city);
        });
    };
    CreatecustPage.prototype.getYears = function () {
        var _this = this;
        this.authservice.GetYearDetails().subscribe(function (res) {
            _this.years = res;
            _this.getMake();
            console.log(_this.years);
        });
    };
    CreatecustPage.prototype.getMake = function () {
        var _this = this;
        this.authservice.GetMakeDetails().subscribe(function (res) {
            _this.make = res;
            _this.getColors();
            console.log(_this.make);
        });
    };
    CreatecustPage.prototype.getColors = function () {
        var _this = this;
        this.authservice.GetColors().subscribe(function (res) {
            _this.colors = res;
            _this.GetTrimDetails();
            console.log(_this.colors);
        });
    };
    CreatecustPage.prototype.GetModelDetails = function () {
        var _this = this;
        console.log(this.makeid);
        this.authservice.GetModelDetails(this.makeid).subscribe(function (res) {
            _this.model = res;
            _this.authservice.dismissLoading();
            console.log(_this.model);
        });
    };
    CreatecustPage.prototype.GetTrimDetails = function () {
        var _this = this;
        this.authservice.GetTrimDetails().subscribe(function (res) {
            _this.trim = res;
            // this.GetVehicleDetailByVINCustomerID();
            console.log(_this.trim);
        });
    };
    CreatecustPage.prototype.ChangeCountry = function (event) {
        this.countryid = event.detail.value;
        console.log(this.countryid);
        this.getState();
    };
    CreatecustPage.prototype.ChangeState = function (event) {
        this.stateid = event.detail.value;
        console.log(this.stateid);
        this.GetCity();
    };
    CreatecustPage.prototype.ChangeCity = function (event) {
        this.cityid = event.detail.value;
        console.log(this.cityid);
    };
    CreatecustPage.prototype.ChangeYear = function (event) {
        this.yearid = event.detail.value;
        console.log(this.yearid);
    };
    CreatecustPage.prototype.ChangeMake = function (event) {
        this.makeid = event.detail.value;
        console.log(this.makeid);
        this.GetModelDetails();
    };
    CreatecustPage.prototype.ChangeModel = function (event) {
        this.modelid = event.detail.value;
        console.log(this.modelid);
    };
    CreatecustPage.prototype.ChangeTrim = function (event) {
        this.trimid = event.detail.value;
        console.log(this.trimid);
    };
    CreatecustPage.prototype.ChangeColor = function (event) {
        this.colorid = event.detail.value;
        console.log(this.colorid);
    };
    CreatecustPage.prototype.SelectModel = function () {
        this.authservice.showToast("First Select Make");
    };
    CreatecustPage.prototype.Changelname = function () {
        if (this.fname != null || this.fname != '' || this.fname != undefined) {
            this.username = this.fname.charAt(0) + this.lname;
        }
    };
    CreatecustPage.prototype.InsertCustomerInfo = function () {
        var _this = this;
        if (this.fname == null || this.fname == '' || this.fname == undefined) {
            this.authservice.showToast("Please enter first name");
        }
        else if (this.lname == null || this.lname == '' || this.lname == undefined) {
            this.authservice.showToast("Please enter last name");
        }
        else if (this.companyname == null || this.companyname == '' || this.companyname == undefined) {
            this.authservice.showToast("Please comapny name");
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
        else if (this.vin == null || this.vin == '' || this.vin == undefined) {
            this.authservice.showToast("Please enter VIN");
        }
        else if (this.username == null || this.username == '' || this.username == undefined) {
            this.authservice.showToast("Username is mandatory !!");
        }
        else if (this.password == null || this.password == '' || this.password == undefined) {
            this.authservice.showToast("Please enter password");
        }
        else {
            this.authservice.presentLoading();
            this.authservice.InsertNewCustomer(this.dealerid, this.fname, this.lname, this.companyname, this.saddress, this.countryid, this.stateid, this.cityid, this.mobile, this.email, this.vin, this.username, this.password, this.saddress1, this.zipcode, this.homephone, this.workphone, this.yearid, this.makeid, this.modelid, this.trimid, this.colorid, this.mileage, this.avgmileage, this.licenseplate, this.userid).subscribe(function (res) {
                _this.res = res;
                console.log(_this.res);
                _this.authservice.dismissLoading();
                _this.authservice.showToast(_this.res.Message);
                _this.router.navigate(['/home']);
            });
        }
    };
    CreatecustPage.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    CreatecustPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-createcust',
            template: __webpack_require__(/*! raw-loader!./createcust.page.html */ "./node_modules/raw-loader/index.js!./src/app/createcust/createcust.page.html"),
            styles: [__webpack_require__(/*! ./createcust.page.scss */ "./src/app/createcust/createcust.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], CreatecustPage);
    return CreatecustPage;
}());



/***/ })

}]);
//# sourceMappingURL=createcust-createcust-module-es5.js.map