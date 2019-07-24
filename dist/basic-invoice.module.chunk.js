webpackJsonp(["basic-invoice.module"],{

/***/ "../../../../../src/app/pages/invoice/basic-invoice/basic-invoice.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/invoice/basic-invoice/basic-invoice.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!-- Main content starts -->\n  <div>\n    <!-- Invoice card start -->\n    <div class=\"card\">\n      <div class=\"row invoice-contact\">\n        <div class=\"col-md-8\">\n          <div class=\"invoice-box row\">\n            <div class=\"col-sm-12\">\n              <table class=\"table table-responsive invoice-table table-borderless\">\n                <tbody>\n                <tr>\n                  <td><img src=\"assets/images/logo-blue.png\" class=\"m-b-10\" alt=\"\"></td>\n                </tr>\n                <tr>\n                  <td>Codedthemes</td>\n                </tr>\n                <tr>\n                  <td>208, Paris Point, Varachha Road, Surat. (1234) - 567891</td>\n                </tr>\n                <tr>\n                  <td><a href=\"mailto:demo@gmail.com\" target=\"_top\">demo@gmail.com</a>\n                  </td>\n                </tr>\n                <tr>\n                  <td>+91 919-91-91-919</td>\n                </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"row text-center\">\n            <div class=\"col-sm-12 invoice-btn-group\">\n              <button type=\"button\" class=\"btn btn-primary btn-print-invoice waves-effect waves-light m-b-10 btn-sm m-r-20\">Print Invoice\n              </button>\n              <button type=\"button\" class=\"btn btn-danger waves-effect waves-light m-b-10 btn-sm\">Cancel Invoice\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"row invoive-info\">\n          <div class=\"col-md-4 col-xs-12 invoice-client-info\">\n            <h6>Client Information :</h6>\n            <h6 class=\"m-0\">Josephin Villa</h6>\n            <p class=\"m-0 m-t-10\">208, Peris Point, Varachha Road, Surat.</p>\n            <p class=\"m-0\">(1234) - 567891</p>\n            <p>demo@codedthemes.com</p>\n          </div>\n          <div class=\"col-md-4 col-sm-6\">\n            <h6>Order Information :</h6>\n            <table class=\"table table-responsive invoice-table invoice-order table-borderless\">\n              <tbody>\n              <tr>\n                <th>Date :</th>\n                <td>November 14</td>\n              </tr>\n              <tr>\n                <th>Status :</th>\n                <td>\n                  <span class=\"label label-warning\">Pending</span>\n                </td>\n              </tr>\n              <tr>\n                <th>Id :</th>\n                <td>\n                  #145698\n                </td>\n              </tr>\n              </tbody>\n            </table>\n          </div>\n          <div class=\"col-md-4 col-sm-6\">\n            <h6 class=\"m-b-20\">Invoice Number   <span>#12398521473</span></h6>\n            <h6 class=\"text-uppercase text-primary\">Total Due :\n              <span>$900.00</span>\n            </h6>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <div class=\"table-responsive\">\n              <table class=\"table  invoice-detail-table\">\n                <thead>\n                <tr class=\"thead-default\">\n                  <th>Description</th>\n                  <th>Quantity</th>\n                  <th>Amount</th>\n                  <th>Total</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr>\n                  <td>\n                    <h6>Logo Design</h6>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt </p>\n                  </td>\n                  <td>6</td>\n                  <td>$200.00</td>\n                  <td>$1200.00</td>\n                </tr>\n                <tr>\n                  <td>\n                    <h6>Logo Design</h6>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt </p>\n                  </td>\n                  <td>7</td>\n                  <td>$100.00</td>\n                  <td>$700.00</td>\n                </tr>\n                <tr>\n                  <td>\n                    <h6>Logo Design</h6>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt </p>\n                  </td>\n                  <td>5</td>\n                  <td>$150.00</td>\n                  <td>$750.00</td>\n                </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <table class=\"table table-responsive invoice-table invoice-total\">\n              <tbody>\n              <tr>\n                <th>Sub Total :</th>\n                <td>$4725.00</td>\n              </tr>\n              <tr>\n                <th>Taxes (10%) :</th>\n                <td>$57.00</td>\n              </tr>\n              <tr>\n                <th>Discount (5%) :</th>\n                <td>$45.00</td>\n              </tr>\n              <tr class=\"text-info\">\n                <td>\n                  <hr/>\n                  <h5 class=\"text-primary\">Total  :</h5>\n                </td>\n                <td>\n                  <hr/>\n                  <h5 class=\"text-primary\">$4827.00</h5>\n                </td>\n              </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <h6>Terms And Condition :</h6>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor </p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- Invoice card end -->\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/invoice/basic-invoice/basic-invoice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicInvoiceComponent; });
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

var BasicInvoiceComponent = (function () {
    function BasicInvoiceComponent() {
    }
    BasicInvoiceComponent.prototype.ngOnInit = function () {
    };
    return BasicInvoiceComponent;
}());
BasicInvoiceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-basic-invoice',
        template: __webpack_require__("../../../../../src/app/pages/invoice/basic-invoice/basic-invoice.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/invoice/basic-invoice/basic-invoice.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BasicInvoiceComponent);

//# sourceMappingURL=basic-invoice.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/invoice/basic-invoice/basic-invoice.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basicRoutes", function() { return basicRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicInvoiceModule", function() { return BasicInvoiceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basic_invoice_component__ = __webpack_require__("../../../../../src/app/pages/invoice/basic-invoice/basic-invoice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var basicRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__basic_invoice_component__["a" /* BasicInvoiceComponent */],
        data: {
            breadcrumb: 'Invoice',
            icon: 'icofont-chart-histogram bg-c-blue',
            status: false
        }
    }
];
var BasicInvoiceModule = (function () {
    function BasicInvoiceModule() {
    }
    return BasicInvoiceModule;
}());
BasicInvoiceModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(basicRoutes),
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__basic_invoice_component__["a" /* BasicInvoiceComponent */]]
    })
], BasicInvoiceModule);

//# sourceMappingURL=basic-invoice.module.js.map

/***/ })

});
//# sourceMappingURL=basic-invoice.module.chunk.js.map