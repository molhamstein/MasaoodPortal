webpackJsonp(["data-table.module"],{

/***/ "../../../../../src/app/pages/ui-elements/tables/data-table/data-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTableComponent; });
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

var DataTableComponent = (function () {
    function DataTableComponent() {
    }
    DataTableComponent.prototype.ngOnInit = function () {
    };
    return DataTableComponent;
}());
DataTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-data-table',
        template: '<router-outlet><app-spinner></app-spinner></router-outlet>'
    }),
    __metadata("design:paramtypes", [])
], DataTableComponent);

//# sourceMappingURL=data-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/ui-elements/tables/data-table/data-table.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableRoutes", function() { return DataTableRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableModule", function() { return DataTableModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_table_component__ = __webpack_require__("../../../../../src/app/pages/ui-elements/tables/data-table/data-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DataTableRoutes = [
    {
        path: '',
        data: {
            breadcrumb: 'Data Tables',
            status: false
        },
        children: [
            {
                path: 'basic',
                loadChildren: './basic-datatable/basic-datatable.module#BasicDatatableModule'
            }, {
                path: 'editable',
                loadChildren: './inline-edit/inline-edit.module#InlineEditModule'
            }, {
                path: 'row-details',
                loadChildren: './child-row/child-row.module#ChildRowModule'
            }, {
                path: 'paging',
                loadChildren: './paging/paging.module#PagingModule'
            }, {
                path: 'selection',
                loadChildren: './selection/selection.module#SelectionModule'
            }, {
                path: 'other',
                loadChildren: './other-datatable/other-datatable.module#OtherDatatableModule'
            }
        ]
    }
];
var DataTableModule = (function () {
    function DataTableModule() {
    }
    return DataTableModule;
}());
DataTableModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(DataTableRoutes),
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__data_table_component__["a" /* DataTableComponent */]]
    })
], DataTableModule);

//# sourceMappingURL=data-table.module.js.map

/***/ })

});
//# sourceMappingURL=data-table.module.chunk.js.map