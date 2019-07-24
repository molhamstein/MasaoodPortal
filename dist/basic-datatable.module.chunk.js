webpackJsonp(["basic-datatable.module"],{

/***/ "../../../../../src/app/pages/ui-elements/tables/data-table/basic-datatable/basic-datatable.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ui-elements/tables/data-table/basic-datatable/basic-datatable.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card [title]=\"'Ng-X Basic Datatable'\">\n      <span class=\"m-b-20\">use class <code>data-table</code> with ngx-datatable</span><br><br>\n      <ngx-datatable\n        class=\"data-table table-responsive\"\n        [rows]=\"rowsBasic\"\n        [loadingIndicator]=\"loadingIndicator\"\n        [columns]=\"columns\"\n        [columnMode]=\"'force'\"\n        [headerHeight]=\"50\"\n        [footerHeight]=\"50\"\n        [rowHeight]=\"50\"\n        [reorderable]=\"reorderable\">\n      </ngx-datatable>\n    </app-card>\n\n    <app-card [title]=\"'Ng-X 100K Virtual Scrolling Rows'\">\n      <span class=\"m-b-20\">use class <code>data-table</code> with ngx-datatable and <code>rowHeight</code></span><br><br>\n      <ngx-datatable\n        class='data-table scroll'\n        [rows]='rows'\n        [columnMode]=\"'force'\"\n        [headerHeight]=\"50\"\n        [footerHeight]=\"50\"\n        [rowHeight]=\"getRowHeight\"\n        [limit]=\"10\"\n        [scrollbarV]=\"true\"\n        (page)=\"onPage($event)\">\n        <ngx-datatable-column name=\"Name\">\n          <ng-template let-value=\"value\" ngx-datatable-cell-template>\n            <strong>{{value}}</strong>\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Gender\">\n          <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n            <i [innerHTML]=\"row['name']\"></i> and <i>{{value}}</i>\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"Row Height\" prop=\"height\">\n        </ngx-datatable-column>\n      </ngx-datatable>\n    </app-card>\n\n    <app-card [title]=\"'Ng-X Full Screen'\" [blockClass]=\"'table-border-style'\" [classHeader]=\"true\">\n      <span class=\"code-header\">use class <code>data-table </code>and<code> fullscreen</code> with ngx-datatable.</span>\n      <ngx-datatable\n        class=\"data-table fullscreen\"\n        [columnMode]=\"'force'\"\n        [headerHeight]=\"50\"\n        [footerHeight]=\"0\"\n        [rowHeight]=\"50\"\n        [scrollbarV]=\"true\"\n        [scrollbarH]=\"true\"\n        [rows]=\"fullScreenRow\">\n        <ngx-datatable-column name=\"Id\"></ngx-datatable-column>\n        <ngx-datatable-column name=\"Name\"></ngx-datatable-column>\n        <ngx-datatable-column name=\"Gender\"></ngx-datatable-column>\n        <ngx-datatable-column name=\"Age\"></ngx-datatable-column>\n        <ngx-datatable-column name=\"City\" prop=\"address.city\"></ngx-datatable-column>\n        <ngx-datatable-column name=\"State\" prop=\"address.state\"></ngx-datatable-column>\n      </ngx-datatable>\n    </app-card>\n\n    <app-card [title]=\"'Ng-X Search/Filter'\" [classHeader]=\"true\">\n      <span class=\"code-header\">use class <code>data-table </code> with ngx-datatable and set <code>search element</code>.</span>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <label class=\"form-inline f-right\">\n            <div class=\"form-group\">\n              <label>Search: </label>\n              <input\n                type='text'\n                class=\"form-control input-sm m-l-10\"\n                placeholder='Search Name'\n                (keyup)='updateFilter($event)'\n              />\n            </div>\n          </label>\n        </div>\n      </div>\n      <ngx-datatable\n        #table\n        class='data-table'\n        [columns]=\"columns\"\n        [columnMode]=\"'force'\"\n        [headerHeight]=\"50\"\n        [footerHeight]=\"50\"\n        [rowHeight]=\"50\"\n        [limit]=\"10\"\n        [rows]='rowsFilter'>\n      </ngx-datatable>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/ui-elements/tables/data-table/basic-datatable/basic-datatable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicDatatableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BasicDatatableComponent = (function () {
    function BasicDatatableComponent() {
        var _this = this;
        this.rowsBasic = [];
        this.fullScreenRow = [];
        this.loadingIndicator = true;
        this.reorderable = true;
        this.columns = [
            { prop: 'name' },
            { name: 'Gender' },
            { name: 'Company' }
        ];
        this.rows = [];
        this.expanded = {};
        this.rowsFilter = [];
        this.tempFilter = [];
        this.fetchBasicData(function (data) {
            _this.rowsBasic = data;
            setTimeout(function () { _this.loadingIndicator = false; }, 1500);
        });
        this.fetch(function (data) {
            _this.rows = data;
        });
        this.fetchFullScreenData(function (data) {
            _this.fullScreenRow = data;
        });
        this.fetchFilterData(function (data) {
            // cache our list
            _this.tempFilter = data.slice();
            // push our inital complete list
            _this.rowsFilter = data;
        });
    }
    BasicDatatableComponent.prototype.ngOnInit = function () {
    };
    BasicDatatableComponent.prototype.fetchBasicData = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', 'assets/data/basic.json');
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    BasicDatatableComponent.prototype.fetchFullScreenData = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', 'assets/data/fullscreen.json');
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    BasicDatatableComponent.prototype.fetchFilterData = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/company.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    BasicDatatableComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.tempFilter.filter(function (d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.rowsFilter = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    };
    BasicDatatableComponent.prototype.onPage = function (event) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(function () {
            console.log('paged!', event);
        }, 100);
    };
    BasicDatatableComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/100k.json");
        req.onload = function () {
            var rows = JSON.parse(req.response);
            for (var _i = 0, rows_1 = rows; _i < rows_1.length; _i++) {
                var row = rows_1[_i];
                row.height = Math.floor(Math.random() * 80) + 50;
            }
            cb(rows);
        };
        req.send();
    };
    BasicDatatableComponent.prototype.getRowHeight = function (row) {
        return row.height;
    };
    return BasicDatatableComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable__["DatatableComponent"]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable__["DatatableComponent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable__["DatatableComponent"]) === "function" && _a || Object)
], BasicDatatableComponent.prototype, "table", void 0);
BasicDatatableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-basic-datatable',
        template: __webpack_require__("../../../../../src/app/pages/ui-elements/tables/data-table/basic-datatable/basic-datatable.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/ui-elements/tables/data-table/basic-datatable/basic-datatable.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BasicDatatableComponent);

var _a;
//# sourceMappingURL=basic-datatable.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/ui-elements/tables/data-table/basic-datatable/basic-datatable.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basicRoutes", function() { return basicRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicDatatableModule", function() { return BasicDatatableModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basic_datatable_component__ = __webpack_require__("../../../../../src/app/pages/ui-elements/tables/data-table/basic-datatable/basic-datatable.component.ts");
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






var basicRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__basic_datatable_component__["a" /* BasicDatatableComponent */],
        data: {
            breadcrumb: 'Basic Table',
            icon: 'icofont-table bg-c-blue',
            status: true
        }
    }
];
var BasicDatatableModule = (function () {
    function BasicDatatableModule() {
    }
    return BasicDatatableModule;
}());
BasicDatatableModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(basicRoutes),
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__["NgxDatatableModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__basic_datatable_component__["a" /* BasicDatatableComponent */]]
    })
], BasicDatatableModule);

//# sourceMappingURL=basic-datatable.module.js.map

/***/ })

});
//# sourceMappingURL=basic-datatable.module.chunk.js.map