webpackJsonp(["issue-task.module"],{

/***/ "../../../../../src/app/pages/task/issue-task/issue-task.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/task/issue-task/issue-task.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xl-4\">\n    <!-- Overall Progress card start -->\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <!-- <p>.col-sm-4</p> -->\n        <div class=\"issue-list-progress\">\n          <h6>Overall Progress</h6>\n          <div class=\"issue-progress\">\n            <div class=\"progress\">\n              <span class=\"issue-text1 txt-primary\"></span>\n              <div class=\"issue-bar1 bg-primary\"></div>\n            </div>\n            <!-- end of progress -->\n          </div>\n          <!-- end of issue progress -->\n        </div>\n        <!-- end of issue list progress -->\n        <div class=\"row\">\n          <div class=\"col-md-12 matrics-issue\">\n            <h6 class=\"sub-title\">matrics</h6>\n            <div class=\"row\">\n              <div class=\"col-md-6 text-center\">\n                <span class=\"pie-chart\"></span>\n                <h6>Issues</h6>\n              </div>\n              <div class=\"col-md-6 text-center\">\n                <span class=\"pie-chart1\"></span>\n                <h6>Bugs</h6>\n              </div>\n            </div>\n          </div>\n          <!-- end of row -->\n        </div>\n        <!-- end of matric progress -->\n        <div class=\"table-responsive\">\n          <table class=\"table matrics-table\">\n            <tbody>\n            <tr>\n              <td>\n                <strong>Assigned Hours</strong>\n              </td>\n              <td class=\"txt-primary\">70 Hours</td>\n            </tr>\n            <tr>\n              <td>\n                <strong>Time Consumed</strong>\n              </td>\n              <td class=\"txt-danger\">49 Hours</td>\n            </tr>\n            <tr>\n              <td>\n                <strong>Issues</strong>\n              </td>\n              <td class=\"txt-primary\">19</td>\n            </tr>\n            <tr>\n              <td>\n                <strong>Bugs</strong>\n              </td>\n              <td class=\"txt-primary\">16</td>\n            </tr>\n            <tr>\n              <td>\n                <strong>Health</strong>\n              </td>\n              <td class=\"txt-success\">75%</td>\n            </tr>\n            <tr>\n              <td>\n                <strong>Commits</strong>\n              </td>\n              <td class=\"txt-primary\">280</td>\n            </tr>\n            <tr>\n              <td>\n                <strong>Bugs Percentage</strong>\n              </td>\n              <td class=\"txt-danger\">25%</td>\n            </tr>\n            <tr>\n              <td>\n                <strong>Assign Date</strong>\n              </td>\n              <td class=\"txt-info\">02/11/2016</td>\n            </tr>\n            <tr>\n              <td>\n                <strong>Last closed on</strong>\n              </td>\n              <td class=\"txt-info\">15/01/2017</td>\n            </tr>\n            </tbody>\n            <!-- end of tbody -->\n          </table>\n        </div>\n        <!-- end of table -->\n      </div>\n    </div>\n    <!-- Overall Progress card stendart -->\n  </div>\n  <div class=\"col-xl-8\">\n    <!-- New ticket button card start -->\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\" waves-effect waves-light m-r-10 v-middle issue-btn-group\">\n          <button type=\"button\" class=\"btn btn-sm btn-success btn-new-tickets waves-effect waves-light m-r-15 m-t-5 m-b-5\"><i class=\"icofont icofont-paper-plane\"></i><span class=\"m-l-10\">New Tickets</span></button>\n          <div class=\"btn-group m-t-5 m-b-5\">\n            <button type=\"button\" class=\"btn btn-primary btn-sm waves-effect waves-light\"><i class=\"icofont icofont-ui-user\"></i></button>\n            <button type=\"button\" class=\"btn btn-primary btn-sm waves-effect waves-light\"><i class=\"icofont icofont-edit-alt\"></i></button>\n            <button type=\"button\" class=\"btn btn-primary btn-sm waves-effect waves-light\"><i class=\"icofont icofont-reply\"></i></button>\n            <button type=\"button\" class=\"btn btn-primary btn-sm waves-effect waves-light\"><i class=\"icofont icofont-printer\"></i></button>\n          </div>\n          <div class=\"f-right bug-issue-link\">\n            <ol class=\"breadcrumb bg-white m-0 p-t-5 p-b-0\">\n              <li class=\"breadcrumb-item\"><a href=\"javascript:;\">16 Bugs</a></li>\n              <li class=\"breadcrumb-item\"><a href=\"javascript:;\">19 Issue</a></li>\n            </ol>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- New ticket button card end -->\n    <!-- bug list card start -->\n    <app-card [title]=\"'Issue Details'\">\n      <div class=\"dt-responsive\">\n        <div class=\"row\">\n          <div class=\"col-xs-12 col-sm-12 col-sm-12 col-md-6\">\n            <div>\n              <label class=\"label-control\">Show\n                <select class=\"form-control input-sm full-data-show-entry\" [(ngModel)]=\"rowsOnPage\">\n                  <option [ngValue]=\"10\">10</option>\n                  <option [ngValue]=\"25\">25</option>\n                  <option [ngValue]=\"50\">50</option>\n                  <option [ngValue]=\"100\">100</option>\n                </select>\n                entries\n              </label>\n            </div>\n          </div>\n          <div class=\"col-xs-12 col-sm-12 col-md-6\">\n            <div style=\"text-align: right;\">\n              <label>Search:\n                <input type=\"search\" [(ngModel)]=\"filterQuery\" class=\"form-control input-sm full-data-search\" placeholder=\"Search name\">\n              </label>\n            </div>\n          </div>\n        </div>\n        <div class=\"table-responsive\">\n          <table class=\"table table-striped table-bordered full-data-table\" [mfData]=\"data | dataFilter : filterQuery\" #mf=\"mfDataTable\"\n                 [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\n            <thead>\n            <tr>\n              <th>\n                <mfDefaultSorter  by=\"type\">Type</mfDefaultSorter>\n              </th>\n              <th>\n                <mfDefaultSorter  by=\"id\">ID</mfDefaultSorter>\n              </th>\n              <th>\n                <mfDefaultSorter by=\"description\">Description</mfDefaultSorter>\n              </th>\n              <th>\n                <mfDefaultSorter  by=\"date\">Start Date</mfDefaultSorter>\n              </th>\n              <th>\n                <mfDefaultSorter by=\"priority\">Priority</mfDefaultSorter>\n              </th>\n              <th>\n                <mfDefaultSorter by=\"assigned\">Assigned</mfDefaultSorter>\n              </th>\n              <th>\n                <mfDefaultSorter by=\"status\">Status</mfDefaultSorter>\n              </th>\n            </tr>\n            <tr>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let item of mf.data\">\n              <td>{{item.type}}</td>\n              <td>{{item.id}}</td>\n              <td>{{item.description}}</td>\n              <td>{{item.date}}</td>\n              <td>\n                <span class=\"label label-danger\" *ngIf=\"item.priority === 'Highest'\">{{item.priority}}</span>\n                <span class=\"label label-warning\" *ngIf=\"item.priority === 'High'\">{{item.priority}}</span>\n                <span class=\"label label-success\" *ngIf=\"item.priority === 'Normal'\">{{item.priority}}</span>\n                <span class=\"label label-primary\" *ngIf=\"item.priority === 'Slow'\">{{item.priority}}</span>\n              </td>\n              <td><a href=\"javascript:;\">{{item.assigned}}</a></td>\n              <td>\n                <span class=\"label label-primary\" *ngIf=\"item.status === 'Open'\">{{item.status}}</span>\n                <span class=\"label label-danger\" *ngIf=\"item.status === 'Close'\">{{item.status}}</span>\n                <span class=\"label label-warning\" *ngIf=\"item.status === 'Pending'\">{{item.status}}</span>\n                <span class=\"label label-info\" *ngIf=\"item.status === 'On Hold'\">{{item.status}}</span>\n              </td>\n            </tr>\n            </tbody>\n            <tfoot>\n            <tr>\n              <th class=\"txt-primary\">Type</th>\n              <th>ID</th>\n              <th>Description</th>\n              <th>Start date</th>\n              <th>Priority</th>\n              <th>Assigned</th>\n              <th>Status</th>\n            </tr>\n            <tr>\n              <td colspan=\"7\">\n                <mfBootstrapPaginator class=\"pagination-main f-right\"></mfBootstrapPaginator>\n              </td>\n            </tr>\n            </tfoot>\n          </table>\n        </div>\n      </div>\n      <!-- end of table -->\n    </app-card>\n    <!-- bug list card end -->\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/task/issue-task/issue-task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssueTaskComponent; });
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


var IssueTaskComponent = (function () {
    function IssueTaskComponent(http) {
        this.http = http;
        this.rowsOnPage = 10;
        this.filterQuery = '';
        this.sortBy = '';
        this.sortOrder = 'desc';
    }
    IssueTaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("assets/data/issue-list.json")
            .subscribe(function (data) {
            _this.data = data.json();
        });
        var progression1 = 0;
        var progress = setInterval(function () {
            $('.progress .issue-text1').text(progression1 + '%');
            $('.progress .issue-text1').css({ 'left': progression1 + '%' });
            $('.progress .issue-text1').css({ 'top': '-20px' });
            $('.progress .issue-bar1').css({ 'width': progression1 + '%' });
            if (progression1 === 70) {
                clearInterval(progress);
            }
            else {
                progression1 += 1;
            }
        }, 100);
        setTimeout(function () {
            $('.pie-chart').sparkline([1, 1, 1], {
                type: 'pie',
                width: '150px',
                height: '150px',
                sliceColors: ['#3366CC', '#DC3912', '#FF9900'],
                tooltipClassname: 'chart-sparkline'
            });
            $('.pie-chart1').sparkline([5, 1, 3], {
                type: 'pie',
                width: '150px',
                height: '150px',
                sliceColors: ['#3366CC', '#DC3912', '#FF9900'],
                tooltipClassname: 'chart-sparkline'
            });
        }, 1);
    };
    return IssueTaskComponent;
}());
IssueTaskComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-issue-task',
        template: __webpack_require__("../../../../../src/app/pages/task/issue-task/issue-task.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/task/issue-task/issue-task.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], IssueTaskComponent);

var _a;
//# sourceMappingURL=issue-task.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/task/issue-task/issue-task.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "issueRoutes", function() { return issueRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueTaskModule", function() { return IssueTaskModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__issue_task_component__ = __webpack_require__("../../../../../src/app/pages/task/issue-task/issue-task.component.ts");
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








var issueRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__issue_task_component__["a" /* IssueTaskComponent */],
        data: {
            breadcrumb: 'Task Issue',
            icon: 'icofont icofont-tasks-alt bg-c-pink',
            status: true
        }
    }
];
var IssueTaskModule = (function () {
    function IssueTaskModule() {
    }
    return IssueTaskModule;
}());
IssueTaskModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(issueRoutes),
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7_angular2_datatable__["DataTableModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__issue_task_component__["a" /* IssueTaskComponent */]
        ]
    })
], IssueTaskModule);

//# sourceMappingURL=issue-task.module.js.map

/***/ })

});
//# sourceMappingURL=issue-task.module.chunk.js.map