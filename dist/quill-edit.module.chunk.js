webpackJsonp(["quill-edit.module"],{

/***/ "../../../../../src/app/pages/ui-elements/editor/quill-edit/quill-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ui-elements/editor/quill-edit/quill-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card [title]=\"'Quill Basic Editor'\" [classHeader]=\"true\">\n      <span class=\"code-header\">use options with <code>quill-editor</code> elements</span>\n      <quill-editor\n        [(ngModel)]=\"editorContent\"\n        [options]=\"editorConfig\"\n        (blur)=\"onEditorBlured($event)\"\n        (focus)=\"onEditorFocused($event)\"\n        (ready)=\"onEditorCreated($event)\"\n        (change)=\"onContentChanged($event)\">\n      </quill-editor>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/ui-elements/editor/quill-edit/quill-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuillEditComponent; });
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

var QuillEditComponent = (function () {
    function QuillEditComponent() {
        this.editorConfig = {
            placeholder: "About Your Self"
        };
    }
    QuillEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.editorContent = _this.editorContent;
            console.log('you can use the quill instance object to do something', _this.editor);
            // this.editor.disable();
        }, 2800);
    };
    QuillEditComponent.prototype.onEditorBlured = function (quill) {
        console.log('editor blur!', quill);
    };
    QuillEditComponent.prototype.onEditorFocused = function (quill) {
        console.log('editor focus!', quill);
    };
    QuillEditComponent.prototype.onEditorCreated = function (quill) {
        this.editor = quill;
        /*console.log('quill is ready! this is current quill instance object', quill);*/
    };
    QuillEditComponent.prototype.onContentChanged = function (_a) {
        var quill = _a.quill, html = _a.html, text = _a.text;
        /*console.log('quill content is changed!', quill, html, text);*/
    };
    return QuillEditComponent;
}());
QuillEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-quill-edit',
        template: __webpack_require__("../../../../../src/app/pages/ui-elements/editor/quill-edit/quill-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/ui-elements/editor/quill-edit/quill-edit.component.css")]
    }),
    __metadata("design:paramtypes", [])
], QuillEditComponent);

//# sourceMappingURL=quill-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/ui-elements/editor/quill-edit/quill-edit.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quillRoutes", function() { return quillRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuillEditModule", function() { return QuillEditModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quill_edit_component__ = __webpack_require__("../../../../../src/app/pages/ui-elements/editor/quill-edit/quill-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_quill_editor__ = __webpack_require__("../../../../ngx-quill-editor/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var quillRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__quill_edit_component__["a" /* QuillEditComponent */],
        data: {
            breadcrumb: 'Quill Editor',
            icon: 'icofont-edit bg-c-blue',
            status: true
        }
    }
];
var QuillEditModule = (function () {
    function QuillEditModule() {
    }
    return QuillEditModule;
}());
QuillEditModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(quillRoutes),
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_5_ngx_quill_editor__["a" /* QuillEditorModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__quill_edit_component__["a" /* QuillEditComponent */]]
    })
], QuillEditModule);

//# sourceMappingURL=quill-edit.module.js.map

/***/ })

});
//# sourceMappingURL=quill-edit.module.chunk.js.map