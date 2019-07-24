webpackJsonp(["widget-chart.module"],{

/***/ "../../../../../src/app/pages/widget/widget-chart/widget-chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/widget/widget-chart/widget-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card amount-card o-hidden\">\n      <div class=\"card-block\">\n        <h2 class=\"f-w-400\">$23,567</h2>\n        <p class=\"text-muted f-w-400 f-16\"><span\n          class=\"text-c-blue\">Amount</span> processed</p>\n      </div>\n      <span id=\"amount-processed\">0,10,22,15,38,42,48,32,30,40,58,70</span>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card amount-card o-hidden\">\n      <div class=\"card-block\">\n        <h2 class=\"f-w-400\">$14,552</h2>\n        <p class=\"text-muted f-w-400 f-16\"><span\n          class=\"text-c-pink\">Amount</span> spent</p>\n      </div>\n      <span id=\"amount-spent\">0,15,18,10,30,35,50,35,40,40,58,60</span>\n    </div>\n  </div>\n  <div class=\"col-md-12 col-xl-4\">\n    <div class=\"card amount-card o-hidden\">\n      <div class=\"card-block\">\n        <h2 class=\"f-w-400\">$31,156</h2>\n        <p class=\"text-muted f-w-400 f-16\"><span class=\"text-c-yellow\">Profit</span>\n          processed</p>\n      </div>\n      <span id=\"profit-processed\">0,25,8,10,35,30,50,35,40,20,60,30</span>\n    </div>\n  </div>\n\n  <!-- Profit Visitor Start -->\n  <div class=\"col-md-6 col-xl-4 \">\n    <div class=\"card \">\n      <div class=\"card-block \">\n        <h2 class=\"text-center f-w-600 \">$45,567</h2>\n        <p class=\"text-center text-muted \">Monthly Profit</p>\n        <div id=\"monthlyprofit-1\">\n          5,10,6,4,8,10,6,5,6,3,5,5,10,6,4,8,10,6,3,5,8,2\n        </div>\n        <div class=\"\">\n          <div class=\"row \">\n            <div class=\"col-6 text-center \">\n              <h6 class=\"f-20 f-w-600\">$6,234</h6>\n              <i class=\"icofont icofont-caret-down text-c-blue f-16\"></i>\n              <p class=\"text-muted f-14 d-inline-block m-l-10 m-b-0\">Today</p>\n            </div>\n            <div class=\"col-6 text-center \">\n              <h6 class=\"f-20 f-w-600\">$4,387</h6>\n              <i class=\"icofont icofont-caret-down text-c-blue f-16 \"></i>\n              <p class=\"text-muted f-14 d-inline-block m-l-10 m-b-0 \">\n                Yesterday</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-xl-4 \">\n    <div class=\"card \">\n      <div class=\"card-block \">\n        <h2 class=\"text-center f-w-600 \">2,413</h2>\n        <p class=\"text-center text-muted \">Total Sales</p>\n        <div id=\"monthlyprofit-2\">\n          5,10,6,4,8,10,6,5,6,3,5,5,10,6,4,8,10,6,3,5,8,2\n        </div>\n        <div class=\"\">\n          <div class=\"row \">\n            <div class=\"col-6 text-center \">\n              <h6 class=\"f-20 f-w-600\">1578</h6>\n              <i class=\"icofont icofont-caret-down text-c-pink f-16 \"></i>\n              <p class=\"text-muted f-14 d-inline-block m-l-10 m-b-0 \">\n                Today</p>\n            </div>\n            <div class=\"col-6 text-center \">\n              <h6 class=\"f-20 f-w-600\">1028</h6>\n              <i class=\"icofont icofont-caret-down text-c-pink f-16 \"></i>\n              <p class=\"text-muted f-14 d-inline-block m-l-10 m-b-0 \">\n                Yesterday</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>f\n  </div>\n  <div class=\"col-md-12 col-xl-4 \">\n    <div class=\"card \">\n      <div class=\"card-block \">\n        <h2 class=\"text-center f-w-600 \">8,421</h2>\n        <p class=\"text-center text-muted \">Unique Visitors</p>\n        <div id=\"monthlyprofit-3\">\n          5,10,6,4,8,10,6,5,6,3,5,5,10,6,4,8,10,6,3,5,8,2\n        </div>\n        <div class=\"\">\n          <div class=\"row \">\n            <div class=\"col-6 text-center \">\n              <h6 class=\"f-20 f-w-600\">2,849</h6>\n              <i class=\"icofont icofont-caret-down text-c-yellow f-16 \"></i>\n              <p class=\"text-muted f-14 d-inline-block m-l-10 m-b-0 \">\n                Today</p>\n            </div>\n            <div class=\"col-6 text-center \">\n              <h6 class=\"f-20 f-w-600\">3,587</h6>\n              <i class=\"icofont icofont-caret-down text-c-yellow f-16 \"></i>\n              <p class=\"text-muted f-14 d-inline-block m-l-10 m-b-0 \">\n                Yesterday</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Profit Visitor End -->\n\n  <!-- Status Revenue Start -->\n  <div class=\"col-md-12 col-xl-6 \">\n    <app-card [title]=\"'Revenue status'\" [cardClass]=\"'status-revenue-card'\">\n      <div class=\"row \">\n        <div class=\"col-sm-6 b-r-default \">\n          <div class=\"row status-rev-chart\">\n            <div class=\"col-sm-6 m-b-40\">\n              <div id=\"revenue-status-d-graph\">5,2,7,4,3,2,5</div>\n            </div>\n            <div class=\"col-sm-6 text-right\">\n              <i class=\"icofont icofont-caret-down text-muted f-16 \"></i>\n              <p class=\"text-muted f-16 d-inline-block f-w-600 m-l-10 m-b-0 \">+1.6%</p>\n            </div>\n          </div>\n          <h2>$27,674</h2>\n          <p class=\"text-muted m-b-0 f-w-600 \">Revenue daily</p>\n        </div>\n        <div class=\"col-sm-6 \">\n          <div class=\"row status-rev-chart\">\n            <div class=\"col-sm-6 m-b-30\">\n              <div id=\"revenue-status-w-graph\">5,2,7,4,3,2,5</div>\n            </div>\n            <div class=\"col-sm-6 text-right\">\n              <i class=\"icofont icofont-caret-down text-muted f-16 \"></i>\n              <p class=\"text-muted f-16 d-inline-block f-w-600 m-l-10 m-b-0 \">\n                - 0.9%</p>\n            </div>\n          </div>\n          <h2>17,563</h2>\n          <p class=\"text-muted m-b-0 f-w-600 \">Revenue weekly</p>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-md-6 col-xl-3\">\n    <div class=\"card card-block text-center\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-md-12\">\n          <h5>New users</h5>\n        </div>\n        <div class=\"col-md-8\">\n          <div id=\"new-user-daily\">5,2,7,4,3,2,6,4,8</div>\n        </div>\n        <div class=\"col-md-12\">\n          <div class=\"text-center\">\n            <h4 class=\"f-w-600 f-20 m-t-10 \">4,567 Daily</h4>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-xl-3\">\n    <div class=\"card card-block text-center\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-md-12\">\n          <h5>Page views</h5>\n        </div>\n        <div class=\"col-md-8\">\n          <div id=\"page-views-today\">5,2,7,4,3,2,6,4,8</div>\n        </div>\n        <div class=\"col-md-12\">\n          <div class=\"text-center \">\n            <h4 class=\"f-w-600 f-20 m-t-10\">3,562 Today</h4>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Status Revenue End -->\n\n  <!-- Email Sent Start -->\n  <div class=\"col-md-12\">\n    <app-card [title]=\"'Email sent'\" [cardClass]=\"'email-sent-card'\">\n      <div id=\"email-sent\" style=\"max-width:100%;height:400px;\"></div>\n    </app-card>\n  </div>\n  <!-- Email Sent End -->\n\n  <!-- Statestics Start -->\n  <div class=\"col-md-12 col-xl-12\">\n    <app-card [title]=\"'Statestics'\">\n      <div class=\"row\">\n        <div class=\"col-md-8\">\n          <div class=\"line-example\">\n            <div id=\"statestics-chart\" style=\" height:300px;\"></div>\n          </div>\n        </div>\n        <div class=\"col-md-4 text-center\">\n          <div id=\"invoice\" style=\" height:300px;\"></div>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <!-- Statestics End -->\n\n  <!-- Monthly view Start -->\n  <div class=\"col-md-12 col-xl-7 \">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <div class=\"card-header-left \">\n          <h5>Monthly view</h5>\n        </div>\n      </div>\n      <div class=\"card-block-big\">\n        <div id=\"monthly-graph\" style=\"height:250px\"></div>\n        <div id=\"monthly-view\">\n          <h4 class=\"text-center f-w-600 f-20 m-b-20\">November 2017</h4>\n          <div class=\"row\">\n            <div class=\"col-sm-6 b-r-default\">\n              <h4 class=\"f-w-600\">2,874</h4>\n              <p class=\"text-muted f-16\">New Students</p>\n            </div>\n            <div class=\"col-sm-6 text-right\">\n              <h4 class=\"f-w-600\">1,628</h4>\n              <p class=\"text-muted f-16\">Graduate</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-12 col-xl-5 \">\n    <div class=\"card view-card\">\n      <div class=\"card-block-big\">\n        <button class=\"btn btn-default btn-icon\"><i class=\"icofont icofont-plus m-0 f-16 f-w-600\"></i></button>\n        <div class=\"text-center m-b-40\">\n          <div class=\"chart-div\">\n            <input type=\"text\" class=\"dial\" value=\"70\" data-width=\"150\" data-height=\"150\" data-thickness=\".2\" data-linecap=\"round\" data-displayprevious=\"true\" data-displayInput=\"true\" data-fgColor=\"#93BE52\" data-angleoffset=\"180\">\n            <div class=\"chart-more-icon\">\n              <span>5</span>\n              <p>MORE</p>\n            </div>\n          </div>\n        </div>\n        <h4 class=\"text-center f-w-600\">Recomended changes</h4>\n        <p class=\"text-center f-w-600 text-muted m-b-40\">Latest update</p>\n        <div class=\"border-img-view p-t-40 text-center\">\n          <a href=\"javascript: \"><img class=\"img-50\" src=\"assets/images/avatar-3.jpg\" placement=\"top\" ngbTooltip=\"Anari\" alt=\"\" ></a>\n          <a href=\"javascript: \"><img class=\"img-50\" src=\"assets/images/avatar-1.jpg\" placement=\"top\" ngbTooltip=\"Suwtz\" alt=\"\" class=\"m-l-10 \"></a>\n          <a href=\"javascript: \"><img class=\"img-50\" src=\"assets/images/avatar-3.jpg\" placement=\"top\" ngbTooltip=\"Joshpon Doe\" alt=\"\" class=\"m-l-10 \"></a>\n          <a href=\"javascript: \"><img class=\"img-50\" src=\"assets/images/avatar-2.jpg\" placement=\"top\" ngbTooltip=\"Cutzs\" alt=\"\" class=\"m-l-10\"></a>\n          <button class=\"btn btn-success btn-icon m-l-10\"><i class=\"icofont icofont-plus m-0 f-16 f-w-600\"></i></button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Monthly view End -->\n\n  <div class=\"col-md-12 col-xl-6\">\n    <div class=\"card\">\n      <div class=\"card-block prod-order-card\">\n        <h5>Product order</h5>\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <div id=\"solid-gauge\"></div>\n          </div>\n        </div>\n        <ul class=\"list-unstyled b-t-default\">\n          <li>\n            <div class=\"legend-icon\">\n              <span class=\"bg-c-blue\"></span>\n            </div>\n            <div class=\"legend-cont\">\n              <p>23.043</p>\n              <span>Finished</span>\n            </div>\n          </li>\n          <li>\n            <div class=\"legend-icon\">\n              <span class=\"bg-c-pink\"></span>\n            </div>\n            <div class=\"legend-cont\">\n              <p>12.435</p>\n              <span>Pending</span>\n            </div>\n          </li>\n          <li>\n            <div class=\"legend-icon\">\n              <span class=\"bg-c-yellow\"></span>\n            </div>\n            <div class=\"legend-cont\">\n              <p>4.503</p>\n              <span>Reject</span>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <!-- Customer Start -->\n  <div class=\"col-md-12 col-xl-6\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <div class=\"card\">\n          <div class=\"card-block profile-comp-block\">\n            <h5>Profile compltion</h5>\n            <div class=\"text-center m-t-20 m-b-20 \">\n              <input type=\"text\" class=\"dial\" value=\"70\" data-width=\"150\" data-height=\"150\" data-thickness=\".2\" data-linecap=\"round\" data-displayprevious=\"true\" data-displayInput=\"true\" data-fgColor=\"#4680FE\" data-angleoffset=\"180\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <div class=\"card profile-view\">\n          <div class=\"card-block\">\n            <h5>Gap to target</h5>\n            <div id=\"gap-target\" style=\"height:130px;\" class=\"p-t-20\"></div>\n            <div class=\"row\">\n              <div class=\"col-6 text-center\">\n                <p class=\"text-muted m-b-0\">Target</p>\n                <span class=\"text-c-blue\" id=\"g-target\" [innerHtml]=\"gTargetHTML\">20.9</span>\n              </div>\n              <div class=\"col-6 text-center\">\n                <p class=\"text-muted m-b-0\">Gap</p>\n                <span class=\"text-c-pink\" id=\"g-gap\" [innerHtml]=\"gGap\">12.6</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-12\">\n        <app-card [title]=\"'Transactions'\" >\n          <div class=\"row\">\n            <div class=\"col-sm-6\">\n              <div class=\"rest-block\">\n                <h2>2,567</h2>\n                <p class=\"text-muted f-w-600 f-16 m-b-30\">User\n                  monthly use</p>\n              </div>\n              <button class=\"btn btn-primary m-b-10\">+26%</button>\n            </div>\n            <div class=\"col-sm-6\">\n              <div id=\"stacked-transactions-graph\">\n                5,3,4,6,3,6,2,2.5,3,1.5,1.5,4.6,5,2.5,3.5,4,3,4.8,2.5,6,5,3,5\n              </div>\n            </div>\n          </div>\n        </app-card>\n      </div>\n    </div>\n  </div>\n  <!-- Customer End -->\n\n  <!-- Revenue Map Start -->\n  <div class=\"col-md-6 col-xl-4\">\n    <app-card [title]=\"'Tax deduction'\" [cardClass]=\"'revenue-map'\">\n      <div class=\"row\">\n        <div class=\"col-sm-8\">\n          <h2>$567</h2>\n          <span class=\"text-muted f-18 d-block\">January 2017</span>\n          <p class=\"text-muted m-b-0 p-t-40\">Total tax deduction</p>\n          <span class=\"m-l-5 f-w-600\">$23,567</span>\n        </div>\n        <div class=\"col-sm-4\">\n          <div id=\"tax-deduction-graph\">\n            150,335,240,200,275,205,170,150\n          </div>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <app-card [title]=\"'Order'\" [cardClass]=\"'revenue-map'\">\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <h2>456</h2>\n          <span class=\"text-muted f-18 d-block\">January 2017</span>\n          <p class=\"text-muted m-b-0 p-t-40\">Total order</p><span\n          class=\"m-l-5 f-w-600\">2,567</span>\n        </div>\n        <div class=\"col-sm-6 text-center m-t-10\">\n          <span class=\"order-graph\">1/3</span>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-md-12 col-xl-4\">\n    <app-card [title]=\"'Revenue generate'\" [cardClass]=\"'revenue-map'\">\n      <div class=\"row\">\n        <div class=\"col-sm-8\">\n          <h2>$756</h2>\n          <span class=\"text-muted f-18 d-block\">January 2017</span>\n          <p class=\"text-muted m-b-0 p-t-40\">Last weeks revenue</p>\n          <span class=\"m-l-5 f-w-600\">$56,678</span>\n        </div>\n        <div class=\"col-sm-4\">\n          <div id=\"revenue-generate-graph\">\n            150,335,240,200,275,205,170,150\n          </div>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <!-- Revenue Map End -->\n\n  <!-- Monthly Chart Start -->\n  <div class=\"col-md-12 col-xl-7\">\n    <app-card [title]=\"'Monthly earning'\">\n      <div class=\"monthly-earning\">\n        <div id=\"monthly-earning\">0,15,18,10,30,35,40,50,40,40,58,60,100</div>\n        <div class=\"monthly-data\">\n          <div class=\"row\">\n            <div class=\"col-sm-5 earn\">\n              <h5>Total Earned</h5>\n              <h3 class=\"f-w-600 m-t-10\">$45,634</h3>\n            </div>\n            <div class=\"col-sm-7 spent\">\n              <h5>Total Spent</h5>\n              <h3 class=\"f-w-600 m-t-10\">$67,452</h3>\n            </div>\n          </div>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <!-- Monthly Chart Start -->\n  <!-- Sentiment SVG Start -->\n  <div class=\"col-md-12 col-xl-5\">\n    <app-card [title]=\"'Sentiment'\" [cardClass]=\"'sentiment-card'\" [blockClass]=\"'text-center'\">\n      <div class=\"row sentiment-center\">\n        <div class=\"col-sm-3\">\n          <h4>793</h4>\n        </div>\n        <div class=\"col-sm-5\">\n          <div class=\"happyball\"></div>\n        </div>\n        <div class=\"col-sm-4\">\n          <h4 class=\"text-c-green\">75%</h4>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <h6 class=\"text-muted m-t-10\">Positive Review</h6>\n        </div>\n      </div>\n      <div class=\"row sentiment-center b-t-default p-t-20 m-t-20\">\n        <div class=\"col-sm-3\">\n          <h4>103</h4>\n        </div>\n        <div class=\"col-sm-5\">\n          <div class=\"sadball\"></div>\n        </div>\n        <div class=\"col-sm-4\">\n          <h4 class=\"text-c-pink\">23%</h4>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <h6 class=\"text-muted m-t-10\">Negative Review</h6>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <!-- Sentiment SVG End -->\n  <!-- map & Chart Start -->\n  <div class=\"col-md-12 col-xl-7\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <app-card [title]=\"'Visitors map'\">\n          <div id=\"world-map-vititors\" style=\"width:100%;height:250px;\"></div>\n        </app-card>\n      </div>\n      <div class=\"col-sm-12\">\n        <app-card [title]=\"'Revenue report'\" [blockClass]=\"'p-0'\">\n          <div class=\"card-block-big revenue-report\">\n            <div class=\"row\">\n              <div class=\"col-lg-4\">\n                <h3 class=\"f-w-600\">$5,763</h3>\n              </div>\n              <div class=\"col-lg-4\">\n                <div id=\"revenue-report\">375,335,240,200,275,205,170,150,275,250,180,160,360,300</div>\n              </div>\n              <div class=\"col-lg-4\">\n                <div class=\"revenue-card p-b-10\">\n                  <span class=\"bg-c-blue\"></span>\n                  <h6 class=\"text-muted d-inline-block m-l-20\">\n                    This month</h6>\n                  <h6 class=\"d-inline-block m-l-20 f-w-600\">\n                    $48,689</h6>\n                </div>\n                <div class=\"revenue-card b-t-default  p-t-10\">\n                  <span class=\"bg-c-green m-t-10\"></span>\n                  <h6 class=\"text-muted d-inline-block m-l-20\">\n                    This month</h6>\n                  <h6 class=\"d-inline-block m-l-20 f-w-600\">\n                    $48,689</h6>\n                </div>\n              </div>\n            </div>\n          </div>\n        </app-card>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-12 col-xl-5\">\n    <div class=\"card bg-c-pink card-map\">\n      <div class=\"card-header\">\n        <div class=\"card-header-left\">\n          <h5>Strongest location</h5>\n        </div>\n      </div>\n      <div class=\"card-block\">\n        <h2 class=\"d-inline-block\">New York <i\n          class=\"icofont icofont-social-google-map f-35\"></i></h2>\n        <h6>Store #45</h6>\n      </div>\n      <div id=\"world-map-markers\" style=\"width:100%;height:500px;\"></div>\n    </div>\n  </div>\n  <!-- map & Chart End -->\n\n  <div class=\"col-md-6\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <!-- Rest & Transactions Start -->\n        <app-card [title]=\"'Rest Of the traffic'\" [cardClass]=\"'prod-order-card'\">\n          <div class=\"row\">\n            <div class=\"col-sm-6\">\n              <div class=\"row\">\n                <div class=\"col-sm-12\">\n                  <div id=\"solid-gauge1\" style=\"height: 160px;\"></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-6\">\n              <h3>57.23 GB</h3>\n              <div class=\"rest-block p-t-50\">\n                <p class=\"text-muted m-b-5 f-16 f-w-600\">Spent</p>\n                <span class=\"text-muted f-16 f-w-600\">37,458 MB</span>\n              </div>\n            </div>\n          </div>\n        </app-card>\n        <!-- Rest & Transactions End -->\n      </div>\n      <div class=\"col-md-12\">\n        <!-- Add Task Start -->\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <div class=\"card-header-left\">\n              <h5>Sales prediction</h5>\n            </div>\n            <div class=\"card-header-right\">\n              <i class=\"icofont icofont-spinner-alt-5\"></i>\n            </div>\n          </div>\n          <div class=\"card-block sales-prediction\">\n            <div class=\"row\">\n              <div class=\"col-md-4\">\n                <h2>$3,489</h2>\n                <p class=\"text-muted f-w-600\">28% Increased</p>\n              </div>\n              <div class=\"col-md-8\">\n                <div id=\"sale-prediction\" class=\"w-100\" style=\"height:250px;width:235px\"></div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- Add Task End -->\n      </div>\n    </div>\n\n  </div>\n\n  <!-- Project overview Start -->\n  <div class=\"col-md-12 col-xl-6 \">\n    <app-card [title]=\"'Project overview'\" [cardClass]=\"'card-overview'\">\n      <div class=\"m-b-50\">\n        <div class=\"row justify-content-md-center\">\n          <div class=\"col-sm-12\">\n            <div id=\"project-overview-chart\" class=\"project-overview-chart\" style=\"height:200px;\"></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"p-t-20 p-b-20 \">\n        <div class=\"row \">\n          <div class=\"col-sm-6 \">\n            <span class=\"bg-c-blue \"></span>\n            <h6 class=\"m-l-30 f-w-600 m-b-5 \">23.89%</h6>\n            <p class=\"text-muted m-l-30 m-b-0 \">ProjectProcessed</p>\n          </div>\n          <div class=\"col-sm-6 \">\n            <div id=\"project-over-sub-1\">3,5,5,10,6,4,8,10,6,15,10,6,4,8,10,6,5,6,5,8,2</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"b-t-default p-t-20 p-b-20 \">\n        <div class=\"row \">\n          <div class=\"col-sm-6 \">\n            <span class=\"bg-c-pink \"></span>\n            <h6 class=\"m-l-30 f-w-600 m-b-5 \">17.78%</h6>\n            <p class=\"text-muted m-l-30 m-b-0 \">Project Returned</p>\n          </div>\n          <div class=\"col-sm-6 \">\n            <div id=\"project-over-sub-2\">5,8,10,6,4,8,10,6,3,5,8,2,10,6,4,8,10,6,5,6,3,5</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"b-t-default p-t-20 p-b-20 \">\n        <div class=\"row \">\n          <div class=\"col-sm-6 \">\n            <span class=\"bg-c-yellow \"></span>\n            <h6 class=\"m-l-30 f-w-600 m-b-5 \">10.56%</h6>\n            <p class=\"text-muted m-l-30 m-b-0 \">Project Sold</p>\n          </div>\n          <div class=\"col-sm-6 \">\n            <div id=\"project-over-sub-3\">5,10,6,4,8,10,6,5,6,3,5,5,10,6,4,8,10,6,3,5,8,2</div>\n          </div>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <!-- Project overview End -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/widget/widget-chart/widget-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetChartComponent; });
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









var WidgetChartComponent = (function () {
    function WidgetChartComponent() {
    }
    WidgetChartComponent.prototype.ngOnInit = function () {
        var _this = this;
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
        AmCharts.makeChart('statestics-chart', {
            'type': 'serial',
            'marginTop': 0,
            'hideCredits': true,
            'marginRight': 80,
            'dataProvider': [{
                    'year': 'Jan',
                    'value': 0.98
                }, {
                    'year': 'Feb',
                    'value': 1.87
                }, {
                    'year': 'Mar',
                    'value': 0.97
                }, {
                    'year': 'Apr',
                    'value': 1.64
                }, {
                    'year': 'May',
                    'value': 0.40
                }, {
                    'year': 'Jun',
                    'value': 2.90
                }, {
                    'year': 'Jul',
                    'value': 5.2
                }, {
                    'year': 'Aug',
                    'value': 0.77
                }, {
                    'year': 'Sap',
                    'value': 3.1
                }],
            'valueAxes': [{
                    'axisAlpha': 0,
                    'dashLength': 6,
                    'gridAlpha': 0.1,
                    'position': 'left'
                }],
            'graphs': [{
                    'id': 'g1',
                    'bullet': 'round',
                    'bulletSize': 9,
                    'lineColor': '#4680ff',
                    'lineThickness': 2,
                    'negativeLineColor': '#4680ff',
                    'type': 'smoothedLine',
                    'valueField': 'value'
                }],
            'chartCursor': {
                'cursorAlpha': 0,
                'valueLineEnabled': false,
                'valueLineBalloonEnabled': true,
                'valueLineAlpha': false,
                'color': '#fff',
                'cursorColor': '#FC6180',
                'fullWidth': true
            },
            'categoryField': 'year',
            'categoryAxis': {
                'gridAlpha': 0,
                'axisAlpha': 0,
                'fillAlpha': 1,
                'fillColor': '#FAFAFA',
                'minorGridAlpha': 0,
                'minorGridEnabled': true
            },
            'export': {
                'enabled': true
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
        var chartData = [
            {
                'date': '2012-01-01',
                'distance': 327,
                'townName': 'New York',
                'townName2': 'New York',
                'townSize': 25,
                'latitude': 40.71,
                'duration': 408
            }, {
                'date': '2012-01-02',
                'distance': 371,
                'townName': 'Washington',
                'townSize': 14,
                'latitude': 38.89,
                'duration': 582
            }, {
                'date': '2012-01-03',
                'distance': 433,
                'townName': 'Wilmington',
                'townSize': 6,
                'latitude': 34.22,
                'duration': 282
            }, {
                'date': '2012-01-04',
                'distance': 345,
                'townName': 'Jacksonville',
                'townSize': 7,
                'latitude': 30.35,
                'duration': 379
            }, {
                'date': '2012-01-05',
                'distance': 480,
                'townName': 'Miami',
                'townName2': 'Miami',
                'townSize': 10,
                'latitude': 25.83,
                'duration': 501
            }, {
                'date': '2012-01-06',
                'distance': 386,
                'townName': 'Tallahassee',
                'townSize': 7,
                'latitude': 30.46,
                'duration': 343
            }, {
                'date': '2012-01-07',
                'distance': 348,
                'townName': 'New Orleans',
                'townSize': 10,
                'latitude': 29.94,
                'duration': 405
            }, {
                'date': '2012-01-08',
                'distance': 298,
                'townName': 'Houston',
                'townName2': 'Houston',
                'townSize': 16,
                'latitude': 29.76,
                'duration': 309
            }, {
                'date': '2012-01-09',
                'distance': 318,
                'townName': 'Dalas',
                'townSize': 17,
                'latitude': 32.8,
                'duration': 287
            }, {
                'date': '2012-01-10',
                'distance': 349,
                'townName': 'Oklahoma City',
                'townSize': 11,
                'latitude': 35.49,
                'duration': 485
            }, {
                'date': '2012-01-11',
                'distance': 603,
                'townName': 'Kansas City',
                'townSize': 10,
                'latitude': 39.1,
                'duration': 390
            }, {
                'date': '2012-01-12',
                'distance': 534,
                'townName': 'Denver',
                'townName2': 'Denver',
                'townSize': 18,
                'latitude': 39.74,
                'duration': 450
            }, {
                'date': '2012-01-13',
                'townName': 'Salt Lake City',
                'townSize': 12,
                'distance': 425,
                'duration': 270,
                'latitude': 40.75,
                'alpha': 0.4
            }, {
                'date': '2012-01-14',
                'latitude': 36.1,
                'duration': 460,
                'townName': 'Las Vegas',
                'townName2': 'Las Vegas',
                'bulletClass': 'lastBullet'
            }
        ];
        AmCharts.makeChart('monthly-graph', {
            'type': 'serial',
            'theme': 'light',
            'hideCredits': true,
            'dataDateFormat': 'YYYY-MM-DD',
            'dataProvider': chartData,
            'addClassNames': true,
            'startDuration': 1,
            'marginLeft': 0,
            'categoryField': 'date',
            'categoryAxis': {
                'parseDates': true,
                'minPeriod': 'DD',
                'autoGridCount': false,
                'gridCount': 50,
                'gridAlpha': 0.1,
                'gridColor': '#FFFFFF',
                'axisColor': '#555555',
                'dateFormats': [{
                        'period': 'DD',
                        'format': 'DD'
                    }, {
                        'period': 'WW',
                        'format': 'MMM DD'
                    }, {
                        'period': 'MM',
                        'format': 'MMM'
                    }, {
                        'period': 'YYYY',
                        'format': 'YYYY'
                    }]
            },
            'valueAxes': [{
                    'id': 'a1',
                    'title': 'distance',
                    'gridAlpha': 0,
                    'axisAlpha': 0
                }, {
                    'id': 'a2',
                    'position': 'right',
                    'gridAlpha': 0,
                    'axisAlpha': 0,
                    'labelsEnabled': false
                }, {
                    'id': 'a3',
                    'title': '',
                    'position': 'left',
                    'gridAlpha': 0,
                    'axisAlpha': 0,
                    'lineAlpha': 0,
                    'fontSize': 0,
                    'inside': true,
                }],
            'graphs': [{
                    'id': 'g1',
                    'valueField': 'distance',
                    'title': 'distance',
                    'type': 'column',
                    'fillAlphas': 0.9,
                    'cornerRadiusTop': 5,
                    // 'columnWidth': 0.3,
                    'valueAxis': 'a1',
                    'balloonText': '[[value]] miles',
                    'legendValueText': '[[value]] mi',
                    'legendPeriodValueText': 'total: [[value.sum]] mi',
                    'lineColor': '#4680ff',
                    'alphaField': 'alpha'
                }, {
                    'id': 'g2',
                    'valueField': 'latitude',
                    'classNameField': 'bulletClass',
                    'title': 'latitude/city',
                    'type': 'line',
                    // 'type': 'smoothedLine',
                    'valueAxis': 'a2',
                    'lineColor': '#303549',
                    'lineThickness': 2,
                    'dashLength': 8,
                    'legendValueText': '[[value]]/[[description]]',
                    'descriptionField': 'townName',
                    'bullet': 'round',
                    'bulletSizeField': 'townSize',
                    'bulletBorderColor': '#4680ff',
                    'bulletBorderAlpha': 1,
                    'bulletBorderThickness': 2,
                    'bulletColor': '#B5CDFF',
                    'labelText': '[[townName2]]',
                    'labelPosition': 'right',
                    'balloonText': 'latitude:[[value]]',
                    'showBalloon': true,
                    'animationPlayed': true,
                }, {
                    'id': 'g3',
                    'title': 'duration',
                    'valueField': 'duration',
                    'type': 'smoothedLine',
                    'valueAxis': 'a3',
                    'lineColor': '#FC6180',
                    'balloonText': '[[value]]',
                    'lineThickness': 2,
                    'legendValueText': '[[value]]',
                    'bullet': 'round',
                    'bulletBorderColor': '#FC6180',
                    'bulletBorderThickness': 1,
                    'bulletBorderAlpha': 1,
                    'dashLengthField': 'dashLength',
                    'animationPlayed': true
                }]
        });
        $('.dial').knob({
            draw: function () {
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
        AmCharts.makeChart('solid-gauge', {
            'type': 'gauge',
            'hideCredits': true,
            'theme': 'light',
            'axes': [{
                    'axisAlpha': 0,
                    'tickAlpha': 0,
                    'labelsEnabled': false,
                    'startValue': 0,
                    'endValue': 100,
                    'startAngle': 0,
                    'endAngle': 360,
                    'bands': [{
                            'color': '#f4f4f4',
                            'startValue': 0,
                            'endValue': 100,
                            'radius': '100%',
                            'innerRadius': '97%'
                        }, {
                            'color': '#4680FE',
                            'startValue': 0,
                            'endValue': 60,
                            'radius': '100%',
                            'innerRadius': '97%'
                        }, {
                            'color': '#f4f4f4',
                            'startValue': 0,
                            'endValue': 100,
                            'radius': '70%',
                            'innerRadius': '67%'
                        }, {
                            'color': '#FC6180',
                            'startValue': 0,
                            'endValue': 50,
                            'radius': '70%',
                            'innerRadius': '67%'
                        }, {
                            'color': '#f4f4f4',
                            'startValue': 0,
                            'endValue': 100,
                            'radius': '40%',
                            'innerRadius': '37%'
                        }, {
                            'color': '#FFB64D',
                            'startValue': 0,
                            'endValue': 25,
                            'radius': '40%',
                            'innerRadius': '37%'
                        }]
                }],
            'export': {
                'enabled': true
            }
        });
        AmCharts.makeChart('solid-gauge1', {
            'type': 'gauge',
            'hideCredits': true,
            'theme': 'light',
            'axes': [{
                    'axisAlpha': 0,
                    'tickAlpha': 0,
                    'labelsEnabled': false,
                    'startValue': 0,
                    'endValue': 100,
                    'startAngle': 0,
                    'endAngle': 360,
                    'bands': [{
                            'color': '#f4f4f4',
                            'startValue': 0,
                            'endValue': 100,
                            'radius': '100%',
                            'innerRadius': '97%'
                        }, {
                            'color': '#4680FE',
                            'startValue': 0,
                            'endValue': 60,
                            'radius': '100%',
                            'innerRadius': '97%'
                        }, {
                            'color': '#f4f4f4',
                            'startValue': 0,
                            'endValue': 100,
                            'radius': '70%',
                            'innerRadius': '67%'
                        }, {
                            'color': '#FC6180',
                            'startValue': 0,
                            'endValue': 50,
                            'radius': '70%',
                            'innerRadius': '67%'
                        }]
                }],
            'export': {
                'enabled': true
            }
        });
        var gap_target = AmCharts.makeChart('gap-target', {
            'theme': 'light',
            'hideCredits': true,
            'type': 'gauge',
            'axes': [{
                    'topTextFontSize': 1,
                    'topTextYOffset': 0,
                    'topTextColor': '#fff',
                    'axisColor': '#31d6ea',
                    'axisThickness': 0,
                    'endValue': 100,
                    'gridInside': false,
                    'inside': true,
                    'radius': '50%',
                    'fontSize': 0,
                    'valueInterval': 100,
                    'tickAlpha': 0,
                    'startAngle': -90,
                    'endAngle': 90,
                    'unit': '%',
                    'bandOutlineAlpha': 0,
                    'bands': [{
                            'color': '#FC6180',
                            'endValue': 100,
                            'innerRadius': '105%',
                            'radius': '170%',
                            'gradientRatio': [0],
                            'startValue': 0
                        }, {
                            'color': '#4680FE',
                            'endValue': 0,
                            'innerRadius': '105%',
                            'radius': '170%',
                            'gradientRatio': [0],
                            'startValue': 0
                        }]
                }],
            'arrows': [{
                    'alpha': 1,
                    'innerRadius': '0%',
                    'startWidth': 5,
                    'nailRadius': 0,
                    'radius': '170%'
                }]
        });
        setInterval(function () {
            var value = Math.round(Math.random() * 100);
            gap_target.arrows[0].setValue(value);
            gap_target.axes[0].setTopText(value + ' %');
            _this.gTargetHTML = (value).toString();
            _this.gGap = (100 - value).toString();
            gap_target.axes[0].bands[1].setEndValue(value);
        }, 2000);
        $('.sadball').createWaterBall({
            cvs_config: {
                width: 100,
                height: 100
            },
            wave_config: {
                waveWidth: 0.025,
                waveHeight: 3
            },
            data_range: [30, 70, 100],
            isLoading: true,
            nowRange: 23,
            targetRange: 23
        });
        $('.happyball').createWaterBall({
            cvs_config: {
                width: 100,
                height: 100
            },
            wave_config: {
                waveWidth: 0.025,
                waveHeight: 3
            },
            data_range: [30, 70, 100],
            isLoading: true,
            nowRange: 75,
            targetRange: 75
        });
        setTimeout(function () {
            $('.sadball').createWaterBall('updateRange', 23);
            $('.happyball').createWaterBall('updateRange', 75);
        }, 1000);
        var targetSVG = 'M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17';
        targetSVG += ',2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5';
        targetSVG += ',9,5.5 S12.5,7.067,12.5,9z';
        AmCharts.makeChart('world-map-vititors', {
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
                'unlistedAreasColor': '#dfdfdf',
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
            'linesAboveImages': true,
        });
        var chart_sale = AmCharts.makeChart('sale-prediction', {
            'theme': 'light',
            'hideCredits': true,
            'type': 'gauge',
            'axes': [{
                    'id': 'axis2',
                    'labelsEnabled': false,
                    'axisColor': '#fec5d0',
                    'axisThickness': 60,
                    'axisAlpha': 1,
                    'tickAlpha': 0,
                    'radius': '10%',
                    'startAngle': -150,
                    'endAngle': 360,
                    'topTextFontSize': 15,
                    'topTextColor': '#000',
                    'topTextYOffset': 80,
                    'topText': ''
                }, {
                    'topTextFontSize': 1,
                    'topTextYOffset': 0,
                    'axisColor': '#31d6ea',
                    'axisThickness': 0,
                    'endValue': 100,
                    'gridInside': false,
                    'inside': true,
                    'radius': '50%',
                    'fontSize': 0,
                    'valueInterval': 100,
                    'tickAlpha': 0,
                    'startAngle': -150,
                    'endAngle': 150,
                    'unit': '%',
                    'bandOutlineAlpha': 0,
                    'bands': [{
                            'color': '#fec5d0',
                            'endValue': 100,
                            'innerRadius': '150%',
                            'radius': '170%',
                            'gradientRatio': [0],
                            'startValue': 0
                        }, {
                            'color': '#FC6180',
                            'endValue': 0,
                            'innerRadius': '150%',
                            'radius': '170%',
                            'gradientRatio': [0],
                            'startValue': 0
                        }]
                }],
            'arrows': [{
                    'alpha': 1,
                    'color': '#FC6180',
                    'innerRadius': '250%',
                    'nailRadius': 30,
                    'nailAlpha': 1,
                    'startWidth': 20,
                    'radius': '500%'
                }]
        });
        setInterval(function () {
            var value = Math.round(Math.random() * 100);
            chart_sale.arrows[0].setValue(value * 1.18);
            chart_sale.axes[0].setTopText((value + '%').toString());
            chart_sale.axes[1].bands[1].setEndValue(value);
        }, 900);
        AmCharts.makeChart('project-overview-chart', {
            'type': 'pie',
            'hideCredits': true,
            'theme': 'light',
            'dataProvider': [{
                    'country': 'Project Processed',
                    'color': '#4680ff',
                    'value': 201
                }, {
                    'country': 'Project Returned',
                    'color': '#FC6180',
                    'value': 65
                }, {
                    'country': 'Project Sold',
                    'color': '#FFB64D',
                    'value': 39
                }],
            'valueField': 'value',
            'titleField': 'country',
            'labelsEnabled': false,
            'autoMargins': false,
            'marginTop': 0,
            'marginBottom': 0,
            'marginLeft': 0,
            'marginRight': 0,
            'pullOutRadius': 0,
            'colorField': 'color',
            'outlineAlpha': 0.9,
            'depth3D': 0,
            'balloonText': '[[title]]',
            'angle': 0,
        });
        $('span#amount-processed').peity('line', {
            fill: '#4680ff',
            stroke: '#4680ff'
        });
        $('span#amount-spent').peity('line', {
            fill: 'rgb(252, 97, 128)',
            stroke: 'rgb(252, 97, 128)'
        });
        $('span#profit-processed').peity('line', {
            fill: 'rgb(255, 182, 77)',
            stroke: 'rgb(255, 182, 77)'
        });
        $('#monthlyprofit-1').peity('line', {
            fill: 'rgba(70, 128, 254,0.2)',
            stroke: 'rgb(70, 128, 254)'
        });
        $('#monthlyprofit-2').peity('line', {
            fill: 'rgba(252, 97, 128,0.2)',
            stroke: 'rgb(252, 97, 128)'
        });
        $('#monthlyprofit-3').peity('line', {
            fill: 'rgba(255, 182, 77,0.2)',
            stroke: 'rgb(255, 182, 77)'
        });
        $('#revenue-status-d-graph').peity('bar', {
            fill: ['#4680ff'],
            padding: 0.2,
        });
        $('#revenue-status-w-graph').peity('bar', {
            fill: ['#FC6180'],
            padding: 0.2,
        });
        $('#new-user-daily').peity('bar', {
            fill: ['#93BE52', '#93BE52', '#93BE52', '#93BE52', '#93BE52', '#CCCCCC', '#CCCCCC', '#CCCCCC', '#CCCCCC'],
            padding: 0.2,
        });
        $('#page-views-today').peity('bar', {
            fill: ['#FFB64D', '#FFB64D', '#FFB64D', '#FFB64D', '#FFB64D', '#CCCCCC', '#CCCCCC', '#CCCCCC', '#CCCCCC'],
            padding: 0.2,
        });
        $('#stacked-transactions-graph').peity('bar', {
            fill: ['#4680FE', '#FC6180', '#4680FE', '#FC6180', '#FC6180'],
            padding: 0.3,
        });
        $('span.order-graph').peity('pie', {
            fill: ['#ccc', '#FC6180'],
            width: 100,
            height: 100
        });
        $('#revenue-generate-graph').peity('bar', {
            fill: ['#FFB64D'],
            padding: 0.3,
            width: 100,
            height: 100
        });
        $('#tax-deduction-graph').peity('bar', {
            fill: ['#4680ff'],
            padding: 0.3,
            width: 100,
            height: 100
        });
        $('#monthly-earning').peity('line', {
            fill: '#999',
            stroke: '#999'
        });
        $('#revenue-report').peity('bar', {
            fill: ['#93BE52', '#4680ff'],
            padding: 0.2,
            width: '100%',
            height: '150px'
        });
        $('#project-over-sub-1').peity('line', {
            fill: 'rgba(70, 128, 254,0.2)',
            stroke: 'rgb(70, 128, 254)',
            width: '100%',
            height: '50px'
        });
        $('#project-over-sub-2').peity('line', {
            fill: 'rgba(252, 97, 128,0.2)',
            stroke: 'rgb(252, 97, 128)',
            width: '100%',
            height: '50px'
        });
        $('#project-over-sub-3').peity('line', {
            fill: 'rgba(255, 182, 77,0.2)',
            stroke: 'rgb(255, 182, 77)',
            width: '100%',
            height: '50px'
        });
    };
    return WidgetChartComponent;
}());
WidgetChartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-widget-chart',
        template: __webpack_require__("../../../../../src/app/pages/widget/widget-chart/widget-chart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/widget/widget-chart/widget-chart.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetChartComponent);

//# sourceMappingURL=widget-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/widget/widget-chart/widget-chart.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetChartRoutes", function() { return WidgetChartRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetChartModule", function() { return WidgetChartModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__widget_chart_component__ = __webpack_require__("../../../../../src/app/pages/widget/widget-chart/widget-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var WidgetChartRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__widget_chart_component__["a" /* WidgetChartComponent */],
        data: {
            breadcrumb: 'Widget',
            icon: 'icofont-speed-meter bg-c-blue'
        }
    }
];
var WidgetChartModule = (function () {
    function WidgetChartModule() {
    }
    return WidgetChartModule;
}());
WidgetChartModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(WidgetChartRoutes),
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__widget_chart_component__["a" /* WidgetChartComponent */]]
    })
], WidgetChartModule);

//# sourceMappingURL=widget-chart.module.js.map

/***/ })

});
//# sourceMappingURL=widget-chart.module.chunk.js.map