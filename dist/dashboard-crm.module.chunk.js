webpackJsonp(["dashboard-crm.module"],{

/***/ "../../../../../src/app/pages/dashboard/dashboard-crm/dashboard-crm.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#monthly-earning + svg {\r\n  height: 250px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard-crm/dashboard-crm.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <!-- Statistics and revenue Start -->\n  <div class=\"col-md-12 \">\n    <app-card [title]=\"'Statistics of visits and total revenue'\" [cardClass]=\"'card-statistics'\">\n      <div class=\"row \">\n        <div class=\"col-sm-4 \">\n          <div class=\"row stats-block\">\n            <div class=\"col-lg-6 \">\n              <div class=\"progressbar-v-1 text-center\">\n                <div data-label=\"90%\" class=\"radial-bar radial-bar-90 radial-bar-lg\"></div>\n              </div>\n            </div>\n            <div class=\"col-lg-6 \">\n              <h2 class=\"f-w-600 \">5,879</h2>\n              <p class=\"text-muted\">Total users</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-4 \">\n          <div class=\"row stats-block\">\n            <div class=\"col-lg-6 \">\n              <div class=\"progressbar-v-1 text-center\">\n                <div data-label=\"70%\" class=\"radial-bar radial-bar-70 radial-bar-lg radial-bar-danger\"></div>\n              </div>\n            </div>\n            <div class=\"col-lg-6 \">\n              <h2 class=\"f-w-600 \">$2,456</h2>\n              <p class=\"text-muted \">Total rent</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-4 \">\n          <div class=\"row stats-block\">\n            <div class=\"col-lg-6 \">\n              <div class=\"progressbar-v-1 text-center\">\n                <div data-label=\"75%\" class=\"radial-bar radial-bar-75 radial-bar-lg radial-bar-warning\"></div>\n              </div>\n            </div>\n            <div class=\"col-lg-6 \">\n              <h2 class=\"f-w-600 \">3,198</h2>\n              <p class=\"text-muted \">Total revenue</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"b-t-default p-t-20 m-t-30\">\n        <div class=\"row \">\n          <div class=\"col-sm-4 \">\n            <h6 class=\"d-inline-block m-r-10 \">User growth</h6>\n            <span class=\"label bg-c-blue \">28%</span>\n          </div>\n          <div class=\"col-sm-4 \">\n            <h6 class=\"d-inline-block m-r-10 \">Earnning growth</h6>\n            <span class=\"label bg-c-pink \">12%</span>\n          </div>\n          <div class=\"col-sm-4 \">\n            <h6 class=\"d-inline-block m-r-10 \">Trade growth</h6>\n            <span class=\"label bg-c-yellow \">56%</span>\n          </div>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <!-- Statistics and revenue End -->\n\n  <!-- Email Sent Start -->\n  <div class=\"col-md-12 col-xl-12\">\n    <app-card [title]=\"'Email sent'\" [cardClass]=\"'email-sent-card'\">\n      <div id=\"email-sent\" style=\"max-width:100%;height:400px;\"></div>\n    </app-card>\n  </div>\n  <!-- Email Sent End -->\n\n  <!-- Monthly Chart Start -->\n  <div class=\"col-md-12 col-xl-6\">\n    <app-card [title]=\"'Monthly earning'\">\n      <div class=\"monthly-earning\">\n        <div id=\"monthly-earning\">\n          0,15,18,10,30,35,40,50,40,40,58,60,100\n        </div>\n        <div class=\"monthly-data\">\n          <div class=\"row\">\n            <div class=\"col-sm-5 earn\">\n              <h5>Total Earned</h5>\n              <h3 class=\"f-w-600 m-t-10\">$45,634</h3>\n            </div>\n            <div class=\"col-sm-7 spent\">\n              <h5>Total Spent</h5>\n              <h3 class=\"f-w-600 m-t-10\">$67,452</h3>\n            </div>\n          </div>\n        </div>\n      </div>\n    </app-card>\n    <div class=\"card card-chart o-hidden\">\n      <div class=\"card-block\">\n        <h2 class=\"f-w-600 m-b-15\">43,678K</h2>\n        <h5>Daily income</h5>\n        <h6 class=\"text-muted d-inline-block card-chart-right f-w-600\"><i class=\"icofont icofont-long-arrow-up f-20 f-w-600\"></i>34 %</h6>\n      </div>\n      <div id=\"real-time-update\" style=\"height:150px;width: 100%\"></div>\n    </div>\n  </div>\n  <!-- Monthly Chart Start -->\n\n  <!-- Status Revenue Start -->\n  <div class=\"col-md-12 col-xl-6 \">\n    <app-card [title]=\"'Revenue status'\" [cardClass]=\"'status-revenue-card'\">\n      <div class=\"row \">\n        <div class=\"col-sm-6 b-r-default \">\n          <div class=\"row status-rev-chart\">\n            <div class=\"col-sm-6 m-b-40\">\n              <div id=\"revenue-status-d-graph\">5,2,7,4,3,2,5</div>\n            </div>\n            <div class=\"col-sm-6 text-right\">\n              <i class=\"icofont icofont-caret-down text-muted f-16 \"></i>\n              <p class=\"text-muted f-16 d-inline-block f-w-600 m-l-10 m-b-0 \">+1.6%</p>\n            </div>\n          </div>\n          <h2>$27,674</h2>\n          <p class=\"text-muted m-b-0 f-w-600 \">Revenue daily</p>\n        </div>\n        <div class=\"col-sm-6 \">\n          <div class=\"row status-rev-chart\">\n            <div class=\"col-sm-6 m-b-30\">\n              <div id=\"revenue-status-w-graph\">5,2,7,4,3,2,5</div>\n            </div>\n            <div class=\"col-sm-6 text-right\">\n              <i class=\"icofont icofont-caret-down text-muted f-16 \"></i>\n              <p class=\"text-muted f-16 d-inline-block f-w-600 m-l-10 m-b-0 \">- 0.9%</p>\n            </div>\n          </div>\n          <h2>17,563</h2>\n          <p class=\"text-muted m-b-0 f-w-600 \">Revenue weekly</p>\n        </div>\n      </div>\n    </app-card>\n    <div class=\"card bg-c-pink week-sales-card \">\n      <div class=\"card-header \">\n        <div class=\"card-header-left \">\n          <h5>Last week sales</h5>\n        </div>\n        <div class=\"card-header-right\">\n          <i class=\"icofont icofont-spinner-alt-5\"></i>\n        </div>\n      </div>\n      <div id=\"last-week-sales\" class=\"last-week-sales\"></div>\n    </div>\n  </div>\n  <!-- Status Revenue End -->\n\n  <!-- Balance Start -->\n  <div class=\"col-md-12 col-xl-4\">\n    <app-card [title]=\"'Your balance'\" [cardClass]=\"'balance-card'\">\n      <h2>$167.20</h2>\n      <button class=\"btn btn-primary m-t-15 m-b-20\">Recharge</button>\n      <p class=\"text-muted f-15\">Payment of next month</p>\n      <h4 class=\"text-muted f-18 f-w-600\">$167.20</h4>\n      <div class=\"progress m-t-30\">\n        <div class=\"progress-bar\" role=\"progressbar \" aria-valuemin=\"0 \" aria-valuemax=\"100 \" style=\"width:60% \"></div>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"card feed-card\">\n          <div class=\"card-block p-t-0 p-b-0\">\n            <div class=\"row\">\n              <div class=\"col-4 bg-c-blue border-feed\">\n                <i class=\"icofont icofont-users-alt-4 f-40\"></i>\n              </div>\n              <div class=\"col-8\">\n                <div class=\"p-t-30 p-b-30\">\n                  <h2 class=\"f-w-600 m-b-10\">2,672</h2>\n                  <p class=\"text-muted m-0\">Last week <span class=\"text-c-blue f-w-600\">user's</span></p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card feed-card\">\n          <div class=\"card-block p-t-0 p-b-0\">\n            <div class=\"row\">\n              <div class=\"col-4 bg-c-green border-feed\">\n                <i class=\"icofont icofont-wallet f-40\"></i>\n              </div>\n              <div class=\"col-8\">\n                <div class=\"p-t-30 p-b-30\">\n                  <h2 class=\"f-w-600 m-b-10\">$6,391</h2>\n                  <p class=\"text-muted m-0\">Total <span class=\"text-c-green f-w-600\">earning</span></p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"card feed-card\">\n          <div class=\"card-block p-t-0 p-b-0\">\n            <div class=\"row\">\n              <div class=\"col-4 bg-c-pink border-feed\">\n                <i class=\"icofont icofont-chart-flow-alt-1 f-40\"></i>\n              </div>\n              <div class=\"col-8\">\n                <div class=\"p-t-30 p-b-30\">\n                  <h2 class=\"f-w-600 m-b-10\">3,619</h2>\n                  <p class=\"text-muted m-0\">New <span class=\"text-c-pink f-w-600\">Order Recieved</span></p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card feed-card\">\n          <div class=\"card-block p-t-0 p-b-0\">\n            <div class=\"row\">\n              <div class=\"col-4 bg-c-yellow border-feed\">\n                <i class=\"icofont icofont-users-alt-3 f-40\"></i>\n              </div>\n              <div class=\"col-8\">\n                <div class=\"p-t-30 p-b-30\">\n                  <h2 class=\"f-w-600 m-b-10\">9,276</h2>\n                  <p class=\"text-muted m-0\">Today <span class=\"text-c-yellow f-w-600\">New Visitors</span></p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Balance End -->\n\n  <!-- card1 start -->\n  <div class=\"col-md-12 col-xl-6 \">\n    <div class=\"card view-card\">\n      <div class=\"card-block-big\">\n        <button class=\"btn btn-default btn-icon\"><i\n          class=\"icofont icofont-plus m-0 f-16 f-w-600\"></i></button>\n        <div class=\"text-center m-b-20\">\n          <div class=\"chart-div\">\n            <input type=\"text\" class=\"dial\" value=\"70\" data-width=\"150\"\n                   data-height=\"150\" data-thickness=\".2\"\n                   data-linecap=\"round\" data-displayprevious=\"true\"\n                   data-displayInput=\"true\" data-fgColor=\"#93BE52\"\n                   data-angleoffset=\"180\">\n            <div class=\"chart-more-icon\">\n              <span>5</span>\n              <p>MORE</p>\n            </div>\n          </div>\n        </div>\n        <h4 class=\"text-center f-w-600\">Recomended changes</h4>\n        <p class=\"text-center f-w-600 text-muted m-b-10\">Latest update</p>\n        <div class=\"border-img-view p-t-10 text-center\">\n          <a href=\"javascript:\"><img src=\"assets/images/avatar-2.jpg\" placement=\"top\" ngbTooltip=\"Alia\" class=\"img-40\"></a>\n          <a href=\"javascript:\"><img src=\"assets/images/avatar-3.jpg\" placement=\"top\" ngbTooltip=\"Suzen\" class=\"img-40 m-l-10\"></a>\n          <a href=\"javascript:\"><img src=\"assets/images/avatar-4.jpg\" placement=\"top\" ngbTooltip=\"Lary Doe\" class=\"img-40 m-l-10\"></a>\n          <a href=\"javascript:\"><img src=\"assets/images/avatar-2.jpg\" placement=\"top\" ngbTooltip=\"Josephin Doe\" class=\"img-40 m-l-10\"></a>\n          <button class=\"btn btn-success btn-icon m-l-10\"><i\n            class=\"icofont icofont-plus m-0 f-16 f-w-600\"></i>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- card1 end -->\n\n  <!-- Weather Start -->\n  <div class=\"col-md-6 col-xl-6 \">\n    <div class=\"card \">\n      <div class=\"card-block weather-update\">\n        <h4 class=\"text-center f-w-600 p-b-20\">Weather Update</h4>\n        <div class=\"row\">\n          <div class=\"col-md-12 text-center\">\n            <svg version=\"1.1\" id=\"cloudSun\" class=\"climacon climacon_cloudSun\" viewBox=\"15 15 70 70\">\n              <clipPath id=\"cloudFillClip\">\n                <path d=\"M15,15v70h70V15H15z M59.943,61.639c-3.02,0-12.381,0-15.999,0c-6.626,0-11.998-5.371-11.998-11.998c0-6.627,5.372-11.999,11.998-11.999c5.691,0,10.434,3.974,11.665,9.29c1.252-0.81,2.733-1.291,4.334-1.291c4.418,0,8,3.582,8,8C67.943,58.057,64.361,61.639,59.943,61.639z\"/>\n              </clipPath>\n              <clipPath id=\"sunCloudFillClip\">\n                <path d=\"M15,15v70h70V15H15z M57.945,49.641c-4.417,0-8-3.582-8-7.999c0-4.418,3.582-7.999,8-7.999s7.998,3.581,7.998,7.999C65.943,46.059,62.362,49.641,57.945,49.641z\"/>\n              </clipPath>\n              <g class=\"climacon_iconWrap climacon_cloudSun-iconWrap\">\n                <g clip-path=\"url(#cloudFillClip)\">\n                  <g class=\"climacon_componentWrap climacon_componentWrap-sun climacon_componentWrap-sun_cloud\"  >\n                    <g class=\"climacon_componentWrap climacon_componentWrap_sunSpoke\">\n                      <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-orth\" d=\"M80.029,43.611h-3.998c-1.105,0-2-0.896-2-1.999s0.895-2,2-2h3.998c1.104,0,2,0.896,2,2S81.135,43.611,80.029,43.611z\"/>\n                      <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north\" d=\"M72.174,30.3c-0.781,0.781-2.049,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l2.828-2.828c0.779-0.781,2.047-0.781,2.828,0c0.779,0.781,0.779,2.047,0,2.828L72.174,30.3z\"/>\n                      <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north\" d=\"M58.033,25.614c-1.105,0-2-0.896-2-2v-3.999c0-1.104,0.895-2,2-2c1.104,0,2,0.896,2,2v3.999C60.033,24.718,59.135,25.614,58.033,25.614z\"/>\n                      <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north\" d=\"M43.892,30.3l-2.827-2.828c-0.781-0.781-0.781-2.047,0-2.828c0.78-0.781,2.047-0.781,2.827,0l2.827,2.828c0.781,0.781,0.781,2.047,0,2.828C45.939,31.081,44.673,31.081,43.892,30.3z\"/>\n                      <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north\" d=\"M42.033,41.612c0,1.104-0.896,1.999-2,1.999h-4c-1.104,0-1.998-0.896-1.998-1.999s0.896-2,1.998-2h4C41.139,39.612,42.033,40.509,42.033,41.612z\"/>\n                      <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north\" d=\"M43.892,52.925c0.781-0.78,2.048-0.78,2.827,0c0.781,0.78,0.781,2.047,0,2.828l-2.827,2.827c-0.78,0.781-2.047,0.781-2.827,0c-0.781-0.78-0.781-2.047,0-2.827L43.892,52.925z\"/>\n                      <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north\" d=\"M58.033,57.61c1.104,0,2,0.895,2,1.999v4c0,1.104-0.896,2-2,2c-1.105,0-2-0.896-2-2v-4C56.033,58.505,56.928,57.61,58.033,57.61z\"/>\n                      <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north\" d=\"M72.174,52.925l2.828,2.828c0.779,0.78,0.779,2.047,0,2.827c-0.781,0.781-2.049,0.781-2.828,0l-2.828-2.827c-0.781-0.781-0.781-2.048,0-2.828C70.125,52.144,71.391,52.144,72.174,52.925z\"/>\n                    </g>\n                    <g class=\"climacon_wrapperComponent climacon_wrapperComponent-sunBody\" clip-path=\"url(#sunCloudFillClip)\">\n                      <circle class=\"climacon_component climacon_component-stroke climacon_component-stroke_sunBody\" cx=\"58.033\" cy=\"41.612\" r=\"11.999\"/>\n                    </g>\n                  </g>\n                </g>\n                <g class=\"climacon_wrapperComponent climacon_wrapperComponent-cloud\" clip-path=\"url(#cloudFillClip)\">\n                  <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_cloud\" d=\"M44.033,65.641c-8.836,0-15.999-7.162-15.999-15.998c0-8.835,7.163-15.998,15.999-15.998c6.006,0,11.233,3.312,13.969,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,6.625-5.371,11.998-11.998,11.998C57.26,65.641,47.23,65.641,44.033,65.641z\"/>\n                </g>\n              </g>\n            </svg>\n          </div>\n          <div class=\"col-md-12 text-center\">\n            <h2 class=\"p-b-30 f-w-600\">23 ° C</h2>\n          </div>\n        </div>\n        <p class=\"text-center\">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n      </div>\n    </div>\n  </div>\n  <!-- Weather End -->\n\n  <!-- Statistics Start -->\n  <div class=\"col-md-12 col-xl-12\">\n    <app-card [title]=\"'Statistics'\">\n      <div class=\"row\">\n        <div class=\"col-md-8\">\n          <div id=\"line-example\" class=\"line-example\">\n            <div id=\"statistics-chart\" style=\" height:300px;\"></div>\n          </div>\n        </div>\n        <div class=\"col-md-4 text-center\">\n          <div id=\"invoice\" style=\" height:350px;\"></div>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <!-- Statestics End -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard-crm/dashboard-crm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardCrmComponent; });
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









var DashboardCrmComponent = (function () {
    function DashboardCrmComponent() {
    }
    DashboardCrmComponent.prototype.ngOnInit = function () {
        AmCharts.makeChart('email-sent', {
            'type': 'serial',
            'theme': 'light',
            'hideCredits': true,
            'dataDateFormat': 'YYYY-MM-DD',
            'precision': 2,
            'valueAxes': [{
                    'id': 'v1',
                    'title': 'Sales',
                    'position': 'left',
                    'autoGridCount': false,
                    'labelFunction': function (value) {
                        return Math.round(value);
                    }
                }, {
                    'id': 'v2',
                    'title': '',
                    'gridAlpha': 0,
                    'fontSize': 0,
                    'axesAlpha': 0,
                    'position': 'left',
                    'autoGridCount': false
                }],
            'graphs': [{
                    'id': 'g3',
                    'valueAxis': 'v1',
                    'lineColor': '#4680ff',
                    'fillColors': '#4680ff',
                    'fillAlphas': 1,
                    'type': 'column',
                    'title': 'Actual Sales',
                    'valueField': 'sales2',
                    'clustered': true,
                    'columnWidth': 0.2,
                    'legendValueText': '$[[value]]M',
                    'balloonText': '[[title]]<br /><b style="font-size: 130%">$[[value]]M</b>'
                }, {
                    'id': 'g4',
                    'valueAxis': 'v1',
                    'lineColor': '#FC6180',
                    'fillColors': '#FC6180',
                    'fillAlphas': 1,
                    'type': 'column',
                    'title': 'Target Sales',
                    'valueField': 'sales1',
                    'clustered': true,
                    'columnWidth': 0.2,
                    'legendValueText': '$[[value]]M',
                    'balloonText': '[[title]]<br /><b style="font-size: 130%">$[[value]]M</b>'
                }, {
                    'id': 'g1',
                    'valueAxis': 'v2',
                    'bullet': 'round',
                    'bulletBorderAlpha': 0,
                    'bulletColor': 'transparent',
                    'bulletSize': 0,
                    'hideBulletsCount': 50,
                    'lineThickness': 3,
                    'dashLength': 10,
                    'lineColor': '#93BE52',
                    'type': 'smoothedLine',
                    'title': 'Market Days',
                    'useLineColorForBulletBorder': true,
                    'valueField': 'market1',
                    'balloonText': '[[title]]<br /><b style="font-size: 130%">[[value]]</b>'
                }, {
                    'id': 'v3',
                    'valueAxis': 'v1',
                    'lineColor': '#FFB64D',
                    'fillColors': '#FFB64D',
                    'fillAlphas': 1,
                    'type': 'column',
                    'title': 'Actual Sales',
                    'valueField': 'sales2',
                    'clustered': true,
                    'columnWidth': 0.2,
                    'legendValueText': '$[[value]]M',
                    'balloonText': '[[title]]<br /><b style="font-size: 130%">$[[value]]M</b>'
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
                'dashLength': 0,
                'axisAlpha': 0,
                'GridAlpha': 0,
                'minorGridEnabled': true
            },
            'legend': {
                'useGraphSettings': true,
                'position': 'top'
            },
            'balloon': {
                'borderThickness': 1,
                'shadowAlpha': 0
            },
            'export': {
                'enabled': true
            },
            'dataProvider': [{
                    'date': '2013-01-16',
                    'market1': 91,
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
                    'market1': 78,
                    'market2': 92,
                    'sales1': 5,
                    'sales2': 7
                }]
        });
        var plot = $.plot('#real-time-update', [getRandomData()], {
            series: {
                shadowSize: 0,
                color: '#FFB64D',
            },
            lines: {
                fill: true,
                fillColor: '#FFB64D',
                borderWidth: 0,
            },
            grid: {
                borderWidth: 0,
                labelMargin: 0,
                axisMargin: 0,
                minBorderMargin: 0,
            },
            yaxis: {
                min: 0,
                max: 100,
                show: false,
            },
            xaxis: {
                show: false,
            }
        });
        setInterval(function () {
            plot.setData([getRandomData()]);
            plot.draw();
        }, 900);
        $('#monthly-earning').peity('line', {
            fill: '#999',
            stroke: '#999'
        });
        $('#revenue-status-d-graph').peity('bar', {
            fill: ['#4680ff'],
            padding: 0.2,
        });
        $('#revenue-status-w-graph').peity('bar', {
            fill: ['#FC6180'],
            padding: 0.2,
        });
        AmCharts.makeChart('last-week-sales', {
            'type': 'serial',
            'theme': 'light',
            'hideCredits': true,
            'marginRight': 0,
            'marginLeft': 0,
            'autoMarginOffset': 0,
            'dataDateFormat': 'YYYY-MM-DD',
            'valueAxes': [{
                    'id': 'v1',
                    'axisAlpha': 0,
                    'lineAlpha': 0,
                    'gridAlpha': 0,
                    'fontSize': 0,
                    'position': 'left',
                    'ignoreAxisWidth': true
                }],
            'balloon': {
                'borderThickness': 1,
                'shadowAlpha': 0
            },
            'graphs': [{
                    'id': 'g1',
                    'balloon': {
                        'drop': true,
                        'adjustBorderColor': false,
                        'color': '#FC6180',
                        'type': 'smoothedLine'
                    },
                    'fillAlphas': 0,
                    'bullet': 'round',
                    'bulletBorderAlpha': 1,
                    'bulletColor': '#FFFFFF',
                    'bulletSize': 5,
                    'hideBulletsCount': 50,
                    'lineThickness': 2,
                    'type': 'smoothedLine',
                    'lineColor': '#fff',
                    'title': 'red line',
                    'useLineColorForBulletBorder': true,
                    'valueField': 'value',
                    'balloonText': '<span style="font-size:18px;">[[value]]</span>'
                }],
            'chartCursor': {
                'valueLineEnabled': false,
                'valueLineBalloonEnabled': false,
                'cursorAlpha': 0,
                'cursorColor': '#fff',
                'color': '#FC6180',
                'zoomable': false,
                'valueZoomable': false,
                'valueLineAlpha': 0.5
            },
            'categoryField': 'date',
            'categoryAxis': {
                'startOnAxis': true,
                'dashLength': 1,
                'minorGridEnabled': false,
                'axisAlpha': 0,
                'parseDates': true,
                'color': '#fff',
                'inside': true,
                'lineAlpha': 0,
                'gridAlpha': 0,
            },
            'dataProvider': [{
                    'date': '2012-11-19',
                    'value': 87
                }, {
                    'date': '2012-11-20',
                    'value': 83
                }, {
                    'date': '2012-11-21',
                    'value': 85
                }, {
                    'date': '2012-11-22',
                    'value': 81
                }, {
                    'date': '2012-11-23',
                    'value': 82
                }, {
                    'date': '2012-11-24',
                    'value': 79
                }, {
                    'date': '2012-11-25',
                    'value': 73
                }, {
                    'date': '2012-11-26',
                    'value': 75
                }, {
                    'date': '2012-11-27',
                    'value': 71
                }]
        });
        $('.dial').knob({
            draw: function () {
                if (this.$.data('skin') === 'tron') {
                    this.cursorExt = 0.3;
                    var d = this.arc(this.cv);
                    var e = void 0;
                    var f = 1;
                    this.g.lineWidth = this.lineWidth;
                    if (this.o.displayPrevious) {
                        e = this.arc(this.v);
                        this.g.beginPath();
                        this.g.strokeStyle = this.pColor;
                        this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, e.s, e.e, e.d);
                        this.g.stroke();
                    }
                    this.g.beginPath();
                    this.g.strokeStyle = f ? this.o.fgColor : this.fgColor;
                    this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, d.s, d.e, d.d);
                    this.g.stroke();
                    this.g.lineWidth = 2;
                    this.g.beginPath();
                    this.g.strokeStyle = this.o.fgColor;
                    this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                    this.g.stroke();
                    return false;
                }
            }
        });
        AmCharts.makeChart('statistics-chart', {
            type: 'serial',
            marginTop: 0,
            hideCredits: true,
            marginRight: 80,
            dataProvider: [{
                    year: 'Jan',
                    value: 0.98
                }, {
                    year: 'Feb',
                    value: 1.87
                }, {
                    year: 'Mar',
                    value: 0.97
                }, {
                    year: 'Apr',
                    value: 1.64
                }, {
                    year: 'May',
                    value: 0.4
                }, {
                    year: 'Jun',
                    value: 2.9
                }, {
                    year: 'Jul',
                    value: 5.2
                }, {
                    year: 'Aug',
                    value: 0.77
                }, {
                    year: 'Sap',
                    value: 3.1
                }],
            valueAxes: [{
                    axisAlpha: 0,
                    dashLength: 6,
                    gridAlpha: 0.1,
                    position: 'left'
                }],
            graphs: [{
                    id: 'g1',
                    bullet: 'round',
                    bulletSize: 9,
                    lineColor: '#4680ff',
                    lineThickness: 2,
                    negativeLineColor: '#4680ff',
                    type: 'smoothedLine',
                    valueField: 'value'
                }],
            chartCursor: {
                cursorAlpha: 0,
                valueLineEnabled: false,
                valueLineBalloonEnabled: true,
                valueLineAlpha: false,
                color: '#fff',
                cursorColor: '#FC6180',
                fullWidth: true
            },
            categoryField: 'year',
            categoryAxis: {
                gridAlpha: 0,
                axisAlpha: 0,
                fillAlpha: 1,
                fillColor: '#FAFAFA',
                minorGridAlpha: 0,
                minorGridEnabled: true
            },
            'export': {
                enabled: true
            }
        });
        AmCharts.makeChart('invoice', {
            'type': 'pie',
            'hideCredits': true,
            'theme': 'light',
            'dataProvider': [{
                    'country': 'Lithuania',
                    'color': '#93BE52',
                    'value': 260
                }, {
                    'country': 'Ireland',
                    'color': '#4680ff',
                    'value': 201
                }, {
                    'country': 'Germany',
                    'color': '#FC6180',
                    'value': 65
                }, {
                    'country': 'Australia',
                    'color': '#FFB64D',
                    'value': 39
                }],
            'valueField': 'value',
            'titleField': 'country',
            'labelsEnabled': false,
            'colorField': 'color',
            'innerRadius': '50%',
            'outlineAlpha': 0.9,
            'depth3D': 0,
            'balloonText': '[[title]]<br><span style="font-size:14px"><b>[[value]]</b> ([[percents]]%)</span>',
            'angle': 0,
        });
    };
    return DashboardCrmComponent;
}());
DashboardCrmComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard-crm',
        template: __webpack_require__("../../../../../src/app/pages/dashboard/dashboard-crm/dashboard-crm.component.html"),
        styles: [__webpack_require__("../../../../../src/assets/charts/radial/radial.css"), __webpack_require__("../../../../../src/app/pages/dashboard/dashboard-crm/dashboard-crm.component.css"), __webpack_require__("../../../../../src/assets/icon/svg-animated/svg-weather.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [])
], DashboardCrmComponent);

function getRandomData() {
    var data = [];
    var totalPoints = 300;
    if (data.length > 0) {
        data = data.slice(1);
    }
    while (data.length < totalPoints) {
        var prev = data.length > 0 ? data[data.length - 1] : 50;
        var y = prev + Math.random() * 10 - 5;
        if (y < 0) {
            y = 0;
        }
        else if (y > 100) {
            y = 100;
        }
        data.push(y);
    }
    var res = [];
    for (var i = 0; i < data.length; ++i) {
        res.push([i, data[i]]);
    }
    return res;
}
//# sourceMappingURL=dashboard-crm.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard-crm/dashboard-crm.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardCrmRoutes", function() { return DashboardCrmRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardCrmModule", function() { return DashboardCrmModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_crm_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/dashboard-crm/dashboard-crm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DashboardCrmRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_crm_component__["a" /* DashboardCrmComponent */],
        data: {
            breadcrumb: 'CRM',
            icon: 'icofont-home bg-c-blue',
            status: false
        }
    }
];
var DashboardCrmModule = (function () {
    function DashboardCrmModule() {
    }
    return DashboardCrmModule;
}());
DashboardCrmModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(DashboardCrmRoutes),
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__dashboard_crm_component__["a" /* DashboardCrmComponent */]]
    })
], DashboardCrmModule);

//# sourceMappingURL=dashboard-crm.module.js.map

/***/ })

});
//# sourceMappingURL=dashboard-crm.module.chunk.js.map