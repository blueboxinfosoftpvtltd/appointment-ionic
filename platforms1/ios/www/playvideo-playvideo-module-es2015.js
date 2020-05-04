(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["playvideo-playvideo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/playvideo/playvideo.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/playvideo/playvideo.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>playvideo</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/playvideo/playvideo.module.ts":
/*!***********************************************!*\
  !*** ./src/app/playvideo/playvideo.module.ts ***!
  \***********************************************/
/*! exports provided: PlayvideoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayvideoPageModule", function() { return PlayvideoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _playvideo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./playvideo.page */ "./src/app/playvideo/playvideo.page.ts");







const routes = [
    {
        path: '',
        component: _playvideo_page__WEBPACK_IMPORTED_MODULE_6__["PlayvideoPage"]
    }
];
let PlayvideoPageModule = class PlayvideoPageModule {
};
PlayvideoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_playvideo_page__WEBPACK_IMPORTED_MODULE_6__["PlayvideoPage"]]
    })
], PlayvideoPageModule);



/***/ }),

/***/ "./src/app/playvideo/playvideo.page.scss":
/*!***********************************************!*\
  !*** ./src/app/playvideo/playvideo.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYXl2aWRlby9wbGF5dmlkZW8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/playvideo/playvideo.page.ts":
/*!*********************************************!*\
  !*** ./src/app/playvideo/playvideo.page.ts ***!
  \*********************************************/
/*! exports provided: PlayvideoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayvideoPage", function() { return PlayvideoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_video_player_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/video-player/ngx */ "./node_modules/@ionic-native/video-player/ngx/index.js");



let PlayvideoPage = class PlayvideoPage {
    constructor(videoPlayer) {
        this.videoPlayer = videoPlayer;
        this.videoPlayer.play('http://clips.vorwaerts-gmbh.de/VfE_html5.mp4').then(() => {
            console.log('video completed');
        }).catch(err => {
            console.log(err);
        });
    }
    ngOnInit() {
    }
};
PlayvideoPage.ctorParameters = () => [
    { type: _ionic_native_video_player_ngx__WEBPACK_IMPORTED_MODULE_2__["VideoPlayer"] }
];
PlayvideoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-playvideo',
        template: __webpack_require__(/*! raw-loader!./playvideo.page.html */ "./node_modules/raw-loader/index.js!./src/app/playvideo/playvideo.page.html"),
        styles: [__webpack_require__(/*! ./playvideo.page.scss */ "./src/app/playvideo/playvideo.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_video_player_ngx__WEBPACK_IMPORTED_MODULE_2__["VideoPlayer"]])
], PlayvideoPage);



/***/ })

}]);
//# sourceMappingURL=playvideo-playvideo-module-es2015.js.map