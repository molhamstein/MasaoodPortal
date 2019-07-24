webpackJsonp(["c3-js.module"],{

/***/ "../../../../../src/app/pages/charts/c3-js/c3-js.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12 col-lg-6\">\n    <app-card [title]=\"'Stacked Area Chart'\">\n      <div id=\"chart\"></div>\n    </app-card>\n  </div>\n  <div class=\"col-md-12 col-lg-6\">\n    <app-card [title]=\"'chart bar stacked'\">\n      <div id=\"chart1\"></div>\n    </app-card>\n  </div>\n  <div class=\"col-md-12 col-lg-6\">\n    <app-card [title]=\"'Gauge chart'\">\n      <div id=\"chart2\"></div>\n    </app-card>\n  </div>\n  <div class=\"col-md-12 col-lg-6\">\n    <app-card [title]=\"'Pie chart'\">\n      <div id=\"chart3\"></div>\n    </app-card>\n  </div>\n  <div class=\"col-md-12 col-lg-6\">\n    <app-card [title]=\"'Combination chart'\">\n      <div id=\"chart4\"></div>\n    </app-card>\n  </div>\n  <div class=\"col-md-12 col-lg-6\">\n    <app-card [title]=\"'Step chart'\">\n      <div id=\"chart5\"></div>\n    </app-card>\n  </div>\n  <div class=\"col-lg-12\">\n    <app-card [title]=\"'Scatter Plot chart'\">\n      <div id=\"chart6\"></div>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/charts/c3-js/c3-js.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return C3JsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("../../../../d3/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_c3__ = __webpack_require__("../../../../c3/c3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_c3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_c3__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var C3JsComponent = (function () {
    function C3JsComponent() {
    }
    C3JsComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            var chart = __WEBPACK_IMPORTED_MODULE_2_c3__["generate"]({
                bindto: '#chart',
                data: {
                    columns: [
                        ['data1', 300, 350, 500, -10, 0, 320],
                        ['data2', 130, 100, 180, 200, 150, 50]
                    ],
                    types: {
                        data1: 'area-spline',
                        data2: 'area-spline'
                        // 'line', 'spline', 'step', 'area', 'area-step' are also available to stack
                    },
                    colors: {
                        data1: 'rgba(1, 192, 200, 0.92)',
                        data2: 'rgba(26, 188, 156, 0.93)'
                    },
                    groups: [
                        ['data1', 'data2']
                    ]
                }
            });
            var chart1 = __WEBPACK_IMPORTED_MODULE_2_c3__["generate"]({
                bindto: '#chart1',
                data: {
                    columns: [
                        ['data1', -30, 200, 200, 400, -150, 250],
                        ['data2', 130, 100, -100, 200, -150, 50],
                        ['data3', -230, 200, 300, -300, 250, 250]
                    ],
                    type: 'bar',
                    groups: [
                        ['data1', 'data2']
                    ],
                },
                color: {
                    pattern: ['#99D683', '#4C5667', '#01C0C8']
                },
                grid: {
                    y: {
                        lines: [{ value: 0 }]
                    }
                }
            });
            var chart2 = __WEBPACK_IMPORTED_MODULE_2_c3__["generate"]({
                bindto: '#chart2',
                data: {
                    columns: [
                        ['data1', 30],
                        ['data2', 120],
                    ],
                    type: 'donut',
                    onclick: function (d, i) {
                        console.log('onclick', d, i);
                    },
                    onmouseover: function (d, i) {
                        console.log('onmouseover', d, i);
                    },
                    onmouseout: function (d, i) {
                        console.log('onmouseout', d, i);
                    }
                },
                color: {
                    pattern: ['#4C5667', '#1ABC9C']
                },
                donut: {
                    title: 'Iris Petal Width'
                }
            });
            var chart3 = __WEBPACK_IMPORTED_MODULE_2_c3__["generate"]({
                bindto: '#chart3',
                data: {
                    // iris data from R
                    columns: [
                        ['data1', 30],
                        ['data2', 120],
                    ],
                    type: 'pie',
                    onclick: function (d, i) {
                        console.log('onclick', d, i);
                    },
                    onmouseover: function (d, i) {
                        console.log('onmouseover', d, i);
                    },
                    onmouseout: function (d, i) {
                        console.log('onmouseout', d, i);
                    }
                },
                color: {
                    pattern: ['#1ABC9C', '#4C5667', '#00C292', '#AB8CE4']
                },
            });
            var chart4 = __WEBPACK_IMPORTED_MODULE_2_c3__["generate"]({
                bindto: '#chart4',
                data: {
                    columns: [
                        ['data1', 30, 20, 50, 40, 60, 50],
                        ['data2', 200, 130, 90, 240, 130, 220],
                        ['data3', 300, 200, 160, 400, 250, 250],
                        ['data4', 200, 130, 90, 240, 130, 220],
                        ['data5', 130, 120, 150, 140, 160, 150],
                        ['data6', 90, 70, 20, 50, 60, 120],
                    ],
                    type: 'bar',
                    colors: {
                        data1: '#00C292',
                        data2: '#4C5667',
                        data3: '#03A9F3',
                        data4: '#AB8CE4',
                        data5: '#a3aebd',
                        data6: '#FEC107'
                    },
                    types: {
                        data3: 'spline',
                        data4: 'line',
                        data6: 'area',
                    },
                    groups: [
                        ['data1', 'data2']
                    ]
                }
            });
            var chart5 = __WEBPACK_IMPORTED_MODULE_2_c3__["generate"]({
                bindto: '#chart5',
                data: {
                    columns: [
                        ['data1', 300, 350, 300, 0, 0, 100],
                        ['data2', 130, 100, 140, 200, 150, 50]
                    ],
                    types: {
                        data1: 'step',
                        data2: 'area-step'
                    },
                    colors: {
                        data1: 'rgb(26, 188, 156)',
                        data2: 'rgba(26, 188, 156, 0.61)'
                    }
                }
            });
            var chart6 = __WEBPACK_IMPORTED_MODULE_2_c3__["generate"]({
                bindto: '#chart6',
                size: { height: 400 },
                color: { pattern: ['#2C3E50', '#1ABC9C'] },
                data: {
                    xs: {
                        setosa: 'setosa_x',
                        versicolor: 'versicolor_x',
                    },
                    // iris data from R
                    columns: [
                        ['setosa_x', 3.5, 3.0, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3.0, 3.0, 4.0, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3.0, 3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3.0, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3.0, 3.8, 3.2, 3.7, 3.3],
                        ['versicolor_x', 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2.0, 3.0, 2.2, 2.9, 2.9, 3.1, 3.0, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3.0, 2.8, 3.0, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3.0, 3.4, 3.1, 2.3, 3.0, 2.5, 2.6, 3.0, 2.6, 2.3, 2.7, 3.0, 2.9, 2.9, 2.5, 2.8],
                        ['setosa', 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
                        ['versicolor', 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
                    ],
                    type: 'scatter'
                },
                axis: {
                    x: {
                        label: 'Sepal.Width',
                        tick: {
                            fit: false
                        }
                    },
                    y: {
                        label: 'Petal.Width'
                    }
                }
            });
        }, 1);
    };
    return C3JsComponent;
}());
C3JsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-c3-js',
        template: __webpack_require__("../../../../../src/app/pages/charts/c3-js/c3-js.component.html"),
        styles: [__webpack_require__("../../../../c3/c3.min.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [])
], C3JsComponent);

//# sourceMappingURL=c3-js.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/charts/c3-js/c3-js.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c3JsRoutes", function() { return c3JsRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C3JsModule", function() { return C3JsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__c3_js_component__ = __webpack_require__("../../../../../src/app/pages/charts/c3-js/c3-js.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var c3JsRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__c3_js_component__["a" /* C3JsComponent */],
        data: {
            breadcrumb: 'C3 Chart',
            icon: 'icofont-chart-bar-graph bg-c-blue',
            status: true
        }
    }
];
var C3JsModule = (function () {
    function C3JsModule() {
    }
    return C3JsModule;
}());
C3JsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(c3JsRoutes),
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__c3_js_component__["a" /* C3JsComponent */]]
    })
], C3JsModule);

//# sourceMappingURL=c3-js.module.js.map

/***/ })

});
//# sourceMappingURL=c3-js.module.chunk.js.map