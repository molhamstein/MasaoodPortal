webpackJsonp(["bootstrap-table.module"],{

/***/ "../../../../../src/app/pages/ui-elements/tables/bootstrap-table/bootstrap-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BootstrapTableComponent; });
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

var BootstrapTableComponent = (function () {
    function BootstrapTableComponent() {
    }
    BootstrapTableComponent.prototype.ngOnInit = function () {
    };
    return BootstrapTableComponent;
}());
BootstrapTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-bootstrap-table',
        template: '<router-outlet><app-spinner></app-spinner></router-outlet>'
    }),
    __metadata("design:paramtypes", [])
], BootstrapTableComponent);

//# sourceMappingURL=bootstrap-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/ui-elements/tables/bootstrap-table/bootstrap-table.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootstrapTableRoutes", function() { return BootstrapTableRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootstrapTableModule", function() { return BootstrapTableModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bootstrap_table_component__ = __webpack_require__("../../../../../src/app/pages/ui-elements/tables/bootstrap-table/bootstrap-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BootstrapTableRoutes = [
    {
        path: '',
        data: {
            breadcrumb: 'Bootstrap Tables',
            status: false
        },
        children: [
            {
                path: 'basic',
                loadChildren: './basic-bootstrap/basic-bootstrap.module#BasicBootstrapModule'
            }, {
                path: 'sizing',
                loadChildren: './sizing/sizing.module#SizingModule'
            }, {
                path: 'border',
                loadChildren: './border/border.module#BorderModule'
            }, {
                path: 'styling',
                loadChildren: './styling/styling.module#StylingModule'
            }
        ]
    }
];
var BootstrapTableModule = (function () {
    function BootstrapTableModule() {
    }
    return BootstrapTableModule;
}());
BootstrapTableModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(BootstrapTableRoutes),
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__bootstrap_table_component__["a" /* BootstrapTableComponent */]]
    })
], BootstrapTableModule);

//# sourceMappingURL=bootstrap-table.module.js.map

/***/ })

});
//# sourceMappingURL=bootstrap-table.module.chunk.js.map