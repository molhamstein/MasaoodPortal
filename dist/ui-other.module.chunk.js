webpackJsonp(["ui-other.module"],{

/***/ "../../../../../src/app/pages/ui-elements/basic/ui-other/ui-other.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ui-elements/basic/ui-other/ui-other.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <!-- Panel card start -->\n    <app-card [title]=\"'Panel'\" [blockClass]=\"'panels-wells'\">\n      <div class=\"row\">\n        <div class=\"col-xl-2 col-lg-4 col-md-4 col-sm-6\">\n          <div class=\"panel panel-default\">\n            <div class=\"panel-heading bg-default txt-white\">\n              Default Panel\n            </div>\n            <div class=\"panel-body\">\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.</p>\n            </div>\n            <div class=\"panel-footer\">\n              Panel Footer\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xl-2 col-lg-4 col-md-4 col-sm-6\">\n          <div class=\"panel panel-success\">\n            <div class=\"panel-heading bg-success\">\n              Success Panel\n            </div>\n            <div class=\"panel-body\">\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.</p>\n            </div>\n            <div class=\"panel-footer text-success\">\n              Panel Footer\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xl-2 col-lg-4 col-md-4 col-sm-6\">\n          <div class=\"panel panel-primary\">\n            <div class=\"panel-heading bg-primary\">\n              Primary Panel\n            </div>\n            <div class=\"panel-body\">\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.</p>\n            </div>\n            <div class=\"panel-footer text-primary\">\n              Panel Footer\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xl-2 col-lg-4 col-md-4 col-sm-6\">\n          <div class=\"panel panel-danger\">\n            <div class=\"panel-heading bg-danger\">\n              Danger Panel\n            </div>\n            <div class=\"panel-body\">\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.</p>\n            </div>\n            <div class=\"panel-footer text-danger\">\n              Panel Footer\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xl-2 col-lg-4 col-md-4 col-sm-6\">\n          <div class=\"panel panel-warning\">\n            <div class=\"panel-heading bg-warning\">\n              Warning Panel\n            </div>\n            <div class=\"panel-body\">\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.</p>\n            </div>\n            <div class=\"panel-footer text-warning\">\n              Panel Footer\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xl-2 col-lg-4 col-md-4 col-sm-6\">\n          <div class=\"panel panel-info\">\n            <div class=\"panel-heading bg-info\">\n              Info Panel\n            </div>\n            <div class=\"panel-body\">\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan.</p>\n            </div>\n            <div class=\"panel-footer text-info\">\n              Panel Footer\n            </div>\n          </div>\n        </div>\n        <!-- end of row -->\n      </div>\n    </app-card>\n    <!-- Panel card end -->\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <!-- Wells card start -->\n    <app-card [title]=\"'Wells'\" [blockClass]=\"'panels-wells'\">\n      <div class=\"row\">\n        <div class=\"col-xl-12 col-lg-4 col-md-4 col-sm-6\">\n          <div class=\"well well-sm\">\n            Small Well\n          </div>\n          <div class=\"well\">\n            Normal Well\n          </div>\n          <div class=\"well well-lg\">\n            Large Well\n          </div>\n        </div>\n      </div>\n    </app-card>\n    <!-- Wells card end -->\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-6\">\n    <app-card [title]=\"'Default'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\n      <div class=\"sub-title\">Basic</div>\n      <pagination [totalItems]=\"totalItems\" [boundaryLinks]=\"true\" (pageChanged)=\"pageChanged($event)\"></pagination>\n      <div class=\"sub-title m-t-15\">With Icon</div>\n      <pagination [boundaryLinks]=\"true\" [totalItems]=\"totalItems\" class=\"pagination-sm\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\"></pagination>\n    </app-card>\n  </div>\n  <div class=\"col-sm-6\">\n    <app-card [title]=\"'States & Limits'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\n      <div class=\"sub-title m-t-15\">Limit the maximum visible buttons</div>\n      <pagination [totalItems]=\"bigTotalItems\" [maxSize]=\"maxSize\" class=\"pagination-sm\" [boundaryLinks]=\"true\"></pagination>\n      <div class=\"sub-title m-t-15\"></div>\n      <pagination [totalItems]=\"bigTotalItems\" [maxSize]=\"maxSize\" class=\"pagination-md\" [boundaryLinks]=\"true\" [rotate]=\"false\" (numPages)=\"numPages = $event\"></pagination>\n    </app-card>\n  </div>\n  <div class=\"col-sm-6\">\n    <app-card [title]=\"'Pager'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <pagination [directionLinks]=\"false\" [totalItems]=\"totalItems\" (numPages)=\"smallNumPages = $event\"></pagination>\n        </div>\n        <div class=\"col-sm-6\">\n          <pager [totalItems]=\"totalItems\" (pageChanged)=\"pageChanged($event)\" pageBtnClass=\"btn btn-primary\" itemsPerPage=\"10\"></pager>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-sm-6\">\n    <app-card [title]=\"'Disabled'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\n      <pagination [totalItems]=\"bigTotalItems\" [disabled]=\"true\" [maxSize]=\"maxSize\" class=\"pagination-md\" [boundaryLinks]=\"true\"></pagination>\n    </app-card>\n  </div>\n  <div class=\"col-sm-6\">\n    <app-card [title]=\"'Pagination Size'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\n      <div class=\"sub-title m-t-15\">Large</div>\n      <pagination [totalItems]=\"bigTotalItems\" [maxSize]=\"maxSize\" class=\"pagination-lg\" [boundaryLinks]=\"true\"></pagination>\n      <div class=\"sub-title m-t-15\">Medium</div>\n      <pagination [totalItems]=\"bigTotalItems\" [maxSize]=\"maxSize\" class=\"pagination-md\" [boundaryLinks]=\"true\"></pagination>\n      <div class=\"sub-title m-t-15\">Small</div>\n      <pagination [totalItems]=\"bigTotalItems\" [maxSize]=\"maxSize\" class=\"pagination-sm\" [boundaryLinks]=\"true\"></pagination>\n    </app-card>\n  </div>\n  <div class=\"col-sm-6\">\n    <app-card [title]=\"'Pagination Advance'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\n      <div class=\"sub-title m-t-15\">maxSize = 5, rotate = false</div>\n      <ngb-pagination [collectionSize]=\"120\" [(page)]=\"pageAdvance\" [maxSize]=\"5\" [boundaryLinks]=\"true\"></ngb-pagination>\n      <div class=\"sub-title m-t-15\">maxSize = 5, rotate = true</div>\n      <ngb-pagination [collectionSize]=\"120\" [(page)]=\"pageAdvance\" [maxSize]=\"5\" [rotate]=\"true\" [boundaryLinks]=\"true\"></ngb-pagination>\n      <div class=\"sub-title m-t-15\">maxSize = 5, rotate = true, ellipses = false</div>\n      <ngb-pagination [collectionSize]=\"120\" [(page)]=\"pageAdvance\" [maxSize]=\"5\" [rotate]=\"true\" [ellipses]=\"false\" [boundaryLinks]=\"true\"></ngb-pagination>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/ui-elements/basic/ui-other/ui-other.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiOtherComponent; });
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

var UiOtherComponent = (function () {
    function UiOtherComponent() {
        this.maxSize = 5;
        this.bigTotalItems = 175;
        this.bigCurrentPage = 1;
        this.numPages = 0;
        this.totalItems = 64;
        this.currentPage = 4;
        this.currentPager = 2;
        this.smallNumPages = 1;
        this.pageAdvance = 1;
    }
    UiOtherComponent.prototype.ngOnInit = function () {
    };
    UiOtherComponent.prototype.setPage = function (pageNo) {
        this.currentPage = pageNo;
    };
    UiOtherComponent.prototype.pageChanged = function (event) { };
    return UiOtherComponent;
}());
UiOtherComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-ui-other',
        template: __webpack_require__("../../../../../src/app/pages/ui-elements/basic/ui-other/ui-other.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/ui-elements/basic/ui-other/ui-other.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UiOtherComponent);

//# sourceMappingURL=ui-other.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/ui-elements/basic/ui-other/ui-other.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherRoutes", function() { return OtherRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiOtherModule", function() { return UiOtherModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ui_other_component__ = __webpack_require__("../../../../../src/app/pages/ui-elements/basic/ui-other/ui-other.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_pagination__ = __webpack_require__("../../../../ngx-bootstrap/pagination/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var OtherRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__ui_other_component__["a" /* UiOtherComponent */],
        data: {
            breadcrumb: 'Other',
            icon: 'icofont-layout bg-c-blue',
            status: true
        }
    }
];
var UiOtherModule = (function () {
    function UiOtherModule() {
    }
    return UiOtherModule;
}());
UiOtherModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(OtherRoutes),
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_pagination__["a" /* PaginationModule */].forRoot()
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__ui_other_component__["a" /* UiOtherComponent */]]
    })
], UiOtherModule);

//# sourceMappingURL=ui-other.module.js.map

/***/ })

});
//# sourceMappingURL=ui-other.module.chunk.js.map