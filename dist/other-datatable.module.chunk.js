webpackJsonp(["other-datatable.module"],{

/***/ "../../../../../src/app/pages/ui-elements/tables/data-table/other-datatable/other-datatable.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ui-elements/tables/data-table/other-datatable/other-datatable.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card [title]=\"'Angular Datatable'\">\n      <span class=\"m-b-20\">use class <code>table table-striped table-bordered full-data-table</code> with table element</span><br><br>\n      <div class=\"dt-responsive\">\n        <div class=\"row\">\n          <div class=\"col-xs-12 col-sm-12 col-sm-12 col-md-6\">\n            <div>\n              <label class=\"label-control\">Show\n                <select class=\"form-control input-sm full-data-show-entry\" [(ngModel)]=\"rowsOnPage\">\n                  <option [ngValue]=\"10\">10</option>\n                  <option [ngValue]=\"25\">25</option>\n                  <option [ngValue]=\"50\">50</option>\n                  <option [ngValue]=\"100\">100</option>\n                </select>\n                entries\n              </label>\n            </div>\n          </div>\n          <div class=\"col-xs-12 col-sm-12 col-md-6\">\n            <div style=\"text-align: right;\">\n              <label>Search:\n                <input type=\"search\" [(ngModel)]=\"filterQuery\" class=\"form-control input-sm full-data-search\" placeholder=\"Search name\">\n              </label>\n            </div>\n          </div>\n        </div>\n        <!-- <div class=\"panel-heading\">User information</div>-->\n        <div class=\"table-responsive\">\n          <table class=\"table table-striped table-bordered full-data-table\" [mfData]=\"data | dataFilter : filterQuery\" #mf=\"mfDataTable\"\n                 [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\n            <thead>\n            <tr>\n              <th>\n                <mfDefaultSorter  by=\"name\">Name</mfDefaultSorter>\n              </th>\n              <th>\n                <mfDefaultSorter  by=\"position\">Position</mfDefaultSorter>\n              </th>\n              <th>\n                <mfDefaultSorter by=\"office\">Office</mfDefaultSorter>\n              </th>\n              <th>\n                <mfDefaultSorter  by=\"age\">Age</mfDefaultSorter>\n              </th>\n              <th>\n                <mfDefaultSorter by=\"start-date\">Start date</mfDefaultSorter>\n              </th>\n              <th>\n                <mfDefaultSorter by=\"salary\">Salary</mfDefaultSorter>\n              </th>\n            </tr>\n            <tr>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let item of mf.data\">\n              <td>{{item.name}}</td>\n              <td>{{item.position}}</td>\n              <td>{{item.office}}</td>\n              <td>{{item.age}}</td>\n              <td>{{item.date}}</td>\n              <td>{{item.salary}}</td>\n            </tr>\n            </tbody>\n            <tfoot>\n            <tr>\n              <th>Name</th>\n              <th>Position</th>\n              <th>Office</th>\n              <th>Age</th>\n              <th>Start date</th>\n              <th>Salary</th>\n            </tr>\n            <tr>\n              <td colspan=\"6\">\n                <mfBootstrapPaginator class=\"pagination-main f-right\"></mfBootstrapPaginator>\n              </td>\n            </tr>\n            </tfoot>\n          </table>\n        </div>\n      </div>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/ui-elements/tables/data-table/other-datatable/other-datatable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherDatatableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OtherDatatableComponent = (function () {
    function OtherDatatableComponent(http) {
        this.http = http;
        this.rowsOnPage = 10;
        this.filterQuery = '';
        this.sortBy = '';
        this.sortOrder = 'desc';
    }
    OtherDatatableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("assets/data/data.json")
            .subscribe(function (data) {
            _this.data = data.json();
        });
    };
    return OtherDatatableComponent;
}());
OtherDatatableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-other-datatable',
        template: __webpack_require__("../../../../../src/app/pages/ui-elements/tables/data-table/other-datatable/other-datatable.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/ui-elements/tables/data-table/other-datatable/other-datatable.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], OtherDatatableComponent);

var _a;
//# sourceMappingURL=other-datatable.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/ui-elements/tables/data-table/other-datatable/other-datatable.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "otherRoutes", function() { return otherRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherDatatableModule", function() { return OtherDatatableModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__other_datatable_component__ = __webpack_require__("../../../../../src/app/pages/ui-elements/tables/data-table/other-datatable/other-datatable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_datatable__ = __webpack_require__("../../../../angular2-datatable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var otherRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__other_datatable_component__["a" /* OtherDatatableComponent */],
        data: {
            breadcrumb: 'Other',
            icon: 'icofont-table bg-c-blue',
            status: true
        }
    }
];
var OtherDatatableModule = (function () {
    function OtherDatatableModule() {
    }
    return OtherDatatableModule;
}());
OtherDatatableModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(otherRoutes),
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_datatable__["DataTableModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__other_datatable_component__["a" /* OtherDatatableComponent */]]
    })
], OtherDatatableModule);

//# sourceMappingURL=other-datatable.module.js.map

/***/ })

});
//# sourceMappingURL=other-datatable.module.chunk.js.map