webpackJsonp(["summary-invoice.module"],{

/***/ "../../../../../src/app/pages/invoice/summary-invoice/summary-invoice.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/invoice/summary-invoice/summary-invoice.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-6\">\n    <!-- Sales and expense card start -->\n    <app-card [title]=\"'Sales and Expenses'\">\n      <chart [type]=\"type1\" [data]=\"data1\" [options]=\"options\" style=\"height:290px;width:100%\"></chart>\n    </app-card>\n    <!-- Sales and expense card end -->\n  </div>\n  <div class=\"col-lg-6\">\n    <!-- Summary card start -->\n    <app-card [title]=\"'Summary'\">\n      <div id=\"chart2\"></div>\n    </app-card>\n    <!-- Summary card end -->\n  </div>\n  <div class=\"col-lg-6\">\n    <!-- Top Expense card start -->\n    <app-card [title]=\"'Top Expense'\">\n      <div id=\"chart3\"></div>\n    </app-card>\n    <!-- Top Expense card end -->\n  </div>\n  <div class=\"col-lg-6\">\n    <!-- Sales, Receipt and Dues card start -->\n    <app-card [title]=\"'Sales, Receipt and Dues'\" [blockClass]=\"'table-border-style'\">\n      <div class=\"table-responsive\">\n        <table class=\"table table-lg table-hover\">\n          <thead>\n          <tr>\n            <th>#</th>\n            <th>Sales</th>\n            <th>Receipt</th>\n            <th>Dues</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <th scope=\"row\">Today</th>\n            <td>$250.00</td>\n            <td>Otto</td>\n            <td>@mdo</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">This Week</th>\n            <td>$380.00</td>\n            <td>Thornton</td>\n            <td>@fat</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">This Month</th>\n            <td>$450.00</td>\n            <td>the Bird</td>\n            <td>@twitter</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">This Year</th>\n            <td>$600.00</td>\n            <td>the Bird</td>\n            <td>@twitter</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">Total</th>\n            <td>$600.00</td>\n            <td>the Bird</td>\n            <td>@twitter</td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n    <!-- Sales, Receipt and Dues card end -->\n  </div>\n  <div class=\"col-lg-12\">\n    <!-- Recent Orders card start -->\n    <app-card [title]=\"'Recent Orders'\" [blockClass]=\"'table-border-style'\">\n      <div class=\"table-responsive\">\n        <table class=\"table table-lg table-styling\">\n          <thead>\n          <tr class=\"table-primary\">\n            <th>#</th>\n            <th>Order No.</th>\n            <th>Product Name</th>\n            <th>Quantity</th>\n            <th>Price</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <th scope=\"row\">1</th>\n            <td>54822</td>\n            <td>Product 1</td>\n            <td>2</td>\n            <td>\n              <label class=\"label label-md label-danger\">$99.00</label>\n            </td>\n          </tr>\n          <tr>\n            <th scope=\"row\">2</th>\n            <td>54823</td>\n            <td>Product 2</td>\n            <td>1</td>\n            <td>\n              <label class=\"label label-md label-success\">$29.00</label>\n            </td>\n          </tr>\n          <tr>\n            <th scope=\"row\">3</th>\n            <td>54824</td>\n            <td>Product 3</td>\n            <td>3</td>\n            <td>\n              <label class=\"label label-md label-warning\">$109.00</label>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n    <!-- Recent Orders card end -->\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/invoice/summary-invoice/summary-invoice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryInvoiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("../../../../d3/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_c3__ = __webpack_require__("../../../../c3/c3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_c3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_c3__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SummaryInvoiceComponent = (function () {
    function SummaryInvoiceComponent() {
        this.type1 = 'bar';
        this.data1 = {
            labels: ['jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                    label: 'Sales',
                    backgroundColor: [
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(95, 190, 170, 0.99)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(95, 190, 170, 0.99)'
                    ],
                    hoverBackgroundColor: [
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)'
                    ],
                    data: [65, 59, 80, 81, 56, 55, 50, 45],
                }, {
                    label: 'Expense',
                    backgroundColor: [
                        'rgba(93, 156, 236, 0.93)',
                        'rgba(93, 156, 236, 0.93)',
                        'rgba(93, 156, 236, 0.93)',
                        'rgba(93, 156, 236, 0.93)',
                        'rgba(93, 156, 236, 0.93)',
                        'rgba(93, 156, 236, 0.93)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(93, 156, 236, 0.93)'
                    ],
                    hoverBackgroundColor: [
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(103, 162, 237, 0.82)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(26, 188, 156, 0.88)',
                        'rgba(103, 162, 237, 0.82)'
                    ],
                    data: [60, 69, 85, 91, 58, 50, 45, 45],
                }]
        };
        this.options = {
            responsive: true,
            maintainAspectRatio: false,
            barValueSpacing: 20
        };
    }
    SummaryInvoiceComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            var chart2 = __WEBPACK_IMPORTED_MODULE_2_c3__["generate"]({
                bindto: '#chart2',
                data: {
                    columns: [
                        ['Current', 100],
                        ['Overdue by 15 days', 120],
                        ['Overdue by 30 days', 30],
                    ],
                    type: 'donut',
                    onclick: function (d, i) { },
                    onmouseover: function (d, i) { },
                    onmouseout: function (d, i) { }
                },
                color: {
                    pattern: ['#4CAF50', '#2196F3', '#e74c3c']
                },
                donut: {
                    title: 'Invoice Summary'
                }
            });
            var chart3 = __WEBPACK_IMPORTED_MODULE_2_c3__["generate"]({
                bindto: '#chart3',
                data: {
                    // iris data from R
                    columns: [
                        ['Electricity', 40],
                        ['Internet', 20],
                        ['Assets', 120],
                        ['Party', 10],
                        ['Infrastructure', 90],
                    ],
                    type: 'pie',
                    onclick: function (d, i) { },
                    onmouseover: function (d, i) { },
                    onmouseout: function (d, i) { }
                },
                color: {
                    pattern: ['#2196F3', '#4CAF50', '#ff5252', '#f57c00', '#ccc']
                },
            });
        }, 1);
    };
    return SummaryInvoiceComponent;
}());
SummaryInvoiceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-summary-invoice',
        template: __webpack_require__("../../../../../src/app/pages/invoice/summary-invoice/summary-invoice.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/invoice/summary-invoice/summary-invoice.component.css"), __webpack_require__("../../../../c3/c3.min.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [])
], SummaryInvoiceComponent);

//# sourceMappingURL=summary-invoice.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/invoice/summary-invoice/summary-invoice.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "summaryRoutes", function() { return summaryRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryInvoiceModule", function() { return SummaryInvoiceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__summary_invoice_component__ = __webpack_require__("../../../../../src/app/pages/invoice/summary-invoice/summary-invoice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__ = __webpack_require__("../../../../angular2-chartjs/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var summaryRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__summary_invoice_component__["a" /* SummaryInvoiceComponent */],
        data: {
            breadcrumb: 'Invoice Summary',
            icon: 'icofont-chart-histogram bg-c-blue',
            status: true
        }
    }
];
var SummaryInvoiceModule = (function () {
    function SummaryInvoiceModule() {
    }
    return SummaryInvoiceModule;
}());
SummaryInvoiceModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(summaryRoutes),
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__["ChartModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__summary_invoice_component__["a" /* SummaryInvoiceComponent */]]
    })
], SummaryInvoiceModule);

//# sourceMappingURL=summary-invoice.module.js.map

/***/ })

});
//# sourceMappingURL=summary-invoice.module.chunk.js.map