webpackJsonp(["change-log.module"],{

/***/ "../../../../../src/app/pages/change-log/change-log.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/change-log/change-log.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xl-3 col-md-4\">\r\n    <div id=\"navigation\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n          <div class=\"card version\">\r\n            <div class=\"card-header\">\r\n              <h5>Change log</h5>\r\n              <div class=\"card-header-right\">\r\n                <i class=\"icofont icofont-navigation-menu\"></i>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <div class=\"support-btn\">\r\n                <a href=\"javascript:;\" class=\"btn btn-primary btn-block\" target=\"_blank\"><i class=\"icofont icofont-life-buoy\"></i> Item support</a>\r\n              </div>\r\n              <ul class=\"nav navigation\">\r\n                <li class=\"navigation-header\"><i class=\"icon-history pull-right\"></i> <b>Version history</b></li>\r\n                <li>\r\n                  <a [ngx-scroll-to]=\"'v_1_5'\" href=\"javascript:;\">Version 1.5 <span class=\"text-muted text-regular pull-right\">15.01.2017</span></a>\r\n                </li>\r\n                <li>\r\n                  <a [ngx-scroll-to]=\"'v_1_4'\" href=\"javascript:;\">Version 1.4 <span class=\"text-muted text-regular pull-right\">01.09.2016</span></a>\r\n                </li>\r\n                <li>\r\n                  <a [ngx-scroll-to]=\"'v_1_3'\" href=\"javascript:;\">Version 1.3 <span class=\"text-muted text-regular pull-right\">01.04.2016</span></a>\r\n                </li>\r\n                <li>\r\n                  <a [ngx-scroll-to]=\"'v_1_2_1'\" href=\"javascript:;\">Version 1.2.1 <span class=\"text-muted text-regular pull-right\">16.12.2015</span></a>\r\n                </li>\r\n                <li>\r\n                  <a [ngx-scroll-to]=\"'v_1_2'\" href=\"javascript:;\">Version 1.2 <span class=\"text-muted text-regular pull-right\">02.12.2015</span></a>\r\n                </li>\r\n                <li>\r\n                  <a [ngx-scroll-to]=\"'v_1_1'\" href=\"javascript:;\">Version 1.1 <span class=\"text-muted text-regular pull-right\">21.10.2015</span></a>\r\n                </li>\r\n                <li>\r\n                  <a [ngx-scroll-to]=\"'release'\" href=\"javascript:;\">Initial release <span class=\"text-muted text-regular pull-right\">01.10.2015</span></a>\r\n                </li>\r\n                <li class=\"navigation-divider\"></li>\r\n                <li class=\"navigation-header\"><i class=\"icon-gear pull-right\"></i> <b>Extras</b></li>\r\n                <li>\r\n                  <a href=\"javascript:;\" target=\"_blank\"><i class=\"icofont icofont-speech-comments m-r-5\"></i> Contact me</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:;\" target=\"_blank\"><i class=\"icofont icofont-life-buoy m-r-5\"></i> Website</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:;\" target=\"_blank\"><i class=\"icofont icofont-rocket-alt-2 m-r-5\"></i> Other templates</a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xl-9 col-md-8\">\r\n    <div class=\"row\" id=\"v_1_5\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <h5>Version 1.5</h5>\r\n            <span>Version 1.5 is a second part of version 1.4</span>\r\n            <div class=\"\">\r\n              <span class=\"text-muted heading-text m-r-5\">January 15, 2017</span>\r\n              <label class=\"label label-info\">V.1.5</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <p class=\"content-group\">Version 1.5 is a second part of version 1.4, which includes 22 new pages from 7 categories, various improvements and bug fixes. Please check documentation for a full list of changes and files that need to be updated.</p>\r\n            <pre class=\"language-javascript\"><code>// # List of new components\r\n                            // ------------------------------\r\n\r\n\r\n                            [new]  Change-log - (Change-log_sidebar_right.html)\r\n\r\n                            [new]  General pages - Feed layouts (general_feed.html)\r\n                            [new]  General pages - Content widgets (general_widgets_content.html)\r\n                            [new]  General pages - Responsive embeds (general_embeds.html)\r\n\r\n                            [new]  Service pages - Sitemap (service_sitemap.html)\r\n\r\n                            [new]  User pages - Tabbed profile (user_pages_profile_tabbed.html)\r\n\r\n                            [new]  Mailbox - Mail list (mail_list.html)\r\n                            [new]  Mailbox - List with detached sidebar (layout 1 and 2) (mail_list_detached.html)\r\n                            [new]  Mailbox - Read mail (mail_read.html)\r\n                            [new]  Mailbox - Write mail (mail_write.html)\r\n\r\n                            [new]  Job search - Cards view (job_list_cards.html)\r\n                            [new]  Job search - Panel view (job_list_panel.html)\r\n                            [new]  Job search - Detailed view (job_detailed.html)\r\n                            [new]  Job search - Apply (job_apply.html)\r\n\r\n                            [new]  Learning kit - List view (learning_list.html)\r\n                            [new]  Learning kit - Grid view (learning_grid.html)\r\n                            [new]  Learning kit - Detailed view (learning_detailed.html)\r\n\r\n\r\n\r\n                            // # List of updated plugins\r\n                            // ------------------------------\r\n\r\n                            [updated]  Switchery library - switchery.min.js - to 0.8.2\r\n                            [updated]  Touchspin spinners - touchspin.min.js - to 3.1.2\r\n                            [updated]  Autosize extension - autosize.min.js - to 3.0.20\r\n                            [updated]  Bootstrap Select - bootstrap_select.min.js to 1.12.1\r\n                            [updated]  Moment.js - moment.min.js, moment_locales.min.js - to 2.17.1\r\n\r\n                            [updated]  Image Cropper - cropper.min.js - to 2.3.4\r\n                            [updated]  Plupload file uploader - plupload bundle - to 2.2.1\r\n                            [updated]  Bootstrap File Input library - fileinput.min.js to 4.3.7\r\n\r\n                            [updated]  Datatables library - datatables.min.js - to 1.10.13\r\n                            [updated]  Autofill DT extention - autofill.min.js - to 2.1.3\r\n                            [updated]  Buttons DT extention - buttons.min.js - to 1.2.4\r\n                            [updated]  Key Table DT extention - key_table.min.js - to 2.2.0\r\n                            [updated]  Row Reorder DT extention - row_reorder.min.js - to 1.2.0\r\n\r\n\r\n\r\n                            // # List of fixed\r\n                            // ------------------------------\r\n\r\n                            [fixed]  Button with icon doesn't support checkboxes/radios\r\n                            [fixed]  Float button - if text is too long, it wraps on the second line\r\n                            [fixed]  Mini sidebar - in collapsed more, items with child levels have wrong right padding\r\n                            [fixed]  Sidebar container bottom spacing fixes\r\n                            [fixed]  In separate sidebar, panels and categories have double bottom spacing\r\n                            [fixed]  Badge and label are transparent in active navigation item in default sidebar\r\n                            [fixed]  Login and registration pages - password fields have wrong input types\r\n                            [fixed]  Dropzone uploader - if uploader is not inside panel, background and border colors don't match\r\n                            [fixed]  If responsive table goes after panel heading, table container and table itself need top border\r\n                            [fixed]  Panel title doesn’t respect font size classes\r\n                            [fixed]  Mini sidebar - children level dropdown in main navigation appears behind footer\r\n                            [fixed]  Stacked media lists don't respect text alignment classes\r\n                            [fixed]  If media object is displayed as panel body, it has extra top margin\r\n                            [fixed]  Datatables fixed header - when click click sidebar control button, headers do not adjust to a new width\r\n                            [fixed]  Anytime picker - empty cells are hidden in date grid\r\n                            [fixed]  In material layout, multiple navbar buttons don't have horizontal spacing\r\n                            [fixed]  FAB button in 5th layout has extra border\r\n\r\n                            [fixed]  RTL layout - Dropzone uploader adds extra horizontal space to body and scrollbar appears\r\n                            [fixed]  RTL layout - default pace theme doesn't show up\r\n\r\n\r\n\r\n                            // # List of improvements\r\n                            // ------------------------------\r\n\r\n                            [improved]  @table-cell-padding variable does not use padding variable\r\n                            [improved]  Removed unused .icons-list-vertical class from html pages\r\n                            [improved]  Removed unused .btn-slide class from html files\r\n                            [improved]  Added inline list with vertical borders (.list-inline-bordered)\r\n                            [improved]  Added group of block buttons (.btn-block-group)\r\n                            [improved]  Added seamless row option which doesn't page spacing between columns (.row-seamless)\r\n                            [improved]  Added border radius helpers (helpers.less)\r\n                            [improved]  Added no-border option for jQuery UI datepicker if used inside panel\r\n                            [improved]  Added class name for scrollable panel to limit panel viewport (.has-scroll)\r\n                            [improved]  Added top border if panel has multiple bodies\r\n                            [improved]  Added class name for slightly darker panel body (.panel-body-accent)\r\n                            [improved]  Added nav tabs toolbar with grey background (.nav-tabs-toolbar)\r\n                            [improved]  Improved navigation and file naming\r\n                            </code></pre>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" id=\"v_1_4\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <h5>Version 1.4</h5>\r\n            <span>Version 1.4 consists of 2 parts</span>\r\n            <div class=\"\">\r\n              <span class=\"text-muted heading-text m-r-5\">September 1, 2016</span>\r\n              <label class=\"label label-info\">V.1.4</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <p class=\"content-group\">Version 1.4 consists of 2 parts - first part contains updated libraries to the latest stable versions, fixed reported bugs and general template improvements; second part will include new pages and new components only. In general, this update doesn't include critical changes, but some of the features were completely re-thought: hiding panel heading and page header elements is now optional and file structure in Starter Kit has been slightly changed: now each layout uses common LESS and JS files for both main and starters layouts.</p>\r\n            <pre class=\"language-javascript\"><code>// # List of updated plugins\r\n                            // ------------------------------\r\n\r\n                            [updated]  Bootstrap library - bootstrap.min.js, bootstrap LESS files - to 3.3.7\r\n                            [updated]  Font Awesome icon set - bundle - to 4.6.3\r\n\r\n                            [updated]  Hover Dropdown extension - hover_dropdown.min.js - to 2.2.1\r\n                            [updated]  Typeahead engine - typeahead.bundle.min.js to 0.11.1\r\n                            [updated]  Dual Listbox - duallistbox.min.js - to 3.0.5\r\n                            [updated]  Select2 library - select2.min.js - to 4.0.3\r\n                            [updated]  Bootstrap Select library - bootstrap_select.min.js - to 1.11.1\r\n                            [updated]  Uniform library - uniform.min.js - to 3.0\r\n                            [updated]  Summernote editor - summernote.min.js - to 0.8.2\r\n\r\n                            [updated]  Ladda extensions - ladda.min.js - to 1.0.0\r\n                            [updated]  Bootstrap Progress Bars - progressbar.min.js - to 0.9.0\r\n                            [updated]  Bootbox dialogs extension - bootbox.min.js to 4.4.0\r\n                            [updated]  Bootpag pagination - bootpag.min.js - to 1.0.7\r\n                            [updated]  Bootstrap pagination extension - bs_pagination.min.js - to 1.4\r\n\r\n                            [updated]  Spectrum color picker - spectrum.js - to 1.8.0\r\n                            [updated]  Pickadate pickers - pickadate.js bundle - to 3.5.6\r\n                            [updated]  Anytime picker - anytime.min.js - to 5.1.2\r\n                            [updated]  Bootstrap daterange picker - daterangepicker.js - to 2.1.23\r\n                            [updated]  Moment.js library - moment.min.js and moment_locales.min.js - to 2.14.1\r\n\r\n                            [updated]  ION Range sliders - ion_rangeslider.min.js - to 2.1.4\r\n                            [updated]  NoUI sliders - nouislider.min.js - to 8.5.1\r\n                            [updated]  jQuery UI slider pips - slider_pips.min.js - to 1.11.3 (in LTR only)\r\n\r\n                            [updated]  Datatables library - datatables.min.js - to 1.10.12\r\n                            [updated]  Autofill DT extention - autofill.min.js - to 2.1.2\r\n                            [updated]  Buttons DT extention - buttons.min.js - to 1.2.1\r\n                            [updated]  Column Reorder DT extention - col_reorder.min.js - to 1.3.2\r\n                            [updated]  Fixed Columns DT extention - fixed_columns.min.js - to 3.2.2\r\n                            [updated]  Fixed Header DT extention - fixed_header.min.js - to 3.1.2\r\n                            [updated]  Key Table DT extention - key_table.min.js - to 2.1.2\r\n                            [updated]  Responsive DT extention - responsive.min.js - to 2.1.0\r\n                            [updated]  Row Reorder DT extention - row_reorder.min.js - to 1.1.2\r\n                            [updated]  Scroller DT extention - scroller.min.js - to 1.4.2\r\n                            [updated]  Select DT extention - select.min.js - to 1.2.0\r\n                            [updated]  Handsontable library - handsontable.min.js - to 0.26.0\r\n\r\n                            [updated]  Image Cropper - cropper.min.js to 2.3.3\r\n                            [updated]  Typeahead Addresspicker - typeahead_addresspicker.js to the latest version\r\n                            [updated]  Fancytree library - fancytree.min.js - to 2.18.0\r\n                            [updated]  Fullcalendar library - fullcalendar.min.js - to 2.9.1\r\n                            [updated]  Headroom.js extension - headroom.min.js and headroom_jquery.min.js - to 0.9.3\r\n                            [updated]  Nicescroll custom scrollbar - nicescroll.min.js - to 3.6.8\r\n                            [updated]  D3.js charting library - d3.min.js - to 3.5.17\r\n\r\n                            [updated]  Plupload file uploader - plupload bundle - to 2.1.9\r\n                            [updated]  Bootstrap File Input library - fileinput.min.js to 4.3.5\r\n\r\n\r\n\r\n                            // # List of fixed\r\n                            // ------------------------------\r\n\r\n                            [fixed]  Wrong horizontal padding in typeahead suggestions menu items in material layout\r\n                            [fixed]  WYSIHTML5 text editor color picker doesn’t work and doesn't respect text styles\r\n                            [fixed]  Fullcalendar table overflow is visible on small screens and some responsive issues\r\n                            [fixed]  Datatable buttons collection dropdown has wrong horizontal padding\r\n                            [fixed]  Alpaca horizontal selects extra gap between selects\r\n                            [fixed]  Fancytree Child Counter extension missing styles\r\n                            [fixed]  Pager has negative bottom margin\r\n                            [fixed]  Tabs inside panel don’t have padding on mobile\r\n                            [fixed]  Nested tabs in vertical tabs layout are also vertical\r\n                            [fixed]  Styled single file input doesn’t respect width if file name is too long\r\n                            [fixed]  Mega menu isn’t scrollable on mobile if inside fixed secondary navbar\r\n                            [fixed]  jQuery UI datepicker is hidden if inside jQuery UI dialog\r\n                            [fixed]  Dropdown menu in material layout inside breadcrumb elements has wrong placement\r\n                            [fixed]  Bootstrap file input loading indicator has wrong position when loading begins\r\n                            [fixed]  jQuery UI Select with icons - icons don’t have horizontal spacing\r\n                            [fixed]  Steps wizard content overflow is hidden, so components inside wizard are partially hidden\r\n                            [fixed]  Bootstrap select in panel heading elements triggers native select on click\r\n                            [fixed]  Dropdown submenus on Android don’t open\r\n                            [fixed]  Breadcrumb line component inside page header in material layout displayed incorrectly\r\n                            [fixed]  Single styled file inputs are displayed inline on drag&amp;drop page, in material layout\r\n                            [fixed]  Search field in search and knowledgebase has background color in material layout\r\n                            [fixed]  Contextual panels don't have background color on mobile, if heading elements are collapsed\r\n                            [fixed]  Image cropper in Summernote editor has wrong position and appears behind image\r\n\r\n                            [fixed]  RTL layout - typeahead inputs in material layout have wrong direction\r\n                            [fixed]  RTL layout - fancy box has incorrect position\r\n                            [fixed]  RTL layout - handsontable tables have wrong styles\r\n                            [fixed]  RTL layout - daterangepicker is missing RTL direction in plugin configurations\r\n\r\n\r\n\r\n                            // # List of improvements\r\n                            // ------------------------------\r\n\r\n                            [improved]  Improved file structure in Starter Kits\r\n                            [improved]  Removed paths to extra JS files in Handsontable pages\r\n                            [improved]  gulpfile.js - minifycss replaced with clean-css due to deprecation\r\n                            [improved]  Improved Typeahead initializations accross JS files\r\n                            [improved]  Added missing badges component to panel and page header components list\r\n                            [improved]  Added 3 new examples of Bootbox dialog extension\r\n                            [improved]  Added option to disable collapsing of heading elements on mobile (using .not-collapsible class added to .heading-elements container)\r\n                            [improved]  Now heading elements on mobile push content down instead of covering elements below, so that all responsive containers have consistent appearance\r\n                            [improved]  Panel heading elements now have background color different from panel background color on mobiles\r\n                            [improved]  Each layout now uses 1 gulp file for main layout and Starter Kits\r\n                            </code></pre>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" id=\"v_1_3\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <h5>Version 1.3</h5>\r\n            <span>Version 1.3 is another massive update</span>\r\n            <div class=\"\">\r\n              <span class=\"text-muted heading-text m-r-5\">April 1, 2016</span>\r\n              <label class=\"label label-info\">V.1.3</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <p class=\"content-group\">Version 1.3 is another massive update, which has been in development over the past 3 months. This version includes bug fixing for reported issues, new components, new layout, new theme and updated plugins/libraries to the latest stable versions. Also includes significant improvements of LESS files structure and RTL layout logic - switched to gulp task, which automatically generates CSS files for RTL version, so now both layout directions use same set of LESS files with a few exceptions. The only benefit - very easy to track changes and update files, downside - requires gulp task runner. But documentation and myself help to solve any kind of issues related to upgrade.</p>\r\n            <pre class=\"language-javascript\"><code>// # List of new components\r\n                            // ------------------------------\r\n\r\n                            [new]  New layout\r\n                            [new]  Material design theme for all layouts\r\n                            [new]  Alpaca forms - JSON driven form generator\r\n                            [new]  Floating Action Menu - material style floating action button with menu, supports 4 positions\r\n                            [new]  Panel footer components - a great addition to panel component to display panel header components in panel footer\r\n                            [new]  Floating labels - display hidden labels on input fields\r\n                            [new]  New heading components - image thumbnails and inline lists\r\n                            [new]  New page header options - transparent, light, dark, light image and dark image\r\n                            [new]  New tabs - vertical left/right, with top icons\r\n                            [new]  Modal with remote source - configuration example\r\n                            [new]  Navbar navigation - added status mark support\r\n                            [new]  Forms - added large and extra large input sizes\r\n                            [new]  Footer - now footer can be either text or navbar component (static and fixed)\r\n                            [new]  Components animation - added optional transitions to all components, now they are animated by default\r\n\r\n\r\n\r\n                            // # List of updated plugins\r\n                            // ------------------------------\r\n\r\n                            [updated]  PNotify notifications - pnotify.min.js - to 3.0.0\r\n                            [updated]  Noty notifications - noty.min.js - to 2.3.8\r\n\r\n                            [updated]  Datatables library - datatables.min.js - to 1.10.11 and extensions\r\n                            [updated]  Autofill extension - autofill.min.js - to 2.1.1\r\n                            [updated]  Buttons extension - buttons.min.js - to 1.1.2\r\n                            [updated]  Column reorder extension - col_reorder.min.js - to 1.3.1\r\n                            [updated]  Fixed columns extension - fixed_columns.min.js - to 3.2.1\r\n                            [updated]  Fixed header extension - fixed_header.min.js - to 3.1.1\r\n                            [updated]  Key table extension - key_table.min.js - to 2.1.1\r\n                            [updated]  Responsive extension - responsive.min.js - to 2.0.2\r\n                            [updated]  Row reorder extension - row_reorder.min.js - to 1.1.1\r\n                            [updated]  Scroller extension - scroller.min.js - to 1.4.1\r\n                            [updated]  Select extension - select.min.js - to 1.1.2\r\n\r\n                            [updated]  Select2 library - select2.min.js - to 4.0.2\r\n                            [updated]  ECharts charting library - echarts.js - to 2.2.7\r\n                            [updated]  FullCalendar - fullcalendar.min.js - to 2.6.1\r\n                            [updated]  Dropzone file uploader - dropzone.min.js - to 4.3.0 (done, replace dropzone.less everywhere)\r\n                            [updated]  Plupload file uploader - plupload.full.min.js - to 2.1.8\r\n                            [updated]  D3.js visualization library - d3.min.js -  to 3.5.16\r\n                            [updated]  Noui slider - nouislider.min - to 8.3.0 (done)\r\n                            [updated]  BlockUI extension - blockui.min.js - to 2.7.0\r\n                            [updated]  Jasny Bootstrap - jasny_bootstrap.min.js - to 3.1.3\r\n                            [updated]  Passy - passy.js - to the latest version\r\n                            [updated]  Auto growing textarea - autosize.js - to 3.0.15 (requires fixes in form_controls_extended.js) (done)\r\n                            [updated]  Bootstrap selects - bootstrap_select.min.js - to 1.10.0 (requires fixes in bootstrap-select.less) (done)\r\n                            [updated]  Touchspin spinners - touchspin.min.js - to 3.1.1\r\n                            [updated]  Bootstrap tags input - bootstrap_tagsinput.min.js - to 0.8.0\r\n                            [updated]  Form validation - validate.min.js - to 1.15.0 (also needs to be updated form_validation.js - replace card with creditcard)\r\n                            [updated]  Summernote editor - summernote.min.js - to 0.8.1 (needs new font files to be added)\r\n                            [updated]  Hideable navbar - headroom.min.js - to 0.8.0\r\n                            [updated]  Bootstrap file input - file-input.min.js - to 4.3.1\r\n                            [updated]  Handlebars - handlebars.min.js - to 4.0.5\r\n\r\n\r\n\r\n                            // # List of fixed\r\n                            // ------------------------------\r\n\r\n                            [fixed]  Extra horizontal scrollbar in Fullcalendar in Firefox\r\n                            [fixed]  Multiple Select2 - wrong cross icon placement in FF\r\n                            [fixed]  Container height hack for FF caused footer issues on mobile\r\n                            [fixed]  Select2 multiple select with custom bg color - wrong placeholder color\r\n                            [fixed]  Typo in navbar.less, which caused compilation warnings\r\n                            [fixed]  When collapsing/expanding sidebar category, class name is added to a wrong item\r\n                            [fixed]  Panel heading - incorrect vertical alignment in icons and text (wrong calculation)\r\n                            [fixed]  Descriptions list have incorrect titles on mobiles\r\n                            [fixed]  If badges have border, border radius is too small to make them rounded\r\n                            [fixed]  Panel heading - wrong position of tabs and pills\r\n                            [fixed]  Incorrect height of ION range slider\r\n                            [fixed]  noUI vertical slider has wrong range width\r\n                            [fixed]  Color picker overflows fixed navbar\r\n                            [fixed]  Growl notification generated by BlockUI has double border\r\n                            [fixed]  jQuery UI selects - long text overlaps arrow icon\r\n                            [fixed]  Dropzone icon marks appear on the left side overflowing thumb\r\n                            [fixed]  In 3rd and 4th layout, collapsed sidebar has extra top spacing\r\n                            [fixed]  Links with default bootstrap contextual background colors have wrong colors on hover/focus\r\n                            [fixed]  If panel is collapsed by default, arrow icon isn’t rotated\r\n                            [fixed]  Single daterange picker with time picker - empty calendars container shows up\r\n                            [fixed]  Floating button inside page header (link buttons) don’t have vertical padding\r\n                            [fixed]  On mobiles, flat button inside navbar has wrong color text color\r\n                            [fixed]  Invoice template first row has wrong breakpoint\r\n                            [fixed]  Datatables doesn’t have horizontal spacing in header/footer if table is inside form\r\n                            [fixed]  Hideable navbar doesn’t support optional navbar sizes\r\n                            [fixed]  Border radius inconsistency in input elements\r\n                            [fixed]  In RTL version page title subtitle has wrong position\r\n                            [fixed]  Icon inside input group disappears when input is focused\r\n                            [fixed]  Default and flat labels/badges heights are inconsistent\r\n                            [fixed]  Pagination and pager have extra bottom spacing\r\n                            [fixed]  Datatables fixed columns extension - complex header example not resizable\r\n                            [fixed]  Dual list boxes inconsistent border radiuses\r\n\r\n\r\n\r\n                            // # List of improvements\r\n                            // ------------------------------\r\n\r\n                            [improved]  Improved *-sm and *-xs styles in inputs, buttons, selects and input groups\r\n                            [improved]  Additional placements of labels/badges in dropdown (badges/labels are always on the far right)\r\n                            [improved]  Fancy box close button position\r\n                            [improved]  Added horizontal spacing to images inside user dropdown menu\r\n                            [improved]  Single styled file input (supports text and icons with all available button styles)\r\n                            [improved]  Use buttons instead of inputs in steps actions\r\n                            [improved]  Label/badge and flat label/badge size inconsistency\r\n                            [improved]  Increased caret width\r\n                            [improved]  Added .no-shadow helper class - removes shadow from element\r\n                            [improved]  Tabs inside panel header\r\n                            [improved]  Add direction: ltr; to all tags to avoid issues in RTL version\r\n                            [improved]  Removed input highlights in contextual feedback states\r\n                            [improved]  Look and feel of CKEditor toolbar\r\n                            [improved]  Added multiselect dropdown support to navbar\r\n                            [improved]  Sidebar navigation appearance\r\n                            [improved]  RTL version - switched to gulp task, that automatically generates RTL version from LTR, to avoid problems with updates\r\n                            [improved]  Significantly improved LESS file structure\r\n                            </code></pre>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" id=\"v_1_2_1\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <h5>Version 1.2.1</h5>\r\n            <span>Version 1.2.1 is a quick update</span>\r\n            <div class=\"\">\r\n              <span class=\"text-muted heading-text m-r-5\">December 15, 2015</span>\r\n              <label class=\"label label-info\">V.1.2.1</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <p class=\"content-group\">Version 1.2.1 is a quick update that contains some reported bugs fixes and plugins update. Nothing new is added since this is an addition to global 1.2 version. Important milestone for 1.3 version is footer and container height enhancements - jquery solution for calculating minimum container height will be replaced with pure CSS.</p>\r\n            <pre class=\"language-javascript\"><code>// # List of updated plugins\r\n                            // ------------------------------\r\n\r\n                            [updated]  Bootstrap file input - to the latest version\r\n                            [updated]  Select2 - from RC1 to stable 4.0.1 version\r\n\r\n\r\n                            // # List of fixed bugs\r\n                            // ------------------------------\r\n\r\n                            // Core fixes\r\n                            [fixed]  Documentation - correct release date on main page, fixed path to globalize/ library, gulp plugins to install\r\n                            [fixed]  Navbar - added sticky sidebar top spacing if used with fixed top single navbar. To be enhanced in 1.3\r\n                            [fixed]  Fixed sidebar and navbar - removed unnecessary affix code from the page\r\n\r\n                            // Components fixes\r\n                            [fixed]  Centered timeline - extra dots on desktop\r\n                            [fixed]  Datatables Select extension - checkboxes are not selectable\r\n                            [fixed]  Datatables Autofill and Select - wrong columns sorting in examples with checkboxes\r\n                            [fixed]  Select2 selects - selected text overlaps arrow in single select\r\n                            [fixed]  Select2 selects validation - wrong error/success label placement\r\n                            </code></pre>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" id=\"v_1_2\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <h5>Version 1.2</h5>\r\n            <span>Version 1.2 is a quick update</span>\r\n            <div class=\"\">\r\n              <span class=\"text-muted heading-text m-r-5\">December 1, 2015</span>\r\n              <label class=\"label label-info\">V.1.2</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <p class=\"content-group\">Version 1.2 is a quick update that contains some reported bugs fixes and plugins update. Nothing new is added since this is an addition to global 1.2 version. Important milestone for 1.3 version is footer and container height enhancements - jquery solution for calculating minimum container height will be replaced with pure CSS.</p>\r\n            <pre class=\"language-javascript\"><code>// # List of updated plugins\r\n                            // ------------------------------\r\n\r\n                            [updated]  Bootstrap file input - to the latest version\r\n                            [updated]  Select2 - from RC1 to stable 4.0.1 version\r\n\r\n\r\n                            // # List of fixed bugs\r\n                            // ------------------------------\r\n\r\n                            // Core fixes\r\n                            [fixed]  Documentation - correct release date on main page, fixed path to globalize/ library, gulp plugins to install\r\n                            [fixed]  Navbar - added sticky sidebar top spacing if used with fixed top single navbar. To be enhanced in 1.3\r\n                            [fixed]  Fixed sidebar and navbar - removed unnecessary affix code from the page\r\n\r\n                            // Components fixes\r\n                            [fixed]  Centered timeline - extra dots on desktop\r\n                            [fixed]  Datatables Select extension - checkboxes are not selectable\r\n                            [fixed]  Datatables Autofill and Select - wrong columns sorting in examples with checkboxes\r\n                            [fixed]  Select2 selects - selected text overlaps arrow in single select\r\n                            [fixed]  Select2 selects validation - wrong error/success label placement\r\n                            </code></pre>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" id=\"v_1_1\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <h5>Version 1.1</h5>\r\n            <span>First update is the most simplified and includes urgent bug fixes of core components</span>\r\n            <div class=\"\">\r\n              <span class=\"text-muted heading-text m-r-5\">October 21, 2015</span>\r\n              <label class=\"label label-info\">V.1.1</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <p class=\"content-group\">First update is the most simplified and includes urgent bug fixes of core components, plugins and libraries. Also version 1.1 includes updates of some components to the latest stable versions. The only new thing here is RTL version of all 4 layouts, that support almost all available components and layout features. Below you can find general list of all changes and details about upgrading.</p>\r\n            <pre class=\"language-javascript\"><code>// # List of new components\r\n                            // ------------------------------\r\n\r\n                            [new]  RTL layout for all 4 main layout variations\r\n                            [new]  bootbox.less - new LESS file for extended Bootstrap modal dialogs\r\n\r\n\r\n                            // # List of updated plugins\r\n                            // ------------------------------\r\n\r\n                            [updated]  CKEditor - latest version\r\n                            [updated]  Select2 - latest 3.5.x version, 4.0 is coming\r\n                            [updated]  Bootstrap Multiselect - latest version\r\n                            [updated]  Datatables - latest version\r\n\r\n\r\n                            // # List of fixed bugs\r\n                            // ------------------------------\r\n\r\n                            // Core fixes\r\n                            [fixed]  Sidebar - side border overlaped content in light sidebar (layout 1 and 2)\r\n                            [fixed]  Breadcrumbs - in colored version links had wrong background color on hover/active\r\n                            [fixed]  Breadcrumbs - dropdown menu didn't have borders in breadcrumb line component\r\n                            [fixed]  Labels - striped labels didn't have right border variation as supposed to\r\n                            [fixed]  Navbars - unnecessary dropdown menu re-position in navbar component\r\n                            [fixed]  Button groups - extra space between buttons in toolbar\r\n                            [fixed]  Tables - extra border in framed table in responsive table container\r\n\r\n                            // Components fixes\r\n                            [fixed]  Bootstrap Select - wrong rounded corners inside input group\r\n                            [fixed]  Bootstrap Select - no styling of dropdown menu\r\n                            [fixed]  SelectBox - wrong rounded corners inside input group\r\n                            [fixed]  Tags Input - input field didn't have bottom spacing\r\n                            [fixed]  Typeahead - small menu width if text options are too short\r\n                            [fixed]  Sweet alerts - title was too big for motification size\r\n                            [fixed]  Anytime picker - wrong title margin and unnecessary close button\r\n                            [fixed]  jQuery UI Datepicker - extra RTL-related code in less file\r\n                            [fixed]  Fullcalendar - extra RTL-related code in less file\r\n                            [fixed]  Chats - wrong variables in LESS file\r\n                            [fixed]  Dropzone Uploader - success/error markers moved down in thumbnails is name is visible\r\n                            [fixed]  Colors - default BS styles overrided text hover state\r\n                            [fixed]  SelectBox page - extra panel control buttons\r\n                            </code></pre>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" id=\"release\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <h5>Initial release</h5>\r\n            <span>flatable is in active development.</span>\r\n            <div class=\"\">\r\n              <span class=\"text-muted heading-text m-r-5\">October 1, 2015</span>\r\n              <label class=\"label label-info\">V.1.0</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <p class=\"content-group\">flatable is in active development. All updates will be properly documented and explained, to make your upgrade process as easy as possible. In all new updates will be included: bug fixing, new functionality, plugins version control and code improvement. Feel free to contact me if you have any suggestions or requests!</p>\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table table-bordered table-striped table-xs\">\r\n                <thead>\r\n                <tr>\r\n                  <th class=\"col-xs-3\">What</th>\r\n                  <th>Quantity</th>\r\n                  <th>Description</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr>\r\n                  <th colspan=\"3\" class=\"active\">Core files</th>\r\n                </tr>\r\n                <tr>\r\n                  <td>Folders</td>\r\n                  <td>268</td>\r\n                  <td>Folders with files, excluding CKEditor and Starter kit folders</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>HTML files</td>\r\n                  <td>249</td>\r\n                  <td>Depending on layout, around 249 main HTML files in each layout</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>CSS files</td>\r\n                  <td>7</td>\r\n                  <td>4 main CSS files, 2 CSS for icon fonts and 1 <code>animate.min.css</code> animation library</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>LESS files</td>\r\n                  <td>203</td>\r\n                  <td>All LESS files, including Bootstrap core</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>JS files</td>\r\n                  <td>896</td>\r\n                  <td>All JS files, excluding starter kit and CKEditor folders</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Image files</td>\r\n                  <td>256</td>\r\n                  <td>Logos, flag icons and notification icons</td>\r\n                </tr>\r\n                <tr>\r\n                  <th colspan=\"3\" class=\"active\">Other files</th>\r\n                </tr>\r\n                <tr>\r\n                  <td>JSON files</td>\r\n                  <td>23</td>\r\n                  <td>Different demo data sources. For demo purposes</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>CSV files</td>\r\n                  <td>11</td>\r\n                  <td>Mainly for charts based on <code>D3.js</code> library. For demo purposes</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>TSV files</td>\r\n                  <td>13</td>\r\n                  <td>Mainly for charts based on <code>D3.js</code> library. For demo purposes</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>SWF files</td>\r\n                  <td>3</td>\r\n                  <td>Additional files for datatables TableTools extension and Plupload file uploader</td>\r\n                </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- col-sm-9 end -->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/change-log/change-log.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeLogComponent; });
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

var ChangeLogComponent = (function () {
    function ChangeLogComponent() {
    }
    ChangeLogComponent.prototype.ngOnInit = function () {
    };
    return ChangeLogComponent;
}());
ChangeLogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-change-log',
        template: __webpack_require__("../../../../../src/app/pages/change-log/change-log.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/change-log/change-log.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ChangeLogComponent);

//# sourceMappingURL=change-log.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/change-log/change-log.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeLogRoutes", function() { return ChangeLogRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeLogModule", function() { return ChangeLogModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__change_log_component__ = __webpack_require__("../../../../../src/app/pages/change-log/change-log.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nicky_lenaers_ngx_scroll_to__ = __webpack_require__("../../../../@nicky-lenaers/ngx-scroll-to/@nicky-lenaers/ngx-scroll-to.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ChangeLogRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__change_log_component__["a" /* ChangeLogComponent */],
        data: {
            breadcrumb: 'Change Log',
            icon: 'icofont-social-blogger bg-c-green'
        }
    }];
var ChangeLogModule = (function () {
    function ChangeLogModule() {
    }
    return ChangeLogModule;
}());
ChangeLogModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(ChangeLogRoutes),
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_5__nicky_lenaers_ngx_scroll_to__["a" /* ScrollToModule */].forRoot()
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__change_log_component__["a" /* ChangeLogComponent */]]
    })
], ChangeLogModule);

//# sourceMappingURL=change-log.module.js.map

/***/ }),

/***/ "../../../../@nicky-lenaers/ngx-scroll-to/@nicky-lenaers/ngx-scroll-to.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollToModule; });
/* unused harmony export ScrollToService */
/* unused harmony export ɵb */
/* unused harmony export ɵa */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_ReplaySubject__);





/**
 * Default values for Component Input.
 */
var DEFAULTS = {
    target: null,
    action: 'click',
    duration: 650,
    easing: 'easeInOutQuad',
    offset: 0,
    offsetMap: new Map()
};
/**
 * Easing Colleciton.
 */
var EASING = {
    easeInQuad: function (time) {
        return time * time;
    },
    easeOutQuad: function (time) {
        return time * (2 - time);
    },
    easeInOutQuad: function (time) {
        return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;
    },
    easeInCubic: function (time) {
        return time * time * time;
    },
    easeOutCubic: function (time) {
        return (--time) * time * time + 1;
    },
    easeInOutCubic: function (time) {
        return time < 0.5 ? 4 * time * time * time : (time - 1) * (2 * time - 2) * (2 * time - 2) + 1;
    },
    easeInQuart: function (time) {
        return time * time * time * time;
    },
    easeOutQuart: function (time) {
        return 1 - (--time) * time * time * time;
    },
    easeInOutQuart: function (time) {
        return time < 0.5 ? 8 * time * time * time * time : 1 - 8 * (--time) * time * time * time;
    },
    easeInQuint: function (time) {
        return time * time * time * time * time;
    },
    easeOutQuint: function (time) {
        return 1 + (--time) * time * time * time * time;
    },
    easeInOutQuint: function (time) {
        return time < 0.5 ? 16 * time * time * time * time * time : 1 + 16 * (--time) * time * time * time * time;
    },
    easeOutElastic: function (time) {
        return Math.pow(2, -10 * time) * Math.sin((time - 1 / 4) * (2 * Math.PI) / 1) + 1;
    }
};
/**
 * Set of allowed events as triggers
 * for the Animation to start.
 */
var EVENTS = [
    'click',
    'mouseenter',
    'mouseover',
    'mousedown',
    'mouseup',
    'dblclick',
    'contextmenu',
    'wheel',
    'mouseleave',
    'mouseout'
];
/**
 * Strip hash (#) from value.
 *
 * @param {?} value 				The given string value
 * @return {?} 					The stripped string value
 */
function stripHash(value) {
    return value.substring(0, 1) === '#' ? value.substring(1) : value;
}
/**
 * Test if a given value is a string.
 *
 * @param {?} value 					The given value
 * @return {?} 						Whether the given value is a string
 */
function isString(value) {
    return typeof value === 'string' || value instanceof String;
}
/**
 * Test if a given Element is the Window.
 *
 * @param {?} container 				The given Element
 * @return {?} 						Whether the given Element is Window
 */
function isWindow(container) {
    return container === window;
}
/**
 * Test if a given value is of type ElementRef.
 *
 * @param {?} value 					The given value
 * @return {?} 						Whether the given value is a number
 */
function isElementRef(value) {
    return value instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"];
}
/**
 * Test if a given value is type number.
 *
 * @param {?} value 					The given value
 * @return {?} 						Whether the given value is a number
 */
function isNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}
/**
 * @param {?=} ms
 * @return {?}
 */
function TimeOut(ms) {
    if (ms === void 0) { ms = 0; }
    return function (target, key, descriptor) {
        var /** @type {?} */ originalMethod = descriptor.value;
        descriptor.value = function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            setTimeout(function () { return originalMethod.apply(_this, args); }, ms);
        };
        return descriptor;
    };
}
var ScrollToAnimation = (function () {
    /**
     * @param {?} _container
     * @param {?} _listenerTarget
     * @param {?} _isWindow
     * @param {?} _to
     * @param {?} _options
     * @param {?} _isBrowser
     */
    function ScrollToAnimation(_container, _listenerTarget, _isWindow, _to, _options, _isBrowser) {
        var _this = this;
        this._container = _container;
        this._listenerTarget = _listenerTarget;
        this._isWindow = _isWindow;
        this._to = _to;
        this._options = _options;
        this._isBrowser = _isBrowser;
        /**
         * Recursively loop over the Scroll Animation.
         *
         * @return void
         */
        this._loop = function () {
            _this._timeLapsed += _this._tick;
            _this._percentage = (_this._timeLapsed / _this._options.duration);
            _this._percentage = (_this._percentage > 1) ? 1 : _this._percentage;
            // Position Update
            _this._position = _this._startPosition +
                ((_this._startPosition - _this._to < 0 ? 1 : -1) *
                    _this._distance *
                    EASING[_this._options.easing](_this._percentage));
            _this._source$.next(_this._position);
            _this._isWindow ? _this._listenerTarget.scrollTo(0, Math.floor(_this._position)) : _this._container.scrollTop = Math.floor(_this._position);
            _this.stop(false);
        };
        this._tick = 16;
        this._interval = null;
        this._timeLapsed = 0;
        this._windowScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        this._startPosition = this._isWindow ? this._windowScrollTop : this._container.scrollTop;
        // Correction for Starting Position of nested HTML Elements
        if (!this._isWindow)
            this._to = this._to - this._container.getBoundingClientRect().top + this._startPosition;
        // Set Distance
        var directionalDistance = this._startPosition - this._to;
        this._distance = Math.abs(this._startPosition - this._to);
        var offset = this._options.offset;
        // Set offset from Offset Map
        if (this._isBrowser) {
            this._options
                .offsetMap
                .forEach(function (value, key) { return offset = window.innerWidth > key ? value : offset; });
        }
        this._distance += offset * (directionalDistance <= 0 ? 1 : -1);
        this._source$ = new __WEBPACK_IMPORTED_MODULE_4_rxjs_ReplaySubject__["ReplaySubject"]();
    }
    /**
     * Start the new Scroll Animation.
     *
     * @return {?} void
     */
    ScrollToAnimation.prototype.start = function () {
        clearInterval(this._interval);
        this._interval = setInterval(this._loop, this._tick);
        return this._source$.asObservable();
    };
    /**
     * Stop the current Scroll Animation Loop.
     *
     * @param {?=} force 			Force to stop
     * @return {?}
     */
    ScrollToAnimation.prototype.stop = function (force) {
        if (force === void 0) { force = true; }
        var /** @type {?} */ curr_position = this._isWindow ? this._windowScrollTop : this._container.scrollTop;
        if (force || this._position === (this._to + this._options.offset) || curr_position === (this._to + this._options.offset)) {
            clearInterval(this._interval);
            this._interval = null;
            this._source$.complete();
        }
    };
    return ScrollToAnimation;
}());
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
/**
 * The ScrollToService handles starting, interrupting
 * and ending the actual Scroll Animation. It provides
 * some utilities to find the proper HTML Element on a
 * given page to setup Event Listeners and calculate
 * distances for the Animation.
 */
var ScrollToService = (function () {
    /**
     * Construct and setup required paratemeters
     * @param {?} _document         A Reference to the Document
     * @param {?} _platformId       Angular Platform ID
     */
    function ScrollToService(_document, _platformId) {
        this._document = _document;
        this._platformId = _platformId;
        this._interruptiveEvents = ['mousewheel', 'DOMMouseScroll', 'touchstart'];
    }
    /**
     * Target an Element to scroll to. Notice that the `TimeOut` decorator
     * ensures the executing to take place in the next Angular lifecycle.
     * This allows for scrolling to elements that are e.g. initially hidden
     * by means of `*ngIf`, but ought to be scrolled to eventually.
     *
     * \@todo type 'any' in Observable should become custom type like 'ScrollToEvent' (base class), see issue comment:
     * 	- https://github.com/nicky-lenaers/ngx-scroll-to/issues/10#issuecomment-317198481
     *
     * @param {?} options         Configuration Object
     * @return {?} Observable
     */
    ScrollToService.prototype.scrollTo = function (options) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_2__angular_common__["isPlatformBrowser"])(this._platformId))
            return new __WEBPACK_IMPORTED_MODULE_4_rxjs_ReplaySubject__["ReplaySubject"]().asObservable();
        return this._start(options);
    };
    /**
     * Start a new Animation.
     *
     * \@todo Emit proper events from subscription
     *
     * @param {?} options         Configuration Object
     * @return {?} Observable
     */
    ScrollToService.prototype._start = function (options) {
        var _this = this;
        // Merge config with default values
        var /** @type {?} */ mergedConfigOptions = Object.assign({}, /** @type {?} */ (DEFAULTS), options);
        if (this._animation)
            this._animation.stop();
        var /** @type {?} */ targetNode = this._getNode(mergedConfigOptions.target);
        var /** @type {?} */ container = this._getContainer(mergedConfigOptions, targetNode);
        var /** @type {?} */ listenerTarget = this._getListenerTarget(container);
        var /** @type {?} */ to = isWindow(listenerTarget) ? targetNode.offsetTop : targetNode.getBoundingClientRect().top;
        // Create Animation
        this._animation = new ScrollToAnimation(container, listenerTarget, isWindow(listenerTarget), to, mergedConfigOptions, Object(__WEBPACK_IMPORTED_MODULE_2__angular_common__["isPlatformBrowser"])(this._platformId));
        var /** @type {?} */ onInterrupt = function () { return _this._animation.stop(); };
        this._addInterruptiveEventListeners(listenerTarget, onInterrupt);
        // Start Animation
        var /** @type {?} */ animation$ = this._animation.start();
        this._subscribeToAnimation(animation$, listenerTarget, onInterrupt);
        return animation$;
    };
    /**
     * Subscribe to the events emitted from the Scrolling
     * Animation. Events might be used for e.g. unsubscribing
     * once finished.
     *
     * @param {?} animation$              The Animation Observable
     * @param {?} listenerTarget          The Listener Target for events
     * @param {?} onInterrupt             The handler for Interruptive Events
     * @return {?} Void
     */
    ScrollToService.prototype._subscribeToAnimation = function (animation$, listenerTarget, onInterrupt) {
        var _this = this;
        var /** @type {?} */ subscription = animation$
            .subscribe(function () { }, function () { }, function () {
            _this._removeInterruptiveEventListeners(_this._interruptiveEvents, listenerTarget, onInterrupt);
            subscription.unsubscribe();
        });
    };
    /**
     * Get the container HTML Element in which
     * the scrolling should happen.
     *
     * @param {?} options         The Merged Configuration Object
     * @param {?} targetNode
     * @return {?}
     */
    ScrollToService.prototype._getContainer = function (options, targetNode) {
        var /** @type {?} */ container = options.container ?
            this._getNode(options.container, true) :
            this._getFirstScrollableParent(targetNode);
        if (!container)
            throw new Error('Unable to get Container Element');
        return container;
    };
    /**
     * Add listeners for the Animation Interruptive Events
     * to the Listener Target.
     *
     * @param {?} listenerTarget    Target to attach the listener on
     * @param {?} handler           Handler for when the listener fires
     * @return {?} Void
     */
    ScrollToService.prototype._addInterruptiveEventListeners = function (listenerTarget, handler) {
        this._interruptiveEvents.forEach(function (event) { return listenerTarget.addEventListener(event, handler); });
    };
    /**
     * Remove listeners for the Animation Interrupt Event from
     * the Listener Target. Specifying the correct handler prevents
     * memory leaks and makes the allocated memory available for
     * Garbage Collection.
     *
     * @param {?} events            List of Interruptive Events to remove
     * @param {?} listenerTarget    Target to attach the listener on
     * @param {?} handler           Handler for when the listener fires
     * @return {?} Void
     */
    ScrollToService.prototype._removeInterruptiveEventListeners = function (events, listenerTarget, handler) {
        events.forEach(function (event) { return listenerTarget.removeEventListener(event, handler); });
    };
    /**
     * Find the first scrollable parent Node of a given
     * Element. The DOM Tree gets searched upwards
     * to find this first scrollable parent. Parents might
     * be ignored by CSS styles applied to the HTML Element.
     *
     * @param {?} nativeElement     The Element to search the DOM Tree upwards from
     * @return {?} The first scrollable parent HTML Element
     */
    ScrollToService.prototype._getFirstScrollableParent = function (nativeElement) {
        var /** @type {?} */ style = window.getComputedStyle(nativeElement);
        var /** @type {?} */ overflowRegex = /(auto|scroll)/;
        if (style.position === 'fixed')
            throw new Error("Scroll item cannot be positioned 'fixed'");
        for (var /** @type {?} */ parent = nativeElement; parent = parent.parentElement; null) {
            style = window.getComputedStyle(parent);
            if (style.position === 'absolute'
                || style.overflow === 'hidden'
                || style.overflowY === 'hidden')
                continue;
            if (overflowRegex.test(style.overflow + style.overflowY + style.overflowX)
                || parent.tagName === 'BODY')
                return parent;
        }
        throw new Error("No scrollable parent found for element " + nativeElement.nodeName);
    };
    /**
     * Get the Target Node to scroll to.
     *
     * @param {?} id              The given ID of the node, either a string or
     *                        an element reference
     * @param {?=} allowBodyTag    Indicate whether or not the Document Body is
     *                        considered a valid Target Node
     * @return {?} The Target Node to scroll to
     */
    ScrollToService.prototype._getNode = function (id, allowBodyTag) {
        if (allowBodyTag === void 0) { allowBodyTag = false; }
        var /** @type {?} */ targetNode;
        if (isString(id)) {
            if (allowBodyTag && (id === 'body' || id === 'BODY')) {
                targetNode = this._document.body;
            }
            else {
                targetNode = this._document.getElementById(stripHash(id));
            }
        }
        else if (isNumber(id)) {
            targetNode = this._document.getElementById(String(id));
        }
        else if (isElementRef(id)) {
            targetNode = id.nativeElement;
        }
        if (!targetNode)
            throw new Error('Unable to find Target Element');
        return targetNode;
    };
    /**
     * Retrieve the Listener target. This Listener Target is used
     * to attach Event Listeners on. In case of the target being
     * the Document Body, we need the actual `window` to listen
     * for events.
     *
     * @param {?} container           The HTML Container element
     * @return {?} The Listener Target to attach events on
     */
    ScrollToService.prototype._getListenerTarget = function (container) {
        return this._isDocumentBody(container) ? window : container;
    };
    /**
     * Test if a given HTML Element is the Document Body.
     *
     * @param {?} element             The given HTML Element
     * @return {?} Whether or not the Element is the
     *                            Document Body Element
     */
    ScrollToService.prototype._isDocumentBody = function (element) {
        return element.tagName.toUpperCase() === 'BODY';
    };
    return ScrollToService;
}());
ScrollToService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
ScrollToService.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DOCUMENT"],] },] },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["PLATFORM_ID"],] },] },
]; };
__decorate([
    TimeOut(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"])
], ScrollToService.prototype, "scrollTo", null);
var ScrollToDirective = (function () {
    /**
     * @param {?} _elementRef
     * @param {?} _scrollToService
     * @param {?} _renderer2
     */
    function ScrollToDirective(_elementRef, _scrollToService, _renderer2) {
        this._elementRef = _elementRef;
        this._scrollToService = _scrollToService;
        this._renderer2 = _renderer2;
        this.ngxScrollTo = DEFAULTS.target;
        this.ngxScrollToEvent = DEFAULTS.action;
        this.ngxScrollToDuration = DEFAULTS.duration;
        this.ngxScrollToEasing = DEFAULTS.easing;
        this.ngxScrollToOffset = DEFAULTS.offset;
        this.ngxScrollToOffsetMap = DEFAULTS.offsetMap;
    }
    /**
     * Angular Lifecycle Hook - After View Init
     *
     * \@todo Implement Subscription for Events
     *
     * @return {?} void
     */
    ScrollToDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Test Event Support
        if (EVENTS.indexOf(this.ngxScrollToEvent) === -1)
            throw new Error("Unsupported Event '" + this.ngxScrollToEvent + "'");
        // Listen for the trigger...
        this._renderer2.listen(this._elementRef.nativeElement, this.ngxScrollToEvent, function (event) {
            _this._options = {
                target: _this.ngxScrollTo,
                duration: _this.ngxScrollToDuration,
                easing: _this.ngxScrollToEasing,
                offset: _this.ngxScrollToOffset,
                offsetMap: _this.ngxScrollToOffsetMap
            };
            _this._scrollToService.scrollTo(_this._options);
        });
    };
    return ScrollToDirective;
}());
ScrollToDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[ngx-scroll-to]'
            },] },
];
/**
 * @nocollapse
 */
ScrollToDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: ScrollToService, },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
]; };
ScrollToDirective.propDecorators = {
    'ngxScrollTo': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngx-scroll-to',] },],
    'ngxScrollToEvent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngx-scroll-to-event',] },],
    'ngxScrollToDuration': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngx-scroll-to-duration',] },],
    'ngxScrollToEasing': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngx-scroll-to-easing',] },],
    'ngxScrollToOffset': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngx-scroll-to-offset',] },],
    'ngxScrollToOffsetMap': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngx-scroll-to-offset-map',] },],
};
var ScrollToModule = (function () {
    function ScrollToModule() {
    }
    /**
     * Guaranteed singletons for provided Services across App.
     *
     * @return {?} An Angular Module with Providers
     */
    ScrollToModule.forRoot = function () {
        return {
            ngModule: ScrollToModule,
            providers: [
                ScrollToService
            ]
        };
    };
    return ScrollToModule;
}());
ScrollToModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: [
                    ScrollToDirective
                ],
                exports: [
                    ScrollToDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
ScrollToModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ngx-scroll-to.es5.js.map


/***/ })

});
//# sourceMappingURL=change-log.module.chunk.js.map