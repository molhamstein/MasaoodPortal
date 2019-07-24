webpackJsonp(["registration.module"],{

/***/ "../../../../../src/app/pages/authentication/registration/multi-step/multi-step.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  font-family: 'Source Sans Pro', sans-serif;\r\n  font-size: 14px;\r\n}\r\n\r\n.card {\r\n  border-radius: 0px;\r\n  border-top: 0px solid rgba(0, 115, 170, 0);\r\n  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.0);\r\n  border-left: none;\r\n  border-right: none;\r\n  border-bottom: none;\r\n  background-color: transparent;\r\n  margin-bottom: 30px;\r\n}\r\n.card .card-header{\r\n  background-color: transparent !important;\r\n  border-bottom: 0;\r\n  margin: 0 -35px;\r\n}\r\n\r\n.card .card-block {\r\n  padding: 0;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n}\r\n.card .card-footer {\r\n  width: 100%;\r\n  margin: 0 auto;\r\n  border-radius: 0 0 7px 7px;\r\n}\r\n\r\n#msform ul li,#msform li.active{\r\n  border-bottom: 0 !important;\r\n}\r\n#msform .nav-item{\r\n  padding: 0 !important;\r\n  margin-bottom: 20px;\r\n}\r\n#msform .nav-item > a{\r\n  font-size: 9px;\r\n  font-weight: 100;\r\n}\r\n\r\n#msform #progressbar li.enabled:before, #progressbar li.enabled:after {\r\n  background: #0073aa !important;\r\n  color: #fff;\r\n}\r\n\r\n#msform {\r\n  width: 400px;\r\n  margin: 50px auto;\r\n  text-align: center;\r\n  position: relative;\r\n}\r\n\r\n#msform fieldset {\r\n  background: #fff;\r\n  border: 0 none;\r\n  border-radius: 7px 7px 0 0;\r\n  box-shadow: 0 0 30px 1px rgba(0, 0, 0, 0.1);\r\n  padding: 20px 20px 0 20px;\r\n  box-sizing: border-box;\r\n\r\n  position: relative;\r\n}\r\n\r\n#msform fieldset:not(:first-of-type) {\r\n  display: none;\r\n}\r\nimg.logo {\r\n  max-width: 120px;\r\n  margin-bottom: 20px;\r\n}\r\n#msform p {\r\n  color: #8b9ab0;\r\n  font-size: 12px;\r\n}\r\n\r\n/* Headings */\r\n.fs-title {\r\n  font-size: 26px;\r\n  font-weight: 200;\r\n  color: #434a54;\r\n  margin-bottom: 20px;\r\n}\r\n.fs-subtitle {\r\n  font-weight: 400;\r\n  color: #434a54;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n#msform .h3, h3 {\r\n  font-size: 100%;\r\n}\r\n\r\n#msform .float-right, #msform .float-left {\r\n  float: none !important;\r\n}\r\n\r\n#msform .float-left {\r\n  color: #0073aa;\r\n  background-color: transparent;\r\n  border-color: #0073aa;\r\n}\r\n\r\n#msform .float-right {\r\n  background-color: #0073aa;\r\n  border-color: #0073aa;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  transition: all ease-in 0.3s;\r\n}\r\n\r\n#progressbar {\r\n  margin-bottom: 30px;\r\n  overflow: hidden;\r\n  counter-reset: step;\r\n}\r\n#progressbar li {\r\n  list-style-type: none;\r\n  color: #8b9ab0;\r\n  text-transform: uppercase;\r\n  font-size: 9px;\r\n  width: 33.33%;\r\n  float: left;\r\n  position: relative;\r\n}\r\n#progressbar li.active {\r\n  color: #e74c3c;\r\n}\r\n#progressbar li:before {\r\n  content: counter(step);\r\n  counter-increment: step;\r\n  width: 20px;\r\n  line-height: 20px;\r\n  display: block;\r\n  font-size: 10px;\r\n  color: #333;\r\n  background: white;\r\n  border-radius: 3em;\r\n  margin: 0 auto 5px auto;\r\n}\r\n\r\n#progressbar li:after {\r\n  content: '';\r\n  width: 100%;\r\n  height: 2px;\r\n  background: white;\r\n  position: absolute;\r\n  left: -50%;\r\n  top: 9px;\r\n  z-index: -1;\r\n}\r\n#progressbar li:first-child:after {\r\n  content: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/authentication/registration/multi-step/multi-step.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"multi-step-sign-up\">\n  <div id=\"msform\">\n    <div id=\"progressbar\">\n      <form-wizard (onStepChanged)=\"onStepChanged($event)\">\n        <wizard-step [title]=\"'Sign up'\" (onNext)=\"onStep1Next($event)\">\n          <fieldset>\n            <img class=\"logo\" src=\"assets/images/logo-blue.png\" alt=\"logo.png\">\n            <h2 class=\"fs-title\">Sign up</h2>\n            <h3 class=\"fs-subtitle\">Let’s have a new beginning. Sign up for new you</h3>\n            <div class=\"input-group\">\n              <input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"Username\" />\n            </div>\n            <div class=\"input-group\">\n              <input type=\"text\" class=\"form-control\" name=\"email\" placeholder=\"Email\" />\n            </div>\n            <div class=\"input-group\">\n              <input type=\"password\" class=\"form-control\" name=\"pass\" placeholder=\"Password\" />\n            </div>\n            <div class=\"input-group\">\n              <input type=\"password\" class=\"form-control\" name=\"cpass\" placeholder=\"Confirm Password\" />\n            </div>\n          </fieldset>\n        </wizard-step>\n\n        <wizard-step [title]=\"'Social Profiles'\" [showNext]=\"step2.showNext\" [showPrev]=\"step2.showPrev\" (onNext)=\"onStep2Next($event)\">\n          <fieldset>\n            <img class=\"logo\" src=\"assets/images/logo-blue.png\" alt=\"logo.png\">\n            <h2 class=\"fs-title\">Social Profiles</h2>\n            <h3 class=\"fs-subtitle\">Little bit about your presence on social media</h3>\n            <div class=\"input-group\">\n              <input type=\"text\" class=\"form-control\" name=\"twitter\" placeholder=\"Twitter\" />\n            </div>\n            <div class=\"input-group\">\n              <input type=\"text\" class=\"form-control\" name=\"facebook\" placeholder=\"Facebook\" />\n            </div>\n            <div class=\"input-group\">\n              <input type=\"text\" class=\"form-control\" name=\"gplus\" placeholder=\"Google Plus\" />\n            </div>\n          </fieldset>\n        </wizard-step>\n\n        <wizard-step [title]=\"'Personal'\" [showPrev]=\"step2.showPrev\" (onComplete)=\"onComplete($event)\">\n          <fieldset>\n            <img class=\"logo\" src=\"assets/images/logo-blue.png\" alt=\"logo.png\">\n            <h2 class=\"fs-title\">Personal Details</h2>\n            <h3 class=\"fs-subtitle\">And something about yourself!</h3>\n            <div class=\"input-group\">\n              <input type=\"text\" class=\"form-control\" name=\"fname\" placeholder=\"First Name\" />\n            </div>\n            <div class=\"input-group\">\n              <input type=\"text\" class=\"form-control\" name=\"lname\" placeholder=\"Last Name\" />\n            </div>\n            <div class=\"input-group\">\n              <input type=\"text\" class=\"form-control\" name=\"phone\" placeholder=\"Phone\" />\n            </div>\n            <div class=\"input-group\">\n              <textarea name=\"address\" class=\"form-control\" placeholder=\"Address\"></textarea>\n            </div>\n            <p class=\"m-t-20\">Already have an account? <a href=\"javascript:;\">Sign in</a></p>\n          </fieldset>\n        </wizard-step>\n      </form-wizard>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/authentication/registration/multi-step/multi-step.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiStepComponent; });
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

var MultiStepComponent = (function () {
    function MultiStepComponent() {
        this.step2 = {
            showNext: true,
            showPrev: true
        };
        this.step3 = {
            showSecret: false
        };
        this.isCompleted = false;
    }
    MultiStepComponent.prototype.ngOnInit = function () {
    };
    MultiStepComponent.prototype.onStep1Next = function (event) {
        console.log('Step1 - Next');
    };
    MultiStepComponent.prototype.onStep2Next = function (event) {
        console.log('Step2 - Next');
    };
    MultiStepComponent.prototype.onStep3Next = function (event) {
        console.log('Step3 - Next');
    };
    MultiStepComponent.prototype.onComplete = function (event) {
        this.isCompleted = true;
    };
    MultiStepComponent.prototype.onStepChanged = function (step) {
        console.log('Changed to ' + step.title);
    };
    return MultiStepComponent;
}());
MultiStepComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-multi-step',
        template: __webpack_require__("../../../../../src/app/pages/authentication/registration/multi-step/multi-step.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/authentication/registration/multi-step/multi-step.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [])
], MultiStepComponent);

//# sourceMappingURL=multi-step.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/authentication/registration/registration.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationRoutes", function() { return RegistrationRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationModule", function() { return RegistrationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__with_bg_image_with_bg_image_component__ = __webpack_require__("../../../../../src/app/pages/authentication/registration/with-bg-image/with-bg-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__with_header_footer_with_header_footer_component__ = __webpack_require__("../../../../../src/app/pages/authentication/registration/with-header-footer/with-header-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__with_social_with_social_component__ = __webpack_require__("../../../../../src/app/pages/authentication/registration/with-social/with-social.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__with_social_header_footer_with_social_header_footer_component__ = __webpack_require__("../../../../../src/app/pages/authentication/registration/with-social-header-footer/with-social-header-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__multi_step_multi_step_component__ = __webpack_require__("../../../../../src/app/pages/authentication/registration/multi-step/multi-step.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_wizard__ = __webpack_require__("../../../../angular2-wizard/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_wizard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_wizard__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var RegistrationRoutes = [
    {
        path: '',
        data: {
            breadcrumb: 'Registration'
        },
        children: [
            {
                path: 'with-bg-image',
                component: __WEBPACK_IMPORTED_MODULE_3__with_bg_image_with_bg_image_component__["a" /* WithBgImageComponent */],
                data: {
                    breadcrumb: 'Registration'
                }
            }, {
                path: 'with-header-footer',
                component: __WEBPACK_IMPORTED_MODULE_4__with_header_footer_with_header_footer_component__["a" /* WithHeaderFooterComponent */],
                data: {
                    breadcrumb: 'Registration'
                }
            }, {
                path: 'with-social',
                component: __WEBPACK_IMPORTED_MODULE_5__with_social_with_social_component__["a" /* WithSocialComponent */],
                data: {
                    breadcrumb: 'Registration'
                }
            }, {
                path: 'with-social-header-footer',
                component: __WEBPACK_IMPORTED_MODULE_6__with_social_header_footer_with_social_header_footer_component__["a" /* WithSocialHeaderFooterComponent */],
                data: {
                    breadcrumb: 'Registration'
                }
            }, {
                path: 'multi-step',
                component: __WEBPACK_IMPORTED_MODULE_7__multi_step_multi_step_component__["a" /* MultiStepComponent */],
                data: {
                    breadcrumb: 'Registration'
                }
            }
        ]
    }
];
var RegistrationModule = (function () {
    function RegistrationModule() {
    }
    return RegistrationModule;
}());
RegistrationModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */].forChild(RegistrationRoutes),
            __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_9_angular2_wizard__["FormWizardModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__with_bg_image_with_bg_image_component__["a" /* WithBgImageComponent */], __WEBPACK_IMPORTED_MODULE_4__with_header_footer_with_header_footer_component__["a" /* WithHeaderFooterComponent */], __WEBPACK_IMPORTED_MODULE_5__with_social_with_social_component__["a" /* WithSocialComponent */], __WEBPACK_IMPORTED_MODULE_6__with_social_header_footer_with_social_header_footer_component__["a" /* WithSocialHeaderFooterComponent */], __WEBPACK_IMPORTED_MODULE_7__multi_step_multi_step_component__["a" /* MultiStepComponent */]]
    })
], RegistrationModule);

//# sourceMappingURL=registration.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/authentication/registration/with-bg-image/with-bg-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/authentication/registration/with-bg-image/with-bg-image.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"login p-fixed d-flex text-center bg-primary common-img-bg\">\n  <!-- starts -->\n  <div class=\"auth-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <!-- Authentication card start -->\n        <div class=\"login-card card-body auth-body\">\n          <form class=\"md-float-material\">\n            <div class=\"text-center\">\n              <img src=\"assets/images/auth/logo-dark.png\" alt=\"Guru Able\">\n            </div>\n            <div class=\"auth-box\">\n              <div class=\"row m-b-20\">\n                <div class=\"col-md-12\">\n                  <h3 class=\"text-center txt-primary\">Sign up. It is fast and easy.</h3>\n                </div>\n              </div>\n              <hr/>\n              <div class=\"input-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Choose Username\">\n                <span class=\"md-line\"></span>\n              </div>\n              <div class=\"input-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Your Email Address\">\n                <span class=\"md-line\"></span>\n              </div>\n              <div class=\"input-group\">\n                <input type=\"password\" class=\"form-control\" placeholder=\"Choose Password\">\n                <span class=\"md-line\"></span>\n              </div>\n              <div class=\"input-group\">\n                <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\">\n                <span class=\"md-line\"></span>\n              </div>\n              <div class=\"row m-t-25 text-left\">\n                <div class=\"col-md-12\">\n                  <div class=\"checkbox-fade fade-in-primary\">\n                    <label>\n                      <input type=\"checkbox\" value=\"\">\n                      <span class=\"cr\"><i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i></span>\n                      <span class=\"text-inverse\">I read and accept <a href=\"javascript:;\">Terms &amp; Conditions.</a></span>\n                    </label>\n                  </div>\n                </div>\n                <div class=\"col-md-12\">\n                  <div class=\"checkbox-fade fade-in-primary\">\n                    <label>\n                      <input type=\"checkbox\" value=\"\">\n                      <span class=\"cr\"><i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i></span>\n                      <span class=\"text-inverse\">Send me the <a href=\"javascript:;\">Newsletter</a> weekly.</span>\n                    </label>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row m-t-30\">\n                <div class=\"col-md-12\">\n                  <button type=\"button\" class=\"btn btn-primary btn-md btn-block waves-effect text-center m-b-20\">Sign up now.</button>\n                </div>\n              </div>\n              <hr/>\n              <div class=\"row\">\n                <div class=\"col-md-10\">\n                  <p class=\"text-inverse text-left m-b-0\">Thank you and enjoy our website.</p>\n                  <p class=\"text-inverse text-left\"><b>Your Autentification Team</b></p>\n                </div>\n                <div class=\"col-md-2\">\n                  <img src=\"assets/images/auth/Logo-small-bottom.png\" alt=\"small-logo.png\">\n                </div>\n              </div>\n            </div>\n          </form>\n          <!-- end of form -->\n        </div>\n        <!-- Authentication card end -->\n      </div>\n      <!-- end of col-sm-12 -->\n    </div>\n    <!-- end of row -->\n  </div>\n  <!-- end of -->\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/pages/authentication/registration/with-bg-image/with-bg-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithBgImageComponent; });
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

var WithBgImageComponent = (function () {
    function WithBgImageComponent() {
    }
    WithBgImageComponent.prototype.ngOnInit = function () {
    };
    return WithBgImageComponent;
}());
WithBgImageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-with-bg-image',
        template: __webpack_require__("../../../../../src/app/pages/authentication/registration/with-bg-image/with-bg-image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/authentication/registration/with-bg-image/with-bg-image.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WithBgImageComponent);

//# sourceMappingURL=with-bg-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/authentication/registration/with-header-footer/with-header-footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/authentication/registration/with-header-footer/with-header-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pcoded\"\n     [attr.nav-type]=\"navType\"\n     [attr.theme-layout]=\"themeLayout\"\n     [attr.layout-type]=\"layoutType\"\n     [attr.vertical-placement]=\"verticalPlacement\"\n     [attr.vertical-layout]=\"verticalLayout\"\n     [attr.pcoded-device-type]=\"deviceType\"\n     [attr.vertical-nav-type]=\"verticalNavType\"\n     [attr.vertical-effect]=\"verticalEffect\"\n     [attr.vnavigation-view]=\"vNavigationView\"\n     (window:resize)=\"onResize($event)\">\n  <div class=\"pcoded-overlay-box\"></div>\n  <div class=\"pcoded-container navbar-wrapper\">\n    <nav class=\"navbar header-navbar pcoded-header\" [attr.pcoded-header-position]=\"pcodedHeaderPosition\" [attr.header-theme]=\"headerTheme\">\n      <div class=\"navbar-wrapper\">\n        <div class=\"navbar-logo\" [attr.logo-theme]=\"logoTheme\">\n          <a [routerLink]=\"['/']\">\n            <img class=\"img-fluid\" src=\"assets/images/logo.png\" alt=\"Theme-Logo\"/>\n          </a>\n          <a (click)=\"onMobileMenu()\" class=\"mobile-options\">\n            <i class=\"ti-more\"></i>\n          </a>\n        </div>\n\n        <div class=\"navbar-container\">\n          <div>\n            <ul class=\"nav-left\">\n              <li>\n                <a href=\"javascript:;\" appToggleFullscreen>\n                  <i class=\"ti-fullscreen\"></i>\n                </a>\n              </li>\n              <li class=\"mega-menu-top\">\n                <a href=\"javascript:;\">\n                  Mega\n                  <i class=\"ti-angle-down\"></i>\n                </a>\n                <ul class=\"show-notification row\">\n                  <li class=\"col-sm-3\">\n                    <h6 class=\"mega-menu-title\">Popular Links</h6>\n                    <ul class=\"mega-menu-links\">\n                      <li><a [routerLink]=\"['/forms/advance-elements']\">Form Elements</a></li>\n                      <li><a [routerLink]=\"['/basic/button']\">Buttons</a></li>\n                      <li><a [routerLink]=\"['/map/google']\">Maps</a></li>\n                      <li><a [routerLink]=\"['/user/card']\">Contact Cards</a></li>\n                      <li><a [routerLink]=\"['/user/profile']\">User Information</a></li>\n                      <li><a [routerLink]=\"['/authentication/lock-screen']\" target=\"_blank\">Lock Screen</a></li>\n                    </ul>\n                  </li>\n                  <li class=\"col-sm-3\">\n                    <h6 class=\"mega-menu-title\">Mailbox</h6>\n                    <ul class=\"mega-mailbox\">\n                      <li>\n                        <a href=\"javascript:;\" class=\"media\">\n                          <div class=\"media-left\">\n                            <i class=\"ti-folder\"></i>\n                          </div>\n                          <div class=\"media-body\">\n                            <h5>Data Backup</h5>\n                            <small class=\"text-muted\">Store your data</small>\n                          </div>\n                        </a>\n                      </li>\n                      <li>\n                        <a href=\"javascript:;\" class=\"media\">\n                          <div class=\"media-left\">\n                            <i class=\"ti-headphone-alt\"></i>\n                          </div>\n                          <div class=\"media-body\">\n                            <h5>Support</h5>\n                            <small class=\"text-muted\">24-hour support</small>\n                          </div>\n                        </a>\n                      </li>\n                      <li>\n                        <a href=\"javascript:;\" class=\"media\">\n                          <div class=\"media-left\">\n                            <i class=\"ti-dropbox\"></i>\n                          </div>\n                          <div class=\"media-body\">\n                            <h5>Drop-box</h5>\n                            <small class=\"text-muted\">Store large amount of data in one-box only\n                            </small>\n                          </div>\n                        </a>\n                      </li>\n                      <li>\n                        <a href=\"javascript:;\" class=\"media\">\n                          <div class=\"media-left\">\n                            <i class=\"ti-location-pin\"></i>\n                          </div>\n                          <div class=\"media-body\">\n                            <h5>Location</h5>\n                            <small class=\"text-muted\">Find Your Location with ease of use</small>\n                          </div>\n                        </a>\n                      </li>\n                    </ul>\n                  </li>\n                  <li class=\"col-sm-3\">\n                    <h6 class=\"mega-menu-title\">Gallery</h6>\n                    <div class=\"row m-b-20\">\n                      <div class=\"col-sm-4\"><img class=\"img-fluid img-thumbnail\" src=\"assets/images/mega-menu/01.jpg\" alt=\"Gallery-1\">\n                      </div>\n                      <div class=\"col-sm-4\"><img class=\"img-fluid img-thumbnail\" src=\"assets/images/mega-menu/02.jpg\" alt=\"Gallery-2\">\n                      </div>\n                      <div class=\"col-sm-4\"><img class=\"img-fluid img-thumbnail\" src=\"assets/images/mega-menu/01.jpg\" alt=\"Gallery-3\">\n                      </div>\n                    </div>\n                    <div class=\"row m-b-20\">\n                      <div class=\"col-sm-4\"><img class=\"img-fluid img-thumbnail\" src=\"assets/images/mega-menu/02.jpg\" alt=\"Gallery-4\">\n                      </div>\n                      <div class=\"col-sm-4\"><img class=\"img-fluid img-thumbnail\" src=\"assets/images/mega-menu/01.jpg\" alt=\"Gallery-5\">\n                      </div>\n                      <div class=\"col-sm-4\"><img class=\"img-fluid img-thumbnail\" src=\"assets/images/mega-menu/02.jpg\" alt=\"Gallery-6\">\n                      </div>\n                    </div>\n                    <button class=\"btn btn-primary btn-sm btn-block\">Browse Gallery</button>\n                  </li>\n                  <li class=\"col-sm-3\">\n                    <h6 class=\"mega-menu-title\">Contact Us</h6>\n                    <div class=\"mega-menu-contact\">\n                      <div class=\"form-group row\">\n                        <label for=\"example-text-input\" class=\"col-3 col-form-label\">Name</label>\n                        <div class=\"col-9\">\n                          <input class=\"form-control\" type=\"text\" placeholder=\"Artisanal kale\" id=\"example-text-input\">\n                        </div>\n                      </div>\n                      <div class=\"form-group row\">\n                        <label for=\"example-search-input-email\" class=\"col-3 col-form-label\">Email</label>\n                        <div class=\"col-9\">\n                          <input class=\"form-control\" type=\"email\" placeholder=\"Enter your E-mail Id\" id=\"example-search-input-email\">\n                        </div>\n                      </div>\n                      <div class=\"form-group row\">\n                        <label for=\"example-search-input-content\" class=\"col-3 col-form-label\">Contact</label>\n                        <div class=\"col-9\">\n                          <input class=\"form-control\" type=\"number\" placeholder=\"+91-9898989898\" id=\"example-search-input-content\">\n                        </div>\n                      </div>\n                      <div class=\"form-group row\">\n                        <label for=\"exampleTextarea\" class=\"col-3 col-form-label\">Message</label>\n                        <div class=\"col-9\">\n                          <textarea class=\"form-control\" id=\"exampleTextarea\" rows=\"3\"></textarea>\n                        </div>\n                      </div>\n                    </div>\n                  </li>\n                </ul>\n              </li>\n            </ul>\n            <ul [@mobileMenuTop]=\"isCollapsedMobile\" class=\"nav-right\" [ngClass]=\"isCollapsedMobile\">\n              <li class=\"header-notification lng-dropdown\">\n                <a href=\"javascript:;\" id=\"dropdown-active-item\">\n                  <img src=\"assets/images/flags/ENGLISH.jpg\" alt=\"\"> English\n                </a>\n                <ul class=\"show-notification\">\n                  <li>\n                    <a href=\"javascript:;\" data-lng=\"en\">\n                      <img src=\"assets/images/flags/ENGLISH.jpg\" alt=\"\"> English\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"javascript:;\" data-lng=\"es\">\n                      <img src=\"assets/images/flags/SPAIN.jpg\" alt=\"\"> Spanish\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"javascript:;\" data-lng=\"pt\">\n                      <img src=\"assets/images/flags/PORTO.jpg\" alt=\"\"> Portuguese\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"javascript:;\" data-lng=\"fr\">\n                      <img src=\"assets/images/flags/FRANCE.jpg\" alt=\"\"> French\n                    </a>\n                  </li>\n                </ul>\n              </li>\n              <li class=\"header-notification\">\n                <a href=\"javascript:;\">\n                  <i class=\"ti-bell\"></i>\n                  <span class=\"badge bg-c-pink\"></span>\n                </a>\n                <ul class=\"show-notification\">\n                  <li>\n                    <h6>Notifications</h6>\n                    <label class=\"label label-danger\">New</label>\n                  </li>\n                  <li>\n                    <div class=\"media\">\n                      <img class=\"d-flex align-self-center img-radius\" src=\"assets/images/avatar-2.jpg\" alt=\"Generic placeholder image\">\n                      <div class=\"media-body\">\n                        <h5 class=\"notification-user\">John Doe</h5>\n                        <p class=\"notification-msg\">Lorem ipsum dolor sit amet, consectetuer elit.</p>\n                        <span class=\"notification-time\">30 minutes ago</span>\n                      </div>\n                    </div>\n                  </li>\n                  <li>\n                    <div class=\"media\">\n                      <img class=\"d-flex align-self-center img-radius\" src=\"assets/images/avatar-3.jpg\" alt=\"Generic placeholder image\">\n                      <div class=\"media-body\">\n                        <h5 class=\"notification-user\">Joseph William</h5>\n                        <p class=\"notification-msg\">Lorem ipsum dolor sit amet, consectetuer elit.</p>\n                        <span class=\"notification-time\">30 minutes ago</span>\n                      </div>\n                    </div>\n                  </li>\n                  <li>\n                    <div class=\"media\">\n                      <img class=\"d-flex align-self-center img-radius\" src=\"assets/images/avatar-5.jpg\" alt=\"Generic placeholder image\">\n                      <div class=\"media-body\">\n                        <h5 class=\"notification-user\">Sara Soudein</h5>\n                        <p class=\"notification-msg\">Lorem ipsum dolor sit amet, consectetuer elit.</p>\n                        <span class=\"notification-time\">30 minutes ago</span>\n                      </div>\n                    </div>\n                  </li>\n                </ul>\n              </li>\n              <li class=\"user-profile header-notification\">\n                <a [routerLink]=\"['/']\">\n                  <img src=\"assets/images/avatar-4.jpg\" class=\"img-radius\" alt=\"User-Profile-Image\">\n                  <span>John Doe</span>\n                  <i class=\"ti-angle-down\"></i>\n                </a>\n                <ul class=\"show-notification profile-notification\">\n                  <li>\n                    <a [routerLink]=\"['/crm-contact']\">\n                      <i class=\"ti-settings\"></i> Settings\n                    </a>\n                  </li>\n                  <li>\n                    <a [routerLink]=\"['/user/profile']\">\n                      <i class=\"ti-user\"></i> Profile\n                    </a>\n                  </li>\n                  <li>\n                    <a [routerLink]=\"['/advance/notifications']\">\n                      <i class=\"ti-email\"></i> My Messages\n                    </a>\n                  </li>\n                  <li>\n                    <a [routerLink]=\"['/authentication/lock-screen']\" target=\"_blank\">\n                      <i class=\"ti-lock\"></i> Lock Screen\n                    </a>\n                  </li>\n                  <li>\n                    <a [routerLink]=\"['/authentication/login/with-bg-image']\">\n                      <i class=\"ti-layout-sidebar-left\"></i> Logout\n                    </a>\n                  </li>\n                </ul>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </nav>\n    <div class=\"pcoded-main-container\">\n      <div class=\"pcoded-wrapper\">\n        <div class=\"page-wrapper\">\n          <div class=\"page-body\">\n            <section class=\"login header p-fixed d-flex text-center bg-primary common-img-bg\">\n              <!-- starts -->\n              <div class=\"auth-fluid\">\n                <div class=\"row\">\n                  <div class=\"col-sm-12\">\n                    <!-- Authentication card start -->\n                    <div class=\"login-card card-body auth-body\">\n                      <form class=\"md-float-material\">\n                        <div class=\"text-center\">\n                          <img src=\"assets/images/auth/logo-dark.png\" alt=\"logo.png\">\n                        </div>\n                        <div class=\"auth-box\">\n                          <div class=\"row m-b-20\">\n                            <div class=\"col-md-12\">\n                              <h3 class=\"text-center txt-primary\">Sign up. It is fast and easy.</h3>\n                            </div>\n                          </div>\n                          <hr/>\n                          <div class=\"input-group\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Choose Username\">\n                            <span class=\"md-line\"></span>\n                          </div>\n                          <div class=\"input-group\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Your Email Address\">\n                            <span class=\"md-line\"></span>\n                          </div>\n                          <div class=\"input-group\">\n                            <input type=\"password\" class=\"form-control\" placeholder=\"Choose Password\">\n                            <span class=\"md-line\"></span>\n                          </div>\n                          <div class=\"input-group\">\n                            <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\">\n                            <span class=\"md-line\"></span>\n                          </div>\n                          <div class=\"row m-t-25 text-left\">\n                            <div class=\"col-md-12\">\n                              <div class=\"checkbox-fade fade-in-primary\">\n                                <label>\n                                  <input type=\"checkbox\" value=\"\">\n                                  <span class=\"cr\"><i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i></span>\n                                  <span class=\"text-inverse\">I read and accept <a href=\"javascript:;\">Terms &amp; Conditions.</a></span>\n                                </label>\n                              </div>\n                            </div>\n                            <div class=\"col-md-12\">\n                              <div class=\"checkbox-fade fade-in-primary\">\n                                <label>\n                                  <input type=\"checkbox\" value=\"\">\n                                  <span class=\"cr\"><i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i></span>\n                                  <span class=\"text-inverse\">Send me the <a href=\"javascript:;\">Newsletter</a> weekly.</span>\n                                </label>\n                              </div>\n                            </div>\n                          </div>\n                          <div class=\"row m-t-30\">\n                            <div class=\"col-md-12\">\n                              <button type=\"button\" class=\"btn btn-primary btn-md btn-block waves-effect text-center m-b-20\">Sign up now.</button>\n                            </div>\n                          </div>\n                          <hr/>\n                          <div class=\"row\">\n                            <div class=\"col-md-10\">\n                              <p class=\"text-inverse text-left m-b-0\">Thank you and enjoy our website.</p>\n                              <p class=\"text-inverse text-left\"><b>Your Autentification Team</b></p>\n                            </div>\n                            <div class=\"col-md-2\">\n                              <img src=\"assets/images/auth/Logo-small-bottom.png\" alt=\"small-logo.png\">\n                            </div>\n                          </div>\n                        </div>\n                      </form>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </section>\n            <div class=\"footer bg-inverse\">\n              <p class=\"text-center\">Copyright &copy; 2017 MASH ABLE ADMIN , All rights reserved.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/authentication/registration/with-header-footer/with-header-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithHeaderFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WithHeaderFooterComponent = (function () {
    function WithHeaderFooterComponent() {
        this.navType = 'st2';
        this.themeLayout = 'vertical';
        this.vNavigationView = 'view1';
        this.verticalPlacement = 'left';
        this.verticalLayout = 'wide';
        this.deviceType = 'desktop';
        this.verticalNavType = 'expanded';
        this.verticalEffect = 'shrink';
        this.pcodedHeaderPosition = 'fixed';
        this.pcodedSidebarPosition = 'fixed';
        this.headerTheme = 'theme1';
        this.logoTheme = 'theme1';
        this.toggleOn = true;
        this.headerFixedMargin = '80px';
        this.navBarTheme = 'themelight1';
        this.activeItemTheme = 'theme4';
        this.isCollapsedMobile = 'no-block';
        this.isCollapsedSideBar = 'no-block';
        this.chatToggle = 'out';
        this.chatToggleInverse = 'in';
        this.chatInnerToggle = 'off';
        this.chatInnerToggleInverse = 'on';
        this.menuTitleTheme = 'theme5';
        this.itemBorder = true;
        this.itemBorderStyle = 'none';
        this.subItemBorder = true;
        this.subItemIcon = 'style6';
        this.dropDownIcon = 'style1';
        this.isSidebarChecked = true;
        this.isHeaderChecked = true;
    }
    WithHeaderFooterComponent.prototype.ngOnInit = function () {
    };
    WithHeaderFooterComponent.prototype.onResize = function (event) {
        this.innerHeight = event.target.innerHeight + 'px';
        /* menu responsive */
        this.windowWidth = event.target.innerWidth;
        var reSizeFlag = true;
        if (this.deviceType === 'tablet' && this.windowWidth >= 768 && this.windowWidth <= 1024) {
            reSizeFlag = false;
        }
        else if (this.deviceType === 'mobile' && this.windowWidth < 768) {
            reSizeFlag = false;
        }
        /* for check device */
        if (reSizeFlag) {
            this.setMenuAttributes(this.windowWidth);
        }
    };
    WithHeaderFooterComponent.prototype.setMenuAttributes = function (windowWidth) {
        if (windowWidth >= 768 && windowWidth <= 1024) {
            this.deviceType = 'tablet';
            this.verticalNavType = 'offcanvas';
            this.verticalEffect = 'push';
        }
        else if (windowWidth < 768) {
            this.deviceType = 'mobile';
            this.verticalNavType = 'offcanvas';
            this.verticalEffect = 'overlay';
        }
        else {
            this.deviceType = 'desktop';
            this.verticalNavType = 'expanded';
            this.verticalEffect = 'shrink';
        }
    };
    WithHeaderFooterComponent.prototype.onMobileMenu = function () {
        this.isCollapsedMobile = this.isCollapsedMobile === 'yes-block' ? 'no-block' : 'yes-block';
    };
    return WithHeaderFooterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('searchFriends'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], WithHeaderFooterComponent.prototype, "search_friends", void 0);
WithHeaderFooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-with-header-footer',
        template: __webpack_require__("../../../../../src/app/pages/authentication/registration/with-header-footer/with-header-footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/authentication/registration/with-header-footer/with-header-footer.component.css")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('mobileMenuTop', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('no-block, void', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                    overflow: 'hidden',
                    height: '0px',
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('yes-block', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                    height: __WEBPACK_IMPORTED_MODULE_1__angular_animations__["AUTO_STYLE"],
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('no-block <=> yes-block', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('400ms ease-in-out')
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], WithHeaderFooterComponent);

var _a;
//# sourceMappingURL=with-header-footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/authentication/registration/with-social-header-footer/with-social-header-footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/authentication/registration/with-social-header-footer/with-social-header-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pcoded\"\n     [attr.nav-type]=\"navType\"\n     [attr.theme-layout]=\"themeLayout\"\n     [attr.layout-type]=\"layoutType\"\n     [attr.vertical-placement]=\"verticalPlacement\"\n     [attr.vertical-layout]=\"verticalLayout\"\n     [attr.pcoded-device-type]=\"deviceType\"\n     [attr.vertical-nav-type]=\"verticalNavType\"\n     [attr.vertical-effect]=\"verticalEffect\"\n     [attr.vnavigation-view]=\"vNavigationView\"\n     (window:resize)=\"onResize($event)\">\n  <div class=\"pcoded-overlay-box\"></div>\n  <div class=\"pcoded-container navbar-wrapper\">\n    <nav class=\"navbar header-navbar pcoded-header\" [attr.pcoded-header-position]=\"pcodedHeaderPosition\" [attr.header-theme]=\"headerTheme\">\n      <div class=\"navbar-wrapper\">\n        <div class=\"navbar-logo\" [attr.logo-theme]=\"logoTheme\">\n          <a [routerLink]=\"['/']\">\n            <img class=\"img-fluid\" src=\"assets/images/logo.png\" alt=\"Theme-Logo\"/>\n          </a>\n          <a (click)=\"onMobileMenu()\" class=\"mobile-options\">\n            <i class=\"ti-more\"></i>\n          </a>\n        </div>\n\n        <div class=\"navbar-container\">\n          <div>\n            <ul class=\"nav-left\">\n              <li>\n                <a href=\"javascript:;\" appToggleFullscreen>\n                  <i class=\"ti-fullscreen\"></i>\n                </a>\n              </li>\n              <li class=\"mega-menu-top\">\n                <a href=\"javascript:;\">\n                  Mega\n                  <i class=\"ti-angle-down\"></i>\n                </a>\n                <ul class=\"show-notification row\">\n                  <li class=\"col-sm-3\">\n                    <h6 class=\"mega-menu-title\">Popular Links</h6>\n                    <ul class=\"mega-menu-links\">\n                      <li><a [routerLink]=\"['/forms/advance-elements']\">Form Elements</a></li>\n                      <li><a [routerLink]=\"['/basic/button']\">Buttons</a></li>\n                      <li><a [routerLink]=\"['/map/google']\">Maps</a></li>\n                      <li><a [routerLink]=\"['/user/card']\">Contact Cards</a></li>\n                      <li><a [routerLink]=\"['/user/profile']\">User Information</a></li>\n                      <li><a [routerLink]=\"['/authentication/lock-screen']\" target=\"_blank\">Lock Screen</a></li>\n                    </ul>\n                  </li>\n                  <li class=\"col-sm-3\">\n                    <h6 class=\"mega-menu-title\">Mailbox</h6>\n                    <ul class=\"mega-mailbox\">\n                      <li>\n                        <a href=\"javascript:;\" class=\"media\">\n                          <div class=\"media-left\">\n                            <i class=\"ti-folder\"></i>\n                          </div>\n                          <div class=\"media-body\">\n                            <h5>Data Backup</h5>\n                            <small class=\"text-muted\">Store your data</small>\n                          </div>\n                        </a>\n                      </li>\n                      <li>\n                        <a href=\"javascript:;\" class=\"media\">\n                          <div class=\"media-left\">\n                            <i class=\"ti-headphone-alt\"></i>\n                          </div>\n                          <div class=\"media-body\">\n                            <h5>Support</h5>\n                            <small class=\"text-muted\">24-hour support</small>\n                          </div>\n                        </a>\n                      </li>\n                      <li>\n                        <a href=\"javascript:;\" class=\"media\">\n                          <div class=\"media-left\">\n                            <i class=\"ti-dropbox\"></i>\n                          </div>\n                          <div class=\"media-body\">\n                            <h5>Drop-box</h5>\n                            <small class=\"text-muted\">Store large amount of data in one-box only\n                            </small>\n                          </div>\n                        </a>\n                      </li>\n                      <li>\n                        <a href=\"javascript:;\" class=\"media\">\n                          <div class=\"media-left\">\n                            <i class=\"ti-location-pin\"></i>\n                          </div>\n                          <div class=\"media-body\">\n                            <h5>Location</h5>\n                            <small class=\"text-muted\">Find Your Location with ease of use</small>\n                          </div>\n                        </a>\n                      </li>\n                    </ul>\n                  </li>\n                  <li class=\"col-sm-3\">\n                    <h6 class=\"mega-menu-title\">Gallery</h6>\n                    <div class=\"row m-b-20\">\n                      <div class=\"col-sm-4\"><img class=\"img-fluid img-thumbnail\" src=\"assets/images/mega-menu/01.jpg\" alt=\"Gallery-1\">\n                      </div>\n                      <div class=\"col-sm-4\"><img class=\"img-fluid img-thumbnail\" src=\"assets/images/mega-menu/02.jpg\" alt=\"Gallery-2\">\n                      </div>\n                      <div class=\"col-sm-4\"><img class=\"img-fluid img-thumbnail\" src=\"assets/images/mega-menu/01.jpg\" alt=\"Gallery-3\">\n                      </div>\n                    </div>\n                    <div class=\"row m-b-20\">\n                      <div class=\"col-sm-4\"><img class=\"img-fluid img-thumbnail\" src=\"assets/images/mega-menu/02.jpg\" alt=\"Gallery-4\">\n                      </div>\n                      <div class=\"col-sm-4\"><img class=\"img-fluid img-thumbnail\" src=\"assets/images/mega-menu/01.jpg\" alt=\"Gallery-5\">\n                      </div>\n                      <div class=\"col-sm-4\"><img class=\"img-fluid img-thumbnail\" src=\"assets/images/mega-menu/02.jpg\" alt=\"Gallery-6\">\n                      </div>\n                    </div>\n                    <button class=\"btn btn-primary btn-sm btn-block\">Browse Gallery</button>\n                  </li>\n                  <li class=\"col-sm-3\">\n                    <h6 class=\"mega-menu-title\">Contact Us</h6>\n                    <div class=\"mega-menu-contact\">\n                      <div class=\"form-group row\">\n                        <label for=\"example-text-input\" class=\"col-3 col-form-label\">Name</label>\n                        <div class=\"col-9\">\n                          <input class=\"form-control\" type=\"text\" placeholder=\"Artisanal kale\" id=\"example-text-input\">\n                        </div>\n                      </div>\n                      <div class=\"form-group row\">\n                        <label for=\"example-search-input-email\" class=\"col-3 col-form-label\">Email</label>\n                        <div class=\"col-9\">\n                          <input class=\"form-control\" type=\"email\" placeholder=\"Enter your E-mail Id\" id=\"example-search-input-email\">\n                        </div>\n                      </div>\n                      <div class=\"form-group row\">\n                        <label for=\"example-search-input-content\" class=\"col-3 col-form-label\">Contact</label>\n                        <div class=\"col-9\">\n                          <input class=\"form-control\" type=\"number\" placeholder=\"+91-9898989898\" id=\"example-search-input-content\">\n                        </div>\n                      </div>\n                      <div class=\"form-group row\">\n                        <label for=\"exampleTextarea\" class=\"col-3 col-form-label\">Message</label>\n                        <div class=\"col-9\">\n                          <textarea class=\"form-control\" id=\"exampleTextarea\" rows=\"3\"></textarea>\n                        </div>\n                      </div>\n                    </div>\n                  </li>\n                </ul>\n              </li>\n            </ul>\n            <ul [@mobileMenuTop]=\"isCollapsedMobile\" class=\"nav-right\" [ngClass]=\"isCollapsedMobile\">\n              <li class=\"header-notification lng-dropdown\">\n                <a href=\"javascript:;\" id=\"dropdown-active-item\">\n                  <img src=\"assets/images/flags/ENGLISH.jpg\" alt=\"\"> English\n                </a>\n                <ul class=\"show-notification\">\n                  <li>\n                    <a href=\"javascript:;\" data-lng=\"en\">\n                      <img src=\"assets/images/flags/ENGLISH.jpg\" alt=\"\"> English\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"javascript:;\" data-lng=\"es\">\n                      <img src=\"assets/images/flags/SPAIN.jpg\" alt=\"\"> Spanish\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"javascript:;\" data-lng=\"pt\">\n                      <img src=\"assets/images/flags/PORTO.jpg\" alt=\"\"> Portuguese\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"javascript:;\" data-lng=\"fr\">\n                      <img src=\"assets/images/flags/FRANCE.jpg\" alt=\"\"> French\n                    </a>\n                  </li>\n                </ul>\n              </li>\n              <li class=\"header-notification\">\n                <a href=\"javascript:;\">\n                  <i class=\"ti-bell\"></i>\n                  <span class=\"badge bg-c-pink\"></span>\n                </a>\n                <ul class=\"show-notification\">\n                  <li>\n                    <h6>Notifications</h6>\n                    <label class=\"label label-danger\">New</label>\n                  </li>\n                  <li>\n                    <div class=\"media\">\n                      <img class=\"d-flex align-self-center img-radius\" src=\"assets/images/avatar-2.jpg\" alt=\"Generic placeholder image\">\n                      <div class=\"media-body\">\n                        <h5 class=\"notification-user\">John Doe</h5>\n                        <p class=\"notification-msg\">Lorem ipsum dolor sit amet, consectetuer elit.</p>\n                        <span class=\"notification-time\">30 minutes ago</span>\n                      </div>\n                    </div>\n                  </li>\n                  <li>\n                    <div class=\"media\">\n                      <img class=\"d-flex align-self-center img-radius\" src=\"assets/images/avatar-3.jpg\" alt=\"Generic placeholder image\">\n                      <div class=\"media-body\">\n                        <h5 class=\"notification-user\">Joseph William</h5>\n                        <p class=\"notification-msg\">Lorem ipsum dolor sit amet, consectetuer elit.</p>\n                        <span class=\"notification-time\">30 minutes ago</span>\n                      </div>\n                    </div>\n                  </li>\n                  <li>\n                    <div class=\"media\">\n                      <img class=\"d-flex align-self-center img-radius\" src=\"assets/images/avatar-5.jpg\" alt=\"Generic placeholder image\">\n                      <div class=\"media-body\">\n                        <h5 class=\"notification-user\">Sara Soudein</h5>\n                        <p class=\"notification-msg\">Lorem ipsum dolor sit amet, consectetuer elit.</p>\n                        <span class=\"notification-time\">30 minutes ago</span>\n                      </div>\n                    </div>\n                  </li>\n                </ul>\n              </li>\n              <li class=\"user-profile header-notification\">\n                <a [routerLink]=\"['/']\">\n                  <img src=\"assets/images/avatar-4.jpg\" class=\"img-radius\" alt=\"User-Profile-Image\">\n                  <span>John Doe</span>\n                  <i class=\"ti-angle-down\"></i>\n                </a>\n                <ul class=\"show-notification profile-notification\">\n                  <li>\n                    <a [routerLink]=\"['/crm-contact']\">\n                      <i class=\"ti-settings\"></i> Settings\n                    </a>\n                  </li>\n                  <li>\n                    <a [routerLink]=\"['/user/profile']\">\n                      <i class=\"ti-user\"></i> Profile\n                    </a>\n                  </li>\n                  <li>\n                    <a [routerLink]=\"['/advance/notifications']\">\n                      <i class=\"ti-email\"></i> My Messages\n                    </a>\n                  </li>\n                  <li>\n                    <a [routerLink]=\"['/authentication/lock-screen']\" target=\"_blank\">\n                      <i class=\"ti-lock\"></i> Lock Screen\n                    </a>\n                  </li>\n                  <li>\n                    <a [routerLink]=\"['/authentication/login/with-bg-image']\">\n                      <i class=\"ti-layout-sidebar-left\"></i> Logout\n                    </a>\n                  </li>\n                </ul>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </nav>\n    <div class=\"pcoded-main-container\">\n      <div class=\"pcoded-wrapper\">\n        <div class=\"page-wrapper\">\n          <div class=\"page-body\">\n            <section class=\"login header p-fixed d-flex text-center bg-primary common-img-bg\">\n              <!-- starts -->\n              <div class=\"auth-fluid\">\n                <div class=\"row\">\n                  <div class=\"col-sm-12\">\n                    <!-- Authentication card start -->\n                    <div class=\"login-card card-body auth-body\">\n                      <form class=\"md-float-material\">\n                        <div class=\"text-center\">\n                          <img src=\"assets/images/auth/logo-dark.png\" alt=\"logo.png\">\n                        </div>\n                        <div class=\"auth-box\">\n                          <div class=\"row m-b-20\">\n                            <div class=\"col-md-12\">\n                              <h3 class=\"text-center txt-primary\">Sign up. It is fast and easy.</h3>\n                            </div>\n                          </div>\n                          <p class=\"text-inverse b-b-default text-left p-b-5\">Sign in easily with your social account:</p>\n                          <div class=\"row m-b-20\">\n                            <div class=\"col-md-6\">\n                              <button class=\"btn btn-facebook m-b-5\"><i class=\"icofont icofont-social-facebook\"></i>facebook</button>\n                            </div>\n                            <div class=\"col-md-6\">\n                              <button class=\"btn btn-twitter m-b-5\"><i class=\"icofont icofont-social-twitter\"></i>twitter</button>\n                            </div>\n                          </div>\n                          <p class=\"text-inverse b-b-default text-left p-b-5\">Sign in with your regular account</p>\n                          <div class=\"input-group\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Choose Username\">\n                            <span class=\"md-line\"></span>\n                          </div>\n                          <div class=\"input-group\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Your Email Address\">\n                            <span class=\"md-line\"></span>\n                          </div>\n                          <div class=\"input-group\">\n                            <input type=\"password\" class=\"form-control\" placeholder=\"Choose Password\">\n                            <span class=\"md-line\"></span>\n                          </div>\n                          <div class=\"input-group\">\n                            <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\">\n                            <span class=\"md-line\"></span>\n                          </div>\n                          <div class=\"row m-t-25 text-left\">\n                            <div class=\"col-md-12\">\n                              <div class=\"checkbox-fade fade-in-primary\">\n                                <label>\n                                  <input type=\"checkbox\" value=\"\">\n                                  <span class=\"cr\"><i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i></span>\n                                  <span class=\"text-inverse\">I read and accept <a href=\"javascript:;\">Terms &amp; Conditions.</a></span>\n                                </label>\n                              </div>\n                            </div>\n                            <div class=\"col-md-12\">\n                              <div class=\"checkbox-fade fade-in-primary\">\n                                <label>\n                                  <input type=\"checkbox\" value=\"\">\n                                  <span class=\"cr\"><i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i></span>\n                                  <span class=\"text-inverse\">Send me the <a href=\"javascript:;\">Newsletter</a> weekly.</span>\n                                </label>\n                              </div>\n                            </div>\n                          </div>\n                          <div class=\"row m-t-30\">\n                            <div class=\"col-md-12\">\n                              <button type=\"button\" class=\"btn btn-primary btn-md btn-block waves-effect text-center m-b-20\">Sign up now.</button>\n                            </div>\n                          </div>\n                          <hr/>\n                          <div class=\"row\">\n                            <div class=\"col-md-10\">\n                              <p class=\"text-inverse text-left m-b-0\">Thank you and enjoy our website.</p>\n                              <p class=\"text-inverse text-left\"><b>Your Autentification Team</b></p>\n                            </div>\n                            <div class=\"col-md-2\">\n                              <img src=\"assets/images/auth/Logo-small-bottom.png\" alt=\"small-logo.png\">\n                            </div>\n                          </div>\n                        </div>\n                      </form>\n                      <!-- end of form -->\n                    </div>\n                    <!-- Authentication card end -->\n                  </div>\n                  <!-- end of col-sm-12 -->\n                </div>\n                <!-- end of row -->\n              </div>\n              <!-- end of -->\n            </section>\n            <div class=\"footer bg-inverse\">\n              <p class=\"text-center\">Copyright &copy; 2017 MASH ABLE ADMIN , All rights reserved.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/authentication/registration/with-social-header-footer/with-social-header-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithSocialHeaderFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WithSocialHeaderFooterComponent = (function () {
    function WithSocialHeaderFooterComponent() {
        this.navType = 'st2';
        this.themeLayout = 'vertical';
        this.vNavigationView = 'view1';
        this.verticalPlacement = 'left';
        this.verticalLayout = 'wide';
        this.deviceType = 'desktop';
        this.verticalNavType = 'expanded';
        this.verticalEffect = 'shrink';
        this.pcodedHeaderPosition = 'fixed';
        this.pcodedSidebarPosition = 'fixed';
        this.headerTheme = 'theme1';
        this.logoTheme = 'theme1';
        this.toggleOn = true;
        this.headerFixedMargin = '80px';
        this.navBarTheme = 'themelight1';
        this.activeItemTheme = 'theme4';
        this.isCollapsedMobile = 'no-block';
        this.isCollapsedSideBar = 'no-block';
        this.chatToggle = 'out';
        this.chatToggleInverse = 'in';
        this.chatInnerToggle = 'off';
        this.chatInnerToggleInverse = 'on';
        this.menuTitleTheme = 'theme5';
        this.itemBorder = true;
        this.itemBorderStyle = 'none';
        this.subItemBorder = true;
        this.subItemIcon = 'style6';
        this.dropDownIcon = 'style1';
        this.isSidebarChecked = true;
        this.isHeaderChecked = true;
    }
    WithSocialHeaderFooterComponent.prototype.ngOnInit = function () {
    };
    WithSocialHeaderFooterComponent.prototype.onResize = function (event) {
        this.innerHeight = event.target.innerHeight + 'px';
        /* menu responsive */
        this.windowWidth = event.target.innerWidth;
        var reSizeFlag = true;
        if (this.deviceType === 'tablet' && this.windowWidth >= 768 && this.windowWidth <= 1024) {
            reSizeFlag = false;
        }
        else if (this.deviceType === 'mobile' && this.windowWidth < 768) {
            reSizeFlag = false;
        }
        /* for check device */
        if (reSizeFlag) {
            this.setMenuAttributes(this.windowWidth);
        }
    };
    WithSocialHeaderFooterComponent.prototype.setMenuAttributes = function (windowWidth) {
        if (windowWidth >= 768 && windowWidth <= 1024) {
            this.deviceType = 'tablet';
            this.verticalNavType = 'offcanvas';
            this.verticalEffect = 'push';
        }
        else if (windowWidth < 768) {
            this.deviceType = 'mobile';
            this.verticalNavType = 'offcanvas';
            this.verticalEffect = 'overlay';
        }
        else {
            this.deviceType = 'desktop';
            this.verticalNavType = 'expanded';
            this.verticalEffect = 'shrink';
        }
    };
    WithSocialHeaderFooterComponent.prototype.onMobileMenu = function () {
        this.isCollapsedMobile = this.isCollapsedMobile === 'yes-block' ? 'no-block' : 'yes-block';
    };
    return WithSocialHeaderFooterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('searchFriends'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], WithSocialHeaderFooterComponent.prototype, "search_friends", void 0);
WithSocialHeaderFooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-with-social-header-footer',
        template: __webpack_require__("../../../../../src/app/pages/authentication/registration/with-social-header-footer/with-social-header-footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/authentication/registration/with-social-header-footer/with-social-header-footer.component.css")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('mobileMenuTop', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('no-block, void', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                    overflow: 'hidden',
                    height: '0px',
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('yes-block', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                    height: __WEBPACK_IMPORTED_MODULE_1__angular_animations__["AUTO_STYLE"],
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('no-block <=> yes-block', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('400ms ease-in-out')
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], WithSocialHeaderFooterComponent);

var _a;
//# sourceMappingURL=with-social-header-footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/authentication/registration/with-social/with-social.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/authentication/registration/with-social/with-social.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"login p-fixed d-flex text-center bg-primary common-img-bg\">\n  <!-- starts -->\n  <div class=\"auth-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <!-- Authentication card start -->\n        <div class=\"login-card card-body auth-body\">\n          <form class=\"md-float-material\">\n            <div class=\"text-center\">\n              <img src=\"assets/images/auth/logo-dark.png\" alt=\"logo.png\">\n            </div>\n            <div class=\"auth-box\">\n              <div class=\"row m-b-20\">\n                <div class=\"col-md-12\">\n                  <h3 class=\"text-center txt-primary\">Sign up. It is fast and easy.</h3>\n                </div>\n              </div>\n              <p class=\"text-inverse b-b-default text-left p-b-5\">Sign in easily with your social account:</p>\n              <div class=\"row m-b-20\">\n                <div class=\"col-md-6\">\n                  <button class=\"btn btn-facebook m-b-5\"><i class=\"icofont icofont-social-facebook\"></i>facebook</button>\n                </div>\n                <div class=\"col-md-6\">\n                  <button class=\"btn btn-twitter m-b-5\"><i class=\"icofont icofont-social-twitter\"></i>twitter</button>\n                </div>\n              </div>\n              <p class=\"text-inverse b-b-default text-left p-b-5\">Sign in with your regular account</p>\n              <div class=\"input-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Choose Username\">\n                <span class=\"md-line\"></span>\n              </div>\n              <div class=\"input-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Your Email Address\">\n                <span class=\"md-line\"></span>\n              </div>\n              <div class=\"input-group\">\n                <input type=\"password\" class=\"form-control\" placeholder=\"Choose Password\">\n                <span class=\"md-line\"></span>\n              </div>\n              <div class=\"input-group\">\n                <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\">\n                <span class=\"md-line\"></span>\n              </div>\n              <div class=\"row m-t-25 text-left\">\n                <div class=\"col-md-12\">\n                  <div class=\"checkbox-fade fade-in-primary\">\n                    <label>\n                      <input type=\"checkbox\" value=\"\">\n                      <span class=\"cr\"><i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i></span>\n                      <span class=\"text-inverse\">I read and accept <a href=\"javascript:;\">Terms &amp; Conditions.</a></span>\n                    </label>\n                  </div>\n                </div>\n                <div class=\"col-md-12\">\n                  <div class=\"checkbox-fade fade-in-primary\">\n                    <label>\n                      <input type=\"checkbox\" value=\"\">\n                      <span class=\"cr\"><i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i></span>\n                      <span class=\"text-inverse\">Send me the <a href=\"javascript:;\">Newsletter</a> weekly.</span>\n                    </label>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row m-t-30\">\n                <div class=\"col-md-12\">\n                  <button type=\"button\" class=\"btn btn-primary btn-md btn-block waves-effect text-center m-b-20\">Sign up now.</button>\n                </div>\n              </div>\n              <hr/>\n              <div class=\"row\">\n                <div class=\"col-md-10\">\n                  <p class=\"text-inverse text-left m-b-0\">Thank you and enjoy our website.</p>\n                  <p class=\"text-inverse text-left\"><b>Your Autentification Team</b></p>\n                </div>\n                <div class=\"col-md-2\">\n                  <img src=\"assets/images/auth/Logo-small-bottom.png\" alt=\"small-logo.png\">\n                </div>\n              </div>\n            </div>\n          </form>\n          <!-- end of form -->\n        </div>\n        <!-- Authentication card end -->\n      </div>\n      <!-- end of col-sm-12 -->\n    </div>\n    <!-- end of row -->\n  </div>\n  <!-- end of -->\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/pages/authentication/registration/with-social/with-social.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithSocialComponent; });
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

var WithSocialComponent = (function () {
    function WithSocialComponent() {
    }
    WithSocialComponent.prototype.ngOnInit = function () {
    };
    return WithSocialComponent;
}());
WithSocialComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-with-social',
        template: __webpack_require__("../../../../../src/app/pages/authentication/registration/with-social/with-social.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/authentication/registration/with-social/with-social.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WithSocialComponent);

//# sourceMappingURL=with-social.component.js.map

/***/ }),

/***/ "../../../../angular2-wizard/dist/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var wizard_component_1 = __webpack_require__("../../../../angular2-wizard/dist/src/wizard.component.js");
var wizard_step_component_1 = __webpack_require__("../../../../angular2-wizard/dist/src/wizard-step.component.js");
__export(__webpack_require__("../../../../angular2-wizard/dist/src/wizard.component.js"));
__export(__webpack_require__("../../../../angular2-wizard/dist/src/wizard-step.component.js"));
var FormWizardModule = FormWizardModule_1 = (function () {
    function FormWizardModule() {
    }
    FormWizardModule.forRoot = function () {
        return {
            ngModule: FormWizardModule_1
        };
    };
    return FormWizardModule;
}());
FormWizardModule = FormWizardModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [
            wizard_component_1.WizardComponent,
            wizard_step_component_1.WizardStepComponent
        ],
        exports: [
            wizard_component_1.WizardComponent,
            wizard_step_component_1.WizardStepComponent
        ]
    })
], FormWizardModule);
exports.FormWizardModule = FormWizardModule;
var FormWizardModule_1;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../angular2-wizard/dist/src/wizard-step.component.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var WizardStepComponent = (function () {
    function WizardStepComponent() {
        this.hidden = false;
        this.isValid = true;
        this.showNext = true;
        this.showPrev = true;
        this.onNext = new core_1.EventEmitter();
        this.onPrev = new core_1.EventEmitter();
        this.onComplete = new core_1.EventEmitter();
        this._isActive = false;
        this.isDisabled = true;
    }
    Object.defineProperty(WizardStepComponent.prototype, "isActive", {
        get: function () {
            return this._isActive;
        },
        set: function (isActive) {
            this._isActive = isActive;
            this.isDisabled = false;
        },
        enumerable: true,
        configurable: true
    });
    return WizardStepComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WizardStepComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WizardStepComponent.prototype, "hidden", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WizardStepComponent.prototype, "isValid", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WizardStepComponent.prototype, "showNext", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WizardStepComponent.prototype, "showPrev", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], WizardStepComponent.prototype, "onNext", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], WizardStepComponent.prototype, "onPrev", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], WizardStepComponent.prototype, "onComplete", void 0);
__decorate([
    core_1.Input('isActive'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], WizardStepComponent.prototype, "isActive", null);
WizardStepComponent = __decorate([
    core_1.Component({
        selector: 'wizard-step',
        template: "\n    <div [hidden]=\"!isActive\">\n      <ng-content></ng-content>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], WizardStepComponent);
exports.WizardStepComponent = WizardStepComponent;
//# sourceMappingURL=wizard-step.component.js.map

/***/ }),

/***/ "../../../../angular2-wizard/dist/src/wizard.component.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var wizard_step_component_1 = __webpack_require__("../../../../angular2-wizard/dist/src/wizard-step.component.js");
var WizardComponent = (function () {
    function WizardComponent() {
        this._steps = [];
        this._isCompleted = false;
        this.onStepChanged = new core_1.EventEmitter();
    }
    WizardComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.wizardSteps.forEach(function (step) { return _this._steps.push(step); });
        this.steps[0].isActive = true;
    };
    Object.defineProperty(WizardComponent.prototype, "steps", {
        get: function () {
            return this._steps.filter(function (step) { return !step.hidden; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "isCompleted", {
        get: function () {
            return this._isCompleted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "activeStep", {
        get: function () {
            return this.steps.find(function (step) { return step.isActive; });
        },
        set: function (step) {
            if (step !== this.activeStep && !step.isDisabled) {
                this.activeStep.isActive = false;
                step.isActive = true;
                this.onStepChanged.emit(step);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "activeStepIndex", {
        get: function () {
            return this.steps.indexOf(this.activeStep);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "hasNextStep", {
        get: function () {
            return this.activeStepIndex < this.steps.length - 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "hasPrevStep", {
        get: function () {
            return this.activeStepIndex > 0;
        },
        enumerable: true,
        configurable: true
    });
    WizardComponent.prototype.goToStep = function (step) {
        if (!this.isCompleted) {
            this.activeStep = step;
        }
    };
    WizardComponent.prototype.next = function () {
        if (this.hasNextStep) {
            var nextStep = this.steps[this.activeStepIndex + 1];
            this.activeStep.onNext.emit();
            nextStep.isDisabled = false;
            this.activeStep = nextStep;
        }
    };
    WizardComponent.prototype.previous = function () {
        if (this.hasPrevStep) {
            var prevStep = this.steps[this.activeStepIndex - 1];
            this.activeStep.onPrev.emit();
            prevStep.isDisabled = false;
            this.activeStep = prevStep;
        }
    };
    WizardComponent.prototype.complete = function () {
        this.activeStep.onComplete.emit();
        this._isCompleted = true;
    };
    return WizardComponent;
}());
__decorate([
    core_1.ContentChildren(wizard_step_component_1.WizardStepComponent),
    __metadata("design:type", core_1.QueryList)
], WizardComponent.prototype, "wizardSteps", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], WizardComponent.prototype, "onStepChanged", void 0);
WizardComponent = __decorate([
    core_1.Component({
        selector: 'form-wizard',
        template: "<div class=\"card\">\n    <div class=\"card-header\">\n      <ul class=\"nav nav-justified\">\n        <li class=\"nav-item\" *ngFor=\"let step of steps\" [ngClass]=\"{'active': step.isActive, 'enabled': !step.isDisabled, 'disabled': step.isDisabled, 'completed': isCompleted}\">\n          <a (click)=\"goToStep(step)\">{{step.title}}</a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"card-block\">\n      <ng-content></ng-content>\n    </div>\n    <div class=\"card-footer\" [hidden]=\"isCompleted\">\n        <button type=\"button\" class=\"btn btn-secondary float-left\" (click)=\"previous()\" [hidden]=\"!hasPrevStep || !activeStep.showPrev\">Previous</button>\n        <button type=\"button\" class=\"btn btn-secondary float-right\" (click)=\"next()\" [disabled]=\"!activeStep.isValid\" [hidden]=\"!hasNextStep || !activeStep.showNext\">Next</button>\n        <button type=\"button\" class=\"btn btn-secondary float-right\" (click)=\"complete()\" [disabled]=\"!activeStep.isValid\" [hidden]=\"hasNextStep\">Done</button>\n    </div>\n  </div>",
        styles: [
            '.card { height: 100%; }',
            '.card-header { background-color: #fff; padding: 0; font-size: 1.25rem; }',
            '.card-block { overflow-y: auto; }',
            '.card-footer { background-color: #fff; border-top: 0 none; }',
            '.nav-item { padding: 1rem 0rem; border-bottom: 0.5rem solid #ccc; }',
            '.active { font-weight: bold; color: black; border-bottom-color: #1976D2 !important; }',
            '.enabled { cursor: pointer; border-bottom-color: rgb(88, 162, 234); }',
            '.disabled { color: #ccc; }',
            '.completed { cursor: default; }'
        ]
    }),
    __metadata("design:paramtypes", [])
], WizardComponent);
exports.WizardComponent = WizardComponent;
//# sourceMappingURL=wizard.component.js.map

/***/ })

});
//# sourceMappingURL=registration.module.chunk.js.map