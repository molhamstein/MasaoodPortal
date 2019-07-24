webpackJsonp(["dashboard-ecommerce.module"],{

/***/ "../../../../../src/app/pages/dashboard/dashboard-ecommerce/dashboard-ecommerce.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard-ecommerce/dashboard-ecommerce.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <!-- card1 start -->\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card amount-card o-hidden\">\n      <div class=\"card-block\">\n        <h2 class=\"f-w-400\">$23,567</h2>\n        <p class=\"text-muted f-w-400 f-16\"><span class=\"text-c-blue\">Amount</span> processed</p>\n      </div>\n      <span id=\"amount-processed\">0,10,22,15,38,42,48,32,30,40,58,70</span>\n    </div>\n  </div>\n  <!-- card1 end -->\n  <!-- card2 start -->\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card amount-card o-hidden\">\n      <div class=\"card-block\">\n        <h2 class=\"f-w-400\">$14,552</h2>\n        <p class=\"text-muted f-w-400 f-16\"><span class=\"text-c-pink\">Amount</span> spent</p>\n      </div>\n      <span id=\"amount-spent\">0,15,18,10,30,35,50,35,40,40,58,60</span>\n    </div>\n  </div>\n  <!-- card2 end -->\n  <!-- card3 start -->\n  <div class=\"col-md-12 col-xl-4\">\n    <div class=\"card amount-card o-hidden\">\n      <div class=\"card-block\">\n        <h2 class=\"f-w-400\">$31,156</h2>\n        <p class=\"text-muted f-w-400 f-16\"><span class=\"text-c-yellow\">Profit</span> processed</p>\n      </div>\n      <span id=\"profit-processed\">0,25,8,10,35,30,50,35,40,20,60,30</span>\n    </div>\n  </div>\n  <!-- card3 end -->\n\n  <!-- email Sent Start -->\n  <div class=\"col-md-12 col-xl-12\">\n    <app-card [title]=\"'Email sent'\" [cardClass]=\"'email-sent-card'\">\n      <div id=\"email-sent\" style=\"max-width:100%;height:400px;\"></div>\n    </app-card>\n  </div>\n  <!-- email Sent End -->\n\n  <!-- reviews Start -->\n  <div class=\"col-md-6 col-xl-5\">\n    <app-card [title]=\"'Traffic resources'\" [cardClass]=\"'review-resourse'\" [blockClass]=\"'p-t-10 p-b-10'\">\n      <div class=\"table-responsive\">\n        <table class=\"table table-hover\">\n          <tbody>\n          <tr>\n            <td>\n              <h6>Unique visitors</h6></td>\n            <td>\n              <span class=\"f-18 text-muted\">4,562</span>\n            </td>\n            <td class=\"text-right\">\n              <span class=\"visitor1\">0,5,0,5,7,6,5.5,10,8</span>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <h6>Page Views</h6></td>\n            <td>\n              <span class=\"f-18 text-muted\">679</span>\n            </td>\n            <td class=\"text-right\">\n              <span class=\"visitor2\">0,5,0,5,7,6,5.5,10,8</span>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <h6>Page/Visit</h6></td>\n            <td>\n              <span class=\"f-18 text-muted\">2,516</span>\n            </td>\n            <td class=\"text-right\">\n              <span class=\"visitor3\">0,5,0,5,7,6,5.5,10,8</span>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <h6>Bounce rate</h6></td>\n            <td>\n              <span class=\"f-18 text-muted\">67%</span>\n            </td>\n            <td class=\"text-right\">\n              <span class=\"visitor4\">0,5,0,5,7,6,5.5,10,8</span>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <h6>Visit</h6></td>\n            <td>\n              <span class=\"f-18 text-muted\">845</span>\n            </td>\n            <td class=\"text-right\">\n              <span class=\"visitor5\">0,5,0,5,7,6,5.5,10,8</span>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-md-6 col-xl-7\">\n    <app-card [title]=\"'Reviews'\" [cardClass]=\"'review-task'\">\n      <div class=\"table-responsive\">\n        <table class=\"table table-hover\">\n          <tbody>\n          <tr>\n            <td><a href=\"javascript:\"><img class=\"img-radius img-50\" src=\"assets/images/avatar-1.jpg\" alt=\"chat-user\"></a>\n            </td>\n            <td>\n              <h6>Josephin Doe</h6>\n              <p class=\"text-muted\">Lorem ipsum dolor</p>\n            </td>\n            <td>\n              <p class=\"review-date\">04 Jan</p>\n              <p class=\"\">10:45 AM</p>\n            </td>\n            <td>\n              <a href=\"javascript:\"><i class=\"icofont icofont-star  f-18 text-c-blue\"></i></a>\n              <a href=\"javascript:\"><i class=\"icofont icofont-star f-18 text-default\"></i></a>\n              <a href=\"javascript:\"><i class=\"icofont icofont-star f-18 text-default\"></i></a>\n              <a href=\"javascript:\"><i class=\"icofont icofont-star f-18 text-default\"></i></a>\n              <a href=\"javascript:\"><i class=\"icofont icofont-star f-18 text-default\"></i></a>\n            </td>\n          </tr>\n          <tr>\n            <td><a href=\"javascript:\"><img class=\"img-radius img-50\" src=\"assets/images/avatar-5.jpg\" alt=\"chat-user\"></a>\n            </td>\n            <td>\n              <h6>Josephin Doe</h6>\n              <p class=\"text-muted\">Lorem ipsum dolor sit amet</p>\n            </td>\n            <td>\n              <p class=\"review-date\">04 Jan</p>\n              <p class=\"\">10:45 AM</p>\n            </td>\n            <td>\n              <a href=\"javascript:\"><i class=\"icofont icofont-star  f-18 text-c-blue\"></i></a>\n              <a href=\"javascript:\"><i class=\"icofont icofont-star f-18 text-c-blue\"></i></a>\n              <a href=\"javascript:\"><i class=\"icofont icofont-star f-18 text-c-blue\"></i></a>\n              <a href=\"javascript:\"><i class=\"icofont icofont-star f-18 text-c-blue\"></i></a>\n              <a href=\"javascript:\"><i class=\"icofont icofont-star f-18 text-c-default\"></i></a>\n            </td>\n          </tr>\n          <tr>\n            <td><a href=\"javascript:\"><img class=\"img-radius img-50\" src=\"assets/images/avatar-2.jpg\" alt=\"chat-user\"></a>\n            </td>\n            <td>\n              <h6>Luciano Durk</h6>\n              <p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur</p>\n            </td>\n            <td>\n              <p class=\"review-date\">04 Jan</p>\n              <p class=\"\">10:45 AM</p>\n            </td>\n            <td>\n              <a href=\"javascript:\"><i class=\"icofont icofont-star  f-18 text-c-blue\"></i></a>\n              <a href=\"javascript:\"><i class=\"icofont icofont-star f-18 text-c-blue\"></i></a>\n              <a href=\"javascript:\"><i class=\"icofont icofont-star f-18 text-default\"></i></a>\n              <a href=\"javascript:\"><i class=\"icofont icofont-star f-18 text-default\"></i></a>\n              <a href=\"javascript:\"><i class=\"icofont icofont-star f-18 text-default\"></i></a>\n            </td>\n          </tr>\n          <tr>\n            <td><a href=\"javascript:\"><img class=\"img-radius img-50\" src=\"assets/images/avatar-1.jpg\" alt=\"chat-user\"></a>\n            </td>\n            <td>\n              <h6>Luciano Durk</h6>\n              <p class=\"text-muted\">Lorem ipsum amet, consectetur</p>\n            </td>\n            <td>\n              <p class=\"review-date\">04 Jan</p>\n              <p class=\"\">10:45 AM</p>\n            </td>\n            <td>\n              <a href=\"javascript:\"><i class=\"icofont icofont-star  f-18 text-c-blue\"></i></a>\n              <a href=\"javascript:\"><i class=\"icofont icofont-star f-18 text-c-blue\"></i></a>\n              <a href=\"javascript:\"><i class=\"icofont icofont-star f-18 text-c-blue\"></i></a>\n              <a href=\"javascript:\"><i class=\"icofont icofont-star f-18 text-default\"></i></a>\n              <a href=\"javascript:\"><i class=\"icofont icofont-star f-18 text-default\"></i></a>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n  </div>\n  <!-- reviews End -->\n\n  <!-- balance Start -->\n  <div class=\"col-md-12 col-xl-4\">\n    <app-card [title]=\"'Your balance'\" [cardClass]=\"'balance-card'\">\n      <h2>$167.20</h2>\n      <button class=\"btn btn-primary m-t-15 m-b-20\">Recharge now</button>\n      <p class=\"text-muted f-15\">Payment of next month</p>\n      <h4 class=\"text-muted f-18 f-w-600\">$167.20</h4>\n      <div class=\"progress m-t-30\">\n        <div class=\"progress-bar\" role=\"progressbar \" aria-valuemin=\"0 \" aria-valuemax=\"100 \" style=\"width:60% \"></div>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"card feed-card\">\n          <div class=\"card-block p-t-0 p-b-0\">\n            <div class=\"row\">\n              <div class=\"col-4 bg-c-blue border-feed\">\n                <i class=\"icofont icofont-users-alt-4 f-40\"></i>\n              </div>\n              <div class=\"col-8\">\n                <div class=\"p-t-30 p-b-30\">\n                  <h2 class=\"f-w-600 m-b-10\">2,672</h2>\n                  <p class=\"text-muted m-0\">Last week <span class=\"text-c-blue f-w-600\">user's</span></p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card feed-card\">\n          <div class=\"card-block p-t-0 p-b-0\">\n            <div class=\"row\">\n              <div class=\"col-4 bg-c-green border-feed\">\n                <i class=\"icofont icofont-wallet f-40\"></i>\n              </div>\n              <div class=\"col-8\">\n                <div class=\"p-t-30 p-b-30\">\n                  <h2 class=\"f-w-600 m-b-10\">$6,391</h2>\n                  <p class=\"text-muted m-0\">Total <span class=\"text-c-green f-w-600\">earning</span></p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"card feed-card\">\n          <div class=\"card-block p-t-0 p-b-0\">\n            <div class=\"row\">\n              <div class=\"col-4 bg-c-pink border-feed\">\n                <i class=\"icofont icofont-chart-flow-alt-1 f-40\"></i>\n              </div>\n              <div class=\"col-8\">\n                <div class=\"p-t-30 p-b-30\">\n                  <h2 class=\"f-w-600 m-b-10\">3,619</h2>\n                  <p class=\"text-muted m-0\">New <span class=\"text-c-pink f-w-600\">Order Recieved</span></p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card feed-card\">\n          <div class=\"card-block p-t-0 p-b-0\">\n            <div class=\"row\">\n              <div class=\"col-4 bg-c-yellow border-feed\">\n                <i class=\"icofont icofont-users-alt-3 f-40\"></i>\n              </div>\n              <div class=\"col-8\">\n                <div class=\"p-t-30 p-b-30\">\n                  <h2 class=\"f-w-600 m-b-10\">9,276</h2>\n                  <p class=\"text-muted m-0\">Today <span class=\"text-c-yellow f-w-600\">New Visitors</span></p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- balance End -->\n\n  <!-- marketing Start -->\n  <div class=\"col-md-12\">\n    <app-card [title]=\"'Marketing compnaigns'\" [blockClass]=\"'marketing-card p-t-0'\">\n      <div class=\"table-responsive\">\n        <table class=\"table table-hover\">\n          <thead>\n          <tr>\n            <th>Companies</th>\n            <th>Client</th>\n            <th>Changes</th>\n            <th>Date</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <td colspan=\"6\" class=\"marketing-header\">Today</td>\n          </tr>\n          <tr>\n            <td><a href=\"javascript:\"><i class=\"icofont icofont-social-facebook bg-facebook social-icon\"></i></a>\n              <div class=\"table-contain\">\n                <h6>Face Book ads</h6>\n                <p class=\"text-muted\">6:00am- 8:00am</p>\n              </div>\n            </td>\n            <td>\n              <p class=\"text-muted\">Softtech</p>\n            </td>\n            <td>\n              <i class=\"icofont icofont-bird text-c-green\"></i>\n              <p class=\"m-l-10 text-c-green\">6.45%</p>\n            </td>\n            <td><span>$5645</span></td>\n            <td>\n              <button class=\"btn btn-default btn-bg-c-blue btn-outline-default btn-round btn-action\">Activate</button>\n            </td>\n            <td><i class=\"icofont icofont-brand-flikr text-muted\"></i></td>\n          </tr>\n          <tr>\n            <td><a href=\"javascript:\"><i class=\"icofont icofont-social-youtube-play bg-youtube social-icon\"></i></a>\n              <div class=\"table-contain\">\n                <h6>Youtube Videos</h6>\n                <p class=\"text-muted\">6:00am- 8:00am</p>\n              </div>\n            </td>\n            <td>\n              <p class=\"text-muted\">Softtech</p>\n            </td>\n            <td>\n              <i class=\"icofont icofont-bird text-c-green\"></i>\n              <p class=\"m-l-10 text-c-green\">2.34%</p>\n            </td>\n            <td><span>$5645</span></td>\n            <td>\n              <button class=\"btn btn-default btn-bg-c-pink btn-outline-default btn-round btn-action\">Closed</button>\n            </td>\n            <td><i class=\"icofont icofont-brand-flikr text-muted\"></i></td>\n          </tr>\n          <tr>\n            <td><a href=\"javascript:\"><i class=\"icofont icofont-social-twitter bg-twiter social-icon\"></i></a>\n              <div class=\"table-contain\">\n                <h6>Twitter ads</h6>\n                <p class=\"text-muted\">6:00am- 8:00am</p>\n              </div>\n            </td>\n            <td>\n              <p class=\"text-muted\">Softtech</p>\n            </td>\n            <td>\n              <i class=\"icofont icofont-bird text-c-pink\"></i>\n              <p class=\"m-l-10 text-c-pink\">-3.45%</p>\n            </td>\n            <td><span>$5645</span></td>\n            <td>\n              <button class=\"btn btn-default btn-bg-c-blue btn-outline-default btn-round btn-action\">Activate</button>\n            </td>\n            <td><i class=\"icofont icofont-brand-flikr text-muted\"></i></td>\n          </tr>\n          <tr>\n            <td><a href=\"javascript:\"><i class=\"icofont icofont-brand-amazon bg-amazon social-icon\"></i></a>\n              <div class=\"table-contain\">\n                <h6>Amazon ads</h6>\n                <p class=\"text-muted\">6:00am- 8:00am</p>\n              </div>\n            </td>\n            <td>\n              <p class=\"text-muted\">Softtech</p>\n            </td>\n            <td>\n              <i class=\"icofont icofont-bird text-c-green\"></i>\n              <p class=\"m-l-10 text-c-green\">6.45%</p>\n            </td>\n            <td><span>$5645</span></td>\n            <td>\n              <button class=\"btn btn-default btn-bg-c-yellow btn-outline-default btn-round btn-action\">Hold</button>\n            </td>\n            <td><i class=\"icofont icofont-brand-flikr text-muted\"></i></td>\n          </tr>\n          <tr>\n            <td colspan=\"6\" class=\"marketing-header\">Yesterday</td>\n          </tr>\n          <tr>\n            <td><a href=\"javascript:\"><i class=\"icofont icofont-social-facebook bg-facebook social-icon\"></i></a>\n              <div class=\"table-contain\">\n                <h6>Face Book ads</h6>\n                <p class=\"text-muted\">6:00am- 8:00am</p>\n              </div>\n            </td>\n            <td>\n              <p class=\"text-muted\">Softtech</p>\n            </td>\n            <td>\n              <i class=\"icofont icofont-bird text-c-pink\"></i>\n              <p class=\"m-l-10 text-c-pink\">6.45%</p>\n            </td>\n            <td><span>$5645</span></td>\n            <td>\n              <button class=\"btn btn-default btn-bg-c-green btn-outline-default btn-round btn-action\">Panding</button>\n            </td>\n            <td><i class=\"icofont icofont-brand-flikr text-muted\"></i></td>\n          </tr>\n          <tr class=\"b-b-default\">\n            <td><a href=\"javascript:\"><i class=\"icofont icofont-social-dribbble bg-dribble social-icon\"></i></a>\n              <div class=\"table-contain\">\n                <h6>Youtube Videos</h6>\n                <p class=\"text-muted\">6:00am- 8:00am</p>\n              </div>\n            </td>\n            <td>\n              <p class=\"text-muted\">Softtech</p>\n            </td>\n            <td>\n              <i class=\"icofont icofont-bird text-c-pink\"></i>\n              <p class=\"m-l-10 text-c-pink\">2.34%</p>\n            </td>\n            <td><span>$5645</span></td>\n            <td>\n              <button class=\"btn btn-default btn-bg-c-pink btn-outline-default btn-round btn-action\">Closed</button>\n            </td>\n            <td><i class=\"icofont icofont-brand-flikr text-muted\"></i></td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n\n\n      <div class=\"row marketing-card-footer\">\n        <div class=\"col-sm-9\">\n          <div class=\"d-inline-block m-r-20\">\n            <h6 class=\" m-l-10 m-b-20 f-w-600 f-14\">Last week status</h6>\n            <div class=\"tab-cont m-l-10\">\n              <span class=\"last-week-report\" data-peity='{\"innerRadius\": 10, \"radius\": 16 }'>1,2,3,2</span>\n              <p>56,345 <i class=\"icofont icofont-long-arrow-up text-c-green d-inline-block\"></i><span class=\"text-c-green d-inline-block\">( +15.70% )</span></p>\n            </div>\n          </div>\n          <div class=\"d-inline-block\">\n            <h6 class=\" m-l-10 m-b-20 f-w-600 f-14\">Last month status</h6>\n            <div class=\"tab-cont m-l-10\">\n              <span class=\"last-month-report\" data-peity='{\"innerRadius\": 10, \"radius\": 16 }'>1,3,4,2</span>\n              <p>5,845 <i class=\"icofont icofont-long-arrow-down text-c-pink d-inline-block\"></i><span class=\"text-c-pink d-inline-block\">( +1.65% )</span></p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-3 text-right\">\n          <button class=\"btn btn-primary\"> View report</button>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <!-- marketing End -->\n\n  <!-- map & Chart Start -->\n  <div class=\"col-md-12 col-xl-7\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"card card-chart o-hidden\">\n          <div class=\"card-block\">\n            <h2 class=\"f-w-600 m-b-15\">43,678K</h2>\n            <h5>Daily income</h5>\n            <h6 class=\"text-muted d-inline-block card-chart-right f-w-600\"><i class=\"icofont icofont-long-arrow-up f-20 f-w-600\"></i>34 %</h6>\n          </div>\n          <div id=\"real-time-update\" style=\"height: 180px;width: 100%\"></div>\n        </div>\n      </div>\n      <div class=\"col-sm-12\">\n        <app-card [title]=\"'Revenue report'\" [blockClass]=\"'p-0'\">\n          <div class=\"card-block-big revenue-report\">\n            <div class=\"row\">\n              <div class=\"col-lg-3\">\n                <h3 class=\"f-w-600\">$5,763</h3>\n              </div>\n              <div class=\"col-lg-3\">\n\n                <div id=\"revenue-report\">\n                  375,335,240,200,275,205,170,150,275,250,180,160,360,300\n                </div>\n              </div>\n              <div class=\"col-lg-4\">\n                <div class=\"revenue-card p-b-10\">\n                  <span class=\"bg-c-blue\"></span>\n                  <h6 class=\"text-muted d-inline-block m-l-20\">\n                    This month</h6>\n                  <h6 class=\"d-inline-block m-l-20 f-w-600\">\n                    $48,689</h6>\n                </div>\n                <div class=\"revenue-card b-t-default  p-t-10\">\n                  <span class=\"bg-c-green m-t-10\"></span>\n                  <h6 class=\"text-muted d-inline-block m-l-20\">\n                    This month</h6>\n                  <h6 class=\"d-inline-block m-l-20 f-w-600\">\n                    $48,689</h6>\n                </div>\n              </div>\n            </div>\n          </div>\n        </app-card>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-12 col-xl-5\">\n    <div class=\"card bg-c-pink card-map\">\n      <div class=\"card-header\">\n        <div class=\"card-header-left\">\n          <h5>Strongest location</h5>\n        </div>\n      </div>\n      <div class=\"card-block\">\n        <h2 class=\"d-inline-block\">New York <i class=\"icofont icofont-social-google-map f-35\"></i></h2>\n        <h6>Store #45</h6>\n      </div>\n      <div id=\"world-map-markers\" style=\"width:100%;height:385px;\"></div>\n    </div>\n  </div>\n  <!-- map & Chart End -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard-ecommerce/dashboard-ecommerce.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardEcommerceComponent; });
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









var DashboardEcommerceComponent = (function () {
    function DashboardEcommerceComponent() {
    }
    DashboardEcommerceComponent.prototype.ngOnInit = function () {
        $('span#amount-processed').peity('line', {
            fill: '#4680ff',
            stroke: '#4680ff',
            width: '100%'
        });
        $('span#amount-spent').peity('line', {
            fill: 'rgb(252, 97, 128)',
            stroke: 'rgb(252, 97, 128)',
            width: '100%'
        });
        $('span#profit-processed').peity('line', {
            fill: 'rgb(255, 182, 77)',
            stroke: 'rgb(255, 182, 77)',
            width: '100%'
        });
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
        $('span.last-week-report').peity('pie', {
            fill: ['#4680FE', '#93BE52', '#FC6180', '#FFB64D']
        });
        $('span.last-month-report').peity('pie', {
            fill: ['#4680FE', '#93BE52', '#FC6180', '#FFB64D']
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
        $('#revenue-report').peity('bar', {
            fill: ['#93BE52', '#4680ff'],
            padding: 0.2,
            height: 100,
            width: '100%'
        });
        AmCharts.makeChart('world-map-markers', {
            'type': 'map',
            'theme': 'light',
            'hideCredits': true,
            'dataProvider': {
                'map': 'worldLow',
                'zoomLevel': 1,
                'zoomLongitude': 102.6353,
                'zoomLatitude': 0,
            },
            'areasSettings': {
                'unlistedAreasColor': '#fc889f',
                'unlistedAreasAlpha': 0.9
            },
            'zoomControl': {
                'panControlEnabled': false,
                'zoomControlEnabled': false,
                'homeButtonEnabled': false
            },
            'backgroundZoomsToTop': true,
            'linesAboveImages': true
        });
    };
    return DashboardEcommerceComponent;
}());
DashboardEcommerceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard-ecommerce',
        template: __webpack_require__("../../../../../src/app/pages/dashboard/dashboard-ecommerce/dashboard-ecommerce.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/dashboard/dashboard-ecommerce/dashboard-ecommerce.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardEcommerceComponent);

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
//# sourceMappingURL=dashboard-ecommerce.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard-ecommerce/dashboard-ecommerce.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardEcommerceRoutes", function() { return DashboardEcommerceRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardEcommerceModule", function() { return DashboardEcommerceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_ecommerce_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/dashboard-ecommerce/dashboard-ecommerce.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DashboardEcommerceRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_ecommerce_component__["a" /* DashboardEcommerceComponent */],
        data: {
            breadcrumb: 'Ecommerce',
            icon: 'icofont-home bg-c-blue',
            status: false
        }
    }
];
var DashboardEcommerceModule = (function () {
    function DashboardEcommerceModule() {
    }
    return DashboardEcommerceModule;
}());
DashboardEcommerceModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(DashboardEcommerceRoutes),
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__dashboard_ecommerce_component__["a" /* DashboardEcommerceComponent */]]
    })
], DashboardEcommerceModule);

//# sourceMappingURL=dashboard-ecommerce.module.js.map

/***/ })

});
//# sourceMappingURL=dashboard-ecommerce.module.chunk.js.map