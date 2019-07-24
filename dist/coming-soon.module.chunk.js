webpackJsonp(["coming-soon.module"],{

/***/ "../../../../../src/app/pages/maintenance/coming-soon/coming-soon.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/maintenance/coming-soon/coming-soon.component.html":
/***/ (function(module, exports) {

module.exports = "<app-card [title]=\"'Select Your Layout'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-3 m-b-30\">\r\n      <a href=\"http://html.codedthemes.com/guru-able/default/comming-soon/index1.html\" target=\"_blank\"><img src=\"assets/images/commingsoon/cs-1.jpg\" alt=\"Layout-1\" class=\"img-fluid img-thumbnail\"></a>\r\n    </div>\r\n    <div class=\"col-sm-3 m-b-30\">\r\n      <a href=\"http://html.codedthemes.com/guru-able/default/comming-soon/index2.html\" target=\"_blank\"><img src=\"assets/images/commingsoon/cs-2.jpg\" alt=\"Layout-1\" class=\"img-fluid img-thumbnail\"></a>\r\n    </div>\r\n  </div>\r\n</app-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/maintenance/coming-soon/coming-soon.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComingSoonComponent; });
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

var ComingSoonComponent = (function () {
    function ComingSoonComponent() {
    }
    ComingSoonComponent.prototype.ngOnInit = function () {
    };
    return ComingSoonComponent;
}());
ComingSoonComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-coming-soon',
        template: __webpack_require__("../../../../../src/app/pages/maintenance/coming-soon/coming-soon.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/maintenance/coming-soon/coming-soon.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ComingSoonComponent);

//# sourceMappingURL=coming-soon.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/maintenance/coming-soon/coming-soon.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingSoonRoutes", function() { return ComingSoonRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingSoonModule", function() { return ComingSoonModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coming_soon_component__ = __webpack_require__("../../../../../src/app/pages/maintenance/coming-soon/coming-soon.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ComingSoonRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__coming_soon_component__["a" /* ComingSoonComponent */],
        data: {
            breadcrumb: 'Coming Soon',
            icon: 'icofont-listine-dots bg-c-pink',
            status: true
        }
    }];
var ComingSoonModule = (function () {
    function ComingSoonModule() {
    }
    return ComingSoonModule;
}());
ComingSoonModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(ComingSoonRoutes),
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__coming_soon_component__["a" /* ComingSoonComponent */]]
    })
], ComingSoonModule);

//# sourceMappingURL=coming-soon.module.js.map

/***/ })

});
//# sourceMappingURL=coming-soon.module.chunk.js.map