webpackJsonp(["modal.module"],{

/***/ "../../../../../src/app/pages/ui-elements/advance/modal/modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-body .slimScrollDiv {\r\n  height: 350px !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ui-elements/advance/modal/modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row button-page\">\n  <!-- Static Example modal start-->\n  <div class=\"col-sm-12\">\n    <app-card [title]=\"'Static Example'\">\n      <!-- popup example start -->\n      <div class=\"bd-example bd-example-modal\">\n        <div class=\"modal\">\n          <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <h5 class=\"modal-title\">Modal title</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">×</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                <p>Modal body text goes here.</p>\n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary mobtn\" data-dismiss=\"modal\">Close</button>\n                <button type=\"button\" class=\"btn btn-primary mobtn\">Save changes</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- popup example end -->\n    </app-card>\n  </div>\n  <!-- Static Example modal start-->\n  <!-- bootstrap modal start -->\n  <div class=\"col-lg-12 col-xl-6\">\n    <app-card [title]=\"'Bootstrap modals'\" [blockClass]=\"'model-btn-card'\">\n      <p>use code<code> modal-lg, modal-sm</code> to use large and small popup modal.</p>\n      <ul>\n        <li>\n          <!-- modal static-->\n          <button type=\"button\" class=\"btn btn-default waves-effect\" (click)=\"modalDefault.show()\">Static</button>\n          <app-modal-basic #modalDefault>\n            <div class=\"app-modal-header\">\n              <h4 class=\"modal-title\">Modal title</h4>\n              <button type=\"button\" class=\"close basic-close\" (click)=\"modalDefault.hide()\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"app-modal-body\">\n              <h5>Default Modal</h5>\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing lorem impus dolorsit.onsectetur adipiscing</p>\n            </div>\n            <div class=\"app-modal-footer\">\n              <button type=\"button\" class=\"btn btn-default waves-effect\" (click)=\"modalDefault.hide()\">Close</button>\n              <button type=\"button\" class=\"btn btn-primary waves-effect waves-light \">Save changes</button>\n            </div>\n          </app-modal-basic>\n        </li>\n        <li>\n          <!-- modal large-->\n          <button type=\"button\" class=\"btn btn-primary waves-effect\" (click)=\"modalLarge.show()\">Large</button>\n          <app-modal-basic #modalLarge [dialogClass]=\"'modal-lg'\">\n            <div class=\"app-modal-header\">\n              <h4 class=\"modal-title\">Modal title</h4>\n              <button type=\"button\" class=\"close basic-close\" (click)=\"modalLarge.hide()\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"app-modal-body\">\n              <h5>Large Modal</h5>\n              <p>This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>\n            </div>\n            <div class=\"app-modal-footer\">\n              <button type=\"button\" class=\"btn btn-default waves-effect\" (click)=\"modalLarge.hide()\">Close</button>\n              <button type=\"button\" class=\"btn btn-primary waves-effect waves-light \">Save changes</button>\n            </div>\n          </app-modal-basic>\n        </li>\n        <li>\n          <!-- modal small-->\n          <button type=\"button\" class=\"btn btn-success waves-effect\" (click)=\"modalSmall.show()\">Small</button>\n          <app-modal-basic #modalSmall [dialogClass]=\"'modal-sm'\">\n            <div class=\"app-modal-header\">\n              <h4 class=\"modal-title\">Modal title</h4>\n              <button type=\"button\" class=\"close basic-close\" (click)=\"modalSmall.hide()\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"app-modal-body\">\n              <h5>Small Modal</h5>\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing .</p>\n            </div>\n            <div class=\"app-modal-footer\">\n              <button type=\"button\" class=\"btn btn-default waves-effect\" (click)=\"modalSmall.hide()\">Close</button>\n            </div>\n          </app-modal-basic>\n        </li>\n      </ul>\n    </app-card>\n  </div>\n  <!-- Bootstrap modal end -->\n  <!-- Custom modal start -->\n  <div class=\"col-lg-12 col-xl-6\">\n    <app-card [title]=\"'Custom modals'\" [blockClass]=\"'model-btn-card'\">\n      <p>use custom modals tabs, overflow, lightbox, Multi modal.</p>\n      <ul>\n        <li>\n          <!-- modal tabs -->\n          <button type=\"button\" class=\"btn btn-warning waves-effect\" (click)=\"modalTabs.show()\">Tabs</button>\n          <app-modal-basic #modalTabs [hideHeader]=\"true\" [hideFooter]=\"true\">\n            <div class=\"app-modal-body\">\n              <button type=\"button\" class=\"close basic-close\" (click)=\"modalTabs.hide()\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n              <ngb-tabset>\n                <ngb-tab title=\"Home\">\n                  <ng-template ngbTabContent>\n                    <div [@fadeInOutTranslate] class=\"m-t-15\">\n                      <div class=\"m-4\">\n                        <h6>Home</h6>\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing lorem impus dolorsit.onsectetur adipiscing</p>\n                      </div>\n                    </div>\n                  </ng-template>\n                </ngb-tab>\n                <ngb-tab title=\"Profile\">\n                  <ng-template ngbTabContent>\n                    <div [@fadeInOutTranslate] class=\"m-t-15\">\n                      <div class=\"m-4\">\n                        <h6>Profile</h6>\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing lorem impus dolorsit.onsectetur adipiscing</p>\n                      </div>\n                    </div>\n                  </ng-template>\n                </ngb-tab>\n                <ngb-tab title=\"Messages\">\n                  <ng-template ngbTabContent>\n                    <div [@fadeInOutTranslate] class=\"m-t-15\">\n                      <div class=\"m-4\">\n                        <h6>Messages</h6>\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing lorem impus dolorsit.onsectetur adipiscing</p>\n                      </div>\n                    </div>\n                  </ng-template>\n                </ngb-tab>\n                <ngb-tab title=\"Settings\">\n                  <ng-template ngbTabContent>\n                    <div [@fadeInOutTranslate] class=\"m-t-15\">\n                      <div class=\"m-4\">\n                        <h6>Settings</h6>\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing lorem impus dolorsit.onsectetur adipiscing</p>\n                      </div>\n                    </div>\n                  </ng-template>\n                </ngb-tab>\n              </ngb-tabset>\n            </div>\n          </app-modal-basic>\n        </li>\n        <li>\n          <!-- modal overflow start-->\n          <button type=\"button\" class=\"btn btn-danger waves-effect\" (click)=\"modalOverflow.show()\">Overflow</button>\n          <app-modal-basic #modalOverflow [hideHeader]=\"true\" [hideFooter]=\"true\">\n            <div class=\"app-modal-body\">\n              <button type=\"button\" class=\"close basic-close-light-box\" (click)=\"modalOverflow.hide()\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n              <h5 class=\"font-header\">Some text above the scrollable box</h5>\n              <p>This is Photoshop's version of Lorem IpThis is Photoshop's version Similique velit aut et cumque illum consequatur of Lorem Ipsum.</p>\n              <h5>Overflow container</h5>\n              <div class=\"overflow-container\" slimScroll railVisible=\"true\" railColor=\"#004a6d\" width=\"100%\" height=\"350px\" size=\"8px\" color=\"#999\" opacity=\"0.6\" allowPageScroll=\"false\">\n                <p>This is Photoshop's Similique velit aut et cumque illum consequatur version of Lorem IpThis is Photoshop's version of Lorem Ipsum.</p>\n                <img src=\"assets/images/modal/overflow.jpg\" alt=\"\" class=\"img img-fluid\" />\n                <p class=\"p-t-15\">Similique velit aut et cumque illum consequatur doloribus quis ipsam sunt sint qui impedit nihil voluptate animi nesciunt corporis aspernatur quaerat sed rem voluptas commodi magnam porro eum sunt quis ullam aut odit laudantium quia soluta corrupti aut qui officiis hic voluptatibus aut itaque voluptates qui expedita minus autem aliquid et debitis omnis provident quia voluptate illo tempora illum maiores perferendis dolorem recusandae ut reprehenderit ad est eum occaecati quam non et quod amet illo id doloremque vitae porro porro sit amet voluptatem quia laboriosam aliquam quia quis facilis eveniet dolorum sunt neque rerum earum ut eaque ab tenetur quia nam quis rerum cumque eos excepturi nostrum qui distinctio porro enim vitae eligendi accusantium quia possimus et autem error repellendus vitae ad quia laborum minima autem nulla optio ad ea nobis animi illo voluptates cum recusandae temporibus voluptate amet quam excepturi odio quia suscipit inventore et rerum quos rerum aut doloribus aut consequatur earum impedit reiciendis saepe voluptates exercitationem maxime culpa saepe ducimus culpa ut aliquam magnam aut veniam sit totam architecto vel distinctio aspernatur aut qui labore quaerat rerum voluptatem sapiente sint sed explicabo et hic laboriosam sit nesciunt et minus et aut dignissimos ut porro incidunt sint et nihil id tempora aut et illum molestiae aperiam minus earum repellendus tempora illo itaque amet facilis quia rem iure quod corrupti dolores et sequi sunt ipsa labore quia unde qui blanditiis ut eos at quia beatae sit repellat quibusdam neque natus expedita sed perspiciatis atque quas voluptatem autem velit enim qui omnis molestiae et repellat sapiente corporis ipsam sed veritatis in quo quod et occaecati quia rerum iusto cumque accusamus numquam sunt quo sequi id molestiae consequatur doloribus molestiae autem nisi nostrum blanditiis et nihil sed nobis incidunt omnis quos minima eius quo accusamus qui ea minus aut est tempora quia inventore ad delectus vel et accusamus fuga eius ipsa aliquam alias sint maxime quae enim atque corrupti libero eos nesciunt et voluptas velit numquam illo non qui quaerat enim omnis et ex asperiores inventore quisquam est enim labore ut nobis consequatur fuga ut quo vel molestiae alias eius quod aspernatur laudantium pariatur eius fuga inventore esse at alias repudiandae perspiciatis id qui fuga consequatur recusandae atque iste commodi sapiente eaque labore ipsa aut sint quo vel recusandae ab iusto ducimus minus voluptas ex et illo commodi ipsa pariatur qui quae adipisci saepe dicta delectus nostrum illum incidunt laboriosam est maxime eum debitis et explicabo quia doloribus quod occaecati tempore tempora labore nihil enim recusandae et dolorum temporibus molestiae sint non porro neque minus provident reprehenderit similique illum voluptate qui dicta dolorum totam quia ut nihil dolore fugiat laboriosam molestiae eveniet omnis consequatur non magni nemo consequatur laboriosam non facilis harum eaque illo pariatur rerum dolores quis autem nemo aut enim tenetur pariatur et non quam repudiandae quia aliquam sunt corporis aperiam natus aut reprehenderit non non illum cum laboriosam nulla quaerat eligendi laudantium perspiciatis.</p>\n              </div>\n              <h5 class=\"font-header p-t-15\">Some text below the scrollable box</h5>\n              <p>This is Photoshop's version of Lorem IpThis is Similique velit aut et cumque illum consequatur Photoshop's version of Lorem Ipsum.</p>\n            </div>\n          </app-modal-basic>\n        </li>\n        <li>\n          <!-- modal light box-->\n\n          <button type=\"button\" class=\"btn btn-info waves-effect\" (click)=\"modalLightBox.show()\">Light Box</button>\n          <app-modal-basic #modalLightBox [hideHeader]=\"true\" [hideFooter]=\"true\">\n            <div class=\"app-modal-body\">\n              <button type=\"button\" class=\"close basic-close-light-box\" (click)=\"modalLightBox.hide()\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n              <img src=\"assets/images/modal/overflow.jpg\" alt=\"\" class=\"img img-fluid\" />\n            </div>\n          </app-modal-basic>\n        </li>\n        <li>\n          <!-- multi modal -->\n          <button type=\"button\" class=\"btn btn-success waves-effect m-b-10\" (click)=\"modalMulti1.show()\">Multi Model</button>\n          <!-- modal 1 -->\n          <app-modal-basic #modalMulti1>\n            <div class=\"app-modal-header\">\n              <h4 class=\"modal-title\">Modal 1</h4>\n              <button type=\"button\" class=\"close basic-close\" (click)=\"modalMulti1.hide()\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"app-modal-body\">\n              Content for the dialog / modal goes here.\n              <p class=\"p-t-50 p-b-50\">more content</p>\n              <button data-toggle=\"modal\" (click)=\"modalMulti2.show()\" class=\"btn btn-primary waves-effect waves-light\">Launch modal</button>\n            </div>\n            <div class=\"app-modal-footer\">\n              <button type=\"button\" class=\"btn btn-default waves-effect \" (click)=\"modalMulti1.hide()\">Close</button>\n              <button type=\"button\" class=\"btn btn-primary waves-effect waves-light\">Save changes</button>\n            </div>\n          </app-modal-basic>\n          <!-- modal 2 -->\n          <app-modal-basic #modalMulti2>\n            <div class=\"app-modal-header\">\n              <h4 class=\"modal-title\">Modal 2</h4>\n              <button type=\"button\" class=\"close basic-close\" (click)=\"modalMulti2.hide()\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"app-modal-body\">\n              Content for the dialog / modal goes here.\n              <p class=\"p-t-40 p-b-40\">more content</p>\n              <button data-toggle=\"modal\" (click)=\"modalMulti3.show()\" class=\"btn btn-primary\">Launch modal</button>\n            </div>\n            <div class=\"app-modal-footer\">\n              <button type=\"button\" class=\"btn btn-default waves-effect\" (click)=\"modalMulti2.hide()\">Close</button>\n              <button type=\"button\" class=\"btn btn-primary waves-effect waves-light \">Save changes</button>\n            </div>\n          </app-modal-basic>\n          <!-- modal 3 -->\n          <app-modal-basic #modalMulti3>\n            <div class=\"app-modal-header\">\n              <h4 class=\"modal-title\">Modal 3</h4>\n              <button type=\"button\" class=\"close basic-close\" (click)=\"modalMulti3.hide()\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"app-modal-body\">\n              Content for the dialog / modal goes here.\n              <p class=\"p-t-30 p-b-30\">more content</p>\n              <button data-toggle=\"modal\" (click)=\"modalMulti4.show()\" class=\"btn btn-primary\">Launch modal</button>\n            </div>\n            <div class=\"app-modal-footer\">\n              <button type=\"button\" class=\"btn btn-default waves-effect\" (click)=\"modalMulti3.hide()\">Close</button>\n              <button type=\"button\" class=\"btn btn-primary waves-effect waves-light \">Save changes</button>\n            </div>\n          </app-modal-basic>\n          <!-- modal 4 -->\n          <app-modal-basic #modalMulti4>\n            <div class=\"app-modal-header\">\n              <h4 class=\"modal-title\">Modal 4</h4>\n              <button type=\"button\" class=\"close basic-close\" (click)=\"modalMulti4.hide()\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"app-modal-body\">\n              Content for the dialog / modal goes here.\n              <p class=\"p-t-20 p-b-20\">more content</p>\n            </div>\n            <div class=\"app-modal-footer\">\n              <button type=\"button\" class=\"btn btn-default waves-effect\" (click)=\"modalMulti4.hide()\">Close</button>\n              <button type=\"button\" class=\"btn btn-primary waves-effect waves-light \">Save changes</button>\n            </div>\n          </app-modal-basic>\n        </li>\n      </ul>\n    </app-card>\n  </div>\n  <!-- Custom modal end -->\n  <!-- Sweet alert start -->\n  <div class=\"col-sm-12\">\n    <app-card [title]=\"'Sweet Alert/Message Box'\" [blockClass]=\"'model-btn-card'\">\n      <p>use button<code> (click) </code> set for <code>swal</code> function to use effect.</p>\n      <ul>\n        <li>\n          <button type=\"button\" class=\"btn btn-primary sweet-1 m-b-10\" (click)=\"openBasicSwal()\">Basic</button>\n        </li>\n        <li>\n          <button type=\"button\" class=\"btn btn-success alert-success-msg m-b-10\" (click)=\"openSuccessSwal()\">Success</button>\n        </li>\n       \n        <li>\n          <button type=\"button\" class=\"btn btn-danger alert-success-cancel m-b-10\" (click)=\"openSuccessCancelSwal()\">Success or Cancel</button>\n        </li>\n        <li>\n          <button type=\"button\" class=\"btn btn-primary alert-prompt m-b-10\" (click)=\"openPromptSwal()\">Prompt</button>\n        </li>\n        <li>\n          <button type=\"button\" class=\"btn btn-success alert-ajax m-b-10\" (click)=\"openAjaxSwal()\">Ajax</button>\n        </li>\n      </ul>\n    </app-card>\n  </div>\n  <!-- Sweet alert end -->\n  <!-- Animation modal start / Nifty Modal Window Effects start-->\n  <div class=\"col-sm-12\">\n    <app-card [title]=\"'Animation Modals'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\n      <p>use button with class<code> md-effect-1 to 18</code> to use effect.</p>\n      <div class=\"animation-model\">\n        <button type=\"button\" class=\"btn btn-default btn-outline-default waves-effect md-trigger\" (click)=\"openMyModal('effect-1')\">Fade in &amp; Scale</button>\n        <button type=\"button\" class=\"btn btn-primary btn-outline-primary waves-effect md-trigger\" (click)=\"openMyModal('effect-2')\">Slide in (right)</button>\n        <button type=\"button\" class=\"btn btn-success btn-outline-success waves-effect md-trigger\" (click)=\"openMyModal('effect-3')\">Slide in (bottom)</button>\n        <button type=\"button\" class=\"btn btn-warning btn-outline-warning waves-effect md-trigger\" (click)=\"openMyModal('effect-4')\">Newspaper</button>\n        <button type=\"button\" class=\"btn btn-danger btn-outline-danger waves-effect md-trigger\" (click)=\"openMyModal('effect-5')\">Fall</button>\n        <button type=\"button\" class=\"btn btn-info btn-outline-info waves-effect md-trigger\" (click)=\"openMyModal('effect-6')\">Side Fall</button>\n        <button type=\"button\" class=\"btn btn-default btn-outline-default waves-effect md-trigger\" (click)=\"openMyModal('effect-7')\">Sticky Up</button>\n        <button type=\"button\" class=\"btn btn-primary btn-outline-primary waves-effect md-trigger\" (click)=\"openMyModal('effect-8')\">3D Flip (horizontal)</button>\n        <button type=\"button\" class=\"btn btn-success btn-outline-success waves-effect md-trigger\" (click)=\"openMyModal('effect-9')\">3D Flip (vertical)</button>\n        <button type=\"button\" class=\"btn btn-warning btn-outline-warning waves-effect md-trigger\" (click)=\"openMyModal('effect-10')\">3D Sign</button>\n        <button type=\"button\" class=\"btn btn-danger btn-outline-danger waves-effect md-trigger\" (click)=\"openMyModal('effect-11')\">Super Scaled</button>\n        <button type=\"button\" class=\"btn btn-info btn-outline-info waves-effect md-trigger\" (click)=\"openMyModal('effect-12')\">Just Me</button>\n        <button type=\"button\" class=\"btn btn-primary btn-outline-primary waves-effect md-trigger\" (click)=\"openMyModal('effect-13')\">3D Slit</button>\n        <button type=\"button\" class=\"btn btn-success btn-outline-success waves-effect md-trigger\" (click)=\"openMyModal('effect-14')\">3D Rotate Bottom</button>\n        <button type=\"button\" class=\"btn btn-warning btn-outline-warning waves-effect md-trigger\" (click)=\"openMyModal('effect-15')\">3D Rotate In Left</button>\n        <button type=\"button\" class=\"btn btn-danger btn-outline-danger waves-effect md-trigger md-setperspective\" (click)=\"openMyModal('effect-17')\">Let me in</button>\n        <button type=\"button\" class=\"btn btn-default btn-outline-default waves-effect md-trigger md-setperspective\" (click)=\"openMyModal('effect-18')\">Make way!</button>\n        <button type=\"button\" class=\"btn btn-primary btn-outline-primary waves-effect md-trigger md-setperspective\" (click)=\"openMyModal('effect-19')\">Slip from top</button>\n        <!-- animation modal Dialogs start -->\n        <app-modal-animation [modalID]=\"'effect-1'\" [modalClass]=\"'md-effect-1'\">\n          <h3>Modal Dialog</h3>\n          <div>\n            <p>This is a modal window. You can do the following things with it:</p>\n            <ul>\n              <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n              <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n              <li><strong>Close:</strong> click on the button below to close the modal.</li>\n            </ul>\n            <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n          </div>\n          <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\n        </app-modal-animation>\n\n        <app-modal-animation [modalID]=\"'effect-2'\" [modalClass]=\"'md-effect-2'\">\n          <h3>Modal Dialog</h3>\n          <div>\n            <p>This is a modal window. You can do the following things with it:</p>\n            <ul>\n              <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n              <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n              <li><strong>Close:</strong> click on the button below to close the modal.</li>\n            </ul>\n            <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n          </div>\n          <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\n        </app-modal-animation>\n\n        <app-modal-animation [modalID]=\"'effect-3'\" [modalClass]=\"'md-effect-3'\">\n          <h3>Modal Dialog</h3>\n          <div>\n            <p>This is a modal window. You can do the following things with it:</p>\n            <ul>\n              <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n              <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n              <li><strong>Close:</strong> click on the button below to close the modal.</li>\n            </ul>\n            <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n          </div>\n          <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\n        </app-modal-animation>\n\n        <app-modal-animation [modalID]=\"'effect-4'\" [modalClass]=\"'md-effect-4'\">\n          <h3>Modal Dialog</h3>\n          <div>\n            <p>This is a modal window. You can do the following things with it:</p>\n            <ul>\n              <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n              <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n              <li><strong>Close:</strong> click on the button below to close the modal.</li>\n            </ul>\n            <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n          </div>\n          <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\n        </app-modal-animation>\n\n        <app-modal-animation [modalID]=\"'effect-5'\" [modalClass]=\"'md-effect-5'\">\n          <h3>Modal Dialog</h3>\n          <div>\n            <p>This is a modal window. You can do the following things with it:</p>\n            <ul>\n              <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n              <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n              <li><strong>Close:</strong> click on the button below to close the modal.</li>\n            </ul>\n            <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n          </div>\n          <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\n        </app-modal-animation>\n\n        <app-modal-animation [modalID]=\"'effect-6'\" [modalClass]=\"'md-effect-6'\">\n          <h3>Modal Dialog</h3>\n          <div>\n            <p>This is a modal window. You can do the following things with it:</p>\n            <ul>\n              <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n              <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n              <li><strong>Close:</strong> click on the button below to close the modal.</li>\n            </ul>\n            <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n          </div>\n          <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\n        </app-modal-animation>\n\n        <app-modal-animation [modalID]=\"'effect-7'\" [modalClass]=\"'md-effect-7'\">\n          <h3>Modal Dialog</h3>\n          <div>\n            <p>This is a modal window. You can do the following things with it:</p>\n            <ul>\n              <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n              <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n              <li><strong>Close:</strong> click on the button below to close the modal.</li>\n            </ul>\n            <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n          </div>\n          <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\n        </app-modal-animation>\n\n        <app-modal-animation [modalID]=\"'effect-8'\" [modalClass]=\"'md-effect-8'\">\n          <h3>Modal Dialog</h3>\n          <div>\n            <p>This is a modal window. You can do the following things with it:</p>\n            <ul>\n              <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n              <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n              <li><strong>Close:</strong> click on the button below to close the modal.</li>\n            </ul>\n            <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n          </div>\n          <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\n        </app-modal-animation>\n\n        <app-modal-animation [modalID]=\"'effect-9'\" [modalClass]=\"'md-effect-9'\">\n          <h3>Modal Dialog</h3>\n          <div>\n            <p>This is a modal window. You can do the following things with it:</p>\n            <ul>\n              <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n              <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n              <li><strong>Close:</strong> click on the button below to close the modal.</li>\n            </ul>\n            <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n          </div>\n          <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\n        </app-modal-animation>\n\n        <app-modal-animation [modalID]=\"'effect-10'\" [modalClass]=\"'md-effect-10'\">\n          <h3>Modal Dialog</h3>\n          <div>\n            <p>This is a modal window. You can do the following things with it:</p>\n            <ul>\n              <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n              <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n              <li><strong>Close:</strong> click on the button below to close the modal.</li>\n            </ul>\n            <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n          </div>\n          <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\n        </app-modal-animation>\n\n        <app-modal-animation [modalID]=\"'effect-11'\" [modalClass]=\"'md-effect-11'\">\n          <h3>Modal Dialog</h3>\n          <div>\n            <p>This is a modal window. You can do the following things with it:</p>\n            <ul>\n              <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n              <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n              <li><strong>Close:</strong> click on the button below to close the modal.</li>\n            </ul>\n            <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n          </div>\n          <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\n        </app-modal-animation>\n\n        <app-modal-animation [modalID]=\"'effect-12'\" [modalClass]=\"'md-effect-12'\">\n          <h3>Modal Dialog</h3>\n          <div>\n            <p>This is a modal window. You can do the following things with it:</p>\n            <ul>\n              <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n              <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n              <li><strong>Close:</strong> click on the button below to close the modal.</li>\n            </ul>\n            <button (click)=\"closeMyModal($event)\" class=\"btn btn-danger md-close\">Close Me!!</button>\n          </div>\n          <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\n        </app-modal-animation>\n\n        <app-modal-animation [modalID]=\"'effect-13'\" [modalClass]=\"'md-effect-13'\">\n          <h3>Modal Dialog</h3>\n          <div>\n            <p>This is a modal window. You can do the following things with it:</p>\n            <ul>\n              <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n              <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n              <li><strong>Close:</strong> click on the button below to close the modal.</li>\n            </ul>\n            <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n          </div>\n          <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\n        </app-modal-animation>\n\n        <app-modal-animation [modalID]=\"'effect-14'\" [modalClass]=\"'md-effect-14'\">\n          <h3>Modal Dialog</h3>\n          <div>\n            <p>This is a modal window. You can do the following things with it:</p>\n            <ul>\n              <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n              <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n              <li><strong>Close:</strong> click on the button below to close the modal.</li>\n            </ul>\n            <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n          </div>\n          <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\n        </app-modal-animation>\n\n        <app-modal-animation [modalID]=\"'effect-15'\" [modalClass]=\"'md-effect-15'\">\n          <h3>Modal Dialog</h3>\n          <div>\n            <p>This is a modal window. You can do the following things with it:</p>\n            <ul>\n              <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n              <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n              <li><strong>Close:</strong> click on the button below to close the modal.</li>\n            </ul>\n            <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n          </div>\n          <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\n        </app-modal-animation>\n\n        <app-modal-animation [modalID]=\"'effect-17'\" [modalClass]=\"'md-effect-17'\">\n          <h3>Modal Dialog</h3>\n          <div>\n            <p>This is a modal window. You can do the following things with it:</p>\n            <ul>\n              <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n              <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n              <li><strong>Close:</strong> click on the button below to close the modal.</li>\n            </ul>\n            <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n          </div>\n          <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\n        </app-modal-animation>\n\n        <app-modal-animation [modalID]=\"'effect-18'\" [modalClass]=\"'md-effect-18'\">\n          <h3>Modal Dialog</h3>\n          <div>\n            <p>This is a modal window. You can do the following things with it:</p>\n            <ul>\n              <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n              <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n              <li><strong>Close:</strong> click on the button below to close the modal.</li>\n            </ul>\n            <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n          </div>\n          <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\n        </app-modal-animation>\n\n        <app-modal-animation [modalID]=\"'effect-19'\" [modalClass]=\"'md-effect-19'\">\n          <h3>Modal Dialog</h3>\n          <div>\n            <p>This is a modal window. You can do the following things with it:</p>\n            <ul>\n              <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>\n              <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>\n              <li><strong>Close:</strong> click on the button below to close the modal.</li>\n            </ul>\n            <button (click)=\"closeMyModal($event)\" class=\"btn btn-primary md-close\">Close Me!!</button>\n          </div>\n          <button (click)=\"closeMyModal($event)\" aria-label=\"Close\" class=\"md-close-btn\"><i class=\"icofont icofont-ui-close\"></i></button>\n        </app-modal-animation>\n      </div>\n    </app-card>\n  </div>\n  <!-- Animation modal end / Nifty Modal Window Effects end-->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/ui-elements/advance/modal/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalComponent = (function () {
    function ModalComponent() {
        this.showDialog = false;
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent.prototype.openMyModal = function (event) {
        document.querySelector('#' + event).classList.add('md-show');
    };
    ModalComponent.prototype.closeMyModal = function (event) {
        ((event.target.parentElement.parentElement).parentElement).classList.remove('md-show');
    };
    ModalComponent.prototype.openBasicModal = function (event) {
        this.showDialog = !this.showDialog;
        setTimeout(function () {
            document.querySelector('#' + event).classList.add('md-show');
        }, 25);
    };
    ModalComponent.prototype.closeBasicModal = function (event) {
        var _this = this;
        ((event.target.parentElement.parentElement).parentElement).classList.remove('md-show');
        setTimeout(function () {
            _this.visible = false;
            _this.showDialog = !_this.showDialog;
        }, 300);
    };
    ModalComponent.prototype.openSwal = function () {
        __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
            title: 'Error!',
            text: 'Do you want to continue',
            type: 'error',
            confirmButtonText: 'Cool',
            allowOutsideClick: true
        }).catch(__WEBPACK_IMPORTED_MODULE_2_sweetalert2___default.a.noop);
    };
    ModalComponent.prototype.openBasicSwal = function () {
        __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
            title: 'Heres a message!',
            text: 'Its pretty, isnt it?'
        }).catch(__WEBPACK_IMPORTED_MODULE_2_sweetalert2___default.a.noop);
    };
    ModalComponent.prototype.openSuccessSwal = function () {
        __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
            title: 'Good job!',
            text: 'You clicked the button!',
            type: 'success'
        }).catch(__WEBPACK_IMPORTED_MODULE_2_sweetalert2___default.a.noop);
    };
    ModalComponent.prototype.openConfirmsSwal = function () {
        __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
            title: 'Are you sure?',
            text: 'You wont be able to revert',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function () {
            __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()('Deleted!', 'Your file has been deleted.', 'success');
        }).catch(__WEBPACK_IMPORTED_MODULE_2_sweetalert2___default.a.noop);
    };
    ModalComponent.prototype.openSuccessCancelSwal = function () {
        __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
            title: 'Are you sure?',
            text: 'You wont be able to revert',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            confirmButtonClass: 'btn btn-success m-r-10',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: false
        }).then(function () {
            __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()('Deleted!', 'Your file has been deleted.', 'success');
        }, function (dismiss) {
            if (dismiss === 'cancel') {
                __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()('Cancelled', 'Your imaginary file is safe :)', 'error');
            }
        }).catch(__WEBPACK_IMPORTED_MODULE_2_sweetalert2___default.a.noop);
    };
    ModalComponent.prototype.openPromptSwal = function () {
        __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default.a.setDefaults({
            input: 'text',
            confirmButtonText: 'Next &rarr;',
            showCancelButton: true,
            animation: false,
            progressSteps: ['1', '2', '3']
        });
        var steps = [
            {
                title: 'Question 1',
                text: 'Chaining swal2 modals is easy'
            },
            'Question 2',
            'Question 3'
        ];
        __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default.a.queue(steps).then(function (result) {
            __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default.a.resetDefaults();
            __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
                title: 'All done!',
                html: 'Your answers: <pre>' +
                    JSON.stringify(result) +
                    '</pre>',
                confirmButtonText: 'Lovely!',
                showCancelButton: false
            });
        }, function () {
            __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default.a.resetDefaults();
        }).catch(__WEBPACK_IMPORTED_MODULE_2_sweetalert2___default.a.noop);
    };
    ModalComponent.prototype.openAjaxSwal = function () {
        __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
            title: 'Submit email to run ajax request',
            input: 'email',
            showCancelButton: true,
            confirmButtonText: 'Submit',
            showLoaderOnConfirm: true,
            preConfirm: function (email) {
                return new Promise(function (resolve, reject) {
                    setTimeout(function () {
                        if (email === 'taken@example.com') {
                            reject('This email is already taken.');
                        }
                        else {
                            resolve();
                        }
                    }, 2000);
                });
            },
            allowOutsideClick: false
        }).then(function (email) {
            __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
                type: 'success',
                title: 'Ajax request finished!',
                html: 'Submitted email: ' + email
            });
        }).catch(__WEBPACK_IMPORTED_MODULE_2_sweetalert2___default.a.noop);
    };
    return ModalComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], ModalComponent.prototype, "visible", void 0);
ModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-modal',
        template: __webpack_require__("../../../../../src/app/pages/ui-elements/advance/modal/modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/ui-elements/advance/modal/modal.component.css"), __webpack_require__("../../../../sweetalert2/dist/sweetalert2.min.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('fadeInOutTranslate', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])(':enter', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: 0 }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('400ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: 1 }))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])(':leave', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ transform: 'translate(0)' }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('400ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: 0 }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], ModalComponent);

//# sourceMappingURL=modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/ui-elements/advance/modal/modal.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalRoutes", function() { return modalRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ModalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_component__ = __webpack_require__("../../../../../src/app/pages/ui-elements/advance/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var modalRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__modal_component__["a" /* ModalComponent */],
        data: {
            breadcrumb: 'Modal',
            icon: 'icofont-listine-dots bg-c-pink',
            status: true
        }
    }
];
var ModalModule = (function () {
    function ModalModule() {
    }
    return ModalModule;
}());
ModalModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(modalRoutes),
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__modal_component__["a" /* ModalComponent */]]
    })
], ModalModule);

//# sourceMappingURL=modal.module.js.map

/***/ }),

/***/ "../../../../sweetalert2/dist/sweetalert2.js":
/***/ (function(module, exports, __webpack_require__) {

/*!
 * sweetalert2 v6.10.3
 * Released under the MIT License.
 */
(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Sweetalert2 = factory());
}(this, (function () { 'use strict';

function __$styleInject(css, returnValue) {
  if (typeof document === 'undefined') {
    return returnValue;
  }
  css = css || '';
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  head.appendChild(style);
  
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  return returnValue;
}

var defaultParams = {
  title: '',
  titleText: '',
  text: '',
  html: '',
  type: null,
  customClass: '',
  target: 'body',
  animation: true,
  allowOutsideClick: true,
  allowEscapeKey: true,
  allowEnterKey: true,
  showConfirmButton: true,
  showCancelButton: false,
  preConfirm: null,
  confirmButtonText: 'OK',
  confirmButtonAriaLabel: '',
  confirmButtonColor: '#3085d6',
  confirmButtonClass: null,
  cancelButtonText: 'Cancel',
  cancelButtonAriaLabel: '',
  cancelButtonColor: '#aaa',
  cancelButtonClass: null,
  buttonsStyling: true,
  reverseButtons: false,
  focusConfirm: true,
  focusCancel: false,
  showCloseButton: false,
  closeButtonAriaLabel: 'Close this dialog',
  showLoaderOnConfirm: false,
  imageUrl: null,
  imageWidth: null,
  imageHeight: null,
  imageAlt: '',
  imageClass: null,
  timer: null,
  width: 500,
  padding: 20,
  background: '#fff',
  input: null,
  inputPlaceholder: '',
  inputValue: '',
  inputOptions: {},
  inputAutoTrim: true,
  inputClass: null,
  inputAttributes: {},
  inputValidator: null,
  progressSteps: [],
  currentProgressStep: null,
  progressStepsDistance: '40px',
  onOpen: null,
  onClose: null,
  useRejections: true
};

var swalPrefix = 'swal2-';

var prefix = function prefix(items) {
  var result = {};
  for (var i in items) {
    result[items[i]] = swalPrefix + items[i];
  }
  return result;
};

var swalClasses = prefix(['container', 'shown', 'iosfix', 'modal', 'overlay', 'fade', 'show', 'hide', 'noanimation', 'close', 'title', 'content', 'buttonswrapper', 'confirm', 'cancel', 'icon', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea', 'inputerror', 'validationerror', 'progresssteps', 'activeprogressstep', 'progresscircle', 'progressline', 'loading', 'styled']);

var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

var consolePrefix = 'SweetAlert2:';

/*
 * Set hover, active and focus-states for buttons (source: http://www.sitepoint.com/javascript-generate-lighter-darker-color)
 */
var colorLuminance = function colorLuminance(hex, lum) {
  // Validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, '');
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  lum = lum || 0;

  // Convert to decimal and change luminosity
  var rgb = '#';
  for (var i = 0; i < 3; i++) {
    var c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
    rgb += ('00' + c).substr(c.length);
  }

  return rgb;
};

var uniqueArray = function uniqueArray(arr) {
  var result = [];
  for (var i in arr) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  return result;
};

/**
 * Standardise console warnings
 * @param message
 */
var warn = function warn(message) {
  console.warn(consolePrefix + ' ' + message);
};

/**
 * Standardise console errors
 * @param message
 */
var error = function error(message) {
  console.error(consolePrefix + ' ' + message);
};

// Remember state in cases where opening and handling a modal will fiddle with it.
var states = {
  previousWindowKeyDown: null,
  previousActiveElement: null,
  previousBodyPadding: null

  /*
   * Add modal + overlay to DOM
   */
};var init = function init(params) {
  // Clean up the old modal if it exists
  var c = getContainer();
  if (c) {
    c.parentNode.removeChild(c);
  }

  if (typeof document === 'undefined') {
    error('SweetAlert2 requires document to initialize');
    return;
  }

  var container = document.createElement('div');
  container.className = swalClasses.container;
  container.innerHTML = sweetHTML;

  var targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target;
  targetElement.appendChild(container);

  var modal = getModal();
  var input = getChildByClass(modal, swalClasses.input);
  var file = getChildByClass(modal, swalClasses.file);
  var range = modal.querySelector('.' + swalClasses.range + ' input');
  var rangeOutput = modal.querySelector('.' + swalClasses.range + ' output');
  var select = getChildByClass(modal, swalClasses.select);
  var checkbox = modal.querySelector('.' + swalClasses.checkbox + ' input');
  var textarea = getChildByClass(modal, swalClasses.textarea);

  input.oninput = function () {
    sweetAlert.resetValidationError();
  };

  file.onchange = function () {
    sweetAlert.resetValidationError();
  };

  range.oninput = function () {
    sweetAlert.resetValidationError();
    rangeOutput.value = range.value;
  };

  range.onchange = function () {
    sweetAlert.resetValidationError();
    range.previousSibling.value = range.value;
  };

  select.onchange = function () {
    sweetAlert.resetValidationError();
  };

  checkbox.onchange = function () {
    sweetAlert.resetValidationError();
  };

  textarea.oninput = function () {
    sweetAlert.resetValidationError();
  };

  return modal;
};

/*
 * Manipulate DOM
 */

var sweetHTML = ('\n <div role="dialog" aria-modal="true" aria-labelledby="' + swalClasses.title + '" aria-describedby="' + swalClasses.content + '" class="' + swalClasses.modal + '" tabindex="-1">\n   <ul class="' + swalClasses.progresssteps + '"></ul>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.error + '">\n     <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n   </div>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.question + '">?</div>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.warning + '">!</div>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.info + '">i</div>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.success + '">\n     <div class="swal2-success-circular-line-left"></div>\n     <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n     <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n     <div class="swal2-success-circular-line-right"></div>\n   </div>\n   <img class="' + swalClasses.image + '" />\n   <h2 class="' + swalClasses.title + '" id="' + swalClasses.title + '"></h2>\n   <div id="' + swalClasses.content + '" class="' + swalClasses.content + '"></div>\n   <input class="' + swalClasses.input + '" />\n   <input type="file" class="' + swalClasses.file + '" />\n   <div class="' + swalClasses.range + '">\n     <output></output>\n     <input type="range" />\n   </div>\n   <select class="' + swalClasses.select + '"></select>\n   <div class="' + swalClasses.radio + '"></div>\n   <label for="' + swalClasses.checkbox + '" class="' + swalClasses.checkbox + '">\n     <input type="checkbox" />\n   </label>\n   <textarea class="' + swalClasses.textarea + '"></textarea>\n   <div class="' + swalClasses.validationerror + '" id="' + swalClasses.validationerror + '"></div>\n   <div class="' + swalClasses.buttonswrapper + '">\n     <button type="button" class="' + swalClasses.confirm + '">OK</button>\n     <button type="button" class="' + swalClasses.cancel + '">Cancel</button>\n   </div>\n   <button type="button" class="' + swalClasses.close + '">\xD7</button>\n </div>\n').replace(/(^|\n)\s*/g, '');

var getContainer = function getContainer() {
  return document.body.querySelector('.' + swalClasses.container);
};

var getModal = function getModal() {
  return getContainer() ? getContainer().querySelector('.' + swalClasses.modal) : null;
};

var getIcons = function getIcons() {
  var modal = getModal();
  return modal.querySelectorAll('.' + swalClasses.icon);
};

var elementByClass = function elementByClass(className) {
  return getContainer() ? getContainer().querySelector('.' + className) : null;
};

var getTitle = function getTitle() {
  return elementByClass(swalClasses.title);
};

var getContent = function getContent() {
  return elementByClass(swalClasses.content);
};

var getImage = function getImage() {
  return elementByClass(swalClasses.image);
};

var getProgressSteps = function getProgressSteps() {
  return elementByClass(swalClasses.progresssteps);
};

var getValidationError = function getValidationError() {
  return elementByClass(swalClasses.validationerror);
};

var getConfirmButton = function getConfirmButton() {
  return elementByClass(swalClasses.confirm);
};

var getCancelButton = function getCancelButton() {
  return elementByClass(swalClasses.cancel);
};

var getButtonsWrapper = function getButtonsWrapper() {
  return elementByClass(swalClasses.buttonswrapper);
};

var getCloseButton = function getCloseButton() {
  return elementByClass(swalClasses.close);
};

var getFocusableElements = function getFocusableElements() {
  var focusableElementsWithTabindex = Array.from(getModal().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'))
  // sort according to tabindex
  .sort(function (a, b) {
    a = parseInt(a.getAttribute('tabindex'));
    b = parseInt(b.getAttribute('tabindex'));
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }
    return 0;
  });

  var otherFocusableElements = Array.prototype.slice.call(getModal().querySelectorAll('button, input:not([type=hidden]), textarea, select, a, [tabindex="0"]'));

  return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements));
};

var hasClass = function hasClass(elem, className) {
  if (elem.classList) {
    return elem.classList.contains(className);
  }
  return false;
};

var focusInput = function focusInput(input) {
  input.focus();

  // place cursor at end of text in text input
  if (input.type !== 'file') {
    // http://stackoverflow.com/a/2345915/1331425
    var val = input.value;
    input.value = '';
    input.value = val;
  }
};

var addClass = function addClass(elem, className) {
  if (!elem || !className) {
    return;
  }
  var classes = className.split(/\s+/).filter(Boolean);
  classes.forEach(function (className) {
    elem.classList.add(className);
  });
};

var removeClass = function removeClass(elem, className) {
  if (!elem || !className) {
    return;
  }
  var classes = className.split(/\s+/).filter(Boolean);
  classes.forEach(function (className) {
    elem.classList.remove(className);
  });
};

var getChildByClass = function getChildByClass(elem, className) {
  for (var i = 0; i < elem.childNodes.length; i++) {
    if (hasClass(elem.childNodes[i], className)) {
      return elem.childNodes[i];
    }
  }
};

var show = function show(elem, display) {
  if (!display) {
    display = 'block';
  }
  elem.style.opacity = '';
  elem.style.display = display;
};

var hide = function hide(elem) {
  elem.style.opacity = '';
  elem.style.display = 'none';
};

var empty = function empty(elem) {
  while (elem.firstChild) {
    elem.removeChild(elem.firstChild);
  }
};

// borrowed from jqeury $(elem).is(':visible') implementation
var isVisible = function isVisible(elem) {
  return elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length;
};

var removeStyleProperty = function removeStyleProperty(elem, property) {
  if (elem.style.removeProperty) {
    elem.style.removeProperty(property);
  } else {
    elem.style.removeAttribute(property);
  }
};

var animationEndEvent = function () {
  var testEl = document.createElement('div');
  var transEndEventNames = {
    'WebkitAnimation': 'webkitAnimationEnd',
    'OAnimation': 'oAnimationEnd oanimationend',
    'animation': 'animationend'
  };
  for (var i in transEndEventNames) {
    if (transEndEventNames.hasOwnProperty(i) && testEl.style[i] !== undefined) {
      return transEndEventNames[i];
    }
  }

  return false;
}();

// Reset previous window keydown handler and focued element
var resetPrevState = function resetPrevState() {
  window.onkeydown = states.previousWindowKeyDown;
  if (states.previousActiveElement && states.previousActiveElement.focus) {
    var x = window.scrollX;
    var y = window.scrollY;
    states.previousActiveElement.focus();
    if (x && y) {
      // IE has no scrollX/scrollY support
      window.scrollTo(x, y);
    }
  }
};

// Measure width of scrollbar
// https://github.com/twbs/bootstrap/blob/master/js/modal.js#L279-L286
var measureScrollbar = function measureScrollbar() {
  var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
  if (supportsTouch) {
    return 0;
  }
  var scrollDiv = document.createElement('div');
  scrollDiv.style.width = '50px';
  scrollDiv.style.height = '50px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
};

// JavaScript Debounce Function
// Simplivied version of https://davidwalsh.name/javascript-debounce-function
var debounce = function debounce(func, wait) {
  var timeout = void 0;
  return function () {
    var later = function later() {
      timeout = null;
      func();
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();















var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var modalParams = _extends({}, defaultParams);
var queue = [];
var swal2Observer = void 0;

/*
 * Check for the existence of Promise
 * Hopefully to avoid many github issues
 */
if (typeof Promise === 'undefined') {
  error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/limonte/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
}

/*
 * Set type, text and actions on modal
 */
var setParameters = function setParameters(params) {
  // If a custom element is set, determine if it is valid
  if (typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
    warn('Target parameter is not valid, defaulting to "body"');
    params.target = 'body';
  }

  var modal = void 0;
  var oldModal = getModal();
  var targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target;
  // If the model target has changed, refresh the modal
  if (oldModal && targetElement && oldModal.parentNode !== targetElement.parentNode) {
    modal = init(params);
  } else {
    modal = oldModal || init(params);
  }

  for (var param in params) {
    if (!sweetAlert.isValidParameter(param)) {
      warn('Unknown parameter "' + param + '"');
    }
  }

  // Set modal width
  modal.style.width = typeof params.width === 'number' ? params.width + 'px' : params.width;

  modal.style.padding = params.padding + 'px';
  modal.style.background = params.background;
  var successIconParts = modal.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');
  for (var i = 0; i < successIconParts.length; i++) {
    successIconParts[i].style.background = params.background;
  }

  var title = getTitle();
  var content = getContent();
  var buttonsWrapper = getButtonsWrapper();
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton();
  var closeButton = getCloseButton();

  // Title
  if (params.titleText) {
    title.innerText = params.titleText;
  } else {
    title.innerHTML = params.title.split('\n').join('<br />');
  }

  // Content
  if (params.text || params.html) {
    if (_typeof(params.html) === 'object') {
      content.innerHTML = '';
      if (0 in params.html) {
        for (var _i = 0; _i in params.html; _i++) {
          content.appendChild(params.html[_i].cloneNode(true));
        }
      } else {
        content.appendChild(params.html.cloneNode(true));
      }
    } else if (params.html) {
      content.innerHTML = params.html;
    } else if (params.text) {
      content.textContent = params.text;
    }
    show(content);
  } else {
    hide(content);
  }

  // Close button
  if (params.showCloseButton) {
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
    show(closeButton);
  } else {
    hide(closeButton);
  }

  // Custom Class
  modal.className = swalClasses.modal;
  if (params.customClass) {
    addClass(modal, params.customClass);
  }

  // Progress steps
  var progressStepsContainer = getProgressSteps();
  var currentProgressStep = parseInt(params.currentProgressStep === null ? sweetAlert.getQueueStep() : params.currentProgressStep, 10);
  if (params.progressSteps.length) {
    show(progressStepsContainer);
    empty(progressStepsContainer);
    if (currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }
    params.progressSteps.forEach(function (step, index) {
      var circle = document.createElement('li');
      addClass(circle, swalClasses.progresscircle);
      circle.innerHTML = step;
      if (index === currentProgressStep) {
        addClass(circle, swalClasses.activeprogressstep);
      }
      progressStepsContainer.appendChild(circle);
      if (index !== params.progressSteps.length - 1) {
        var line = document.createElement('li');
        addClass(line, swalClasses.progressline);
        line.style.width = params.progressStepsDistance;
        progressStepsContainer.appendChild(line);
      }
    });
  } else {
    hide(progressStepsContainer);
  }

  // Icon
  var icons = getIcons();
  for (var _i2 = 0; _i2 < icons.length; _i2++) {
    hide(icons[_i2]);
  }
  if (params.type) {
    var validType = false;
    for (var iconType in iconTypes) {
      if (params.type === iconType) {
        validType = true;
        break;
      }
    }
    if (!validType) {
      error('Unknown alert type: ' + params.type);
      return false;
    }
    var icon = modal.querySelector('.' + swalClasses.icon + '.' + iconTypes[params.type]);
    show(icon);

    // Animate icon
    if (params.animation) {
      switch (params.type) {
        case 'success':
          addClass(icon, 'swal2-animate-success-icon');
          addClass(icon.querySelector('.swal2-success-line-tip'), 'swal2-animate-success-line-tip');
          addClass(icon.querySelector('.swal2-success-line-long'), 'swal2-animate-success-line-long');
          break;
        case 'error':
          addClass(icon, 'swal2-animate-error-icon');
          addClass(icon.querySelector('.swal2-x-mark'), 'swal2-animate-x-mark');
          break;
        default:
          break;
      }
    }
  }

  // Custom image
  var image = getImage();
  if (params.imageUrl) {
    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt);
    show(image);

    if (params.imageWidth) {
      image.setAttribute('width', params.imageWidth);
    } else {
      image.removeAttribute('width');
    }

    if (params.imageHeight) {
      image.setAttribute('height', params.imageHeight);
    } else {
      image.removeAttribute('height');
    }

    image.className = swalClasses.image;
    if (params.imageClass) {
      addClass(image, params.imageClass);
    }
  } else {
    hide(image);
  }

  // Cancel button
  if (params.showCancelButton) {
    cancelButton.style.display = 'inline-block';
  } else {
    hide(cancelButton);
  }

  // Confirm button
  if (params.showConfirmButton) {
    removeStyleProperty(confirmButton, 'display');
  } else {
    hide(confirmButton);
  }

  // Buttons wrapper
  if (!params.showConfirmButton && !params.showCancelButton) {
    hide(buttonsWrapper);
  } else {
    show(buttonsWrapper);
  }

  // Edit text on confirm and cancel buttons
  confirmButton.innerHTML = params.confirmButtonText;
  cancelButton.innerHTML = params.cancelButtonText;

  // ARIA labels for confirm and cancel buttons
  confirmButton.setAttribute('aria-label', params.confirmButtonAriaLabel);
  cancelButton.setAttribute('aria-label', params.cancelButtonAriaLabel);

  // Set buttons to selected background colors
  if (params.buttonsStyling) {
    confirmButton.style.backgroundColor = params.confirmButtonColor;
    cancelButton.style.backgroundColor = params.cancelButtonColor;
  }

  // Add buttons custom classes
  confirmButton.className = swalClasses.confirm;
  addClass(confirmButton, params.confirmButtonClass);
  cancelButton.className = swalClasses.cancel;
  addClass(cancelButton, params.cancelButtonClass);

  // Buttons styling
  if (params.buttonsStyling) {
    addClass(confirmButton, swalClasses.styled);
    addClass(cancelButton, swalClasses.styled);
  } else {
    removeClass(confirmButton, swalClasses.styled);
    removeClass(cancelButton, swalClasses.styled);

    confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = '';
    cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = '';
  }

  // CSS animation
  if (params.animation === true) {
    removeClass(modal, swalClasses.noanimation);
  } else {
    addClass(modal, swalClasses.noanimation);
  }

  // showLoaderOnConfirm && preConfirm
  if (params.showLoaderOnConfirm && !params.preConfirm) {
    warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://limonte.github.io/sweetalert2/#ajax-request');
  }
};

/*
 * Animations
 */
var openModal = function openModal(animation, onComplete) {
  var container = getContainer();
  var modal = getModal();

  if (animation) {
    addClass(modal, swalClasses.show);
    addClass(container, swalClasses.fade);
    removeClass(modal, swalClasses.hide);
  } else {
    removeClass(modal, swalClasses.fade);
  }
  show(modal);

  // scrolling is 'hidden' until animation is done, after that 'auto'
  container.style.overflowY = 'hidden';
  if (animationEndEvent && !hasClass(modal, swalClasses.noanimation)) {
    modal.addEventListener(animationEndEvent, function swalCloseEventFinished() {
      modal.removeEventListener(animationEndEvent, swalCloseEventFinished);
      container.style.overflowY = 'auto';
    });
  } else {
    container.style.overflowY = 'auto';
  }

  addClass(document.documentElement, swalClasses.shown);
  addClass(document.body, swalClasses.shown);
  addClass(container, swalClasses.shown);
  fixScrollbar();
  iOSfix();
  states.previousActiveElement = document.activeElement;
  if (onComplete !== null && typeof onComplete === 'function') {
    setTimeout(function () {
      onComplete(modal);
    });
  }
};

var fixScrollbar = function fixScrollbar() {
  // for queues, do not do this more than once
  if (states.previousBodyPadding !== null) {
    return;
  }
  // if the body has overflow
  if (document.body.scrollHeight > window.innerHeight) {
    // add padding so the content doesn't shift after removal of scrollbar
    states.previousBodyPadding = document.body.style.paddingRight;
    document.body.style.paddingRight = measureScrollbar() + 'px';
  }
};

var undoScrollbar = function undoScrollbar() {
  if (states.previousBodyPadding !== null) {
    document.body.style.paddingRight = states.previousBodyPadding;
    states.previousBodyPadding = null;
  }
};

// Fix iOS scrolling http://stackoverflow.com/q/39626302/1331425
var iOSfix = function iOSfix() {
  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
    var offset = document.body.scrollTop;
    document.body.style.top = offset * -1 + 'px';
    addClass(document.body, swalClasses.iosfix);
  }
};

var undoIOSfix = function undoIOSfix() {
  if (hasClass(document.body, swalClasses.iosfix)) {
    var offset = parseInt(document.body.style.top, 10);
    removeClass(document.body, swalClasses.iosfix);
    document.body.style.top = '';
    document.body.scrollTop = offset * -1;
  }
};

// SweetAlert entry point
var sweetAlert = function sweetAlert() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args[0] === undefined) {
    error('SweetAlert2 expects at least 1 attribute!');
    return false;
  }

  var params = _extends({}, modalParams);

  switch (_typeof(args[0])) {
    case 'string':
      params.title = args[0];
      params.html = args[1];
      params.type = args[2];

      break;

    case 'object':
      _extends(params, args[0]);
      params.extraParams = args[0].extraParams;

      if (params.input === 'email' && params.inputValidator === null) {
        params.inputValidator = function (email) {
          return new Promise(function (resolve, reject) {
            var emailRegex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (emailRegex.test(email)) {
              resolve();
            } else {
              reject('Invalid email address');
            }
          });
        };
      }

      if (params.input === 'url' && params.inputValidator === null) {
        params.inputValidator = function (url) {
          return new Promise(function (resolve, reject) {
            // taken from https://stackoverflow.com/a/3809435/1331425
            var urlRegex = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/;
            if (urlRegex.test(url)) {
              resolve();
            } else {
              reject('Invalid URL');
            }
          });
        };
      }
      break;

    default:
      error('Unexpected type of argument! Expected "string" or "object", got ' + _typeof(args[0]));
      return false;
  }

  setParameters(params);

  var container = getContainer();
  var modal = getModal();

  return new Promise(function (resolve, reject) {
    // Close on timer
    if (params.timer) {
      modal.timeout = setTimeout(function () {
        sweetAlert.closeModal(params.onClose);
        if (params.useRejections) {
          reject('timer');
        } else {
          resolve({ dismiss: 'timer' });
        }
      }, params.timer);
    }

    // Get input element by specified type or, if type isn't specified, by params.input
    var getInput = function getInput(inputType) {
      inputType = inputType || params.input;
      if (!inputType) {
        return null;
      }
      switch (inputType) {
        case 'select':
        case 'textarea':
        case 'file':
          return getChildByClass(modal, swalClasses[inputType]);
        case 'checkbox':
          return modal.querySelector('.' + swalClasses.checkbox + ' input');
        case 'radio':
          return modal.querySelector('.' + swalClasses.radio + ' input:checked') || modal.querySelector('.' + swalClasses.radio + ' input:first-child');
        case 'range':
          return modal.querySelector('.' + swalClasses.range + ' input');
        default:
          return getChildByClass(modal, swalClasses.input);
      }
    };

    // Get the value of the modal input
    var getInputValue = function getInputValue() {
      var input = getInput();
      if (!input) {
        return null;
      }
      switch (params.input) {
        case 'checkbox':
          return input.checked ? 1 : 0;
        case 'radio':
          return input.checked ? input.value : null;
        case 'file':
          return input.files.length ? input.files[0] : null;
        default:
          return params.inputAutoTrim ? input.value.trim() : input.value;
      }
    };

    // input autofocus
    if (params.input) {
      setTimeout(function () {
        var input = getInput();
        if (input) {
          focusInput(input);
        }
      }, 0);
    }

    var confirm = function confirm(value) {
      if (params.showLoaderOnConfirm) {
        sweetAlert.showLoading();
      }

      if (params.preConfirm) {
        params.preConfirm(value, params.extraParams).then(function (preConfirmValue) {
          sweetAlert.closeModal(params.onClose);
          resolve(preConfirmValue || value);
        }, function (error$$1) {
          sweetAlert.hideLoading();
          if (error$$1) {
            sweetAlert.showValidationError(error$$1);
          }
        });
      } else {
        sweetAlert.closeModal(params.onClose);
        if (params.useRejections) {
          resolve(value);
        } else {
          resolve({ value: value });
        }
      }
    };

    // Mouse interactions
    var onButtonEvent = function onButtonEvent(event) {
      var e = event || window.event;
      var target = e.target || e.srcElement;
      var confirmButton = getConfirmButton();
      var cancelButton = getCancelButton();
      var targetedConfirm = confirmButton && (confirmButton === target || confirmButton.contains(target));
      var targetedCancel = cancelButton && (cancelButton === target || cancelButton.contains(target));

      switch (e.type) {
        case 'mouseover':
        case 'mouseup':
          if (params.buttonsStyling) {
            if (targetedConfirm) {
              confirmButton.style.backgroundColor = colorLuminance(params.confirmButtonColor, -0.1);
            } else if (targetedCancel) {
              cancelButton.style.backgroundColor = colorLuminance(params.cancelButtonColor, -0.1);
            }
          }
          break;
        case 'mouseout':
          if (params.buttonsStyling) {
            if (targetedConfirm) {
              confirmButton.style.backgroundColor = params.confirmButtonColor;
            } else if (targetedCancel) {
              cancelButton.style.backgroundColor = params.cancelButtonColor;
            }
          }
          break;
        case 'mousedown':
          if (params.buttonsStyling) {
            if (targetedConfirm) {
              confirmButton.style.backgroundColor = colorLuminance(params.confirmButtonColor, -0.2);
            } else if (targetedCancel) {
              cancelButton.style.backgroundColor = colorLuminance(params.cancelButtonColor, -0.2);
            }
          }
          break;
        case 'click':
          // Clicked 'confirm'
          if (targetedConfirm && sweetAlert.isVisible()) {
            sweetAlert.disableButtons();
            if (params.input) {
              var inputValue = getInputValue();

              if (params.inputValidator) {
                sweetAlert.disableInput();
                params.inputValidator(inputValue, params.extraParams).then(function () {
                  sweetAlert.enableButtons();
                  sweetAlert.enableInput();
                  confirm(inputValue);
                }, function (error$$1) {
                  sweetAlert.enableButtons();
                  sweetAlert.enableInput();
                  if (error$$1) {
                    sweetAlert.showValidationError(error$$1);
                  }
                });
              } else {
                confirm(inputValue);
              }
            } else {
              confirm(true);
            }

            // Clicked 'cancel'
          } else if (targetedCancel && sweetAlert.isVisible()) {
            sweetAlert.disableButtons();
            sweetAlert.closeModal(params.onClose);
            if (params.useRejections) {
              reject('cancel');
            } else {
              resolve({ dismiss: 'cancel' });
            }
          }
          break;
        default:
      }
    };

    var buttons = modal.querySelectorAll('button');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].onclick = onButtonEvent;
      buttons[i].onmouseover = onButtonEvent;
      buttons[i].onmouseout = onButtonEvent;
      buttons[i].onmousedown = onButtonEvent;
    }

    // Closing modal by close button
    getCloseButton().onclick = function () {
      sweetAlert.closeModal(params.onClose);
      if (params.useRejections) {
        reject('close');
      } else {
        resolve({ dismiss: 'close' });
      }
    };

    // Closing modal by overlay click
    container.onclick = function (e) {
      if (e.target !== container) {
        return;
      }
      if (params.allowOutsideClick) {
        sweetAlert.closeModal(params.onClose);
        if (params.useRejections) {
          reject('overlay');
        } else {
          resolve({ dismiss: 'overlay' });
        }
      }
    };

    var buttonsWrapper = getButtonsWrapper();
    var confirmButton = getConfirmButton();
    var cancelButton = getCancelButton();

    // Reverse buttons (Confirm on the right side)
    if (params.reverseButtons) {
      confirmButton.parentNode.insertBefore(cancelButton, confirmButton);
    } else {
      confirmButton.parentNode.insertBefore(confirmButton, cancelButton);
    }

    // Focus handling
    var setFocus = function setFocus(index, increment) {
      var focusableElements = getFocusableElements(params.focusCancel);
      // search for visible elements and select the next possible match
      for (var _i3 = 0; _i3 < focusableElements.length; _i3++) {
        index = index + increment;

        // rollover to first item
        if (index === focusableElements.length) {
          index = 0;

          // go to last item
        } else if (index === -1) {
          index = focusableElements.length - 1;
        }

        // determine if element is visible
        var el = focusableElements[index];
        if (isVisible(el)) {
          return el.focus();
        }
      }
    };

    var handleKeyDown = function handleKeyDown(event) {
      var e = event || window.event;

      if (e.key === 'Enter') {
        if (e.target === getInput()) {
          sweetAlert.clickConfirm();
          e.preventDefault();
        }

        // TAB
      } else if (e.key === 'Tab') {
        var targetElement = e.target || e.srcElement;

        var focusableElements = getFocusableElements(params.focusCancel);
        var btnIndex = -1; // Find the button - note, this is a nodelist, not an array.
        for (var _i4 = 0; _i4 < focusableElements.length; _i4++) {
          if (targetElement === focusableElements[_i4]) {
            btnIndex = _i4;
            break;
          }
        }

        if (!e.shiftKey) {
          // Cycle to the next button
          setFocus(btnIndex, 1);
        } else {
          // Cycle to the prev button
          setFocus(btnIndex, -1);
        }
        e.stopPropagation();
        e.preventDefault();

        // ARROWS - switch focus between buttons
      } else if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'Arrowdown'].includes(e.key)) {
        // focus Cancel button if Confirm button is currently focused
        if (document.activeElement === confirmButton && isVisible(cancelButton)) {
          cancelButton.focus();
          // and vice versa
        } else if (document.activeElement === cancelButton && isVisible(confirmButton)) {
          confirmButton.focus();
        }

        // ESC
      } else if (e.key === 'Escape' && params.allowEscapeKey === true) {
        sweetAlert.closeModal(params.onClose);
        if (params.useRejections) {
          reject('esc');
        } else {
          resolve({ dismiss: 'esc' });
        }
      }
    };

    if (!window.onkeydown || window.onkeydown.toString() !== handleKeyDown.toString()) {
      states.previousWindowKeyDown = window.onkeydown;
      window.onkeydown = handleKeyDown;
    }

    // Loading state
    if (params.buttonsStyling) {
      confirmButton.style.borderLeftColor = params.confirmButtonColor;
      confirmButton.style.borderRightColor = params.confirmButtonColor;
    }

    /**
     * Show spinner instead of Confirm button and disable Cancel button
     */
    sweetAlert.hideLoading = sweetAlert.disableLoading = function () {
      if (!params.showConfirmButton) {
        hide(confirmButton);
        if (!params.showCancelButton) {
          hide(getButtonsWrapper());
        }
      }
      removeClass(buttonsWrapper, swalClasses.loading);
      removeClass(modal, swalClasses.loading);
      modal.removeAttribute('aria-busy');
      confirmButton.disabled = false;
      cancelButton.disabled = false;
    };

    sweetAlert.getTitle = function () {
      return getTitle();
    };
    sweetAlert.getContent = function () {
      return getContent();
    };
    sweetAlert.getInput = function () {
      return getInput();
    };
    sweetAlert.getImage = function () {
      return getImage();
    };
    sweetAlert.getButtonsWrapper = function () {
      return getButtonsWrapper();
    };
    sweetAlert.getConfirmButton = function () {
      return getConfirmButton();
    };
    sweetAlert.getCancelButton = function () {
      return getCancelButton();
    };

    sweetAlert.enableButtons = function () {
      confirmButton.disabled = false;
      cancelButton.disabled = false;
    };

    sweetAlert.disableButtons = function () {
      confirmButton.disabled = true;
      cancelButton.disabled = true;
    };

    sweetAlert.enableConfirmButton = function () {
      confirmButton.disabled = false;
    };

    sweetAlert.disableConfirmButton = function () {
      confirmButton.disabled = true;
    };

    sweetAlert.enableInput = function () {
      var input = getInput();
      if (!input) {
        return false;
      }
      if (input.type === 'radio') {
        var radiosContainer = input.parentNode.parentNode;
        var radios = radiosContainer.querySelectorAll('input');
        for (var _i5 = 0; _i5 < radios.length; _i5++) {
          radios[_i5].disabled = false;
        }
      } else {
        input.disabled = false;
      }
    };

    sweetAlert.disableInput = function () {
      var input = getInput();
      if (!input) {
        return false;
      }
      if (input && input.type === 'radio') {
        var radiosContainer = input.parentNode.parentNode;
        var radios = radiosContainer.querySelectorAll('input');
        for (var _i6 = 0; _i6 < radios.length; _i6++) {
          radios[_i6].disabled = true;
        }
      } else {
        input.disabled = true;
      }
    };

    // Set modal min-height to disable scrolling inside the modal
    sweetAlert.recalculateHeight = debounce(function () {
      var modal = getModal();
      if (!modal) {
        return;
      }
      var prevState = modal.style.display;
      modal.style.minHeight = '';
      show(modal);
      modal.style.minHeight = modal.scrollHeight + 1 + 'px';
      modal.style.display = prevState;
    }, 50);

    // Show block with validation error
    sweetAlert.showValidationError = function (error$$1) {
      var validationError = getValidationError();
      validationError.innerHTML = error$$1;
      show(validationError);

      var input = getInput();
      if (input) {
        input.setAttribute('aria-invalid', true);
        input.setAttribute('aria-describedBy', swalClasses.validationerror);
        focusInput(input);
        addClass(input, swalClasses.inputerror);
      }
    };

    // Hide block with validation error
    sweetAlert.resetValidationError = function () {
      var validationError = getValidationError();
      hide(validationError);
      sweetAlert.recalculateHeight();

      var input = getInput();
      if (input) {
        input.removeAttribute('aria-invalid');
        input.removeAttribute('aria-describedBy');
        removeClass(input, swalClasses.inputerror);
      }
    };

    sweetAlert.getProgressSteps = function () {
      return params.progressSteps;
    };

    sweetAlert.setProgressSteps = function (progressSteps) {
      params.progressSteps = progressSteps;
      setParameters(params);
    };

    sweetAlert.showProgressSteps = function () {
      show(getProgressSteps());
    };

    sweetAlert.hideProgressSteps = function () {
      hide(getProgressSteps());
    };

    sweetAlert.enableButtons();
    sweetAlert.hideLoading();
    sweetAlert.resetValidationError();

    // inputs
    var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
    var input = void 0;
    for (var _i7 = 0; _i7 < inputTypes.length; _i7++) {
      var inputClass = swalClasses[inputTypes[_i7]];
      var inputContainer = getChildByClass(modal, inputClass);
      input = getInput(inputTypes[_i7]);

      // set attributes
      if (input) {
        for (var j in input.attributes) {
          if (input.attributes.hasOwnProperty(j)) {
            var attrName = input.attributes[j].name;
            if (attrName !== 'type' && attrName !== 'value') {
              input.removeAttribute(attrName);
            }
          }
        }
        for (var attr in params.inputAttributes) {
          input.setAttribute(attr, params.inputAttributes[attr]);
        }
      }

      // set class
      inputContainer.className = inputClass;
      if (params.inputClass) {
        addClass(inputContainer, params.inputClass);
      }

      hide(inputContainer);
    }

    var populateInputOptions = void 0;
    switch (params.input) {
      case 'text':
      case 'email':
      case 'password':
      case 'number':
      case 'tel':
      case 'url':
        input = getChildByClass(modal, swalClasses.input);
        input.value = params.inputValue;
        input.placeholder = params.inputPlaceholder;
        input.type = params.input;
        show(input);
        break;
      case 'file':
        input = getChildByClass(modal, swalClasses.file);
        input.placeholder = params.inputPlaceholder;
        input.type = params.input;
        show(input);
        break;
      case 'range':
        var range = getChildByClass(modal, swalClasses.range);
        var rangeInput = range.querySelector('input');
        var rangeOutput = range.querySelector('output');
        rangeInput.value = params.inputValue;
        rangeInput.type = params.input;
        rangeOutput.value = params.inputValue;
        show(range);
        break;
      case 'select':
        var select = getChildByClass(modal, swalClasses.select);
        select.innerHTML = '';
        if (params.inputPlaceholder) {
          var placeholder = document.createElement('option');
          placeholder.innerHTML = params.inputPlaceholder;
          placeholder.value = '';
          placeholder.disabled = true;
          placeholder.selected = true;
          select.appendChild(placeholder);
        }
        populateInputOptions = function populateInputOptions(inputOptions) {
          for (var optionValue in inputOptions) {
            var option = document.createElement('option');
            option.value = optionValue;
            option.innerHTML = inputOptions[optionValue];
            if (params.inputValue.toString() === optionValue) {
              option.selected = true;
            }
            select.appendChild(option);
          }
          show(select);
          select.focus();
        };
        break;
      case 'radio':
        var radio = getChildByClass(modal, swalClasses.radio);
        radio.innerHTML = '';
        populateInputOptions = function populateInputOptions(inputOptions) {
          for (var radioValue in inputOptions) {
            var radioInput = document.createElement('input');
            var radioLabel = document.createElement('label');
            var radioLabelSpan = document.createElement('span');
            radioInput.type = 'radio';
            radioInput.name = swalClasses.radio;
            radioInput.value = radioValue;
            if (params.inputValue.toString() === radioValue) {
              radioInput.checked = true;
            }
            radioLabelSpan.innerHTML = inputOptions[radioValue];
            radioLabel.appendChild(radioInput);
            radioLabel.appendChild(radioLabelSpan);
            radioLabel.for = radioInput.id;
            radio.appendChild(radioLabel);
          }
          show(radio);
          var radios = radio.querySelectorAll('input');
          if (radios.length) {
            radios[0].focus();
          }
        };
        break;
      case 'checkbox':
        var checkbox = getChildByClass(modal, swalClasses.checkbox);
        var checkboxInput = getInput('checkbox');
        checkboxInput.type = 'checkbox';
        checkboxInput.value = 1;
        checkboxInput.id = swalClasses.checkbox;
        checkboxInput.checked = Boolean(params.inputValue);
        var label = checkbox.getElementsByTagName('span');
        if (label.length) {
          checkbox.removeChild(label[0]);
        }
        label = document.createElement('span');
        label.innerHTML = params.inputPlaceholder;
        checkbox.appendChild(label);
        show(checkbox);
        break;
      case 'textarea':
        var textarea = getChildByClass(modal, swalClasses.textarea);
        textarea.value = params.inputValue;
        textarea.placeholder = params.inputPlaceholder;
        show(textarea);
        break;
      case null:
        break;
      default:
        error('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "' + params.input + '"');
        break;
    }

    if (params.input === 'select' || params.input === 'radio') {
      if (params.inputOptions instanceof Promise) {
        sweetAlert.showLoading();
        params.inputOptions.then(function (inputOptions) {
          sweetAlert.hideLoading();
          populateInputOptions(inputOptions);
        });
      } else if (_typeof(params.inputOptions) === 'object') {
        populateInputOptions(params.inputOptions);
      } else {
        error('Unexpected type of inputOptions! Expected object or Promise, got ' + _typeof(params.inputOptions));
      }
    }

    openModal(params.animation, params.onOpen);

    if (!params.allowEnterKey) {
      if (document.activeElement) {
        document.activeElement.blur();
      }
    } else if (params.focusCancel && isVisible(cancelButton)) {
      cancelButton.focus();
    } else if (params.focusConfirm && isVisible(confirmButton)) {
      confirmButton.focus();
    } else {
      setFocus(-1, 1);
    }

    // fix scroll
    getContainer().scrollTop = 0;

    // Observe changes inside the modal and adjust height
    if (typeof MutationObserver !== 'undefined' && !swal2Observer) {
      swal2Observer = new MutationObserver(sweetAlert.recalculateHeight);
      swal2Observer.observe(modal, { childList: true, characterData: true, subtree: true });
    }
  });
};

/*
 * Global function to determine if swal2 modal is shown
 */
sweetAlert.isVisible = function () {
  return !!getModal();
};

/*
 * Global function for chaining sweetAlert modals
 */
sweetAlert.queue = function (steps) {
  queue = steps;
  var resetQueue = function resetQueue() {
    queue = [];
    document.body.removeAttribute('data-swal2-queue-step');
  };
  var queueResult = [];
  return new Promise(function (resolve, reject) {
    (function step(i, callback) {
      if (i < queue.length) {
        document.body.setAttribute('data-swal2-queue-step', i);

        sweetAlert(queue[i]).then(function (result) {
          queueResult.push(result);
          step(i + 1, callback);
        }, function (dismiss) {
          resetQueue();
          reject(dismiss);
        });
      } else {
        resetQueue();
        resolve(queueResult);
      }
    })(0);
  });
};

/*
 * Global function for getting the index of current modal in queue
 */
sweetAlert.getQueueStep = function () {
  return document.body.getAttribute('data-swal2-queue-step');
};

/*
 * Global function for inserting a modal to the queue
 */
sweetAlert.insertQueueStep = function (step, index) {
  if (index && index < queue.length) {
    return queue.splice(index, 0, step);
  }
  return queue.push(step);
};

/*
 * Global function for deleting a modal from the queue
 */
sweetAlert.deleteQueueStep = function (index) {
  if (typeof queue[index] !== 'undefined') {
    queue.splice(index, 1);
  }
};

/*
 * Global function to close sweetAlert
 */
sweetAlert.close = sweetAlert.closeModal = function (onComplete) {
  var container = getContainer();
  var modal = getModal();
  if (!modal) {
    return;
  }
  removeClass(modal, swalClasses.show);
  addClass(modal, swalClasses.hide);
  clearTimeout(modal.timeout);

  resetPrevState();

  var removeModalAndResetState = function removeModalAndResetState() {
    if (container.parentNode) {
      container.parentNode.removeChild(container);
    }
    removeClass(document.documentElement, swalClasses.shown);
    removeClass(document.body, swalClasses.shown);
    undoScrollbar();
    undoIOSfix();
  };

  // If animation is supported, animate
  if (animationEndEvent && !hasClass(modal, swalClasses.noanimation)) {
    modal.addEventListener(animationEndEvent, function swalCloseEventFinished() {
      modal.removeEventListener(animationEndEvent, swalCloseEventFinished);
      if (hasClass(modal, swalClasses.hide)) {
        removeModalAndResetState();
      }
    });
  } else {
    // Otherwise, remove immediately
    removeModalAndResetState();
  }
  if (onComplete !== null && typeof onComplete === 'function') {
    setTimeout(function () {
      onComplete(modal);
    });
  }
};

/*
 * Global function to click 'Confirm' button
 */
sweetAlert.clickConfirm = function () {
  return getConfirmButton().click();
};

/*
 * Global function to click 'Cancel' button
 */
sweetAlert.clickCancel = function () {
  return getCancelButton().click();
};

/**
 * Show spinner instead of Confirm button and disable Cancel button
 */
sweetAlert.showLoading = sweetAlert.enableLoading = function () {
  var modal = getModal();
  if (!modal) {
    sweetAlert('');
  }
  modal = getModal();
  var buttonsWrapper = getButtonsWrapper();
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton();

  show(buttonsWrapper);
  show(confirmButton, 'inline-block');
  addClass(buttonsWrapper, swalClasses.loading);
  addClass(modal, swalClasses.loading);
  confirmButton.disabled = true;
  cancelButton.disabled = true;

  modal.setAttribute('aria-busy', true);
  modal.focus();
};

/**
 * Is valid parameter
 * @param {String} paramName
 */
sweetAlert.isValidParameter = function (paramName) {
  return defaultParams.hasOwnProperty(paramName) || paramName === 'extraParams';
};

/**
* Set default params for each popup
* @param {Object} userParams
*/
sweetAlert.setDefaults = function (userParams) {
  if (!userParams || (typeof userParams === 'undefined' ? 'undefined' : _typeof(userParams)) !== 'object') {
    return error('the argument for setDefaults() is required and has to be a object');
  }

  for (var param in userParams) {
    if (!sweetAlert.isValidParameter(param)) {
      warn('Unknown parameter "' + param + '"');
      delete userParams[param];
    }
  }

  _extends(modalParams, userParams);
};

/**
 * Reset default params for each popup
 */
sweetAlert.resetDefaults = function () {
  modalParams = _extends({}, defaultParams);
};

sweetAlert.noop = function () {};

sweetAlert.version = '6.10.3';

sweetAlert.default = sweetAlert;

return sweetAlert;

})));
if (window.Sweetalert2) window.sweetAlert = window.swal = window.Sweetalert2;


/***/ }),

/***/ "../../../../sweetalert2/dist/sweetalert2.min.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body.swal2-shown{overflow-y:hidden}body.swal2-iosfix{position:fixed;left:0;right:0}.swal2-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:fixed;top:0;left:0;bottom:0;right:0;padding:10px;background-color:transparent;z-index:1060}.swal2-container.swal2-fade{transition:background-color .1s}.swal2-container.swal2-shown{background-color:rgba(0,0,0,.4)}.swal2-modal{background-color:#fff;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;border-radius:5px;box-sizing:border-box;text-align:center;margin:auto;overflow-x:hidden;overflow-y:auto;display:none;position:relative;max-width:100%}.swal2-modal:focus{outline:0}.swal2-modal.swal2-loading{overflow-y:hidden}.swal2-modal .swal2-title{color:#595959;font-size:30px;text-align:center;font-weight:600;text-transform:none;position:relative;margin:0 0 .4em;padding:0;display:block;word-wrap:break-word}.swal2-modal .swal2-buttonswrapper{margin-top:15px}.swal2-modal .swal2-buttonswrapper:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4;cursor:no-drop}.swal2-modal .swal2-buttonswrapper.swal2-loading .swal2-styled.swal2-confirm{box-sizing:border-box;border:4px solid transparent;border-color:transparent;width:40px;height:40px;padding:0;margin:7.5px;vertical-align:top;background-color:transparent!important;color:transparent;cursor:default;border-radius:100%;-webkit-animation:rotate-loading 1.5s linear 0s infinite normal;animation:rotate-loading 1.5s linear 0s infinite normal;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-modal .swal2-buttonswrapper.swal2-loading .swal2-styled.swal2-cancel{margin-left:30px;margin-right:30px}.swal2-modal .swal2-buttonswrapper.swal2-loading :not(.swal2-styled).swal2-confirm::after{display:inline-block;content:'';margin-left:5px;vertical-align:-1px;height:15px;width:15px;border:3px solid #999;box-shadow:1px 1px 1px #fff;border-right-color:transparent;border-radius:50%;-webkit-animation:rotate-loading 1.5s linear 0s infinite normal;animation:rotate-loading 1.5s linear 0s infinite normal}.swal2-modal .swal2-styled{border:0;border-radius:3px;box-shadow:none;color:#fff;cursor:pointer;font-size:17px;font-weight:500;margin:15px 5px 0;padding:10px 32px}.swal2-modal .swal2-styled:focus{outline:0;box-shadow:0 0 0 2px #fff,0 0 0 4px rgba(50,100,150,.4)}.swal2-modal .swal2-image{margin:20px auto;max-width:100%}.swal2-modal .swal2-close{background:0 0;border:0;margin:0;padding:0;width:38px;height:40px;font-size:36px;line-height:40px;font-family:serif;position:absolute;top:5px;right:8px;cursor:pointer;color:#ccc;transition:color .1s ease}.swal2-modal .swal2-close:hover{color:#d55}.swal2-modal>.swal2-checkbox,.swal2-modal>.swal2-file,.swal2-modal>.swal2-input,.swal2-modal>.swal2-radio,.swal2-modal>.swal2-select,.swal2-modal>.swal2-textarea{display:none}.swal2-modal .swal2-content{font-size:18px;text-align:center;font-weight:300;position:relative;float:none;margin:0;padding:0;line-height:normal;color:#545454;word-wrap:break-word}.swal2-modal .swal2-checkbox,.swal2-modal .swal2-file,.swal2-modal .swal2-input,.swal2-modal .swal2-radio,.swal2-modal .swal2-select,.swal2-modal .swal2-textarea{margin:20px auto}.swal2-modal .swal2-file,.swal2-modal .swal2-input,.swal2-modal .swal2-textarea{width:100%;box-sizing:border-box;font-size:18px;border-radius:3px;border:1px solid #d9d9d9;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);transition:border-color .3s,box-shadow .3s}.swal2-modal .swal2-file.swal2-inputerror,.swal2-modal .swal2-input.swal2-inputerror,.swal2-modal .swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-modal .swal2-file:focus,.swal2-modal .swal2-input:focus,.swal2-modal .swal2-textarea:focus{outline:0;border:1px solid #b4dbed;box-shadow:0 0 3px #c4e6f5}.swal2-modal .swal2-file::-webkit-input-placeholder,.swal2-modal .swal2-input::-webkit-input-placeholder,.swal2-modal .swal2-textarea::-webkit-input-placeholder{color:#ccc}.swal2-modal .swal2-file:-ms-input-placeholder,.swal2-modal .swal2-input:-ms-input-placeholder,.swal2-modal .swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-modal .swal2-file::-ms-input-placeholder,.swal2-modal .swal2-input::-ms-input-placeholder,.swal2-modal .swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-modal .swal2-file::-webkit-input-placeholder,.swal2-modal .swal2-input::-webkit-input-placeholder,.swal2-modal .swal2-textarea::-webkit-input-placeholder{color:#ccc}.swal2-modal .swal2-file:-ms-input-placeholder,.swal2-modal .swal2-input:-ms-input-placeholder,.swal2-modal .swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-modal .swal2-file::placeholder,.swal2-modal .swal2-input::placeholder,.swal2-modal .swal2-textarea::placeholder{color:#ccc}.swal2-modal .swal2-range input{float:left;width:80%}.swal2-modal .swal2-range output{float:right;width:20%;font-size:20px;font-weight:600;text-align:center}.swal2-modal .swal2-range input,.swal2-modal .swal2-range output{height:43px;line-height:43px;vertical-align:middle;margin:20px auto;padding:0}.swal2-modal .swal2-input{height:43px;padding:0 12px}.swal2-modal .swal2-input[type=number]{max-width:150px}.swal2-modal .swal2-file{font-size:20px}.swal2-modal .swal2-textarea{height:108px;padding:12px}.swal2-modal .swal2-select{color:#545454;font-size:inherit;padding:5px 10px;min-width:40%;max-width:100%}.swal2-modal .swal2-radio{border:0}.swal2-modal .swal2-radio label:not(:first-child){margin-left:20px}.swal2-modal .swal2-radio input,.swal2-modal .swal2-radio span{vertical-align:middle}.swal2-modal .swal2-radio input{margin:0 3px 0 0}.swal2-modal .swal2-checkbox{color:#545454}.swal2-modal .swal2-checkbox input,.swal2-modal .swal2-checkbox span{vertical-align:middle}.swal2-modal .swal2-validationerror{background-color:#f0f0f0;margin:0 -20px;overflow:hidden;padding:10px;color:gray;font-size:16px;font-weight:300;display:none}.swal2-modal .swal2-validationerror::before{content:'!';display:inline-block;width:24px;height:24px;border-radius:50%;background-color:#ea7d7d;color:#fff;line-height:24px;text-align:center;margin-right:10px}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}.swal2-icon{width:80px;height:80px;border:4px solid transparent;border-radius:50%;margin:20px auto 30px;padding:0;position:relative;box-sizing:content-box;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon.swal2-error{border-color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;display:block}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}.swal2-icon.swal2-warning{font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#f8bb86;border-color:#facea8;font-size:60px;line-height:80px;text-align:center}.swal2-icon.swal2-info{font-family:'Open Sans',sans-serif;color:#3fc3ee;border-color:#9de0f6;font-size:60px;line-height:80px;text-align:center}.swal2-icon.swal2-question{font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#87adbd;border-color:#c9dae1;font-size:60px;line-height:80px;text-align:center}.swal2-icon.swal2-success{border-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{border-radius:50%;position:absolute;width:60px;height:120px;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px}.swal2-icon.swal2-success .swal2-success-ring{width:80px;height:80px;border:4px solid rgba(165,220,134,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal2-icon.swal2-success .swal2-success-fix{width:7px;height:90px;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-progresssteps{font-weight:600;margin:0 0 20px;padding:0}.swal2-progresssteps li{display:inline-block;position:relative}.swal2-progresssteps .swal2-progresscircle{background:#3085d6;border-radius:2em;color:#fff;height:2em;line-height:2em;text-align:center;width:2em;z-index:20}.swal2-progresssteps .swal2-progresscircle:first-child{margin-left:0}.swal2-progresssteps .swal2-progresscircle:last-child{margin-right:0}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep{background:#3085d6}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep~.swal2-progresscircle{background:#add8e6}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep~.swal2-progressline{background:#add8e6}.swal2-progresssteps .swal2-progressline{background:#3085d6;height:.4em;margin:0 -1px;z-index:10}[class^=swal2]{-webkit-tap-highlight-color:transparent}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes hideSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@keyframes hideSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}.swal2-show{-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s}.swal2-show.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-hide{-webkit-animation:hideSweetAlert .15s forwards;animation:hideSweetAlert .15s forwards}.swal2-hide.swal2-noanimation{-webkit-animation:none;animation:none}@-webkit-keyframes animate-success-tip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}100%{width:25px;left:14px;top:45px}}@keyframes animate-success-tip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}100%{width:25px;left:14px;top:45px}}@-webkit-keyframes animate-success-long{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}100%{width:47px;right:8px;top:38px}}@keyframes animate-success-long{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}100%{width:47px;right:8px;top:38px}}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}.swal2-animate-success-line-tip{-webkit-animation:animate-success-tip .75s;animation:animate-success-tip .75s}.swal2-animate-success-line-long{-webkit-animation:animate-success-long .75s;animation:animate-success-long .75s}.swal2-success.swal2-animate-success-icon .swal2-success-circular-line-right{-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}@-webkit-keyframes animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}@keyframes animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}.swal2-animate-error-icon{-webkit-animation:animate-error-icon .5s;animation:animate-error-icon .5s}@-webkit-keyframes animate-x-mark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}100%{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animate-x-mark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}100%{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal2-animate-x-mark{-webkit-animation:animate-x-mark .5s;animation:animate-x-mark .5s}@-webkit-keyframes rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ })

});
//# sourceMappingURL=modal.module.chunk.js.map