webpackJsonp(["forgot.module"],{

/***/ "../../../../../src/app/pages/authentication/forgot/forgot.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/authentication/forgot/forgot.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"login p-fixed d-flex text-center bg-primary common-img-bg\">\n  <div class=\"auth-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"login-card card-body auth-body\">\n          <form class=\"md-float-material\">\n            <div class=\"text-center\">\n              <img src=\"assets/images/auth/logo-dark.png\" alt=\"Guru Able\">\n            </div>\n            <div class=\"auth-box\">\n              <div class=\"row m-b-20\">\n                <div class=\"col-md-12\">\n                  <h3 class=\"text-left\">You forgot your Password? </h3>\n                  <h3 class=\"text-left\">Don't worry.</h3>\n                </div>\n              </div>\n              <p class=\"text-inverse b-b-default text-right\">Back to <a [routerLink]=\"['/authentication/login/with-bg-image']\">Login.</a></p>\n              <div class=\"input-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Your Email Address\">\n                <span class=\"md-line\"></span>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <button type=\"button\" class=\"btn btn-primary btn-md btn-block waves-effect text-center m-b-20\">Reset and send me a new Password</button>\n                </div>\n              </div>\n              <hr/>\n              <div class=\"row\">\n                <div class=\"col-md-10\">\n                  <p class=\"text-inverse text-left m-b-0\">Thank you and enjoy our website.</p>\n                  <p class=\"text-inverse text-left\"><b>Your Autentification Team</b></p>\n                </div>\n                <div class=\"col-md-2\">\n                  <img src=\"assets/images/auth/Logo-small-bottom.png\" alt=\"small-logo.png\">\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/pages/authentication/forgot/forgot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForgotComponent = (function () {
    function ForgotComponent() {
    }
    ForgotComponent.prototype.ngOnInit = function () {
    };
    return ForgotComponent;
}());
ForgotComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-forgot',
        template: __webpack_require__("../../../../../src/app/pages/authentication/forgot/forgot.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/authentication/forgot/forgot.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ForgotComponent);

//# sourceMappingURL=forgot.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/authentication/forgot/forgot.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forgotRoutes", function() { return forgotRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotModule", function() { return ForgotModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_component__ = __webpack_require__("../../../../../src/app/pages/authentication/forgot/forgot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var forgotRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__forgot_component__["a" /* ForgotComponent */],
        data: {
            breadcrumb: 'Forgot'
        }
    }
];
var ForgotModule = (function () {
    function ForgotModule() {
    }
    return ForgotModule;
}());
ForgotModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(forgotRoutes),
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__forgot_component__["a" /* ForgotComponent */]]
    })
], ForgotModule);

//# sourceMappingURL=forgot.module.js.map

/***/ })

});
//# sourceMappingURL=forgot.module.chunk.js.map