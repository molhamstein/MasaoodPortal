webpackJsonp(["notify.module"],{

/***/ "../../../../../src/app/pages/ui-elements/advance/notify/notify.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ui-elements/advance/notify/notify.component.html":
/***/ (function(module, exports) {

module.exports = "<simple-notifications [options]=\"options\"></simple-notifications>\n\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <!-- Basic notifications card start -->\n    <app-card [title]=\"'Basic notifications'\" [blockClass]=\"'table-border-style'\">\n      <div class=\"table-responsive\">\n        <table class=\"table\">\n          <tbody>\n          <tr>\n            <td>Primary Notice</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-warning btn-sm\" (click)=\"addNotify({title:'PNotify', msg: 'Check me out! I\\'m a notice.', type:'crate', subType: 'warn'})\">Warning <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use type <code>warn</code> to use this style notification</td>\n          </tr>\n          <tr>\n            <td>Success Notice</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"addNotify({title:'PNotify', msg: 'Check me out! I\\'m a notice.', type:'success'})\">Success <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use type <code>success</code> to use this style notification</td>\n          </tr>\n          <tr>\n            <td>Info Notice</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-info btn-sm\" (click)=\"addNotify({title:'PNotify', msg: 'Check me out! I\\'m a notice.', type:'info'})\">Info <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use type <code>info</code> to use this style notification</td>\n          </tr>\n          <tr>\n            <td>Danger Notice</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"addNotify({title:'PNotify', msg: 'Check me out! I\\'m a notice.', type:'error'})\">Danger <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use type <code>danger</code> to use this style notification</td>\n          </tr>\n          <!-- basic notification end -->\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n    <!-- Basic notifications card end -->\n  </div>\n  <div class=\"col-sm-12\">\n    <!-- Basic notifications card start -->\n    <app-card [title]=\"'Animate notifications'\" [blockClass]=\"'table-border-style'\">\n      <div class=\"table-responsive\">\n        <table class=\"table\">\n          <tbody>\n          <tr>\n            <td>fromRight Notice</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addNotify({title:'PNotify', msg: 'Check me out! I\\'m a notice.', type:'info', animate: 'fromRight'})\">Default/fromRight <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use animate <code>fromRight</code> to use this style notification</td>\n          </tr>\n          <tr>\n            <td>fromLeft Notice</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addNotify({title:'PNotify', msg: 'Check me out! I\\'m a notice.', type:'info', animate: 'fromLeft'})\">fromLeft <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use animate <code>fromLeft</code> to use this style notification</td>\n          </tr>\n          <tr>\n            <td>Sacle Notice</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addNotify({title:'PNotify', msg: 'Check me out! I\\'m a notice.', type:'info', animate: 'scale'})\">Scale <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use animate <code>scale</code> to use this style notification</td>\n          </tr>\n          <tr>\n            <td>Rotate Notice</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addNotify({title:'PNotify', msg: 'Check me out! I\\'m a notice.', type:'info', animate: 'rotate'})\">Rotate <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use animate <code>rotate</code> to use this style notification</td>\n          </tr>\n          <!-- basic notification end -->\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n    <!-- Basic notifications card end -->\n  </div>\n  <div class=\"col-sm-12\">\n    <!-- notifications option start -->\n    <app-card [title]=\"'Options notifications'\" [blockClass]=\"'table-border-style'\">\n      <div class=\"table-responsive\">\n        <table class=\"table\">\n          <tbody>\n          <tr>\n            <td>No Title</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addNotify({msg: 'Check me out! - no title', type:'info', animate: 'fromRight', theClass:'small-icon'})\">No Title <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use title <code>null or not use 'title' input</code> to use this style notification</td>\n          </tr>\n          <tr>\n            <td>No Message</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addNotify({title: 'Only Title', type:'info', animate: 'fromRight', theClass:'small-icon'})\">No Message <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use msg <code>not use 'msg' input</code> to use this style notification</td>\n          </tr>\n          <tr>\n            <td>Small Icon</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addNotify({title: 'Small Icon', msg: 'Check me out! I\\'m a notice.', type:'info', animate: 'fromRight', theClass:'small-icon'})\">Small Icon <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use theClass <code>small-icon</code> to use this style notification</td>\n          </tr>\n          <tr>\n            <td>No Icon</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addNotify({title: 'No Icon', msg: 'Check me out! I\\'m a notice.', type:'info', animate: 'fromRight', theClass:'no-icon'})\">No Icon <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use theClass <code>no-icon</code> to use this style notification</td>\n          </tr>\n          <tr>\n            <td>Click To Close</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addNotify({title: 'Click To Close', msg: 'Check me out! I\\'m a notice.', type:'info', animate: 'fromRight', clickToClose: true})\"> Click to close <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use clickToClose <code>true/false</code> to use this style notification</td>\n          </tr>\n          <tr>\n            <td>Show Progress</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addNotify({title: 'Show Progress', msg: 'Check me out! I\\'m a notice.', type:'info', animate: 'fromRight', timeOut:2000, pauseOnHover:false, showProgressBar: true})\"> Show Progress <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use showProgressBar<code>true</code> to use this style notification</td>\n          </tr>\n          <tr>\n            <td>Pus On Hover</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addNotify({title: 'Push On Hover', msg: 'Check me out! I\\'m a notice.', type:'info', animate: 'fromRight', timeOut:2000, pauseOnHover:true, showProgressBar: true})\"> Push On Hover <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use pauseOnHover<code>true</code> to use this style notification</td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n    <!-- notifications option end -->\n  </div>\n  <div class=\"col-sm-12\">\n    <!-- notifications position start -->\n    <app-card [title]=\"'notifications position'\" [blockClass]=\"'table-border-style'\">\n      <div class=\"table-responsive\">\n        <table class=\"table\">\n          <tbody>\n          <tr>\n            <td>Top Left</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addNotify({title: 'Top Left', msg: 'Check me out! I\\'m a notice.', type:'info', animate: 'fromRight', position1: 'top', position2: 'left', maxStack: 1})\">Top Left <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use position1 <code>top</code> position2 <code>left</code> to use this style notification</td>\n          </tr>\n          <tr>\n            <td>Top Right</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addNotify({title: 'Top Right', msg: 'Check me out! I\\'m a notice.', type:'info', animate: 'fromRight', position1: 'top', position2: 'right', maxStack: 1})\">Top Right <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use position1 <code>top</code> position2 <code>right</code> to use this style notification</td>\n          </tr>\n          <tr>\n            <td>Bottom Left</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addNotify({title: 'Bottom Left', msg: 'Check me out! I\\'m a notice.', type:'info', animate: 'fromRight', position1: 'bottom', position2: 'left', maxStack: 1})\">Bottom Left <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use position1 <code>bottom</code> position2 <code>left</code> to use this style notification</td>\n          </tr>\n          <tr>\n            <td>Bottom Right</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addNotify({title: 'Bottom Right', msg: 'Check me out! I\\'m a notice.', type:'info', animate: 'fromRight', position1: 'bottom', position2: 'right', maxStack: 1})\">Bottom Right <i class=\"icofont icofont-play-alt-2\"></i></button>\n            </td>\n            <td>Use position1 <code>bottom</code> position2 <code>right</code> to use this style notification</td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n    <!-- notifications option end -->\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/ui-elements/advance/notify/notify.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotifyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_notifications_dist__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_notifications_dist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_notifications_dist__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotifyComponent = (function () {
    function NotifyComponent(servicePNotify) {
        this.servicePNotify = servicePNotify;
        this.options = {
            position: ['bottom', 'right'],
        };
        this.position1 = 'bottom';
        this.position2 = 'right';
        this.timeOut = 1000;
        this.showProgressBar = true;
        this.pauseOnHover = true;
        this.lastOnBottom = true;
        this.clickToClose = true;
        this.maxLength = 0;
        this.maxStack = 8;
        this.preventDuplicates = false;
        this.preventLastDuplicates = false;
        this.rtl = false;
        this.animate = 'fromRight';
        this.subType = 'success';
    }
    NotifyComponent.prototype.ngOnInit = function () {
    };
    NotifyComponent.prototype.addNotify = function (options) {
        this.servicePNotify.remove();
        this.options = {
            position: [
                ('position1' in options) ? options.position1 : this.position1,
                ('position2' in options) ? options.position2 : this.position2
            ],
            maxStack: ('maxStack' in options) ? options.maxStack : this.maxStack,
            timeOut: options.timeOut ? options.timeOut : this.timeOut,
            showProgressBar: ('showProgressBar' in options) ? options.showProgressBar : this.showProgressBar,
            pauseOnHover: ('pauseOnHover' in options) ? options.pauseOnHover : this.pauseOnHover,
            lastOnBottom: ('lastOnBottom' in options) ? options.lastOnBottom : this.lastOnBottom,
            clickToClose: ('clickToClose' in options) ? options.clickToClose : this.clickToClose,
            maxLength: options.maxLength ? options.maxLength : this.maxLength,
            preventDuplicates: ('preventDuplicates' in options) ? options.preventDuplicates : this.preventDuplicates,
            preventLastDuplicates: ('preventLastDuplicates' in options) ? options.preventLastDuplicates : this.preventLastDuplicates,
            theClass: options.theClass ? options.theClass : this.theClass,
            rtl: ('rtl' in options) ? options.rtl : this.rtl,
            animate: options.animate ? options.animate : this.animate,
            icons: options.icons ? options.icons : this.icons
        };
        switch (options.type) {
            case 'success':
                this.servicePNotify.success(options.title ? options.title : this.title, options.msg ? options.msg : this.msg);
                break;
            case 'error':
                this.servicePNotify.error(options.title ? options.title : this.title, options.msg ? options.msg : this.msg);
                break;
            case 'alert':
                this.servicePNotify.error(options.title ? options.title : this.title, options.msg ? options.msg : this.msg);
                break;
            case 'warn':
                this.servicePNotify.error(options.title ? options.title : this.title, options.msg ? options.msg : this.msg);
                break;
            case 'info':
                this.servicePNotify.info(options.title ? options.title : this.title, options.msg ? options.msg : this.msg);
                break;
            case 'create':
                this.servicePNotify.create(options.title ? options.title : this.title, options.msg ? options.msg : this.msg, options.type ? options.type : this.subType);
                break;
            case 'html':
                this.servicePNotify.html(options.title ? options.title : this.title, options.msg ? options.msg : this.msg);
                break;
            default:
                this.servicePNotify.alert(options.title ? options.title : this.title, options.msg ? options.msg : this.msg);
                break;
        }
    };
    return NotifyComponent;
}());
NotifyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-notify',
        template: __webpack_require__("../../../../../src/app/pages/ui-elements/advance/notify/notify.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/ui-elements/advance/notify/notify.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_notifications_dist__["NotificationsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_notifications_dist__["NotificationsService"]) === "function" && _a || Object])
], NotifyComponent);

var _a;
//# sourceMappingURL=notify.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/ui-elements/advance/notify/notify.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifyRoutes", function() { return notifyRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyModule", function() { return NotifyModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notify_component__ = __webpack_require__("../../../../../src/app/pages/ui-elements/advance/notify/notify.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications_dist__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications_dist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_notifications_dist__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var notifyRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__notify_component__["a" /* NotifyComponent */],
        data: {
            breadcrumb: 'PNOTIFY',
            icon: 'icofont-listine-dots bg-c-pink',
            status: true
        }
    }
];
var NotifyModule = (function () {
    function NotifyModule() {
    }
    return NotifyModule;
}());
NotifyModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(notifyRoutes),
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_notifications_dist__["SimpleNotificationsModule"].forRoot()
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__notify_component__["a" /* NotifyComponent */]]
    })
], NotifyModule);

//# sourceMappingURL=notify.module.js.map

/***/ }),

/***/ "../../../../angular2-notifications/dist/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../../../../angular2-notifications/dist/src/push-notifications.module.js"));
__export(__webpack_require__("../../../../angular2-notifications/dist/src/simple-notifications.module.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../angular2-notifications/dist/src/push-notifications.module.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var push_notifications_service_1 = __webpack_require__("../../../../angular2-notifications/dist/src/push-notifications/services/push-notifications.service.js");
__export(__webpack_require__("../../../../angular2-notifications/dist/src/push-notifications/services/push-notifications.service.js"));
var PushNotificationsModule = (function () {
    function PushNotificationsModule() {
    }
    return PushNotificationsModule;
}());
PushNotificationsModule.decorators = [
    { type: core_1.NgModule, args: [{
                providers: [push_notifications_service_1.PushNotificationsService],
                exports: []
            },] },
];
/** @nocollapse */
PushNotificationsModule.ctorParameters = function () { return []; };
exports.PushNotificationsModule = PushNotificationsModule;
//# sourceMappingURL=push-notifications.module.js.map

/***/ }),

/***/ "../../../../angular2-notifications/dist/src/push-notifications/services/push-notifications.service.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var PushNotificationsService = (function () {
    function PushNotificationsService() {
        this.permission = this.isSupported() ? Notification.permission : 'denied';
    }
    PushNotificationsService.prototype.requestPermission = function () {
        var _this = this;
        if ('Notification' in window)
            Notification.requestPermission(function (status) { return _this.permission = status; });
    };
    PushNotificationsService.prototype.isSupported = function () {
        return 'Notification' in window;
    };
    PushNotificationsService.prototype.create = function (title, options) {
        var _this = this;
        return new Observable_1.Observable(function (obs) {
            if (!('Notification' in window)) {
                obs.error('Notifications are not available in this environment');
                obs.complete();
            }
            if (_this.permission !== 'granted') {
                obs.error("The user hasn't granted you permission to send push notifications");
                obs.complete();
            }
            var n = new Notification(title, options);
            n.onshow = function (e) { return obs.next({ notification: n, event: e }); };
            n.onclick = function (e) { return obs.next({ notification: n, event: e }); };
            n.onerror = function (e) { return obs.error({ notification: n, event: e }); };
            n.onclose = function () { return obs.complete(); };
        });
    };
    return PushNotificationsService;
}());
PushNotificationsService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
PushNotificationsService.ctorParameters = function () { return []; };
exports.PushNotificationsService = PushNotificationsService;
//# sourceMappingURL=push-notifications.service.js.map

/***/ }),

/***/ "../../../../angular2-notifications/dist/src/simple-notifications.module.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var simple_notifications_component_1 = __webpack_require__("../../../../angular2-notifications/dist/src/simple-notifications/components/simple-notifications.component.js");
var notification_component_1 = __webpack_require__("../../../../angular2-notifications/dist/src/simple-notifications/components/notification.component.js");
var max_pipe_1 = __webpack_require__("../../../../angular2-notifications/dist/src/simple-notifications/pipes/max.pipe.js");
var notifications_service_1 = __webpack_require__("../../../../angular2-notifications/dist/src/simple-notifications/services/notifications.service.js");
__export(__webpack_require__("../../../../angular2-notifications/dist/src/simple-notifications/interfaces/icons.js"));
__export(__webpack_require__("../../../../angular2-notifications/dist/src/simple-notifications/components/simple-notifications.component.js"));
__export(__webpack_require__("../../../../angular2-notifications/dist/src/simple-notifications/components/notification.component.js"));
__export(__webpack_require__("../../../../angular2-notifications/dist/src/simple-notifications/pipes/max.pipe.js"));
__export(__webpack_require__("../../../../angular2-notifications/dist/src/simple-notifications/services/notifications.service.js"));
var SimpleNotificationsModule = (function () {
    function SimpleNotificationsModule() {
    }
    SimpleNotificationsModule.forRoot = function () {
        return {
            ngModule: SimpleNotificationsModule,
        };
    };
    return SimpleNotificationsModule;
}());
SimpleNotificationsModule.decorators = [
    { type: core_1.NgModule, args: [{
                providers: [notifications_service_1.NotificationsService],
                imports: [
                    common_1.CommonModule
                ],
                declarations: [
                    simple_notifications_component_1.SimpleNotificationsComponent,
                    notification_component_1.NotificationComponent,
                    max_pipe_1.MaxPipe
                ],
                exports: [simple_notifications_component_1.SimpleNotificationsComponent]
            },] },
];
/** @nocollapse */
SimpleNotificationsModule.ctorParameters = function () { return []; };
exports.SimpleNotificationsModule = SimpleNotificationsModule;
//# sourceMappingURL=simple-notifications.module.js.map

/***/ }),

/***/ "../../../../angular2-notifications/dist/src/simple-notifications/components/notification.component.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var animations_1 = __webpack_require__("../../../animations/@angular/animations.es5.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var notifications_service_1 = __webpack_require__("../../../../angular2-notifications/dist/src/simple-notifications/services/notifications.service.js");
var NotificationComponent = (function () {
    function NotificationComponent(notificationService, domSanitizer, zone) {
        var _this = this;
        this.notificationService = notificationService;
        this.domSanitizer = domSanitizer;
        this.zone = zone;
        // Progress bar variables
        this.progressWidth = 0;
        this.stopTime = false;
        this.count = 0;
        this.instance = function () {
            _this.zone.runOutsideAngular(function () {
                _this.zone.run(function () { return _this.diff = (new Date().getTime() - _this.start) - (_this.count * _this.speed); });
                if (_this.count++ === _this.steps)
                    _this.zone.run(function () { return _this.remove(); });
                else if (!_this.stopTime) {
                    if (_this.showProgressBar)
                        _this.zone.run(function () { return _this.progressWidth += 100 / _this.steps; });
                    _this.timer = setTimeout(_this.instance, (_this.speed - _this.diff));
                }
            });
        };
    }
    NotificationComponent.prototype.ngOnInit = function () {
        if (this.item.override) {
            this.attachOverrides();
        }
        if (this.animate) {
            this.item.state = this.animate;
        }
        if (this.timeOut !== 0) {
            this.startTimeOut();
        }
        this.safeSvg = this.domSanitizer.bypassSecurityTrustHtml(this.icon || this.item.icon);
    };
    NotificationComponent.prototype.startTimeOut = function () {
        var _this = this;
        this.steps = this.timeOut / 10;
        this.speed = this.timeOut / this.steps;
        this.start = new Date().getTime();
        this.zone.runOutsideAngular(function () { return _this.timer = setTimeout(_this.instance, _this.speed); });
    };
    NotificationComponent.prototype.onEnter = function () {
        if (this.pauseOnHover) {
            this.stopTime = true;
        }
    };
    NotificationComponent.prototype.onLeave = function () {
        if (this.pauseOnHover) {
            this.stopTime = false;
            setTimeout(this.instance, (this.speed - this.diff));
        }
    };
    NotificationComponent.prototype.setPosition = function () {
        return this.position !== 0 ? this.position * 90 : 0;
    };
    NotificationComponent.prototype.onClick = function ($e) {
        this.item.click.emit($e);
        if (this.clickToClose) {
            this.remove();
        }
    };
    // Attach all the overrides
    NotificationComponent.prototype.attachOverrides = function () {
        var _this = this;
        Object.keys(this.item.override).forEach(function (a) {
            if (_this.hasOwnProperty(a)) {
                _this[a] = _this.item.override[a];
            }
        });
    };
    NotificationComponent.prototype.ngOnDestroy = function () {
        clearTimeout(this.timer);
    };
    NotificationComponent.prototype.remove = function () {
        var _this = this;
        if (this.animate) {
            this.item.state = this.animate + 'Out';
            this.zone.runOutsideAngular(function () {
                setTimeout(function () {
                    _this.zone.run(function () { return _this.notificationService.set(_this.item, false); });
                }, 310);
            });
        }
        else {
            this.notificationService.set(this.item, false);
        }
    };
    return NotificationComponent;
}());
NotificationComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'simple-notification',
                encapsulation: core_1.ViewEncapsulation.None,
                animations: [
                    animations_1.trigger('enterLeave', [
                        // Enter from right
                        animations_1.state('fromRight', animations_1.style({ opacity: 1, transform: 'translateX(0)' })),
                        animations_1.transition('* => fromRight', [
                            animations_1.style({ opacity: 0, transform: 'translateX(5%)' }),
                            animations_1.animate('400ms ease-in-out')
                        ]),
                        animations_1.state('fromRightOut', animations_1.style({ opacity: 0, transform: 'translateX(-5%)' })),
                        animations_1.transition('fromRight => fromRightOut', [
                            animations_1.style({ opacity: 1, transform: 'translateX(0)' }),
                            animations_1.animate('300ms ease-in-out')
                        ]),
                        // Enter from left
                        animations_1.state('fromLeft', animations_1.style({ opacity: 1, transform: 'translateX(0)' })),
                        animations_1.transition('* => fromLeft', [
                            animations_1.style({ opacity: 0, transform: 'translateX(-5%)' }),
                            animations_1.animate('400ms ease-in-out')
                        ]),
                        animations_1.state('fromLeftOut', animations_1.style({ opacity: 0, transform: 'translateX(5%)' })),
                        animations_1.transition('fromLeft => fromLeftOut', [
                            animations_1.style({ opacity: 1, transform: 'translateX(0)' }),
                            animations_1.animate('300ms ease-in-out')
                        ]),
                        // Rotate
                        animations_1.state('scale', animations_1.style({ opacity: 1, transform: 'scale(1)' })),
                        animations_1.transition('* => scale', [
                            animations_1.style({ opacity: 0, transform: 'scale(0)' }),
                            animations_1.animate('400ms ease-in-out')
                        ]),
                        animations_1.state('scaleOut', animations_1.style({ opacity: 0, transform: 'scale(0)' })),
                        animations_1.transition('scale => scaleOut', [
                            animations_1.style({ opacity: 1, transform: 'scale(1)' }),
                            animations_1.animate('400ms ease-in-out')
                        ]),
                        // Scale
                        animations_1.state('rotate', animations_1.style({ opacity: 1, transform: 'rotate(0deg)' })),
                        animations_1.transition('* => rotate', [
                            animations_1.style({ opacity: 0, transform: 'rotate(5deg)' }),
                            animations_1.animate('400ms ease-in-out')
                        ]),
                        animations_1.state('rotateOut', animations_1.style({ opacity: 0, transform: 'rotate(-5deg)' })),
                        animations_1.transition('rotate => rotateOut', [
                            animations_1.style({ opacity: 1, transform: 'rotate(0deg)' }),
                            animations_1.animate('400ms ease-in-out')
                        ])
                    ])
                ],
                template: "\n        <div class=\"simple-notification\"\n            [@enterLeave]=\"item.state\"\n            (click)=\"onClick($event)\"\n            [class]=\"theClass\"\n\n            [ngClass]=\"{\n                'alert': item.type === 'alert',\n                'error': item.type === 'error',\n                'warn': item.type === 'warn',\n                'success': item.type === 'success',\n                'info': item.type === 'info',\n                'bare': item.type === 'bare',\n                'rtl-mode': rtl\n            }\"\n\n            (mouseenter)=\"onEnter()\"\n            (mouseleave)=\"onLeave()\">\n\n            <div *ngIf=\"!item.html\">\n                <div class=\"sn-title\">{{item.title}}</div>\n                <div class=\"sn-content\">{{item.content | max:maxLength}}</div>\n\n                <div class=\"icon\" *ngIf=\"item.icon !== 'bare'\" [innerHTML]=\"safeSvg\"></div>\n            </div>\n            <div *ngIf=\"item.html\" [innerHTML]=\"item.html\"></div>\n\n            <div class=\"sn-progress-loader\" *ngIf=\"showProgressBar\">\n                <span [ngStyle]=\"{'width': progressWidth + '%'}\"></span>\n            </div>\n\n        </div>\n    ",
                styles: ["\n        .simple-notification {\n            width: 100%;\n            padding: 10px 20px;\n            box-sizing: border-box;\n            position: relative;\n            float: left;\n            margin-bottom: 10px;\n            color: #fff;\n            cursor: pointer;\n            transition: all 0.5s;\n        }\n\n        .simple-notification .sn-title {\n            margin: 0;\n            padding: 0 50px 0 0;\n            line-height: 30px;\n            font-size: 20px;\n        }\n\n        .simple-notification .sn-content {\n            margin: 0;\n            font-size: 16px;\n            padding: 0 50px 0 0;\n            line-height: 20px;\n        }\n\n        .simple-notification .icon {\n            position: absolute;\n            box-sizing: border-box;\n            top: 0;\n            right: 0;\n            width: 70px;\n            height: 70px;\n            padding: 10px;\n        }\n\n        .simple-notification .icon svg {\n            fill: #fff;\n            width: 100%;\n            height: 100%;\n        }\n\n        .simple-notification .icon svg g {\n            fill: #fff;\n        }\n\n        .simple-notification.rtl-mode {\n            direction: rtl;\n        }\n\n        .simple-notification.rtl-mode .sn-content {\n            padding: 0 0 0 50px;\n        }\n\n        .simple-notification.rtl-mode svg {\n            left: 0;\n            right: auto;\n        }\n\n        .simple-notification.error { background: #F44336; }\n        .simple-notification.success { background: #8BC34A; }\n        .simple-notification.alert { background: #ffdb5b; }\n        .simple-notification.info { background: #03A9F4; }\n        .simple-notification.warn { background: #ffdb5b; }\n\n        .simple-notification .sn-progress-loader {\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 5px;\n        }\n\n        .simple-notification .sn-progress-loader span {\n            float: left;\n            height: 100%;\n        }\n\n        .simple-notification.success .sn-progress-loader span { background: #689F38; }\n        .simple-notification.error .sn-progress-loader span { background: #D32F2F; }\n        .simple-notification.alert .sn-progress-loader span { background: #edc242; }\n        .simple-notification.info .sn-progress-loader span { background: #0288D1; }\n        .simple-notification.warn .sn-progress-loader span { background: #edc242; }\n        .simple-notification.bare .sn-progress-loader span { background: #ccc; }\n\n        .simple-notification.warn div .sn-title { color: #444; }\n        .simple-notification.warn div .sn-content { color: #444; }\n    "]
            },] },
];
/** @nocollapse */
NotificationComponent.ctorParameters = function () { return [
    { type: notifications_service_1.NotificationsService, },
    { type: platform_browser_1.DomSanitizer, },
    { type: core_1.NgZone, },
]; };
NotificationComponent.propDecorators = {
    'timeOut': [{ type: core_1.Input },],
    'showProgressBar': [{ type: core_1.Input },],
    'pauseOnHover': [{ type: core_1.Input },],
    'clickToClose': [{ type: core_1.Input },],
    'maxLength': [{ type: core_1.Input },],
    'theClass': [{ type: core_1.Input },],
    'rtl': [{ type: core_1.Input },],
    'animate': [{ type: core_1.Input },],
    'position': [{ type: core_1.Input },],
    'item': [{ type: core_1.Input },],
};
exports.NotificationComponent = NotificationComponent;
//# sourceMappingURL=notification.component.js.map

/***/ }),

/***/ "../../../../angular2-notifications/dist/src/simple-notifications/components/simple-notifications.component.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var notifications_service_1 = __webpack_require__("../../../../angular2-notifications/dist/src/simple-notifications/services/notifications.service.js");
var SimpleNotificationsComponent = (function () {
    function SimpleNotificationsComponent(_service) {
        this._service = _service;
        this.onCreate = new core_1.EventEmitter();
        this.onDestroy = new core_1.EventEmitter();
        this.notifications = [];
        this.position = ['bottom', 'right'];
        // Received values
        this.lastOnBottom = true;
        this.maxStack = 8;
        this.preventLastDuplicates = false;
        this.preventDuplicates = false;
        // Sent values
        this.timeOut = 0;
        this.maxLength = 0;
        this.clickToClose = true;
        this.showProgressBar = true;
        this.pauseOnHover = true;
        this.theClass = '';
        this.rtl = false;
        this.animate = 'fromRight';
    }
    Object.defineProperty(SimpleNotificationsComponent.prototype, "options", {
        set: function (opt) {
            this.attachChanges(opt);
        },
        enumerable: true,
        configurable: true
    });
    SimpleNotificationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Listen for changes in the service
        this.listener = this._service.getChangeEmitter()
            .subscribe(function (item) {
            switch (item.command) {
                case 'cleanAll':
                    _this.notifications = [];
                    break;
                case 'clean':
                    _this.cleanSingle(item.id);
                    break;
                case 'set':
                    if (item.add)
                        _this.add(item.notification);
                    else
                        _this.defaultBehavior(item);
                    break;
                default:
                    _this.defaultBehavior(item);
                    break;
            }
        });
    };
    // Default behavior on event
    SimpleNotificationsComponent.prototype.defaultBehavior = function (value) {
        this.notifications.splice(this.notifications.indexOf(value.notification), 1);
        this.onDestroy.emit(this.buildEmit(value.notification, false));
    };
    // Add the new notification to the notification array
    SimpleNotificationsComponent.prototype.add = function (item) {
        item.createdOn = new Date();
        var toBlock = this.preventLastDuplicates || this.preventDuplicates ? this.block(item) : false;
        // Save this as the last created notification
        this.lastNotificationCreated = item;
        // Override icon if set
        if (item.override && item.override.icons && item.override.icons[item.type]) {
            item.icon = item.override.icons[item.type];
        }
        if (!toBlock) {
            // Check if the notification should be added at the start or the end of the array
            if (this.lastOnBottom) {
                if (this.notifications.length >= this.maxStack)
                    this.notifications.splice(0, 1);
                this.notifications.push(item);
            }
            else {
                if (this.notifications.length >= this.maxStack)
                    this.notifications.splice(this.notifications.length - 1, 1);
                this.notifications.splice(0, 0, item);
            }
            this.onCreate.emit(this.buildEmit(item, true));
        }
    };
    // Check if notifications should be prevented
    SimpleNotificationsComponent.prototype.block = function (item) {
        var toCheck = item.html ? this.checkHtml : this.checkStandard;
        if (this.preventDuplicates && this.notifications.length > 0) {
            for (var i = 0; i < this.notifications.length; i++) {
                if (toCheck(this.notifications[i], item)) {
                    return true;
                }
            }
        }
        if (this.preventLastDuplicates) {
            var comp = void 0;
            if (this.preventLastDuplicates === 'visible' && this.notifications.length > 0) {
                if (this.lastOnBottom) {
                    comp = this.notifications[this.notifications.length - 1];
                }
                else {
                    comp = this.notifications[0];
                }
            }
            else if (this.preventLastDuplicates === 'all' && this.lastNotificationCreated) {
                comp = this.lastNotificationCreated;
            }
            else {
                return false;
            }
            return toCheck(comp, item);
        }
        return false;
    };
    SimpleNotificationsComponent.prototype.checkStandard = function (checker, item) {
        return checker.type === item.type && checker.title === item.title && checker.content === item.content;
    };
    SimpleNotificationsComponent.prototype.checkHtml = function (checker, item) {
        return checker.html ? checker.type === item.type && checker.title === item.title && checker.content === item.content && checker.html === item.html : false;
    };
    // Attach all the changes received in the options object
    SimpleNotificationsComponent.prototype.attachChanges = function (options) {
        var _this = this;
        Object.keys(options).forEach(function (a) {
            if (_this.hasOwnProperty(a)) {
                _this[a] = options[a];
            }
            else if (a === 'icons') {
                _this._service.icons = options[a];
            }
        });
    };
    SimpleNotificationsComponent.prototype.buildEmit = function (notification, to) {
        var toEmit = {
            createdOn: notification.createdOn,
            type: notification.type,
            icon: notification.icon,
            id: notification.id
        };
        if (notification.html) {
            toEmit.html = notification.html;
        }
        else {
            toEmit.title = notification.title;
            toEmit.content = notification.content;
        }
        if (!to) {
            toEmit.destroyedOn = new Date();
        }
        return toEmit;
    };
    SimpleNotificationsComponent.prototype.cleanSingle = function (id) {
        var indexOfDelete = 0;
        var doDelete = false;
        this.notifications.forEach(function (notification, idx) {
            if (notification.id === id) {
                indexOfDelete = idx;
                doDelete = true;
            }
        });
        if (doDelete) {
            this.notifications.splice(indexOfDelete, 1);
        }
    };
    SimpleNotificationsComponent.prototype.ngOnDestroy = function () {
        if (this.listener) {
            this.listener.unsubscribe();
        }
    };
    return SimpleNotificationsComponent;
}());
SimpleNotificationsComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'simple-notifications',
                encapsulation: core_1.ViewEncapsulation.None,
                template: "\n        <div class=\"simple-notification-wrapper\" [ngClass]=\"position\">\n            <simple-notification\n                *ngFor=\"let a of notifications; let i = index\"\n                [item]=\"a\"\n                [timeOut]=\"timeOut\"\n                [clickToClose]=\"clickToClose\"\n                [maxLength]=\"maxLength\"\n                [showProgressBar]=\"showProgressBar\"\n                [pauseOnHover]=\"pauseOnHover\"\n                [theClass]=\"theClass\"\n                [rtl]=\"rtl\"\n                [animate]=\"animate\"\n                [position]=\"i\"\n                >\n            </simple-notification>\n        </div>\n    ",
                styles: ["\n        .simple-notification-wrapper {\n            position: fixed;\n            width: 300px;\n            z-index: 1000;\n        }\n        \n        .simple-notification-wrapper.left { left: 20px; }\n        .simple-notification-wrapper.top { top: 20px; }\n        .simple-notification-wrapper.right { right: 20px; }\n        .simple-notification-wrapper.bottom { bottom: 20px; }\n        \n        @media (max-width: 340px) {\n            .simple-notification-wrapper {\n                width: auto;\n                left: 20px;\n                right: 20px;\n            }\n        }\n    "]
            },] },
];
/** @nocollapse */
SimpleNotificationsComponent.ctorParameters = function () { return [
    { type: notifications_service_1.NotificationsService, },
]; };
SimpleNotificationsComponent.propDecorators = {
    'options': [{ type: core_1.Input },],
    'onCreate': [{ type: core_1.Output },],
    'onDestroy': [{ type: core_1.Output },],
};
exports.SimpleNotificationsComponent = SimpleNotificationsComponent;
//# sourceMappingURL=simple-notifications.component.js.map

/***/ }),

/***/ "../../../../angular2-notifications/dist/src/simple-notifications/interfaces/icons.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultIcons = {
    alert: "\n        <svg class=\"simple-notification-svg\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#ffffff\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n            <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n            <path d=\"M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z\"/>\n        </svg>\n    ",
    error: "\n        <svg class=\"simple-notification-svg\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#ffffff\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n            <path d=\"M0 0h24v24H0V0z\" fill=\"none\"/>\n            <path d=\"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"/>\n        </svg>\n    ",
    info: "\n        <svg class=\"simple-notification-svg\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#ffffff\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n            <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n            <path d=\"M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z\"/>\n        </svg>\n    ",
    success: "\n        <svg class=\"simple-notification-svg\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#ffffff\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n            <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n            <path d=\"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z\"/>\n        </svg>\n    ",
    warn: "\n        <svg class=\"simple-notification-svg\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#ffffff\" width=\"64\" viewBox=\"0 0 64 64\" height=\"64\">\n          <circle cx=\"32.086\" cy=\"50.142\" r=\"2.256\"/>\n          <path d=\"M30.08 25.012V42.32c0 1.107.897 2.005 2.006 2.005s2.006-.897 2.006-2.005V25.012c0-1.107-.897-2.006-2.006-2.006s-2.006.898-2.006 2.006z\"/>\n          <path d=\"M63.766 59.234L33.856 3.082c-.697-1.308-2.844-1.308-3.54 0L.407 59.234c-.331.622-.312 1.372.051 1.975.362.605 1.015.975 1.72.975h59.816c.705 0 1.357-.369 1.721-.975.361-.603.381-1.353.051-1.975zM5.519 58.172L32.086 8.291l26.568 49.881H5.519z\"/>\n        </svg>\n    "
};
//# sourceMappingURL=icons.js.map

/***/ }),

/***/ "../../../../angular2-notifications/dist/src/simple-notifications/pipes/max.pipe.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var MaxPipe = (function () {
    function MaxPipe() {
    }
    MaxPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!value)
            return value;
        var allowed = args[0];
        var received = value.length;
        if (received > allowed && allowed !== 0) {
            var toCut = allowed - received;
            return value.slice(0, toCut);
        }
        return value;
    };
    return MaxPipe;
}());
MaxPipe.decorators = [
    { type: core_1.Pipe, args: [{ name: 'max' },] },
];
/** @nocollapse */
MaxPipe.ctorParameters = function () { return []; };
exports.MaxPipe = MaxPipe;
//# sourceMappingURL=max.pipe.js.map

/***/ }),

/***/ "../../../../angular2-notifications/dist/src/simple-notifications/services/notifications.service.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var Subject_1 = __webpack_require__("../../../../rxjs/Subject.js");
var icons_1 = __webpack_require__("../../../../angular2-notifications/dist/src/simple-notifications/interfaces/icons.js");
var NotificationsService = (function () {
    function NotificationsService() {
        this.emitter = new Subject_1.Subject();
        this.icons = icons_1.defaultIcons;
    }
    NotificationsService.prototype.set = function (notification, to) {
        notification.id = notification.override && notification.override.id ? notification.override.id : Math.random().toString(36).substring(3);
        notification.click = new core_1.EventEmitter();
        this.emitter.next({ command: 'set', notification: notification, add: to });
        return notification;
    };
    ;
    NotificationsService.prototype.getChangeEmitter = function () {
        return this.emitter;
    };
    //// Access methods
    NotificationsService.prototype.success = function (title, content, override) {
        return this.set({ title: title, content: content || '', type: 'success', icon: this.icons.success, override: override }, true);
    };
    NotificationsService.prototype.error = function (title, content, override) {
        return this.set({ title: title, content: content || '', type: 'error', icon: this.icons.error, override: override }, true);
    };
    NotificationsService.prototype.alert = function (title, content, override) {
        return this.set({ title: title, content: content || '', type: 'alert', icon: this.icons.alert, override: override }, true);
    };
    NotificationsService.prototype.info = function (title, content, override) {
        return this.set({ title: title, content: content || '', type: 'info', icon: this.icons.info, override: override }, true);
    };
    NotificationsService.prototype.warn = function (title, content, override) {
        return this.set({ title: title, content: content || '', type: 'warn', icon: this.icons.warn, override: override }, true);
    };
    NotificationsService.prototype.bare = function (title, content, override) {
        return this.set({ title: title, content: content || '', type: 'bare', icon: 'bare', override: override }, true);
    };
    // With type method
    NotificationsService.prototype.create = function (title, content, type, override) {
        if (content === void 0) { content = ''; }
        if (type === void 0) { type = 'success'; }
        return this.set({ title: title, content: content, type: type, icon: this.icons[type], override: override }, true);
    };
    // HTML Notification method
    NotificationsService.prototype.html = function (html, type, override) {
        if (type === void 0) { type = 'success'; }
        return this.set({ html: html, type: type, icon: 'bare', override: override }, true);
    };
    // Remove all notifications method
    NotificationsService.prototype.remove = function (id) {
        if (id)
            this.emitter.next({ command: 'clean', id: id });
        else
            this.emitter.next({ command: 'cleanAll' });
    };
    return NotificationsService;
}());
NotificationsService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
NotificationsService.ctorParameters = function () { return []; };
exports.NotificationsService = NotificationsService;
//# sourceMappingURL=notifications.service.js.map

/***/ })

});
//# sourceMappingURL=notify.module.chunk.js.map