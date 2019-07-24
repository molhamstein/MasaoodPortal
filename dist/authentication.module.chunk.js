webpackJsonp(["authentication.module"],{

/***/ "../../../../../src/app/pages/authentication/authentication.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationRoutes", function() { return AuthenticationRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AuthenticationRoutes = [
    {
        path: '',
        children: [
            {
                path: 'registration',
                loadChildren: './registration/registration.module#RegistrationModule',
                data: {
                    breadcrumb: 'Registration'
                }
            }, {
                path: 'forgot',
                loadChildren: './forgot/forgot.module#ForgotModule'
            }, {
                path: 'lock-screen',
                loadChildren: './lock-screen/lock-screen.module#LockScreenModule'
            }
        ]
    }
];
var AuthenticationModule = (function () {
    function AuthenticationModule() {
    }
    return AuthenticationModule;
}());
AuthenticationModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */].forChild(AuthenticationRoutes),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"]
        ],
        declarations: []
    })
], AuthenticationModule);

//# sourceMappingURL=authentication.module.js.map

/***/ })

});
//# sourceMappingURL=authentication.module.chunk.js.map