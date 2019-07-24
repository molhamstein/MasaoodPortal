webpackJsonp(["advance-elements.module"],{

/***/ "../../../../../src/app/pages/ui-elements/forms/advance-elements/advance-elements.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ui-elements/forms/advance-elements/advance-elements.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <!-- Switches card start -->\n    <app-card [title]=\"'Switches'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\n      <div class=\"row\">\n        <div class=\"col-sm-12 col-xl-4 m-b-30\">\n          <h4 class=\"sub-title\">Single Switche</h4>\n          <ui-switch class=\"js-single\" color=\"#4680ff\" switchColor=\"#fff\" size=\"medium\" checked></ui-switch>\n        </div>\n        <div class=\"col-sm-12 col-xl-4 m-b-30\">\n          <h4 class=\"sub-title\">Multiple Switches</h4>\n          <ui-switch class=\"js-switch\" color=\"#4680ff\" switchColor=\"#fff\" size=\"medium\" checked></ui-switch>\n          <ui-switch class=\"js-switch\" color=\"#4680ff\" switchColor=\"#fff\" size=\"medium\" checked></ui-switch>\n          <ui-switch class=\"js-switch\" color=\"#4680ff\" switchColor=\"#fff\" size=\"medium\" checked></ui-switch>\n        </div>\n        <div class=\"col-sm-12 col-xl-4 m-b-30\">\n          <h4 class=\"sub-title\">Enable Disable Switches</h4>\n          <ui-switch class=\"js-dynamic-state\" color=\"#4680ff\" switchColor=\"#fff\" size=\"medium\" [disabled]=\"switchDisable\" checked></ui-switch>\n          <button class=\"btn btn-inverse m-t-20 js-dynamic-disable\" (click)=\"disableSwitch()\">Disable Button</button>\n          <button class=\"btn btn-primary js-dynamic-enable\" (click)=\"enableSwitch()\">Enable Button</button>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-8 m-b-3\">\n          <h4 class=\"sub-title\">Color Switches</h4>\n          <ui-switch class=\"js-default\" color=\"#bdc3c7\" switchColor=\"#fff\" size=\"medium\" checked></ui-switch>\n          <ui-switch class=\"js-primary\" color=\"#4680ff\" switchColor=\"#fff\" size=\"medium\" checked></ui-switch>\n          <ui-switch class=\"js-success\" color=\"#2ecc71\" switchColor=\"#fff\" size=\"medium\" checked></ui-switch>\n          <ui-switch class=\"js-info\" color=\"#3498DB\" switchColor=\"#fff\" size=\"medium\" checked></ui-switch>\n          <ui-switch class=\"js-warning\" color=\"#f1c40f\" switchColor=\"#fff\" size=\"medium\" checked></ui-switch>\n          <ui-switch class=\"js-danger\" color=\"#e74c3c\" switchColor=\"#fff\" size=\"medium\" checked></ui-switch>\n          <ui-switch class=\"js-inverse\" color=\"#34495e\" switchColor=\"#fff\" size=\"medium\" checked></ui-switch>\n        </div>\n        <div class=\"col-sm-4\">\n          <h4 class=\"sub-title\">Switch Sizes</h4>\n          <ui-switch class=\"js-large\" color=\"#4680ff\" switchColor=\"#fff\" size=\"large\" checked></ui-switch>\n          <ui-switch class=\"js-medium\" color=\"#2ecc71\" switchColor=\"#fff\" size=\"medium\" checked></ui-switch>\n          <ui-switch class=\"js-small\" color=\"#3498DB\" switchColor=\"#fff\" size=\"small\" checked></ui-switch>\n        </div>\n      </div>\n    </app-card>\n    <!-- Switches card end -->\n    <!-- Radio card start -->\n    <app-card [title]=\"'RADIO'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\n      <div class=\"row\">\n        <div class=\"col-sm-12 col-xl-6 m-b-30\">\n          <h4 class=\"sub-title\">Radio Fill Button</h4>\n          <div class=\"form-radio\">\n            <form>\n              <div class=\"radio radio-inline\">\n                <label>\n                  <input type=\"radio\" name=\"radio\" checked=\"checked\">\n                  <i class=\"helper\"></i>Radio 1\n                </label>\n              </div>\n              <div class=\"radio radio-inline\">\n                <label>\n                  <input type=\"radio\" name=\"radio\">\n                  <i class=\"helper\"></i>Radio 2\n                </label>\n              </div>\n              <div class=\"radio radio-inline radio-disable\">\n                <label>\n                  <input type=\"radio\" disabled=\"\" name=\"radio\">\n                  <i class=\"helper\"></i>Radio Disable\n                </label>\n              </div>\n            </form>\n          </div>\n        </div>\n        <div class=\"col-sm-12 col-xl-6 m-b-30\">\n          <h4 class=\"sub-title\">Radio Button</h4>\n          <div class=\"form-radio\">\n            <form>\n              <div class=\"radio radiofill radio-inline\">\n                <label>\n                  <input type=\"radio\" name=\"radio\" checked=\"checked\">\n                  <i class=\"helper\"></i>Radio-fill 1\n                </label>\n              </div>\n              <div class=\"radio radiofill radio-inline\">\n                <label>\n                  <input type=\"radio\" name=\"radio\">\n                  <i class=\"helper\"></i>Radio-fill 2\n                </label>\n              </div>\n              <div class=\"radio radiofill radio-inline radio-disable\">\n                <label>\n                  <input type=\"radio\" disabled=\"\" name=\"radio\">\n                  <i class=\"helper\"></i>Radio-fill Disable\n                </label>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n      <h4 class=\"sub-title\">Color Radio Button</h4>\n      <div class=\"form-radio\">\n        <form>\n          <div class=\"radio radiofill radio-default radio-inline\">\n            <label>\n              <input type=\"radio\" name=\"radio\" checked=\"checked\">\n              <i class=\"helper\"></i>Default Color\n            </label>\n          </div>\n          <div class=\"radio radiofill radio-primary radio-inline\">\n            <label>\n              <input type=\"radio\" name=\"radio\" checked=\"checked\">\n              <i class=\"helper\"></i>Primary Color\n            </label>\n          </div>\n          <div class=\"radio radiofill radio-success radio-inline\">\n            <label>\n              <input type=\"radio\" name=\"radio\" checked=\"checked\">\n              <i class=\"helper\"></i>Success Color\n            </label>\n          </div>\n          <div class=\"radio radiofill radio-info radio-inline\">\n            <label>\n              <input type=\"radio\" name=\"radio\" checked=\"checked\">\n              <i class=\"helper\"></i>Info Color\n            </label>\n          </div>\n          <div class=\"radio radiofill radio-warning radio-inline\">\n            <label>\n              <input type=\"radio\" name=\"radio\" checked=\"checked\">\n              <i class=\"helper\"></i>Warning Color\n            </label>\n          </div>\n          <div class=\"radio radiofill radio-danger radio-inline\">\n            <label>\n              <input type=\"radio\" name=\"radio\" checked=\"checked\">\n              <i class=\"helper\"></i>Danger Color\n            </label>\n          </div>\n          <div class=\"radio radiofill radio-inverse radio-inline\">\n            <label>\n              <input type=\"radio\" name=\"radio\" checked=\"checked\">\n              <i class=\"helper\"></i>Inverse Color\n            </label>\n          </div>\n        </form>\n      </div>\n    </app-card>\n    <!-- Radio card end -->\n    <!-- Checkbox card start -->\n    <app-card [title]=\"'Checkbox'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\n      <div class=\"row\">\n        <div class=\"col-sm-12 col-xl-6 m-b-30\">\n          <h4 class=\"sub-title\">Border Checkbox</h4>\n          <div class=\"border-checkbox-section\">\n            <div class=\"border-checkbox-group border-checkbox-group-default\">\n              <input class=\"border-checkbox\" type=\"checkbox\" id=\"checkbox0\">\n              <label class=\"border-checkbox-label\" for=\"checkbox0\">Do you like it?</label>\n            </div>\n            <div class=\"border-checkbox-group border-checkbox-group-primary\">\n              <input class=\"border-checkbox\" type=\"checkbox\" id=\"checkbox1\">\n              <label class=\"border-checkbox-label\" for=\"checkbox1\">Primary</label>\n            </div>\n            <div class=\"border-checkbox-group border-checkbox-group-success\">\n              <input class=\"border-checkbox\" type=\"checkbox\" id=\"checkbox2\">\n              <label class=\"border-checkbox-label\" for=\"checkbox2\">Success</label>\n            </div>\n            <div class=\"border-checkbox-group border-checkbox-group-info\">\n              <input class=\"border-checkbox\" type=\"checkbox\" id=\"checkbox3\">\n              <label class=\"border-checkbox-label\" for=\"checkbox3\">Info</label>\n            </div>\n            <div class=\"border-checkbox-group border-checkbox-group-warning\">\n              <input class=\"border-checkbox\" type=\"checkbox\" id=\"checkbox4\">\n              <label class=\"border-checkbox-label\" for=\"checkbox4\">Warning</label>\n            </div>\n            <div class=\"border-checkbox-group border-checkbox-group-danger\">\n              <input class=\"border-checkbox\" type=\"checkbox\" id=\"checkbox5\">\n              <label class=\"border-checkbox-label\" for=\"checkbox5\">Danger</label>\n            </div>\n            <div class=\"border-checkbox-group\">\n              <input class=\"border-checkbox\" type=\"checkbox\" id=\"checkbox6\" disabled>\n              <label class=\"border-checkbox-label\" for=\"checkbox6\">Disabled</label>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-12 col-xl-6 m-b-30\">\n          <h4 class=\"sub-title\">Fade-in Checkbox</h4>\n          <div class=\"checkbox-fade fade-in-default\">\n            <label>\n              <input type=\"checkbox\" value=\"\">\n              <span class=\"cr\">\n                                    <i class=\"cr-icon icofont icofont-ui-check txt-default\"></i>\n                                    </span> <span>Default</span>\n            </label>\n          </div>\n          <div class=\"checkbox-fade fade-in-primary\">\n            <label>\n              <input type=\"checkbox\" value=\"\">\n              <span class=\"cr\">\n                                    <i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i>\n                                    </span> <span>Primary</span>\n            </label>\n          </div>\n          <div class=\"checkbox-fade fade-in-warning\">\n            <label>\n              <input type=\"checkbox\" value=\"\">\n              <span class=\"cr\">\n                                    <i class=\"cr-icon icofont icofont-ui-check txt-warning\"></i>\n                                    </span><span> Warning</span>\n            </label>\n          </div>\n          <div class=\"checkbox-fade fade-in-success\">\n            <label>\n              <input type=\"checkbox\" value=\"\">\n              <span class=\"cr\">\n                                    <i class=\"cr-icon icofont icofont-ui-check txt-success\"></i>\n                                    </span> <span>Success</span>\n            </label>\n          </div>\n          <div class=\"checkbox-fade fade-in-info\">\n            <label>\n              <input type=\"checkbox\" value=\"\">\n              <span class=\"cr\">\n                                    <i class=\"cr-icon icofont icofont-ui-check txt-info\"></i>\n                                    </span><span> Info</span>\n            </label>\n          </div>\n          <div class=\"checkbox-fade fade-in-danger\">\n            <label>\n              <input type=\"checkbox\" value=\"\">\n              <span class=\"cr\">\n                                    <i class=\"cr-icon icofont icofont-ui-check txt-danger\"></i>\n                                    </span><span> Danger</span>\n            </label>\n          </div>\n          <div class=\"checkbox-fade fade-in-disable\">\n            <label>\n              <input type=\"checkbox\" value=\"\" disabled>\n              <span class=\"cr\">\n                                    <i class=\"cr-icon icofont icofont-ui-check text-default\"></i>\n                                    </span> <span>Disabled</span>\n            </label>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12 col-xl-6 m-b-30\">\n          <h4 class=\"sub-title\">Color Checkbox</h4>\n          <div class=\"checkbox-color checkbox-default\">\n            <input id=\"checkbox12\" type=\"checkbox\" checked=\"\">\n            <label for=\"checkbox12\">\n              Default\n            </label>\n          </div>\n          <div class=\"checkbox-color checkbox-primary\">\n            <input id=\"checkbox18\" type=\"checkbox\" checked=\"\">\n            <label for=\"checkbox18\">\n              Primary\n            </label>\n          </div>\n          <div class=\"checkbox-color checkbox-success\">\n            <input id=\"checkbox13\" type=\"checkbox\" checked=\"\">\n            <label for=\"checkbox13\">\n              Success\n            </label>\n          </div>\n          <div class=\"checkbox-color checkbox-info\">\n            <input id=\"checkbox14\" type=\"checkbox\" checked=\"\">\n            <label for=\"checkbox14\">\n              Info\n            </label>\n          </div>\n          <div class=\"checkbox-color checkbox-warning\">\n            <input id=\"checkbox15\" type=\"checkbox\" checked=\"\">\n            <label for=\"checkbox15\">\n              Warning\n            </label>\n          </div>\n          <div class=\"checkbox-color checkbox-danger\">\n            <input id=\"checkbox16\" type=\"checkbox\" checked=\"\">\n            <label for=\"checkbox16\">\n              Danger\n            </label>\n          </div>\n          <div class=\"checkbox-color checkbox-default\">\n            <input id=\"checkbox17\" type=\"checkbox\" disabled=\"\">\n            <label for=\"checkbox17\">\n              Disabled\n            </label>\n          </div>\n        </div>\n      </div>\n    </app-card>\n    <!-- Checkbox card end -->\n    <!-- Tags section start -->\n    <app-card [title]=\"'Tags Input'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\n      <div class=\"row\">\n        <div class=\"col-sm-12 col-xl-4 m-b-30\">\n          <h4 class=\"sub-title\">Markup</h4>\n          <p>Just add <code>data-role=\"tagsinput\"</code> to your input field to automatically change it to a tags input field.</p>\n          <tag-input [(ngModel)]='items' theme='bootstrap'></tag-input>\n        </div>\n        <div class=\"col-sm-12 col-xl-4 m-b-30\">\n          <h4 class=\"sub-title\">Colors</h4>\n          <p>You can set a fixed css class for your tags, or determine dynamically by providing a custom function.</p>\n          <div class=\"color-tags\">\n            <input class=\"\" type=\"text\" />\n          </div>\n        </div>\n        <div class=\"col-sm-12 col-xl-4 m-b-30\">\n          <h4 class=\"sub-title\">Max-Tags</h4>\n          <p>Just add <code>\"tags_max\"</code> to your input field to automatically change it to a tags input field.</p>\n          <div class=\"tags_max\">\n            <tag-input [(ngModel)]='items1' theme='bootstrap' [maxItems]='10'></tag-input>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12 col-xl-4 m-b-30\">\n          <h4 class=\"sub-title\">Max-Characters</h4>\n          <p>Just add <code>\"tags_max_char\"</code> to your input field to automatically change it to a tags input field.</p>\n          <div class=\"tags_max_char\">\n            <tag-input [(ngModel)]='items2' theme='bootstrap' ></tag-input>\n          </div>\n        </div>\n        <div class=\"col-sm-12 col-xl-4 \">\n          <h4 class=\"sub-title\">Multiple</h4>\n          <p>Just add <code>\"tags_add_multiple\"</code> to your input field to automatically change it to a tags input field.</p>\n          <div class=\"tags_add_multiple\">\n            <tag-input [(ngModel)]='items3' theme='bootstrap'></tag-input>\n          </div>\n        </div>\n        <div class=\"col-sm-4\"></div>\n      </div>\n    </app-card>\n    <!-- Tags section ends -->\n    <!-- Max Length Section Start -->\n    <app-card [title]=\"'Max Length'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\n      <div class=\"row\">\n        <div class=\"col-sm-12 col-xl-4 m-b-30\">\n          <h4 class=\"sub-title\">Default</h4>\n          <p>The badge will show up by default when the remaining chars are <code>10</code> or <code>less</code>:</p>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Type your keywords...\" maxlength=\"25\">\n        </div>\n        <div class=\"col-sm-12 col-xl-4 m-b-30\">\n          <h4 class=\"sub-title\">Thresold</h4>\n          <p>Do you want the badge to show up when there are <code>20 chars</code> or less? Use the <code>threshold</code> option:</p>\n          <input type=\"text\" class=\"form-control thresold-i\" placeholder=\"Type your keywords...\" maxlength=\"25\">\n        </div>\n        <div class=\"col-sm-12 col-xl-4 m-b-30\">\n          <h4 class=\"sub-title\">Color-lables</h4>\n          <p>Just add <code>color-class</code>with <code>input</code></p>\n          <input type=\"text\" class=\"form-control color-class\" placeholder=\"Type your keywords...\" maxlength=\"25\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12 col-xl-4 m-b-30\">\n          <h4 class=\"sub-title\">Play With Positions</h4>\n          <p>All you need to do is specify the <code>placement option</code>, with one of those strings. If none is specified, the positioning will be defauted to <code>'top-left'</code>.\n          </p>\n          <input type=\"text\" class=\"form-control position-class\" placeholder=\"Type your keywords...\" maxlength=\"25\">\n        </div>\n        <div class=\"col-sm-12 col-xl-8\">\n          <h4 class=\"sub-title\">Also Working With Textarea</h4>\n          <p>Bootstrap maxlength supports textarea as well as inputs. Even on old IE.</p>\n          <textarea class=\"form-control max-textarea\" maxlength=\"255\" rows=\"4\"></textarea>\n        </div>\n      </div>\n    </app-card>\n    <!-- Max Length Section end -->\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/ui-elements/forms/advance-elements/advance-elements.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvanceElementsComponent; });
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

var AdvanceElementsComponent = (function () {
    function AdvanceElementsComponent() {
        this.switchDisable = true;
        this.items = ['Amsterdam', 'Washington', 'Sydney'];
        this.items1 = ['Amsterdam', 'Washington', 'Sydney'];
        this.items2 = ['Amsterdam', 'Washington', 'Sydney'];
        this.items3 = ['Amsterdam', 'Washington', 'Sydney'];
    }
    AdvanceElementsComponent.prototype.ngOnInit = function () {
    };
    AdvanceElementsComponent.prototype.disableSwitch = function () {
        this.switchDisable = true;
    };
    AdvanceElementsComponent.prototype.enableSwitch = function () {
        this.switchDisable = false;
    };
    return AdvanceElementsComponent;
}());
AdvanceElementsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-advance-elements',
        template: __webpack_require__("../../../../../src/app/pages/ui-elements/forms/advance-elements/advance-elements.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/ui-elements/forms/advance-elements/advance-elements.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AdvanceElementsComponent);

//# sourceMappingURL=advance-elements.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/ui-elements/forms/advance-elements/advance-elements.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "advanceElementRoutes", function() { return advanceElementRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvanceElementsModule", function() { return AdvanceElementsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__advance_elements_component__ = __webpack_require__("../../../../../src/app/pages/ui-elements/forms/advance-elements/advance-elements.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_chips__ = __webpack_require__("../../../../ngx-chips/dist/ngx-chips.bundle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_chips___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ngx_chips__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_ui_switch_dist__ = __webpack_require__("../../../../ng2-ui-switch/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var advanceElementRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__advance_elements_component__["a" /* AdvanceElementsComponent */],
        data: {
            breadcrumb: 'Form Elements Advance',
            icon: 'icofont-file-code bg-c-blue',
            status: true
        }
    }
];
var AdvanceElementsModule = (function () {
    function AdvanceElementsModule() {
    }
    return AdvanceElementsModule;
}());
AdvanceElementsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(advanceElementRoutes),
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_5_ngx_chips__["TagInputModule"],
            __WEBPACK_IMPORTED_MODULE_6_ng2_ui_switch_dist__["a" /* UiSwitchModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__advance_elements_component__["a" /* AdvanceElementsComponent */]]
    })
], AdvanceElementsModule);

//# sourceMappingURL=advance-elements.module.js.map

/***/ })

});
//# sourceMappingURL=advance-elements.module.chunk.js.map