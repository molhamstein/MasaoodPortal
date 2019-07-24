webpackJsonp(["dashboard-default.module"],{

/***/ "../../../../../src/app/pages/dashboard/dashboard-default/dashboard-default.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard-default/dashboard-default.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <!-- card1 start -->\n  <div class=\"col-md-6 col-xl-3\">\n    <div class=\"card widget-card-1\">\n      <div class=\"card-block-small\">\n        <i class=\"icofont icofont-pie-chart bg-c-blue card1-icon\"></i>\n        <span class=\"text-c-blue f-w-600\">Use space</span>\n        <h4>49/50GB</h4>\n        <div>\n        <span class=\"f-left m-t-10 text-muted\">\n          <i class=\"text-c-blue f-16 icofont icofont-warning m-r-10\"></i>Get more space\n        </span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- card1 end -->\n  <!-- card2 start -->\n  <div class=\"col-md-6 col-xl-3\">\n    <div class=\"card widget-card-1\">\n      <div class=\"card-block-small\">\n        <i class=\"icofont icofont-ui-home bg-c-pink card1-icon\"></i>\n        <span class=\"text-c-pink f-w-600\">Revenue</span>\n        <h4>$23,589</h4>\n        <div>\n          <span class=\"f-left m-t-10 text-muted\">\n            <i class=\"text-c-pink f-16 icofont icofont-calendar m-r-10\"></i>Last 24 hours\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- card2 end -->\n  <!-- card3 start -->\n  <div class=\"col-md-6 col-xl-3\">\n    <div class=\"card widget-card-1\">\n      <div class=\"card-block-small\">\n        <i class=\"icofont icofont-warning-alt bg-c-green card1-icon\"></i>\n        <span class=\"text-c-green f-w-600\">Fixed issue</span>\n        <h4>45</h4>\n        <div>\n          <span class=\"f-left m-t-10 text-muted\">\n            <i class=\"text-c-green f-16 icofont icofont-tag m-r-10\"></i>Tracked from microsoft\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- card3 end -->\n  <!-- card4 start -->\n  <div class=\"col-md-6 col-xl-3\">\n    <div class=\"card widget-card-1\">\n      <div class=\"card-block-small\">\n        <i class=\"icofont icofont-social-twitter bg-c-yellow card1-icon\"></i>\n        <span class=\"text-c-yellow f-w-600\">Followers</span>\n        <h4>+562</h4>\n        <div>\n          <span class=\"f-left m-t-10 text-muted\">\n            <i class=\"text-c-yellow f-16 icofont icofont-refresh m-r-10\"></i>Just update\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- card4 end -->\n\n  <!-- Statistics Start -->\n  <div class=\"col-md-12 col-xl-8\">\n    <app-card [title]=\"'Statistics'\">\n        <div id=\"line-example\" class=\"line-example\">\n          <div id=\"statistics-chart\" style=\"height:300px;\"></div>\n        </div>\n    </app-card>\n  </div>\n  <div class=\"col-md-12 col-xl-4\">\n    <div class=\"card card-blue total-card\">\n      <div class=\"card-block\">\n        <div class=\"text-left\">\n          <h4>4000</h4>\n          <p class=\"m-0\">Total Sales</p>\n        </div>\n        <span class=\"label bg-c-blue value-badges\">12%</span>\n      </div>\n      <chart [type]=\"'line'\" [data]=\"totalValueGraphData1\" [options]=\"totalValueGraphOption\" style=\"width: 100%; height: 100px;\"></chart>\n    </div>\n\n    <div class=\"card card-pink total-card\">\n      <div class=\"card-block\">\n        <div class=\"text-left\">\n          <h4>489</h4>\n          <p class=\"m-0\">Total Comment</p>\n        </div>\n        <span class=\"label bg-c-pink value-badges\">15%</span>\n      </div>\n      <chart [type]=\"'line'\" [data]=\"totalValueGraphData2\" [options]=\"totalValueGraphOption\" style=\"width: 100%; height: 100px;\"></chart>\n    </div>\n\n  </div>\n\n  <!-- Statistics End -->\n\n  <!-- Statistics card start -->\n  <div class=\"col-md-12 col-xl-4\">\n    <div class=\"card widget-statstic-card\">\n      <div class=\"card-header\">\n        <div class=\"card-header-left\">\n          <h5>Statistics</h5>\n          <p class=\"p-t-10 m-b-0 text-c-blue\">Compared to last week</p>\n        </div>\n      </div>\n      <div class=\"card-block\">\n        <i class=\"icofont icofont-presentation-alt st-icon bg-c-blue\"></i>\n\n        <div class=\"text-left\">\n          <h3 class=\"d-inline-block\">5,456</h3>\n          <i class=\"icofont icofont-long-arrow-up f-30 text-c-green\"></i>\n          <span class=\"f-right\">23%</span>\n        </div>\n\n      </div>\n    </div>\n  </div>\n  <!-- Statistics card end -->\n  <!-- Statistics card start -->\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card widget-statstic-card\">\n      <div class=\"card-header\">\n        <div class=\"card-header-left\">\n          <h5>Unique visitor</h5>\n          <p class=\"p-t-10 m-b-0 text-c-pink\">55% from last 28 hours</p>\n        </div>\n      </div>\n      <div class=\"card-block\">\n        <i class=\"icofont icofont-users-social st-icon bg-c-pink txt-lite-color\"></i>\n\n        <div class=\"text-left\">\n          <h3 class=\"d-inline-block\">3,874</h3>\n          <i class=\"icofont icofont-long-arrow-down text-c-pink f-30 \"></i>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Statistics card end -->\n  <!-- Statistics card start -->\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card widget-statstic-card\">\n      <div class=\"card-header\">\n        <div class=\"card-header-left\">\n          <h5>New orders</h5>\n          <p class=\"p-t-10 m-b-0 text-c-yellow\">54% From last month</p>\n        </div>\n      </div>\n      <div class=\"card-block\">\n        <i class=\"icofont icofont-chart-line st-icon bg-c-yellow\"></i>\n\n        <div class=\"text-left\">\n          <h3 class=\"d-inline-block\">5,456</h3>\n          <i class=\"icofont icofont-long-arrow-up text-c-green f-30 \"></i>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Statistics card end -->\n\n  <!-- email Sent Start -->\n  <div class=\"col-md-12\">\n    <app-card [title]=\"'Email sent'\" [cardClass]=\"'email-sent-card'\">\n      <div id=\"email-sent\" style=\"max-width:100%;height:400px;\"></div>\n    </app-card>\n  </div>\n  <!-- email Sent End -->\n\n  <!-- data widget start -->\n  <div class=\"col-md-12 col-xl-6\">\n    <app-card [title]=\"'Time spent : project &amp; task'\" [cardClass]=\"'project-task'\" [blockClass]=\"'p-b-10'\">\n      <div class=\"table-responsive\">\n        <table class=\"table table-hover\">\n          <thead>\n          <tr>\n            <th>Project & Task</th>\n            <th>Time Spents</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <td>\n              <div class=\"task-contain\">\n                <h6 class=\"bg-c-blue d-inline-block text-center\">U</h6>\n                <p class=\"d-inline-block m-l-20\">UI Design</p>\n              </div>\n            </td>\n            <td>\n              <p class=\"d-inline-block m-r-20\">4 : 36</p>\n              <div class=\"progress d-inline-block\">\n                <div class=\"progress-bar bg-c-blue\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:80%\">\n                </div>\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <div class=\"task-contain\">\n                <h6 class=\"bg-c-pink d-inline-block text-center\">R</h6>\n                <p class=\"d-inline-block m-l-20\">Redesign Android App</p>\n              </div>\n            </td>\n            <td>\n              <p class=\"d-inline-block m-r-20\">4 : 36</p>\n              <div class=\"progress d-inline-block\">\n                <div class=\"progress-bar bg-c-pink\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:60%\">\n                </div>\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <div class=\"task-contain\">\n                <h6 class=\"bg-c-yellow d-inline-block text-center\">L</h6>\n                <p class=\"d-inline-block m-l-20\">Logo Design</p>\n              </div>\n            </td>\n            <td>\n              <p class=\"d-inline-block m-r-20\">4 : 36</p>\n              <div class=\"progress d-inline-block\">\n                <div class=\"progress-bar bg-c-yellow\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:50%\">\n                </div>\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <div class=\"task-contain\">\n                <h6 class=\"bg-c-green d-inline-block text-center\">A</h6>\n                <p class=\"d-inline-block m-l-20\">Appestia landing Page</p>\n              </div>\n            </td>\n            <td>\n              <p class=\"d-inline-block m-r-20\">4 : 36</p>\n              <div class=\"progress d-inline-block\">\n                <div class=\"progress-bar bg-c-green\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:50%\">\n                </div>\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <div class=\"task-contain\">\n                <h6 class=\"bg-c-blue d-inline-block text-center\">L</h6>\n                <p class=\"d-inline-block m-l-20\">Logo Design</p>\n              </div>\n            </td>\n            <td>\n              <p class=\"d-inline-block m-r-20\">4 : 36</p>\n              <div class=\"progress d-inline-block\">\n                <div class=\"progress-bar bg-c-blue\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:50%\">\n                </div>\n              </div>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-md-12 col-xl-6\">\n    <app-card [title]=\"'To do list'\" [cardClass]=\"'add-task-card'\" [blockClass]=\"'p-b-0'\">\n      <div class=\"to-do-list\">\n        <div class=\"checkbox-fade fade-in-primary d-block\">\n          <label class=\"check-task d-block\">\n            <input type=\"checkbox\" value=\"\" (change)=\"onTaskStatusChange($event)\">\n            <span class=\"cr\">\n                <i class=\"cr-icon icofont icofont-ui-check txt-default\"></i>\n            </span>\n            <span><h6>Schedule Meeting with Compnes <span class=\"label bg-c-green m-l-10 f-10\">2 week</span></h6></span>\n            <div class=\"task-card-img m-l-40\">\n              <a href=\"javascript:\"><img src=\"assets/images/avatar-1.jpg\" placement=\"top\" ngbTooltip=\"Lary Doe\" class=\"img-40\"></a>\n              <a href=\"javascript:\"><img src=\"assets/images/avatar-2.jpg\" placement=\"top\" ngbTooltip=\"Alia\" class=\"img-40 m-l-10\"></a>\n            </div>\n          </label>\n        </div>\n      </div>\n      <div class=\"to-do-list\">\n        <div class=\"checkbox-fade fade-in-primary d-block\">\n          <label class=\"check-task d-block\">\n            <input type=\"checkbox\" value=\"\" (change)=\"onTaskStatusChange($event)\">\n            <span class=\"cr\">\n                <i class=\"cr-icon icofont icofont-ui-check txt-default\"></i>\n            </span>\n            <span><h6>Meeting With HOD's and borad</h6><p class=\"text-muted m-l-30\">23 january 2003</p></span>\n          </label>\n        </div>\n      </div>\n      <div class=\"to-do-list\">\n        <div class=\"checkbox-fade fade-in-primary d-block\">\n          <label class=\"check-task d-block\">\n            <input type=\"checkbox\" value=\"\" (change)=\"onTaskStatusChange($event)\">\n            <span class=\"cr\">\n                <i class=\"cr-icon icofont icofont-ui-check txt-default\"></i>\n            </span>\n            <span><h6>Create template, admin with responsive<span class=\"label bg-c-pink m-l-10\">2 week</span></h6></span>\n            <div class=\"task-card-img m-l-40\">\n              <a href=\"javascript:\"><img src=\"assets/images/avatar-2.jpg\" placement=\"top\" ngbTooltip=\"Alia\" class=\"img-40\"></a>\n              <a href=\"javascript:\"><img src=\"assets/images/avatar-3.jpg\" placement=\"top\" ngbTooltip=\"Suzen\" class=\"img-40 m-l-10\"></a>\n              <a href=\"javascript:\"><img src=\"assets/images/avatar-4.jpg\" placement=\"top\" ngbTooltip=\"Lary Doe\" class=\"img-40 m-l-10\"></a>\n              <a href=\"javascript:\"><img src=\"assets/images/avatar-2.jpg\" placement=\"top\" ngbTooltip=\"Josephin Doe\" class=\"img-40 m-l-10\"></a>\n            </div>\n          </label>\n        </div>\n      </div>\n      <div class=\"to-do-list\">\n        <div class=\"checkbox-fade fade-in-primary d-block\">\n          <label class=\"check-task d-block\">\n            <input type=\"checkbox\" value=\"\" (change)=\"onTaskStatusChange($event)\">\n            <span class=\"cr\">\n                <i class=\"cr-icon icofont icofont-ui-check txt-default\"></i>\n            </span>\n            <span><h6>Meeting With HOD's and borad</h6>\n            <p class=\"text-muted m-l-30\">23 january 2003</p></span>\n            <div class=\"task-card-img m-l-40\">\n              <a href=\"javascript:\"><img src=\"assets/images/avatar-2.jpg\" placement=\"top\" ngbTooltip=\"Lary Doe\" class=\"img-40\"></a>\n              <a href=\"javascript:\"><img src=\"assets/images/avatar-3.jpg\" placement=\"top\" ngbTooltip=\"Alia\" class=\"img-40 m-l-10\"></a>\n              <a href=\"javascript:\"><img src=\"assets/images/avatar-2.jpg\" placement=\"top\" ngbTooltip=\"Josephin Doe\" class=\"img-40 m-l-10\"></a>\n            </div>\n          </label>\n        </div>\n      </div>\n\n    </app-card>\n  </div>\n  <!-- data widget End -->\n\n  <!-- weather Start -->\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card \">\n      <div class=\"card-block weather-update\">\n        <h4 class=\"text-center f-w-600 p-b-20\">Weather Update</h4>\n        <div class=\"row\">\n          <div class=\"col-md-12 text-center\">\n            <svg version=\"1.1\" id=\"cloudSun\" style=\"height:160px;width:200px\" class=\"climacon climacon_cloudSun\" viewBox=\"15 15 70 70\">\n              <clipPath id=\"cloudFillClip\">\n                <path d=\"M15,15v70h70V15H15z M59.943,61.639c-3.02,0-12.381,0-15.999,0c-6.626,0-11.998-5.371-11.998-11.998c0-6.627,5.372-11.999,11.998-11.999c5.691,0,10.434,3.974,11.665,9.29c1.252-0.81,2.733-1.291,4.334-1.291c4.418,0,8,3.582,8,8C67.943,58.057,64.361,61.639,59.943,61.639z\"/>\n              </clipPath>\n              <clipPath id=\"sunCloudFillClip\">\n                <path d=\"M15,15v70h70V15H15z M57.945,49.641c-4.417,0-8-3.582-8-7.999c0-4.418,3.582-7.999,8-7.999s7.998,3.581,7.998,7.999C65.943,46.059,62.362,49.641,57.945,49.641z\"/>\n              </clipPath>\n              <g class=\"climacon_iconWrap climacon_cloudSun-iconWrap\">\n                <g clip-path=\"url(#cloudFillClip)\">\n                  <g class=\"climacon_componentWrap climacon_componentWrap-sun climacon_componentWrap-sun_cloud\"  >\n                    <g class=\"climacon_componentWrap climacon_componentWrap_sunSpoke\">\n                      <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-orth\" d=\"M80.029,43.611h-3.998c-1.105,0-2-0.896-2-1.999s0.895-2,2-2h3.998c1.104,0,2,0.896,2,2S81.135,43.611,80.029,43.611z\"/>\n                      <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north\" d=\"M72.174,30.3c-0.781,0.781-2.049,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l2.828-2.828c0.779-0.781,2.047-0.781,2.828,0c0.779,0.781,0.779,2.047,0,2.828L72.174,30.3z\"/>\n                      <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north\" d=\"M58.033,25.614c-1.105,0-2-0.896-2-2v-3.999c0-1.104,0.895-2,2-2c1.104,0,2,0.896,2,2v3.999C60.033,24.718,59.135,25.614,58.033,25.614z\"/>\n                      <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north\" d=\"M43.892,30.3l-2.827-2.828c-0.781-0.781-0.781-2.047,0-2.828c0.78-0.781,2.047-0.781,2.827,0l2.827,2.828c0.781,0.781,0.781,2.047,0,2.828C45.939,31.081,44.673,31.081,43.892,30.3z\"/>\n                      <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north\" d=\"M42.033,41.612c0,1.104-0.896,1.999-2,1.999h-4c-1.104,0-1.998-0.896-1.998-1.999s0.896-2,1.998-2h4C41.139,39.612,42.033,40.509,42.033,41.612z\"/>\n                      <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north\" d=\"M43.892,52.925c0.781-0.78,2.048-0.78,2.827,0c0.781,0.78,0.781,2.047,0,2.828l-2.827,2.827c-0.78,0.781-2.047,0.781-2.827,0c-0.781-0.78-0.781-2.047,0-2.827L43.892,52.925z\"/>\n                      <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north\" d=\"M58.033,57.61c1.104,0,2,0.895,2,1.999v4c0,1.104-0.896,2-2,2c-1.105,0-2-0.896-2-2v-4C56.033,58.505,56.928,57.61,58.033,57.61z\"/>\n                      <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north\" d=\"M72.174,52.925l2.828,2.828c0.779,0.78,0.779,2.047,0,2.827c-0.781,0.781-2.049,0.781-2.828,0l-2.828-2.827c-0.781-0.781-0.781-2.048,0-2.828C70.125,52.144,71.391,52.144,72.174,52.925z\"/>\n                    </g>\n                    <g class=\"climacon_wrapperComponent climacon_wrapperComponent-sunBody\" clip-path=\"url(#sunCloudFillClip)\">\n                      <circle class=\"climacon_component climacon_component-stroke climacon_component-stroke_sunBody\" cx=\"58.033\" cy=\"41.612\" r=\"11.999\"/>\n                    </g>\n                  </g>\n                </g>\n                <g class=\"climacon_wrapperComponent climacon_wrapperComponent-cloud\" clip-path=\"url(#cloudFillClip)\">\n                  <path class=\"climacon_component climacon_component-stroke climacon_component-stroke_cloud\" d=\"M44.033,65.641c-8.836,0-15.999-7.162-15.999-15.998c0-8.835,7.163-15.998,15.999-15.998c6.006,0,11.233,3.312,13.969,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,6.625-5.371,11.998-11.998,11.998C57.26,65.641,47.23,65.641,44.033,65.641z\"/>\n                </g>\n              </g>\n            </svg>\n          </div>\n          <div class=\"col-md-12 text-center\">\n            <h2 class=\"p-b-30 f-w-600\">23 ° C</h2>\n          </div>\n        </div>\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n      </div>\n    </div>\n  </div>\n  <!-- weather End -->\n\n  <!-- browser Start -->\n  <div class=\"col-md-6 col-xl-4\">\n    <app-card [title]=\"'Browser Stats'\">\n      <div class=\"browser-card p-b-15 \">\n        <p class=\"d-inline-block m-0 \">Google Crome</p>\n        <button class=\"btn bg-c-blue btn-round float-right btn-browser \">50%</button>\n      </div>\n      <div class=\"browser-card b-t-default p-t-15 p-b-15 \">\n        <p class=\"d-inline-block m-0 \">Mozila Firefox</p>\n        <button class=\"btn bg-c-pink btn-round float-right btn-browser \">12%</button>\n      </div>\n      <div class=\"browser-card b-t-default p-t-15 p-b-15 \">\n        <p class=\"d-inline-block m-0 \">Apple Safari</p>\n        <button class=\"btn bg-c-yellow btn-round float-right btn-browser \">23%</button>\n      </div>\n      <div class=\"browser-card b-t-default p-t-15 p-b-15 \">\n        <p class=\"d-inline-block m-0 \">Internet Explorer</p>\n        <button class=\"btn bg-c-green btn-round float-right btn-browser \">17%</button>\n      </div>\n      <div class=\"browser-card b-t-default p-t-15 p-b-15 \">\n        <p class=\"d-inline-block m-0 \">Opera Mini</p>\n        <button class=\"btn bg-c-yellow btn-round float-right btn-browser \">07%</button>\n      </div>\n      <div class=\"browser-card b-t-default p-t-15\">\n        <p class=\"d-inline-block m-0 \">Microsoft Edge</p>\n        <button class=\"btn bg-c-yellow btn-round float-right btn-browser \">28%</button>\n      </div>\n    </app-card>\n  </div>\n  <!-- browser End -->\n\n  <!-- profile Start -->\n  <div class=\"col-md-12 col-xl-4\">\n    <div class=\"card card-contact-box \">\n      <div class=\"card-block \">\n        <div class=\"card-contain text-center \">\n          <img src=\"assets/images/avatar-1.jpg\" alt=\" \">\n          <h6 class=\"f-w-600 f-20 p-b-5 m-0 p-t-15 \">Gregory Johan</h6>\n          <a href=\"javascript:\">gregory.johan@demo.com</a>\n          <p class=\"text-muted p-b-25 m-0 p-t-5 \">Software Developer</p>\n          <div class=\"contain-card p-t-30 p-b-10 \">\n            <a href=\"javascript:\"><img src=\"assets/images/avatar-2.jpg\" placement=\"top\" ngbTooltip=\"Alia\" class=\"img-40\"></a>\n            <a href=\"javascript:\"><img src=\"assets/images/avatar-3.jpg\" placement=\"top\" ngbTooltip=\"Suzen\" class=\"img-40 m-l-5\"></a>\n            <a href=\"javascript:\"><img src=\"assets/images/avatar-4.jpg\" placement=\"top\" ngbTooltip=\"Lary Doe\" class=\"img-40 m-l-5\"></a>\n            <a href=\"javascript:\"><img src=\"assets/images/avatar-2.jpg\" placement=\"top\" ngbTooltip=\"Josephin Doe\" class=\"img-40 m-l-5\"></a>\n          </div>\n        </div>\n      </div>\n      <div class=\"b-t-default\">\n        <div class=\"row m-0\">\n          <div class=\"col-6 f-btn text-center b-r-default p-t-15 p-b-15 \">\n            <a href=\"javascript:\">\n              <i class=\"icofont icofont-ui-message text-muted m-r-10 \"></i>\n              <p class=\"text-muted m-0 text-uppercase d-inline-block \">Messages</p>\n            </a>\n          </div>\n          <div class=\"col-6 f-btn text-center p-t-15 p-b-15 \">\n            <a href=\"javascript:\">\n              <i class=\"icofont icofont-user text-muted m-r-10 \"></i>\n              <p class=\"text-muted m-0 text-uppercase d-inline-block \">Profile</p>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- profile End -->\n\n  <!-- project overview Start -->\n  <div class=\"col-md-12 col-xl-8\">\n    <app-card [title]=\"'Recent Comments'\" [blockClass]=\"'p-0'\">\n      <div class=\"card-comment \">\n        <div class=\"card-block-small\">\n          <img class=\"img-radius img-50\" src=\"assets/images/avatar-1.jpg\" alt=\"user-1\">\n          <div class=\"comment-desc\">\n            <h6>Luciano Durk</h6>\n            <p class=\"text-muted \">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>\n            <div class=\"comment-btn\">\n              <button class=\"btn bg-c-blue btn-round btn-comment \">Action</button>\n            </div>\n            <div class=\"date\">\n              <i>04 October 2015</i>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-comment \">\n        <div class=\"card-block-small\">\n          <img class=\"img-radius img-50\" src=\"assets/images/avatar-2.jpg\" alt=\"user-4\">\n          <div class=\"comment-desc\">\n            <h6>John Doe</h6>\n            <p class=\"text-muted \">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>\n            <div class=\"comment-btn\">\n              <button class=\"btn bg-c-pink btn-round btn-comment \">Approved</button>\n            </div>\n            <div class=\"date\">\n              <i>16 December 2015</i>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-comment \">\n        <div class=\"card-block-small\">\n          <img class=\"img-radius img-50\" src=\"assets/images/avatar-3.jpg\" alt=\"user-2\">\n          <div class=\"comment-desc\">\n            <h6>Planner Board</h6>\n            <p class=\"text-muted \">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>\n            <div class=\"comment-btn\">\n              <button class=\"btn bg-c-green btn-round btn-comment \">Rejected</button>\n            </div>\n            <div class=\"date\">\n              <i>12 Saptember 2015</i>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-comment \">\n        <div class=\"card-block-small\">\n          <img class=\"img-radius img-50\" src=\"assets/images/avatar-1.jpg\" alt=\"user-3\">\n          <div class=\"comment-desc\">\n            <h6>Luciano Durk</h6>\n            <p class=\"text-muted \">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>\n            <div class=\"comment-btn\">\n              <button class=\"btn bg-c-pink btn-round btn-comment \">Approved</button>\n            </div>\n            <div class=\"date\">\n              <i>20 October 2015</i>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-comment \">\n        <div class=\"card-block-small\">\n          <img class=\"img-radius img-50\" src=\"assets/images/avatar-3.jpg\" alt=\"user-2\">\n          <div class=\"comment-desc\">\n            <h6>Planner Board</h6>\n            <p class=\"text-muted \">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>\n            <div class=\"comment-btn\">\n              <button class=\"btn bg-c-green btn-round btn-comment \">Rejected</button>\n            </div>\n            <div class=\"date\">\n              <i>12 Saptember 2015</i>\n            </div>\n          </div>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-md-12 col-xl-4\">\n    <div class=\"card fb-card\">\n      <div class=\"card-header\">\n        <i class=\"icofont icofont-social-facebook\"></i>\n        <div class=\"d-inline-block\">\n          <h5>facebook</h5>\n          <span>blog page timeline</span>\n        </div>\n      </div>\n      <div class=\"card-block text-center\">\n        <div class=\"row\">\n          <div class=\"col-6 b-r-default\">\n            <h2>23</h2>\n            <p class=\"text-muted\">Active</p>\n          </div>\n          <div class=\"col-6\">\n            <h2>23</h2>\n            <p class=\"text-muted\">Comment</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"card dribble-card\">\n      <div class=\"card-header\">\n        <i class=\"icofont icofont-social-dribbble\"></i>\n        <div class=\"d-inline-block\">\n          <h5>dribble</h5>\n          <span>Product page analysis</span>\n        </div>\n      </div>\n      <div class=\"card-block text-center\">\n        <div class=\"row\">\n          <div class=\"col-6 b-r-default\">\n            <h2>23</h2>\n            <p class=\"text-muted\">Live</p>\n          </div>\n          <div class=\"col-6\">\n            <h2>23</h2>\n            <p class=\"text-muted\">Message</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"card twitter-card\">\n      <div class=\"card-header\">\n        <i class=\"icofont icofont-social-twitter\"></i>\n        <div class=\"d-inline-block\">\n          <h5>twitter</h5>\n          <span>current new timeline</span>\n        </div>\n      </div>\n      <div class=\"card-block text-center\">\n        <div class=\"row\">\n          <div class=\"col-6 b-r-default\">\n            <h2>25</h2>\n            <p class=\"text-muted\">new tweet</p>\n          </div>\n          <div class=\"col-6\">\n            <h2>450+</h2>\n            <p class=\"text-muted\">Follower</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- project overview End -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard-default/dashboard-default.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardDefaultComponent; });
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DashboardDefaultComponent = (function () {
    function DashboardDefaultComponent() {
        this.totalValueGraphData1 = buildChartJS('#fff', [45, 25, 35, 20, 45, 20, 40, 10, 30, 45], '#3a73f1', 'transparent');
        this.totalValueGraphData2 = buildChartJS('#fff', [10, 25, 35, 20, 10, 20, 15, 45, 15, 10], '#e55571', 'transparent');
        this.totalValueGraphOption = buildChartOption();
    }
    DashboardDefaultComponent.prototype.ngOnInit = function () {
        AmCharts.makeChart('statistics-chart', {
            type: 'serial',
            marginTop: 0,
            hideCredits: true,
            marginRight: 0,
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
        AmCharts.makeChart('solid-gauge1', {
            type: 'gauge',
            hideCredits: true,
            theme: 'light',
            axes: [{
                    axisAlpha: 0,
                    tickAlpha: 0,
                    labelsEnabled: false,
                    startValue: 0,
                    endValue: 100,
                    startAngle: 0,
                    endAngle: 360,
                    bands: [{
                            color: '#E5E5E5',
                            startValue: -35,
                            endValue: 35,
                            radius: '100%',
                            innerRadius: '92%'
                        }, {
                            color: '#93BE52',
                            startValue: -35,
                            endValue: 20,
                            radius: '100%',
                            innerRadius: '92%'
                        }]
                }],
            'export': {
                enabled: true
            }
        });
        AmCharts.makeChart('email-sent', {
            type: 'serial',
            theme: 'light',
            hideCredits: true,
            dataDateFormat: 'YYYY-MM-DD',
            precision: 2,
            valueAxes: [
                {
                    id: 'v1',
                    title: 'Sales',
                    position: 'left',
                    autoGridCount: false,
                    labelFunction: function (g) {
                        return Math.round(g);
                    }
                },
                {
                    id: 'v2',
                    title: '',
                    gridAlpha: 0,
                    fontSize: 0,
                    axesAlpha: 0,
                    position: 'left',
                    autoGridCount: false
                }
            ],
            graphs: [
                {
                    id: 'g3',
                    valueAxis: 'v1',
                    lineColor: '#4680ff',
                    fillColors: '#4680ff',
                    fillAlphas: 1,
                    type: 'column',
                    title: 'Actual Sales',
                    valueField: 'sales2',
                    clustered: true,
                    columnWidth: 0.4,
                    legendValueText: '$[[value]]M',
                    balloonText: '[[title]]<br /><b style="font-size: 130%">$[[value]]M</b>'
                },
                {
                    id: 'g4',
                    valueAxis: 'v1',
                    lineColor: '#FC6180',
                    fillColors: '#FC6180',
                    fillAlphas: 1,
                    type: 'column',
                    title: 'Target Sales',
                    valueField: 'sales1',
                    clustered: true,
                    columnWidth: 0.4,
                    legendValueText: '$[[value]]M',
                    balloonText: '[[title]]<br /><b style="font-size: 130%">$[[value]]M</b>'
                },
                {
                    id: 'g1',
                    valueAxis: 'v2',
                    bullet: 'round',
                    bulletBorderAlpha: 0,
                    bulletColor: 'transparent',
                    bulletSize: 0,
                    hideBulletsCount: 50,
                    lineThickness: 3,
                    dashLength: 10,
                    lineColor: '#93BE52',
                    type: 'smoothedLine',
                    title: 'Market Days',
                    useLineColorForBulletBorder: true,
                    valueField: 'market1',
                    balloonText: '[[title]]<br /><b style="font-size: 130% ">[[value]]</b>'
                },
                {
                    id: 'v3',
                    valueAxis: 'v1',
                    lineColor: '#FFB64D',
                    fillColors: '#FFB64D',
                    fillAlphas: 1,
                    type: 'column',
                    title: 'Actual Sales',
                    valueField: 'sales2',
                    clustered: true,
                    columnWidth: 0.4,
                    legendValueText: '$[[value]]M',
                    balloonText: '[[title]]<br /><b style="font-size: 130%>$[[value]]M</b>'
                }
            ],
            chartCursor: {
                pan: true,
                valueLineEnabled: true,
                valueLineBalloonEnabled: true,
                cursorAlpha: 0,
                valueLineAlpha: 0.2
            },
            categoryField: 'date',
            categoryAxis: {
                parseDates: true,
                dashLength: 0,
                axisAlpha: 0,
                GridAlpha: 0,
                minorGridEnabled: true
            },
            legend: {
                useGraphSettings: true,
                position: 'top'
            },
            balloon: {
                borderThickness: 1,
                shadowAlpha: 0
            },
            'export': {
                enabled: true
            },
            dataProvider: [
                {
                    date: '2013-01-16',
                    market1: 91,
                    market2: 75,
                    sales1: 5,
                    sales2: 8
                },
                {
                    date: '2013-01-17',
                    market1: 74,
                    market2: 78,
                    sales1: 4,
                    sales2: 6
                },
                {
                    date: '2013-01-18',
                    market1: 78,
                    market2: 88,
                    sales1: 5,
                    sales2: 2
                },
                {
                    date: '2013-01-19',
                    market1: 85,
                    market2: 89,
                    sales1: 8,
                    sales2: 9
                },
                {
                    date: '2013-01-20',
                    market1: 82,
                    market2: 89,
                    sales1: 9,
                    sales2: 6
                },
                {
                    date: '2013-01-21',
                    market1: 83,
                    market2: 85,
                    sales1: 3,
                    sales2: 5
                },
                {
                    date: '2013-01-22',
                    market1: 78,
                    market2: 92,
                    sales1: 5,
                    sales2: 7
                }
            ]
        });
    };
    DashboardDefaultComponent.prototype.onTaskStatusChange = function (event) {
        var parentNode = (event.target.parentNode.parentNode);
        parentNode.classList.toggle('done-task');
    };
    return DashboardDefaultComponent;
}());
DashboardDefaultComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard-default',
        template: __webpack_require__("../../../../../src/app/pages/dashboard/dashboard-default/dashboard-default.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/dashboard/dashboard-default/dashboard-default.component.css"), __webpack_require__("../../../../../src/assets/icon/svg-animated/svg-weather.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardDefaultComponent);

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
//# sourceMappingURL=dashboard-default.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard-default/dashboard-default.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardDefaultRoutes", function() { return DashboardDefaultRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardDefaultModule", function() { return DashboardDefaultModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_default_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/dashboard-default/dashboard-default.component.ts");
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






var DashboardDefaultRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_default_component__["a" /* DashboardDefaultComponent */],
        data: {
            breadcrumb: 'Default',
            icon: 'icofont-home bg-c-blue',
            status: false
        }
    }
];
var DashboardDefaultModule = (function () {
    function DashboardDefaultModule() {
    }
    return DashboardDefaultModule;
}());
DashboardDefaultModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(DashboardDefaultRoutes),
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__["ChartModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__dashboard_default_component__["a" /* DashboardDefaultComponent */]]
    })
], DashboardDefaultModule);

//# sourceMappingURL=dashboard-default.module.js.map

/***/ })

});
//# sourceMappingURL=dashboard-default.module.chunk.js.map