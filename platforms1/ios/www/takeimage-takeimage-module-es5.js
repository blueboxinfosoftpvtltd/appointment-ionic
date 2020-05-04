(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["takeimage-takeimage-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/takeimage/takeimage.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/takeimage/takeimage.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button text=\"\" icon=\"ios-arrow-back\" style=\"color: #ffffff\"></ion-back-button>\n        </ion-buttons>\n      <ion-title style=\"color: #ffffff\">Take Image</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n  <ion-row class=\"rowcss scroll\" style=\"background-image: url(../assets/imgs/c.png);margin-bottom: 20%\">\n  \n   <ion-row class=\"rowone\">\n     <ion-col>\n       <ion-card>\n          <ion-row>\n          <img src=\"{{captureDataUrl1}}\" class=\"imgcss\" \n            (click)=\"openeditprofile('1')\" onerror=\"this.onerror=null;this.src='../assets/imgs/dd.png';\">\n          </ion-row>\n        <ion-row class=\"rowtwo\">\n            <ion-col class=\"colcss\">\n         Left Front\n          </ion-col>\n          </ion-row>\n       </ion-card>\n     </ion-col>\n  \n     <ion-col>\n        <ion-card>\n            <ion-row>\n           <img src=\"{{captureDataUrl2}}\" class=\"imgcss\"\n             (click)=\"openeditprofile('2')\" onerror=\"this.onerror=null;this.src='../assets/imgs/dd.png';\">\n        </ion-row>\n        <ion-row class=\"rowtwo\">\n            <ion-col class=\"colcss\">\n          Front\n          </ion-col>\n          </ion-row>\n            </ion-card>\n      </ion-col>\n  \n      <ion-col>\n          <ion-card>\n              <ion-row>\n             <img src=\"{{captureDataUrl3}}\" class=\"imgcss\"\n               (click)=\"openeditprofile('3')\" onerror=\"this.onerror=null;this.src='../assets/imgs/dd.png';\">\n               </ion-row>\n               <ion-row class=\"rowtwo\">\n                  <ion-col class=\"colcss\">\n               Right Front\n                </ion-col>\n                </ion-row>\n              </ion-card>\n        </ion-col>\n   </ion-row>\n  \n  \n  <ion-row class=\"rowone\">\n      <ion-col>\n        <ion-card>\n            <ion-row>\n           <img src=\"{{captureDataUrl4}}\" class=\"imgcss\"\n             (click)=\"openeditprofile('4')\" onerror=\"this.onerror=null;this.src='../assets/imgs/dd.png';\">\n        </ion-row>\n        <ion-row class=\"rowtwo\">\n            <ion-col class=\"colcss\">\n         Left Fender\n          </ion-col>\n          </ion-row>\n            </ion-card>\n      </ion-col>\n      <ion-col>\n         </ion-col>\n      <ion-col>\n         <ion-card>\n            <ion-row>\n            <img src=\"{{captureDataUrl5}}\" class=\"imgcss\"\n              (click)=\"openeditprofile('5')\" onerror=\"this.onerror=null;this.src='../assets/imgs/dd.png';\">\n              </ion-row>\n              <ion-row class=\"rowtwo\">\n                  <ion-col class=\"colcss\">\n               Right Fender\n                </ion-col>\n                </ion-row>\n            </ion-card>\n       </ion-col>   \n    </ion-row>\n  \n    <ion-row class=\"rowone\">\n        <ion-col>\n          <ion-card>\n              <ion-row>\n             <img src=\"{{captureDataUrl6}}\" class=\"imgcss\"\n               (click)=\"openeditprofile('6')\" onerror=\"this.onerror=null;this.src='../assets/imgs/dd.png';\">\n               </ion-row>\n               <ion-row class=\"rowtwo\">\n                  <ion-col class=\"colcss\">\n               Left Side\n                </ion-col>\n                </ion-row>\n              </ion-card>\n        </ion-col>\n        <ion-col>\n        \n          </ion-col>\n        <ion-col>\n           <ion-card>\n              <ion-row>\n              <img src=\"{{captureDataUrl7}}\" class=\"imgcss\"\n                (click)=\"openeditprofile('7')\" onerror=\"this.onerror=null;this.src='../assets/imgs/dd.png';\">\n              </ion-row>\n              <ion-row class=\"rowtwo\">\n                 <ion-col class=\"colcss\">\n              Right Side\n               </ion-col>\n               </ion-row>\n              </ion-card>\n         </ion-col>     \n      </ion-row>\n  \n      <ion-row class=\"rowone\">\n          <ion-col>\n            <ion-card>\n                <ion-row>\n               <img src=\"{{captureDataUrl8}}\" class=\"imgcss\"\n                 (click)=\"openeditprofile('8')\" onerror=\"this.onerror=null;this.src='../assets/imgs/dd.png';\">\n                </ion-row>\n                <ion-row class=\"rowtwo\">\n                   <ion-col class=\"colcss\">\n                Left OP\n                 </ion-col>\n                 </ion-row>\n                </ion-card>\n          </ion-col>\n     \n          <ion-col>\n          </ion-col>\n     \n           <ion-col>\n               <ion-card>\n                  <ion-row>\n                  <img src=\"{{captureDataUrl9}}\" class=\"imgcss\"\n                    (click)=\"openeditprofile('9')\" onerror=\"this.onerror=null;this.src='../assets/imgs/dd.png';\">\n                  </ion-row>\n                  <ion-row class=\"rowtwo\">\n                     <ion-col class=\"colcss\">\n                  Right OP\n                   </ion-col>\n                   </ion-row>\n                  </ion-card>\n             </ion-col>\n        </ion-row>\n  \n        <ion-row class=\"rowone\">\n            <ion-col>\n              <ion-card>\n                  <ion-row>\n                 <img src=\"{{captureDataUrl10}}\" class=\"imgcss\"\n                   (click)=\"openeditprofile('10')\" onerror=\"this.onerror=null;this.src='../assets/imgs/dd.png';\">\n                  </ion-row>\n                  <ion-row class=\"rowtwo\">\n                     <ion-col class=\"colcss\">\n                  Left Rear\n                   </ion-col>\n                   </ion-row>\n                  </ion-card>\n            </ion-col>\n       \n            <ion-col>\n               <ion-card>\n                  <ion-row>\n                  <img src=\"{{captureDataUrl11}}\" class=\"imgcss\"\n                    (click)=\"openeditprofile('11')\" onerror=\"this.onerror=null;this.src='../assets/imgs/dd.png';\">\n                  </ion-row>\n                  <ion-row class=\"rowtwo\">\n                     <ion-col class=\"colcss\">\n                   Rear\n                   </ion-col>\n                   </ion-row>\n                  </ion-card>\n             </ion-col>\n       \n             <ion-col>\n                 <ion-card>\n                    <ion-row>\n                    <img src=\"{{captureDataUrl12}}\" class=\"imgcss\"\n                      (click)=\"openeditprofile('12')\" onerror=\"this.onerror=null;this.src='../assets/imgs/dd.png';\">\n                    </ion-row>\n                    <ion-row class=\"rowtwo\">\n                       <ion-col class=\"colcss\">\n                    Right Rear\n                     </ion-col>\n                     </ion-row>\n                    </ion-card>\n               </ion-col>\n          </ion-row>\n       \n   </ion-row>\n  \n  </ion-content>\n  \n  <ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"full\" class=\"footerbtn\" (click)=\"Next()\" *ngIf=\"!Page\">Next</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button expand=\"full\" class=\"footerbtn\" (click)=\"skip()\" *ngIf=\"!Page\">Skip</ion-button>\n      </ion-col>\n    </ion-row>\n   \n    <ion-button expand=\"full\" class=\"footerbtn\" (click)=\"Save()\" *ngIf=\"Page\">Save</ion-button>\n  </ion-toolbar>\n  </ion-footer>\n  "

/***/ }),

/***/ "./src/app/takeimage/takeimage.module.ts":
/*!***********************************************!*\
  !*** ./src/app/takeimage/takeimage.module.ts ***!
  \***********************************************/
/*! exports provided: TakeimagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TakeimagePageModule", function() { return TakeimagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _takeimage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./takeimage.page */ "./src/app/takeimage/takeimage.page.ts");







var routes = [
    {
        path: '',
        component: _takeimage_page__WEBPACK_IMPORTED_MODULE_6__["TakeimagePage"]
    }
];
var TakeimagePageModule = /** @class */ (function () {
    function TakeimagePageModule() {
    }
    TakeimagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_takeimage_page__WEBPACK_IMPORTED_MODULE_6__["TakeimagePage"]]
        })
    ], TakeimagePageModule);
    return TakeimagePageModule;
}());



/***/ }),

/***/ "./src/app/takeimage/takeimage.page.scss":
/*!***********************************************!*\
  !*** ./src/app/takeimage/takeimage.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-ios ion-toolbar:last-child {\n  --border-width: 0 0 0.55px;\n  --background: #374767;\n}\n\n.header-md ion-toolbar:last-child {\n  --border-width: 0 0 0.55px;\n  --background: #374767;\n}\n\n.footerbtn {\n  --background: #009688;\n}\n\n.scroll {\n  width: 100%;\n  height: 100vh;\n  margin-top: 5%;\n  margin: 5px;\n  margin-bottom: 30%;\n}\n\ncanvas {\n  border: 1px solid #333;\n}\n\ndiv.cn {\n  position: relative;\n  width: 500px;\n  height: 500px;\n  background: gray;\n}\n\ndiv.inner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  background: gold;\n  padding: 2rem;\n}\n\nimg {\n  border-radius: 50%;\n}\n\n.commentText {\n  position: absolute;\n  top: 60px;\n  left: 30px;\n  color: white;\n}\n\nion-footer {\n  left: 0;\n  bottom: 0;\n  position: absolute;\n  z-index: 10;\n  display: block;\n  width: 100%;\n  text-align: center;\n}\n\n.rowcss {\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-color: #fff;\n}\n\n.rowone {\n  height: 110px;\n  overflow: hidden;\n}\n\n.imgcss {\n  border-radius: 0px;\n}\n\n.colcss {\n  text-align: center;\n  color: #fff;\n  font-size: 13px;\n}\n\n.rowtwo {\n  background: #757373;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ibHVlYm94L0Rlc2t0b3AvYXBwb2ludG1lbnQxL3NyYy9hcHAvdGFrZWltYWdlL3Rha2VpbWFnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3Rha2VpbWFnZS90YWtlaW1hZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksMEJBQUE7RUFDQSxxQkFBQTtBQ0FKOztBREdFO0VBQ0UsMEJBQUE7RUFDQSxxQkFBQTtBQ0FKOztBREVFO0VBQ0UscUJBQUE7QUNDSjs7QURDQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0VKOztBREFBO0VBQ0ksc0JBQUE7QUNHSjs7QUREQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0lKOztBRERBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQVUsU0FBQTtFQUNWLHdDQUFBO1VBQUEsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNLSjs7QURIQTtFQUNJLGtCQUFBO0FDTUo7O0FESkE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ09KOztBRExBO0VBQ0ksT0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDUUo7O0FETkE7RUFDRSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFFQSxzQkFBQTtBQ1FGOztBRE5BO0VBQ0ksYUFBQTtFQUFjLGdCQUFBO0FDVWxCOztBRFJBO0VBQ0ksa0JBQUE7QUNXSjs7QURUQTtFQUNJLGtCQUFBO0VBQW1CLFdBQUE7RUFBWSxlQUFBO0FDY25DOztBRFpBO0VBQ0ksbUJBQUE7QUNlSiIsImZpbGUiOiJzcmMvYXBwL3Rha2VpbWFnZS90YWtlaW1hZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3QtY2hpbGQge1xyXG4gICAgLS1ib3JkZXItd2lkdGg6IDAgMCAwLjU1cHg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMzNzQ3Njc7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkZXItbWQgaW9uLXRvb2xiYXI6bGFzdC1jaGlsZCB7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMCAwIDAuNTVweDtcclxuICAgIC0tYmFja2dyb3VuZDogIzM3NDc2NztcclxuICB9XHJcbiAgLmZvb3RlcmJ0bntcclxuICAgIC0tYmFja2dyb3VuZDogIzAwOTY4ODtcclxufVxyXG4uc2Nyb2xsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMCU7XHJcbn1cclxuY2FudmFzIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XHJcbn1cclxuZGl2LmNuIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBncmF5O1xyXG59XHJcblxyXG5kaXYuaW5uZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7IGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiBnb2xkO1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxufVxyXG5pbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlOyAgIFxyXG59XHJcbi5jb21tZW50VGV4dHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNjBweDtcclxuICAgIGxlZnQ6IDMwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuaW9uLWZvb3RlciB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTA7IFxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucm93Y3Nze1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuLnJvd29uZXtcclxuICAgIGhlaWdodDogMTEwcHg7b3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uaW1nY3Nze1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG59XHJcbi5jb2xjc3N7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7Y29sb3I6ICNmZmY7Zm9udC1zaXplOiAxM3B4O1xyXG59XHJcbi5yb3d0d297XHJcbiAgICBiYWNrZ3JvdW5kOiAjNzU3MzczO1xyXG59IiwiLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1jaGlsZCB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMC41NXB4O1xuICAtLWJhY2tncm91bmQ6ICMzNzQ3Njc7XG59XG5cbi5oZWFkZXItbWQgaW9uLXRvb2xiYXI6bGFzdC1jaGlsZCB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwIDAgMC41NXB4O1xuICAtLWJhY2tncm91bmQ6ICMzNzQ3Njc7XG59XG5cbi5mb290ZXJidG4ge1xuICAtLWJhY2tncm91bmQ6ICMwMDk2ODg7XG59XG5cbi5zY3JvbGwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIG1hcmdpbjogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAzMCU7XG59XG5cbmNhbnZhcyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XG59XG5cbmRpdi5jbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kOiBncmF5O1xufVxuXG5kaXYuaW5uZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBiYWNrZ3JvdW5kOiBnb2xkO1xuICBwYWRkaW5nOiAycmVtO1xufVxuXG5pbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5jb21tZW50VGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2MHB4O1xuICBsZWZ0OiAzMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1mb290ZXIge1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucm93Y3NzIHtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4ucm93b25lIHtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmltZ2NzcyB7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cblxuLmNvbGNzcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnJvd3R3byB7XG4gIGJhY2tncm91bmQ6ICM3NTczNzM7XG59Il19 */"

/***/ }),

/***/ "./src/app/takeimage/takeimage.page.ts":
/*!*********************************************!*\
  !*** ./src/app/takeimage/takeimage.page.ts ***!
  \*********************************************/
/*! exports provided: TakeimagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TakeimagePage", function() { return TakeimagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _highlightimage_highlightimage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../highlightimage/highlightimage.page */ "./src/app/highlightimage/highlightimage.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");









var TakeimagePage = /** @class */ (function () {
    function TakeimagePage(activatedRoute, toastCtrl, loadingCtrl, actionSheetCtrl, file, camera, modalCtrl, router, authservice, storage) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.file = file;
        this.camera = camera;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.authservice = authservice;
        this.storage = storage;
        this.colors = ['#9e2956', '#c2281d', '#de722f', '#edbf4c', '#5db37e', '#459cde', '#4250ad', '#802fa3'];
        this.selectedColor = '#9e2956';
        this.CompleteImage = [];
        this.displayorder = [];
        this.imageArray = [];
        // this.OpenModel('dnc',"1");
        this.activatedRoute.queryParams.subscribe(function (data) {
            console.log(data);
            _this.AppointmentId = data.AppointmentId;
            _this.Page = data.Page;
            _this.VIN = data.VIN;
            _this.backpage = data.backpage;
        });
        console.log(this.AppointmentId);
    }
    TakeimagePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('dealerid').then(function (val) {
            _this.delarid = val;
            // console.log(this.dealerid);
        });
        this.storage.get('userid').then(function (val) {
            _this.userid = val;
            // console.log(this.dealerid);
        });
    };
    // img(e){
    //   let elem = e.target,
    //   imageIndex = parseInt(elem.dataset.img,10);
    //   if( imageIndex <= (this.imageArray.length -1) ) {
    //       elem.src = this.imageArray[imageIndex++];
    //       elem.dataset.img = imageIndex;
    //   } else {
    //       elem.src = this.imageArray[0];
    //       elem.dataset.img = 1;
    //   }
    // }
    TakeimagePage.prototype.openeditprofile = function (i) {
        if (i == 1) {
            if (this.captureDataUrl1 == undefined) {
                this.presentactionsheet(i);
            }
            else {
                this.OpenModel(this.captureDataUrl1, i);
            }
        }
        else if (i == 2) {
            if (this.captureDataUrl2 == undefined) {
                this.presentactionsheet(i);
            }
            else {
                this.OpenModel(this.captureDataUrl2, i);
            }
        }
        else if (i == 3) {
            if (this.captureDataUrl3 == undefined) {
                this.presentactionsheet(i);
            }
            else {
                this.OpenModel(this.captureDataUrl3, i);
            }
        }
        else if (i == 4) {
            if (this.captureDataUrl4 == undefined) {
                this.presentactionsheet(i);
            }
            else {
                this.OpenModel(this.captureDataUrl4, i);
            }
        }
        else if (i == 5) {
            if (this.captureDataUrl5 == undefined) {
                this.presentactionsheet(i);
            }
            else {
                this.OpenModel(this.captureDataUrl5, i);
            }
        }
        else if (i == 6) {
            if (this.captureDataUrl6 == undefined) {
                this.presentactionsheet(i);
            }
            else {
                this.OpenModel(this.captureDataUrl6, i);
            }
        }
        else if (i == 7) {
            if (this.captureDataUrl7 == undefined) {
                this.presentactionsheet(i);
            }
            else {
                this.OpenModel(this.captureDataUrl7, i);
            }
        }
        else if (i == 8) {
            if (this.captureDataUrl8 == undefined) {
                this.presentactionsheet(i);
            }
            else {
                this.OpenModel(this.captureDataUrl8, i);
            }
        }
        else if (i == 9) {
            if (this.captureDataUrl9 == undefined) {
                this.presentactionsheet(i);
            }
            else {
                this.OpenModel(this.captureDataUrl9, i);
            }
        }
        else if (i == 10) {
            if (this.captureDataUrl10 == undefined) {
                this.presentactionsheet(i);
            }
            else {
                this.OpenModel(this.captureDataUrl10, i);
            }
        }
        else if (i == 11) {
            if (this.captureDataUrl11 == undefined) {
                this.presentactionsheet(i);
            }
            else {
                this.OpenModel(this.captureDataUrl11, i);
            }
        }
        else if (i == 12) {
            if (this.captureDataUrl12 == undefined) {
                this.presentactionsheet(i);
            }
            else {
                this.OpenModel(this.captureDataUrl12, i);
            }
        }
        else if (i == 13) {
            if (this.captureDataUrl13 == undefined) {
                this.presentactionsheet(i);
            }
            else {
                this.OpenModel(this.captureDataUrl13, i);
            }
        }
    };
    TakeimagePage.prototype.presentactionsheet = function (i) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetCtrl.create({
                            header: 'Option',
                            cssClass: 'action-sheets-basic-page',
                            buttons: [
                                {
                                    text: 'Take photo',
                                    role: 'destructive',
                                    handler: function () {
                                        _this.takephoto(i);
                                    }
                                },
                                {
                                    text: 'Choose photo from Gallery',
                                    handler: function () {
                                        _this.openGallery(i);
                                    }
                                },
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        actionSheet.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    TakeimagePage.prototype.OpenModel = function (img, i) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _highlightimage_highlightimage_page__WEBPACK_IMPORTED_MODULE_6__["HighlightimagePage"],
                            componentProps: {
                                "paramID": i,
                                "paramImage": img
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (dataReturned) {
                            if (dataReturned !== null) {
                                _this.dataReturned = dataReturned.data;
                                console.log(dataReturned);
                                if (_this.dataReturned.ID == 1) {
                                    _this.captureDataUrl1 = _this.dataReturned.Image;
                                    _this.Id1 = _this.dataReturned.ID;
                                }
                                if (_this.dataReturned.ID == 2) {
                                    _this.captureDataUrl2 = _this.dataReturned.Image;
                                    _this.Id2 = _this.dataReturned.ID;
                                }
                                if (_this.dataReturned.ID == 3) {
                                    _this.captureDataUrl3 = _this.dataReturned.Image;
                                    _this.Id3 = _this.dataReturned.ID;
                                }
                                if (_this.dataReturned.ID == 4) {
                                    _this.captureDataUrl4 = _this.dataReturned.Image;
                                    _this.Id4 = _this.dataReturned.ID;
                                }
                                if (_this.dataReturned.ID == 5) {
                                    _this.captureDataUrl5 = _this.dataReturned.Image;
                                    _this.Id5 = _this.dataReturned.ID;
                                }
                                if (_this.dataReturned.ID == 6) {
                                    _this.captureDataUrl6 = _this.dataReturned.Image;
                                    _this.Id6 = _this.dataReturned.ID;
                                }
                                if (_this.dataReturned.ID == 7) {
                                    _this.captureDataUrl7 = _this.dataReturned.Image;
                                    _this.Id7 = _this.dataReturned.ID;
                                }
                                if (_this.dataReturned.ID == 8) {
                                    _this.captureDataUrl8 = _this.dataReturned.Image;
                                    _this.Id8 = _this.dataReturned.ID;
                                }
                                if (_this.dataReturned.ID == 9) {
                                    _this.captureDataUrl9 = _this.dataReturned.Image;
                                    _this.Id9 = _this.dataReturned.ID;
                                }
                                if (_this.dataReturned.ID == 10) {
                                    _this.captureDataUrl10 = _this.dataReturned.Image;
                                    _this.Id10 = _this.dataReturned.ID;
                                }
                                if (_this.dataReturned.ID == 11) {
                                    _this.captureDataUrl11 = _this.dataReturned.Image;
                                    _this.Id11 = _this.dataReturned.ID;
                                }
                                if (_this.dataReturned.ID == 12) {
                                    _this.captureDataUrl12 = _this.dataReturned.Image;
                                    _this.Id12 = _this.dataReturned.ID;
                                }
                                if (_this.dataReturned.ID == 13) {
                                    _this.captureDataUrl13 = _this.dataReturned.Image;
                                    _this.Id13 = _this.dataReturned.ID;
                                }
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TakeimagePage.prototype.takephoto = function (i) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var cameraOptions;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                cameraOptions = {
                    quality: 100,
                    sourceType: this.camera.PictureSourceType.CAMERA,
                    destinationType: this.camera.DestinationType.DATA_URL,
                    encodingType: this.camera.EncodingType.JPEG,
                    mediaType: this.camera.MediaType.PICTURE,
                    targetWidth: 500,
                    targetHeight: 500
                };
                this.camera.getPicture(cameraOptions)
                    .then(function (captureDataUrl) {
                    if (_this.camera.PictureSourceType.CAMERA) {
                        _this.captureDataUrl = 'data:image/jpeg;base64,' + captureDataUrl;
                        // let object = {
                        //   ImagePath : captureDataUrl,
                        //   displayorder: i
                        // }
                        _this.CompleteImage.push(captureDataUrl);
                        _this.displayorder.push(i);
                        _this.OpenModel(_this.captureDataUrl, i);
                    }
                }, function (err) {
                    console.log(err);
                });
                return [2 /*return*/];
            });
        });
    };
    TakeimagePage.prototype.openGallery = function (i) {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            // allowEdit: true,
            targetWidth: 500,
            targetHeight: 500
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
            var object = {
                ImagePath: imageData,
                displayorder: i
            };
            _this.CompleteImage.push(imageData);
            _this.displayorder.push(i);
            _this.OpenModel(_this.captureDataUrl, i);
            console.log(_this.captureDataUrl);
        }, function (err) {
        });
    };
    TakeimagePage.prototype.show = function () {
        console.log(this.imageArray);
    };
    TakeimagePage.prototype.Next = function () {
        var _this = this;
        console.log(this.CompleteImage);
        // this.router.navigateByUrl('/signature');
        this.takeimage = this.CompleteImage.join();
        this.takeorder = this.displayorder.join();
        if (this.CompleteImage.length == 0) {
            this.authservice.showToast("Select Image First");
        }
        else {
            this.authservice.presentLoading();
            this.authservice.CarImageInsert(this.delarid, this.AppointmentId, this.VIN, this.userid, "0", this.takeimage, this.takeorder).subscribe(function (res) {
                _this.data = res;
                console.log(_this.data);
                _this.authservice.dismissLoading();
                _this.authservice.showToast(_this.data.Message);
                _this.router.navigate(['/signature'], { queryParams: { AppointmentId: _this.AppointmentId, Page: "Signatue", VIN: _this.VIN } });
            });
        }
    };
    TakeimagePage.prototype.skip = function () {
        this.router.navigate(['/signature'], { queryParams: { AppointmentId: this.AppointmentId, Page: "Signatue", VIN: this.VIN } });
    };
    TakeimagePage.prototype.Save = function () {
        var _this = this;
        console.log(this.CompleteImage);
        this.takeimage = this.CompleteImage.join();
        this.takeorder = this.displayorder.join();
        if (this.CompleteImage.length == 0) {
            this.authservice.showToast("Select Image First");
        }
        else {
            this.authservice.presentLoading();
            this.authservice.CarImageInsert(this.delarid, this.AppointmentId, this.VIN, this.userid, "0", this.takeimage, this.takeorder).subscribe(function (res) {
                _this.data = res;
                console.log(_this.data);
                _this.authservice.dismissLoading();
                _this.authservice.showToast(_this.data.Message);
                _this.router.navigate(['/signature'], { queryParams: { AppointmentId: _this.AppointmentId, Page: _this.Page, VIN: _this.VIN } });
            });
        }
    };
    TakeimagePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('radioGroup', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRadioGroup"])
    ], TakeimagePage.prototype, "radioGroup", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('layout1', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TakeimagePage.prototype, "canvasRef", void 0);
    TakeimagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-takeimage',
            template: __webpack_require__(/*! raw-loader!./takeimage.page.html */ "./node_modules/raw-loader/index.js!./src/app/takeimage/takeimage.page.html"),
            styles: [__webpack_require__(/*! ./takeimage.page.scss */ "./src/app/takeimage/takeimage.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"]])
    ], TakeimagePage);
    return TakeimagePage;
}());



/***/ })

}]);
//# sourceMappingURL=takeimage-takeimage-module-es5.js.map