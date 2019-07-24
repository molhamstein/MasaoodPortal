webpackJsonp(["simple-page.module"],{

/***/ "../../../../../src/app/pages/simple-page/simple-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/simple-page/simple-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card [title]=\"'Hello card'\">\n      <p>\n      \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n      enim ad minim veniam, quis nostrud exercitation ullamco laboris\n      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\n      in reprehenderit in voluptate velit esse cillum dolore eu fugiat\n      nulla pariatur. Excepteur sint occaecat cupidatat non proident,\n      sunt in culpa qui officia deserunt mollit anim id est laborum.\"\n    </p>\n    </app-card>\n  </div>\n\n  <div class=\"col-md-12 col-xl-6\">\n    <app-card [title]=\"'To do list'\" [cardClass]=\"'add-task-card'\" [blockClass]=\"'p-b-0'\">\n      <div class=\"to-do-list\">\n        <div class=\"checkbox-fade fade-in-primary d-block\">\n          <label class=\"check-task d-block\">\n            <input type=\"checkbox\" value=\"\" (change)=\"onTaskStatusChange($event)\">\n            <span class=\"cr\">\n                <i class=\"cr-icon icofont icofont-ui-check txt-default\"></i>\n            </span>\n            <span><h6>Schedule Meeting with Compnes <span class=\"label bg-c-green m-l-10 f-10\">2 week</span></h6></span>\n            <div class=\"task-card-img m-l-40\">\n              <a href=\"javascript:\"><img src=\"assets/images/avatar-1.jpg\" placement=\"top\" ngbTooltip=\"Lary Doe\" class=\"img-40\"></a>\n              <a href=\"javascript:\"><img src=\"assets/images/avatar-2.jpg\" placement=\"top\" ngbTooltip=\"Alia\" class=\"img-40 m-l-10\"></a>\n            </div>\n          </label>\n        </div>\n      </div>\n      <div class=\"to-do-list\">\n        <div class=\"checkbox-fade fade-in-primary d-block\">\n          <label class=\"check-task d-block\">\n            <input type=\"checkbox\" value=\"\" (change)=\"onTaskStatusChange($event)\">\n            <span class=\"cr\">\n                <i class=\"cr-icon icofont icofont-ui-check txt-default\"></i>\n            </span>\n            <span><h6>Meeting With HOD's and borad</h6><p class=\"text-muted m-l-30\">23 january 2003</p></span>\n          </label>\n        </div>\n      </div>\n      <div class=\"to-do-list\">\n        <div class=\"checkbox-fade fade-in-primary d-block\">\n          <label class=\"check-task d-block\">\n            <input type=\"checkbox\" value=\"\" (change)=\"onTaskStatusChange($event)\">\n            <span class=\"cr\">\n                <i class=\"cr-icon icofont icofont-ui-check txt-default\"></i>\n            </span>\n            <span><h6>Create template, admin with responsive<span class=\"label bg-c-pink m-l-10\">2 week</span></h6></span>\n            <div class=\"task-card-img m-l-40\">\n              <a href=\"javascript:\"><img src=\"assets/images/avatar-2.jpg\" placement=\"top\" ngbTooltip=\"Alia\" class=\"img-40\"></a>\n              <a href=\"javascript:\"><img src=\"assets/images/avatar-3.jpg\" placement=\"top\" ngbTooltip=\"Suzen\" class=\"img-40 m-l-10\"></a>\n              <a href=\"javascript:\"><img src=\"assets/images/avatar-4.jpg\" placement=\"top\" ngbTooltip=\"Lary Doe\" class=\"img-40 m-l-10\"></a>\n              <a href=\"javascript:\"><img src=\"assets/images/avatar-2.jpg\" placement=\"top\" ngbTooltip=\"Josephin Doe\" class=\"img-40 m-l-10\"></a>\n            </div>\n          </label>\n        </div>\n      </div>\n      <div class=\"to-do-list\">\n        <div class=\"checkbox-fade fade-in-primary d-block\">\n          <label class=\"check-task d-block\">\n            <input type=\"checkbox\" value=\"\" (change)=\"onTaskStatusChange($event)\">\n            <span class=\"cr\">\n                <i class=\"cr-icon icofont icofont-ui-check txt-default\"></i>\n            </span>\n            <span><h6>Meeting With HOD's and borad</h6>\n            <p class=\"text-muted m-l-30\">23 january 2003</p></span>\n            <div class=\"task-card-img m-l-40\">\n              <a href=\"javascript:\"><img src=\"assets/images/avatar-2.jpg\" placement=\"top\" ngbTooltip=\"Lary Doe\" class=\"img-40\"></a>\n              <a href=\"javascript:\"><img src=\"assets/images/avatar-3.jpg\" placement=\"top\" ngbTooltip=\"Alia\" class=\"img-40 m-l-10\"></a>\n              <a href=\"javascript:\"><img src=\"assets/images/avatar-2.jpg\" placement=\"top\" ngbTooltip=\"Josephin Doe\" class=\"img-40 m-l-10\"></a>\n            </div>\n          </label>\n        </div>\n      </div>\n\n    </app-card>\n  </div>\n\n  <div class=\"col-md-12 col-xl-6\">\n    <app-card [title]=\"'Traffic resources'\" [cardClass]=\"'review-resourse'\" [blockClass]=\"'p-t-10 p-b-10'\">\n      <div class=\"table-responsive\">\n        <table class=\"table table-hover\">\n          <tbody>\n          <tr>\n            <td>\n              <h6>Unique visitors</h6></td>\n            <td>\n              <span class=\"f-18 text-muted\">4,562</span>\n            </td>\n            <td class=\"text-right\">\n              <span class=\"visitor1\">0,5,0,5,7,6,5.5,10,8</span>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <h6>Page Views</h6></td>\n            <td>\n              <span class=\"f-18 text-muted\">679</span>\n            </td>\n            <td class=\"text-right\">\n              <span class=\"visitor2\">0,5,0,5,7,6,5.5,10,8</span>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <h6>Page/Visit</h6></td>\n            <td>\n              <span class=\"f-18 text-muted\">2,516</span>\n            </td>\n            <td class=\"text-right\">\n              <span class=\"visitor3\">0,5,0,5,7,6,5.5,10,8</span>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <h6>Bounce rate</h6></td>\n            <td>\n              <span class=\"f-18 text-muted\">67%</span>\n            </td>\n            <td class=\"text-right\">\n              <span class=\"visitor4\">0,5,0,5,7,6,5.5,10,8</span>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <h6>Visit</h6></td>\n            <td>\n              <span class=\"f-18 text-muted\">845</span>\n            </td>\n            <td class=\"text-right\">\n              <span class=\"visitor5\">0,5,0,5,7,6,5.5,10,8</span>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n  </div>\n\n  <div class=\"col-md-12\">\n    <app-card [title]=\"'Visitors'\" [cardClass]=\"'visitor-chart-card'\" [blockClass]=\"'p-b-40'\">\n      <div id=\"visitor-list-graph\" style=\"width:100%;height:400px;\"></div>\n    </app-card>\n  </div>\n\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"card feed-card\">\n          <div class=\"card-block p-t-0 p-b-0\">\n            <div class=\"row\">\n              <div class=\"col-4 bg-c-blue border-feed\">\n                <i class=\"icofont icofont-users-alt-4 f-40\"></i>\n              </div>\n              <div class=\"col-8\">\n                <div class=\"p-t-30 p-b-30\">\n                  <h2 class=\"f-w-600 m-b-10\">2,672</h2>\n                  <p class=\"text-muted m-0\">Last week <span class=\"text-c-blue f-w-600\">user's</span></p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card feed-card\">\n          <div class=\"card-block p-t-0 p-b-0\">\n            <div class=\"row\">\n              <div class=\"col-4 bg-c-green border-feed\">\n                <i class=\"icofont icofont-wallet f-40\"></i>\n              </div>\n              <div class=\"col-8\">\n                <div class=\"p-t-30 p-b-30\">\n                  <h2 class=\"f-w-600 m-b-10\">$6,391</h2>\n                  <p class=\"text-muted m-0\">Total <span class=\"text-c-green f-w-600\">earning</span></p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"card feed-card\">\n          <div class=\"card-block p-t-0 p-b-0\">\n            <div class=\"row\">\n              <div class=\"col-4 bg-c-pink border-feed\">\n                <i class=\"icofont icofont-chart-flow-alt-1 f-40\"></i>\n              </div>\n              <div class=\"col-8\">\n                <div class=\"p-t-30 p-b-30\">\n                  <h2 class=\"f-w-600 m-b-10\">3,619</h2>\n                  <p class=\"text-muted m-0\">New <span class=\"text-c-pink f-w-600\">Order Recieved</span></p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card feed-card\">\n          <div class=\"card-block p-t-0 p-b-0\">\n            <div class=\"row\">\n              <div class=\"col-4 bg-c-yellow border-feed\">\n                <i class=\"icofont icofont-users-alt-3 f-40\"></i>\n              </div>\n              <div class=\"col-8\">\n                <div class=\"p-t-30 p-b-30\">\n                  <h2 class=\"f-w-600 m-b-10\">9,276</h2>\n                  <p class=\"text-muted m-0\">Today <span class=\"text-c-yellow f-w-600\">New Visitors</span></p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!--create new custom card -->\n  <div class=\"col-sm-12\">\n    <app-card [title]=\"'My New Custom Card'\">\n      <!-- your card conent-->\n      My New Card COntent\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/simple-page/simple-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimplePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_charts_amchart_amcharts_js__ = __webpack_require__("../../../../../src/assets/charts/amchart/amcharts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_charts_amchart_amcharts_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_charts_amchart_amcharts_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_charts_amchart_gauge_js__ = __webpack_require__("../../../../../src/assets/charts/amchart/gauge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_charts_amchart_gauge_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_charts_amchart_gauge_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_charts_amchart_pie_js__ = __webpack_require__("../../../../../src/assets/charts/amchart/pie.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_charts_amchart_pie_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_charts_amchart_pie_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_charts_amchart_serial_js__ = __webpack_require__("../../../../../src/assets/charts/amchart/serial.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_charts_amchart_serial_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_charts_amchart_serial_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_charts_amchart_light_js__ = __webpack_require__("../../../../../src/assets/charts/amchart/light.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_charts_amchart_light_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_charts_amchart_light_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_charts_amchart_ammap_js__ = __webpack_require__("../../../../../src/assets/charts/amchart/ammap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_charts_amchart_ammap_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__assets_charts_amchart_ammap_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_charts_amchart_worldLow_js__ = __webpack_require__("../../../../../src/assets/charts/amchart/worldLow.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_charts_amchart_worldLow_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__assets_charts_amchart_worldLow_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__node_modules_peity_jquery_peity_min_js__ = __webpack_require__("../../../../peity/jquery.peity.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__node_modules_peity_jquery_peity_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__node_modules_peity_jquery_peity_min_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SimplePageComponent = (function () {
    function SimplePageComponent() {
    }
    SimplePageComponent.prototype.ngOnInit = function () {
        AmCharts.makeChart('visitor-list-graph', {
            'type': 'serial',
            'hideCredits': true,
            'theme': 'light',
            'dataDateFormat': 'YYYY-MM-DD',
            'precision': 2,
            'valueAxes': [{
                    'id': 'v1',
                    'title': 'Visitors',
                    'position': 'left',
                    'autoGridCount': false,
                    'labelFunction': function (value) {
                        return '$' + Math.round(value) + 'M';
                    }
                }, {
                    'id': 'v2',
                    'title': 'New Visitors',
                    'gridAlpha': 0,
                    'position': 'right',
                    'autoGridCount': false
                }],
            'graphs': [{
                    'id': 'g3',
                    'valueAxis': 'v1',
                    'lineColor': '#9BBAFF',
                    'fillColors': '#9BBAFF',
                    'fillAlphas': 1,
                    'type': 'column',
                    'title': 'old Visitor',
                    'valueField': 'sales2',
                    'clustered': false,
                    'columnWidth': 0.5,
                    'legendValueText': '$[[value]]M',
                    'balloonText': '[[title]]<br /><b style="font-size: 130%">$[[value]]M</b>'
                }, {
                    'id': 'g4',
                    'valueAxis': 'v1',
                    'lineColor': '#4680ff',
                    'fillColors': '#4680ff',
                    'fillAlphas': 1,
                    'type': 'column',
                    'title': 'New visitor',
                    'valueField': 'sales1',
                    'clustered': false,
                    'columnWidth': 0.3,
                    'legendValueText': '$[[value]]M',
                    'balloonText': '[[title]]<br /><b style="font-size: 130%">$[[value]]M</b>'
                }, {
                    'id': 'g1',
                    'valueAxis': 'v2',
                    'bullet': 'round',
                    'bulletBorderAlpha': 1,
                    'bulletColor': '#FFFFFF',
                    'bulletSize': 5,
                    'hideBulletsCount': 50,
                    'lineThickness': 2,
                    'lineColor': '#93be52',
                    'type': 'smoothedLine',
                    'title': 'Last Month Visitor',
                    'useLineColorForBulletBorder': true,
                    'valueField': 'market1',
                    'balloonText': '[[title]]<br /><b style="font-size: 130%">[[value]]</b>'
                }, {
                    'id': 'g2',
                    'valueAxis': 'v2',
                    'bullet': 'round',
                    'bulletBorderAlpha': 1,
                    'bulletColor': '#FFFFFF',
                    'bulletSize': 5,
                    'hideBulletsCount': 50,
                    'lineThickness': 2,
                    'lineColor': '#FC6180',
                    // 'type': 'smoothedLine',
                    'dashLength': 5,
                    'title': 'Average Visitor',
                    'useLineColorForBulletBorder': true,
                    'valueField': 'market2',
                    'balloonText': '[[title]]<br /><b style="font-size: 130%">[[value]]</b>'
                }],
            'chartCursor': {
                'pan': true,
                'valueLineEnabled': true,
                'valueLineBalloonEnabled': true,
                'cursorAlpha': 0,
                'valueLineAlpha': 0.2
            },
            'categoryField': 'date',
            'categoryAxis': {
                'parseDates': true,
                'dashLength': 1,
                'minorGridEnabled': true
            },
            'legend': {
                'useGraphSettings': true,
                'position': 'top'
            },
            'balloon': {
                'borderThickness': 1,
                'cornerRadius': 5,
                'shadowAlpha': 0
            },
            'dataProvider': [{
                    'date': '2013-01-16',
                    'market1': 71,
                    'market2': 75,
                    'sales1': 5,
                    'sales2': 8
                }, {
                    'date': '2013-01-17',
                    'market1': 74,
                    'market2': 78,
                    'sales1': 4,
                    'sales2': 6
                }, {
                    'date': '2013-01-18',
                    'market1': 78,
                    'market2': 88,
                    'sales1': 5,
                    'sales2': 2
                }, {
                    'date': '2013-01-19',
                    'market1': 85,
                    'market2': 89,
                    'sales1': 8,
                    'sales2': 9
                }, {
                    'date': '2013-01-20',
                    'market1': 82,
                    'market2': 89,
                    'sales1': 9,
                    'sales2': 6
                }, {
                    'date': '2013-01-21',
                    'market1': 83,
                    'market2': 85,
                    'sales1': 3,
                    'sales2': 5
                }, {
                    'date': '2013-01-22',
                    'market1': 88,
                    'market2': 92,
                    'sales1': 5,
                    'sales2': 7
                }, {
                    'date': '2013-01-23',
                    'market1': 85,
                    'market2': 90,
                    'sales1': 7,
                    'sales2': 6
                }, {
                    'date': '2013-01-24',
                    'market1': 85,
                    'market2': 91,
                    'sales1': 9,
                    'sales2': 5
                }, {
                    'date': '2013-01-25',
                    'market1': 80,
                    'market2': 84,
                    'sales1': 5,
                    'sales2': 8
                }, {
                    'date': '2013-01-26',
                    'market1': 87,
                    'market2': 92,
                    'sales1': 4,
                    'sales2': 8
                }, {
                    'date': '2013-01-27',
                    'market1': 84,
                    'market2': 87,
                    'sales1': 3,
                    'sales2': 4
                }, {
                    'date': '2013-01-28',
                    'market1': 83,
                    'market2': 88,
                    'sales1': 5,
                    'sales2': 7
                }, {
                    'date': '2013-01-29',
                    'market1': 84,
                    'market2': 87,
                    'sales1': 5,
                    'sales2': 8
                }, {
                    'date': '2013-01-30',
                    'market1': 81,
                    'market2': 85,
                    'sales1': 4,
                    'sales2': 7
                }]
        });
        $('span.visitor1').peity('line', {
            fill: 'rgba(70, 128, 254,0.2)',
            stroke: 'rgb(70, 128, 254)',
            width: 100
        });
        $('span.visitor2').peity('line', {
            fill: 'rgba(252, 97, 128,0.2)',
            stroke: 'rgb(252, 97, 128)',
            width: 100
        });
        $('span.visitor3').peity('line', {
            fill: 'rgba(147, 190, 82,0.2)',
            stroke: 'rgb(147, 190, 82)',
            width: 100
        });
        $('span.visitor4').peity('line', {
            fill: 'rgba(255, 182, 77,0.2)',
            stroke: 'rgb(255, 182, 77)',
            width: 100
        });
        $('span.visitor5').peity('line', {
            fill: 'rgba(254, 138, 125,0.2)',
            stroke: 'rgb(254, 138, 125)',
            width: 100
        });
    };
    SimplePageComponent.prototype.onTaskStatusChange = function (event) {
        var parentNode = (event.target.parentNode.parentNode);
        parentNode.classList.toggle('done-task');
    };
    return SimplePageComponent;
}());
SimplePageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-simple-page',
        template: __webpack_require__("../../../../../src/app/pages/simple-page/simple-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/simple-page/simple-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SimplePageComponent);

//# sourceMappingURL=simple-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/simple-page/simple-page.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplePageRoutes", function() { return SimplePageRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplePageModule", function() { return SimplePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__simple_page_component__ = __webpack_require__("../../../../../src/app/pages/simple-page/simple-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SimplePageRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__simple_page_component__["a" /* SimplePageComponent */],
        data: {
            breadcrumb: 'Sample Page',
            icon: 'icofont icofont-file-document bg-c-pink'
        }
    }];
var SimplePageModule = (function () {
    function SimplePageModule() {
    }
    return SimplePageModule;
}());
SimplePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(SimplePageRoutes),
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__simple_page_component__["a" /* SimplePageComponent */]]
    })
], SimplePageModule);

//# sourceMappingURL=simple-page.module.js.map

/***/ })

});
//# sourceMappingURL=simple-page.module.chunk.js.map