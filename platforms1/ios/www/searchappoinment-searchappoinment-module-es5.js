(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["searchappoinment-searchappoinment-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/searchappoinment/searchappoinment.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/searchappoinment/searchappoinment.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n        <ion-toolbar>\n            <ion-buttons slot=\"start\">\n                <ion-back-button text=\"\" icon=\"ios-arrow-back\" style=\"color: #ffffff\"></ion-back-button>\n            </ion-buttons>\n            <ion-title style=\"color: #ffffff\">Appointment</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    \n    <ion-content>\n    \n        <ion-row>\n            <ion-col ion-item size=\"6\">            \n            <ion-datetime class=\"rawcss\" max=\"2025-12-31\" placeholder='Select Date' [(ngModel)]=\"currentdate\"  displayFormat=\"MM/DD/YYYY\" pickerFormat=\"MMMM DD YYYY\"\n           style=\"padding: 9px\"></ion-datetime>\n            </ion-col>\n            <ion-col ion-item size=\"6\">            \n                <ion-input  class=\"rawcss\" placeholder=\"Enter VIN\" [(ngModel)]=\"vin\"  maxlength=\"17\" minlength=\"17\"></ion-input>\n            </ion-col>\n        </ion-row>\n    \n        <ion-row>\n            <ion-col ion-item size=\"6\">            \n                <ion-input  class=\"rawcss\" placeholder=\"Enter First Name\" [(ngModel)]=\"fname\"></ion-input>\n            </ion-col>\n            <ion-col ion-item size=\"6\">            \n                <ion-input  class=\"rawcss\" placeholder=\"Enter Last Name\" [(ngModel)]=\"lname\"></ion-input>\n            </ion-col>\n        </ion-row>\n    \n      <ion-row>\n        <ion-col style=\"text-align: center;\">\n            <ion-button  class=\"footerbtn\" (click)=\"SearchAppointment()\">Search</ion-button>\n        </ion-col>\n      </ion-row>\n      \n      \n      <ion-list style=\"margin-left: 5px;margin-right: 5px;display: contents;\"  *ngIf=\"appointmentlist != null && IsShow == true\" >\n        <ion-item *ngFor=\"let item of appointmentlist\" (click)=\"GoToNext(item.AppointmentId,item.VIN)\">\n                <ion-row>\n                        <ion-col>\n                            <ion-label>\n                                <h4><b>{{item.PatientName}}</b></h4>\n                                <h3><b>VIN: </b>{{item.VIN}}</h3>\n                                <h3><b>Year: </b>{{item.Year}}</h3>\n                                <h3><b>Make: </b>{{item.Make}}</h3>\n                                <h3><b>Model: </b>{{item.Model}}</h3>\n                            </ion-label>\n                        </ion-col>\n                 </ion-row>\n        </ion-item>      \n    \n      </ion-list>\n\n      <p *ngIf=\"appointmentlist == null && IsShow == true\" style=\"text-align: center;font-size: 17px;color: red;\">No Data Found</p>\n    </ion-content>\n    "

/***/ }),

/***/ "./src/app/searchappoinment/searchappoinment.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/searchappoinment/searchappoinment.module.ts ***!
  \*************************************************************/
/*! exports provided: SearchappoinmentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchappoinmentPageModule", function() { return SearchappoinmentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _searchappoinment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./searchappoinment.page */ "./src/app/searchappoinment/searchappoinment.page.ts");







var routes = [
    {
        path: '',
        component: _searchappoinment_page__WEBPACK_IMPORTED_MODULE_6__["SearchappoinmentPage"]
    }
];
var SearchappoinmentPageModule = /** @class */ (function () {
    function SearchappoinmentPageModule() {
    }
    SearchappoinmentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_searchappoinment_page__WEBPACK_IMPORTED_MODULE_6__["SearchappoinmentPage"]]
        })
    ], SearchappoinmentPageModule);
    return SearchappoinmentPageModule;
}());



/***/ }),

/***/ "./src/app/searchappoinment/searchappoinment.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/searchappoinment/searchappoinment.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-ios ion-toolbar:last-child {\n  --border-width: 0 0 0.55px;\n  --background: #374767;\n}\n\n.header-md ion-toolbar:last-child {\n  --border-width: 0 0 0.55px;\n  --background: #374767;\n}\n\n.rawcss {\n  border: 1px solid #dddddd;\n  border-radius: 5px;\n}\n\n.labelcss {\n  padding-top: 14px;\n  font-size: 15px;\n}\n\n.footerbtn {\n  --background: #009688;\n  font-size: 11px;\n  padding: 4px;\n}\n\nion-item {\n  --inner-padding-end: 0px;\n  --padding-start:4px ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ibHVlYm94L0Rlc2t0b3AvYXBwb2ludG1lbnQxL3NyYy9hcHAvc2VhcmNoYXBwb2lubWVudC9zZWFyY2hhcHBvaW5tZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2VhcmNoYXBwb2lubWVudC9zZWFyY2hhcHBvaW5tZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLDBCQUFBO0VBQ0EscUJBQUE7QUNBSjs7QURHRTtFQUNFLDBCQUFBO0VBQ0EscUJBQUE7QUNBSjs7QURHRTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0VKOztBREFBO0VBQ0ksd0JBQUE7RUFDQSxvQkFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoYXBwb2lubWVudC9zZWFyY2hhcHBvaW5tZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LWNoaWxkIHtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAwIDAgMC41NXB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMzc0NzY3O1xyXG4gIH1cclxuICBcclxuICAuaGVhZGVyLW1kIGlvbi10b29sYmFyOmxhc3QtY2hpbGQge1xyXG4gICAgLS1ib3JkZXItd2lkdGg6IDAgMCAwLjU1cHg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMzNzQ3Njc7XHJcbiAgfVxyXG5cclxuICAucmF3Y3Nze1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4ubGFiZWxjc3N7XHJcbiAgICBwYWRkaW5nLXRvcDogMTRweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4uZm9vdGVyYnRue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA5Njg4O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG59XHJcbmlvbi1pdGVte1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OjRweFxyXG59IiwiLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1jaGlsZCB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMC41NXB4O1xuICAtLWJhY2tncm91bmQ6ICMzNzQ3Njc7XG59XG5cbi5oZWFkZXItbWQgaW9uLXRvb2xiYXI6bGFzdC1jaGlsZCB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMC41NXB4O1xuICAtLWJhY2tncm91bmQ6ICMzNzQ3Njc7XG59XG5cbi5yYXdjc3Mge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5sYWJlbGNzcyB7XG4gIHBhZGRpbmctdG9wOiAxNHB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5mb290ZXJidG4ge1xuICAtLWJhY2tncm91bmQ6ICMwMDk2ODg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZzogNHB4O1xufVxuXG5pb24taXRlbSB7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OjRweCA7XG59Il19 */"

/***/ }),

/***/ "./src/app/searchappoinment/searchappoinment.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/searchappoinment/searchappoinment.page.ts ***!
  \***********************************************************/
/*! exports provided: SearchappoinmentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchappoinmentPage", function() { return SearchappoinmentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_video_editor_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/video-editor/ngx */ "./node_modules/@ionic-native/video-editor/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/media-capture/ngx */ "./node_modules/@ionic-native/media-capture/ngx/index.js");









var SearchappoinmentPage = /** @class */ (function () {
    function SearchappoinmentPage(file, videoEditor, mediaCapture, activatedRoute, authservice, storage, datepipe, router) {
        var _this = this;
        this.file = file;
        this.videoEditor = videoEditor;
        this.mediaCapture = mediaCapture;
        this.activatedRoute = activatedRoute;
        this.authservice = authservice;
        this.storage = storage;
        this.datepipe = datepipe;
        this.router = router;
        this.IsShow = false;
        this.activatedRoute.queryParams.subscribe(function (data) {
            console.log(data);
            _this.Page = data.Page;
        });
    }
    SearchappoinmentPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('dealerid').then(function (val) {
            console.log('dealerid', val);
            _this.dealerid = val;
        });
    };
    SearchappoinmentPage.prototype.SearchAppointment = function () {
        var _this = this;
        if (this.currentdate == '' || this.currentdate == undefined || this.currentdate == null) {
            this.authservice.showToast("Select Date");
        }
        else {
            this.authservice.presentLoading();
            this.currentdate1 = this.datepipe.transform(this.currentdate, 'MM/dd/yyyy');
            console.log(this.currentdate1);
            this.authservice.SearchAppointment(this.currentdate1, this.dealerid, this.fname, this.lname, this.vin).subscribe(function (res) {
                _this.appointmentlist = res;
                _this.IsShow = true;
                console.log(_this.appointmentlist);
                _this.authservice.dismissLoading();
            });
        }
    };
    SearchappoinmentPage.prototype.GoToNext = function (AppointmentId, vin) {
        var _this = this;
        if (this.Page == "TakeImage") {
            this.router.navigate(['/takeimage'], { queryParams: { AppointmentId: AppointmentId, Page: this.Page, VIN: vin } });
        }
        if (this.Page == "Signatue") {
            this.router.navigate(['/signature'], { queryParams: { AppointmentId: AppointmentId, Page: this.Page, VIN: vin } });
        }
        if (this.Page == "Video") {
            this.mediaCapture.captureVideo()
                .then(function (data) {
                console.log(data);
                var fileName = data[0].name;
                var dir = data[0].localURL.split('/');
                dir.pop();
                var fromDirectory = dir.join('/');
                var toDirectory = _this.file.dataDirectory;
                _this.file.copyFile(fromDirectory, fileName, toDirectory, fileName).then(function (res) {
                    console.log('File successfully copied');
                    console.log(fromDirectory);
                    console.log(fileName);
                    console.log(toDirectory);
                    console.log(fileName);
                    _this.videoEditor.transcodeVideo({
                        fileUri: toDirectory + fileName,
                        outputFileName: data[0].name,
                        videoBitrate: 50000,
                        outputFileType: _this.videoEditor.OutputFileType.MPEG4
                    })
                        .then(function (fileUri) { return console.log('video1 transcode success', fileUri); })
                        .catch(function (error) { return console.log('video1 transcode error', error); });
                });
                //  this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + 'audioRecord.3gp'
                // this.router.navigate(['/playvideo']);
            }, function (err) { return console.error(err); });
        }
    };
    SearchappoinmentPage.ctorParameters = function () { return [
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"] },
        { type: _ionic_native_video_editor_ngx__WEBPACK_IMPORTED_MODULE_6__["VideoEditor"] },
        { type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_8__["MediaCapture"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    SearchappoinmentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-searchappoinment',
            template: __webpack_require__(/*! raw-loader!./searchappoinment.page.html */ "./node_modules/raw-loader/index.js!./src/app/searchappoinment/searchappoinment.page.html"),
            styles: [__webpack_require__(/*! ./searchappoinment.page.scss */ "./src/app/searchappoinment/searchappoinment.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"], _ionic_native_video_editor_ngx__WEBPACK_IMPORTED_MODULE_6__["VideoEditor"], _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_8__["MediaCapture"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], SearchappoinmentPage);
    return SearchappoinmentPage;
}());



/***/ })

}]);
//# sourceMappingURL=searchappoinment-searchappoinment-module-es5.js.map