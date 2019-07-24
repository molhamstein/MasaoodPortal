webpackJsonp(["dashboard-project.module"],{

/***/ "../../../../../src/app/pages/dashboard/dashboard-project/dashboard-project.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard-project/dashboard-project.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <!-- In Design Start -->\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card bg-c-blue in-design-card\">\n      <div class=\"card-block p-b-10\">\n        <p class=\"f-w-600 m-b-5\">In design</p>\n        <h4 class=\"f-16 m-b-20\">AFSL Web app</h4>\n        <div class=\"inner-dark-card blue-drak-card\">\n          <div class=\"row\">\n            <div class=\"col-sm-6 b-r-default\">\n              <h3 class=\"d-inline-block num-top\">11</h3>\n              <p class=\"text-uppercase d-inline-block\">Days Left <br>\n                in Design\n              </p>\n            </div>\n            <div class=\"col-sm-6\">\n              <h3 class=\"d-inline-block m-r-20 m-b-0 num-top\">28</h3>\n              <p class=\"text-uppercase d-inline-block\">Days to <br>\n                Finish\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"f-right\">\n          <chart [type]=\"'line'\" [data]=\"designGraph1\" [options]=\"designGraphOption\" style=\"width: 150px; height: 60px;\"></chart>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card bg-c-pink in-design-card\">\n      <div class=\"card-block p-b-10\">\n        <p class=\"f-w-600 m-b-5\">In design</p>\n        <h4 class=\"f-16 m-b-20\">Nortech website</h4>\n        <div class=\"inner-dark-card pink-drak-card\">\n          <div class=\"row\">\n            <div class=\"col-sm-6 b-r-default\">\n              <h3 class=\"d-inline-block num-top\">11</h3>\n              <p class=\"text-uppercase d-inline-block\">Days Left <br>\n                in Design\n              </p>\n            </div>\n            <div class=\"col-sm-6\">\n              <h3 class=\"d-inline-block m-r-20 m-b-0 num-top\">28</h3>\n              <p class=\"text-uppercase d-inline-block\">Days to <br>\n                Finish\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"f-right\">\n          <chart [type]=\"'line'\" [data]=\"designGraph2\" [options]=\"designGraphOption\" style=\"width: 150px; height: 60px;\"></chart>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-12 col-xl-4\">\n    <div class=\"card bg-c-yellow in-design-card\">\n      <div class=\"card-block p-b-10\">\n        <p class=\"f-w-600 m-b-5\">In Design</p>\n        <h4 class=\"f-16 m-b-20\">Evolution Website</h4>\n        <div class=\"inner-dark-card yellow-drak-card\">\n          <div class=\"row\">\n            <div class=\"col-sm-6 b-r-default\">\n              <h3 class=\"d-inline-block num-top\">11</h3>\n              <p class=\"text-uppercase d-inline-block\">Days Left <br>\n                in Design\n              </p>\n            </div>\n            <div class=\"col-sm-6\">\n              <h3 class=\"d-inline-block m-r-20 m-b-0 num-top\">28</h3>\n              <p class=\"text-uppercase d-inline-block\">Days to <br>\n                Finish\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"f-right\">\n          <chart [type]=\"'line'\" [data]=\"designGraph3\" [options]=\"designGraphOption\" style=\"width: 150px; height: 60px;\"></chart>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- In Design End -->\n\n  <!-- Statestics Start -->\n  <div class=\"col-md-12 col-xl-12\">\n    <app-card [title]=\"'Statestics'\">\n      <div class=\"row\">\n        <div class=\"col-md-8\">\n          <div class=\"line-example\">\n            <div id=\"statestics-chart\" style=\" height:300px;\"></div>\n          </div>\n        </div>\n        <div class=\"col-md-4 text-center\">\n          <div id=\"invoice\" style=\" height:300px;\"></div>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <!-- Statestics End -->\n\n  <!-- Client Map Start -->\n  <div class=\"col-md-12 col-xl-8 \">\n    <div class=\"card\">\n      <div class=\"card-block user-detail-card\">\n        <div class=\"row\">\n          <div class=\"col-sm-4\">\n            <img src=\"assets/images/widget/group-user.jpg\" alt=\"\" class=\"img-fluid p-b-10\">\n            <div class=\"contact-icon\">\n              <button class=\"btn btn-default\" placement=\"bottom\" ngbTooltip=\"View\"><i class=\"icofont icofont-eye m-0\"></i></button>\n              <button class=\"btn btn-default\" placement=\"bottom\" ngbTooltip=\"Print\"><i class=\"icofont icofont-printer m-0\"></i></button>\n              <button class=\"btn btn-default\" placement=\"bottom\" ngbTooltip=\"Download\"><i class=\"icofont icofont-download-alt m-0\"></i></button>\n              <button class=\"btn btn-default\" placement=\"bottom\" ngbTooltip=\"Share\"><i class=\"icofont icofont-share m-0\"></i></button>\n            </div>\n          </div>\n          <div class=\"col-sm-8 user-detail\">\n            <div class=\"row\">\n              <div class=\"col-sm-5\">\n                <h6 class=\"text-muted f-w-600 m-b-30\"><i class=\"icofont icofont-ui-user\"></i>Name :</h6>\n              </div>\n              <div class=\"col-sm-7\">\n                <h6 class=\"m-b-30\">Gregory Durk</h6>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-sm-5\">\n                <h6 class=\"text-muted f-w-600 m-b-30\"><i class=\"icofont icofont-ui-calendar\"></i>Date of brith :</h6>\n              </div>\n              <div class=\"col-sm-7\">\n                <h6 class=\"m-b-30\">24 October 2017</h6>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-sm-5\">\n                <h6 class=\"text-muted f-w-600 m-b-30\"><i class=\"icofont icofont-ui-email\"></i>Email Id :</h6>\n              </div>\n              <div class=\"col-sm-7\">\n                <h6 class=\"m-b-30\"><a href=\"mailto:dummy@gmail.com\">techdemo@gmail.com</a></h6>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-sm-5\">\n                <h6 class=\"text-muted f-w-600 m-b-30\"><i class=\"icofont icofont-ui-home\"></i>Address :</h6>\n              </div>\n              <div class=\"col-sm-7\">\n                <h6 class=\"m-b-30\">23/Encrypt square, Melbourn, Australia</h6>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-sm-5\">\n                <h6 class=\"text-muted f-w-600 m-b-30\"><i class=\"icofont icofont-ui-touch-phone\"></i>Phone :</h6>\n              </div>\n              <div class=\"col-sm-7\">\n                <h6 class=\"m-b-30\">+(345)234-5287</h6>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-sm-5\">\n                <h6 class=\"text-muted f-w-600 m-b-30\"><i class=\"icofont icofont-web\"></i>Website :</h6>\n              </div>\n              <div class=\"col-sm-7\">\n                <h6 class=\"m-b-30\"><a href=\"javascript:\">http://www.demotheme.com</a></h6>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-sm-5\">\n                <h6 class=\"text-muted f-w-600 m-b-30\"><i class=\"icofont icofont-fax\"></i>Fax :</h6>\n              </div>\n              <div class=\"col-sm-7\">\n                <h6 class=\"m-b-30\">+(723)542-2823</h6>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <!-- Client Map Start -->\n      <div class=\"col-md-6\">\n        <div class=\"card client-map\">\n          <div class=\"card-block\">\n            <div class=\"client-detail\">\n              <div class=\"client-profile\">\n                <img src=\"assets/images/avatar-1.jpg\" alt=\"\">\n              </div>\n              <div class=\"client-contain\">\n                <h5>Gregory Johnes</h5>\n                <a href=\"javascript:\" class=\"text-muted\">gregory@demo.com</a>\n                <p class=\"text-muted m-0 p-t-10\">Product Manager</p>\n              </div>\n            </div>\n            <div class=\"\">\n              <div class=\"client-card-box\">\n                <div class=\"row\">\n                  <div class=\"col-6 text-center client-border p-10\">\n                    <p class=\"text-muted m-0\">Invites</p>\n                    <span class=\"text-c-blue f-20 f-w-600\">345</span>\n                  </div>\n                  <div class=\"col-6 text-center p-10\">\n                    <p class=\"text-muted m-0\">Pending</p>\n                    <span class=\"text-c-blue f-20 f-w-600\">12</span>\n                  </div>\n                </div>\n                <div class=\"col-sm-12 client-border-card p-t-10\">\n                  <p>Overall Activity</p>\n                </div>\n                <chart [type]=\"'line'\" [data]=\"clientMap1\" [options]=\"clientMapOption\" style=\"width: 100%; height: 60px;\"></chart>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"card client-map\">\n          <div class=\"card-block\">\n            <div class=\"client-detail\">\n              <div class=\"client-profile\">\n                <img src=\"assets/images/avatar-5.jpg\" alt=\"\">\n              </div>\n              <div class=\"client-contain\">\n                <h5>Gregory Johnes</h5>\n                <a href=\"javascript:\" class=\"text-muted\">gregory@demo.com</a>\n                <p class=\"text-muted m-0 p-t-10\">Product Manager</p>\n              </div>\n            </div>\n            <div class=\"\">\n              <div class=\"client-card-box\">\n                <div class=\"row\">\n                  <div class=\"col-6 text-center client-border p-10\">\n                    <p class=\"text-muted m-0\">Invites</p>\n                    <span class=\"text-c-green f-20 f-w-600\">812</span>\n                  </div>\n                  <div class=\"col-6 text-center p-10\">\n                    <p class=\"text-muted m-0\">Pending</p>\n                    <span class=\"text-c-green f-20 f-w-600\">00</span>\n                  </div>\n                </div>\n                <div class=\"col-sm-12 client-border-card p-t-10\">\n                  <p>Overall Activity</p>\n                </div>\n                <chart [type]=\"'line'\" [data]=\"clientMap2\" [options]=\"clientMapOption\" style=\"width: 100%; height: 60px;\"></chart>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- Client Map End -->\n    </div>\n  </div>\n  <div class=\"col-md-12 col-xl-4 d-none d-xl-block d-lg-block d-md-block\">\n    <app-card [title]=\"'Project overview'\" [cardClass]=\"'card-overview'\">\n      <div class=\"m-b-50\">\n        <div class=\"row justify-content-md-center\">\n          <div class=\"col-sm-12\">\n            <div id=\"project-overview-chart\" class=\"project-overview-chart\" style=\"height:200px;\"></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"p-t-20 p-b-20 \">\n        <div class=\"row \">\n          <div class=\"col-sm-6 \">\n            <span class=\"bg-c-blue \"></span>\n            <h6 class=\"m-l-30 f-w-600 m-b-5 \">23.89%</h6>\n            <p class=\"text-muted m-l-30 m-b-0 \">ProjectProcessed</p>\n          </div>\n          <div class=\"col-sm-6 \">\n            <div id=\"project-over-sub-1\">3,5,5,10,6,4,8,10,6,15,10,6,4,8,10,6,5,6,5,8,2</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"b-t-default p-t-20 p-b-20 \">\n        <div class=\"row \">\n          <div class=\"col-sm-6 \">\n            <span class=\"bg-c-pink \"></span>\n            <h6 class=\"m-l-30 f-w-600 m-b-5 \">17.78%</h6>\n            <p class=\"text-muted m-l-30 m-b-0 \">Project Returned</p>\n          </div>\n          <div class=\"col-sm-6 \">\n            <div id=\"project-over-sub-2\">5,8,10,6,4,8,10,6,3,5,8,2,10,6,4,8,10,6,5,6,3,5</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"b-t-default p-t-20 p-b-20 \">\n        <div class=\"row \">\n          <div class=\"col-sm-6 \">\n            <span class=\"bg-c-yellow \"></span>\n            <h6 class=\"m-l-30 f-w-600 m-b-5 \">10.56%</h6>\n            <p class=\"text-muted m-l-30 m-b-0 \">Project Sold</p>\n          </div>\n          <div class=\"col-sm-6 \">\n            <div id=\"project-over-sub-3\">5,10,6,4,8,10,6,5,6,3,5,5,10,6,4,8,10,6,3,5,8,2</div>\n          </div>\n        </div>\n      </div>\n    </app-card>\n    <div class=\"card feed-card\">\n      <div class=\"card-block p-t-0 p-b-0\">\n        <div class=\"row\">\n          <div class=\"col-4 bg-c-pink border-feed\">\n            <i class=\"icofont icofont-chart-flow-alt-1 f-40\"></i>\n          </div>\n          <div class=\"col-8\">\n            <div class=\"p-t-30 p-b-30\">\n              <h2 class=\"f-w-600 m-b-10\">3,619</h2>\n              <p class=\"text-muted m-0\">New <span class=\"text-c-pink f-w-600\">Order Recieved</span></p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Client Map End -->\n\n  <!-- App Design Start -->\n  <div class=\"col-md-12 col-xl-6 \">\n    <div class=\"card app-design\">\n      <div class=\"card-block\">\n        <button class=\"btn btn-primary f-right\">Completed</button>\n        <h6 class=\"f-w-600 text-muted\">App design and development</h6>\n        <p class=\"text-c-blue f-w-400\">Android</p>\n        <p class=\"text-muted\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>\n        <div class=\"design-description d-inline-block m-r-40\">\n          <h3 class=\"f-w-600\">678</h3>\n          <p class=\"text-muted\">Question</p>\n        </div>\n        <div class=\"design-description d-inline-block\">\n          <h3 class=\"f-w-600\">1,452</h3>\n          <p class=\"text-muted\">Comments</p>\n        </div>\n        <div class=\"team-box p-b-20\">\n          <p class=\"d-inline-block m-r-20 f-w-600\">Team</p>\n          <div class=\"team-section d-inline-block\">\n            <a href=\"javascript: \"><img src=\"assets/images/avatar-2.jpg \" placement=\"top\" ngbTooltip=\"Josephin Doe\" class=\"m-l-5 \"></a>\n            <a href=\"javascript: \"><img src=\"assets/images/avatar-3.jpg \" placement=\"top\" ngbTooltip=\"Lary Doe\" class=\"m-l-5\"></a>\n            <a href=\"javascript: \"><img src=\"assets/images/avatar-4.jpg \" placement=\"top\" ngbTooltip=\"Alia\"class=\"m-l-5\"></a>\n            <a href=\"javascript: \"><img src=\"assets/images/avatar-2.jpg \" placement=\"top\" ngbTooltip=\"Suzen\" class=\"m-l-5\"></a>\n          </div>\n        </div>\n        <div class=\"progress-box\">\n          <p class=\"d-inline-block m-r-20 f-w-600\">Progress</p>\n          <div class=\"progress d-inline-block\">\n            <div class=\"progress-bar bg-c-blue\" role=\"progressbar \" aria-valuemin=\"0 \" aria-valuemax=\"100 \" style=\"width:78% \"><label>78%</label></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-12 col-xl-6 \">\n    <div class=\"card app-design\">\n      <div class=\"card-block\">\n        <button class=\"btn btn-success f-right\">Pending</button>\n        <h6 class=\"f-w-600 text-muted\">Landing page design</h6>\n        <p class=\"text-c-green f-w-400\">Webdesign</p>\n        <p class=\"text-muted\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>\n        <div class=\"design-description d-inline-block m-r-40\">\n          <h3 class=\"f-w-600\">271</h3>\n          <p class=\"text-muted\">Question</p>\n        </div>\n        <div class=\"design-description d-inline-block\">\n          <h3 class=\"f-w-600\">816</h3>\n          <p class=\"text-muted\">Comments</p>\n        </div>\n        <div class=\"team-box p-b-20\">\n          <p class=\"d-inline-block m-r-20 f-w-600\">Team</p>\n          <div class=\"team-section d-inline-block\">\n            <div class=\"team-section d-inline-block\">\n              <a href=\"javascript: \"><img src=\"assets/images/avatar-3.jpg \" placement=\"top\" ngbTooltip=\"Lary Doe\" class=\"m-l-5\"></a>\n              <a href=\"javascript: \"><img src=\"assets/images/avatar-4.jpg \" placement=\"top\" ngbTooltip=\"Alia\" class=\"m-l-5\"></a>\n              <a href=\"javascript: \"><img src=\"assets/images/avatar-5.jpg \" placement=\"top\" ngbTooltip=\"Josephin Doe\" class=\"m-l-5\"></a>\n              <a href=\"javascript: \"><img src=\"assets/images/avatar-7.jpg \" placement=\"top\" ngbTooltip=\"Suzen\" class=\"m-l-5\"></a>\n            </div>\n          </div>\n        </div>\n        <div class=\"progress-box\">\n          <p class=\"d-inline-block m-r-20 f-w-600\">Progress</p>\n          <div class=\"progress d-inline-block\">\n            <div class=\"progress-bar bg-c-green\" role=\"progressbar \" aria-valuemin=\"0 \" aria-valuemax=\"100 \" style=\"width:78% \"><label>78%</label></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- App Design End -->\n\n  <!-- Current Progress Start -->\n  <div class=\"col-md-12\">\n    <app-card [title]=\"'Current progress'\" [cardClass]=\"'card-current-prog'\">\n      <div class=\"table-responsive\">\n        <table class=\"table table-hover\">\n          <tbody>\n          <tr>\n            <td>\n              <div class=\"card-img\">\n                <a href=\"javascript:\"><img class=\"img-rounded\" src=\"assets/images/avatar-1.jpg\" alt=\"\"></a>\n              </div>\n              <div class=\"card-contain\">\n                <h6 class=\"f-w-600\">Web application</h6>\n                <p class=\"text-muted\">Design & development</p>\n              </div>\n            </td>\n            <td>\n              <div class=\"last-line\">\n                <p class=\"\">Last Updated Today at 4:24 AM</p>\n              </div>\n              <div class=\"card-icon-time\">\n                <a href=\"javascript:\"><i class=\"icofont icofont-ui-clock text-muted\"></i></a>\n                <p class=\"text-muted\">15:32</p>\n              </div>\n              <div class=\"card-icon-time\">\n                <a href=\"javascript:\"><i class=\"icofont icofont-ui-messaging text-muted\"></i></a>\n                <p class=\"text-muted\">984</p>\n              </div>\n            </td>\n            <td>\n              <div class=\"progress\">\n                <div class=\"progress-bar bg-c-blue\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:50%\">\n                </div>\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <div class=\"card-img\">\n                <a href=\"javascript:\"><img class=\"img-rounded\" src=\"assets/images/avatar-1.jpg\" alt=\"\"></a>\n              </div>\n              <div class=\"card-contain\">\n                <h6 class=\"f-w-600\">login module</h6>\n                <p class=\"text-muted\">Development</p>\n              </div>\n            </td>\n            <td>\n              <div class=\"last-line\">\n                <p class=\"\">Last Updated Today at 2:24 AM</p>\n              </div>\n              <div class=\"card-icon-time\">\n                <a href=\"javascript:\"><i class=\"icofont icofont-ui-clock text-muted\"></i></a>\n                <p class=\"text-muted\">14:45</p>\n              </div>\n              <div class=\"card-icon-time\">\n                <a href=\"javascript:\"><i class=\"icofont icofont-ui-messaging text-muted\"></i></a>\n                <p class=\"text-muted\">657</p>\n              </div>\n            </td>\n            <td>\n              <div class=\"progress\">\n                <div class=\"progress-bar bg-c-pink\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:90%\">\n                </div>\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <div class=\"card-img\">\n                <a href=\"javascript:\"><img class=\"img-rounded\" src=\"assets/images/avatar-1.jpg\" alt=\"\"></a>\n              </div>\n              <div class=\"card-contain\">\n                <h6 class=\"f-w-600\">Module testing</h6>\n                <p class=\"text-muted\">Testing</p>\n              </div>\n            </td>\n            <td>\n              <div class=\"last-line\">\n                <p class=\"\">Last Updated Today at 2:24 AM</p>\n              </div>\n              <div class=\"card-icon-time\">\n                <a href=\"javascript:\"><i class=\"icofont icofont-ui-clock text-muted\"></i></a>\n                <p class=\"text-muted\">20:00</p>\n              </div>\n              <div class=\"card-icon-time\">\n                <a href=\"javascript:\"><i class=\"icofont icofont-ui-messaging text-muted\"></i></a>\n                <p class=\"text-muted\">200</p>\n              </div>\n            </td>\n            <td>\n              <div class=\"progress\">\n                <div class=\"progress-bar bg-c-yellow\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:70%\">\n                </div>\n              </div>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n  </div>\n  <!-- Current Progress End -->\n\n  <!-- Project & Task Start -->\n  <div class=\"col-md-12 col-xl-6 \">\n    <app-card [title]=\"'Time spent : project &amp; task'\" [cardClass]=\"'project-task'\" [blockClass]=\"'p-b-10'\">\n      <div class=\"table-responsive\">\n        <table class=\"table table-hover\">\n          <thead>\n          <tr>\n            <th>Project & Task</th>\n            <th>Time Spents</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <td>\n              <div class=\"task-contain\">\n                <h6 class=\"bg-c-blue d-inline-block text-center\">U</h6>\n                <p class=\"d-inline-block m-l-20 m-b-0\">UI Design</p>\n              </div>\n            </td>\n            <td>\n              <p class=\"d-inline-block m-r-20\">4 : 36</p>\n              <div class=\"progress d-inline-block\">\n                <div class=\"progress-bar bg-c-blue\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:80%\">\n                </div>\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <div class=\"task-contain\">\n                <h6 class=\"bg-c-pink d-inline-block text-center\">R</h6>\n                <p class=\"d-inline-block m-l-20 m-b-0\">Redesign Android App</p>\n              </div>\n            </td>\n            <td>\n              <p class=\"d-inline-block m-r-20\">4 : 36</p>\n              <div class=\"progress d-inline-block\">\n                <div class=\"progress-bar bg-c-pink\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:60%\">\n                </div>\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <div class=\"task-contain\">\n                <h6 class=\"bg-c-yellow d-inline-block text-center\">L</h6>\n                <p class=\"d-inline-block m-l-20 m-b-0\">Logo Design</p>\n              </div>\n            </td>\n            <td>\n              <p class=\"d-inline-block m-r-20\">4 : 36</p>\n              <div class=\"progress d-inline-block\">\n                <div class=\"progress-bar bg-c-yellow\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:50%\">\n                </div>\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <div class=\"task-contain\">\n                <h6 class=\"bg-c-green d-inline-block text-center\">A</h6>\n                <p class=\"d-inline-block m-l-20 m-b-0\">Appestia landing Page</p>\n              </div>\n            </td>\n            <td>\n              <p class=\"d-inline-block m-r-20\">4 : 36</p>\n              <div class=\"progress d-inline-block\">\n                <div class=\"progress-bar bg-c-green\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:50%\">\n                </div>\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <div class=\"task-contain\">\n                <h6 class=\"bg-c-blue d-inline-block text-center\">L</h6>\n                <p class=\"d-inline-block m-l-20 m-b-0\">Logo Design</p>\n              </div>\n            </td>\n            <td>\n              <p class=\"d-inline-block m-r-20\">4 : 36</p>\n              <div class=\"progress d-inline-block\">\n                <div class=\"progress-bar bg-c-blue\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:50%\">\n                </div>\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <div class=\"task-contain\">\n                <h6 class=\"bg-c-yellow d-inline-block text-center\">L</h6>\n                <p class=\"d-inline-block m-l-20 m-b-0\">Logo Design</p>\n              </div>\n            </td>\n            <td>\n              <p class=\"d-inline-block m-r-20\">4 : 36</p>\n              <div class=\"progress d-inline-block\">\n                <div class=\"progress-bar bg-c-yellow\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:50%\">\n                </div>\n              </div>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-md-12 col-xl-6\">\n    <app-card [title]=\"'Activites'\">\n      <div class=\"card-notification\">\n        <div class=\"card-noti-conatin\">\n          <small>5 mins ago</small>\n          <p class=\"text-muted m-b-30\">jennifer sent you an attachament</p>\n        </div>\n      </div>\n      <div class=\"card-notification\">\n        <div class=\"card-noti-conatin\">\n          <small>45 mins ago</small>\n          <p class=\"text-muted m-b-30\">Paul has sent a request for access to the project folder</p>\n        </div>\n      </div>\n      <div class=\"card-notification\">\n        <div class=\"card-noti-conatin\">\n          <small>2 days ago</small>\n          <p class=\"text-muted m-b-30\">Demin change the dedline on the project</p>\n        </div>\n      </div>\n      <div class=\"card-notification\">\n        <div class=\"card-noti-conatin\">\n          <small>12 mins ago</small>\n          <p class=\"text-muted m-b-30\">jennifer invite you to join the project</p>\n        </div>\n      </div>\n      <div class=\"card-notification\">\n        <div class=\"card-noti-conatin\">\n          <small>60 mins ago</small>\n          <p class=\"text-muted m-b-30\">Josephine share a folder with you</p>\n        </div>\n      </div>\n      <div class=\"card-notification\">\n        <div class=\"card-noti-conatin\">\n          <small>43 mins ago</small>\n          <p class=\"text-muted m-b-0\">Josephine share a folder with you</p>\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <!-- Project & Task End -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard-project/dashboard-project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardProjectComponent; });
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









var DashboardProjectComponent = (function () {
    function DashboardProjectComponent() {
        this.designGraph1 = buildstackchartjs('#fff', [45, 25, 35, 20, 45, 20, 40, 10, 30, 45], 'transparent');
        this.designGraph2 = buildstackchartjs('#fff', [10, 25, 35, 20, 10, 20, 15, 45, 15, 10], 'transparent');
        this.designGraph3 = buildstackchartjs('#fff', [66, 60, 50, 55, 20, 55, 10, 35, 15, 25], 'transparent');
        this.designGraphOption = buildChartOption();
        this.clientMap1 = buildChartJS('rgb(70, 128, 254)', [5, 35, 45, 20, 10, 30, 15, 45, 15, 10], 'rgba(70, 128, 254,0.2)', 'transparent');
        this.clientMap2 = buildChartJS('rgb(147, 190, 82)', [45, 25, 35, 20, 45, 20, 40, 10, 30, 45], 'rgba(147, 190, 82,0.2)', 'transparent');
        this.clientMapOption = buildChartOption();
    }
    DashboardProjectComponent.prototype.ngOnInit = function () {
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
    };
    return DashboardProjectComponent;
}());
DashboardProjectComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard-project',
        template: __webpack_require__("../../../../../src/app/pages/dashboard/dashboard-project/dashboard-project.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/dashboard/dashboard-project/dashboard-project.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardProjectComponent);

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
function buildstackchartjs(a, b, f) {
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
//# sourceMappingURL=dashboard-project.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard-project/dashboard-project.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardProjectRoutes", function() { return DashboardProjectRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardProjectModule", function() { return DashboardProjectModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_project_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/dashboard-project/dashboard-project.component.ts");
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






var DashboardProjectRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_project_component__["a" /* DashboardProjectComponent */],
        data: {
            breadcrumb: 'Project',
            icon: 'icofont-home bg-c-blue',
            status: false
        }
    }
];
var DashboardProjectModule = (function () {
    function DashboardProjectModule() {
    }
    return DashboardProjectModule;
}());
DashboardProjectModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(DashboardProjectRoutes),
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__["ChartModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__dashboard_project_component__["a" /* DashboardProjectComponent */]]
    })
], DashboardProjectModule);

//# sourceMappingURL=dashboard-project.module.js.map

/***/ })

});
//# sourceMappingURL=dashboard-project.module.chunk.js.map