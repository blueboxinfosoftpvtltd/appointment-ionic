(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"--color: #fff;\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n        <img src=\"../assets/imgs/appointment.png\">\n        <span style=\"color: #fff;margin-left: 3px\">PPOINTMENT </span>\n    </ion-title>\n\n    <!-- <ion-buttons slot=\"end\">\n        <ion-icon name=\"power\" (click)=\"logout()\" style=\"color: #ffffff;font-size: 30px;\"></ion-icon>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n        <p style=\"margin-left: 13px;    margin-top: 10px;\">Dealership Name</p>      \n        <ion-item style=\"border: 1px solid #acadaf;margin-left: 10px;margin-right: 10px;border-radius: 10px;\">\n          <ion-select   value=\"{{dealername}}\"   (ionChange)=\"ChangeDealership($event)\"  style=\"max-width: 100% !important;width: 100%;font-size: 15px;margin-left: -10px;\">\n            <ion-select-option style = \"white-space: normal;\" *ngFor=\"let dealer of dealers\" value=\"{{dealer.DealershipId}}\">{{dealer.DealershipName}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n    \n        <ion-grid class=\"menu\">\n          <ion-row *ngFor=\"let row of grid;\">\n            <ion-col width-0 *ngFor=\"let data of row;\">\n                <ion-card (click)=\"selectoption(data.id)\">\n                  <ion-row  style=\"justify-content: center;\">\n                      <!-- <ion-label>{{data.img}}</ion-label> -->\n                    <img [src]=\"data.img\" class=\"homeicon\">\n                    <!-- <ion-label>{{data.aimg}}</ion-label> -->\n                </ion-row>\n                <ion-row  style=\"justify-content: center;\">\n                    <ion-label style=\"text-align: center;margin-top: 10px\">{{data.data}}</ion-label>\n                </ion-row>\n                  </ion-card>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      <!-- <ion-row>\n          <ion-col>\n              <ion-button style=\"background-color: #009688;\n              background: #009688;\n              margin-left: 7px;\n              margin-top: 9px;\n              height: 35px;\" (click)=\"AddAppointment()\">Add New Appointment</ion-button>        \n          </ion-col>\n      </ion-row> -->\n\n      <!-- <br>\n      <ion-grid>\n        <ion-row>\n          <ion-col text-center style=\"box-shadow: 5px 5px 5px 5px #dddddd;\" (click)=\"AddAppointment()\">\n            <img src=\"../assets/imgs/a_icon.png\">\n          <p style=\"margin: 10px;\">Book Appointment</p>\n          </ion-col>\n          <ion-col text-center style=\"box-shadow: 5px 5px 5px 5px #dddddd;\" (click)=\"GoToScheduler()\">\n            <img src=\"../assets/imgs/v_icon.png\" >\n          <p style=\"margin: 10px;\">View Appointment</p>\n          </ion-col>\n          <ion-col text-center style=\"box-shadow: 5px 5px 5px 5px #dddddd;\">\n            <img src=\"../assets/imgs/about_icon.png\" >\n            <p style=\"margin: 10px;\">About Us</p>\n          </ion-col>\n         \n        </ion-row>\n        </ion-grid>\n<br>\n        <ion-grid>\n            <ion-row>\n              <ion-col text-center style=\"box-shadow: 5px 5px 5px 5px #dddddd;\">\n                <img src=\"../assets/imgs/contact_icon.png\" >\n              <p style=\"margin: 10px;\">Contact Us</p>\n              </ion-col>\n              <ion-col text-center style=\"box-shadow: 5px 5px 5px 5px #dddddd;\">\n                <img src=\"../assets/imgs/location_icon.png\" >\n              <p style=\"margin: 10px;\">Reach Us</p>\n              </ion-col>\n          \n              <ion-col text-center style=\"box-shadow: 5px 5px 5px 5px #dddddd;\">\n                  <img src=\"../assets/imgs/profile_icon.png\" >\n                <p style=\"margin: 10px;\">Profile</p>\n                </ion-col>\n            </ion-row>\n            </ion-grid> -->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-ios ion-toolbar:last-child {\n  --border-width: 0 0 0.55px;\n  --background: #374767;\n}\n\n.header-md ion-toolbar:last-child {\n  --border-width: 0 0 0.55px;\n  --background: #374767;\n}\n\n.homeicon {\n  max-width: 30%;\n  border: 0;\n  /* width: 20px; */\n  height: 30px;\n  margin-top: 10px;\n}\n\nselect-icon-inner {\n  left: -5px;\n  margin-top: -6px;\n  border-top: 14px solid;\n  border-right: 10px solid transparent;\n  border-left: 10px solid transparent;\n}\n\n.popover-content {\n  min-width: 90% !important;\n}\n\n.menu {\n  padding: 8px;\n  margin-top: 10px;\n}\n\nion-card {\n  height: 100px !important;\n}\n\n.col {\n  padding: 0px;\n  position: relative;\n  width: 100%;\n  margin: 0;\n  min-height: 1px;\n  flex-basis: 0;\n  -webkit-box-flex: 1;\n  flex-grow: 1;\n  max-width: 100%;\n}\n\n.card-md {\n  margin: 1px;\n  border-radius: 2px;\n  width: calc(100% - 2px);\n  font-size: 1.4rem;\n  background: #fff;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ibHVlYm94L0Rlc2t0b3AvYXBwb2ludG1lbnQxL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLDBCQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURDRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ0VKOztBREFFO0VBQ0Usd0JBQUE7QUNHSjs7QURERTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUdBLGFBQUE7RUFDQSxtQkFBQTtFQUdBLFlBQUE7RUFDQSxlQUFBO0FDSUo7O0FERkE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFFQSwrR0FBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3QtY2hpbGQge1xuICAtLWJvcmRlci13aWR0aDogMCAwIDAuNTVweDtcbiAgLS1iYWNrZ3JvdW5kOiAjMzc0NzY3O1xufVxuXG4uaGVhZGVyLW1kIGlvbi10b29sYmFyOmxhc3QtY2hpbGQge1xuICAtLWJvcmRlci13aWR0aDogMCAwIDAuNTVweDtcbiAgLS1iYWNrZ3JvdW5kOiAjMzc0NzY3O1xufVxuXG4uaG9tZWljb24ge1xuICBtYXgtd2lkdGg6IDMwJTtcbiAgYm9yZGVyOiAwO1xuICAvKiB3aWR0aDogMjBweDsgKi9cbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5zZWxlY3QtaWNvbi1pbm5lciB7XG4gIGxlZnQ6IC01cHg7XG4gIG1hcmdpbi10b3A6IC02cHg7XG4gIGJvcmRlci10b3A6IDE0cHggc29saWQ7XG4gIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5wb3BvdmVyLWNvbnRlbnQge1xuICBtaW4td2lkdGg6IDkwJSAhaW1wb3J0YW50O1xuICB9XG4gIC5tZW51e1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG4gIGlvbi1jYXJkIHtcbiAgICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNvbCB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgbWluLWhlaWdodDogMXB4O1xuICAgIC13ZWJraXQtZmxleC1iYXNpczogMDtcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMDtcbiAgICBmbGV4LWJhc2lzOiAwO1xuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gICAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XG4gICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIG1heC13aWR0aDogMTAwJTtcbn1cbi5jYXJkLW1kIHtcbiAgICBtYXJnaW46IDFweDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDJweCk7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59IiwiLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1jaGlsZCB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMC41NXB4O1xuICAtLWJhY2tncm91bmQ6ICMzNzQ3Njc7XG59XG5cbi5oZWFkZXItbWQgaW9uLXRvb2xiYXI6bGFzdC1jaGlsZCB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMC41NXB4O1xuICAtLWJhY2tncm91bmQ6ICMzNzQ3Njc7XG59XG5cbi5ob21laWNvbiB7XG4gIG1heC13aWR0aDogMzAlO1xuICBib3JkZXI6IDA7XG4gIC8qIHdpZHRoOiAyMHB4OyAqL1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbnNlbGVjdC1pY29uLWlubmVyIHtcbiAgbGVmdDogLTVweDtcbiAgbWFyZ2luLXRvcDogLTZweDtcbiAgYm9yZGVyLXRvcDogMTRweCBzb2xpZDtcbiAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLnBvcG92ZXItY29udGVudCB7XG4gIG1pbi13aWR0aDogOTAlICFpbXBvcnRhbnQ7XG59XG5cbi5tZW51IHtcbiAgcGFkZGluZzogOHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5pb24tY2FyZCB7XG4gIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcbn1cblxuLmNvbCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBtaW4taGVpZ2h0OiAxcHg7XG4gIC13ZWJraXQtZmxleC1iYXNpczogMDtcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDA7XG4gIGZsZXgtYmFzaXM6IDA7XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gIC13ZWJraXQtZmxleC1ncm93OiAxO1xuICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcbiAgZmxleC1ncm93OiAxO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5jYXJkLW1kIHtcbiAgbWFyZ2luOiAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDJweCk7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var HomePage = /** @class */ (function () {
    function HomePage(activatedRoute, router, authservice, storage, menuCtrl, alertCtrl) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.authservice = authservice;
        this.storage = storage;
        this.menuCtrl = menuCtrl;
        this.alertCtrl = alertCtrl;
        // dealers: any[] = [
        //   {
        //     id: 1,
        //     name: 'Demo Dealer 1'
        //   },
        //   {
        //     id: 2,
        //     name:'Demo Dealer 2'
        //   },
        //   {
        //     id: 3,
        //     name:'Demo Dealer 3'
        //   },{
        //     id:4,
        //     name:'Demo Dealer 4'
        //   }
        // ];
        this.items = [{ "data": "Book Appointment", "img": "../assets/imgs/a_icon.png", "id": "1" },
            { "data": "View Appointment", "img": "../assets/imgs/v_icon.png", "id": "2" },
            { "data": "About Us", "img": "../assets/imgs/about_icon.png", "id": "3" },
            { "data": "Take Photo", "img": "../assets/imgs/img.png", "id": "7" },
            { "data": "Signature", "img": "../assets/imgs/sign.png", "id": "8" },
            { "data": "Video", "img": "../assets/imgs/video.png", "id": "9" }];
        this.menuCtrl.enable(true);
        this.activatedRoute.queryParams.subscribe(function (data) {
            console.log(data);
            _this.isEnabled = data.ISEnable;
        });
        this.grid = Array(Math.ceil(this.items.length / 3));
    }
    HomePage.prototype.selectoption = function (index) {
        console.log(index);
        if (index == 1) {
            this.router.navigateByUrl('/appointment');
        }
        if (index == 2) {
            this.router.navigateByUrl('/calender');
        }
        if (index == 7) {
            var object = {
                Page: "TakeImage"
            };
            this.router.navigate(['/searchappoinment'], { queryParams: object });
        }
        if (index == 8) {
            var object = {
                Page: "Signatue"
            };
            this.router.navigate(['/searchappoinment'], { queryParams: object });
        }
        if (index == 9) {
            var object = {
                Page: "Video"
            };
            this.router.navigate(['/searchappoinment'], { queryParams: object });
        }
    };
    HomePage.prototype.AddAppointment = function () {
        this.router.navigateByUrl('/appointment');
    };
    HomePage.prototype.GoToScheduler = function () {
        this.router.navigateByUrl('/calender');
    };
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        console.log("ionViewDidLoad call");
        this.storage.get('dealerid').then(function (val) {
            _this.dealers = _this.authservice.getdealers();
            console.log(_this.dealers);
            console.log('Your age is', val);
            _this.dealername = val;
            // console.log(this.dealerid);
        });
        var rowNum = 0; //counter to iterate over the rows in the grid
        for (var i = 0; i < this.items.length; i += 3) { //iterate images
            this.grid[rowNum] = Array(3); //declare two elements per row
            if (this.items[i]) { //check file URI exists
                this.grid[rowNum][0] = this.items[i]; //insert image
            }
            if (this.items[i + 1]) { //repeat for the second image
                this.grid[rowNum][1] = this.items[i + 1];
            }
            if (this.items[i + 2]) { //repeat for the second image
                this.grid[rowNum][2] = this.items[i + 2];
            }
            rowNum++; //go on to the next row
        }
    };
    HomePage.prototype.ChangeDealership = function (event) {
        this.storage.set("dealerid", event.detail.value);
    };
    HomePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map