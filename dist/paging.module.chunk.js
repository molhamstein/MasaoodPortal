webpackJsonp(["paging.module"],{

/***/ "../../../../../src/app/pages/ui-elements/tables/data-table/paging/paging.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ui-elements/tables/data-table/paging/paging.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card [title]=\"'Ng-X Pagination'\">\n      <span class=\"m-b-20\">use class <code>data-table</code> with ngx-datatable</span><br><br>\n      <ngx-datatable\n        class=\"data-table\"\n        [rows]=\"rowsClient\"\n        [columns]=\"[{name:'Name'},{name:'Gender'},{name:'Company'}]\"\n        [columnMode]=\"'force'\"\n        [headerHeight]=\"50\"\n        [footerHeight]=\"50\"\n        [rowHeight]=\"'auto'\"\n        [limit]=\"10\">\n      </ngx-datatable>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/ui-elements/tables/data-table/paging/paging.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagingComponent; });
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

var PagingComponent = (function () {
    function PagingComponent() {
        var _this = this;
        this.rowsClient = [];
        this.fetch(function (data) {
            _this.rowsClient = data;
        });
    }
    PagingComponent.prototype.ngOnInit = function () {
    };
    PagingComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/company.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    return PagingComponent;
}());
PagingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-paging',
        template: __webpack_require__("../../../../../src/app/pages/ui-elements/tables/data-table/paging/paging.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/ui-elements/tables/data-table/paging/paging.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PagingComponent);

//# sourceMappingURL=paging.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/ui-elements/tables/data-table/paging/paging.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pagingRoutes", function() { return pagingRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagingModule", function() { return PagingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paging_component__ = __webpack_require__("../../../../../src/app/pages/ui-elements/tables/data-table/paging/paging.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var pagingRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__paging_component__["a" /* PagingComponent */],
        data: {
            breadcrumb: 'Table Paging',
            icon: 'icofont-table bg-c-blue',
            status: true
        }
    }
];
var PagingModule = (function () {
    function PagingModule() {
    }
    return PagingModule;
}());
PagingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(pagingRoutes),
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__["NgxDatatableModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__paging_component__["a" /* PagingComponent */]]
    })
], PagingModule);

//# sourceMappingURL=paging.module.js.map

/***/ })

});
//# sourceMappingURL=paging.module.chunk.js.map