(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Павел Потехин\Desktop\stuff\RxLETSGO\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _web_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./web-search.service */ "kAUT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal/modal.component */ "XwkG");








function AppComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", result_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", result_r1.title);
} }
class AppComponent {
    constructor(webSearch, el) {
        this.webSearch = webSearch;
        this.el = el;
        this.search = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('');
        this.spaceNotFilled$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.sendedSearch$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.sendedPageSize$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](10);
        this.element = el.nativeElement;
        this.searchEvents$ = this.search.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((search) => search.trim()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(1100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((search) => search !== ''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((search) => this.sendedSearch$.next(search)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => this.sendedPageSize$.next(10)));
        this.scrollEvents$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.spaceNotFilled$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeWhile"])(() => document.querySelector('.box').clientHeight < window.innerHeight)), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(() => (window.scrollY + window.innerHeight) >= (document.documentElement.scrollHeight * 0.99)))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(1500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeWhile"])(() => this.sendedPageSize$.value < 50), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => this.sendedPageSize$.next(this.sendedPageSize$.value + 10)));
        this.results$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.searchEvents$, this.scrollEvents$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(() => this.sendedSearch$.value !== ''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["throttleTime"])(1500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(() => webSearch.search(this.sendedSearch$.value, this.sendedPageSize$.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["retryWhen"])((errors) => errors.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(1100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeWhile"])(error => {
            if (error.error.message.includes('You have exceeded the DAILY quota for requests on your current plan')) {
                alert('Daily quota for API requests is exceeded! Try again later!');
                return false;
            }
            else {
                return true;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(3))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
            console.log(error.error.message || error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((value) => value !== null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => response.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((value) => value.map(val => ({ title: val.title, url: val.url }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => this.spaceNotFilled$.next()))));
        this.openModalClicks$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.element, 'click').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((event) => event.target), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((target) => target.className === 'img'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((img) => this.modalImage = {
            title: img.getAttribute('alt'), url: img.getAttribute('src')
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(() => true));
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_web_search_service__WEBPACK_IMPORTED_MODULE_4__["WebSearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 10, vars: 7, consts: [[1, "search-box"], ["for", "search"], ["id", "search", "name", "search", "type", "text", "placeholder", "cats", 3, "formControl"], [1, "box"], ["class", "img-box", 4, "ngFor", "ngForOf"], [3, "openClicks$"], [1, "modal_img", 3, "src", "alt"], [1, "img-box"], [1, "img", 3, "src", "alt"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Find pictures");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, AppComponent_div_6_Template, 2, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "app-modal", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 5, ctx.results$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("openClicks$", ctx.openModalClicks$);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.modalImage == null ? null : ctx.modalImage.url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", ctx.modalImage == null ? null : ctx.modalImage.title);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_6__["ModalComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".search-box[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: ghostwhite;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 1.56em;\r\n  font-size: 1rem;\r\n  font-family: sans-serif;\r\n}\r\n.search-box[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  margin-bottom: 0.625em;\r\n}\r\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  font-size: 1rem;\r\n  font-family: sans-serif;\r\n  border-radius: 0.2em;\r\n  min-width: 15.625em;\r\n}\r\n.box[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n  padding: 1.56em;\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fill, 270px);\r\n  grid-gap: 0.625em;\r\n  justify-content: center;\r\n}\r\n.img-box[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: ghostwhite;\r\n}\r\n.img-box[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.24), 0px 9px 18px rgba(0, 0, 0, 0.18);\r\n}\r\n.img[_ngcontent-%COMP%] {\r\n  max-height: 250px;\r\n  width: 250px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZUFBZTtFQUNmLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFdBQVc7RUFDWCx3QkFBbUI7RUFBbkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixhQUFhO0VBQ2IsK0NBQStDO0VBQy9DLGlCQUFpQjtFQUNqQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLDZFQUE2RTtBQUMvRTtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZCIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtYm94IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2hvc3R3aGl0ZTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEuNTZlbTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbn1cclxuLnNlYXJjaC1ib3ggbGFiZWwge1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNjI1ZW07XHJcbn1cclxuLnNlYXJjaC1ib3ggaW5wdXQge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBib3JkZXItcmFkaXVzOiAwLjJlbTtcclxuICBtaW4td2lkdGg6IDE1LjYyNWVtO1xyXG59XHJcbi5ib3gge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgcGFkZGluZzogMS41NmVtO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCAyNzBweCk7XHJcbiAgZ3JpZC1nYXA6IDAuNjI1ZW07XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmltZy1ib3gge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdob3N0d2hpdGU7XHJcbn1cclxuLmltZy1ib3g6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDBweCA2cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yNCksIDBweCA5cHggMThweCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xyXG59XHJcbi5pbWcge1xyXG4gIG1heC1oZWlnaHQ6IDI1MHB4O1xyXG4gIHdpZHRoOiAyNTBweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "XwkG":
/*!******************************************!*\
  !*** ./src/app/modal/modal.component.ts ***!
  \******************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ModalComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "div", 4);
} }
const _c0 = ["*"];
class ModalComponent {
    constructor(el) {
        this.el = el;
        this.element = el.nativeElement;
        this.closeClicks$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(this.element, 'click').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((event) => event.target), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((target) => target.className === 'modal' || target.className === 'modal_close-btn'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(() => false));
    }
    ngOnInit() {
        document.body.appendChild(this.element);
        this.modalState$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(this.openClicks$, this.closeClicks$);
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])); };
ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], inputs: { openClicks$: "openClicks$" }, ngContentSelectors: _c0, decls: 2, vars: 3, consts: [[3, "ngIf"], [1, "modal"], [1, "modal_body"], [1, "modal_close-btn"], [1, "modal_background"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ModalComponent_ng_template_0_Template, 6, 0, "ng-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx.modalState$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: [".hidden {\r\n  display: none;\r\n}\r\n\r\n.modal,\r\n.modal_background {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.modal {\r\n  z-index: 1000;\r\n  overflow-y: auto;\r\n}\r\n\r\n.modal_body {\r\n  margin: 50px;\r\n  padding: 20px;\r\n  background-color: white;\r\n}\r\n\r\n.modal_body img {\r\n max-width: 100%;\r\n}\r\n\r\n.modal_background {\r\n  z-index: 900;\r\n  background-color: rgba(0, 0, 0, 0.75);\r\n}\r\n\r\n.modal_close-btn {\r\n  display: block;\r\n}\r\n\r\nbody .modal-is-opened {\r\n  overflow: hidden;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7QUFDVjs7QUFDQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFDQTtDQUNDLGVBQWU7QUFDaEI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1oscUNBQXFDO0FBQ3ZDOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJtb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhpZGRlbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLm1vZGFsLFxyXG4ubW9kYWxfYmFja2dyb3VuZCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxufVxyXG4ubW9kYWwge1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG4ubW9kYWxfYm9keSB7XHJcbiAgbWFyZ2luOiA1MHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLm1vZGFsX2JvZHkgaW1nIHtcclxuIG1heC13aWR0aDogMTAwJTtcclxufVxyXG4ubW9kYWxfYmFja2dyb3VuZCB7XHJcbiAgei1pbmRleDogOTAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbn1cclxuLm1vZGFsX2Nsb3NlLWJ0biB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuYm9keSAubW9kYWwtaXMtb3BlbmVkIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbiJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal/modal.component */ "XwkG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]] }); })();


/***/ }),

/***/ "kAUT":
/*!***************************************!*\
  !*** ./src/app/web-search.service.ts ***!
  \***************************************/
/*! exports provided: WebSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebSearchService", function() { return WebSearchService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class WebSearchService {
    constructor(http) {
        this.http = http;
    }
    search(q, pageSize) {
        return this.http.get('https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI', {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]()
                .set('X-RapidAPI-Key', '3aec8b01b5mshc066a393136b7bfp1e661cjsnadde8ab9a568')
                .set('X-RapidAPI-Host', 'contextualwebsearch-websearch-v1.p.rapidapi.com'),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
                .set('q', q)
                .set('pageNumber', '1')
                .set('pageSize', `${pageSize}`)
                .set('autoCorrect', 'false')
                .set('safeSearch', 'false')
        });
    }
}
WebSearchService.ɵfac = function WebSearchService_Factory(t) { return new (t || WebSearchService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
WebSearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: WebSearchService, factory: WebSearchService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map