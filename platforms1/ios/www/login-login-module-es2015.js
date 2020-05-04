(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content style=\"--background: #fff;\">\n\n<p style=\"margin: 15px;margin-top: 97px;font-size: 23px;font-family: auto;\">\n<b>APPOINTMENT</b>\n<br>\n<span style=\"color: #009688\">\n  <b>SYSTEM</b>\n</span>\n</p>\n<p style=\"margin: 15px;\nfont-size: 15px;color: #6d6c6c\">Please enter your credentials to login.</p>\n\n<form  [formGroup]=\"myForm\">\n<br>\n<ion-item>\n    <ion-input class=\"inputcss\" [(ngModel)]=\"username\" name=\"username\" type=\"text\" placeholder=\"Enter Username\" formControlName=\"username\"></ion-input>\n    <ion-icon name=\"person\" slot=\"end\" style=\"color: #009688\"></ion-icon>\n</ion-item>\n<ion-item>\n    <ion-input class=\"inputcss\" [(ngModel)]=\"password\" name=\"password\"  type=\"{{type}}\" placeholder=\"Enter Password\" formControlName=\"password\"></ion-input>\n    <ion-icon *ngIf=\"!showpass\" name=\"eye\" slot=\"end\" style=\"color: #009688\" (click)=\"showpassword()\"></ion-icon>\n    <ion-icon *ngIf=\"showpass\" name=\"eye-off\" slot=\"end\" style=\"color: #009688\" (click)=\"showpassword()\"></ion-icon>\n</ion-item>\n<br>\n</form>\n\n<ion-list lines=\"none\" >\n  <ion-item>\n    <ion-label>Remember me</ion-label>\n    <ion-checkbox slot=\"start\" color=\"dark\" mode=\"md\" style=\"margin-left: 90px;\" (ionChange)=\"rememberme($event)\" [(ngModel)]='isremember'></ion-checkbox>\n  </ion-item>\n</ion-list>\n<!-- <ion-row center style=\"margin-top: 20px;background: white;\"> -->\n    <!-- <ion-col col-4></ion-col> -->\n    <!-- <ion-col ion-item no-lines style=\"text-align: center\">\n      <ion-checkbox color=\"dark\" mode=\"md\" (ionChange)=\"rememberme($event)\" [(ngModel)]='isremember'></ion-checkbox>\n      <ion-label style=\"margin-left: 10px;\">Remember me</ion-label >\n    </ion-col>\n  </ion-row> -->\n<br>\n<div>\n    <button class=\"btnsubmit\" [disabled]=\"!isLogin()\" (click)=\"Login()\">Login</button>\n</div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]],
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".colcss {\n  border-bottom: 1px solid #c8c7cc;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.icon-inner, svg {\n  display: block;\n  height: 100%;\n  width: 100%;\n  color: #009688;\n}\n\nbutton[disabled], html input[disabled] {\n  cursor: default;\n  opacity: 0.5;\n}\n\n.labelcss {\n  font-size: 16px;\n  color: #009688;\n}\n\n.inputcss {\n  font-size: 16px;\n}\n\n.block {\n  position: relative;\n}\n\n.deleteIcon {\n  position: absolute !important;\n  color: red !important;\n  margin-left: 80% !important;\n}\n\n.deleteIcon:before {\n  font-size: 30px !important;\n}\n\n.header-md::after, .tabs-md[tabsPlacement=top] > .tabbar::after, .footer-md::before, .tabs-md[tabsPlacement=bottom] > .tabbar::before {\n  background-image: none;\n}\n\n.item-md.item-block .item-inner {\n  padding-right: 8px;\n  border-bottom: 1px solid #ccc7c7;\n}\n\n.item-md {\n  padding-right: 16px;\n}\n\n.toolbar-title-md {\n  font-size: 22px;\n}\n\n.labelcss {\n  color: #009688;\n}\n\n.btnsubmit {\n  margin: auto;\n  display: block;\n  height: 35px;\n  margin-bottom: 7px;\n  width: 95%;\n  font-size: 16px;\n  color: #fff;\n  border-radius: 10px;\n  background: #009688;\n}\n\n.gridcss {\n  position: absolute;\n  top: 50%;\n}\n\n.toolbar-content-md {\n  background-color: #ffffff;\n}\n\n.toolbar-background-md {\n  border-color: #ffffff;\n  background: #ffffff;\n}\n\n:host .item-interactive.ion-invalid {\n  --highlight-background: transparent !important;\n}\n\n:host .item-interactive.ion-valid {\n  --highlight-background: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ibHVlYm94L0Rlc2t0b3AvYXBwb2ludG1lbnQxL3NyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQ0k7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0VSOztBRENJO0VBQ0ksZUFBQTtBQ0VSOztBRENJO0VBQ0ksa0JBQUE7QUNFUjs7QURDSTtFQUNJLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtBQ0VSOztBRENJO0VBQ0ksMEJBQUE7QUNFUjs7QURDSTtFQUVBLHNCQUFBO0FDQ0o7O0FERUk7RUFDSSxrQkFBQTtFQUNBLGdDQUFBO0FDQ1I7O0FEQ0k7RUFDSSxtQkFBQTtBQ0VSOztBREFJO0VBQ0ksZUFBQTtBQ0dSOztBRERJO0VBQ0UsY0FBQTtBQ0lOOztBREZJO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDS1I7O0FESEk7RUFDSSxrQkFBQTtFQUNBLFFBQUE7QUNNUjs7QURKSTtFQUNJLHlCQUFBO0FDT1I7O0FESkk7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0FDT1I7O0FESFk7RUFDQyw4Q0FBQTtBQ01iOztBREpXO0VBQ0UsOENBQUE7QUNNYiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xjc3Mge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjOGM3Y2M7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxuXHJcbi5pY29uLWlubmVyLCBzdmcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjMDA5Njg4O1xyXG59XHJcbmJ1dHRvbltkaXNhYmxlZF0sIGh0bWwgaW5wdXRbZGlzYWJsZWRdIHtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuICAgIC5sYWJlbGNzcyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDA5Njg4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pbnB1dGNzcyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ibG9jayB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAuZGVsZXRlSWNvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4MCUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgLmRlbGV0ZUljb246YmVmb3JlIHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuaGVhZGVyLW1kOjphZnRlciwgLnRhYnMtbWRbdGFic1BsYWNlbWVudD1cInRvcFwiXSA+IC50YWJiYXI6OmFmdGVyLCAuZm9vdGVyLW1kOjpiZWZvcmUsIC50YWJzLW1kW3RhYnNQbGFjZW1lbnQ9XCJib3R0b21cIl0gPiAudGFiYmFyOjpiZWZvcmUge1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICAuaXRlbS1tZC5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M3Yzc7XHJcbiAgICB9XHJcbiAgICAuaXRlbS1tZCB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICAgIH1cclxuICAgIC50b29sYmFyLXRpdGxlLW1kIHtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB9XHJcbiAgICAubGFiZWxjc3N7XHJcbiAgICAgIGNvbG9yOiAjMDA5Njg4O1xyXG4gICAgfVxyXG4gICAgLmJ0bnN1Ym1pdHtcclxuICAgICAgICBtYXJnaW46YXV0bztcclxuICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDA5Njg4O1xyXG4gICAgfVxyXG4gICAgLmdyaWRjc3N7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgfVxyXG4gICAgLnRvb2xiYXItY29udGVudC1tZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIH1cclxuXHJcbiAgICAudG9vbGJhci1iYWNrZ3JvdW5kLW1kIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDpob3N0IHtcclxuICAgICAgICAgICAgLml0ZW0taW50ZXJhY3RpdmUuaW9uLWludmFsaWR7XHJcbiAgICAgICAgICAgICAtLWhpZ2hsaWdodC1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICAuaXRlbS1pbnRlcmFjdGl2ZS5pb24tdmFsaWR7XHJcbiAgICAgICAgICAgICAtLWhpZ2hsaWdodC1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICAiLCIuY29sY3NzIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjOGM3Y2M7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5pY29uLWlubmVyLCBzdmcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICMwMDk2ODg7XG59XG5cbmJ1dHRvbltkaXNhYmxlZF0sIGh0bWwgaW5wdXRbZGlzYWJsZWRdIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5sYWJlbGNzcyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMwMDk2ODg7XG59XG5cbi5pbnB1dGNzcyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmJsb2NrIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZGVsZXRlSWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiA4MCUgIWltcG9ydGFudDtcbn1cblxuLmRlbGV0ZUljb246YmVmb3JlIHtcbiAgZm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItbWQ6OmFmdGVyLCAudGFicy1tZFt0YWJzUGxhY2VtZW50PXRvcF0gPiAudGFiYmFyOjphZnRlciwgLmZvb3Rlci1tZDo6YmVmb3JlLCAudGFicy1tZFt0YWJzUGxhY2VtZW50PWJvdHRvbV0gPiAudGFiYmFyOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xufVxuXG4uaXRlbS1tZC5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYzdjNztcbn1cblxuLml0ZW0tbWQge1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG4udG9vbGJhci10aXRsZS1tZCB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLmxhYmVsY3NzIHtcbiAgY29sb3I6ICMwMDk2ODg7XG59XG5cbi5idG5zdWJtaXQge1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDM1cHg7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbiAgd2lkdGg6IDk1JTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogIzAwOTY4ODtcbn1cblxuLmdyaWRjc3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xufVxuXG4udG9vbGJhci1jb250ZW50LW1kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLnRvb2xiYXItYmFja2dyb3VuZC1tZCB7XG4gIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cblxuOmhvc3QgLml0ZW0taW50ZXJhY3RpdmUuaW9uLWludmFsaWQge1xuICAtLWhpZ2hsaWdodC1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuOmhvc3QgLml0ZW0taW50ZXJhY3RpdmUuaW9uLXZhbGlkIHtcbiAgLS1oaWdobGlnaHQtYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let LoginPage = class LoginPage {
    constructor(toastController, router, loadingController, authservice, storage, menuCtrl) {
        this.toastController = toastController;
        this.router = router;
        this.loadingController = loadingController;
        this.authservice = authservice;
        this.storage = storage;
        this.menuCtrl = menuCtrl;
        this.isremember = false;
        this.islogin = false;
        this.showpass = false;
        this.type = 'password';
        this.menuCtrl.enable(false);
    }
    ngOnInit() {
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            // name: new FormControl('', [Validators.required, Validators.minLength(1)]),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                // Validators.minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
            ])),
        });
    }
    ionViewWillEnter() {
        this.storage.get('email').then((val) => {
            console.log(val);
            if (val != '') {
                this.username = val;
            }
            else {
                this.username = "";
            }
        });
        this.storage.get('password').then((val) => {
            console.log(val);
            if (val != '') {
                this.password = val;
            }
            else {
                this.password = "";
            }
            if (this.password != '') {
                this.isremember = true;
            }
            else {
                this.isremember = false;
            }
        });
    }
    showpassword() {
        this.showpass = !this.showpass;
        if (this.showpass) {
            this.type = 'text';
        }
        else {
            this.type = 'password';
        }
    }
    Login() {
        if (this.username == '' || this.username == undefined || this.username == null) {
            this.authservice.showToast("Please Enter Username");
        }
        else if (this.password == '' || this.password == undefined || this.password == null) {
            this.authservice.showToast("Please Enter Password");
        }
        else {
            this.authservice.presentLoading();
            this.authservice.doLogin(this.username, this.password).subscribe(res => {
                this.res = res;
                if (this.res.Code == 200) {
                    this.storage.set("userid", this.res.pkemployeeid);
                    this.storage.set("dealerid", this.res.DealershipId);
                    this.dealers = this.authservice.getdealers();
                    for (let i = 0; i < this.dealers.length; i++) {
                        if (this.dealers[i].DealershipId == this.res.DealershipId) {
                            this.dealername = this.dealers[i].DealershipName;
                            console.log(this.dealername);
                            this.storage.set("dealername", this.dealername);
                        }
                    }
                    if (this.res.DesignationName == "General Manager") {
                        this.ISEnable = false;
                    }
                    else {
                        this.ISEnable = true;
                    }
                    let object = {
                        ISEnable: this.ISEnable
                    };
                    this.authservice.dismissLoading();
                    this.storage.set('islogin', true);
                    this.router.navigate(['/home'], { queryParams: object });
                }
                else if (this.res.Code == 400) {
                    this.authservice.dismissLoading();
                    this.authservice.showToast(this.res.msg);
                }
            });
        }
    }
    isLogin() {
        if (this.myForm.valid) {
            return true;
        }
        else {
            return false;
        }
    }
    rememberme(event) {
        console.log(event);
        if (event.detail.checked == true) {
            console.log('enter in');
            this.storage.set('email', this.username);
            this.storage.set('password', this.password);
        }
        else {
            this.storage.set('email', '');
            this.storage.set('password', '');
        }
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _app_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"], _app_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map