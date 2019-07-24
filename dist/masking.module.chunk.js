webpackJsonp(["masking.module"],{

/***/ "../../../../../src/app/pages/ui-elements/forms/masking/masking.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ui-elements/forms/masking/masking.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12 col-xl-6\">\n    <!-- Date card start -->\n    <app-card [title]=\"'Date'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\n      <p class=\"m-b-15\">Add class of <code>.date</code> with <code>data-mask</code> attribute</p>\n      <form>\n        <div class=\"row form-group\">\n          <div class=\"col-sm-3\">\n            <label class=\"col-form-label\">Insert Date 1</label>\n          </div>\n          <div class=\"col-sm-9\">\n            <input type=\"text\" specialCharacters=\"false\" class=\"form-control date\" placeholder=\"__/__/____\" mask='00/00/0000'>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-3\">\n            <label class=\"col-form-label\">Insert Date 2</label>\n          </div>\n          <div class=\"col-sm-9\">\n            <input type=\"text\" class=\"form-control date2\" placeholder=\"__-__-____\" specialCharacters=\"false\" mask=\"00-00-0000\">\n          </div>\n        </div>\n      </form>\n    </app-card>\n    <!-- Date card end -->\n  </div>\n  <div class=\"col-lg-12 col-xl-6\">\n    <!-- Time card start -->\n    <app-card [title]=\"'Time'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\n      <p class=\"m-b-15\">Add class of <code>.hour</code> with <code>data-mask</code> attribute</p>\n      <form>\n        <div class=\"row form-group\">\n          <div class=\"col-sm-3\">\n            <label class=\"col-form-label\">Hour</label>\n          </div>\n          <div class=\"col-sm-9\">\n            <input type=\"text\" class=\"form-control hour\" placeholder=\"__:__:__\" mask=\"00:00:00\">\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-3\">\n            <label class=\"col-form-label\">Date & Hour</label>\n          </div>\n          <div class=\"col-sm-9\">\n            <input type=\"text\" class=\"form-control dateHour\" placeholder=\"__/__/____ __:__:__\" mask=\"00/00/00 00:00:00\">\n          </div>\n        </div>\n      </form>\n    </app-card>\n    <!-- Time card end -->\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-lg-12 col-xl-6\">\n    <!-- Phone no card start -->\n    <app-card [title]=\"'Phone no.'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\n      <p class=\"m-b-15\">Add class of <code>.mob_no</code> with <code>data-mask</code> attribute</p>\n      <form>\n        <div class=\"row form-group\">\n          <div class=\"col-sm-3\">\n            <label class=\"col-form-label\">Mobile No.</label>\n          </div>\n          <div class=\"col-sm-9\">\n            <input type=\"text\" class=\"form-control mob_no\" placeholder=\"____-___-___\"  specialCharacters=\"false\"  mask=\"0000-000-000\">\n          </div>\n        </div>\n        <div class=\"row form-group\">\n          <div class=\"col-sm-3\">\n            <label class=\"col-form-label\">Telephone</label>\n          </div>\n          <div class=\"col-sm-9\">\n            <input type=\"text\" class=\"form-control phone\" placeholder=\"____-____\"  specialCharacters=\"false\" mask=\"0000-0000\">\n          </div>\n        </div>\n        <div class=\"row form-group\">\n          <div class=\"col-sm-3\">\n            <label class=\"col-form-label\">Tel. with Code Area</label>\n          </div>\n          <div class=\"col-sm-9\">\n            <input type=\"text\" class=\"form-control telphone_with_code\" placeholder=\"(__) ____-____\" mask=\"(00) 0000-0000\">\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-3\">\n            <label class=\"col-form-label\">US Telephone</label>\n          </div>\n          <div class=\"col-sm-9\">\n            <input type=\"text\" class=\"form-control us_telephone\" placeholder=\"(___) ___-____\" mask=\"(000) 000-0000\">\n          </div>\n        </div>\n      </form>\n    </app-card>\n    <!-- Phone no card end -->\n  </div>\n  <div class=\"col-lg-12 col-xl-6\">\n    <!-- Network card start -->\n    <app-card [title]=\"'Network'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\n      <p class=\"m-b-15\">Add class of <code>.ip</code> with <code>data-mask</code> attribute</p>\n      <form>\n        <div class=\"row form-group\">\n          <div class=\"col-sm-3\">\n            <label class=\"col-form-label\">IP Address</label>\n          </div>\n          <div class=\"col-sm-9\">\n            <input type=\"text\" class=\"form-control ip\" placeholder=\"___.___.___.___\" mask=\"000.000.000.000\">\n          </div>\n        </div>\n        <div class=\"row form-group\">\n          <div class=\"col-sm-3\">\n            <label class=\"col-form-label\">IPV4</label>\n          </div>\n          <div class=\"col-sm-9\">\n            <input type=\"text\" class=\"form-control ipv4\" placeholder=\"___.___.___.____\" mask=\"00/00/0000 00:00:00\">\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-3\">\n            <label class=\"col-form-label\">IPV6</label>\n          </div>\n          <div class=\"col-sm-9\">\n            <input type=\"text\" class=\"form-control ipv6\" placeholder=\"____:____:____:_:___:____:____:____\" mask=\"0000:0000:0000:0:000:0000:0000:0000\">\n          </div>\n        </div>\n      </form>\n    </app-card>\n    <!-- Network card end -->\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-lg-12 col-xl-6\">\n    <!-- Numbers card start -->\n    <app-card [title]=\"'Numbers'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\n      <p class=\"m-b-15\">Add class of <code>.autonumber</code> with <code>&lt;input&gt;</code> tag</p>\n      <form>\n        <div class=\"row form-group\">\n          <div class=\"col-sm-3\">\n            <label class=\"col-form-label\">Default</label>\n          </div>\n          <div class=\"col-sm-9\">\n            <input type=\"text\" class=\"form-control autonumber\" >\n          </div>\n        </div>\n        <div class=\"row form-group\">\n          <div class=\"col-sm-3\">\n            <label class=\"col-form-label\">Auto Numeric (%)</label>\n          </div>\n          <div class=\"col-sm-9\">\n            <input type=\"text\" class=\"form-control autonumber\" name=\"autonumeric\" currencyMask  [(ngModel)]=\"value5\" [options]=\"{ prefix: '% ', align: 'right', allowZero: false }\">\n          </div>\n        </div>\n      </form>\n    </app-card>\n    <!-- Numbers card end -->\n  </div>\n  <div class=\"col-lg-12 col-xl-6\">\n    <!-- Currency card start -->\n    <app-card [title]=\"'Currency'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\n      <p class=\"m-b-15\">Add class of <code>.autonumber</code> with <code>data-a-*</code> attribute</p>\n      <form>\n        <div class=\"row form-group\">\n          <div class=\"col-sm-3\">\n            <label class=\"col-form-label\">Dollar ($)</label>\n          </div>\n          <div class=\"col-sm-9\">\n            <input type=\"text\" class=\"form-control autonumber\" name=\"dollar\" currencyMask  [(ngModel)]=\"value\" [options]=\"{ prefix: '$ ', align: 'left', allowZero: false }\" >\n          </div>\n        </div>\n        <div class=\"row form-group\">\n          <div class=\"col-sm-3\">\n            <label class=\"col-form-label\">Euro (€)</label>\n          </div>\n          <div class=\"col-sm-9\">\n            <input type=\"text\" class=\"form-control autonumber\" name=\"Euro\" currencyMask [(ngModel)]=\"value1\" [options]=\"{ prefix: '€ ', align: 'left', allowZero: false }\" >\n          </div>\n        </div>\n        <div class=\"row form-group\">\n          <div class=\"col-sm-3\">\n            <label class=\"col-form-label\">Rupee (Rs.)</label>\n          </div>\n          <div class=\"col-sm-9\">\n            <input type=\"text\" name=\"Rupee\" class=\"form-control autonumber\"  currencyMask [(ngModel)]=\"value2\" [options]=\"{ prefix: 'Rs. ', align: 'left', allowZero: false }\" >\n          </div>\n        </div>\n        <div class=\"row form-group\">\n          <div class=\"col-sm-3\">\n            <label class=\"col-form-label\">Renminbi (¥)</label>\n          </div>\n          <div class=\"col-sm-9\">\n            <input type=\"text\" class=\"form-control autonumber\" name=\"renminbi\"  currencyMask [(ngModel)]=\"value3\" [options]=\"{ prefix: '¥ ', align: 'left', allowZero: false }\" >\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-3\">\n            <label class=\"col-form-label\">Pound (£)</label>\n          </div>\n          <div class=\"col-sm-9\">\n            <input type=\"text\" class=\"form-control autonumber\" name=\"pound\" currencyMask [(ngModel)]=\"value4\" [options]=\"{ prefix: '£ ', align: 'left', allowZero: false }\" >\n          </div>\n        </div>\n      </form>\n    </app-card>\n    <!-- Currency card end -->\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/ui-elements/forms/masking/masking.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaskingComponent; });
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

/*import '../../../../../';*/
var MaskingComponent = (function () {
    function MaskingComponent() {
    }
    MaskingComponent.prototype.ngOnInit = function () {
    };
    return MaskingComponent;
}());
MaskingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-masking',
        template: __webpack_require__("../../../../../src/app/pages/ui-elements/forms/masking/masking.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/ui-elements/forms/masking/masking.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MaskingComponent);

//# sourceMappingURL=masking.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/ui-elements/forms/masking/masking.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maskingRoutes", function() { return maskingRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskingModule", function() { return MaskingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__masking_component__ = __webpack_require__("../../../../../src/app/pages/ui-elements/forms/masking/masking.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_currency_mask__ = __webpack_require__("../../../../ng2-currency-mask/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_currency_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_currency_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var maskingRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__masking_component__["a" /* MaskingComponent */],
        data: {
            breadcrumb: 'Form Masking',
            icon: 'icofont-file-alt bg-c-lite-green',
            status: true
        }
    }
];
var MaskingModule = (function () {
    function MaskingModule() {
    }
    return MaskingModule;
}());
MaskingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(maskingRoutes),
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_5_ng2_currency_mask__["CurrencyMaskModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__masking_component__["a" /* MaskingComponent */]]
    })
], MaskingModule);

//# sourceMappingURL=masking.module.js.map

/***/ }),

/***/ "../../../../ng2-currency-mask/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../../../../ng2-currency-mask/src/currency-mask.directive.js"));
__export(__webpack_require__("../../../../ng2-currency-mask/src/currency-mask.module.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ng2-currency-mask/src/currency-mask.config.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
exports.CURRENCY_MASK_CONFIG = new core_1.InjectionToken("currency.mask.config");
//# sourceMappingURL=currency-mask.config.js.map

/***/ }),

/***/ "../../../../ng2-currency-mask/src/currency-mask.directive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var currency_mask_config_1 = __webpack_require__("../../../../ng2-currency-mask/src/currency-mask.config.js");
var input_handler_1 = __webpack_require__("../../../../ng2-currency-mask/src/input.handler.js");
exports.CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return CurrencyMaskDirective; }),
    multi: true
};
var CurrencyMaskDirective = (function () {
    function CurrencyMaskDirective(currencyMaskConfig, elementRef, keyValueDiffers) {
        this.currencyMaskConfig = currencyMaskConfig;
        this.elementRef = elementRef;
        this.keyValueDiffers = keyValueDiffers;
        this.options = {};
        this.optionsTemplate = {
            align: "right",
            allowNegative: true,
            allowZero: true,
            decimal: ".",
            precision: 2,
            prefix: "$ ",
            suffix: "",
            thousands: ","
        };
        if (currencyMaskConfig) {
            this.optionsTemplate = currencyMaskConfig;
        }
        this.keyValueDiffer = keyValueDiffers.find({}).create(null);
    }
    CurrencyMaskDirective.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.style.textAlign = this.options.align ? this.options.align : this.optionsTemplate.align;
    };
    CurrencyMaskDirective.prototype.ngDoCheck = function () {
        if (this.keyValueDiffer.diff(this.options)) {
            this.elementRef.nativeElement.style.textAlign = this.options.align ? this.options.align : this.optionsTemplate.align;
            this.inputHandler.updateOptions(Object.assign({}, this.optionsTemplate, this.options));
        }
    };
    CurrencyMaskDirective.prototype.ngOnInit = function () {
        this.inputHandler = new input_handler_1.InputHandler(this.elementRef.nativeElement, Object.assign({}, this.optionsTemplate, this.options));
    };
    CurrencyMaskDirective.prototype.handleBlur = function (event) {
        this.inputHandler.getOnModelTouched().apply(event);
    };
    CurrencyMaskDirective.prototype.handleCut = function (event) {
        if (!this.isChromeAndroid()) {
            this.inputHandler.handleCut(event);
        }
    };
    CurrencyMaskDirective.prototype.handleInput = function (event) {
        if (this.isChromeAndroid()) {
            this.inputHandler.handleInput(event);
        }
    };
    CurrencyMaskDirective.prototype.handleKeydown = function (event) {
        if (!this.isChromeAndroid()) {
            this.inputHandler.handleKeydown(event);
        }
    };
    CurrencyMaskDirective.prototype.handleKeypress = function (event) {
        if (!this.isChromeAndroid()) {
            this.inputHandler.handleKeypress(event);
        }
    };
    CurrencyMaskDirective.prototype.handlePaste = function (event) {
        if (!this.isChromeAndroid()) {
            this.inputHandler.handlePaste(event);
        }
    };
    CurrencyMaskDirective.prototype.isChromeAndroid = function () {
        return /chrome/i.test(navigator.userAgent) && /android/i.test(navigator.userAgent);
    };
    CurrencyMaskDirective.prototype.registerOnChange = function (callbackFunction) {
        this.inputHandler.setOnModelChange(callbackFunction);
    };
    CurrencyMaskDirective.prototype.registerOnTouched = function (callbackFunction) {
        this.inputHandler.setOnModelTouched(callbackFunction);
    };
    CurrencyMaskDirective.prototype.setDisabledState = function (value) {
        this.elementRef.nativeElement.disabled = value;
    };
    CurrencyMaskDirective.prototype.writeValue = function (value) {
        this.inputHandler.setValue(value);
    };
    return CurrencyMaskDirective;
}());
CurrencyMaskDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: "[currencyMask]",
                providers: [exports.CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR]
            },] },
];
/** @nocollapse */
CurrencyMaskDirective.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Inject, args: [currency_mask_config_1.CURRENCY_MASK_CONFIG,] },] },
    { type: core_1.ElementRef, },
    { type: core_1.KeyValueDiffers, },
]; };
CurrencyMaskDirective.propDecorators = {
    'options': [{ type: core_1.Input },],
    'handleBlur': [{ type: core_1.HostListener, args: ["blur", ["$event"],] },],
    'handleCut': [{ type: core_1.HostListener, args: ["cut", ["$event"],] },],
    'handleInput': [{ type: core_1.HostListener, args: ["input", ["$event"],] },],
    'handleKeydown': [{ type: core_1.HostListener, args: ["keydown", ["$event"],] },],
    'handleKeypress': [{ type: core_1.HostListener, args: ["keypress", ["$event"],] },],
    'handlePaste': [{ type: core_1.HostListener, args: ["paste", ["$event"],] },],
};
exports.CurrencyMaskDirective = CurrencyMaskDirective;
//# sourceMappingURL=currency-mask.directive.js.map

/***/ }),

/***/ "../../../../ng2-currency-mask/src/currency-mask.module.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var currency_mask_directive_1 = __webpack_require__("../../../../ng2-currency-mask/src/currency-mask.directive.js");
var CurrencyMaskModule = (function () {
    function CurrencyMaskModule() {
    }
    return CurrencyMaskModule;
}());
CurrencyMaskModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    common_1.CommonModule,
                    forms_1.FormsModule
                ],
                declarations: [
                    currency_mask_directive_1.CurrencyMaskDirective
                ],
                exports: [
                    currency_mask_directive_1.CurrencyMaskDirective
                ]
            },] },
];
/** @nocollapse */
CurrencyMaskModule.ctorParameters = function () { return []; };
exports.CurrencyMaskModule = CurrencyMaskModule;
//# sourceMappingURL=currency-mask.module.js.map

/***/ }),

/***/ "../../../../ng2-currency-mask/src/input.handler.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var input_service_1 = __webpack_require__("../../../../ng2-currency-mask/src/input.service.js");
var InputHandler = (function () {
    function InputHandler(htmlInputElement, options) {
        this.inputService = new input_service_1.InputService(htmlInputElement, options);
    }
    InputHandler.prototype.handleCut = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.inputService.updateFieldValue();
            _this.setValue(_this.inputService.value);
            _this.onModelChange(_this.inputService.value);
        }, 0);
    };
    InputHandler.prototype.handleInput = function (event) {
        var keyCode = this.inputService.rawValue.charCodeAt(this.inputService.rawValue.length - 1);
        var rawValueLength = this.inputService.rawValue.length;
        var rawValueSelectionEnd = this.inputService.inputSelection.selectionEnd;
        var storedRawValueLength = this.inputService.storedRawValue.length;
        this.inputService.rawValue = this.inputService.storedRawValue;
        if (rawValueLength != rawValueSelectionEnd || Math.abs(rawValueLength - storedRawValueLength) != 1) {
            this.setCursorPosition(event);
            return;
        }
        if (rawValueLength < storedRawValueLength) {
            this.inputService.removeNumber(8);
        }
        if (rawValueLength > storedRawValueLength) {
            switch (keyCode) {
                case 43:
                    this.inputService.changeToPositive();
                    break;
                case 45:
                    this.inputService.changeToNegative();
                    break;
                default:
                    if (!this.inputService.canInputMoreNumbers) {
                        return;
                    }
                    this.inputService.addNumber(keyCode);
            }
        }
        this.setCursorPosition(event);
        this.onModelChange(this.inputService.value);
    };
    InputHandler.prototype.handleKeydown = function (event) {
        var keyCode = event.which || event.charCode || event.keyCode;
        if (keyCode == 8 || keyCode == 46 || keyCode == 63272) {
            event.preventDefault();
            var selectionRangeLength = Math.abs(this.inputService.inputSelection.selectionEnd - this.inputService.inputSelection.selectionStart);
            if (selectionRangeLength == 0) {
                this.inputService.removeNumber(keyCode);
                this.onModelChange(this.inputService.value);
            }
            if (selectionRangeLength == this.inputService.rawValue.length) {
                this.setValue(0);
                this.onModelChange(this.inputService.value);
            }
        }
    };
    InputHandler.prototype.handleKeypress = function (event) {
        var keyCode = event.which || event.charCode || event.keyCode;
        switch (keyCode) {
            case undefined:
            case 9:
            case 13:
                return;
            case 43:
                this.inputService.changeToPositive();
                break;
            case 45:
                this.inputService.changeToNegative();
                break;
            default:
                if (this.inputService.canInputMoreNumbers) {
                    var selectionRangeLength = Math.abs(this.inputService.inputSelection.selectionEnd - this.inputService.inputSelection.selectionStart);
                    if (selectionRangeLength == this.inputService.rawValue.length) {
                        this.setValue(0);
                    }
                    this.inputService.addNumber(keyCode);
                }
        }
        event.preventDefault();
        this.onModelChange(this.inputService.value);
    };
    InputHandler.prototype.handlePaste = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.inputService.updateFieldValue();
            _this.setValue(_this.inputService.value);
            _this.onModelChange(_this.inputService.value);
        }, 1);
    };
    InputHandler.prototype.updateOptions = function (options) {
        this.inputService.updateOptions(options);
    };
    InputHandler.prototype.getOnModelChange = function () {
        return this.onModelChange;
    };
    InputHandler.prototype.setOnModelChange = function (callbackFunction) {
        this.onModelChange = callbackFunction;
    };
    InputHandler.prototype.getOnModelTouched = function () {
        return this.onModelTouched;
    };
    InputHandler.prototype.setOnModelTouched = function (callbackFunction) {
        this.onModelTouched = callbackFunction;
    };
    InputHandler.prototype.setValue = function (value) {
        this.inputService.value = value;
    };
    InputHandler.prototype.setCursorPosition = function (event) {
        setTimeout(function () {
            event.target.setSelectionRange(event.target.value.length, event.target.value.length);
        }, 0);
    };
    return InputHandler;
}());
exports.InputHandler = InputHandler;
//# sourceMappingURL=input.handler.js.map

/***/ }),

/***/ "../../../../ng2-currency-mask/src/input.manager.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InputManager = (function () {
    function InputManager(htmlInputElement) {
        this.htmlInputElement = htmlInputElement;
    }
    InputManager.prototype.setCursorAt = function (position) {
        if (this.htmlInputElement.setSelectionRange) {
            this.htmlInputElement.focus();
            this.htmlInputElement.setSelectionRange(position, position);
        }
        else if (this.htmlInputElement.createTextRange) {
            var textRange = this.htmlInputElement.createTextRange();
            textRange.collapse(true);
            textRange.moveEnd("character", position);
            textRange.moveStart("character", position);
            textRange.select();
        }
    };
    InputManager.prototype.updateValueAndCursor = function (newRawValue, oldLength, selectionStart) {
        this.rawValue = newRawValue;
        var newLength = newRawValue.length;
        selectionStart = selectionStart - (oldLength - newLength);
        this.setCursorAt(selectionStart);
    };
    Object.defineProperty(InputManager.prototype, "canInputMoreNumbers", {
        get: function () {
            var haventReachedMaxLength = !(this.rawValue.length >= this.htmlInputElement.maxLength && this.htmlInputElement.maxLength >= 0);
            var selectionStart = this.inputSelection.selectionStart;
            var selectionEnd = this.inputSelection.selectionEnd;
            var haveNumberSelected = (selectionStart != selectionEnd && this.htmlInputElement.value.substring(selectionStart, selectionEnd).match(/\d/)) ? true : false;
            var startWithZero = (this.htmlInputElement.value.substring(0, 1) == "0");
            return haventReachedMaxLength || haveNumberSelected || startWithZero;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputManager.prototype, "inputSelection", {
        get: function () {
            var selectionStart = 0;
            var selectionEnd = 0;
            if (typeof this.htmlInputElement.selectionStart == "number" && typeof this.htmlInputElement.selectionEnd == "number") {
                selectionStart = this.htmlInputElement.selectionStart;
                selectionEnd = this.htmlInputElement.selectionEnd;
            }
            else {
                var range = document.selection.createRange();
                if (range && range.parentElement() == this.htmlInputElement) {
                    var lenght = this.htmlInputElement.value.length;
                    var normalizedValue = this.htmlInputElement.value.replace(/\r\n/g, "\n");
                    var startRange = this.htmlInputElement.createTextRange();
                    startRange.moveToBookmark(range.getBookmark());
                    var endRange = this.htmlInputElement.createTextRange();
                    endRange.collapse(false);
                    if (startRange.compareEndPoints("StartToEnd", endRange) > -1) {
                        selectionStart = selectionEnd = lenght;
                    }
                    else {
                        selectionStart = -startRange.moveStart("character", -lenght);
                        selectionStart += normalizedValue.slice(0, selectionStart).split("\n").length - 1;
                        if (startRange.compareEndPoints("EndToEnd", endRange) > -1) {
                            selectionEnd = lenght;
                        }
                        else {
                            selectionEnd = -startRange.moveEnd("character", -lenght);
                            selectionEnd += normalizedValue.slice(0, selectionEnd).split("\n").length - 1;
                        }
                    }
                }
            }
            return {
                selectionStart: selectionStart,
                selectionEnd: selectionEnd
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputManager.prototype, "rawValue", {
        get: function () {
            return this.htmlInputElement && this.htmlInputElement.value;
        },
        set: function (value) {
            this._storedRawValue = value;
            if (this.htmlInputElement) {
                this.htmlInputElement.value = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputManager.prototype, "storedRawValue", {
        get: function () {
            return this._storedRawValue;
        },
        enumerable: true,
        configurable: true
    });
    return InputManager;
}());
exports.InputManager = InputManager;
//# sourceMappingURL=input.manager.js.map

/***/ }),

/***/ "../../../../ng2-currency-mask/src/input.service.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var input_manager_1 = __webpack_require__("../../../../ng2-currency-mask/src/input.manager.js");
var InputService = (function () {
    function InputService(htmlInputElement, options) {
        this.htmlInputElement = htmlInputElement;
        this.options = options;
        this.inputManager = new input_manager_1.InputManager(htmlInputElement);
    }
    InputService.prototype.addNumber = function (keyCode) {
        if (!this.rawValue) {
            this.rawValue = this.applyMask(false, "0");
        }
        var keyChar = String.fromCharCode(keyCode);
        var selectionStart = this.inputSelection.selectionStart;
        var selectionEnd = this.inputSelection.selectionEnd;
        this.rawValue = this.rawValue.substring(0, selectionStart) + keyChar + this.rawValue.substring(selectionEnd, this.rawValue.length);
        this.updateFieldValue(selectionStart + 1);
    };
    InputService.prototype.applyMask = function (isNumber, rawValue) {
        var _a = this.options, allowNegative = _a.allowNegative, decimal = _a.decimal, precision = _a.precision, prefix = _a.prefix, suffix = _a.suffix, thousands = _a.thousands;
        rawValue = isNumber ? new Number(rawValue).toFixed(precision) : rawValue;
        var onlyNumbers = rawValue.replace(/[^0-9]/g, "");
        if (!onlyNumbers) {
            return "";
        }
        var integerPart = onlyNumbers.slice(0, onlyNumbers.length - precision).replace(/^0*/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, thousands);
        if (integerPart == "") {
            integerPart = "0";
        }
        var newRawValue = integerPart;
        var decimalPart = onlyNumbers.slice(onlyNumbers.length - precision);
        if (precision > 0) {
            newRawValue += decimal + decimalPart;
        }
        var isZero = parseInt(integerPart) == 0 && (parseInt(decimalPart) == 0 || decimalPart == "");
        var operator = (rawValue.indexOf("-") > -1 && allowNegative && !isZero) ? "-" : "";
        return operator + prefix + newRawValue + suffix;
    };
    InputService.prototype.clearMask = function (rawValue) {
        var value = (rawValue || "0").replace(this.options.prefix, "").replace(this.options.suffix, "");
        if (this.options.thousands) {
            value = value.replace(new RegExp("\\" + this.options.thousands, "g"), "");
        }
        if (this.options.decimal) {
            value = value.replace(this.options.decimal, ".");
        }
        return parseFloat(value);
    };
    InputService.prototype.changeToNegative = function () {
        if (this.options.allowNegative && this.rawValue != "" && this.rawValue.charAt(0) != "-" && this.value != 0) {
            this.rawValue = "-" + this.rawValue;
        }
    };
    InputService.prototype.changeToPositive = function () {
        this.rawValue = this.rawValue.replace("-", "");
    };
    InputService.prototype.removeNumber = function (keyCode) {
        var selectionEnd = this.inputSelection.selectionEnd;
        var selectionStart = this.inputSelection.selectionStart;
        if (selectionStart > this.rawValue.length - this.options.suffix.length) {
            selectionEnd = this.rawValue.length - this.options.suffix.length;
            selectionStart = this.rawValue.length - this.options.suffix.length;
        }
        selectionEnd = keyCode == 46 || keyCode == 63272 ? selectionEnd + 1 : selectionEnd;
        selectionStart = keyCode == 8 ? selectionStart - 1 : selectionStart;
        this.rawValue = this.rawValue.substring(0, selectionStart) + this.rawValue.substring(selectionEnd, this.rawValue.length);
        this.updateFieldValue(selectionStart);
    };
    InputService.prototype.updateFieldValue = function (selectionStart) {
        var newRawValue = this.applyMask(false, this.rawValue || "");
        selectionStart = selectionStart == undefined ? this.rawValue.length : selectionStart;
        this.inputManager.updateValueAndCursor(newRawValue, this.rawValue.length, selectionStart);
    };
    InputService.prototype.updateOptions = function (options) {
        var value = this.value;
        this.options = options;
        this.value = value;
    };
    Object.defineProperty(InputService.prototype, "canInputMoreNumbers", {
        get: function () {
            return this.inputManager.canInputMoreNumbers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputService.prototype, "inputSelection", {
        get: function () {
            return this.inputManager.inputSelection;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputService.prototype, "rawValue", {
        get: function () {
            return this.inputManager.rawValue;
        },
        set: function (value) {
            this.inputManager.rawValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputService.prototype, "storedRawValue", {
        get: function () {
            return this.inputManager.storedRawValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputService.prototype, "value", {
        get: function () {
            return this.clearMask(this.rawValue);
        },
        set: function (value) {
            this.rawValue = this.applyMask(true, "" + value);
        },
        enumerable: true,
        configurable: true
    });
    return InputService;
}());
exports.InputService = InputService;
//# sourceMappingURL=input.service.js.map

/***/ })

});
//# sourceMappingURL=masking.module.chunk.js.map