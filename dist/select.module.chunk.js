webpackJsonp(["select.module"],{

/***/ "../../../../../src/app/pages/ui-elements/forms/select/select.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ui-elements/forms/select/select.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <!-- Default select start -->\n    <app-card [title]=\"'Default Select'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\n      <div class=\"row\">\n        <div class=\"col-sm-12 col-xl-3 m-b-30\">\n          <h4 class=\"sub-title\">Default Select</h4>\n          <select name=\"select\" class=\"form-control form-control-default\">\n            <option value=\"opt1\">Select One Value Only</option>\n            <option value=\"opt2\">Type 2</option>\n            <option value=\"opt3\">Type 3</option>\n            <option value=\"opt4\">Type 4</option>\n            <option value=\"opt5\">Type 5</option>\n            <option value=\"opt6\">Type 6</option>\n            <option value=\"opt7\">Type 7</option>\n            <option value=\"opt8\">Type 8</option>\n          </select>\n        </div>\n        <div class=\"col-sm-12 col-xl-3 m-b-30\">\n          <h4 class=\"sub-title\">Primary Select</h4>\n          <select name=\"select\" class=\"form-control form-control-primary\">\n            <option value=\"opt1\">Select One Value Only</option>\n            <option value=\"opt2\">Type 2</option>\n            <option value=\"opt3\">Type 3</option>\n            <option value=\"opt4\">Type 4</option>\n            <option value=\"opt5\">Type 5</option>\n            <option value=\"opt6\">Type 6</option>\n            <option value=\"opt7\">Type 7</option>\n            <option value=\"opt8\">Type 8</option>\n          </select>\n        </div>\n        <div class=\"col-sm-12 col-xl-3 m-b-30\">\n          <h4 class=\"sub-title\">Success Select</h4>\n          <select name=\"select\" class=\"form-control form-control-success\">\n            <option value=\"opt1\">Select One Value Only</option>\n            <option value=\"opt2\">Type 2</option>\n            <option value=\"opt3\">Type 3</option>\n            <option value=\"opt4\">Type 4</option>\n            <option value=\"opt5\">Type 5</option>\n            <option value=\"opt6\">Type 6</option>\n            <option value=\"opt7\">Type 7</option>\n            <option value=\"opt8\">Type 8</option>\n          </select>\n        </div>\n        <div class=\"col-sm-12 col-xl-3 m-b-30\">\n          <h4 class=\"sub-title\">Info Select</h4>\n          <select name=\"select\" class=\"form-control form-control-info\">\n            <option value=\"opt1\">Select One Value Only</option>\n            <option value=\"opt2\">Type 2</option>\n            <option value=\"opt3\">Type 3</option>\n            <option value=\"opt4\">Type 4</option>\n            <option value=\"opt5\">Type 5</option>\n            <option value=\"opt6\">Type 6</option>\n            <option value=\"opt7\">Type 7</option>\n            <option value=\"opt8\">Type 8</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12 col-xl-3 m-b-30 \">\n          <h4 class=\"sub-title\">Warning Select</h4>\n          <select name=\"select\" class=\"form-control form-control-warning\">\n            <option value=\"opt1\">Select One Value Only</option>\n            <option value=\"opt2\">Type 2</option>\n            <option value=\"opt3\">Type 3</option>\n            <option value=\"opt4\">Type 4</option>\n            <option value=\"opt5\">Type 5</option>\n            <option value=\"opt6\">Type 6</option>\n            <option value=\"opt7\">Type 7</option>\n            <option value=\"opt8\">Type 8</option>\n          </select>\n        </div>\n        <div class=\"col-sm-12 col-xl-3 m-b-30\">\n          <h4 class=\"sub-title\">Danger Select</h4>\n          <select name=\"select\" class=\"form-control form-control-danger\">\n            <option value=\"opt1\">Select One Value Only</option>\n            <option value=\"opt2\">Type 2</option>\n            <option value=\"opt3\">Type 3</option>\n            <option value=\"opt4\">Type 4</option>\n            <option value=\"opt5\">Type 5</option>\n            <option value=\"opt6\">Type 6</option>\n            <option value=\"opt7\">Type 7</option>\n            <option value=\"opt8\">Type 8</option>\n          </select>\n        </div>\n        <div class=\"col-sm-12 col-xl-3 \">\n          <h4 class=\"sub-title\">Inverse Select</h4>\n          <select name=\"select\" class=\"form-control form-control-inverse\">\n            <option value=\"opt1\">Select One Value Only</option>\n            <option value=\"opt2\">Type 2</option>\n            <option value=\"opt3\">Type 3</option>\n            <option value=\"opt4\">Type 4</option>\n            <option value=\"opt5\">Type 5</option>\n            <option value=\"opt6\">Type 6</option>\n            <option value=\"opt7\">Type 7</option>\n            <option value=\"opt8\">Type 8</option>\n          </select>\n        </div>\n      </div>\n    </app-card>\n\n    <app-card [title]=\"'Default Select'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\n      <div class=\"row\">\n        <div class=\"col-sm-12 col-xl-4\">\n          <h4 class=\"sub-title\">Single Select</h4>\n          <ng-select [ngClass]=\"'ng-select'\" [options]=\"simpleOption\" [(ngModel)]=\"selectedOption\"> </ng-select>\n          <p class=\"m-t-10\"><code>ng-select</code> can take a regular select box like this...</p>\n        </div>\n        <div class=\"col-sm-12 col-xl-4\">\n          <h4 class=\"sub-title\">Multi Select</h4>\n          <ng-select [ngClass]=\"'ng-select'\" [options]=\"simpleOption\" [multiple]=\"true\"></ng-select>\n          <p class=\"m-t-10\">The ng-select above is declared with the <code>multiple</code> attribute</p>\n        </div>\n        <div class=\"col-sm-12 col-xl-4\">\n          <h4 class=\"sub-title\">With Placeholder</h4>\n          <tag-input [ngClass]=\"'tag-select'\" theme='bootstrap' [secondaryPlaceholder]=\"'Select your nice name'\" [placeholder] = \"'Select Name +'\" [ngModel]=\"[]\" [onlyFromAutocomplete]=\"true\">\n            <tag-input-dropdown [autocompleteItems]=\"autocompleteItems\"></tag-input-dropdown>\n          </tag-input>\n          <p class=\"m-t-10\"><code>tag-input</code> uses the <code>secondaryPlaceholder and placeholder</code> attribute on multiple select boxes</p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12 col-xl-4\">\n          <h4 class=\"sub-title\">Tagging Support</h4>\n          <tag-input [ngClass]=\"'tag-select'\" theme='bootstrap' [placeholder] = \"'+'\" [ngModel]=\"['Dolor']\" [addOnBlur]=\"true\" [clearOnBlur]=\"true\">\n            <tag-input-dropdown [autocompleteItems]=\"autocompleteItems\"></tag-input-dropdown>\n          </tag-input>\n          <p class=\"m-t-10\">The select below is declared with the <code>tag-input and tag-input-dropdown</code></p>\n        </div>\n        <div class=\"col-sm-12 col-xl-4\">\n          <h4 class=\"sub-title\">DIACRITICS SUPPORT</h4>\n          <tag-input [ngClass]=\"'tag-select'\" theme='bootstrap' [placeholder] = \"'Select Name +'\" [ngModel]=\"[]\" [onlyFromAutocomplete]=\"true\">\n            <tag-input-dropdown [displayBy]=\"'value'\" [identifyBy]=\"'id'\" [autocompleteItems]=\"autocompleteItemsAsObjects\"></tag-input-dropdown>\n          </tag-input>\n          <p class=\"m-t-10\">The select below is declared with the tag-input <code>onlyFromAutocomplete(true/false)</code></p>\n        </div>\n        <div class=\"col-sm-12 col-xl-4\">\n          <h4 class=\"sub-title\">RTL Support</h4>\n          <tag-input [ngClass]=\"'tag-select'\" theme='bootstrap' [placeholder] = \"'+'\" [ngModel]=\"['Dolor']\" [addOnBlur]=\"true\" [clearOnBlur]=\"true\">\n            <tag-input-dropdown [autocompleteItems]=\"autocompleteItems\"></tag-input-dropdown>\n          </tag-input>\n          <p class=\"m-t-10\">The select below is declared with the class<code>.tag-input-rtl</code></p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12 col-xl-4\">\n          <h4 class=\"sub-title\">LIMITING THE NUMBER OF SELECTIONS</h4>\n          <tag-input [ngClass]=\"'tag-select'\" theme='bootstrap' [placeholder] = \"'+'\" [maxItems]=\"3\" [ngModel]=\"['Dolor']\" [addOnBlur]=\"true\" [clearOnBlur]=\"true\">\n            <tag-input-dropdown [autocompleteItems]=\"autocompleteItems\"></tag-input-dropdown>\n          </tag-input>\n          <p class=\"m-t-10\">The select below is declared with the tag-input<code>maxItems</code></p>\n        </div>\n        <div class=\"col-sm-12 col-xl-4\">\n          <h4 class=\"sub-title\">LOADING WITH ARRAY</h4>\n          <tag-input [ngClass]=\"'tag-select'\" theme='bootstrap' [placeholder] = \"'Select Name +'\" [ngModel]=\"[]\" [onlyFromAutocomplete]=\"true\">\n            <tag-input-dropdown [displayBy]=\"'value'\" [identifyBy]=\"'id'\" [autocompleteItems]=\"autocompleteItemsAsObjects\"></tag-input-dropdown>\n          </tag-input>\n          <p class=\"m-t-10\">The select below is declared with the tag-input <code>onlyFromAutocomplete(true/false)</code></p>\n        </div>\n        <div class=\"col-sm-12 col-xl-4\">\n          <h4 class=\"sub-title\">LOADING REMOTE DATA ( AJAX )</h4>\n          <tag-input [ngClass]=\"'tag-select'\"\n                     theme='bootstrap'\n                     [ngModel]=\"[]\"\n                     [placeholder]=\"'Enter a new item'\"\n                     [onTextChangeDebounce]=\"500\"\n                     [secondaryPlaceholder]=\"'Search in Github'\"\n                     [onlyFromAutocomplete]=\"true\">\n            <tag-input-dropdown [autocompleteObservable]=\"requestAutocompleteItems\">\n              <ng-template let-item=\"item\" let-index=\"index\">\n                {{ item.display }}\n              </ng-template>\n            </tag-input-dropdown>\n          </tag-input>\n          <p class=\"m-t-10\">The select below is declared with the class<code>.tag-input-rtl</code></p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12 col-xl-4\">\n          <h4 class=\"sub-title\">Loading options</h4>\n          <ng-select [ngClass]=\"'ng-select'\" [options]=\"characters\" [(ngModel)]=\"selectedCharacter\"></ng-select>\n          <p class=\"m-t-10\"><code>ng-select</code> with loading options</p>\n        </div>\n        <div class=\"col-sm-12 col-xl-4\">\n          <h4 class=\"sub-title\">Allow clear</h4>\n          <ng-select [ngClass]=\"'ng-select'\" [allowClear]=\"true\" [options]=\"simpleOption\" [(ngModel)]=\"selectedOption\"></ng-select>\n          <p class=\"m-t-10\">The ng-select above is declared with the <code>allowClear</code> attribute</p>\n        </div>\n        <div class=\"col-sm-12 col-xl-4 m-b-30\">\n          <h4 class=\"sub-title\">With Placeholder</h4>\n          <ng-select [ngClass]=\"'ng-select'\" [options]=\"simpleOption\" [disabled]=\"isDisabled\" [(ngModel)]=\"selectedOption\"></ng-select>\n          <button [ngClass]=\"'btn btn-primary m-t-10'\" (click)=\"isDisabled = !isDisabled\">\n            <span *ngIf=\"!isDisabled\">Disable</span>\n            <span *ngIf=\"isDisabled\">Enable</span>\n          </button>\n          <p class=\"m-t-10\"><code>ng-select</code> uses the <code>disabled</code> attribute on multiple select boxes</p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12 col-xl-6 m-b-30\">\n          <h4 class=\"sub-title\">Select With Icon</h4>\n          <ng-select [ngClass]=\"'ng-select'\" [options]=\"countries\" [allowClear]=\"true\" [(ngModel)]=\"selectedCountry\">\n            <ng-template #optionTemplate let-option=\"option\">\n              <div class=\"famfamfam-flags {{option?.value.toLowerCase()}}\"></div>\n              {{option?.label}}\n            </ng-template>\n          </ng-select>\n        </div>\n        <div class=\"col-sm-12 col-xl-6\">\n          <h4 class=\"sub-title\">Multiple Select With Icon</h4>\n          <ng-select [ngClass]=\"'ng-select'\" [options]=\"countries\" [multiple]=\"true\" [allowClear]=\"true\" [(ngModel)]=\"selectedCountries\">\n            <ng-template #optionTemplate let-option=\"option\">\n              <div class=\"famfamfam-flags {{option?.value.toLowerCase()}}\"></div>\n              {{option?.label}}\n            </ng-template>\n          </ng-select>\n        </div>\n      </div>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/ui-elements/forms/select/select.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_element_select_option_service__ = __webpack_require__("../../../../../src/app/shared/element/select-option.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SelectComponent = (function () {
    function SelectComponent(selectOptionService, http) {
        var _this = this;
        this.selectOptionService = selectOptionService;
        this.http = http;
        this.simpleOption = this.selectOptionService.getCharacters();
        this.selectedOption = '3';
        this.isDisabled = true;
        this.selectedCharacter = '3';
        this.timeLeft = 5;
        this.countries = this.selectOptionService.getCountries();
        this.selectedCountry = 'IN';
        this.selectedCountries = ['IN', 'BE', 'LU', 'NL'];
        this.dataSub = null;
        this.autocompleteItems = ['Alabama', 'Wyoming', 'Henry Die', 'John Doe'];
        this.autocompleteItemsAsObjects = [
            { value: 'Alabama', id: 0 },
            { value: 'Wyoming', id: 1 },
            { value: 'Coming', id: 2 },
            { value: 'Josephin Doe', id: 3 },
            { value: 'Henry Die', id: 4 },
            { value: 'Lary Doe', id: 5 },
            { value: 'Alice', id: 6 },
            { value: 'Alia', id: 7 },
            { value: 'Suzen', id: 8 },
            { value: 'Michael Scofield', id: 9 },
            { value: 'Irina Shayk', id: 10 },
            { value: 'Sara Tancredi', id: 11 },
            { value: 'Daizy Mendize', id: 12 },
            { value: 'Loren Scofield', id: 13 },
            { value: 'Shayk', id: 14 },
            { value: 'Sara', id: 15 },
            { value: 'Doe', id: 16 },
            { value: 'Lary', id: 17 },
            { value: 'Roni Sommerfield', id: 18 },
            { value: 'Mickey Amavisca', id: 19 },
            { value: 'Dorethea Hennigan', id: 20 },
            { value: 'Marisha Haughey', id: 21 },
            { value: 'Justin Czajkowski', id: 22 },
            { value: 'Reyes Hodges', id: 23 },
            { value: 'Vicky Hadley', id: 24 },
            { value: 'Lezlie Baumert', id: 25 },
            { value: 'Otha Vanorden', id: 26 },
            { value: 'Glayds Inabinet', id: 27 },
            { value: 'Hang Owsley', id: 28 },
            { value: 'Carlotta Buttner', id: 29 },
            { value: 'Randa Vanloan', id: 30 },
            { value: 'Elana Fulk', id: 31 },
            { value: 'Amos Spearman', id: 32 },
            { value: 'Samon', id: 33 },
            { value: 'John Doe', id: 34 }
        ];
        this.requestAutocompleteItems = function (text) {
            var url = "https://api.github.com/search/repositories?q=" + text;
            return _this.http
                .get(url)
                .map(function (data) { return data.json().items.map(function (item) { return item.full_name; }); });
        };
    }
    SelectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.runTimer();
        this.dataSub = this.selectOptionService.loadCharacters().subscribe(function (options) {
            _this.characters = options;
        });
    };
    SelectComponent.prototype.ngOnDestroy = function () {
        if (this.dataSub !== null) {
            this.dataSub.unsubscribe();
        }
    };
    SelectComponent.prototype.runTimer = function () {
        var _this = this;
        var timer = setInterval(function () {
            _this.timeLeft -= 1;
            if (_this.timeLeft === 0) {
                clearInterval(timer);
            }
        }, 1000);
    };
    return SelectComponent;
}());
SelectComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-select',
        template: __webpack_require__("../../../../../src/app/pages/ui-elements/forms/select/select.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/ui-elements/forms/select/select.component.css"), __webpack_require__("../../../../famfamfam-flags/dist/sprite/famfamfam-flags.min.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_element_select_option_service__["a" /* SelectOptionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_element_select_option_service__["a" /* SelectOptionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]) === "function" && _b || Object])
], SelectComponent);

var _a, _b;
//# sourceMappingURL=select.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/ui-elements/forms/select/select.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRoutes", function() { return selectRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectFormModule", function() { return SelectFormModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_component__ = __webpack_require__("../../../../../src/app/pages/ui-elements/forms/select/select.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_element_select_option_service__ = __webpack_require__("../../../../../src/app/shared/element/select-option.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_select__ = __webpack_require__("../../../../ng-select/ng-select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_chips__ = __webpack_require__("../../../../ngx-chips/dist/ngx-chips.bundle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_chips___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ngx_chips__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var selectRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__select_component__["a" /* SelectComponent */],
        data: {
            breadcrumb: 'Form Select',
            icon: 'icofont-file-alt bg-c-yellow',
            status: true
        }
    }
];
var SelectFormModule = (function () {
    function SelectFormModule() {
    }
    return SelectFormModule;
}());
SelectFormModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(selectRoutes),
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_6_ng_select__["a" /* SelectModule */],
            __WEBPACK_IMPORTED_MODULE_8_ngx_chips__["TagInputModule"],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* HttpModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__select_component__["a" /* SelectComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_5__shared_element_select_option_service__["a" /* SelectOptionService */]]
    })
], SelectFormModule);

//# sourceMappingURL=select.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/element/select-option.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectOptionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SelectOptionService = SelectOptionService_1 = (function () {
    function SelectOptionService() {
    }
    SelectOptionService.prototype.getCharacters = function () {
        return this.cloneOptions(SelectOptionService_1.PLAYER_ONE);
    };
    SelectOptionService.prototype.loadCharacters = function () {
        return this.loadOptions(SelectOptionService_1.PLAYER_ONE);
    };
    SelectOptionService.prototype.getCharactersWithDisabled = function () {
        var characters = this.cloneOptions(SelectOptionService_1.PLAYER_ONE);
        characters[1].disabled = true;
        characters[4].disabled = true;
        return characters;
    };
    SelectOptionService.prototype.getCountries = function () {
        return this.cloneOptions(SelectOptionService_1.COUNTRIES);
    };
    SelectOptionService.prototype.loadCountries = function () {
        return this.loadOptions(SelectOptionService_1.COUNTRIES);
    };
    SelectOptionService.prototype.loadOptions = function (options) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (obs) {
            setTimeout(function () {
                obs.next(_this.cloneOptions(options));
                obs.complete();
            }, 5000);
        });
    };
    SelectOptionService.prototype.cloneOptions = function (options) {
        return options.map(function (option) { return ({ value: option.value, label: option.label }); });
    };
    return SelectOptionService;
}());
SelectOptionService.PLAYER_ONE = [
    { value: '0', label: 'Alabama' },
    { value: '1', label: 'Wyoming' },
    { value: '2', label: 'Coming' },
    { value: '3', label: 'Henry Die' },
    { value: '4', label: 'John Doe' }
];
SelectOptionService.COUNTRIES = [
    { value: 'AF', label: 'Afghanistan' },
    { value: 'AX', label: 'Åland Islands' },
    { value: 'AL', label: 'Albania' },
    { value: 'DZ', label: 'Algeria' },
    { value: 'AS', label: 'American Samoa' },
    { value: 'AD', label: 'Andorra' },
    { value: 'AO', label: 'Angola' },
    { value: 'AI', label: 'Anguilla' },
    { value: 'AQ', label: 'Antarctica' },
    { value: 'AG', label: 'Antigua and Barbuda' },
    { value: 'AR', label: 'Argentina' },
    { value: 'AM', label: 'Armenia' },
    { value: 'AW', label: 'Aruba' },
    { value: 'AU', label: 'Australia' },
    { value: 'AT', label: 'Austria' },
    { value: 'AZ', label: 'Azerbaijan' },
    { value: 'BS', label: 'Bahamas' },
    { value: 'BH', label: 'Bahrain' },
    { value: 'BD', label: 'Bangladesh' },
    { value: 'BB', label: 'Barbados' },
    { value: 'BY', label: 'Belarus' },
    { value: 'BE', label: 'Belgium' },
    { value: 'BZ', label: 'Belize' },
    { value: 'BJ', label: 'Benin' },
    { value: 'BM', label: 'Bermuda' },
    { value: 'BT', label: 'Bhutan' },
    { value: 'BO', label: 'Bolivia, Plurinational State of' },
    { value: 'BA', label: 'Bosnia and Herzegovina' },
    { value: 'BW', label: 'Botswana' },
    { value: 'BV', label: 'Bouvet Island' },
    { value: 'BR', label: 'Brazil' },
    { value: 'IO', label: 'British Indian Ocean Territory' },
    { value: 'BN', label: 'Brunei Darussalam' },
    { value: 'BG', label: 'Bulgaria' },
    { value: 'BF', label: 'Burkina Faso' },
    { value: 'BI', label: 'Burundi' },
    { value: 'KH', label: 'Cambodia' },
    { value: 'CM', label: 'Cameroon' },
    { value: 'CA', label: 'Canada' },
    { value: 'CV', label: 'Cape Verde' },
    { value: 'KY', label: 'Cayman Islands' },
    { value: 'CF', label: 'Central African Republic' },
    { value: 'TD', label: 'Chad' },
    { value: 'CL', label: 'Chile' },
    { value: 'CN', label: 'China' },
    { value: 'CX', label: 'Christmas Island' },
    { value: 'CC', label: 'Cocos (Keeling) Islands' },
    { value: 'CO', label: 'Colombia' },
    { value: 'KM', label: 'Comoros' },
    { value: 'CG', label: 'Congo' },
    { value: 'CD', label: 'Congo, the Democratic Republic of the' },
    { value: 'CK', label: 'Cook Islands' },
    { value: 'CR', label: 'Costa Rica' },
    { value: 'CI', label: 'Côte d\'Ivoire' },
    { value: 'HR', label: 'Croatia' },
    { value: 'CU', label: 'Cuba' },
    { value: 'CY', label: 'Cyprus' },
    { value: 'CZ', label: 'Czech Republic' },
    { value: 'DK', label: 'Denmark' },
    { value: 'DJ', label: 'Djibouti' },
    { value: 'DM', label: 'Dominica' },
    { value: 'DO', label: 'Dominican Republic' },
    { value: 'EC', label: 'Ecuador' },
    { value: 'EG', label: 'Egypt' },
    { value: 'SV', label: 'El Salvador' },
    { value: 'GQ', label: 'Equatorial Guinea' },
    { value: 'ER', label: 'Eritrea' },
    { value: 'EE', label: 'Estonia' },
    { value: 'ET', label: 'Ethiopia' },
    { value: 'FK', label: 'Falkland Islands (Malvinas)' },
    { value: 'FO', label: 'Faroe Islands' },
    { value: 'FJ', label: 'Fiji' },
    { value: 'FI', label: 'Finland' },
    { value: 'FR', label: 'France' },
    { value: 'GF', label: 'French Guiana' },
    { value: 'PF', label: 'French Polynesia' },
    { value: 'TF', label: 'French Southern Territories' },
    { value: 'GA', label: 'Gabon' },
    { value: 'GM', label: 'Gambia' },
    { value: 'GE', label: 'Georgia' },
    { value: 'DE', label: 'Germany' },
    { value: 'GH', label: 'Ghana' },
    { value: 'GI', label: 'Gibraltar' },
    { value: 'GR', label: 'Greece' },
    { value: 'GL', label: 'Greenland' },
    { value: 'GD', label: 'Grenada' },
    { value: 'GP', label: 'Guadeloupe' },
    { value: 'GU', label: 'Guam' },
    { value: 'GT', label: 'Guatemala' },
    { value: 'GG', label: 'Guernsey' },
    { value: 'GN', label: 'Guinea' },
    { value: 'GW', label: 'Guinea-Bissau' },
    { value: 'GY', label: 'Guyana' },
    { value: 'HT', label: 'Haiti' },
    { value: 'HM', label: 'Heard Island and McDonald Islands' },
    { value: 'VA', label: 'Holy See (Vatican City State)' },
    { value: 'HN', label: 'Honduras' },
    { value: 'HK', label: 'Hong Kong' },
    { value: 'HU', label: 'Hungary' },
    { value: 'IS', label: 'Iceland' },
    { value: 'IN', label: 'India' },
    { value: 'ID', label: 'Indonesia' },
    { value: 'IR', label: 'Iran, Islamic Republic of' },
    { value: 'IQ', label: 'Iraq' },
    { value: 'IE', label: 'Ireland' },
    { value: 'IM', label: 'Isle of Man' },
    { value: 'IL', label: 'Israel' },
    { value: 'IT', label: 'Italy' },
    { value: 'JM', label: 'Jamaica' },
    { value: 'JP', label: 'Japan' },
    { value: 'JE', label: 'Jersey' },
    { value: 'JO', label: 'Jordan' },
    { value: 'KZ', label: 'Kazakhstan' },
    { value: 'KE', label: 'Kenya' },
    { value: 'KI', label: 'Kiribati' },
    { value: 'KP', label: 'Korea, Democratic People\'s Republic of' },
    { value: 'KR', label: 'Korea, Republic of' },
    { value: 'KW', label: 'Kuwait' },
    { value: 'KG', label: 'Kyrgyzstan' },
    { value: 'LA', label: 'Lao People\'s Democratic Republic' },
    { value: 'LV', label: 'Latvia' },
    { value: 'LB', label: 'Lebanon' },
    { value: 'LS', label: 'Lesotho' },
    { value: 'LR', label: 'Liberia' },
    { value: 'LY', label: 'Libyan Arab Jamahiriya' },
    { value: 'LI', label: 'Liechtenstein' },
    { value: 'LT', label: 'Lithuania' },
    { value: 'LU', label: 'Luxembourg' },
    { value: 'MO', label: 'Macao' },
    { value: 'MK', label: 'Macedonia, the former Yugoslav Republic of' },
    { value: 'MG', label: 'Madagascar' },
    { value: 'MW', label: 'Malawi' },
    { value: 'MY', label: 'Malaysia' },
    { value: 'MV', label: 'Maldives' },
    { value: 'ML', label: 'Mali' },
    { value: 'MT', label: 'Malta' },
    { value: 'MH', label: 'Marshall Islands' },
    { value: 'MQ', label: 'Martinique' },
    { value: 'MR', label: 'Mauritania' },
    { value: 'MU', label: 'Mauritius' },
    { value: 'YT', label: 'Mayotte' },
    { value: 'MX', label: 'Mexico' },
    { value: 'FM', label: 'Micronesia, Federated States of' },
    { value: 'MD', label: 'Moldova, Republic of' },
    { value: 'MC', label: 'Monaco' },
    { value: 'MN', label: 'Mongolia' },
    { value: 'ME', label: 'Montenegro' },
    { value: 'MS', label: 'Montserrat' },
    { value: 'MA', label: 'Morocco' },
    { value: 'MZ', label: 'Mozambique' },
    { value: 'MM', label: 'Myanmar' },
    { value: 'NA', label: 'Namibia' },
    { value: 'NR', label: 'Nauru' },
    { value: 'NP', label: 'Nepal' },
    { value: 'NL', label: 'Netherlands' },
    { value: 'AN', label: 'Netherlands Antilles' },
    { value: 'NC', label: 'New Caledonia' },
    { value: 'NZ', label: 'New Zealand' },
    { value: 'NI', label: 'Nicaragua' },
    { value: 'NE', label: 'Niger' },
    { value: 'NG', label: 'Nigeria' },
    { value: 'NU', label: 'Niue' },
    { value: 'NF', label: 'Norfolk Island' },
    { value: 'MP', label: 'Northern Mariana Islands' },
    { value: 'NO', label: 'Norway' },
    { value: 'OM', label: 'Oman' },
    { value: 'PK', label: 'Pakistan' },
    { value: 'PW', label: 'Palau' },
    { value: 'PS', label: 'Palestinian Territory, Occupied' },
    { value: 'PA', label: 'Panama' },
    { value: 'PG', label: 'Papua New Guinea' },
    { value: 'PY', label: 'Paraguay' },
    { value: 'PE', label: 'Peru' },
    { value: 'PH', label: 'Philippines' },
    { value: 'PN', label: 'Pitcairn' },
    { value: 'PL', label: 'Poland' },
    { value: 'PT', label: 'Portugal' },
    { value: 'PR', label: 'Puerto Rico' },
    { value: 'QA', label: 'Qatar' },
    { value: 'RE', label: 'R&eacute;union' },
    { value: 'RO', label: 'Romania' },
    { value: 'RU', label: 'Russian Federation' },
    { value: 'RW', label: 'Rwanda' },
    { value: 'BL', label: 'Saint Barth&eacute;lemy' },
    { value: 'SH', label: 'Saint Helena, Ascension and Tristan da Cunha' },
    { value: 'KN', label: 'Saint Kitts and Nevis' },
    { value: 'LC', label: 'Saint Lucia' },
    { value: 'MF', label: 'Saint Martin (French part)' },
    { value: 'PM', label: 'Saint Pierre and Miquelon' },
    { value: 'VC', label: 'Saint Vincent and the Grenadines' },
    { value: 'WS', label: 'Samoa' },
    { value: 'SM', label: 'San Marino' },
    { value: 'ST', label: 'Sao Tome and Principe' },
    { value: 'SA', label: 'Saudi Arabia' },
    { value: 'SN', label: 'Senegal' },
    { value: 'RS', label: 'Serbia' },
    { value: 'SC', label: 'Seychelles' },
    { value: 'SL', label: 'Sierra Leone' },
    { value: 'SG', label: 'Singapore' },
    { value: 'SK', label: 'Slovakia' },
    { value: 'SI', label: 'Slovenia' },
    { value: 'SB', label: 'Solomon Islands' },
    { value: 'SO', label: 'Somalia' },
    { value: 'ZA', label: 'South Africa' },
    { value: 'GS', label: 'South Georgia and the South Sandwich Islands' },
    { value: 'ES', label: 'Spain' },
    { value: 'LK', label: 'Sri Lanka' },
    { value: 'SD', label: 'Sudan' },
    { value: 'SR', label: 'Suriname' },
    { value: 'SJ', label: 'Svalbard and Jan Mayen' },
    { value: 'SZ', label: 'Swaziland' },
    { value: 'SE', label: 'Sweden' },
    { value: 'CH', label: 'Switzerland' },
    { value: 'SY', label: 'Syrian Arab Republic' },
    { value: 'TW', label: 'Taiwan, Province of China' },
    { value: 'TJ', label: 'Tajikistan' },
    { value: 'TZ', label: 'Tanzania, United Republic of' },
    { value: 'TH', label: 'Thailand' },
    { value: 'TL', label: 'Timor-Leste' },
    { value: 'TG', label: 'Togo' },
    { value: 'TK', label: 'Tokelau' },
    { value: 'TO', label: 'Tonga' },
    { value: 'TT', label: 'Trinidad and Tobago' },
    { value: 'TN', label: 'Tunisia' },
    { value: 'TR', label: 'Turkey' },
    { value: 'TM', label: 'Turkmenistan' },
    { value: 'TC', label: 'Turks and Caicos Islands' },
    { value: 'TV', label: 'Tuvalu' },
    { value: 'UG', label: 'Uganda' },
    { value: 'UA', label: 'Ukraine' },
    { value: 'AE', label: 'United Arab Emirates' },
    { value: 'GB', label: 'United Kingdom' },
    { value: 'US', label: 'United States' },
    { value: 'UM', label: 'United States Minor Outlying Islands' },
    { value: 'UY', label: 'Uruguay' },
    { value: 'UZ', label: 'Uzbekistan' },
    { value: 'VU', label: 'Vanuatu' },
    { value: 'VE', label: 'Venezuela, Bolivarian Republic of' },
    { value: 'VN', label: 'Viet Nam' },
    { value: 'VG', label: 'Virgin Islands, British' },
    { value: 'VI', label: 'Virgin Islands, U.S.' },
    { value: 'WF', label: 'Wallis and Futuna' },
    { value: 'EH', label: 'Western Sahara' },
    { value: 'YE', label: 'Yemen' },
    { value: 'ZM', label: 'Zambia' },
    { value: 'ZW', label: 'Zimbabwe' }
];
SelectOptionService = SelectOptionService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], SelectOptionService);

var SelectOptionService_1;
//# sourceMappingURL=select-option.service.js.map

/***/ }),

/***/ "../../../../famfamfam-flags/dist/sprite/famfamfam-flags.min.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".famfamfam-flags{background:url(" + __webpack_require__("../../../../famfamfam-flags/dist/sprite/famfamfam-flags.png") + ") no-repeat;background-size:224px 199px}.famfamfam-flags.me{width:16px;height:12px;background-position:0 0}.famfamfam-flags.ky{width:16px;height:11px;background-position:-16px 0}.famfamfam-flags.af{width:16px;height:11px;background-position:0 -12px}.famfamfam-flags.ag{width:16px;height:11px;background-position:-16px -12px}.famfamfam-flags.ai{width:16px;height:11px;background-position:-32px 0}.famfamfam-flags.al{width:16px;height:11px;background-position:-32px -11px}.famfamfam-flags.am{width:16px;height:11px;background-position:0 -23px}.famfamfam-flags.an{width:16px;height:11px;background-position:-16px -23px}.famfamfam-flags.ao{width:16px;height:11px;background-position:-32px -23px}.famfamfam-flags.ar{width:16px;height:11px;background-position:0 -34px}.famfamfam-flags.as{width:16px;height:11px;background-position:-16px -34px}.famfamfam-flags.at{width:16px;height:11px;background-position:-32px -34px}.famfamfam-flags.au{width:16px;height:11px;background-position:-48px 0}.famfamfam-flags.aw{width:16px;height:11px;background-position:-48px -11px}.famfamfam-flags.ax{width:16px;height:11px;background-position:-48px -22px}.famfamfam-flags.az{width:16px;height:11px;background-position:-48px -33px}.famfamfam-flags.ba{width:16px;height:11px;background-position:0 -45px}.famfamfam-flags.bb{width:16px;height:11px;background-position:-16px -45px}.famfamfam-flags.bd{width:16px;height:11px;background-position:-32px -45px}.famfamfam-flags.be{width:16px;height:11px;background-position:-48px -45px}.famfamfam-flags.bf{width:16px;height:11px;background-position:-64px 0}.famfamfam-flags.bg{width:16px;height:11px;background-position:-64px -11px}.famfamfam-flags.bh{width:16px;height:11px;background-position:-64px -22px}.famfamfam-flags.bi{width:16px;height:11px;background-position:-64px -33px}.famfamfam-flags.bj{width:16px;height:11px;background-position:-64px -44px}.famfamfam-flags.bm{width:16px;height:11px;background-position:0 -56px}.famfamfam-flags.bn{width:16px;height:11px;background-position:-16px -56px}.famfamfam-flags.bo{width:16px;height:11px;background-position:-32px -56px}.famfamfam-flags.br{width:16px;height:11px;background-position:-48px -56px}.famfamfam-flags.bs{width:16px;height:11px;background-position:-64px -56px}.famfamfam-flags.bt{width:16px;height:11px;background-position:0 -67px}.famfamfam-flags.bv{width:16px;height:11px;background-position:-16px -67px}.famfamfam-flags.bw{width:16px;height:11px;background-position:-32px -67px}.famfamfam-flags.by{width:16px;height:11px;background-position:-48px -67px}.famfamfam-flags.bz{width:16px;height:11px;background-position:-64px -67px}.famfamfam-flags.ca{width:16px;height:11px;background-position:-80px 0}.famfamfam-flags.catalonia{width:16px;height:11px;background-position:-80px -11px}.famfamfam-flags.cc{width:16px;height:11px;background-position:-80px -22px}.famfamfam-flags.cd{width:16px;height:11px;background-position:-80px -33px}.famfamfam-flags.cf{width:16px;height:11px;background-position:-80px -44px}.famfamfam-flags.cg{width:16px;height:11px;background-position:-80px -55px}.famfamfam-flags.zm{width:16px;height:11px;background-position:-80px -66px}.famfamfam-flags.ci{width:16px;height:11px;background-position:0 -78px}.famfamfam-flags.ck{width:16px;height:11px;background-position:-16px -78px}.famfamfam-flags.cl{width:16px;height:11px;background-position:-32px -78px}.famfamfam-flags.cm{width:16px;height:11px;background-position:-48px -78px}.famfamfam-flags.cn{width:16px;height:11px;background-position:-64px -78px}.famfamfam-flags.co{width:16px;height:11px;background-position:-80px -78px}.famfamfam-flags.cr{width:16px;height:11px;background-position:-96px 0}.famfamfam-flags.cs{width:16px;height:11px;background-position:-96px -11px}.famfamfam-flags.cu{width:16px;height:11px;background-position:-96px -22px}.famfamfam-flags.cv{width:16px;height:11px;background-position:-96px -33px}.famfamfam-flags.cx{width:16px;height:11px;background-position:-96px -44px}.famfamfam-flags.cy{width:16px;height:11px;background-position:-96px -55px}.famfamfam-flags.cz{width:16px;height:11px;background-position:-96px -66px}.famfamfam-flags.de{width:16px;height:11px;background-position:-96px -77px}.famfamfam-flags.dj{width:16px;height:11px;background-position:0 -89px}.famfamfam-flags.dk{width:16px;height:11px;background-position:-16px -89px}.famfamfam-flags.dm{width:16px;height:11px;background-position:-32px -89px}.famfamfam-flags.do{width:16px;height:11px;background-position:-48px -89px}.famfamfam-flags.dz{width:16px;height:11px;background-position:-64px -89px}.famfamfam-flags.ec{width:16px;height:11px;background-position:-80px -89px}.famfamfam-flags.ee{width:16px;height:11px;background-position:-96px -89px}.famfamfam-flags.eg{width:16px;height:11px;background-position:0 -100px}.famfamfam-flags.eh{width:16px;height:11px;background-position:-16px -100px}.famfamfam-flags.england{width:16px;height:11px;background-position:-32px -100px}.famfamfam-flags.er{width:16px;height:11px;background-position:-48px -100px}.famfamfam-flags.es{width:16px;height:11px;background-position:-64px -100px}.famfamfam-flags.et{width:16px;height:11px;background-position:-80px -100px}.famfamfam-flags.europeanunion{width:16px;height:11px;background-position:-96px -100px}.famfamfam-flags.fam{width:16px;height:11px;background-position:-112px 0}.famfamfam-flags.fi{width:16px;height:11px;background-position:-112px -11px}.famfamfam-flags.fj{width:16px;height:11px;background-position:-112px -22px}.famfamfam-flags.fk{width:16px;height:11px;background-position:-112px -33px}.famfamfam-flags.fm{width:16px;height:11px;background-position:-112px -44px}.famfamfam-flags.fo{width:16px;height:11px;background-position:-112px -55px}.famfamfam-flags.fr,.famfamfam-flags.gp,.famfamfam-flags.mf,.famfamfam-flags.re,.famfamfam-flags.yt{width:16px;height:11px;background-position:-112px -66px}.famfamfam-flags.ga{width:16px;height:11px;background-position:-112px -77px}.famfamfam-flags.gb{width:16px;height:11px;background-position:-112px -88px}.famfamfam-flags.gd{width:16px;height:11px;background-position:-112px -99px}.famfamfam-flags.ge{width:16px;height:11px;background-position:0 -111px}.famfamfam-flags.gf{width:16px;height:11px;background-position:-16px -111px}.famfamfam-flags.gg{width:16px;height:11px;background-position:-32px -111px}.famfamfam-flags.gh{width:16px;height:11px;background-position:-48px -111px}.famfamfam-flags.gi{width:16px;height:11px;background-position:-64px -111px}.famfamfam-flags.gl{width:16px;height:11px;background-position:-80px -111px}.famfamfam-flags.gm{width:16px;height:11px;background-position:-96px -111px}.famfamfam-flags.gn{width:16px;height:11px;background-position:-112px -111px}.famfamfam-flags.gp{width:16px;height:11px;background-position:-128px 0}.famfamfam-flags.gq{width:16px;height:11px;background-position:-128px -11px}.famfamfam-flags.gr{width:16px;height:11px;background-position:-128px -22px}.famfamfam-flags.gs{width:16px;height:11px;background-position:-128px -33px}.famfamfam-flags.gt{width:16px;height:11px;background-position:-128px -44px}.famfamfam-flags.gu{width:16px;height:11px;background-position:-128px -55px}.famfamfam-flags.gw{width:16px;height:11px;background-position:-128px -66px}.famfamfam-flags.gy{width:16px;height:11px;background-position:-128px -77px}.famfamfam-flags.hk{width:16px;height:11px;background-position:-128px -88px}.famfamfam-flags.hm{width:16px;height:11px;background-position:-128px -99px}.famfamfam-flags.hn{width:16px;height:11px;background-position:-128px -110px}.famfamfam-flags.hr{width:16px;height:11px;background-position:0 -122px}.famfamfam-flags.ht{width:16px;height:11px;background-position:-16px -122px}.famfamfam-flags.hu{width:16px;height:11px;background-position:-32px -122px}.famfamfam-flags.id{width:16px;height:11px;background-position:-48px -122px}.famfamfam-flags.ie{width:16px;height:11px;background-position:-64px -122px}.famfamfam-flags.il{width:16px;height:11px;background-position:-80px -122px}.famfamfam-flags.in{width:16px;height:11px;background-position:-96px -122px}.famfamfam-flags.io{width:16px;height:11px;background-position:-112px -122px}.famfamfam-flags.iq{width:16px;height:11px;background-position:-128px -122px}.famfamfam-flags.ir{width:16px;height:11px;background-position:0 -133px}.famfamfam-flags.is{width:16px;height:11px;background-position:-16px -133px}.famfamfam-flags.it{width:16px;height:11px;background-position:-32px -133px}.famfamfam-flags.je{width:16px;height:11px;background-position:-48px -133px}.famfamfam-flags.jm{width:16px;height:11px;background-position:-64px -133px}.famfamfam-flags.jo{width:16px;height:11px;background-position:-80px -133px}.famfamfam-flags.jp{width:16px;height:11px;background-position:-96px -133px}.famfamfam-flags.ke{width:16px;height:11px;background-position:-112px -133px}.famfamfam-flags.kg{width:16px;height:11px;background-position:-128px -133px}.famfamfam-flags.kh{width:16px;height:11px;background-position:-144px 0}.famfamfam-flags.ki{width:16px;height:11px;background-position:-144px -11px}.famfamfam-flags.km{width:16px;height:11px;background-position:-144px -22px}.famfamfam-flags.kn{width:16px;height:11px;background-position:-144px -33px}.famfamfam-flags.kp{width:16px;height:11px;background-position:-144px -44px}.famfamfam-flags.kr{width:16px;height:11px;background-position:-144px -55px}.famfamfam-flags.kw{width:16px;height:11px;background-position:-144px -66px}.famfamfam-flags.ae{width:16px;height:11px;background-position:-144px -77px}.famfamfam-flags.kz{width:16px;height:11px;background-position:-144px -88px}.famfamfam-flags.la{width:16px;height:11px;background-position:-144px -99px}.famfamfam-flags.lb{width:16px;height:11px;background-position:-144px -110px}.famfamfam-flags.lc{width:16px;height:11px;background-position:-144px -121px}.famfamfam-flags.li{width:16px;height:11px;background-position:-144px -132px}.famfamfam-flags.lk{width:16px;height:11px;background-position:0 -144px}.famfamfam-flags.lr{width:16px;height:11px;background-position:-16px -144px}.famfamfam-flags.ls{width:16px;height:11px;background-position:-32px -144px}.famfamfam-flags.lt{width:16px;height:11px;background-position:-48px -144px}.famfamfam-flags.lu{width:16px;height:11px;background-position:-64px -144px}.famfamfam-flags.lv{width:16px;height:11px;background-position:-80px -144px}.famfamfam-flags.ly{width:16px;height:11px;background-position:-96px -144px}.famfamfam-flags.ma{width:16px;height:11px;background-position:-112px -144px}.famfamfam-flags.mc{width:16px;height:11px;background-position:-128px -144px}.famfamfam-flags.md{width:16px;height:11px;background-position:-144px -144px}.famfamfam-flags.ad{width:16px;height:11px;background-position:-160px 0}.famfamfam-flags.mg{width:16px;height:11px;background-position:-160px -11px}.famfamfam-flags.mh{width:16px;height:11px;background-position:-160px -22px}.famfamfam-flags.mk{width:16px;height:11px;background-position:-160px -33px}.famfamfam-flags.ml{width:16px;height:11px;background-position:-160px -44px}.famfamfam-flags.mm{width:16px;height:11px;background-position:-160px -55px}.famfamfam-flags.mn{width:16px;height:11px;background-position:-160px -66px}.famfamfam-flags.mo{width:16px;height:11px;background-position:-160px -77px}.famfamfam-flags.mp{width:16px;height:11px;background-position:-160px -88px}.famfamfam-flags.mq{width:16px;height:11px;background-position:-160px -99px}.famfamfam-flags.mr{width:16px;height:11px;background-position:-160px -110px}.famfamfam-flags.ms{width:16px;height:11px;background-position:-160px -121px}.famfamfam-flags.mt{width:16px;height:11px;background-position:-160px -132px}.famfamfam-flags.mu{width:16px;height:11px;background-position:-160px -143px}.famfamfam-flags.mv{width:16px;height:11px;background-position:0 -155px}.famfamfam-flags.mw{width:16px;height:11px;background-position:-16px -155px}.famfamfam-flags.mx{width:16px;height:11px;background-position:-32px -155px}.famfamfam-flags.my{width:16px;height:11px;background-position:-48px -155px}.famfamfam-flags.mz{width:16px;height:11px;background-position:-64px -155px}.famfamfam-flags.na{width:16px;height:11px;background-position:-80px -155px}.famfamfam-flags.nc{width:16px;height:11px;background-position:-96px -155px}.famfamfam-flags.ne{width:16px;height:11px;background-position:-112px -155px}.famfamfam-flags.nf{width:16px;height:11px;background-position:-128px -155px}.famfamfam-flags.ng{width:16px;height:11px;background-position:-144px -155px}.famfamfam-flags.ni{width:16px;height:11px;background-position:-160px -155px}.famfamfam-flags.bq,.famfamfam-flags.nl{width:16px;height:11px;background-position:-176px 0}.famfamfam-flags.no{width:16px;height:11px;background-position:-176px -11px}.famfamfam-flags.za{width:16px;height:11px;background-position:-176px -22px}.famfamfam-flags.nr{width:16px;height:11px;background-position:-176px -33px}.famfamfam-flags.nu{width:16px;height:11px;background-position:-176px -44px}.famfamfam-flags.nz{width:16px;height:11px;background-position:-176px -55px}.famfamfam-flags.om{width:16px;height:11px;background-position:-176px -66px}.famfamfam-flags.pa{width:16px;height:11px;background-position:-176px -77px}.famfamfam-flags.pe{width:16px;height:11px;background-position:-176px -88px}.famfamfam-flags.pf{width:16px;height:11px;background-position:-176px -99px}.famfamfam-flags.pg{width:16px;height:11px;background-position:-176px -110px}.famfamfam-flags.ph{width:16px;height:11px;background-position:-176px -121px}.famfamfam-flags.pk{width:16px;height:11px;background-position:-176px -132px}.famfamfam-flags.pl{width:16px;height:11px;background-position:-176px -143px}.famfamfam-flags.pm{width:16px;height:11px;background-position:-176px -154px}.famfamfam-flags.pn{width:16px;height:11px;background-position:0 -166px}.famfamfam-flags.pr{width:16px;height:11px;background-position:-16px -166px}.famfamfam-flags.ps{width:16px;height:11px;background-position:-32px -166px}.famfamfam-flags.pt{width:16px;height:11px;background-position:-48px -166px}.famfamfam-flags.pw{width:16px;height:11px;background-position:-64px -166px}.famfamfam-flags.py{width:16px;height:11px;background-position:-80px -166px}.famfamfam-flags.qa{width:16px;height:11px;background-position:-96px -166px}.famfamfam-flags.re{width:16px;height:11px;background-position:-112px -166px}.famfamfam-flags.ro{width:16px;height:11px;background-position:-128px -166px}.famfamfam-flags.rs{width:16px;height:11px;background-position:-144px -166px}.famfamfam-flags.ru{width:16px;height:11px;background-position:-160px -166px}.famfamfam-flags.rw{width:16px;height:11px;background-position:-176px -166px}.famfamfam-flags.sa{width:16px;height:11px;background-position:0 -177px}.famfamfam-flags.sb{width:16px;height:11px;background-position:-16px -177px}.famfamfam-flags.sc{width:16px;height:11px;background-position:-32px -177px}.famfamfam-flags.scotland{width:16px;height:11px;background-position:-48px -177px}.famfamfam-flags.sd{width:16px;height:11px;background-position:-64px -177px}.famfamfam-flags.se{width:16px;height:11px;background-position:-80px -177px}.famfamfam-flags.sg{width:16px;height:11px;background-position:-96px -177px}.famfamfam-flags.sh{width:16px;height:11px;background-position:-112px -177px}.famfamfam-flags.si{width:16px;height:11px;background-position:-128px -177px}.famfamfam-flags.sj{width:16px;height:11px;background-position:-144px -177px}.famfamfam-flags.sk{width:16px;height:11px;background-position:-160px -177px}.famfamfam-flags.sl{width:16px;height:11px;background-position:-176px -177px}.famfamfam-flags.sm{width:16px;height:11px;background-position:-192px 0}.famfamfam-flags.sn{width:16px;height:11px;background-position:-192px -11px}.famfamfam-flags.so{width:16px;height:11px;background-position:-192px -22px}.famfamfam-flags.sr{width:16px;height:11px;background-position:-192px -33px}.famfamfam-flags.st{width:16px;height:11px;background-position:-192px -44px}.famfamfam-flags.sv{width:16px;height:11px;background-position:-192px -55px}.famfamfam-flags.sy{width:16px;height:11px;background-position:-192px -66px}.famfamfam-flags.sz{width:16px;height:11px;background-position:-192px -77px}.famfamfam-flags.tc{width:16px;height:11px;background-position:-192px -88px}.famfamfam-flags.td{width:16px;height:11px;background-position:-192px -99px}.famfamfam-flags.tf{width:16px;height:11px;background-position:-192px -110px}.famfamfam-flags.tg{width:16px;height:11px;background-position:-192px -121px}.famfamfam-flags.th{width:16px;height:11px;background-position:-192px -132px}.famfamfam-flags.tj{width:16px;height:11px;background-position:-192px -143px}.famfamfam-flags.tk{width:16px;height:11px;background-position:-192px -154px}.famfamfam-flags.tl{width:16px;height:11px;background-position:-192px -165px}.famfamfam-flags.tm{width:16px;height:11px;background-position:-192px -176px}.famfamfam-flags.tn{width:16px;height:11px;background-position:0 -188px}.famfamfam-flags.to{width:16px;height:11px;background-position:-16px -188px}.famfamfam-flags.tr{width:16px;height:11px;background-position:-32px -188px}.famfamfam-flags.tt{width:16px;height:11px;background-position:-48px -188px}.famfamfam-flags.tv{width:16px;height:11px;background-position:-64px -188px}.famfamfam-flags.tw{width:16px;height:11px;background-position:-80px -188px}.famfamfam-flags.tz{width:16px;height:11px;background-position:-96px -188px}.famfamfam-flags.ua{width:16px;height:11px;background-position:-112px -188px}.famfamfam-flags.ug{width:16px;height:11px;background-position:-128px -188px}.famfamfam-flags.um{width:16px;height:11px;background-position:-144px -188px}.famfamfam-flags.us{width:16px;height:11px;background-position:-160px -188px}.famfamfam-flags.uy{width:16px;height:11px;background-position:-176px -188px}.famfamfam-flags.uz{width:16px;height:11px;background-position:-192px -188px}.famfamfam-flags.va{width:16px;height:11px;background-position:-208px 0}.famfamfam-flags.vc{width:16px;height:11px;background-position:-208px -11px}.famfamfam-flags.ve{width:16px;height:11px;background-position:-208px -22px}.famfamfam-flags.vg{width:16px;height:11px;background-position:-208px -33px}.famfamfam-flags.vi{width:16px;height:11px;background-position:-208px -44px}.famfamfam-flags.vn{width:16px;height:11px;background-position:-208px -55px}.famfamfam-flags.vu{width:16px;height:11px;background-position:-208px -66px}.famfamfam-flags.wales{width:16px;height:11px;background-position:-208px -77px}.famfamfam-flags.wf{width:16px;height:11px;background-position:-208px -88px}.famfamfam-flags.ws{width:16px;height:11px;background-position:-208px -99px}.famfamfam-flags.ye{width:16px;height:11px;background-position:-208px -110px}.famfamfam-flags.yt{width:16px;height:11px;background-position:-208px -121px}.famfamfam-flags.zw{width:16px;height:11px;background-position:-208px -132px}.famfamfam-flags.ch{width:11px;height:11px;background-position:-208px -143px}.famfamfam-flags.np{width:9px;height:11px;background-position:-208px -154px}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../famfamfam-flags/dist/sprite/famfamfam-flags.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "famfamfam-flags.d4a4d7b033f5ad8d7261.png";

/***/ })

});
//# sourceMappingURL=select.module.chunk.js.map