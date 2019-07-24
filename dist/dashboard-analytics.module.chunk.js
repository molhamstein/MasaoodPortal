webpackJsonp(["dashboard-analytics.module"],{

/***/ "../../../../../src/app/pages/dashboard/dashboard-analytics/dashboard-analytics.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard-analytics/dashboard-analytics.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <!-- user card start -->\n  <div class=\"col-sm-4\">\n    <div class=\"card bg-c-pink text-white widget-visitor-card\">\n      <div class=\"card-block-small text-center\">\n        <h2>1,658</h2>\n        <h6>Daily user</h6>\n        <i class=\"ti-user\"></i>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-4\">\n    <div class=\"card bg-c-blue text-white widget-visitor-card\">\n      <div class=\"card-block-small text-center\">\n        <h2>5,678</h2>\n        <h6>Daily visitor</h6>\n        <i class=\"icofont icofont-paper\"></i>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-4\">\n    <div class=\"card bg-c-yellow text-white widget-visitor-card\">\n      <div class=\"card-block-small text-center\">\n        <h2>5,678</h2>\n        <h6>Last month visitor</h6>\n        <i class=\"icofont icofont-ui-alarm\"></i>\n      </div>\n    </div>\n  </div>\n  <!-- user card end -->\n\n  <!-- Visitor Chart Start -->\n  <div class=\"col-md-12\">\n    <app-card [title]=\"'Visitors'\" [cardClass]=\"'visitor-chart-card'\" [blockClass]=\"'p-b-40'\">\n      <div id=\"visitor-list-graph\" style=\"width:100%;height:400px;\"></div>\n    </app-card>\n  </div>\n  <!-- Visitor Chart End -->\n\n  <!-- Tasks Sale Start -->\n  <div class=\"col-md-12 col-xl-6 \">\n    <app-card [title]=\"'Today'\" [cardClass]=\"'task-sale-card'\">\n      <div>\n        <h2 class=\"text-c-green d-inline-block m-b-40 f-50 \">23</h2>\n        <div class=\"d-inline-block m-l-5 super \">\n          <p class=\"text-muted  m-b-0 f-w-600 \">Task</p>\n          <p class=\"text-muted  m-b-0 f-w-600 \">Done</p>\n        </div>\n        <div class=\"row \">\n          <div class=\"col-sm-5 \">\n            <h3 class=\"text-muted d-inline-block m-b-40 \">23</h3>\n            <div class=\"d-inline-block m-l-5 top m-t-10\">\n              <p class=\" m-b-0 f-w-600 f-14 text-uppercase\">Today task</p>\n            </div>\n          </div>\n          <div class=\"col-sm-5 \">\n            <h3 class=\"text-muted d-inline-block m-b-40 \">12</h3>\n            <div class=\"d-inline-block m-l-5 top m-t-10\">\n              <p class=\" m-b-0 f-w-600 f-14 text-uppercase\">Pending task</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"b-t-default p-t-20 m-t-5\">\n          <img src=\"assets/images/avatar-3.jpg \" alt=\" \" class=\"img-radius top img-50\">\n          <div class=\"d-inline-block m-l-10 \">\n            <p class=\"text-muted m-b-5\">Most assigned by</p>\n            <span class=\"f-w-600 f-16 text-c-green\">Gregory Durk</span>\n          </div>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <!-- Summery Start -->\n  <div class=\"col-md-12 col-xl-6\">\n    <app-card [title]=\"'Summery'\" [cardClass]=\"'summery-card'\">\n      <div class=\"row\">\n        <div class=\"col-sm-6 b-r-default p-b-30\">\n          <h2 class=\"f-w-600\">13</h2>\n          <p class=\"text-muted f-w-600\">Active users</p>\n          <div class=\"progress\">\n            <div class=\"progress-bar bg-c-blue\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:50%\">\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-6 p-b-30\">\n          <h2 class=\"f-w-600\">28</h2>\n          <p class=\"text-muted f-w-600\">Completed task</p>\n          <div class=\"progress\">\n            <div class=\"progress-bar bg-c-pink\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:50%\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <hr>\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <chart [type]=\"'line'\" [data]=\"summaryChartData\" [options]=\"summaryChartOption\" style=\"height: 80px;\"></chart>\n        </div>\n        <div class=\"col-sm-6\">\n          <h2 class=\"f-w-600\">76</h2>\n          <p class=\"text-muted f-w-600\">Open task</p>\n          <div class=\"progress\">\n            <div class=\"progress-bar bg-c-green\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:50%\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <!-- summary end -->\n  <!-- Tasks Sale End -->\n\n  <!-- Profit Visitor Start -->\n  <div class=\"col-md-6 col-xl-4 \">\n    <div class=\"card \">\n      <div class=\"card-block \">\n        <h2 class=\"text-center f-w-600 \">$45,567</h2>\n        <p class=\"text-center text-muted \">Monthly Profit</p>\n        <div id=\"monthly-profit-1\">\n          5,10,6,4,8,10,6,5,6,3,5,5,10,6,4,8,10,6,3,5,8,2\n        </div>\n        <div class=\"\">\n          <div class=\"row \">\n            <div class=\"col-6 text-center \">\n              <h6 class=\"f-20 f-w-400\">$6,234</h6>\n              <i class=\"icofont icofont-caret-up text-c-blue f-16\"></i>\n              <p class=\"text-muted f-14 d-inline-block m-l-10 m-b-0\">Today</p>\n            </div>\n            <div class=\"col-6 text-center \">\n              <h6 class=\"f-20 f-w-400\">$4,387</h6>\n              <i class=\"icofont icofont-caret-down text-c-blue f-16 \"></i>\n              <p class=\"text-muted f-14 d-inline-block m-l-10 m-b-0 \">\n                Yesterday</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-xl-4 \">\n    <div class=\"card \">\n      <div class=\"card-block \">\n        <h2 class=\"text-center f-w-400 \">2,413</h2>\n        <p class=\"text-center text-muted \">Total Sales</p>\n        <div id=\"monthly-profit-2\">\n          5,10,6,4,8,10,6,5,6,3,5,5,10,6,4,8,10,6,3,5,8,2\n        </div>\n        <div class=\"\">\n          <div class=\"row \">\n            <div class=\"col-6 text-center \">\n              <h6 class=\"f-20 f-w-400\">1578</h6>\n              <i class=\"icofont icofont-caret-down text-c-pink f-16 \"></i>\n              <p class=\"text-muted f-14 d-inline-block m-l-10 m-b-0 \">\n                Today</p>\n            </div>\n            <div class=\"col-6 text-center \">\n              <h6 class=\"f-20 f-w-400\">1028</h6>\n              <i class=\"icofont icofont-caret-up text-c-pink f-16 \"></i>\n              <p class=\"text-muted f-14 d-inline-block m-l-10 m-b-0 \">\n                Yesterday</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-12 col-xl-4 \">\n    <div class=\"card \">\n      <div class=\"card-block \">\n        <h2 class=\"text-center f-w-400 \">8,421</h2>\n        <p class=\"text-center text-muted \">Unique Visitors</p>\n        <div id=\"monthly-profit-3\">\n          5,10,6,4,8,10,6,5,6,3,5,5,10,6,4,8,10,6,3,5,8,2\n        </div>\n        <div class=\"\">\n          <div class=\"row \">\n            <div class=\"col-6 text-center \">\n              <h6 class=\"f-20 f-w-400\">2,849</h6>\n              <i class=\"icofont icofont-caret-up text-c-yellow f-16 \"></i>\n              <p class=\"text-muted f-14 d-inline-block m-l-10 m-b-0 \">\n                Today</p>\n            </div>\n            <div class=\"col-6 text-center \">\n              <h6 class=\"f-20 f-w-400\">3,587</h6>\n              <i class=\"icofont icofont-caret-down text-c-yellow f-16 \"></i>\n              <p class=\"text-muted f-14 d-inline-block m-l-10 m-b-0 \">\n                Yesterday</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Profit Visitor End -->\n\n  <!-- Visitor Map Start -->\n  <div class=\"col-md-12 col-xl-7 \">\n    <app-card [title]=\"'Unique visitors'\" [cardClass]=\"'unique-visitor-card o-hidden'\" [blockClass]=\"'p-0'\">\n      <div class=\"card-block-small\">\n        <div id=\"world-map-visitors\" style=\"width:100%;height:250px;\"></div>\n      </div>\n      <div class=\"card-block-small footer-card\">\n        <div class=\"row justify-content-md-center\">\n          <div class=\"col-md-8\">\n            <div class=\"row text-center p-t-15 p-b-15\">\n              <div class=\"col-sm-6 f-prog\">\n                <p class=\"f-16 m-0 f-w-400\">Visite</p>\n                <span class=\"text-muted\">29,703 Users (40%)</span>\n                <div class=\"progress m-t-10\">\n                  <div class=\"progress-bar bg-c-blue\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:40%\"></div>\n                </div>\n              </div>\n              <div class=\"col-sm-6\">\n                <p class=\"f-16 m-0 f-w-400\">Revenue</p>\n                <span class=\"text-muted\">29,703 Users (60%)</span>\n                <div class=\"progress m-t-10\">\n                  <div class=\"progress-bar bg-c-green\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:60%\"></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-md-12 col-xl-5 \">\n    <div class=\"card view-card\">\n      <div class=\"card-block-big\">\n        <button class=\"btn btn-default btn-icon\"><i class=\"icofont icofont-plus m-0 f-16 f-w-400\"></i></button>\n        <div class=\"text-center m-b-40\">\n          <div class=\"chart-div\">\n            <input type=\"text\" class=\"dial\" value=\"70\" data-width=\"150\" data-height=\"150\" data-thickness=\".2\" data-linecap=\"round\" data-displayprevious=\"true\" data-displayInput=\"true\" data-fgColor=\"#93BE52\" data-angleoffset=\"180\">\n            <div class=\"chart-more-icon\">\n              <span>5</span>\n              <p>MORE</p>\n            </div>\n          </div>\n        </div>\n        <h4 class=\"text-center f-w-600\">Recomended changes</h4>\n        <p class=\"text-center f-w-600 text-muted m-b-40\">Latest update</p>\n        <div class=\"border-img-view p-t-20 text-center\">\n          <a href=\"javascript:\"><img src=\"assets/images/avatar-2.jpg\" placement=\"top\"  ngbTooltip=\"Alia\" class=\"img-40\"></a>\n          <a href=\"javascript:\"><img src=\"assets/images/avatar-3.jpg\" placement=\"top\" ngbTooltip=\"Suzen\" class=\"img-40 m-l-10\"></a>\n          <a href=\"javascript:\"><img src=\"assets/images/avatar-1.jpg\" placement=\"top\" ngbTooltip=\"Lary Doe\" class=\"img-40 m-l-10\"></a>\n          <a href=\"javascript:\"><img src=\"assets/images/avatar-2.jpg\" placement=\"top\" ngbTooltip=\"Josephin Doe\" class=\"img-40 m-l-10\"></a>\n          <button class=\"btn btn-success btn-icon m-l-10\"><i class=\"icofont icofont-plus m-0 f-16 f-w-600\"></i></button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Visitor Map End -->\n\n  <!-- blog  Start -->\n  <div class=\"col-md-12 col-xl-5 \">\n    <div class=\"card bg-c-green green-contain-card \">\n      <div class=\"card-block-big p-t-30 \">\n        <h4 class=\"p-t-20 \">Summer Hits You Need For Your <br> 2017 Playlist</h4>\n      </div>\n      <div class=\"card m-b-0 \">\n        <div class=\" card-block-big p-t-50 p-b-50 \">\n          <img src=\"assets/images/avatar-2.jpg\" alt=\" \" class=\"img-circle img-50 top\">\n          <div class=\"d-inline-block m-l-20 \">\n            <h6 class=\"f-w-600 \">Gregory Doe</h6>\n            <p class=\"text-muted \">CEO of Music shop</p>\n          </div>\n          <span class=\"f-w-600 f-right \">8 min ago</span>\n          <p class=\"text-muted \">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley\n            of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>\n          <div class=\"icon-card d-inline-block \">\n            <i class=\"icofont icofont-share text-muted \"></i>\n            <span class=\"text-muted m-l-10 \">2,578</span>\n          </div>\n          <div class=\"icon-card d-inline-block p-l-20 \">\n            <i class=\"icofont icofont-heart-alt text-c-pink \"></i>\n            <span class=\"text-c-pink m-l-10 \">5,784</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <app-card [title]=\"'Summery'\" [cardClass]=\"'summery-card'\">\n      <div class=\"row\">\n        <div class=\"col-sm-6 b-r-default p-b-40\">\n          <h2 class=\"f-w-600\">13</h2>\n          <p class=\"text-muted f-w-600\">Active users</p>\n          <div class=\"progress\">\n            <div class=\"progress-bar bg-c-blue\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:50%\">\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-6 p-b-40\">\n          <h2 class=\"f-w-600\">28</h2>\n          <p class=\"text-muted f-w-600\">Completed task</p>\n          <div class=\"progress\">\n            <div class=\"progress-bar bg-c-pink\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:50%\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <!-- blog  End -->\n\n  <!-- social  Start -->\n  <div class=\"col-md-12 col-xl-7 \">\n    <app-card [title]=\"'Social network'\" [cardClass]=\"'social-network'\">\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <img src=\"assets/images/widget/icon-1.png \" alt=\" \" class=\"img-responsive p-b-20\">\n          <div class=\"row\">\n            <div class=\"col-5\">\n              <p class=\"text-muted m-b-5\">Views :</p>\n            </div>\n            <div class=\"col-7\">\n              <p class=\"m-b-5 f-w-400\">545,721</p>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-5\">\n              <p class=\"text-muted m-b-5\">Comments :</p>\n            </div>\n            <div class=\"col-7\">\n              <p class=\"m-b-5 f-w-400\">2,256</p>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-5\">\n              <p class=\"text-muted m-b-5\">Likes :</p>\n            </div>\n            <div class=\"col-7\">\n              <p class=\"m-b-5 f-w-400\">4,129</p>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-5\">\n              <p class=\"text-muted m-b-5\">Subscribe :</p>\n            </div>\n            <div class=\"col-7\">\n              <p class=\"m-b-5 f-w-400\">3,451,945</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-6\">\n          <img src=\"assets/images/widget/icon-2.png \" alt=\" \" class=\"img-responsive p-b-20\">\n          <div class=\"row\">\n            <div class=\"col-5\">\n              <p class=\"text-muted m-b-5\">Engagement :</p>\n            </div>\n            <div class=\"col-7\">\n              <p class=\"m-b-5 f-w-400\">1,543</p>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-5\">\n              <p class=\"text-muted m-b-5\">Shares :</p>\n            </div>\n            <div class=\"col-7\">\n              <p class=\"m-b-5 f-w-400\">846</p>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-5\">\n              <p class=\"text-muted m-b-5\">Likes :</p>\n            </div>\n            <div class=\"col-7\">\n              <p class=\"m-b-5 f-w-400\">569</p>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-5\">\n              <p class=\"text-muted m-b-5\">Comments :</p>\n            </div>\n            <div class=\"col-7\">\n              <p class=\"m-b-5 f-w-400\">156</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-6 m-t-0\">\n          <img src=\"assets/images/widget/icon-3.png \" alt=\" \" class=\"img-responsive p-b-10 p-t-10\">\n          <div class=\"row\">\n            <div class=\"col-5\">\n              <p class=\"text-muted m-b-5\">Tweets :</p>\n            </div>\n            <div class=\"col-7\">\n              <p class=\"m-b-5 f-w-400\">103,576</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-6 m-t-0\">\n          <img src=\"assets/images/widget/icon-4.png \" alt=\" \" class=\"img-responsive p-b-10 p-t-10\">\n          <div class=\"row\">\n            <div class=\"col-5\">\n              <p class=\"text-muted m-b-5\">Tweets :</p>\n            </div>\n            <div class=\"col-7\">\n              <p class=\"m-b-5 f-w-400\">103,576</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </app-card>\n    <div class=\"card whether-card\">\n      <div class=\"text-center card-block-big\">\n        <div class=\"row text-center daily-whether\">\n          <div class=\"col-xl-2 col-md-4 col-6\">\n            <div class=\"daily-whether-block\">\n              <h5>Mon</h5>\n              <svg version=\"1.1\" id=\"sun\" class=\"climacon climacon_sun\" viewBox=\"15 15 70 70\">\n                <clipPath id=\"sunFillClip\">\n                  <path d=\"M0,0v100h100V0H0z M50.001,57.999c-4.417,0-8-3.582-8-7.999c0-4.418,3.582-7.999,8-7.999s7.998,3.581,7.998,7.999C57.999,54.417,54.418,57.999,50.001,57.999z\"/>\n                </clipPath>\n                <g class=\"climacon_iconWrap climacon_iconWrap-sun\">\n                  <g class=\"climacon_componentWrap climacon_componentWrap-sun\">\n                    <g class=\"climacon_componentWrap climacon_componentWrap-sunSpoke\">\n                      <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-east\" d=\"M72.03,51.999h-3.998c-1.105,0-2-0.896-2-1.999s0.895-2,2-2h3.998c1.104,0,2,0.896,2,2S73.136,51.999,72.03,51.999z\"/>\n                      <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-northEast\" d=\"M64.175,38.688c-0.781,0.781-2.049,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l2.828-2.828c0.779-0.781,2.047-0.781,2.828,0c0.779,0.781,0.779,2.047,0,2.828L64.175,38.688z\"/>\n                      <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north\" d=\"M50.034,34.002c-1.105,0-2-0.896-2-2v-3.999c0-1.104,0.895-2,2-2c1.104,0,2,0.896,2,2v3.999C52.034,33.106,51.136,34.002,50.034,34.002z\"/>\n                      <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-northWest\" d=\"M35.893,38.688l-2.827-2.828c-0.781-0.781-0.781-2.047,0-2.828c0.78-0.781,2.047-0.781,2.827,0l2.827,2.828c0.781,0.781,0.781,2.047,0,2.828C37.94,39.469,36.674,39.469,35.893,38.688z\"/>\n                      <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-west\" d=\"M34.034,50c0,1.104-0.896,1.999-2,1.999h-4c-1.104,0-1.998-0.896-1.998-1.999s0.896-2,1.998-2h4C33.14,48,34.034,48.896,34.034,50z\"/>\n                      <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-southWest\" d=\"M35.893,61.312c0.781-0.78,2.048-0.78,2.827,0c0.781,0.78,0.781,2.047,0,2.828l-2.827,2.827c-0.78,0.781-2.047,0.781-2.827,0c-0.781-0.78-0.781-2.047,0-2.827L35.893,61.312z\"/>\n                      <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-south\" d=\"M50.034,65.998c1.104,0,2,0.895,2,1.999v4c0,1.104-0.896,2-2,2c-1.105,0-2-0.896-2-2v-4C48.034,66.893,48.929,65.998,50.034,65.998z\"/>\n                      <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-southEast\" d=\"M64.175,61.312l2.828,2.828c0.779,0.78,0.779,2.047,0,2.827c-0.781,0.781-2.049,0.781-2.828,0l-2.828-2.827c-0.781-0.781-0.781-2.048,0-2.828C62.126,60.531,63.392,60.531,64.175,61.312z\"/>\n                    </g>\n                    <g class=\"climacon_componentWrap climacon_componentWrap_sunBody\" clip-path=\"url(#sunFillClip)\">\n                      <circle class=\"climacon_component climacon_component-stroke climacon_component-stroke_sunBody\" cx=\"50.034\" cy=\"50\" r=\"11.999\"/>\n                    </g>\n                  </g>\n                </g>\n              </svg>\n              <h5>63°</h5>\n            </div>\n          </div>\n          <div class=\"col-xl-2 col-md-4 col-6\">\n            <div class=\"daily-whether-block\">\n              <h5>Tue</h5>\n              <svg version=\"1.1\" id=\"cloudHailAltMoon\" class=\"climacon climacon_cloudHailAltMoon\" viewBox=\"15 15 70 70\">\n                <clipPath id=\"cloudFillClip\">\n                  <path d=\"M15,15v70h70V15H15z M59.943,61.639c-3.02,0-12.381,0-15.999,0c-6.626,0-11.998-5.371-11.998-11.998c0-6.627,5.372-11.999,11.998-11.999c5.691,0,10.434,3.974,11.665,9.29c1.252-0.81,2.733-1.291,4.334-1.291c4.418,0,8,3.582,8,8C67.943,58.057,64.361,61.639,59.943,61.639z\"/>\n                </clipPath>\n                <clipPath id=\"moonCloudFillClip\">\n                  <path d=\"M0,0v100h100V0H0z M60.943,46.641c-4.418,0-7.999-3.582-7.999-7.999c0-3.803,2.655-6.979,6.211-7.792c0.903,4.854,4.726,8.676,9.579,9.58C67.922,43.986,64.745,46.641,60.943,46.641z\"/>\n                </clipPath>\n                <g class=\"climacon_iconWrap climacon_iconWrap-cloudHailAltMoon\">\n                  <g clip-path=\"url(#cloudFillClip)\">\n                    <g class=\"climacon_wrapperComponent climacon_wrapperComponent-moon climacon_componentWrap-moon_cloud\">\n                      <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_sunBody\" d=\"M61.023,50.641c-6.627,0-11.999-5.372-11.999-11.998c0-6.627,5.372-11.999,11.999-11.999c0.755,0,1.491,0.078,2.207,0.212c-0.132,0.576-0.208,1.173-0.208,1.788c0,4.418,3.582,7.999,8,7.999c0.614,0,1.212-0.076,1.788-0.208c0.133,0.717,0.211,1.452,0.211,2.208C73.021,45.269,67.649,50.641,61.023,50.641z\"/>\n                      <path class=\"climacon_component climacon_component-fill climacon_component-fill_moon\" fill=\"#FFFFFF\" d=\"M59.235,30.851c-3.556,0.813-6.211,3.989-6.211,7.792c0,4.417,3.581,7.999,7.999,7.999c3.802,0,6.979-2.655,7.791-6.211C63.961,39.527,60.139,35.705,59.235,30.851z\"/>\n                    </g>\n                  </g>\n                  <g class=\"climacon_wrapperComponent climacon_wrapperComponent-hailAlt\">\n                    <g class=\"climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-left\">\n                      <circle cx=\"42\" cy=\"65.498\" r=\"2\"/>\n                    </g>\n                    <g class=\"climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-middle\">\n                      <circle cx=\"49.999\" cy=\"65.498\" r=\"2\"/>\n                    </g>\n                    <g class=\"climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-right\">\n                      <circle cx=\"57.998\" cy=\"65.498\" r=\"2\"/>\n                    </g>\n                    <g class=\"climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-left\">\n                      <circle cx=\"42\" cy=\"65.498\" r=\"2\"/>\n                    </g>\n                    <g class=\"climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-middle\">\n                      <circle cx=\"49.999\" cy=\"65.498\" r=\"2\"/>\n                    </g>\n                    <g class=\"climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-right\">\n                      <circle cx=\"57.998\" cy=\"65.498\" r=\"2\"/>\n                    </g>\n                  </g>\n                  <g class=\"climacon_wrapperComponent climacon_wrapperComponent-cloud\" clip-path=\"url(#cloudFillClip)\">\n                    <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_cloud\" d=\"M63.999,64.941v-4.381c2.39-1.384,3.999-3.961,3.999-6.92c0-4.417-3.581-8-7.998-8c-1.602,0-3.084,0.48-4.334,1.291c-1.23-5.317-5.974-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,11.998c0,3.549,1.55,6.728,3.999,8.924v4.916c-4.776-2.768-7.998-7.922-7.998-13.84c0-8.835,7.162-15.997,15.997-15.997c6.004,0,11.229,3.311,13.966,8.203c0.663-0.113,1.336-0.205,2.033-0.205c6.626,0,11.998,5.372,11.998,12C71.998,58.863,68.656,63.293,63.999,64.941z\"/>\n                  </g>\n                </g>\n              </svg>\n              <h5>63°</h5>\n            </div>\n          </div>\n          <div class=\"col-xl-2 col-md-4 col-6\">\n            <div class=\"daily-whether-block\">\n              <h5>Wed</h5>\n              <svg version=\"1.1\" id=\"cloudLightning\" class=\"climacon climacon_cloudLightning\" viewBox=\"15 15 70 70\">\n                <g class=\"climacon_iconWrap climacon_iconWrap-cloudLightning\">\n                  <g class=\"climacon_wrapperComponent climacon_wrapperComponent-lightning\">\n                    <polygon class=\"climacon_component climacon_component-stroke climacon_component-stroke_lightning\" points=\"48.001,51.641 57.999,51.641 52,61.641 58.999,61.641 46.001,77.639 49.601,65.641 43.001,65.641 \"/>\n                  </g>\n                  <g class=\"climacon_wrapperComponent climacon_wrapperComponent-cloud\">\n                    <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_cloud\" d=\"M59.999,65.641c-0.28,0-0.649,0-1.062,0l3.584-4.412c3.182-1.057,5.478-4.053,5.478-7.588c0-4.417-3.581-7.998-7.999-7.998c-1.602,0-3.083,0.48-4.333,1.29c-1.231-5.316-5.974-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,12c0,5.446,3.632,10.039,8.604,11.503l-1.349,3.777c-6.52-2.021-11.255-8.098-11.255-15.282c0-8.835,7.163-15.999,15.998-15.999c6.004,0,11.229,3.312,13.965,8.204c0.664-0.114,1.338-0.205,2.033-0.205c6.627,0,11.999,5.37 ,11.999,11.999C71.999,60.268,66.626,65.641,59.999,65.641z\"/>\n                  </g>\n                </g>\n              </svg>\n              <h5>63°</h5>\n            </div>\n          </div>\n          <div class=\"col-xl-2 col-md-4 col-6\">\n            <div class=\"daily-whether-block\">\n              <h5>Thu</h5>\n              <svg version=\"1.1\" id=\"cloudSun\" class=\"climacon climacon_cloudSun\" viewBox=\"15 15 70 70\">\n                <clipPath id=\"cloudFillClip\">\n                  <path d=\"M15,15v70h70V15H15z M59.943,61.639c-3.02,0-12.381,0-15.999,0c-6.626,0-11.998-5.371-11.998-11.998c0-6.627,5.372-11.999,11.998-11.999c5.691,0,10.434,3.974,11.665,9.29c1.252-0.81,2.733-1.291,4.334-1.291c4.418,0,8,3.582,8,8C67.943,58.057,64.361,61.639,59.943,61.639z\"/>\n                </clipPath>\n                <clipPath id=\"sunCloudFillClip\">\n                  <path d=\"M15,15v70h70V15H15z M57.945,49.641c-4.417,0-8-3.582-8-7.999c0-4.418,3.582-7.999,8-7.999s7.998,3.581,7.998,7.999C65.943,46.059,62.362,49.641,57.945,49.641z\"/>\n                </clipPath>\n                <g class=\"climacon_iconWrap climacon_cloudSun-iconWrap\">\n                  <g clip-path=\"url(#cloudFillClip)\">\n                    <g class=\"climacon_componentWrap climacon_componentWrap-sun climacon_componentWrap-sun_cloud\"  >\n                      <g class=\"climacon_componentWrap climacon_componentWrap_sunSpoke\">\n                        <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-orth\" d=\"M80.029,43.611h-3.998c-1.105,0-2-0.896-2-1.999s0.895-2,2-2h3.998c1.104,0,2,0.896,2,2S81.135,43.611,80.029,43.611z\"/>\n                        <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north\" d=\"M72.174,30.3c-0.781,0.781-2.049,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l2.828-2.828c0.779-0.781,2.047-0.781,2.828,0c0.779,0.781,0.779,2.047,0,2.828L72.174,30.3z\"/>\n                        <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north\" d=\"M58.033,25.614c-1.105,0-2-0.896-2-2v-3.999c0-1.104,0.895-2,2-2c1.104,0,2,0.896,2,2v3.999C60.033,24.718,59.135,25.614,58.033,25.614z\"/>\n                        <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north\" d=\"M43.892,30.3l-2.827-2.828c-0.781-0.781-0.781-2.047,0-2.828c0.78-0.781,2.047-0.781,2.827,0l2.827,2.828c0.781,0.781,0.781,2.047,0,2.828C45.939,31.081,44.673,31.081,43.892,30.3z\"/>\n                        <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north\" d=\"M42.033,41.612c0,1.104-0.896,1.999-2,1.999h-4c-1.104,0-1.998-0.896-1.998-1.999s0.896-2,1.998-2h4C41.139,39.612,42.033,40.509,42.033,41.612z\"/>\n                        <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north\" d=\"M43.892,52.925c0.781-0.78,2.048-0.78,2.827,0c0.781,0.78,0.781,2.047,0,2.828l-2.827,2.827c-0.78,0.781-2.047,0.781-2.827,0c-0.781-0.78-0.781-2.047,0-2.827L43.892,52.925z\"/>\n                        <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north\" d=\"M58.033,57.61c1.104,0,2,0.895,2,1.999v4c0,1.104-0.896,2-2,2c-1.105,0-2-0.896-2-2v-4C56.033,58.505,56.928,57.61,58.033,57.61z\"/>\n                        <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north\" d=\"M72.174,52.925l2.828,2.828c0.779,0.78,0.779,2.047,0,2.827c-0.781,0.781-2.049,0.781-2.828,0l-2.828-2.827c-0.781-0.781-0.781-2.048,0-2.828C70.125,52.144,71.391,52.144,72.174,52.925z\"/>\n                      </g>\n                      <g class=\"climacon_wrapperComponent climacon_wrapperComponent-sunBody\" clip-path=\"url(#sunCloudFillClip)\">\n                        <circle class=\"climacon_component climacon_component-stroke climacon_component-stroke_sunBody\" cx=\"58.033\" cy=\"41.612\" r=\"11.999\"/>\n                      </g>\n                    </g>\n                  </g>\n                  <g class=\"climacon_wrapperComponent climacon_wrapperComponent-cloud\" clip-path=\"url(#cloudFillClip)\">\n                    <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_cloud\" d=\"M44.033,65.641c-8.836,0-15.999-7.162-15.999-15.998c0-8.835,7.163-15.998,15.999-15.998c6.006,0,11.233,3.312,13.969,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,6.625-5.371,11.998-11.998,11.998C57.26,65.641,47.23,65.641,44.033,65.641z\"/>\n                  </g>\n                </g>\n              </svg>\n              <h5>63°</h5>\n            </div>\n          </div>\n          <div class=\"col-xl-2 col-md-4 col-6\">\n            <h5>Sat</h5>\n            <svg version=\"1.1\" id=\"cloudRain\" class=\"climacon climacon_cloudRain\" viewBox=\"15 15 70 70\">\n              <clipPath id=\"cloudFillClip\">\n                <path d=\"M15,15v70h70V15H15z M59.943,61.639c-3.02,0-12.381,0-15.999,0c-6.626,0-11.998-5.371-11.998-11.998c0-6.627,5.372-11.999,11.998-11.999c5.691,0,10.434,3.974,11.665,9.29c1.252-0.81,2.733-1.291,4.334-1.291c4.418,0,8,3.582,8,8C67.943,58.057,64.361,61.639,59.943,61.639z\"></path>\n              </clipPath>\n              <g class=\"climacon_iconWrap climacon_iconWrap-cloudRain\">\n                <g class=\"climacon_wrapperComponent climacon_wrapperComponent-rain\">\n                  <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- left\" d=\"M41.946,53.641c1.104,0,1.999,0.896,1.999,2v15.998c0,1.105-0.895,2-1.999,2s-2-0.895-2-2V55.641C39.946,54.537,40.842,53.641,41.946,53.641z\"></path>\n                  <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- middle\" d=\"M49.945,57.641c1.104,0,2,0.896,2,2v15.998c0,1.104-0.896,2-2,2s-2-0.896-2-2V59.641C47.945,58.535,48.841,57.641,49.945,57.641z\"></path>\n                  <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- right\" d=\"M57.943,53.641c1.104,0,2,0.896,2,2v15.998c0,1.105-0.896,2-2,2c-1.104,0-2-0.895-2-2V55.641C55.943,54.537,56.84,53.641,57.943,53.641z\"></path>\n                  <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- left\" d=\"M41.946,53.641c1.104,0,1.999,0.896,1.999,2v15.998c0,1.105-0.895,2-1.999,2s-2-0.895-2-2V55.641C39.946,54.537,40.842,53.641,41.946,53.641z\"></path>\n                  <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- middle\" d=\"M49.945,57.641c1.104,0,2,0.896,2,2v15.998c0,1.104-0.896,2-2,2s-2-0.896-2-2V59.641C47.945,58.535,48.841,57.641,49.945,57.641z\"></path>\n                  <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- right\" d=\"M57.943,53.641c1.104,0,2,0.896,2,2v15.998c0,1.105-0.896,2-2,2c-1.104,0-2-0.895-2-2V55.641C55.943,54.537,56.84,53.641,57.943,53.641z\"></path>\n                </g>\n                <g class=\"climacon_wrapperComponent climacon_wrapperComponent_cloud\" clip-path=\"url(#cloudFillClip)\">\n                  <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_cloud\" d=\"M63.943,64.941v-4.381c2.389-1.384,4-3.961,4-6.92c0-4.417-3.582-8-8-8c-1.601,0-3.082,0.48-4.334,1.291c-1.23-5.317-5.973-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,11.998c0,3.549,1.551,6.728,4,8.924v4.916c-4.777-2.768-8-7.922-8-13.84c0-8.835,7.163-15.997,15.998-15.997c6.004,0,11.229,3.311,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.372,11.998,12C71.941,58.863,68.602,63.293,63.943,64.941z\">\n                  </path>\n                </g>\n              </g>\n            </svg>\n            <h5>63°</h5>\n          </div>\n          <div class=\"col-xl-2 col-md-4 col-6\">\n            <h5>Sun</h5>\n            <svg version=\"1.1\" id=\"cloudFogMoonAlt\" class=\"climacon climacon_cloudFogMoonAlt\" viewBox=\"15 15 70 70\">\n              <clipPath id=\"moonCloudFillClip\">\n                <path d=\"M0,0v100h100V0H0z M60.943,46.641c-4.418,0-7.999-3.582-7.999-7.999c0-3.803,2.655-6.979,6.211-7.792c0.903,4.854,4.726,8.676,9.579,9.58C67.922,43.986,64.745,46.641,60.943,46.641z\"></path>\n              </clipPath>\n              <clipPath id=\"newMoonCloudFillClip\">\n                <path d=\"M15,15v70h70V15H15z M59.943,65.638c-2.775,0-12.801,0-15.998,0c-8.836,0-15.998-7.162-15.998-15.998c0-8.835,7.162-15.998,15.998-15.998c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12C71.941,60.265,66.57,65.638,59.943,65.638z\"></path>\n              </clipPath>\n              <g class=\"climacon_iconWrap climacon_iconWrap-cloudFogMoon\">\n                <g clip-path=\"url(#newMoonCloudFillClip)\">\n                  <g class=\"climacon_wrapperComponent climacon_wrapperComponent-moon climacon_componentWrap-moon_cloud\" clip-path=\"url(#moonCloudFillClip)\">\n                    <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_sunBody\" d=\"M61.023,50.641c-6.627,0-11.999-5.372-11.999-11.998c0-6.627,5.372-11.999,11.999-11.999c0.755,0,1.491,0.078,2.207,0.212c-0.132,0.576-0.208,1.173-0.208,1.788c0,4.418,3.582,7.999,8,7.999c0.614,0,1.212-0.076,1.788-0.208c0.133,0.717,0.211,1.452,0.211,2.208C73.021,45.269,67.649,50.641,61.023,50.641z\"></path>\n                  </g>\n                </g>\n                <g class=\"climacon_wrapperComponent climacon_wrapperComponent-Fog\">\n                  <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_fogLine\" d=\"M29.177,55.641c-0.262-0.646-0.473-1.314-0.648-2h43.47c0,0.685-0.069,1.349-0.181,2H29.177z\"></path>\n                  <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_fogLine\" d=\"M36.263,35.643c2.294-1.271,4.93-1.999,7.738-1.999c2.806,0,5.436,0.73,7.728,1.999H36.263z\"></path>\n                  <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_fogLine\" d=\"M28.142,47.642c0.085-0.682,0.218-1.347,0.387-1.999h40.396c0.552,0.613,1.039,1.281,1.455,1.999H28.142z\"></path>\n                  <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_fogLine\" d=\"M29.177,43.643c0.281-0.693,0.613-1.359,0.984-2h27.682c0.04,0.068,0.084,0.135,0.123,0.205c0.664-0.114,1.339-0.205,2.033-0.205c2.451,0,4.729,0.738,6.627,2H29.177z\"></path>\n                  <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_fogLine\" d=\"M31.524,39.643c0.58-0.723,1.225-1.388,1.92-2h21.123c0.689,0.61,1.326,1.28,1.902,2H31.524z\"></path>\n                  <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_fogLine\" d=\"M71.816,51.641H28.142c-0.082-0.656-0.139-1.32-0.139-1.999h43.298C71.527,50.285,71.702,50.953,71.816,51.641z\"></path>\n                  <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_fogLine\" d=\"M71.301,57.641c-0.246,0.699-0.555,1.367-0.921,2H31.524c-0.505-0.629-0.957-1.299-1.363-2H71.301z\"></path>\n                  <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_fogLine\" d=\"M33.444,61.641h35.48c-0.68,0.758-1.447,1.435-2.299,2H36.263C35.247,63.078,34.309,62.4,33.444,61.641z\"></path>\n                </g>\n              </g>\n            </svg>\n            <h5>63°</h5>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-footer card-bg-inverce text-white\">\n        <div class=\"card-block-small\">\n          <div class=\"row\">\n            <div class=\"col-md-8\">\n              <h4>California USA <small>Yesterday, 12th May 2017</small></h4>\n              <h5 class=\"text-white\">Hot &amp; Sunny</h5>\n              <i class=\"icofont icofont-clouds f-20 m-r-10 text-muted\"></i>\n              <h5 class=\"text-white\">57 MPH</h5>\n            </div>\n            <div class=\"col-md-4\">\n              <i class=\"icofont icofont-clouds f-60 text-muted\"></i>\n              <div class=\"d-inline-block m-l-10\">\n                <h5 class=\"text-white\">Currently</h5>\n\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- social  End -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard-analytics/dashboard-analytics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardAnalyticsComponent; });
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









var DashboardAnalyticsComponent = (function () {
    function DashboardAnalyticsComponent() {
        this.summaryChartData = buildChartJS('#93BE52', [66, 60, 50, 55, 20, 55, 10, 35, 15, 25], '#fff', 'transparent');
        this.summaryChartOption = buildChartOption();
    }
    DashboardAnalyticsComponent.prototype.ngOnInit = function () {
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
        $('#monthly-profit-1').peity('line', {
            fill: 'rgba(70, 128, 254,0.2)',
            stroke: 'rgb(70, 128, 254)',
            height: 30,
            width: '100%'
        });
        $('#monthly-profit-2').peity('line', {
            fill: 'rgba(252, 97, 128,0.2)',
            stroke: 'rgb(252, 97, 128)',
            height: 30,
            width: '100%'
        });
        $('#monthly-profit-3').peity('line', {
            fill: 'rgba(255, 182, 77,0.2)',
            stroke: 'rgb(255, 182, 77)',
            height: 30,
            width: '100%'
        });
        $('.dial').knob({
            draw: function () {
                // 'tron' case
                if (this.$.data('skin') === 'tron') {
                    this.cursorExt = 0.3;
                    var a = this.arc(this.cv);
                    var pa = void 0;
                    var r = 1;
                    this.g.lineWidth = this.lineWidth;
                    if (this.o.displayPrevious) {
                        pa = this.arc(this.v);
                        this.g.beginPath();
                        this.g.strokeStyle = this.pColor;
                        this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, pa.s, pa.e, pa.d);
                        this.g.stroke();
                    }
                    this.g.beginPath();
                    this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
                    this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d);
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
        var targetSVG = 'M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17';
        targetSVG += ',2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067';
        targetSVG += ',5.5,9,5.5 S12.5,7.067,12.5,9z';
        AmCharts.makeChart('world-map-visitors', {
            'type': 'map',
            'projection': 'winkel3',
            'hideCredits': true,
            'theme': 'light',
            'imagesSettings': {
                'rollOverColor': '#FC6180',
                'rollOverScale': 3,
                'selectedScale': 3,
                'selectedColor': '#FC6180',
                'color': '#FC6180'
            },
            'areasSettings': {
                'unlistedAreasColor': '#4680ff',
                'outlineThickness': 0.1
            },
            'dataProvider': {
                'map': 'worldLow',
                'zoomLevel': 1,
                'zoomLongitude': 30,
                'zoomLatitude': 10,
                'images': [{
                        'svgPath': targetSVG,
                        'zoomLevel': 3,
                        'scale': 1,
                        'title': 'United State',
                        'latitude': 50.6353,
                        'longitude': 120.2250
                    }]
            },
            'zoomControl': {
                'panControlEnabled': false,
                'zoomControlEnabled': false,
                'homeButtonEnabled': false
            },
            'export': {
                'enabled': true
            }
        });
    };
    return DashboardAnalyticsComponent;
}());
DashboardAnalyticsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard-analytics',
        template: __webpack_require__("../../../../../src/app/pages/dashboard/dashboard-analytics/dashboard-analytics.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/dashboard/dashboard-analytics/dashboard-analytics.component.css"), __webpack_require__("../../../../../src/assets/icon/svg-animated/svg-weather.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [])
], DashboardAnalyticsComponent);

function buildChartJS(a, b, f, c) {
    if (f == null) {
        f = 'rgba(0,0,0,0)';
    }
    return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        datasets: [{
                label: '',
                borderColor: a,
                borderWidth: 2,
                hitRadius: 30,
                pointHoverRadius: 4,
                pointBorderWidth: 50,
                pointHoverBorderWidth: 12,
                pointBackgroundColor: c,
                pointBorderColor: 'transparent',
                pointHoverBackgroundColor: a,
                pointHoverBorderColor: 'rgba(0,0,0,0.5)',
                fill: true,
                backgroundColor: f,
                data: b,
            }]
    };
}
function buildChartOption() {
    return {
        title: {
            display: false
        },
        tooltips: {
            enabled: true,
            intersect: false,
            mode: 'nearest',
            xPadding: 10,
            yPadding: 10,
            caretPadding: 10
        },
        legend: {
            display: false,
            labels: {
                usePointStyle: false
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        hover: {
            mode: 'index'
        },
        scales: {
            xAxes: [{
                    display: false,
                    gridLines: false,
                    scaleLabel: {
                        display: true,
                        labelString: 'Month'
                    }
                }],
            yAxes: [{
                    display: false,
                    gridLines: false,
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }]
        },
        elements: {
            point: {
                radius: 4,
                borderWidth: 12
            }
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 5,
                bottom: 0
            }
        }
    };
}
//# sourceMappingURL=dashboard-analytics.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard-analytics/dashboard-analytics.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardAnalyticsRoutes", function() { return DashboardAnalyticsRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardAnalyticsModule", function() { return DashboardAnalyticsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_analytics_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/dashboard-analytics/dashboard-analytics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__ = __webpack_require__("../../../../angular2-chartjs/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DashboardAnalyticsRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_analytics_component__["a" /* DashboardAnalyticsComponent */],
        data: {
            breadcrumb: 'Analytics',
            icon: 'icofont-home bg-c-blue',
            status: false
        }
    }
];
var DashboardAnalyticsModule = (function () {
    function DashboardAnalyticsModule() {
    }
    return DashboardAnalyticsModule;
}());
DashboardAnalyticsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(DashboardAnalyticsRoutes),
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__["ChartModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__dashboard_analytics_component__["a" /* DashboardAnalyticsComponent */]]
    })
], DashboardAnalyticsModule);

//# sourceMappingURL=dashboard-analytics.module.js.map

/***/ })

});
//# sourceMappingURL=dashboard-analytics.module.chunk.js.map