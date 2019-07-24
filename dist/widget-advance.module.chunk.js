webpackJsonp(["widget-advance.module"],{

/***/ "../../../../../src/app/pages/widget/widget-advance/widget-advance.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <!-- Total Value Start -->\n  <div class=\"col-md-6 col-xl-3\">\n    <div class=\"card card-blue total-card\">\n      <div class=\"card-block\">\n        <div class=\"text-left\">\n          <h4>4000</h4>\n          <p class=\"m-0\">Total Sales</p>\n        </div>\n        <span class=\"label bg-c-blue value-badges\">12%</span>\n      </div>\n      <chart [type]=\"'line'\" [data]=\"totalValueGraphData1\" [options]=\"totalValueGraphOption\" style=\"width: 100%; height: 100px;\"></chart>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-xl-3\">\n    <div class=\"card card-pink total-card\">\n      <div class=\"card-block\">\n        <div class=\"text-left\">\n          <h4>489</h4>\n          <p class=\"m-0\">Total Comment</p>\n        </div>\n        <span class=\"label bg-c-pink value-badges\">15%</span>\n      </div>\n      <chart [type]=\"'line'\" [data]=\"totalValueGraphData2\" [options]=\"totalValueGraphOption\" style=\"width: 100%; height: 100px;\"></chart>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-xl-3\">\n    <div class=\"card card-green total-card\">\n      <div class=\"card-block\">\n        <div class=\"text-left\">\n          <h4>$5782</h4>\n          <p class=\"m-0\">Income Status</p>\n        </div>\n        <span class=\"label bg-c-green value-badges\">20%</span>\n      </div>\n      <chart [type]=\"'line'\" [data]=\"totalValueGraphData3\" [options]=\"totalValueGraphOption\" style=\"width: 100%; height: 100px;\"></chart>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-xl-3\">\n    <div class=\"card card-yellow total-card\">\n      <div class=\"card-block\">\n        <div class=\"text-left\">\n          <h4>378</h4>\n          <p class=\"m-0\">Total Visitors</p>\n        </div>\n        <span class=\"label bg-c-yellow value-badges\">23%</span>\n      </div>\n      <chart [type]=\"'bar'\" [data]=\"totalValueGraphData4\" [options]=\"totalValueGraphOption\" style=\"width: 100%; height: 100px;\"></chart>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card bg-c-blue in-design-card\">\n      <div class=\"card-block p-b-10\">\n        <p class=\"f-w-600 m-b-5\">In design</p>\n        <h4 class=\"f-16 m-b-20\">AFSL Web app</h4>\n        <div class=\"inner-dark-card blue-drak-card\">\n          <div class=\"row\">\n            <div class=\"col-sm-6 b-r-default\">\n              <h3 class=\"d-inline-block num-top\">11</h3>\n              <p class=\"text-uppercase d-inline-block\">Days Left <br>\n                in Design\n              </p>\n            </div>\n            <div class=\"col-sm-6\">\n              <h3 class=\"d-inline-block m-r-20 m-b-0 num-top\">28</h3>\n              <p class=\"text-uppercase d-inline-block\">Days to <br>\n                Finish\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"f-right\">\n          <chart [type]=\"'line'\" [data]=\"designGraph1\" [options]=\"designGraphOption\" style=\"width: 150px; height: 60px;\"></chart>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card bg-c-pink in-design-card\">\n      <div class=\"card-block p-b-10\">\n        <p class=\"f-w-600 m-b-5\">In design</p>\n        <h4 class=\"f-16 m-b-20\">Nortech website</h4>\n        <div class=\"inner-dark-card pink-drak-card\">\n          <div class=\"row\">\n            <div class=\"col-sm-6 b-r-default\">\n              <h3 class=\"d-inline-block num-top\">11</h3>\n              <p class=\"text-uppercase d-inline-block\">Days Left <br>\n                in Design\n              </p>\n            </div>\n            <div class=\"col-sm-6\">\n              <h3 class=\"d-inline-block m-r-20 m-b-0 num-top\">28</h3>\n              <p class=\"text-uppercase d-inline-block\">Days to <br>\n                Finish\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"f-right\">\n          <chart [type]=\"'line'\" [data]=\"designGraph2\" [options]=\"designGraphOption\" style=\"width: 150px; height: 60px;\"></chart>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-12 col-xl-4\">\n    <div class=\"card bg-c-yellow in-design-card\">\n      <div class=\"card-block p-b-10\">\n        <p class=\"text-uppercase f-w-600 m-b-5\">In Design</p>\n        <h4 class=\"f-16 m-b-20\">Evolution Website</h4>\n        <div class=\"inner-dark-card yellow-drak-card\">\n          <div class=\"row\">\n            <div class=\"col-sm-6 b-r-default\">\n              <h3 class=\"d-inline-block num-top\">11</h3>\n              <p class=\"text-uppercase d-inline-block\">Days Left <br>\n                in Design\n              </p>\n            </div>\n            <div class=\"col-sm-6\">\n              <h3 class=\"d-inline-block m-r-20 m-b-0 num-top\">28</h3>\n              <p class=\"text-uppercase d-inline-block\">Days to <br>\n                Finish\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"f-right\">\n          <chart [type]=\"'line'\" [data]=\"designGraph3\" [options]=\"designGraphOption\" style=\"width: 150px; height: 60px;\"></chart>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- In Design End -->\n  <!-- Order Start -->\n  <div class=\"col-md-12 col-xl-4\">\n    <div class=\"card order-task\">\n      <div class=\"card-block order-blue-task\">\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <div class=\"order-icon m-b-40\">\n              <i class=\"icofont icofont-tasks text-c-blue f-50\"></i>\n            </div>\n          </div>\n          <div class=\"col-sm-6\">\n            <div class=\"row\">\n              <div class=\"col-sm-12\">\n                <h2 class=\"f-w-600 text-right m-b-30\">4,678</h2>\n              </div>\n              <div class=\"col-sm-12\">\n                <chart [type]=\"'line'\" [data]=\"orderCardChart1\" [options]=\"orderCardChartOption\" style=\"width: 100%; height: 100px;\"></chart>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"border-top-blue p-t-20\">\n          <h6 class=\"text-muted\">Order submitted</h6>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card order-task\">\n      <div class=\"card-block order-pink-task\">\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <div class=\"order-icon m-b-40\">\n              <i class=\"icofont icofont-paper text-c-pink f-50\"></i>\n            </div>\n          </div>\n          <div class=\"col-sm-6\">\n            <div class=\"row\">\n              <div class=\"col-sm-12\">\n                <h2 class=\"f-w-600 text-right m-b-30\">4,678</h2>\n              </div>\n              <div class=\"col-sm-12\">\n                <chart [type]=\"'line'\" [data]=\"orderCardChart2\" [options]=\"orderCardChartOption\" style=\"width: 100%; height: 100px;\"></chart>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"border-top-pink p-t-20\">\n          <h6 class=\"text-muted\">Order contract</h6>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card order-task\">\n      <div class=\"card-block order-yellow-task\">\n        <div class=\"row\">\n          <div class=\"col-sm-6 \">\n            <div class=\"order-icon m-b-40\">\n              <i class=\"icofont icofont-clip-board text-c-yellow f-50\"></i>\n            </div>\n          </div>\n          <div class=\"col-sm-6\">\n            <div class=\"row\">\n              <div class=\"col-sm-12\">\n                <h2 class=\"f-w-600 text-right m-b-30\">4,678</h2>\n              </div>\n              <div class=\"col-sm-12\">\n                <chart [type]=\"'line'\" [data]=\"orderCardChart3\" [options]=\"orderCardChartOption\" style=\"width: 100%; height: 100px;\"></chart>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"border-top-yellow p-t-20\">\n          <h6 class=\"text-muted\">Order completed</h6>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Order End -->\n  <!-- Statistics and revenue Start -->\n  <div class=\"col-md-12 \">\n    <app-card [title]=\"'Statistics of visits and total revenue'\" [cardClass]=\"'card-statistics'\">\n      <div class=\"row \">\n        <div class=\"col-sm-4 \">\n          <div class=\"row stats-block\">\n            <div class=\"col-lg-6 \">\n              <div class=\"progressbar-v-1 text-center\">\n                <div data-label=\"90%\" class=\"radial-bar radial-bar-90 radial-bar-lg\"></div>\n              </div>\n            </div>\n            <div class=\"col-lg-6 \">\n              <h2 class=\"f-w-600 \">5,879</h2>\n              <p class=\"text-muted\">Total users</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-4 \">\n          <div class=\"row stats-block\">\n            <div class=\"col-lg-6 \">\n              <div class=\"progressbar-v-1 text-center\">\n                <div data-label=\"70%\" class=\"radial-bar radial-bar-70 radial-bar-lg radial-bar-danger\"></div>\n              </div>\n            </div>\n            <div class=\"col-lg-6 \">\n              <h2 class=\"f-w-600 \">$2,456</h2>\n              <p class=\"text-muted \">Total rent</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-4 \">\n          <div class=\"row stats-block\">\n            <div class=\"col-lg-6 \">\n              <div class=\"progressbar-v-1 text-center\">\n                <div data-label=\"75%\" class=\"radial-bar radial-bar-75 radial-bar-lg radial-bar-warning\"></div>\n              </div>\n            </div>\n            <div class=\"col-lg-6 \">\n              <h2 class=\"f-w-600 \">3,198</h2>\n              <p class=\"text-muted \">Total revenue</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"b-t-default p-t-20 m-t-30\">\n        <div class=\"row \">\n          <div class=\"col-sm-4 \">\n            <h6 class=\"d-inline-block m-r-10 \">User growth</h6>\n            <span class=\"label bg-c-blue \">28%</span>\n          </div>\n          <div class=\"col-sm-4 \">\n            <h6 class=\"d-inline-block m-r-10 \">Earnning growth</h6>\n            <span class=\"label bg-c-pink \">12%</span>\n          </div>\n          <div class=\"col-sm-4 \">\n            <h6 class=\"d-inline-block m-r-10 \">Trade growth</h6>\n            <span class=\"label bg-c-yellow \">56%</span>\n          </div>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <!-- Statistics and revenue End -->\n  <!-- Power card Start -->\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card\">\n      <div class=\"card-header p-t-20\">\n        <div class=\"card-header-left\">\n          <h5>Power</h5>\n        </div>\n        <div class=\"card-header-right\">\n          <i class=\"icofont icofont-spinner-alt-5 \"></i>\n        </div>\n      </div>\n      <div class=\"card-block-big card-power\">\n        <h2>2789</h2>\n        <span class=\"text-muted\">kw</span>\n        <chart [type]=\"'line'\" [data]=\"powerCardChart1\" [options]=\"powerCardChartOption\" style=\"width: 100%; height: 107px;\"></chart>\n        <div class=\"row\">\n          <div class=\"col-4\">\n            <div class=\"map-area\">\n              <h6 class=\"m-0\">2876</h6>\n              <span>kw</span>\n              <p class=\"text-muted m-0\">month</p>\n            </div>\n          </div>\n          <div class=\"col-4\">\n            <div class=\"map-area\">\n              <h6 class=\"m-0\">234</h6>\n              <span>kw</span>\n              <p class=\"text-muted m-0\">Today</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card\">\n      <div class=\"card-header p-t-20\">\n        <div class=\"card-header-left\">\n          <h5>Water</h5>\n        </div>\n        <div class=\"card-header-right\">\n          <i class=\"icofont icofont-spinner-alt-5 \"></i>\n        </div>\n      </div>\n      <div class=\"card-block-big card-power\">\n        <h2>7.3</h2>\n        <span class=\"text-muted\">m3</span>\n        <chart [type]=\"'line'\" [data]=\"powerCardChart2\" [options]=\"powerCardChartOption\" style=\"width: 100%; height: 107px;\"></chart>\n        <div class=\"row\">\n          <div class=\"col-4\">\n            <div class=\"map-area\">\n              <h6 class=\"m-0\">4.5</h6>\n              <span>m3</span>\n              <p class=\"text-muted m-0\">month</p>\n            </div>\n          </div>\n          <div class=\"col-4\">\n            <div class=\"map-area\">\n              <h6 class=\"m-0\">0.5</h6>\n              <span>m3</span>\n              <p class=\"text-muted m-0\">Today</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-12 col-xl-4\">\n    <div class=\"card\">\n      <div class=\"card-header p-t-20\">\n        <div class=\"card-header-left\">\n          <h5>Power</h5>\n        </div>\n        <div class=\"card-header-right\">\n          <i class=\"icofont icofont-spinner-alt-5 \"></i>\n        </div>\n      </div>\n      <div class=\"card-block-big card-power\">\n        <h2>834</h2>\n        <span class=\"text-muted\">mpg</span>\n        <chart [type]=\"'line'\" [data]=\"powerCardChart3\" [options]=\"powerCardChartOption\" style=\"width: 100%; height: 107px;\"></chart>\n        <div class=\"row\">\n          <div class=\"col-4\">\n            <div class=\"map-area\">\n              <h6 class=\"m-0\">15.6</h6>\n              <span>mpg</span>\n              <p class=\"text-muted m-0\">month</p>\n            </div>\n          </div>\n          <div class=\"col-4\">\n            <div class=\"map-area\">\n              <h6 class=\"m-0\">234</h6>\n              <span>kw</span>\n              <p class=\"text-muted m-0\">Today</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Power card End -->\n  <!-- Visitor Chart Start -->\n  <div class=\"col-md-12\">\n    <app-card [title]=\"'Visitors'\" [cardClass]=\"'visitor-chart-card'\" [blockClass]=\"'p-b-40'\">\n      <div id=\"visitor-list-graph\" style=\"width:100%;height:400px;\"></div>\n    </app-card>\n  </div>\n  <!-- Visitor Chart End -->\n  <!-- Client Map Start -->\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card client-map\">\n      <div class=\"card-block\">\n        <div class=\"client-detail\">\n          <div class=\"client-profile\">\n            <img src=\"assets/images/avatar-1.jpg\" alt=\"\">\n          </div>\n          <div class=\"client-contain\">\n            <h5>Gregory Johnes</h5>\n            <a href=\"javascript:\" class=\"text-muted\">gregory@demo.com</a>\n            <p class=\"text-muted m-0 p-t-10\">Product Manager</p>\n          </div>\n        </div>\n        <div class=\"card-block\">\n          <div class=\"client-card-box\">\n            <div class=\"row\">\n              <div class=\"col-6 text-center client-border p-10\">\n                <p class=\"text-muted m-0\">Invites</p>\n                <span class=\"text-c-blue f-20 f-w-600\">345</span>\n              </div>\n              <div class=\"col-6 text-center p-10\">\n                <p class=\"text-muted m-0\">Pending</p>\n                <span class=\"text-c-blue f-20 f-w-600\">12</span>\n              </div>\n            </div>\n            <div class=\"col-sm-12 client-border-card p-t-10\">\n              <p>Overall Activity</p>\n            </div>\n            <chart [type]=\"'line'\" [data]=\"clientMapChart1\" [options]=\"clientMapChartOption\" style=\"width: 100%; height: 70px;\"></chart>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card client-map\">\n      <div class=\"card-block\">\n        <div class=\"client-detail\">\n          <div class=\"client-profile\">\n            <img src=\"assets/images/widget/user-blur-bg.png\" alt=\"\">\n          </div>\n          <div class=\"client-contain\">\n            <h5>Gregory Johnes</h5>\n            <a href=\"javascript:\" class=\"text-muted\">gregory@demo.com</a>\n            <p class=\"text-muted m-0 p-t-10\">Product Manager</p>\n          </div>\n        </div>\n        <div class=\"card-block\">\n          <div class=\"client-card-box\">\n            <div class=\"row\">\n              <div class=\"col-6 text-center client-border p-10\">\n                <p class=\"text-muted m-0\">Invites</p>\n                <span class=\"text-c-pink f-20 f-w-600\">845</span>\n              </div>\n              <div class=\"col-6 text-center p-10\">\n                <p class=\"text-muted m-0\">Pending</p>\n                <span class=\"text-c-pink f-20 f-w-600\">02</span>\n              </div>\n            </div>\n            <div class=\"col-sm-12 client-border-card p-t-10\">\n              <p>Overall Activity</p>\n            </div>\n            <chart [type]=\"'line'\" [data]=\"clientMapChart2\" [options]=\"clientMapChartOption\" style=\"width: 100%; height: 70px;\"></chart>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-12 col-xl-4\">\n    <div class=\"card client-map\">\n      <div class=\"card-block\">\n        <div class=\"client-detail\">\n          <div class=\"client-profile\">\n            <img src=\"assets/images/avatar-1.jpg\" alt=\"\">\n          </div>\n          <div class=\"client-contain\">\n            <h5>Gregory Johnes</h5>\n            <a href=\"javascript:\" class=\"text-muted\">gregory@demo.com</a>\n            <p class=\"text-muted m-0 p-t-10\">Product Manager</p>\n          </div>\n        </div>\n        <div class=\"card-block\">\n          <div class=\"client-card-box\">\n            <div class=\"row\">\n              <div class=\"col-6 text-center client-border p-10\">\n                <p class=\"text-muted m-0\">Invites</p>\n                <span class=\"text-c-green f-20 f-w-600\">812</span>\n              </div>\n              <div class=\"col-6 text-center p-10\">\n                <p class=\"text-muted m-0\">Pending</p>\n                <span class=\"text-c-green f-20 f-w-600\">00</span>\n              </div>\n            </div>\n            <div class=\"col-sm-12 client-border-card p-t-10\">\n              <p>Overall Activity</p>\n            </div>\n            <chart [type]=\"'line'\" [data]=\"clientMapChart3\" [options]=\"clientMapChartOption\" style=\"width: 100%; height: 70px;\"></chart>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Client Map End -->\n  <!-- Sales Statestics Start -->\n  <div class=\"col-md-12\">\n    <div class=\"card sales-menu-card\">\n      <div class=\"card-header \">\n        <div class=\"card-header-left \">\n          <h5>Sales statestics</h5>\n        </div>\n        <div class=\"card-header-right\">\n          <i class=\"icofont icofont-spinner-alt-5 \"></i>\n        </div>\n      </div>\n      <div class=\"card-block\">\n        <div class=\"row valign-wrapper\">\n          <div class=\"col-sm-9\">\n            <div id=\"area-custom\" style=\" height:200px;\"></div>\n          </div>\n          <div class=\"col-sm-3\">\n            <i class=\"icofont icofont-social-opencart text-c-blue f-40 sales-icon m-r-20\"></i>\n            <div class=\"sales-contain d-inline-block\">\n              <h2 class=\"f-w-600\">$27,672</h2>\n              <p class=\"f-w-600 text-muted f-16\">Total sales</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"row valign-wrapper\">\n          <div class=\"col-sm-9\">\n            <div id=\"area-custom-2\" style=\" height:200px;\"></div>\n          </div>\n          <div class=\"col-sm-3\">\n            <i class=\"icofont icofont-cart-alt text-c-pink f-40 sales-icon m-r-20\"></i>\n            <div class=\"sales-contain d-inline-block\">\n              <h2 class=\"f-w-600\">56%</h2>\n              <p class=\"f-w-600 text-muted f-16\">Progress</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Sales Statestics End -->\n  <!-- Serve & Plan Start -->\n  <div class=\"col-md-12 col-xl-8\">\n    <app-card [title]=\"'Servey'\" [cardClass]=\"'serve-card'\">\n      <div class=\"serve-text d-inline-block p-b-10\">\n        <h2 class=\"d-inline-block m-r-15 f-w-600\">839</h2>\n        <i class=\"icofont icofont-caret-down text-c-green f-20 \"></i>\n      </div>\n      <div class=\"serve-text f-right\">\n        <h4 class=\"d-inline-block m-r-15 f-18 text-muted\">Week</h4>\n        <i class=\"icofont icofont-caret-down text-c-green f-20 \"></i>\n      </div>\n      <h4 class=\"text-muted\">Responded <span\n        class=\"text-c-green\">+40 </span>this week</h4>\n      <div class=\"row serve-chart-list\">\n        <div class=\"col-sm-4\">\n          <h6 class=\"p-b-10\">Peak Zone</h6>\n          <h6>Average Zone</h6>\n        </div>\n        <div class=\"col-sm-8\">\n          <div id=\"Servey-chart\" style=\"height:210px;width:100%\"></div>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <!-- Serve & Plan End -->\n  <!-- Contact Menu Start -->\n  <div class=\"col-md-12 col-xl-4\">\n    <app-card [title]=\"'Servey'\" [cardClass]=\"'invite-card'\" [blockClass]=\"'text-center'\">\n      <div class=\"invite-card-chart\">\n        <div id=\"solid-gauge1\" style=\"height:250px;\"></div>\n        <div class=\"invite-card-cont\">\n          <i class=\"icofont icofont-paper-plane text-c-green\"></i>\n          <span class=\"f-50\">391</span>\n          <hr>\n        </div>\n      </div>\n      <h6 class=\"f-w-600\">You are on track!</h6>\n      <p class=\"text-muted m-b-0\">You are close to your 528 invites\n        goal\n      </p>\n    </app-card>\n  </div>\n  <!-- Contact Menu End -->\n  <!-- Visitor Map Start -->\n  <div class=\"col-md-12 col-xl-6\">\n    <div class=\"card card-chart o-hidden\">\n      <div class=\"card-block\">\n        <h2 class=\"f-w-600 m-b-15\">43,678K</h2>\n        <h5>Daily income</h5>\n        <h6 class=\"text-muted d-inline-block card-chart-right f-w-600\"><i class=\"icofont icofont-long-arrow-up f-20 f-w-600\"></i>34%</h6>\n      </div>\n      <div id=\"realtimeupdate\"></div>\n    </div>\n  </div>\n  <div class=\"col-md-12 col-xl-6\">\n    <app-card [title]=\"'Fees collection'\" [blockClass]=\"'fees-card'\">\n      <div class=\"row\">\n        <div class=\"col-sm-4\">\n          <ul class=\"list-unstyled\">\n            <li>\n              <div class=\"legend-icon\">\n                <span class=\"bg-c-blue\"></span>\n              </div>\n              <div class=\"legend-cont\">\n                <p>$4,025</p>\n                <span>Collection</span>\n              </div>\n            </li>\n            <li>\n              <div class=\"legend-icon\">\n                <span class=\"bg-c-pink\"></span>\n              </div>\n              <div class=\"legend-cont\">\n                <p>$3,782</p>\n                <span>Fees</span>\n              </div>\n            </li>\n            <li>\n              <div class=\"legend-icon\">\n                <span class=\"bg-c-yellow\"></span>\n              </div>\n              <div class=\"legend-cont\">\n                <p>$3,586</p>\n                <span>Expence</span>\n              </div>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-sm-8\">\n          <div id=\"fees-collection\" style=\"max-width:100%;height:200px;\"></div>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <!-- Visitor Map End -->\n  <!-- Website Start -->\n  <div class=\"col-md-6 col-xl-6\">\n    <app-card [title]=\"'Website traffic'\" [blockClass]=\"'web-trafic p-t-0'\">\n      <div class=\"row\">\n        <div class=\"col-sm-5\">\n          <div id=\"website-traffic\" style=\"height:150px\"></div>\n        </div>\n        <div class=\"col-sm-7\">\n          <ul class=\"list-unstyled\">\n            <li>\n              <div class=\"legend-icon\">\n                <span class=\"bg-c-blue\"></span>\n              </div>\n              <div class=\"legend-cont\">\n                <p>Bounce</p>\n                <span>2834</span>\n              </div>\n            </li>\n            <li>\n              <div class=\"legend-icon\">\n                <span class=\"bg-c-pink\"></span>\n              </div>\n              <div class=\"legend-cont\">\n                <p>Registered</p>\n                <span>1254</span>\n              </div>\n            </li>\n            <li>\n              <div class=\"legend-icon\">\n                <span class=\"bg-c-yellow\"></span>\n              </div>\n              <div class=\"legend-cont\">\n                <p>Visitors</p>\n                <span>4623</span>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-md-12 col-xl-6\">\n    <app-card [title]=\"'Stock price'\" [blockClass]=\"'p-t-0 p-b-0'\">\n      <div class=\"row\">\n        <div class=\"col-sm-7\">\n          <p class=\"text-muted\">Lorem Ipsum is simply dummy text of\n            the printing and typesetting industry. Lorem Ipsum has\n            been the industry's standard dummy.\n          </p>\n        </div>\n        <div class=\"col-sm-5\">\n          <chart [type]=\"'line'\" [data]=\"StockProceChartData\" [options]=\"StockProceChartOption\" style=\"width:100%;height:150px;\"></chart>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <!-- Website End -->\n  <!-- Statetics Start -->\n  <div class=\"col-sm-12\">\n    <app-card [title]=\"'Statetics'\" [cardClass]=\"'statetic-card'\">\n      <h6 class=\"text-muted f-18 \">Total</h6>\n      <h4 class=\"f-w-600 \">$4,567.56</h4>\n      <div class=\"m-b-30 m-t-30\">\n        <div id=\"statetics-graph1\" style=\"height: 350px\"></div>\n      </div>\n      <div class=\"row \">\n        <div class=\"col\">\n          <i class=\"icofont icofont-bow f-40 text-c-blue icon-stat\"></i>\n          <div class=\"d-inline-block \">\n            <p class=\"text-muted m-l-20 m-b-5 f-w-600 \">Purchase</p>\n            <h4 class=\" m-l-20 m-b-0 f-w-600 \">23,452 </h4>\n          </div>\n        </div>\n        <div class=\"col d-inline-block\">\n          <div id=\"statetics-purchase1\" style=\"height: 80px\"></div>\n        </div>\n        <div class=\"col\">\n          <i class=\"icofont icofont-wallet f-40 text-c-green icon-stat\"></i>\n          <div class=\"d-inline-block \">\n            <p class=\"text-muted m-l-20 m-b-5 f-w-600 \">Rate</p>\n            <h4 class=\" m-l-20 m-b-0 f-w-600 \">12.45% </h4>\n          </div>\n        </div>\n        <div class=\"col d-inline-block\">\n          <div id=\"statetics-rate1\" style=\"height: 80px\"></div>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <!-- Statetics End -->\n  <!-- Visitor Start -->\n  <div class=\"col-md-12 col-xl-6\">\n    <app-card [title]=\"'Customers'\" [cardClass]=\"'customer-card'\">\n      <h3 class=\"text-center\">284,123</h3>\n      <div id=\"line-example\" style=\"height:350px;\"></div>\n    </app-card>\n  </div>\n  <div class=\"col-md-12 col-xl-6\">\n    <app-card [title]=\"'Visitors'\" [cardClass]=\"'visitor-map'\">\n      <div id=\"visitor-graph\" class=\"visitor-graph\"></div>\n    </app-card>\n  </div>\n  <!-- Visitor End -->\n  <!-- Summery Start -->\n  <div class=\"col-md-12 col-xl-6\">\n    <app-card [title]=\"'Summery'\" [cardClass]=\"'summery-card'\">\n      <div class=\"row\">\n        <div class=\"col-sm-6 b-r-default p-b-40\">\n          <h2 class=\"f-w-600\">13</h2>\n          <p class=\"text-muted f-w-600\">Active users</p>\n          <div class=\"progress\">\n            <div class=\"progress-bar bg-c-blue\" role=\"progressbar\"\n                 aria-valuemin=\"0\" aria-valuemax=\"100\"\n                 style=\"width:50%\">\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-6 p-b-40\">\n          <h2 class=\"f-w-600\">28</h2>\n          <p class=\"text-muted f-w-600\">Completed task</p>\n          <div class=\"progress\">\n            <div class=\"progress-bar bg-c-pink\" role=\"progressbar\"\n                 aria-valuemin=\"0\" aria-valuemax=\"100\"\n                 style=\"width:50%\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <hr>\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <chart [type]=\"'line'\" [data]=\"summaryChartData\" [options]=\"summaryChartOption\" style=\"height: 80px;\"></chart>\n        </div>\n        <div class=\"col-sm-6\">\n          <h2 class=\"f-w-600\">76</h2>\n          <p class=\"text-muted f-w-600\">Open task</p>\n          <div class=\"progress\">\n            <div class=\"progress-bar bg-c-green\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:50%\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <!-- summary end -->\n  <!-- Tasks Sale Start -->\n  <div class=\"col-md-12 col-xl-6 \">\n    <div class=\"card bg-c-pink week-sales-card \">\n      <div class=\"card-header \">\n        <div class=\"card-header-left \">\n          <h5>Last week sales</h5>\n        </div>\n        <div class=\"card-header-right\">\n          <i class=\"icofont icofont-spinner-alt-5\"></i>\n        </div>\n      </div>\n      <div id=\"last-week-sales\" class=\"last-week-sales\"></div>\n    </div>\n  </div>\n  <!-- Tasks Sale End -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/widget/widget-advance/widget-advance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetAdvanceComponent; });
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









var WidgetAdvanceComponent = (function () {
    function WidgetAdvanceComponent() {
        this.totalValueGraphData1 = buildChartJS('#fff', [45, 25, 35, 20, 45, 20, 40, 10, 30, 45], '#3a73f1', 'transparent');
        this.totalValueGraphData2 = buildChartJS('#fff', [10, 25, 35, 20, 10, 20, 15, 45, 15, 10], '#e55571', 'transparent');
        this.totalValueGraphData3 = buildChartJS('#fff', [5, 35, 45, 20, 10, 30, 15, 45, 15, 10], '#83a84c', 'transparent');
        this.totalValueGraphData4 = buildChartJS('#E99F36', [25, 35, 45, 20, 25, 30, 15, 45, 15, 1], '#E99F36', 'transparent');
        this.totalValueGraphOption = buildChartOption();
        this.designGraph1 = buildStackChartJS('#fff', [45, 25, 35, 20, 45, 20, 40, 10, 30, 45], 'transparent');
        this.designGraph2 = buildStackChartJS('#fff', [10, 25, 35, 20, 10, 20, 15, 45, 15, 10], 'transparent');
        this.designGraph3 = buildStackChartJS('#fff', [66, 60, 50, 55, 20, 55, 10, 35, 15, 25], 'transparent');
        this.designGraphOption = buildChartOption();
        this.orderCardChart1 = buildChartJS('#4680FE', [5, 35, 45, 20, 10, 30, 15, 45, 15, 10], '#fff', 'transparent');
        this.orderCardChart2 = buildChartJS('#FC6180', [45, 25, 35, 20, 45, 20, 40, 10, 30, 45], '#fff', 'transparent');
        this.orderCardChart3 = buildChartJS('#FFB64D', [10, 25, 35, 20, 10, 20, 15, 45, 15, 10], '#fff', 'transparent  ');
        this.orderCardChartOption = buildChartOption();
        this.powerCardChart1 = buildChartJS('#4680FE', [10, 25, 35, 20, 10, 20, 15, 45, 15, 10], '#fff', 'transparent');
        this.powerCardChart2 = buildChartJS('#FC6180', [45, 25, 35, 20, 45, 20, 40, 10, 30, 45], '#fff', 'transparent');
        this.powerCardChart3 = buildChartJS('#FFB64D', [5, 35, 45, 20, 10, 30, 15, 45, 15, 10], '#fff', 'transparent');
        this.powerCardChartOption = buildChartOption();
        this.clientMapChart1 = buildChartJS('#4680FE', [5, 35, 45, 20, 10, 30, 15, 45, 15, 10], '#fff', 'transparent');
        this.clientMapChart2 = buildChartJS('#FC6180', [35, 10, 35, 20, 47, 20, 15, 45, 15, 10], '#fff', 'transparent');
        this.clientMapChart3 = buildChartJS('#FFB64D', [45, 25, 35, 20, 45, 20, 40, 10, 30, 45], '#fff', 'transparent');
        this.clientMapChartOption = buildChartOption();
        this.StockProceChartData = buildChartJS('#FC6180', [10, 25, 35, 20, 10, 20, 15, 45, 15, 10], '#fff', 'transparent');
        this.StockProceChartOption = buildChartOption();
        this.summaryChartData = buildChartJS('#93BE52', [66, 60, 50, 55, 20, 55, 10, 35, 15, 25], '#fff', 'transparent');
        this.summaryChartOption = buildChartOption();
    }
    WidgetAdvanceComponent.prototype.ngOnInit = function () {
        var barw = $('#total-value-graph-4').width();
        $('#total-value-graph-4').sparkline([5, 6, 7, 4, 9, 5, 7, 5, 6, 8, 6, 5, 8, 4, 9, 5, 7, 5, 6, 8, 6, 5, 0], {
            type: 'bar',
            barWidth: barw / 24,
            height: '183px',
            tooltipClassname: 'chart-sparkline',
            barColor: '#e99f36'
        });
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
        AmCharts.makeChart('area-custom', {
            'type': 'serial',
            'theme': 'light',
            'hideCredits': true,
            'marginRight': 0,
            'marginLeft': 40,
            'autoMarginOffset': 20,
            'dataDateFormat': 'YYYY-MM-DD',
            'valueAxes': [{
                    'id': 'v1',
                    'axisAlpha': 0,
                    'lineAlpha': 0,
                    'gridAlpha': 0,
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
                        'color': '#ffffff',
                        'type': 'smoothedLine'
                    },
                    'fillAlphas': 0.2,
                    'bullet': 'round',
                    'bulletBorderAlpha': 1,
                    'bulletColor': '#FFFFFF',
                    'bulletSize': 5,
                    'hideBulletsCount': 50,
                    'lineThickness': 2,
                    'type': 'smoothedLine',
                    'lineColor': '#4680ff',
                    'title': 'red line',
                    'useLineColorForBulletBorder': true,
                    'valueField': 'value',
                    'balloonText': '<span style="font-size:18px;">[[value]]</span>'
                }],
            'chartCursor': {
                'valueLineEnabled': false,
                'valueLineBalloonEnabled': false,
                'cursorAlpha': 0,
                'zoomable': false,
                'valueZoomable': false,
                'valueLineAlpha': 0.5
            },
            'categoryField': 'date',
            'categoryAxis': {
                'parseDates': false,
                'dashLength': 1,
                'minorGridEnabled': false,
                'axisAlpha': 0,
                'fontSize': 0,
                'lineAlpha': 0,
                'gridAlpha': 0,
            },
            'dataProvider': [{
                    'date': '2012-07-27',
                    'value': 13
                }, {
                    'date': '2012-07-28',
                    'value': 11
                }, {
                    'date': '2012-07-29',
                    'value': 15
                }, {
                    'date': '2012-07-30',
                    'value': 16
                }, {
                    'date': '2012-07-31',
                    'value': 18
                }, {
                    'date': '2012-08-01',
                    'value': 13
                }, {
                    'date': '2012-08-02',
                    'value': 22
                }, {
                    'date': '2012-08-03',
                    'value': 23
                }, {
                    'date': '2012-08-04',
                    'value': 20
                }, {
                    'date': '2012-08-05',
                    'value': 17
                }, {
                    'date': '2012-08-06',
                    'value': 16
                }, {
                    'date': '2012-08-07',
                    'value': 18
                }, {
                    'date': '2012-08-08',
                    'value': 21
                }, {
                    'date': '2012-08-09',
                    'value': 26
                }, {
                    'date': '2012-08-10',
                    'value': 24
                }, {
                    'date': '2012-08-11',
                    'value': 29
                }, {
                    'date': '2012-08-12',
                    'value': 32
                }, {
                    'date': '2012-08-13',
                    'value': 18
                }, {
                    'date': '2012-08-14',
                    'value': 24
                }, {
                    'date': '2012-08-15',
                    'value': 22
                }, {
                    'date': '2012-08-16',
                    'value': 18
                }, {
                    'date': '2012-08-17',
                    'value': 19
                }, {
                    'date': '2012-08-18',
                    'value': 14
                }, {
                    'date': '2012-08-19',
                    'value': 15
                }, {
                    'date': '2012-08-20',
                    'value': 12
                }, {
                    'date': '2012-08-21',
                    'value': 8
                }, {
                    'date': '2012-08-22',
                    'value': 9
                }, {
                    'date': '2012-08-23',
                    'value': 8
                }, {
                    'date': '2012-08-24',
                    'value': 7
                }, {
                    'date': '2012-08-25',
                    'value': 5
                }, {
                    'date': '2012-08-26',
                    'value': 11
                }, {
                    'date': '2012-08-27',
                    'value': 13
                }, {
                    'date': '2012-08-28',
                    'value': 18
                }, {
                    'date': '2012-08-29',
                    'value': 20
                }, {
                    'date': '2012-08-30',
                    'value': 29
                }, {
                    'date': '2012-08-31',
                    'value': 33
                }, {
                    'date': '2012-09-01',
                    'value': 42
                }, {
                    'date': '2012-09-02',
                    'value': 35
                }, {
                    'date': '2012-09-03',
                    'value': 31
                }, {
                    'date': '2012-09-04',
                    'value': 47
                }, {
                    'date': '2012-09-05',
                    'value': 52
                }, {
                    'date': '2012-09-06',
                    'value': 46
                }, {
                    'date': '2012-09-07',
                    'value': 41
                }, {
                    'date': '2012-09-08',
                    'value': 43
                }, {
                    'date': '2012-09-09',
                    'value': 40
                }, {
                    'date': '2012-09-10',
                    'value': 39
                }, {
                    'date': '2012-09-11',
                    'value': 34
                }, {
                    'date': '2012-09-12',
                    'value': 29
                }, {
                    'date': '2012-09-13',
                    'value': 34
                }, {
                    'date': '2012-09-14',
                    'value': 37
                }, {
                    'date': '2012-09-15',
                    'value': 42
                }, {
                    'date': '2012-09-16',
                    'value': 49
                }]
        });
        AmCharts.makeChart('area-custom-2', {
            'type': 'serial',
            'theme': 'light',
            'hideCredits': true,
            'marginRight': 0,
            'marginLeft': 40,
            'autoMarginOffset': 20,
            'dataDateFormat': 'YYYY-MM-DD',
            'valueAxes': [{
                    'id': 'v1',
                    'axisAlpha': 0,
                    'lineAlpha': 0,
                    'gridAlpha': 0,
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
                        'color': '#ffffff',
                        'type': 'smoothedLine'
                    },
                    'fillAlphas': 0.2,
                    'bullet': 'round',
                    'bulletBorderAlpha': 1,
                    'bulletColor': '#FFFFFF',
                    'bulletSize': 5,
                    'hideBulletsCount': 50,
                    'lineThickness': 2,
                    'type': 'smoothedLine',
                    'lineColor': '#FC6180',
                    'title': 'red line',
                    'useLineColorForBulletBorder': true,
                    'valueField': 'value',
                    'balloonText': '<span style="font-size:18px;">[[value]]</span>'
                }],
            'chartCursor': {
                'valueLineEnabled': false,
                'valueLineBalloonEnabled': false,
                'cursorAlpha': 0,
                'zoomable': false,
                'valueZoomable': false,
                'valueLineAlpha': 0.5
            },
            'categoryField': 'date',
            'categoryAxis': {
                'parseDates': false,
                'dashLength': 1,
                'minorGridEnabled': false,
                'axisAlpha': 0,
                'fontSize': 0,
                'lineAlpha': 0,
                'gridAlpha': 0,
            },
            'dataProvider': [{
                    'date': '2012-11-13',
                    'value': 80
                }, {
                    'date': '2012-11-14',
                    'value': 81
                }, {
                    'date': '2012-11-15',
                    'value': 87
                }, {
                    'date': '2012-11-16',
                    'value': 82
                }, {
                    'date': '2012-11-17',
                    'value': 86
                }, {
                    'date': '2012-11-18',
                    'value': 80
                }, {
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
                    'value': 84
                }, {
                    'date': '2012-11-23',
                    'value': 82
                }, {
                    'date': '2012-11-24',
                    'value': 73
                }, {
                    'date': '2012-11-25',
                    'value': 71
                }, {
                    'date': '2012-11-26',
                    'value': 75
                }, {
                    'date': '2012-11-27',
                    'value': 79
                }, {
                    'date': '2012-11-28',
                    'value': 70
                }, {
                    'date': '2012-11-29',
                    'value': 73
                }, {
                    'date': '2012-11-30',
                    'value': 61
                }, {
                    'date': '2012-12-01',
                    'value': 62
                }, {
                    'date': '2012-12-02',
                    'value': 66
                }, {
                    'date': '2012-12-03',
                    'value': 65
                }, {
                    'date': '2012-12-04',
                    'value': 73
                }, {
                    'date': '2012-12-05',
                    'value': 79
                }, {
                    'date': '2012-12-06',
                    'value': 78
                }, {
                    'date': '2012-12-07',
                    'value': 78
                }, {
                    'date': '2012-12-08',
                    'value': 78
                }, {
                    'date': '2012-12-09',
                    'value': 74
                }, {
                    'date': '2012-12-10',
                    'value': 73
                }, {
                    'date': '2012-12-11',
                    'value': 75
                }, {
                    'date': '2012-12-12',
                    'value': 70
                }, {
                    'date': '2012-12-13',
                    'value': 77
                }, {
                    'date': '2012-12-14',
                    'value': 67
                }, {
                    'date': '2012-12-15',
                    'value': 62
                }, {
                    'date': '2012-12-16',
                    'value': 64
                }, {
                    'date': '2012-12-17',
                    'value': 61
                }, {
                    'date': '2012-12-18',
                    'value': 59
                }, {
                    'date': '2012-12-19',
                    'value': 53
                }, {
                    'date': '2012-12-20',
                    'value': 54
                }, {
                    'date': '2012-12-21',
                    'value': 56
                }, {
                    'date': '2012-12-22',
                    'value': 59
                }, {
                    'date': '2012-12-23',
                    'value': 58
                }, {
                    'date': '2012-12-24',
                    'value': 55
                }, {
                    'date': '2012-12-25',
                    'value': 52
                }, {
                    'date': '2012-12-26',
                    'value': 54
                }, {
                    'date': '2012-12-27',
                    'value': 50
                }, {
                    'date': '2012-12-28',
                    'value': 50
                }, {
                    'date': '2012-12-29',
                    'value': 51
                }, {
                    'date': '2012-12-30',
                    'value': 52
                }, {
                    'date': '2012-12-31',
                    'value': 58
                }, {
                    'date': '2013-01-01',
                    'value': 60
                }, {
                    'date': '2013-01-02',
                    'value': 67
                }, {
                    'date': '2013-01-03',
                    'value': 64
                }, {
                    'date': '2013-01-04',
                    'value': 66
                }, {
                    'date': '2013-01-05',
                    'value': 60
                }, {
                    'date': '2013-01-06',
                    'value': 63
                }, {
                    'date': '2013-01-07',
                    'value': 61
                }, {
                    'date': '2013-01-08',
                    'value': 60
                }, {
                    'date': '2013-01-09',
                    'value': 65
                }, {
                    'date': '2013-01-10',
                    'value': 75
                }, {
                    'date': '2013-01-11',
                    'value': 77
                }, {
                    'date': '2013-01-12',
                    'value': 78
                }, {
                    'date': '2013-01-13',
                    'value': 70
                }, {
                    'date': '2013-01-14',
                    'value': 70
                }, {
                    'date': '2013-01-15',
                    'value': 73
                }, {
                    'date': '2013-01-16',
                    'value': 71
                }, {
                    'date': '2013-01-17',
                    'value': 74
                }, {
                    'date': '2013-01-18',
                    'value': 78
                }, {
                    'date': '2013-01-19',
                    'value': 85
                }, {
                    'date': '2013-01-20',
                    'value': 82
                }, {
                    'date': '2013-01-21',
                    'value': 83
                }, {
                    'date': '2013-01-22',
                    'value': 88
                }, {
                    'date': '2013-01-23',
                    'value': 85
                }, {
                    'date': '2013-01-24',
                    'value': 85
                }, {
                    'date': '2013-01-25',
                    'value': 80
                }, {
                    'date': '2013-01-26',
                    'value': 87
                }, {
                    'date': '2013-01-27',
                    'value': 84
                }, {
                    'date': '2013-01-28',
                    'value': 83
                }, {
                    'date': '2013-01-29',
                    'value': 84
                }, {
                    'date': '2013-01-30',
                    'value': 81
                }]
        });
        AmCharts.makeChart('Servey-chart', {
            'type': 'serial',
            'hideCredits': true,
            'theme': 'light',
            'dataProvider': [{
                    'name': 'Mon',
                    'points': 5,
                    'color': '#cccccc',
                }, {
                    'name': 'Tue',
                    'points': 8,
                    'color': '#cccccc',
                }, {
                    'name': 'Wed',
                    'points': 7,
                    'color': '#cccccc',
                }, {
                    'name': 'Thu',
                    'points': 6,
                    'color': '#cccccc',
                }, {
                    'name': 'Fri',
                    'points': 8,
                    'color': '#cccccc',
                }, {
                    'name': 'Sat',
                    'points': 9,
                    'color': '#93BE52',
                }, {
                    'name': 'Sun',
                    'points': 10,
                    'color': '#93BE52',
                }],
            'valueAxes': [{
                    'maximum': 10,
                    'minimum': 0,
                    'axisAlpha': 0,
                    'gridAlpha': 0,
                    'position': 'left'
                }],
            'startDuration': 1,
            'graphs': [{
                    'balloonText': '<span style="font-size:13px;">[[category]]: <b>[[value]]</b></span>',
                    'bulletOffset': 10,
                    'bulletSize': 52,
                    'colorField': 'color',
                    'cornerRadiusTop': 12,
                    'fillAlphas': 0.8,
                    'columnWidth': 0.5,
                    'lineAlpha': 0,
                    'type': 'column',
                    'valueField': 'points'
                }],
            'marginTop': 0,
            'marginRight': 0,
            'marginLeft': 0,
            'marginBottom': 20,
            'autoMargins': false,
            'categoryField': 'name',
            'categoryAxis': {
                'axisAlpha': 0,
                'gridAlpha': 0,
                'inside': false,
                'tickLength': 0
            },
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
                            'color': '#E5E5E5',
                            'startValue': -35,
                            'endValue': 35,
                            'radius': '100%',
                            'innerRadius': '92%'
                        }, {
                            'color': '#93BE52',
                            'startValue': -35,
                            'endValue': 20,
                            'radius': '100%',
                            'innerRadius': '92%'
                        }]
                }],
            'export': {
                'enabled': true
            }
        });
        var targetSVG = 'M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17';
        targetSVG += ',2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067';
        targetSVG += ',5.5,9,5.5 S12.5,7.067,12.5,9z';
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
                'zoomLongitude': 130,
                'zoomLatitude': -20,
                'images': [{
                        'svgPath': targetSVG,
                        'zoomLevel': 3,
                        'scale': 1,
                        'title': 'United State',
                        'latitude': 10.6353,
                        'longitude': 220.2250
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
        var plot = $.plot('#realtimeupdate', [getRandomData()], {
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
        AmCharts.makeChart('fees-collection', {
            'theme': 'light',
            'type': 'serial',
            'hideCredits': true,
            'startDuration': 2,
            'dataProvider': [{
                    'country': 'Collection',
                    'visits': 4025,
                    'color': ' #4680ff'
                }, {
                    'country': 'Fees',
                    'visits': 3782,
                    'color': '#FC6180'
                }, {
                    'country': 'Expence',
                    'visits': 3586,
                    'color': '#FFB64D'
                }],
            'valueAxes': [{
                    'position': 'left',
                    'axisAlpha': 0,
                    'title': ''
                }],
            'graphs': [{
                    'balloonText': '[[category]]: <b>[[value]]</b>',
                    'fillColorsField': 'color',
                    'fillAlphas': 1,
                    'axisAlpha': 1,
                    'lineAlpha': 0.1,
                    'type': 'column',
                    'columnWidth': 0.5,
                    'valueField': 'visits'
                }],
            'depth3D': 0,
            'angle': 0,
            'chartCursor': {
                'categoryBalloonEnabled': false,
                'cursorAlpha': 0,
                'zoomable': false
            },
            'categoryField': 'country',
            'categoryAxis': {
                'gridPosition': 'start',
                'axisAlpha': 0,
                'gridAlpha': 0,
                'labelRotation': 0
            },
            'export': {
                'enabled': true
            }
        });
        AmCharts.makeChart('website-traffic', {
            'theme': 'light',
            'type': 'serial',
            'hideCredits': true,
            'startDuration': 2,
            'dataProvider': [{
                    'country': 'Collection',
                    'visits': 3586,
                    'color': ' #4680ff'
                }, {
                    'country': 'Fees',
                    'visits': 3782,
                    'color': '#FC6180'
                }, {
                    'country': 'Expence',
                    'visits': 4025,
                    'color': '#FFB64D'
                }],
            'valueAxes': [{
                    'position': 'left',
                    'gridAlpha': 0,
                    'axisAlpha': 0,
                    'labelsEnabled': false,
                    'title': ''
                }],
            'graphs': [{
                    'balloonText': '',
                    'fillColorsField': 'color',
                    'fillAlphas': 1,
                    'axisAlpha': 1,
                    'lineAlpha': 0.1,
                    'type': 'column',
                    'columnWidth': 0.5,
                    'valueField': 'visits'
                }],
            'depth3D': 0,
            'angle': 0,
            'chartCursor': {
                'categoryBalloonEnabled': false,
                'cursorAlpha': 0,
                'zoomable': false
            },
            'categoryField': 'country',
            'categoryAxis': {
                'gridPosition': 'start',
                'axisAlpha': 0,
                'labelsEnabled': false,
                'gridAlpha': 0,
                'labelRotation': 0
            },
            'export': {
                'enabled': true
            }
        });
        var plot_graph = $.plot('#statetics-graph1', [getRandomData()], {
            series: {
                shadowSize: 0,
                color: '#FC6180',
            },
            lines: {
                fill: true,
                fillColor: 'rgba(252, 97, 128, 0.25)',
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
                show: true,
            },
            xaxis: {
                show: false,
            }
        });
        setInterval(function () {
            plot_graph.setData([getRandomData()]);
            plot_graph.draw();
        }, 900);
        var plot_rate = $.plot('#statetics-rate1', [getRandomData()], {
            series: {
                shadowSize: 0,
                color: '#e0e0e0',
            },
            lines: {
                fill: true,
                fillColor: '#f5f5f5',
                borderWidth: 1,
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
            plot_rate.setData([getRandomData()]);
            plot_rate.draw();
        }, 900);
        var plot_purchase = $.plot('#statetics-purchase1', [getRandomData()], {
            series: {
                shadowSize: 0,
                color: '#e0e0e0',
            },
            lines: {
                fill: true,
                fillColor: '#f5f5f5',
                borderWidth: 1,
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
            plot_purchase.setData([getRandomData()]);
            plot_purchase.draw();
        }, 900);
        AmCharts.makeChart('line-example', {
            'type': 'serial',
            'marginTop': 0,
            'hideCredits': true,
            'marginRight': 0,
            'dataProvider': [{
                    'year': 'Jan',
                    'v1': 0.5,
                    'v2': 1.5
                },
                {
                    'year': 'Feb',
                    'v1': 1.5,
                    'v2': 1
                },
                {
                    'year': 'Mar',
                    'v1': 1,
                    'v2': 2.5
                },
                {
                    'year': 'Apr',
                    'v1': 2,
                    'v2': 1
                },
                {
                    'year': 'May',
                    'v1': 1.5,
                    'v2': 2.5
                },
                {
                    'year': 'Jun',
                    'v1': 4,
                    'v2': 3
                },
                {
                    'year': 'Jul',
                    'v1': 3,
                    'v2': 3.5
                },
                {
                    'year': 'Aug',
                    'v1': 5,
                    'v2': 3.5
                },
                {
                    'year': 'Sap',
                    'v1': 4,
                    'v2': 5.5
                },
            ],
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
                    'lineThickness': 1,
                    'negativeLineColor': '#4680ff',
                    'type': 'smoothedLine',
                    'valueField': 'v1'
                }, {
                    'id': 'g2',
                    'bullet': 'round',
                    'bulletSize': 9,
                    'lineColor': '#93BE52',
                    'lineThickness': 1,
                    'negativeLineColor': '#93BE52',
                    'type': 'smoothedLine',
                    'valueField': 'v2'
                }],
            'chartCursor': {
                'cursorAlpha': 0,
                'valueLineEnabled': false,
                'valueLineBalloonEnabled': true,
                'valueLineAlpha': false,
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
        AmCharts.makeChart('visitor-graph', {
            'type': 'serial',
            'hideCredits': true,
            'theme': 'light',
            'categoryField': 'year',
            'rotate': true,
            'startDuration': 1,
            'categoryAxis': {
                'gridPosition': 'start',
                'position': 'left',
                'lineAlpha': 0,
                'gridAlpha': 0,
            },
            'trendLines': [],
            'graphs': [{
                    'balloonText': 'Income:[[value]]',
                    'fillAlphas': 0.8,
                    'id': 'AmGraph-1',
                    'lineAlpha': 0.2,
                    'title': 'Income',
                    'type': 'column',
                    // 'fillColors': '#9BBAFF',
                    'fillColors': '#fc6180',
                    'valueField': 'income'
                },
                {
                    'balloonText': 'Expenses:[[value]]',
                    'fillAlphas': 0.8,
                    'id': 'AmGraph-2',
                    'lineAlpha': 0.2,
                    'title': 'Expenses',
                    'type': 'column',
                    'fillColors': '#FFB64D',
                    'valueField': 'expenses'
                }
            ],
            'guides': [],
            'valueAxes': [{
                    'id': 'ValueAxis-1',
                    'axisAlpha': 0
                }],
            'allLabels': [],
            'balloon': {},
            'titles': [],
            'dataProvider': [{
                    'year': 2005,
                    'income': 23.5,
                    'expenses': 18.1
                },
                {
                    'year': 2006,
                    'income': 26.2,
                    'expenses': 22.8
                },
                {
                    'year': 2007,
                    'income': 28.0,
                    'expenses': 23.9
                },
                {
                    'year': 2008,
                    'income': 23.5,
                    'expenses': 25.1
                },
                {
                    'year': 2009,
                    'income': 24.6,
                    'expenses': 25
                },
                {
                    'year': 2010,
                    'income': 20.6,
                    'expenses': 22
                },
                {
                    'year': 2011,
                    'income': 23,
                    'expenses': 26
                }
            ],
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
    };
    return WidgetAdvanceComponent;
}());
WidgetAdvanceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-widget-advance',
        template: __webpack_require__("../../../../../src/app/pages/widget/widget-advance/widget-advance.component.html"),
        styles: [__webpack_require__("../../../../../src/assets/charts/radial/radial.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [])
], WidgetAdvanceComponent);

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
function buildStackChartJS(a, b, f) {
    if (f == null) {
        f = 'rgba(0,0,0,0)';
    }
    return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
        datasets: [{
                label: '',
                borderColor: a,
                borderWidth: 1,
                // lineTension: 0,
                hitRadius: 30,
                pointRadius: 1,
                pointHoverRadius: 4,
                pointBorderWidth: 2,
                pointHoverBorderWidth: 12,
                pointBackgroundColor: '#fff',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: a,
                pointHoverBorderColor: '#000000',
                fill: true,
                backgroundColor: f,
                data: b,
            }]
    };
}
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
//# sourceMappingURL=widget-advance.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/widget/widget-advance/widget-advance.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetChartAdvanceRoutes", function() { return WidgetChartAdvanceRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetAdvanceModule", function() { return WidgetAdvanceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__widget_advance_component__ = __webpack_require__("../../../../../src/app/pages/widget/widget-advance/widget-advance.component.ts");
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






var WidgetChartAdvanceRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__widget_advance_component__["a" /* WidgetAdvanceComponent */],
        data: {
            breadcrumb: 'Widget Advanced',
            icon: 'icofont-speed-meter bg-c-blue'
        }
    }
];
var WidgetAdvanceModule = (function () {
    function WidgetAdvanceModule() {
    }
    return WidgetAdvanceModule;
}());
WidgetAdvanceModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(WidgetChartAdvanceRoutes),
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__["ChartModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__widget_advance_component__["a" /* WidgetAdvanceComponent */]]
    })
], WidgetAdvanceModule);

//# sourceMappingURL=widget-advance.module.js.map

/***/ })

});
//# sourceMappingURL=widget-advance.module.chunk.js.map