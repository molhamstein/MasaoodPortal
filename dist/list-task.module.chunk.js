webpackJsonp(["list-task.module"],{

/***/ "../../../../../src/app/pages/task/list-task/list-task.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/task/list-task/list-task.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <!-- Task list card start -->\n    <app-card [title]=\"'Task list'\" [blockClass]=\"'task-list'\">\n      <div class=\"dt-responsive\">\n        <div class=\"row\">\n          <div class=\"col-xs-12 col-sm-12 col-sm-12 col-md-6\">\n            <div>\n              <label class=\"label-control\">Show\n                <select class=\"form-control input-sm full-data-show-entry\" [(ngModel)]=\"rowsOnPage\">\n                  <option [ngValue]=\"10\">10</option>\n                  <option [ngValue]=\"25\">25</option>\n                  <option [ngValue]=\"50\">50</option>\n                  <option [ngValue]=\"100\">100</option>\n                </select>\n                entries\n              </label>\n            </div>\n          </div>\n          <div class=\"col-xs-12 col-sm-12 col-md-6\">\n            <div style=\"text-align: right;\">\n              <label>Search:\n                <input type=\"search\" [(ngModel)]=\"filterQuery\" class=\"form-control input-sm full-data-search\" placeholder=\"Search name\">\n              </label>\n            </div>\n          </div>\n        </div>\n        <!-- <div class=\"panel-heading\">User information</div>-->\n        <div class=\"table-responsive\">\n          <table class=\"table table-striped task-list-table table-bordered full-data-table\" [mfData]=\"data | dataFilter : filterQuery\" #mf=\"mfDataTable\"\n                 [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\n            <thead>\n            <tr>\n              <th>\n                <mfDefaultSorter  by=\"id\">#</mfDefaultSorter>\n              </th>\n              <th>\n                <mfDefaultSorter  by=\"task\">Task List</mfDefaultSorter>\n              </th>\n              <th>\n                <mfDefaultSorter by=\"date\">Last Commit</mfDefaultSorter>\n              </th>\n              <th>\n                <mfDefaultSorter  by=\"status\">Status</mfDefaultSorter>\n              </th>\n              <th>\n                <mfDefaultSorter by=\"images\">Assigned Users</mfDefaultSorter>\n              </th>\n              <th>\n                <mfDefaultSorter>Action</mfDefaultSorter>\n              </th>\n            </tr>\n            <tr>\n            </tr>\n            </thead>\n            <tbody class=\"task-page\">\n            <tr *ngFor=\"let item of mf.data\">\n              <td>{{item.id}}</td>\n              <td>{{item.task}}</td>\n              <td>\n                <input type=\"date\" class=\"form-control\" value=\"{{item.date}}\" />\n              </td>\n              <td>\n                <select name=\"select\" class=\"form-control form-control-sm\">\n                  <option value=\"opt1\" [selected]=\"item.status === 'opt1'\">Open</option>\n                  <option value=\"opt2\" [selected]=\"item.status === 'opt2'\">Resolved</option>\n                  <option value=\"opt3\" [selected]=\"item.status === 'opt3'\">Invalid</option>\n                  <option value=\"opt4\" [selected]=\"item.status === 'opt4'\">On hold</option>\n                  <option value=\"opt5\" [selected]=\"item.status === 'opt5'\">Close</option>\n                </select>\n              </td>\n              <td>\n                <a href=\"javascript:;\" *ngFor=\"let image of item.images\">\n                  <img class=\"img-fluid img-circle\" src=\"{{image}}\">\n                </a>\n                <a href=\"javascript:;\"><i class=\"icofont icofont-plus f-w-600\"></i></a>\n              </td>\n              <td ngbDropdown class=\"text-center\">\n                <a ngbDropdownToggle class=\"dropdown-toggle addon-btn\" data-toggle=\"dropdown\" aria-expanded=\"true\">\n                  <i class=\"icofont icofont-ui-settings\"></i>\n                </a>\n                <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right\">\n                  <a class=\"dropdown-item\" href=\"javascript:;\"><i class=\"icofont icofont-attachment\"></i>Attach File</a>\n                  <a class=\"dropdown-item\" href=\"javascript:;\"><i class=\"icofont icofont-ui-edit\"></i>Edit Task</a>\n                  <div role=\"separator\" class=\"dropdown-divider\"></div>\n                  <a class=\"dropdown-item\" href=\"javascript:;\"><i class=\"icofont icofont-refresh\"></i>Reassign Task</a>\n                </div>\n              </td>\n            </tr>\n            </tbody>\n            <tfoot>\n            <tr>\n              <th>#</th>\n              <th>Task List</th>\n              <th>Last Commit</th>\n              <th>Status</th>\n              <th>Assigned User</th>\n              <th>Action</th>\n            </tr>\n            </tfoot>\n          </table>\n        </div>\n      </div>\n    </app-card>\n    <!-- Task list card end -->\n    <!-- To list card start -->\n    <app-card [title]=\"'To list'\">\n      <div class=\"row\">\n        <div class=\"col-md-12 btn-add-task\">\n          <div class=\"input-group input-group-button\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Add Task\">\n            <span class=\"input-group-addon\" id=\"basic-addon1\">\n                <button class=\"btn btn-primary\"><i class=\"icofont icofont-plus f-w-600\"></i>Add task</button>\n              </span>\n          </div>\n        </div>\n      </div>\n      <div class=\"new-task\">\n        <div class=\"to-do-list\">\n          <div class=\"checkbox-fade fade-in-primary\">\n            <label>\n              <input type=\"checkbox\" value=\"1\">\n              <span class=\"cr\">\n                  <i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i>\n                </span>\n              <span>Add Proper Cursor In Sortable Page</span>\n            </label>\n          </div>\n        </div>\n        <div class=\"to-do-list\">\n          <div class=\"checkbox-fade fade-in-primary\">\n            <label>\n              <input type=\"checkbox\" value=\"2\">\n              <span class=\"cr\">\n                  <i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i>\n                </span>\n              <span>Edit the draft for the icons</span>\n            </label>\n          </div>\n        </div>\n        <div class=\"to-do-list\">\n          <div class=\"checkbox-fade fade-in-primary\">\n            <label>\n              <input type=\"checkbox\" value=\"3\">\n              <span class=\"cr\">\n                  <i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i>\n                </span>\n              <span>Create UI design model</span>\n            </label>\n          </div>\n        </div>\n        <div class=\"to-do-list\">\n          <div class=\"checkbox-fade fade-in-primary\">\n            <label>\n              <input type=\"checkbox\" value=\"4\" checked>\n              <span class=\"cr\">\n                  <i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i>\n                </span>\n              <span>Checkbox Design issue</span>\n            </label>\n          </div>\n        </div>\n        <div class=\"to-do-list\">\n          <div class=\"checkbox-fade fade-in-primary\">\n            <label>\n              <input type=\"checkbox\" value=\"5\">\n              <span class=\"cr\">\n                  <i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i>\n                </span>\n              <span>Testing live data store</span>\n            </label>\n          </div>\n        </div>\n      </div>\n    </app-card>\n    <!-- To list card end -->\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/task/list-task/list-task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListTaskComponent; });
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


var ListTaskComponent = (function () {
    function ListTaskComponent(http) {
        this.http = http;
        this.rowsOnPage = 10;
        this.filterQuery = '';
        this.sortBy = '';
        this.sortOrder = 'desc';
    }
    ListTaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("assets/data/task-list.json")
            .subscribe(function (data) {
            _this.data = data.json();
        });
    };
    return ListTaskComponent;
}());
ListTaskComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-list-task',
        template: __webpack_require__("../../../../../src/app/pages/task/list-task/list-task.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/task/list-task/list-task.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ListTaskComponent);

var _a;
//# sourceMappingURL=list-task.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/task/list-task/list-task.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listRoutes", function() { return listRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTaskModule", function() { return ListTaskModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_task_component__ = __webpack_require__("../../../../../src/app/pages/task/list-task/list-task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_datatable__ = __webpack_require__("../../../../angular2-datatable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_datatable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var listRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__list_task_component__["a" /* ListTaskComponent */],
        data: {
            breadcrumb: 'Task List',
            icon: 'icofont icofont-tasks-alt bg-c-pink',
            status: true
        }
    }
];
var ListTaskModule = (function () {
    function ListTaskModule() {
    }
    return ListTaskModule;
}());
ListTaskModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(listRoutes),
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7_angular2_datatable__["DataTableModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__list_task_component__["a" /* ListTaskComponent */]
        ]
    })
], ListTaskModule);

//# sourceMappingURL=list-task.module.js.map

/***/ })

});
//# sourceMappingURL=list-task.module.chunk.js.map