webpackJsonp(["google.module"],{

/***/ "../../../../../src/app/pages/charts/google/google.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/charts/google/google.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-6\">\n    <app-card [title]=\"'Area Chart'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\n      <google-chart [data]=\"areaChartData\"></google-chart>\n    </app-card>\n  </div>\n\n  <div class=\"col-sm-6\">\n    <app-card [title]=\"'STACKING AREA CHART'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\n      <google-chart [data]=\"stackingAreaChartData\"></google-chart>\n    </app-card>\n  </div>\n\n  <div class=\"col-sm-6\">\n    <app-card [title]=\"'BAR CHART'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\n      <google-chart [data]=\"barChartData\"></google-chart>\n    </app-card>\n  </div>\n\n  <div class=\"col-sm-6\">\n    <app-card [title]=\"'BUBBLE CHART'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\n      <google-chart [data]=\"bubbleChartData\"></google-chart>\n    </app-card>\n  </div>\n\n  <div class=\"col-sm-6\">\n    <app-card [title]=\"'COMBO CHART'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\n      <google-chart [data]=\"comboChartData\"></google-chart>\n    </app-card>\n  </div>\n\n  <div class=\"col-sm-6\">\n    <app-card [title]=\"'DONUT CHART'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\n      <google-chart [data]=\"donutChartData\"></google-chart>\n    </app-card>\n  </div>\n\n  <div class=\"col-sm-6\">\n    <app-card [title]=\"'EXPLOADING A SLICE CHART'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\n      <google-chart [data]=\"exploadingChartData\"></google-chart>\n    </app-card>\n  </div>\n\n  <div class=\"col-sm-6\">\n    <app-card [title]=\"'Table Chart'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [blockClass]=\"'text-center'\">\n      <google-chart [data]=\"tableChartData\"></google-chart>\n    </app-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/charts/google/google.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GoogleComponent = (function () {
    function GoogleComponent() {
        this.areaChartData = {
            chartType: 'AreaChart',
            dataTable: [
                ['Year', 'Sales', 'Expenses'],
                ['2013', 1000, 400],
                ['2014', 1170, 460],
                ['2015', 660, 1120],
                ['2016', 1030, 540]
            ],
            options: {
                vAxis: { minValue: 0 },
                colors: ['#01C0C8', '#FB9678'],
                height: 300
            },
        };
        this.stackingAreaChartData = {
            chartType: 'AreaChart',
            dataTable: [
                ['Year', 'Sales', 'Expenses'],
                ['2013', 1000, 400],
                ['2014', 1170, 460],
                ['2015', 660, 1120],
                ['2016', 1030, 540]
            ],
            options: {
                isStacked: true,
                height: 300,
                legend: { position: 'top', maxLines: 3 },
                vAxis: { minValue: 0 },
                colors: ['#2ecc71', '#5faee3']
            },
        };
        this.barChartData = {
            chartType: 'BarChart',
            dataTable: [
                ['City', '2010 Population', '2000 Population'],
                ['New York City, NY', 8175000, 8008000],
                ['Los Angeles, CA', 3792000, 3694000],
                ['Chicago, IL', 2695000, 2896000],
                ['Houston, TX', 2099000, 1953000],
                ['Philadelphia, PA', 1526000, 1517000]
            ],
            options: {
                height: 300,
                title: 'Population of Largest U.S. Cities',
                chartArea: { width: '50%' },
                isStacked: true,
                hAxis: {
                    title: 'Total Population',
                    minValue: 0,
                },
                vAxis: {
                    title: 'City'
                },
                colors: ['#2ecc71', '#5faee3']
            },
        };
        this.bubbleChartData = {
            chartType: 'BubbleChart',
            dataTable: [
                ['ID', 'Life Expectancy', 'Fertility Rate', 'Region', 'Population'],
                ['CAN', 80.66, 1.67, 'North America', 33739900],
                ['DEU', 79.84, 1.36, 'Europe', 81902307],
                ['DNK', 78.6, 1.84, 'Europe', 5523095],
                ['EGY', 72.73, 2.78, 'Middle East', 79716203],
                ['GBR', 80.05, 2, 'Europe', 61801570],
                ['IRN', 72.49, 1.7, 'Middle East', 73137148],
                ['IRQ', 68.09, 4.77, 'Middle East', 31090763],
                ['ISR', 81.55, 2.96, 'Middle East', 7485600],
                ['RUS', 68.6, 1.54, 'Europe', 141850000],
                ['USA', 78.09, 2.05, 'North America', 307007000]
            ],
            options: {
                height: 300,
                title: 'Correlation between life expectancy, fertility rate ' +
                    'and population of some world countries (2010)',
                hAxis: { title: 'Life Expectancy' },
                vAxis: { title: 'Fertility Rate' },
                bubble: { textStyle: { fontSize: 11 } },
                colors: ['#2ecc71', '#5faee3', '#DD4B39']
            },
        };
        this.comboChartData = {
            chartType: 'ComboChart',
            dataTable: [
                ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
                ['2004/05', 165, 938, 522, 998, 450, 614.6],
                ['2005/06', 135, 1120, 599, 1268, 288, 682],
                ['2006/07', 157, 1167, 587, 807, 397, 623],
                ['2007/08', 139, 1110, 615, 968, 215, 609.4],
                ['2008/09', 136, 691, 629, 1026, 366, 569.6]
            ],
            options: {
                height: 300,
                title: 'Monthly Coffee Production by Country',
                vAxis: { title: 'Cups' },
                hAxis: { title: 'Month' },
                seriesType: 'bars',
                series: { 5: { type: 'line' } },
                colors: ['#2ecc71', '#01C0C8', '#FB9678', '#5faee3', '#f4d03f', '#e74c3c']
            },
        };
        this.donutChartData = {
            chartType: 'PieChart',
            dataTable: [
                ['Task', 'Hours per Day'],
                ['Work', 11],
                ['Eat', 2],
                ['Commute', 2],
                ['Watch TV', 2],
                ['Sleep', 7]
            ],
            options: {
                height: 300,
                title: 'My Daily Activities',
                pieHole: 0.4,
                colors: ['#2ecc71', '#01C0C8', '#FB9678', '#5faee3', '#f4d03f']
            },
        };
        this.exploadingChartData = {
            chartType: 'PieChart',
            dataTable: [
                ['Language', 'Speakers (in millions)'],
                ['Assamese', 13],
                ['Bengali', 83],
                ['Bodo', 1.4],
                ['Dogri', 2.3],
                ['Gujarati', 46],
                ['Hindi', 300],
                ['Kannada', 38],
                ['Kashmiri', 5.5],
                ['Konkani', 5],
                ['Maithili', 20],
                ['Malayalam', 33],
                ['Manipuri', 1.5],
                ['Marathi', 72],
                ['Nepali', 2.9],
                ['Oriya', 33]
            ],
            options: {
                height: 300,
                title: 'Indian Language Use',
                legend: 'none',
                pieSliceText: 'label',
                slices: {
                    4: { offset: 0.2 },
                    12: { offset: 0.3 },
                    14: { offset: 0.4 },
                    15: { offset: 0.5 },
                },
                colors: ['#2ecc71', '#01C0C8', '#FB9678', '#5faee3', '#f4d03f', '#e74c3c']
            },
        };
        this.tableChartData = {
            chartType: 'Table',
            dataTable: [
                ['Department', 'Revenues', 'Another column'],
                ['Shoes', 10700, -100],
                ['Sports', -15400, 25],
                ['Toys', 12500, 40],
                ['Electronics', -2100, 889],
                ['Food', 22600, 78],
                ['Art', 1100, 42]
            ],
            formatters: [
                {
                    columns: [1, 2],
                    type: 'NumberFormat',
                    options: {
                        prefix: '&euro;', negativeColor: 'red', negativeParens: true
                    }
                }
            ],
            options: {
                height: 300,
                title: 'Countries',
                allowHtml: true
            }
        };
    }
    GoogleComponent.prototype.ngOnInit = function () {
    };
    return GoogleComponent;
}());
GoogleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-google',
        template: __webpack_require__("../../../../../src/app/pages/charts/google/google.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/charts/google/google.component.css")]
    }),
    __metadata("design:paramtypes", [])
], GoogleComponent);

//# sourceMappingURL=google.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/charts/google/google.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "googleRoutes", function() { return googleRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleModule", function() { return GoogleModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_component__ = __webpack_require__("../../../../../src/app/pages/charts/google/google.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_google_charts__ = __webpack_require__("../../../../ng2-google-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_google_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_google_charts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var googleRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__google_component__["a" /* GoogleComponent */],
        data: {
            breadcrumb: 'Google Chart',
            icon: 'icofont-chart-bar-graph bg-c-blue',
            status: true
        }
    }
];
var GoogleModule = (function () {
    function GoogleModule() {
    }
    return GoogleModule;
}());
GoogleModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(googleRoutes),
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_google_charts__["Ng2GoogleChartsModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__google_component__["a" /* GoogleComponent */]]
    })
], GoogleModule);

//# sourceMappingURL=google.module.js.map

/***/ }),

/***/ "../../../../ng2-google-charts/google-chart/chart-html-tooltip.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ChartHTMLTooltip = (function () {
    function ChartHTMLTooltip(el) {
        this.tooltipDOMElement = el;
    }
    ChartHTMLTooltip.prototype.setPosition = function (x, y) {
        this.tooltipDOMElement.nativeElement.style.left = x + ChartHTMLTooltip.PIXELS;
        this.tooltipDOMElement.nativeElement.style.top = y + ChartHTMLTooltip.PIXELS;
    };
    ChartHTMLTooltip.prototype.getDOMElement = function () {
        return this.tooltipDOMElement;
    };
    return ChartHTMLTooltip;
}());
ChartHTMLTooltip.PIXELS = 'px';
exports.ChartHTMLTooltip = ChartHTMLTooltip;


/***/ }),

/***/ "../../../../ng2-google-charts/google-chart/chart-mouse-event.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ChartMouseEvent = (function () {
    function ChartMouseEvent() {
    }
    return ChartMouseEvent;
}());
exports.ChartMouseEvent = ChartMouseEvent;
/**
 * @deprecated Use ChartMouseOverEvent instead
 */
var MouseOverEvent = (function (_super) {
    __extends(MouseOverEvent, _super);
    function MouseOverEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MouseOverEvent;
}(ChartMouseEvent));
exports.MouseOverEvent = MouseOverEvent;
var ChartMouseOverEvent = (function (_super) {
    __extends(ChartMouseOverEvent, _super);
    function ChartMouseOverEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ChartMouseOverEvent;
}(ChartMouseEvent));
exports.ChartMouseOverEvent = ChartMouseOverEvent;
var ChartMouseOutEvent = (function (_super) {
    __extends(ChartMouseOutEvent, _super);
    function ChartMouseOutEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ChartMouseOutEvent;
}(ChartMouseEvent));
exports.ChartMouseOutEvent = ChartMouseOutEvent;


/***/ }),

/***/ "../../../../ng2-google-charts/google-chart/google-chart.component.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var google_charts_loader_service_1 = __webpack_require__("../../../../ng2-google-charts/google-charts-loader.service.js");
var chart_html_tooltip_1 = __webpack_require__("../../../../ng2-google-charts/google-chart/chart-html-tooltip.js");
var GoogleChartComponent = (function () {
    function GoogleChartComponent(el, loaderService) {
        this.el = el;
        this.loaderService = loaderService;
        this.chartSelect = new core_1.EventEmitter();
        this.chartReady = new core_1.EventEmitter();
        this.chartError = new core_1.EventEmitter();
        this.mouseOver = new core_1.EventEmitter();
        this.mouseOut = new core_1.EventEmitter();
    }
    GoogleChartComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        var key = 'data';
        if (changes[key]) {
            if (!this.data) {
                return;
            }
            this.options = this.data.options;
            this.loaderService.load(this.data.chartType).then(function () {
                if (_this.wrapper === undefined || _this.wrapper.getChartType() !== _this.data.chartType) {
                    _this.wrapper = new google.visualization.ChartWrapper(_this.data);
                }
                else {
                    _this.unregisterChartEvents();
                    _this.wrapper.setDataTable(_this.data.dataTable);
                    _this.wrapper.setOptions(_this.options);
                }
                _this.registerChartWrapperEvents();
                if (_this.data.formatters !== undefined) {
                    for (var _i = 0, _a = _this.data.formatters; _i < _a.length; _i++) {
                        var formatterConfig = _a[_i];
                        var formatterConstructor = google.visualization[formatterConfig.type];
                        var formatterOptions = formatterConfig.options;
                        var formatter = new formatterConstructor(formatterOptions);
                        for (var _b = 0, _c = formatterConfig.columns; _b < _c.length; _b++) {
                            var col = _c[_b];
                            formatter.format(_this.wrapper.getDataTable(), col);
                        }
                    }
                }
                _this.redraw();
            });
        }
    };
    GoogleChartComponent.prototype.redraw = function () {
        this.wrapper.draw(this.el.nativeElement.querySelector('div'));
    };
    GoogleChartComponent.prototype.getSelectorBySeriesType = function (seriesType) {
        var selectors = {
            bars: 'bar#%s#%r',
            haxis: 'hAxis#0#label',
            line: 'point#%s#%r',
            legend: 'legendentry#%s',
            area: 'point#%s#%r'
        };
        var selector = selectors[seriesType];
        return selector;
    };
    /**
     * Given a column number, counts how many
     * columns have rol=="data". Those are mapped
     * one-to-one to the series array. When rol is not defined
     * a column of type number means a series column.
     * @param column to inspect
     */
    GoogleChartComponent.prototype.getSeriesByColumn = function (column) {
        var series = 0;
        var dataTable = this.wrapper.getDataTable();
        for (var i = column - 1; i >= 0; i--) {
            var role = dataTable.getColumnRole(i);
            var type = dataTable.getColumnType(i);
            if (role === 'data' || type === 'number') {
                series++;
            }
        }
        return series;
    };
    GoogleChartComponent.prototype.getBoundingBoxForItem = function (item) {
        var boundingBox = { top: 0, left: 0, width: 0, height: 0 };
        if (this.cli) {
            var column = item.column;
            var series = this.getSeriesByColumn(column);
            var bar = item.row;
            var row = item.row;
            var seriesType = this.options.seriesType;
            if (this.options.series && this.options.series[series] && this.options.series[series].type) {
                seriesType = this.options.series[series].type;
            }
            if (seriesType) {
                var selector = this.getSelectorBySeriesType(seriesType);
                if (selector) {
                    selector = selector.replace('%s', series + '').replace('%c', column + '').replace('%r', row + '');
                    var box = this.cli.getBoundingBox(selector);
                    if (box) {
                        boundingBox = box;
                    }
                }
            }
        }
        return boundingBox;
    };
    GoogleChartComponent.prototype.getValueAtPosition = function (position) {
        if (position.row === null) {
            return null;
        }
        var dataTable = this.wrapper.getDataTable();
        var value = dataTable.getValue(position.row, position.column);
        return value;
    };
    GoogleChartComponent.prototype.getColumnTypeAtPosition = function (position) {
        var dataTable = this.wrapper.getDataTable();
        var type = dataTable.getColumnType(position.column) || '';
        return type;
    };
    GoogleChartComponent.prototype.getColumnLabelAtPosition = function (position) {
        var dataTable = this.wrapper.getDataTable();
        var type = dataTable.getColumnLabel(position.column) || '';
        return type;
    };
    GoogleChartComponent.prototype.getHTMLTooltip = function () {
        var tooltipER = new core_1.ElementRef(this.el.nativeElement.querySelector('.google-visualization-tooltip'));
        return new chart_html_tooltip_1.ChartHTMLTooltip(tooltipER);
    };
    GoogleChartComponent.prototype.parseMouseEvent = function (item) {
        var event = {
            position: item,
            boundingBox: this.getBoundingBoxForItem(item),
            value: this.getValueAtPosition(item),
            columnType: this.getColumnTypeAtPosition(item),
            columnLabel: this.getColumnLabelAtPosition(item)
        };
        return event;
    };
    GoogleChartComponent.prototype.unregisterChartEvents = function () {
        google.visualization.events.removeAllListeners(this.wrapper);
    };
    GoogleChartComponent.prototype.registerChartEvents = function () {
        var _this = this;
        if (this.mouseOver.observers.length > 0) {
            var chart = this.wrapper.getChart();
            this.cli = chart.getChartLayoutInterface();
            google.visualization.events.addListener(chart, 'onmouseover', function (item) {
                var event = _this.parseMouseEvent(item);
                event.tooltip = _this.getHTMLTooltip();
                _this.mouseOver.emit(event);
            });
        }
        if (this.mouseOut.observers.length > 0) {
            var chart = this.wrapper.getChart();
            this.cli = chart.getChartLayoutInterface();
            google.visualization.events.addListener(chart, 'onmouseout', function (item) {
                var event = _this.parseMouseEvent(item);
                _this.mouseOut.emit(event);
            });
        }
    };
    GoogleChartComponent.prototype.registerChartWrapperEvents = function () {
        var _this = this;
        google.visualization.events.addListener(this.wrapper, 'ready', function () {
            _this.chartReady.emit({ message: 'Chart ready' });
            _this.registerChartEvents();
        });
        google.visualization.events.addListener(this.wrapper, 'error', function (error) {
            _this.chartError.emit(error);
        });
        google.visualization.events.addListener(this.wrapper, 'select', function () {
            var event;
            var selection = _this.wrapper.visualization.getSelection()[0];
            if (selection !== undefined) {
                var selectedRowValues = [];
                var selectedRowFormattedValues = [];
                if (selection.row !== null) {
                    var dataTable = _this.wrapper.getDataTable();
                    var numberOfColumns = dataTable.getNumberOfColumns();
                    for (var i = 0; i < numberOfColumns; i++) {
                        selectedRowValues.push(dataTable.getValue(selection.row, i));
                        selectedRowFormattedValues.push(dataTable.getFormattedValue(selection.row, i));
                    }
                }
                event = (_a = {
                        message: 'select',
                        row: selection.row,
                        column: selection.column
                    },
                    _a['selectedRowValues'] = selectedRowValues,
                    _a['selectedRowFormattedValues'] = selectedRowFormattedValues,
                    _a);
            }
            else {
                event = {
                    message: 'deselect',
                    row: null,
                    column: null,
                    selectedRowValues: [],
                    selectedRowFormattedValues: []
                };
            }
            _this.chartSelect.emit(event);
            var _a;
        });
    };
    return GoogleChartComponent;
}());
GoogleChartComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'google-chart',
                template: '<div></div>',
                changeDetection: core_1.ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
GoogleChartComponent.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
    { type: google_charts_loader_service_1.GoogleChartsLoaderService, },
]; };
GoogleChartComponent.propDecorators = {
    'data': [{ type: core_1.Input },],
    'chartReady': [{ type: core_1.Output },],
    'chartError': [{ type: core_1.Output },],
    'chartSelect': [{ type: core_1.Output },],
    'mouseOver': [{ type: core_1.Output },],
    'mouseOut': [{ type: core_1.Output },],
};
exports.GoogleChartComponent = GoogleChartComponent;


/***/ }),

/***/ "../../../../ng2-google-charts/google-charts-loader.service.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var GoogleChartsLoaderService = (function () {
    function GoogleChartsLoaderService(localeId) {
        this.chartPackage = {
            AnnotationChart: 'annotationchart',
            AreaChart: 'corechart',
            Bar: 'bar',
            BarChart: 'corechart',
            BubbleChart: 'corechart',
            Calendar: 'calendar',
            CandlestickChart: 'corechart',
            ColumnChart: 'corechart',
            ComboChart: 'corechart',
            PieChart: 'corechart',
            Gantt: 'gantt',
            Gauge: 'gauge',
            GeoChart: 'geochart',
            Histogram: 'corechart',
            Line: 'line',
            LineChart: 'corechart',
            Map: 'map',
            OrgChart: 'orgchart',
            Sankey: 'sankey',
            Scatter: 'scatter',
            ScatterChart: 'corechart',
            SteppedAreaChart: 'corechart',
            Table: 'table',
            Timeline: 'timeline',
            TreeMap: 'treemap',
            WordTree: 'wordtree'
        };
        this.googleScriptLoadingNotifier = new core_1.EventEmitter();
        this.googleScriptIsLoading = false;
        this.localeId = localeId;
    }
    GoogleChartsLoaderService.prototype.load = function (chartType) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (resolve === void 0) { resolve = Function.prototype; }
            if (reject === void 0) { reject = Function.prototype; }
            _this.loadGoogleChartsScript().then(function () {
                google.charts.load('45', {
                    packages: [_this.chartPackage[chartType]],
                    language: _this.localeId,
                    callback: resolve
                });
            }).catch(function () {
                console.error('Google charts script could not be loaded');
            });
        });
    };
    GoogleChartsLoaderService.prototype.loadGoogleChartsScript = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (resolve === void 0) { resolve = Function.prototype; }
            if (reject === void 0) { reject = Function.prototype; }
            if (typeof google !== 'undefined' && google.charts) {
                resolve();
            }
            else if (!_this.googleScriptIsLoading) {
                _this.googleScriptIsLoading = true;
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = 'https://www.gstatic.com/charts/loader.js';
                script.async = true;
                script.defer = true;
                script.onload = function () {
                    _this.googleScriptIsLoading = false;
                    _this.googleScriptLoadingNotifier.emit(true);
                    resolve();
                };
                script.onerror = function () {
                    _this.googleScriptIsLoading = false;
                    _this.googleScriptLoadingNotifier.emit(false);
                    reject();
                };
                document.getElementsByTagName('head')[0].appendChild(script);
            }
            else {
                _this.googleScriptLoadingNotifier.subscribe(function (loaded) {
                    if (loaded) {
                        resolve();
                    }
                    else {
                        reject();
                    }
                });
            }
        });
    };
    return GoogleChartsLoaderService;
}());
GoogleChartsLoaderService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
GoogleChartsLoaderService.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core_1.Inject, args: [core_1.LOCALE_ID,] },] },
]; };
exports.GoogleChartsLoaderService = GoogleChartsLoaderService;


/***/ }),

/***/ "../../../../ng2-google-charts/google-charts.module.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var google_chart_component_1 = __webpack_require__("../../../../ng2-google-charts/google-chart/google-chart.component.js");
var google_charts_loader_service_1 = __webpack_require__("../../../../ng2-google-charts/google-charts-loader.service.js");
var Ng2GoogleChartsModule = (function () {
    function Ng2GoogleChartsModule() {
    }
    return Ng2GoogleChartsModule;
}());
Ng2GoogleChartsModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [
                    google_chart_component_1.GoogleChartComponent
                ],
                providers: [
                    google_charts_loader_service_1.GoogleChartsLoaderService
                ],
                exports: [
                    google_chart_component_1.GoogleChartComponent
                ]
            },] },
];
/** @nocollapse */
Ng2GoogleChartsModule.ctorParameters = function () { return []; };
exports.Ng2GoogleChartsModule = Ng2GoogleChartsModule;


/***/ }),

/***/ "../../../../ng2-google-charts/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../../../../ng2-google-charts/google-chart/google-chart.component.js"));
var chart_html_tooltip_1 = __webpack_require__("../../../../ng2-google-charts/google-chart/chart-html-tooltip.js");
exports.ChartHTMLTooltip = chart_html_tooltip_1.ChartHTMLTooltip;
var chart_mouse_event_1 = __webpack_require__("../../../../ng2-google-charts/google-chart/chart-mouse-event.js");
exports.ChartMouseOverEvent = chart_mouse_event_1.ChartMouseOverEvent;
exports.ChartMouseOutEvent = chart_mouse_event_1.ChartMouseOutEvent;
exports.MouseOverEvent = chart_mouse_event_1.MouseOverEvent;
var google_charts_module_1 = __webpack_require__("../../../../ng2-google-charts/google-charts.module.js");
exports.Ng2GoogleChartsModule = google_charts_module_1.Ng2GoogleChartsModule;


/***/ })

});
//# sourceMappingURL=google.module.chunk.js.map