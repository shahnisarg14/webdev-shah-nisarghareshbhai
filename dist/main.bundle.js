webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_widget_safePipe__ = __webpack_require__("../../../../../src/app/components/widget/safePipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ngx_quill_editor__ = __webpack_require__("../../../../ngx-quill-editor/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_widget_widget_edit_widget_html_widget_html_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_widget_widget_edit_widget_text_widget_text_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_flickr_service_client__ = __webpack_require__("../../../../../src/app/services/flickr.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        // Declare components here
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__["a" /* TestComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_page_page_list_page_list_component__["a" /* PageListComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_page_page_new_page_new_component__["a" /* PageNewComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_widget_safePipe__["a" /* SafePipe */],
            __WEBPACK_IMPORTED_MODULE_26__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */],
            __WEBPACK_IMPORTED_MODULE_31__components_widget_widget_edit_widget_text_widget_text_component__["a" /* WidgetTextComponent */],
            __WEBPACK_IMPORTED_MODULE_34__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__["a" /* FlickrImageSearchComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* Routing */],
            __WEBPACK_IMPORTED_MODULE_29_ngx_quill_editor__["a" /* QuillEditorModule */]
        ],
        // Client Side services here
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__services_test_service_client__["a" /* TestService */],
            __WEBPACK_IMPORTED_MODULE_12__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_14__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_18__services_page_service_client__["a" /* PageService */],
            __WEBPACK_IMPORTED_MODULE_24__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_32__services_shared_service_client__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_33__services_auth_guard_service__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_35__services_flickr_service_client__["a" /* FlickrService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_edit_widget_html_widget_html_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_text_widget_text_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/**
 * Created by sesha on 7/26/17.
 */






















var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_2__components_test_test_component__["a" /* TestComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_5__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_4__components_user_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/:uid', component: __WEBPACK_IMPORTED_MODULE_4__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'user/:uid/website', component: __WEBPACK_IMPORTED_MODULE_6__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */] },
    { path: 'user/:uid/website/new', component: __WEBPACK_IMPORTED_MODULE_8__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */] },
    { path: 'user/:uid/website/:wid', component: __WEBPACK_IMPORTED_MODULE_7__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */] },
    { path: 'user/:uid/website/:wid/page', component: __WEBPACK_IMPORTED_MODULE_9__components_page_page_list_page_list_component__["a" /* PageListComponent */] },
    { path: 'user/:uid/website/:wid/page/new', component: __WEBPACK_IMPORTED_MODULE_10__components_page_page_new_page_new_component__["a" /* PageNewComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid', component: __WEBPACK_IMPORTED_MODULE_11__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/html', component: __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/youtube', component: __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/image', component: __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/header', component: __WEBPACK_IMPORTED_MODULE_16__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/text', component: __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_text_widget_text_component__["a" /* WidgetTextComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/image/search', component: __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__["a" /* FlickrImageSearchComponent */] },
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n\r\n  <h1>\r\n    Angular 4 MEAN stack app\r\n  </h1>\r\n\r\n\r\n  <h3>\r\n    App works\r\n  </h3>\r\n\r\n\r\n  <h4>\r\n    <a href=\"test\">Test MongoDB</a>\r\n  </h4>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"navbar-text pull-left\">\r\n          <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page']\"\r\n             class=\"navbar-link\">\r\n            <span class=\"glyphicon glyphicon-chevron-left colorWhite\"></span>\r\n          </a>\r\n        </div>\r\n\r\n        <div class=\" navbar-header hidden-xs\">\r\n          <a class=\"navbar-brand\">\r\n            <b class=\"colorWhite\">Pages</b>\r\n          </a>\r\n        </div>\r\n\r\n        <div class=\"navbar-text pull-right hidden-xs\">\r\n          <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', 'new']\"\r\n             class=\"navbar-link\">\r\n            <span class=\"glyphicon glyphicon-plus colorWhite\"></span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-8\">\r\n        <div class=\" navbar-header pull-left\">\r\n          <a class=\"navbar-brand\">\r\n            <b class=\"colorWhite\">Edit Page</b>\r\n          </a>\r\n        </div>\r\n\r\n        <div class=\"navbar-text pull-right\">\r\n          <a (click)=\"updatePage(name, description)\"\r\n             class=\"navbar-link\">\r\n            <span class=\"glyphicon glyphicon-ok colorWhite\"></span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-sm-4 hidden-xs\">\r\n      <ul class=\"list-group\">\r\n        <div *ngFor=\"let page of fetchPages()\">\r\n          <li class=\"list-group-item\">\r\n            <a [routerLink]=\"['/user', this.userId, 'website', this.websiteId, 'page', page._id, 'widget']\">{{page.name}}</a>\r\n            <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', page._id]\"\r\n               class=\"pull-right\">\r\n              <span class=\"glyphicon-cog glyphicon\"></span>\r\n            </a>\r\n          </li>\r\n        </div>\r\n      </ul>\r\n    </div>\r\n\r\n    <div class=\"col-sm-8\">\r\n      <label>Name</label>\r\n      <input [(ngModel)]=\"name\"\r\n             value=\"Blog post\"\r\n             placeholder=\"Page Name\"\r\n             type=\"text\"\r\n             id=\"pagename\"\r\n             class=\"form-control\"/>\r\n      <label>Title</label>\r\n      <input [(ngModel)]=\"description\"\r\n             value=\"Favorite blog\"\r\n             placeholder=\"Page Title\"\r\n             type=\"text\"\r\n             id=\"pagetitle\"\r\n             class=\"form-control\"/>\r\n      <a (click)=\"deletePage()\"\r\n         class=\"btn btn-danger btn-block\">\r\n        Delete\r\n      </a>\r\n      <div *ngIf=\"errorFlag\"\r\n           class=\"alert alert-danger\">\r\n        {{errorMsg}}\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"navbar-text pull-right\">\r\n      <a [routerLink]=\"['/user', userId]\"\r\n         class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-user colorWhite\"></span>\r\n      </a>\r\n    </div>\r\n\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_page_model_client__ = __webpack_require__("../../../../../src/app/models/page.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageEditComponent = (function () {
    function PageEditComponent(pageService, route, router) {
        this.pageService = pageService;
        this.route = route;
        this.router = router;
        this.errorMsg = 'Name field cannot be empty!';
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.pageService.findPageById(_this.pageId)
                .subscribe(function (page) {
                _this.page = page;
                _this.name = _this.page.name;
                _this.description = _this.page.description;
            });
            _this.pageService.findPagesByWebsiteId(_this.websiteId)
                .subscribe(function (pages) {
                _this.pages = pages;
            });
        });
    };
    PageEditComponent.prototype.fetchPages = function () {
        return this.pages;
    };
    PageEditComponent.prototype.updatePage = function (name, description) {
        var _this = this;
        if ((name === undefined) || (name === '') || (name === null)) {
            this.errorFlag = true;
            return;
        }
        var page = new __WEBPACK_IMPORTED_MODULE_3__models_page_model_client__["a" /* Page */](this.pageId, name, this.websiteId, description);
        this.pageService.updatePage(this.pageId, page)
            .subscribe(function (page1) {
            _this.page = page1;
            _this.name = _this.page.name;
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page']);
        });
    };
    PageEditComponent.prototype.deletePage = function () {
        var _this = this;
        this.pageService.deletePage(this.pageId)
            .subscribe(function (pages) {
            _this.pages = pages;
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page']);
        });
    };
    return PageEditComponent;
}());
PageEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-edit',
        template: __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], PageEditComponent);

var _a, _b, _c;
//# sourceMappingURL=page-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"navbar-text pull-left\">\r\n      <a [routerLink]=\"['/user', userId, 'website']\"\r\n         class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-chevron-left colorWhite\"></span>\r\n      </a>\r\n    </div>\r\n\r\n    <a class=\"navbar-brand\">\r\n      <b class=\"colorWhite\">Pages</b>\r\n    </a>\r\n\r\n    <div class=\"navbar-text pull-right\">\r\n      <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', 'new']\"\r\n         class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-plus colorWhite\"></span>\r\n      </a>\r\n    </div>\r\n\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container-fluid\">\r\n  <ul class=\"list-group\">\r\n    <div *ngFor=\"let page of fetchPages()\">\r\n      <li class=\"list-group-item\">\r\n        <a [routerLink]=\"['/user', this.userId, 'website', this.websiteId, 'page', page._id, 'widget']\">{{page.name}}</a>\r\n        <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', page._id]\"\r\n           class=\"pull-right\">\r\n          <span class=\"glyphicon-cog glyphicon\"></span>\r\n        </a>\r\n      </li>\r\n    </div>\r\n  </ul>\r\n</div>\r\n\r\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"navbar-text pull-right\">\r\n      <a [routerLink]=\"['/user', userId]\"\r\n         class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-user colorWhite\"></span>\r\n      </a>\r\n    </div>\r\n\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageListComponent = (function () {
    function PageListComponent(pageService, route) {
        this.pageService = pageService;
        this.route = route;
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.pageService.findPagesByWebsiteId(_this.websiteId)
                .subscribe(function (pages) {
                _this.pages = pages;
            });
        });
    };
    PageListComponent.prototype.fetchPages = function () {
        return this.pages;
    };
    return PageListComponent;
}());
PageListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-list',
        template: __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], PageListComponent);

var _a, _b;
//# sourceMappingURL=page-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"navbar-text pull-left\">\r\n          <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page']\"\r\n             class=\"navbar-link\">\r\n            <span class=\"glyphicon glyphicon-chevron-left colorWhite\"></span>\r\n          </a>\r\n        </div>\r\n\r\n        <div class=\" navbar-header hidden-xs\">\r\n          <a class=\"navbar-brand\">\r\n            <b class=\"colorWhite\">Pages</b>\r\n          </a>\r\n        </div>\r\n\r\n        <div class=\"navbar-text pull-right hidden-xs\">\r\n          <a class=\"navbar-link\">\r\n            <span class=\"glyphicon glyphicon-plus colorWhite\"></span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-8\">\r\n        <div class=\" navbar-header pull-left\">\r\n          <a class=\"navbar-brand\">\r\n            <b class=\"colorWhite\">New Page</b>\r\n          </a>\r\n        </div>\r\n\r\n        <div class=\"navbar-text pull-right\">\r\n          <a (click)=\"createPage(name, description)\"\r\n             class=\"navbar-link\">\r\n            <span class=\"glyphicon glyphicon-ok colorWhite\"></span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-sm-4 hidden-xs\">\r\n      <ul class=\"list-group\">\r\n        <div *ngFor=\"let page of fetchPages()\">\r\n          <li class=\"list-group-item\">\r\n            <a [routerLink]=\"['/user', this.userId, 'website', this.websiteId, 'page', page._id, 'widget']\">{{page.name}}</a>\r\n            <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', page._id]\"\r\n               class=\"pull-right\">\r\n              <span class=\"glyphicon-cog glyphicon\"></span>\r\n            </a>\r\n          </li>\r\n        </div>\r\n      </ul>\r\n    </div>\r\n\r\n    <div class=\"col-sm-8\">\r\n      <label>Name</label>\r\n      <input [(ngModel)]=\"name\"\r\n             placeholder=\"Page Name\"\r\n             type=\"text\"\r\n             id=\"pagename\"\r\n             class=\"form-control\"/>\r\n      <label>Title</label>\r\n      <input [(ngModel)]=\"description\"\r\n             placeholder=\"Page Title\"\r\n             type=\"text\"\r\n             id=\"pagetitle\"\r\n             class=\"form-control\"/>\r\n      <div *ngIf=\"errorFlag\"\r\n           class=\"alert alert-danger\">\r\n        {{errorMsg}}\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"navbar-text pull-right\">\r\n      <a [routerLink]=\"['/user', userId]\"\r\n         class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-user colorWhite\"></span>\r\n      </a>\r\n    </div>\r\n\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_page_model_client__ = __webpack_require__("../../../../../src/app/models/page.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageNewComponent = (function () {
    function PageNewComponent(pageService, route, router) {
        this.pageService = pageService;
        this.route = route;
        this.router = router;
        this.errorMsg = 'Name field cannot be empty!';
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.pageService.findPageById(_this.pageId)
                .subscribe(function (page) {
                _this.page = page;
            });
            _this.pageService.findPagesByWebsiteId(_this.websiteId)
                .subscribe(function (pages) {
                _this.pages = pages;
            });
        });
    };
    PageNewComponent.prototype.fetchPages = function () {
        return this.pages;
    };
    PageNewComponent.prototype.createPage = function (name, description) {
        var _this = this;
        if ((name === undefined) || (name === '') || (name === null)) {
            this.errorFlag = true;
            return;
        }
        var page = new __WEBPACK_IMPORTED_MODULE_1__models_page_model_client__["a" /* Page */]('', name, this.websiteId, description);
        this.pageService.createPage(this.websiteId, page)
            .subscribe(function (page1) {
            _this.pages = page1;
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page']);
        });
    };
    return PageNewComponent;
}());
PageNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-new',
        template: __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], PageNewComponent);

var _a, _b, _c;
//# sourceMappingURL=page-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n\r\n  <h1>Test</h1>\r\n\r\n  <div *ngIf=\"alertMessage\"\r\n       class=\"alert alert-danger\">\r\n    \"Failed to create\"\r\n  </div>\r\n\r\n  <div *ngIf=\"successMessage\"\r\n       class=\"alert alert-success\">\r\n    \"Succesfully created/deleted\"\r\n  </div>\r\n\r\n  <table class=\"table\">\r\n    <thead>\r\n    <tr>\r\n      <th>Test Message</th>\r\n      <th>&nbsp;</th>\r\n    </tr>\r\n\r\n\r\n    <tr>\r\n      <td>\r\n        <input [(ngModel)]=\"message\"\r\n               placeholder=\"message\"\r\n               class=\"form-control\"/>\r\n      </td>\r\n\r\n\r\n      <td>\r\n        <button (click)=\"createMessage()\"\r\n                class=\"btn btn-primary pull-right\">\r\n          <span class=\"glyphicon glyphicon-plus\"></span>\r\n        </button>\r\n      </td>\r\n    </tr>\r\n    </thead>\r\n\r\n\r\n    <tbody>\r\n    <tr *ngFor=\"let message of messages\">\r\n      <td>\r\n        {{message.message}}\r\n      </td>\r\n      <td>\r\n        <button (click)=\"deleteMessage(message._id)\"\r\n                class=\"btn btn-danger pull-right\">\r\n          <span class=\"glyphicon glyphicon-remove\"></span>\r\n        </button>\r\n      </td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComponent = (function () {
    function TestComponent(_testService) {
        this._testService = _testService;
        this.alertMessage = false;
        this.successMessage = false;
        this.messages = [];
    }
    TestComponent.prototype.ngOnInit = function () {
        this.findAllMessages();
    };
    TestComponent.prototype.findAllMessages = function () {
        var _this = this;
        return this._testService.findAllMessages()
            .subscribe(function (data) {
            _this.messages = data;
        });
    };
    TestComponent.prototype.createMessage = function () {
        var _this = this;
        return this._testService.createMessage(this.message)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
            _this.message = null;
        });
    };
    TestComponent.prototype.deleteMessage = function (messageId) {
        var _this = this;
        return this._testService.deleteMessage(messageId)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
        });
    };
    return TestComponent;
}());
TestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-test',
        template: __webpack_require__("../../../../../src/app/components/test/test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/test/test.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */]) === "function" && _a || Object])
], TestComponent);

var _a;
//# sourceMappingURL=test.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div *ngIf=\"errorFlag\"\r\n       class=\"alert alert-danger\">\r\n    {{errorMsg}}\r\n  </div>\r\n  <h1>Login</h1>\r\n\r\n  <input [(ngModel)]=\"username\"\r\n         placeholder=\"Username\"\r\n         type=\"text\"\r\n         id=\"username\"\r\n         class=\"form-control\"/>\r\n  <input [(ngModel)]=\"password\"\r\n         placeholder=\"Password\"\r\n         type=\"password\"\r\n         id=\"password\"\r\n         class=\"form-control\"/>\r\n  <button class=\"btn btn-primary btn-block\"\r\n          (click)=\"login(username, password)\"\r\n          [disabled]=\"!(username && password)\">\r\n    Login\r\n  </button>\r\n  <button class=\"btn btn-success btn-block\"\r\n          [routerLink]=\"['/register']\">\r\n    Register\r\n  </button>\r\n  <a href=\"/facebook/login\" class=\"btn btn-primary btn-block\">\r\n    <span class=\"fa fa-facebook\"></span>\r\n    Facebook\r\n  </a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(sharedService, userService, router) {
        this.sharedService = sharedService;
        this.userService = userService;
        this.router = router;
        this.errorMsg = 'Invalid username or password!';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        this.userService
            .login(this.username, this.password)
            .subscribe(function (user) {
            if (user) {
                _this.sharedService.user = user;
                _this.router.navigate(['/user']);
            }
            else {
                _this.errorFlag = true;
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\" navbar-header pull-left\">\r\n      <a class=\"navbar-brand\">\r\n        <b class=\"colorWhite\">Profile</b>\r\n      </a>\r\n    </div>\r\n    <div class=\"navbar-text pull-right\">\r\n      <a class=\"navbar-link\"\r\n         (click)=\"update_user(username, firstName, lastName, email)\">\r\n        <span class=\"glyphicon glyphicon-ok colorWhite\"></span>\r\n      </a>\r\n    </div>\r\n\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container-fluid\">\r\n  <div class=\"form-group\">\r\n    <label for=\"username\">\r\n      Username\r\n    </label>\r\n    <input [(ngModel)]=\"username\"\r\n           placeholder=\"username\"\r\n           type=\"text\"\r\n           id=\"username\"\r\n           class=\"form-control\"/>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"email\">\r\n      Email\r\n    </label>\r\n    <input [(ngModel)]=\"email\"\r\n           placeholder=\"email id\"\r\n           type=\"email\"\r\n           id=\"email\"\r\n           class=\"form-control\"/>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"firstname\">\r\n      First Name\r\n    </label>\r\n    <input [(ngModel)]=\"firstName\"\r\n           placeholder=\"first name\"\r\n           type=\"text\"\r\n           id=\"firstname\"\r\n           class=\"form-control\"/>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"lastname\">\r\n      Last Name\r\n    </label>\r\n    <input [(ngModel)]=\"lastName\"\r\n           placeholder=\"last name\"\r\n           type=\"text\"\r\n           id=\"lastname\"\r\n           class=\"form-control\"/>\r\n  </div>\r\n  <a class=\"btn btn-primary btn-block\"\r\n     [routerLink]=\"['/user', userId, 'website']\">\r\n    Websites\r\n  </a>\r\n  <a class=\"btn btn-danger btn-block\"\r\n     (click)=\"logout()\">\r\n    Logout\r\n  </a>\r\n</div>\r\n\r\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"navbar-text pull-right\">\r\n      <a class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-user colorWhite\"></span>\r\n      </a>\r\n    </div>\r\n\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user_model_client__ = __webpack_require__("../../../../../src/app/models/user.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = (function () {
    function ProfileComponent(sharedService, userService, route, router) {
        this.sharedService = sharedService;
        this.userService = userService;
        this.route = route;
        this.router = router;
        // user: User;
        this.user = {};
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    ProfileComponent.prototype.getUser = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.user = _this.sharedService.user || {};
            _this.userId = _this.user['_id'];
            _this.userService.findUserById(_this.userId)
                .subscribe(function (user) {
                _this.username = user.username;
                _this.firstName = user.firstName;
                _this.lastName = user.lastName;
                _this.password = user.password;
                _this.email = user.email;
            });
        });
    };
    ProfileComponent.prototype.update_user = function (userName, firstName, lastName, email) {
        var _this = this;
        var user = new __WEBPACK_IMPORTED_MODULE_3__models_user_model_client__["a" /* User */](this.userId, userName, this.password, firstName, lastName, email);
        this.userService.updateUser(this.userId, user)
            .subscribe(function (user1) {
            _this.user = user1;
        });
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (status) {
            _this.router.navigate(['/login']);
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], ProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div *ngIf=\"errorFlag\"\r\n       class=\"alert alert-danger\">\r\n    {{errorMsg}}\r\n  </div>\r\n  <h1>Register</h1>\r\n  <input [(ngModel)]=\"username\"\r\n         placeholder=\"Username\"\r\n         type=\"text\"\r\n         id=\"username\"\r\n         class=\"form-control\"/>\r\n  <input [(ngModel)]=\"password\"\r\n         placeholder=\"Password\"\r\n         type=\"password\"\r\n         id=\"password\"\r\n         class=\"form-control\"/>\r\n  <input [(ngModel)]=\"verifyPassword\"\r\n         placeholder=\"Verify Password\"\r\n         type=\"password\"\r\n         id=\"verifypassword\"\r\n         class=\"form-control\"/>\r\n  <button class=\"btn btn-primary btn-block\"\r\n          [disabled]=\"!(username && password && verifyPassword)\"\r\n          (click)=\"register(username, password, verifyPassword)\">\r\n    Register\r\n  </button>\r\n  <button class=\"btn btn-danger btn-block\"\r\n          [routerLink]=\"['/login']\">\r\n    Cancel\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user_model_client__ = __webpack_require__("../../../../../src/app/models/user.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(sharedService, userService, router) {
        this.sharedService = sharedService;
        this.userService = userService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function (username, password, verifyPassword) {
        var _this = this;
        this.userService.findUserByUsername(username)
            .subscribe(function (user1) {
            if (user1 === null) {
                if (password === verifyPassword) {
                    _this.username = username;
                    _this.password = password;
                    var newUser = new __WEBPACK_IMPORTED_MODULE_3__models_user_model_client__["a" /* User */]('', _this.username, _this.password, null, null, null);
                    /*this.userService.createUser(newUser)
                      .subscribe((user2) => {
                        this.router.navigate(['user/', user2._id]);
                      });*/
                    _this.userService.register(_this.username, _this.password)
                        .subscribe(function (user) {
                        _this.sharedService.user = user;
                        _this.router.navigate(['/user']);
                    });
                }
                else {
                    _this.errorMsg = 'Passwords do not match!';
                    _this.errorFlag = true;
                }
            }
            else {
                _this.errorMsg = 'Username already exists!';
                _this.errorFlag = true;
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"navbar-text pull-left\">\r\n          <a [routerLink]=\"['/user', userId, 'website']\"\r\n             class=\"navbar-link\">\r\n            <span class=\"glyphicon glyphicon-chevron-left colorWhite\"></span>\r\n          </a>\r\n        </div>\r\n\r\n        <div class=\" navbar-header hidden-xs\">\r\n          <a class=\"navbar-brand\">\r\n            <b class=\"colorWhite\">Websites</b>\r\n          </a>\r\n        </div>\r\n\r\n        <div class=\"navbar-text pull-right hidden-xs\">\r\n          <a [routerLink]=\"['/user', userId, 'website','new']\"\r\n             class=\"navbar-link\">\r\n            <span class=\"glyphicon glyphicon-plus colorWhite\"></span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-8\">\r\n        <div class=\" navbar-header pull-left\">\r\n          <a class=\"navbar-brand\">\r\n            <b class=\"colorWhite\">Edit Website</b></a>\r\n        </div>\r\n\r\n        <div class=\"navbar-text pull-right\">\r\n          <a (click)=\"updateWebsite(name, description)\"\r\n             class=\"navbar-link\">\r\n            <span class=\"glyphicon glyphicon-ok colorWhite\"></span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-sm-4 hidden-xs\">\r\n      <ul class=\"list-group\">\r\n        <div *ngFor=\"let website of fetchWebsites()\">\r\n          <li class=\"list-group-item\">\r\n            <a [routerLink]=\"['/user', userId, 'website', website._id, 'page']\">{{website.name}}</a>\r\n            <a [routerLink]=\"['/user', userId, 'website', website._id]\"\r\n               class=\"pull-right\">\r\n              <span class=\"glyphicon-cog glyphicon\"></span>\r\n            </a>\r\n          </li>\r\n        </div>\r\n      </ul>\r\n    </div>\r\n\r\n    <div class=\"col-sm-8\">\r\n      <label>Website Name</label>\r\n      <input [(ngModel)]=\"name\"\r\n             value=\"Blogger\"\r\n             placeholder=\"website name\"\r\n             type=\"text\"\r\n             id=\"websitename\"\r\n             class=\"form-control\"/>\r\n      <label>Website Description</label>\r\n      <textarea [(ngModel)]=\"description\"\r\n                placeholder=\"Description for your website\"\r\n                rows=\"5\"\r\n                id=\"websitedescription\"\r\n                class=\"form-control\">Blogger is a blog-publishing service that allows multi-user blogs with time-stamped entries. It was develloped by Pyra Labs, which was bought by Google in 2003.</textarea>\r\n      <a (click)=\"deleteWebsite()\"\r\n         class=\"btn btn-danger btn-block\">\r\n        Delete\r\n      </a>\r\n      <div *ngIf=\"errorFlag\"\r\n           class=\"alert alert-danger\">\r\n        {{errorMsg}}\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"navbar-text pull-right\">\r\n      <a [routerLink]=\"['/user', userId]\"\r\n         class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-user colorWhite\"></span>\r\n      </a>\r\n    </div>\r\n\r\n  </div>\r\n</nav>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_website_model_client__ = __webpack_require__("../../../../../src/app/models/website.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteEditComponent = (function () {
    function WebsiteEditComponent(websiteService, route, router) {
        this.websiteService = websiteService;
        this.route = route;
        this.router = router;
        this.errorMsg = 'Name field cannot be empty!';
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.websiteService.findWebsiteById(_this.websiteId)
                .subscribe(function (website) {
                _this.website = website;
                _this.name = _this.website.name;
                _this.description = _this.website.description;
            });
            _this.websiteService.findAllWebsitesForUser(_this.userId)
                .subscribe(function (websites) {
                _this.websites = websites;
            });
        });
    };
    WebsiteEditComponent.prototype.fetchWebsites = function () {
        return this.websites;
    };
    WebsiteEditComponent.prototype.updateWebsite = function (name, description) {
        var _this = this;
        if ((name === undefined) || (name === '') || (name === null)) {
            this.errorFlag = true;
            return;
        }
        var website = new __WEBPACK_IMPORTED_MODULE_3__models_website_model_client__["a" /* Website */](this.websiteId, name, this.userId, description);
        this.websiteService.updateWebsite(this.websiteId, website)
            .subscribe(function (website1) {
            _this.website = website1;
            _this.name = _this.website.name;
            _this.router.navigate(['user/', _this.userId, 'website']);
        });
    };
    WebsiteEditComponent.prototype.deleteWebsite = function () {
        var _this = this;
        this.websiteService.deleteWebsite(this.websiteId)
            .subscribe(function (websites) {
            _this.websites = websites;
            _this.router.navigate(['user', _this.userId, 'website']);
        });
    };
    return WebsiteEditComponent;
}());
WebsiteEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-edit',
        template: __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WebsiteEditComponent);

var _a, _b, _c;
//# sourceMappingURL=website-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"navbar-text pull-left\">\r\n      <a [routerLink]=\"['/user', userId]\"\r\n         class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-chevron-left colorWhite\"></span>\r\n      </a>\r\n    </div>\r\n\r\n    <a class=\"navbar-brand\">\r\n      <b class=\"colorWhite\">Websites</b>\r\n    </a>\r\n\r\n    <div class=\"navbar-text pull-right\">\r\n      <a [routerLink]=\"['/user', userId, 'website', 'new']\"\r\n         class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-plus colorWhite\"></span>\r\n      </a>\r\n    </div>\r\n\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container-fluid\">\r\n  <ul class=\"list-group\">\r\n    <div *ngFor=\"let website of fetchWebsites()\">\r\n      <li class=\"list-group-item\">\r\n        <a [routerLink]=\"['/user', userId, 'website', website._id, 'page']\">{{website.name}}</a>\r\n        <a [routerLink]=\"['/user', userId, 'website', website._id]\"\r\n           class=\"pull-right\">\r\n          <span class=\"glyphicon-cog glyphicon\"></span>\r\n        </a>\r\n      </li>\r\n    </div>\r\n\r\n  </ul>\r\n</div>\r\n\r\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"navbar-text pull-right\">\r\n      <a [routerLink]=\"['/user', userId]\"\r\n         class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-user colorWhite\"></span>\r\n      </a>\r\n    </div>\r\n\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsiteListComponent = (function () {
    function WebsiteListComponent(websiteService, route) {
        this.websiteService = websiteService;
        this.route = route;
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
        });
        this.websiteService.findAllWebsitesForUser(this.userId)
            .subscribe(function (websites) {
            _this.websites = websites;
        });
    };
    WebsiteListComponent.prototype.fetchWebsites = function () {
        return this.websites;
    };
    return WebsiteListComponent;
}());
WebsiteListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-list',
        template: __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], WebsiteListComponent);

var _a, _b;
//# sourceMappingURL=website-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"navbar-text pull-left\">\r\n          <a [routerLink]=\"['/user', userId, 'website']\"\r\n             class=\"navbar-link\">\r\n            <span class=\"glyphicon glyphicon-chevron-left colorWhite\"></span>\r\n          </a>\r\n        </div>\r\n\r\n        <div class=\" navbar-header hidden-xs\">\r\n          <a class=\"navbar-brand\">\r\n            <b class=\"colorWhite\">Websites</b>\r\n          </a>\r\n        </div>\r\n\r\n        <div class=\"navbar-text pull-right hidden-xs\">\r\n          <a class=\"navbar-link\">\r\n            <span class=\"glyphicon glyphicon-plus colorWhite\"></span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-8\">\r\n        <div class=\" navbar-header pull-left\">\r\n          <a class=\"navbar-brand\">\r\n            <b class=\"colorWhite\">New Website</b>\r\n          </a>\r\n        </div>\r\n\r\n        <div class=\"navbar-text pull-right\">\r\n          <a (click)=\"createWebsite(name, description)\"\r\n             class=\"navbar-link\">\r\n            <span class=\"glyphicon glyphicon-ok colorWhite\"></span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-sm-4 hidden-xs\">\r\n      <ul class=\"list-group\">\r\n        <div *ngFor=\"let website of fetchWebsites()\">\r\n          <li class=\"list-group-item\">\r\n            <a [routerLink]=\"['/user', userId, 'website', website._id, 'page']\">{{website.name}}</a>\r\n            <a [routerLink]=\"['/user', userId, 'website', website._id]\"\r\n               class=\"pull-right\">\r\n              <span class=\"glyphicon-cog glyphicon\"></span>\r\n            </a>\r\n          </li>\r\n        </div>\r\n      </ul>\r\n    </div>\r\n\r\n    <div class=\"col-sm-8\">\r\n      <label>Name</label>\r\n      <input [(ngModel)]=\"name\"\r\n             placeholder=\"Name\"\r\n             type=\"text\"\r\n             id=\"websitename\"\r\n             class=\"form-control\"/>\r\n      <label>Description</label>\r\n      <textarea [(ngModel)]=\"description\"\r\n                placeholder=\"Description for your website\"\r\n                rows=\"5\"\r\n                id=\"websitedescription\"\r\n                class=\"form-control\"></textarea>\r\n      <div *ngIf=\"errorFlag\"\r\n           class=\"alert alert-danger\">\r\n        {{errorMsg}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"navbar-text pull-right\">\r\n      <a [routerLink]=\"['/user', userId]\"\r\n         class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-user colorWhite\"></span>\r\n      </a>\r\n    </div>\r\n\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_website_model_client__ = __webpack_require__("../../../../../src/app/models/website.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteNewComponent = (function () {
    function WebsiteNewComponent(websiteService, route, router) {
        this.websiteService = websiteService;
        this.route = route;
        this.router = router;
        this.errorMsg = 'Name field cannot be empty!';
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
        });
        this.websiteService.findAllWebsitesForUser(this.userId)
            .subscribe(function (websites) {
            _this.websites = websites;
        });
    };
    WebsiteNewComponent.prototype.fetchWebsites = function () {
        return this.websites;
    };
    WebsiteNewComponent.prototype.createWebsite = function (name, description) {
        var _this = this;
        if ((name === undefined) || (name === '') || (name === null)) {
            this.errorFlag = true;
            return;
        }
        var website = new __WEBPACK_IMPORTED_MODULE_3__models_website_model_client__["a" /* Website */]('', name, this.userId, description);
        this.websiteService.createWebsite(this.userId, website)
            .subscribe(function (website1) {
            if (website1) {
                _this.router.navigate(['/user', _this.userId, 'website']);
            }
        });
    };
    return WebsiteNewComponent;
}());
WebsiteNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-new',
        template: __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WebsiteNewComponent);

var _a, _b, _c;
//# sourceMappingURL=website-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/safePipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    return SafePipe;
}());
SafePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({ name: 'safe' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _a || Object])
], SafePipe);

var _a;
//# sourceMappingURL=safePipe.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"navbar-text pull-left\">\r\n      <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page']\"\r\n         class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-chevron-left colorWhite\"></span>\r\n      </a>\r\n    </div>\r\n\r\n    <a class=\"navbar-brand\">\r\n      <b class=\"colorWhite\">Choose Widget</b>\r\n    </a>\r\n\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container-fluid\">\r\n\r\n  <ul class=\"list-group\">\r\n    <li class=\"list-group-item\">\r\n      <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', 'new', 'header']\">\r\n        <span class = \"text text-info\">Header</span>\r\n      </a>\r\n    </li>\r\n\r\n    <li class=\"list-group-item\">\r\n      <a>Label</a>\r\n    </li>\r\n\r\n    <li class=\"list-group-item\">\r\n      <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', 'new', 'html']\">\r\n        <span class = \"text text-info\">HTML</span>\r\n      </a>\r\n    </li>\r\n\r\n    <li class=\"list-group-item\">\r\n      <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', 'new', 'text']\">\r\n        <span class = \"text text-info\">Text</span>\r\n      </a>\r\n    </li>\r\n\r\n    <li class=\"list-group-item\">\r\n      <a>Link</a>\r\n    </li>\r\n\r\n    <li class=\"list-group-item\">\r\n      <a>Button</a>\r\n    </li>\r\n\r\n    <li class=\"list-group-item\">\r\n      <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', 'new', 'image']\">\r\n        <span class = \"text text-info\">Image</span>\r\n      </a>\r\n    </li>\r\n\r\n    <li class=\"list-group-item\">\r\n      <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', 'new', 'youtube']\">\r\n        <span class = \"text text-info\">Youtube</span>\r\n      </a>\r\n    </li>\r\n\r\n    <li class=\"list-group-item\">\r\n      <a>Data Table</a>\r\n    </li>\r\n\r\n    <li class=\"list-group-item\">\r\n      <a>Repeater</a>\r\n    </li>\r\n  </ul>\r\n\r\n</div>\r\n\r\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"navbar-text pull-right\">\r\n      <a [routerLink]=\"['/user', userId]\"\r\n         class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-user colorWhite\"></span>\r\n      </a>\r\n    </div>\r\n\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetChooserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetChooserComponent = (function () {
    function WidgetChooserComponent(widgetService, route, router) {
        this.widgetService = widgetService;
        this.route = route;
        this.router = router;
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
        });
    };
    return WidgetChooserComponent;
}());
WidgetChooserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-chooser',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetChooserComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-chooser.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"widgetType\">\r\n\r\n  <div *ngSwitchCase=\"'HEADING'\">\r\n    <app-widget-header></app-widget-header>\r\n  </div>\r\n\r\n  <div *ngSwitchCase=\"'IMAGE'\">\r\n    <app-widget-image></app-widget-image>\r\n  </div>\r\n\r\n  <div *ngSwitchCase=\"'YOUTUBE'\">\r\n    <app-widget-youtube></app-widget-youtube>\r\n  </div>\r\n\r\n  <div *ngSwitchCase=\"'HTML'\">\r\n    <app-widget-html></app-widget-html>\r\n  </div>\r\n\r\n  <div *ngSwitchCase=\"'TEXT'\">\r\n    <app-widget-text></app-widget-text>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetEditComponent = (function () {
    function WidgetEditComponent(widgetService, route, router) {
        this.widgetService = widgetService;
        this.route = route;
        this.router = router;
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
        });
        this.widgetService.findWidgetById(this.widgetId)
            .subscribe(function (widget) {
            _this.widget = widget;
            _this.widgetType = _this.widget.widgetType;
        });
        this.widgetService.findWidgetsByPageId(this.pageId)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
        });
    };
    return WidgetEditComponent;
}());
WidgetEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-edit',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetEditComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!editFlag\">\r\n<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"navbar-text pull-left\">\r\n      <a [routerLink]=\"['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']\"\r\n         class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-chevron-left colorWhite\"></span>\r\n      </a>\r\n    </div>\r\n\r\n    <a class=\"navbar-brand\">\r\n      <b class=\"colorWhite\">Widget Edit</b>\r\n    </a>\r\n\r\n    <div class=\"navbar-text pull-right\">\r\n      <a (click)=\"updateHeader(text, size)\"\r\n         class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-ok colorWhite\"></span>\r\n      </a>\r\n    </div>\r\n\r\n  </div>\r\n</nav>\r\n</div>\r\n\r\n<div [hidden]=\"editFlag\">\r\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\r\n    <div class=\"container-fluid\">\r\n\r\n      <div class=\"navbar-text pull-left\">\r\n        <a [routerLink]=\"['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']\"\r\n           class=\"navbar-link\">\r\n          <span class=\"glyphicon glyphicon-chevron-left colorWhite\"></span>\r\n        </a>\r\n      </div>\r\n\r\n      <a class=\"navbar-brand\">\r\n        <b class=\"colorWhite\">Widget Edit</b>\r\n      </a>\r\n\r\n      <div class=\"navbar-text pull-right\">\r\n        <a (click)=\"createHeader(text, size)\"\r\n           class=\"navbar-link\">\r\n          <span class=\"glyphicon glyphicon-ok colorWhite\"></span>\r\n        </a>\r\n      </div>\r\n\r\n    </div>\r\n  </nav>\r\n</div>\r\n\r\n<div class=\"container-fluid\">\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"name\">\r\n      Name\r\n    </label>\r\n    <input value=\"Heading\"\r\n           placeholder=\"Name of heading\"\r\n           type=\"text\"\r\n           id=\"name\"\r\n           class=\"form-control\"/>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"text\">\r\n      Text\r\n    </label>\r\n    <input [(ngModel)]=\"text\"\r\n           value=\"GIZMODO\"\r\n           placeholder=\"widget text\"\r\n           type=\"text\"\r\n           id=\"text\"\r\n           class=\"form-control\"/>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label>\r\n      Size\r\n    </label>\r\n    <input min=\"1\"\r\n           max=\"6\"\r\n           [(ngModel)]=\"size\"\r\n           value=\"3\"\r\n           placeholder=\"3\"\r\n           type=\"number\"\r\n           id=\"size\"\r\n           class=\"form-control\"/>\r\n  </div>\r\n\r\n  <div *ngIf=\"errorFlag\"\r\n       class=\"alert alert-danger\">\r\n    {{errorMsg}}\r\n  </div>\r\n\r\n  <a (click)=\"deleteHeader(widgetId)\"\r\n     class=\"btn btn-danger btn-block\">\r\n    Delete\r\n  </a>\r\n\r\n</div>\r\n\r\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"navbar-text pull-right\">\r\n      <a [routerLink]=\"['/user', userId]\"\r\n         class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-user colorWhite\"></span>\r\n      </a>\r\n    </div>\r\n\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_widget_model_client__ = __webpack_require__("../../../../../src/app/models/widget.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetHeaderComponent = (function () {
    function WidgetHeaderComponent(widgetService, router, route) {
        this.widgetService = widgetService;
        this.router = router;
        this.route = route;
        this.errorMsg = '';
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.editFlag = false;
        });
        this.widgetService.findWidgetById(this.widgetId)
            .subscribe(function (widget) {
            _this.widget = widget;
            _this.widgetType = _this.widget.widgetType;
            _this.text = _this.widget.text;
            _this.size = _this.widget.size;
            _this.editFlag = true;
        });
    };
    WidgetHeaderComponent.prototype.updateHeader = function (text, size) {
        var _this = this;
        if (((size < 1) || (size > 6))) {
            this.errorMsg = 'Size should be in between 1 to 6!';
            this.errorFlag = true;
            return;
        }
        if ((text === undefined) || (text === null) || (text === '')) {
            this.errorMsg = 'Text field should not be empty!';
            this.errorFlag = true;
            return;
        }
        var updatedHeader = new __WEBPACK_IMPORTED_MODULE_3__models_widget_model_client__["a" /* Widget */](this.widgetId, 'HEADING', this.pageId, size, null, text, null, null, null, null);
        this.widgetService.updateWidget(this.widgetId, updatedHeader)
            .subscribe(function (widget) {
            _this.widget = widget;
            _this.router.navigate(['user/', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetHeaderComponent.prototype.deleteHeader = function (_id) {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function () {
            _this.router.navigate(['user/', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetHeaderComponent.prototype.createHeader = function (text, size) {
        var _this = this;
        if (((size < 1) || (size > 6))) {
            this.errorMsg = 'Size should be in between 1 to 6!';
            this.errorFlag = true;
            return;
        }
        if ((text === undefined) || (text === null) || (text === '')) {
            this.errorMsg = 'Text field should not be empty!';
            this.errorFlag = true;
            return;
        }
        var widget = new __WEBPACK_IMPORTED_MODULE_3__models_widget_model_client__["a" /* Widget */]('', 'HEADING', this.pageId, size, null, text, null, null, null, null);
        this.widgetService
            .createWidget(this.pageId, widget)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
            _this.router.navigate(['/user', _this.userId, 'website',
                _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    return WidgetHeaderComponent;
}());
WidgetHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-header',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], WidgetHeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html":
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!editFlag\">\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <div class=\"navbar-text pull-left\">\n      <a [routerLink]=\"['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left colorWhite\"></span>\n      </a>\n    </div>\n\n    <a class=\"navbar-brand\">\n      <b class=\"colorWhite\">Widget Edit</b>\n    </a>\n\n    <div class=\"navbar-text pull-right\">\n      <a (click)=\"updateHTML(text, name)\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok colorWhite\"></span>\n      </a>\n    </div>\n\n  </div>\n</nav>\n</div>\n\n<div [hidden]=\"editFlag\">\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n\n      <div class=\"navbar-text pull-left\">\n        <a [routerLink]=\"['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left colorWhite\"></span>\n        </a>\n      </div>\n\n      <a class=\"navbar-brand\">\n        <b class=\"colorWhite\">Widget Edit</b>\n      </a>\n\n      <div class=\"navbar-text pull-right\">\n        <a (click)=\"createHTML(text, name)\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok colorWhite\"></span>\n        </a>\n      </div>\n\n    </div>\n  </nav>\n</div>\n\n\n<div class=\"container-fluid\">\n\n  <div class=\"form-group\">\n    <label for=\"name\">\n      Name\n    </label>\n    <input value=\"Text\"\n           placeholder=\"Enter text here\"\n           type=\"text\"\n           id=\"name\"\n           class=\"form-control\"/>\n  </div>\n\n  <div class=\"form-group\">\n    <label>Text</label>\n    <quill-editor [(ngModel)]=\"text\" name=\"text\"></quill-editor>\n  </div>\n\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <a (click)=\"deleteHTML()\"\n     class=\"btn btn-danger btn-block\">\n    Delete\n  </a>\n\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId]\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-user colorWhite\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHtmlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_widget_model_client__ = __webpack_require__("../../../../../src/app/models/widget.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetHtmlComponent = (function () {
    function WidgetHtmlComponent(widgetService, router, route) {
        this.widgetService = widgetService;
        this.router = router;
        this.route = route;
    }
    WidgetHtmlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            _this.editFlag = false;
        });
        this.widgetService.findWidgetById(this.widgetId)
            .subscribe(function (widget) {
            _this.widget = widget;
            _this.widgetType = _this.widget.widgetType;
            _this.text = _this.widget.text;
            _this.editFlag = true;
        });
    };
    WidgetHtmlComponent.prototype.updateHTML = function (text, name) {
        var _this = this;
        if ((text === undefined) || (text === null) || (text === '')) {
            this.errorMsg = 'Text field should not be empty!';
            this.errorFlag = true;
            return;
        }
        var updatedHTML = new __WEBPACK_IMPORTED_MODULE_3__models_widget_model_client__["a" /* Widget */](this.widgetId, 'HTML', this.pageId, null, null, text, null, null, null, null);
        this.widgetService.updateWidget(this.widgetId, updatedHTML)
            .subscribe(function (widget) {
            _this.widget = widget;
            _this.router.navigate(['user/', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetHtmlComponent.prototype.createHTML = function (text, name) {
        var _this = this;
        if ((text === undefined) || (text === null) || (text === '')) {
            this.errorMsg = 'Text field should not be empty!';
            this.errorFlag = true;
            return;
        }
        var widget = new __WEBPACK_IMPORTED_MODULE_3__models_widget_model_client__["a" /* Widget */]('', 'HTML', this.pageId, null, null, text, null, null, null, null);
        this.widgetService
            .createWidget(this.pageId, widget)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
            _this.router.navigate(['/user', _this.userId, 'website',
                _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetHtmlComponent.prototype.deleteHTML = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function () {
            _this.router.navigate(['user/', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    return WidgetHtmlComponent;
}());
WidgetHtmlComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-html',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], WidgetHtmlComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-html.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"form-group\">\n    <label>Search Image</label>\n    <input [(ngModel)]=\"searchText\" type=\"text\" class=\"form-control\">\n    <span class=\"input-group-btn\">\n         <a (click)=\"searchPhotos()\" class=\"btn btn-default\" type=\"button\">\n             <span class=\"glyphicon glyphicon-search\"></span>\n         </a>\n    </span>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrImageSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_flickr_service_client__ = __webpack_require__("../../../../../src/app/services/flickr.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FlickrImageSearchComponent = (function () {
    function FlickrImageSearchComponent(flickrService) {
        this.flickrService = flickrService;
        this.photos = [];
    }
    FlickrImageSearchComponent.prototype.ngOnInit = function () {
    };
    FlickrImageSearchComponent.prototype.searchPhotos = function () {
        var _this = this;
        this.flickrService
            .searchPhotos(this.searchText)
            .subscribe(function (data) {
            console.log(data);
            var val = data._body;
            val = val.replace('jsonFlickrApi(', '');
            val = val.substring(0, val.length - 1);
            val = JSON.parse(val);
            console.log(val);
            _this.photos = val.photos;
        });
    };
    return FlickrImageSearchComponent;
}());
FlickrImageSearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-flickr-image-search',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_flickr_service_client__["a" /* FlickrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_flickr_service_client__["a" /* FlickrService */]) === "function" && _a || Object])
], FlickrImageSearchComponent);

var _a;
//# sourceMappingURL=flickr-image-search.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html":
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!editFlag\">\r\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\r\n    <div class=\"container-fluid\">\r\n\r\n      <div class=\"navbar-text pull-left\">\r\n        <a [routerLink]=\"['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']\"\r\n           class=\"navbar-link\">\r\n          <span class=\"glyphicon glyphicon-chevron-left colorWhite\"></span>\r\n        </a>\r\n      </div>\r\n\r\n      <a class=\"navbar-brand\">\r\n        <b class=\"colorWhite\">Widget Edit</b>\r\n      </a>\r\n\r\n      <div class=\"navbar-text pull-right\">\r\n        <a (click)=\"updateImage(text, width, url, name)\"\r\n           class=\"navbar-link\">\r\n          <span class=\"glyphicon glyphicon-ok colorWhite\"></span>\r\n        </a>\r\n      </div>\r\n\r\n    </div>\r\n  </nav>\r\n</div>\r\n\r\n<div [hidden]=\"editFlag\">\r\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\r\n    <div class=\"container-fluid\">\r\n\r\n      <div class=\"navbar-text pull-left\">\r\n        <a [routerLink]=\"['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']\"\r\n           class=\"navbar-link\">\r\n          <span class=\"glyphicon glyphicon-chevron-left colorWhite\"></span>\r\n        </a>\r\n      </div>\r\n\r\n      <a class=\"navbar-brand\">\r\n        <b class=\"colorWhite\">Widget Edit</b>\r\n      </a>\r\n\r\n      <div class=\"navbar-text pull-right\">\r\n        <a (click)=\"createImage(text, width, url, name)\"\r\n           class=\"navbar-link\">\r\n          <span class=\"glyphicon glyphicon-ok colorWhite\"></span>\r\n        </a>\r\n      </div>\r\n\r\n    </div>\r\n  </nav>\r\n</div>\r\n\r\n<div class=\"container-fluid\">\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"name\">\r\n      Name\r\n    </label>\r\n    <input [(ngModel)]=\"name\"\r\n           value=\"Lorem pixel\"\r\n           placeholder=\"Name of image\"\r\n           type=\"text\"\r\n           id=\"name\"\r\n           class=\"form-control\"/>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"text\">\r\n      Text\r\n    </label>\r\n    <input [(ngModel)]=\"text\"\r\n           value=\"You can find images on Lorem pixel\"\r\n           placeholder=\"Text for image\"\r\n           type=\"text\"\r\n           id=\"text\"\r\n           class=\"form-control\"/>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"url\">\r\n      URL\r\n    </label>\r\n    <input [(ngModel)]=\"url\"\r\n           value=\"http://lorempixel.com/\"\r\n           placeholder=\"http://lorempixel.com/\"\r\n           type=\"url\"\r\n           id=\"url\"\r\n           class=\"form-control\"/>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"width\">\r\n      Width\r\n    </label>\r\n    <input [(ngModel)]=\"width\"\r\n           value=\"100%\"\r\n           placeholder=\"100%\"\r\n           type=\"text\"\r\n           id=\"width\"\r\n           class=\"form-control\"/>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label>\r\n      Upload\r\n    </label>\r\n    <form ngNoForm action=\"{{baseUrl}}/api/upload\" method=\"post\" enctype=\"multipart/form-data\">\r\n      <input  name=\"myFile\"   type=\"file\" class=\"form-control\"/>\r\n      <input  name=\"widgetId\" value=\"{{widgetId}}\"   style=\"display: none\"/>\r\n      <input  name=\"websiteId\" value=\"{{websiteId}}\"   style=\"display: none\"/>\r\n      <input  name=\"pageId\" value=\"{{pageId}}\"   style=\"display: none\"/>\r\n      <input  name=\"userId\" value=\"{{userId}}\"   style=\"display: none\"/>\r\n      <button type=\"submit\" class=\"btn btn-primary btn-block\"\r\n              (click)=\"updateImage(text, width, url)\">Upload Image</button>\r\n      <br/>\r\n    </form>\r\n  </div>\r\n\r\n  <a class=\"btn btn-info btn-block\"\r\n     [routerLink]=\"['/user/',userId,'website',websiteId,'page',pageId,'widget','new','image','search']\">\r\n    Search Images\r\n  </a>\r\n\r\n  <a (click)=\"deleteImage()\"\r\n     class=\"btn btn-danger btn-block\">\r\n    Delete\r\n  </a>\r\n  <div *ngIf=\"errorFlag\"\r\n       class=\"alert alert-danger\">\r\n    {{errorMsg}}\r\n  </div>\r\n\r\n</div>\r\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"navbar-text pull-right\">\r\n      <a [routerLink]=\"['/user', userId]\"\r\n         class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-user colorWhite\"></span>\r\n      </a>\r\n    </div>\r\n\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_widget_model_client__ = __webpack_require__("../../../../../src/app/models/widget.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WidgetImageComponent = (function () {
    function WidgetImageComponent(widgetService, router, route) {
        this.widgetService = widgetService;
        this.router = router;
        this.route = route;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl;
        this.errorMsg = 'Name field cannot be empty!';
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.editFlag = false;
            _this.widgetService.findWidgetById(_this.widgetId)
                .subscribe(function (widget) {
                _this.widget = widget;
                _this.widgetType = widget.widgetType;
                _this.size = widget.size;
                _this.url = widget.url;
                _this.text = widget.text;
                _this.width = widget.width;
                _this.editFlag = true;
            });
        });
    };
    WidgetImageComponent.prototype.createImage = function (text, width, url, name) {
        var _this = this;
        if ((name === undefined) || (name === '') || (name === null)) {
            this.errorFlag = true;
            return;
        }
        var widget = new __WEBPACK_IMPORTED_MODULE_3__models_widget_model_client__["a" /* Widget */]('', 'IMAGE', this.pageId, null, width, text, url, null, null, null);
        widget.text = text;
        widget.width = width;
        widget.url = url;
        this.widgetService
            .createWidget(this.pageId, widget)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
            _this.router.navigate(['/user', _this.userId, 'website',
                _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetImageComponent.prototype.updateImage = function (text, width, url, name) {
        var _this = this;
        if ((name === undefined) || (name === '') || (name === null)) {
            this.errorFlag = true;
            return;
        }
        var updatedImage = new __WEBPACK_IMPORTED_MODULE_3__models_widget_model_client__["a" /* Widget */](this.widgetId, 'IMAGE', this.pageId, null, width, text, url, null, null, null);
        this.widgetService.updateWidget(this.widgetId, updatedImage)
            .subscribe(function (widget) {
            _this.widget = widget;
            _this.router.navigate(['user/', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetImageComponent.prototype.deleteImage = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function () {
            _this.router.navigate(['user/', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    return WidgetImageComponent;
}());
WidgetImageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-image',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], WidgetImageComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.html":
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!editFlag\">\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n\n      <div class=\"navbar-text pull-left\">\n        <a [routerLink]=\"['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left colorWhite\"></span>\n        </a>\n      </div>\n\n      <a class=\"navbar-brand\">\n        <b class=\"colorWhite\">Widget Edit</b>\n      </a>\n\n      <div class=\"navbar-text pull-right\">\n        <a (click)=\"updateText(rows, placeholder, text, formatted)\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok colorWhite\"></span>\n        </a>\n      </div>\n\n    </div>\n  </nav>\n</div>\n\n<div [hidden]=\"editFlag\">\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n\n      <div class=\"navbar-text pull-left\">\n        <a [routerLink]=\"['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left colorWhite\"></span>\n        </a>\n      </div>\n\n      <a class=\"navbar-brand\">\n        <b class=\"colorWhite\">Widget Edit</b>\n      </a>\n\n      <div class=\"navbar-text pull-right\">\n        <a (click)=\"createText(rows, placeholder, text, formatted)\"\n           class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok colorWhite\"></span>\n        </a>\n      </div>\n\n    </div>\n  </nav>\n</div>\n\n<div class=\"container-fluid\">\n\n  <div class=\"form-group\">\n    <label>Text</label>\n    <input [(ngModel)] =\"text\"\n           class=\"form-control\"\n           type=\"text\"\n           placeholder=\"Text to be entered\"\n           id=\"text\"\n           name =\"text\"/>\n    <label>Rows</label>\n    <input [(ngModel)] =\"rows\"\n           class=\"form-control\"\n           type=\"number\"\n           placeholder=\"Number of rows to be there in text area.\"\n           id=\"rows\"\n           name =\"rows\"/>\n    <label>Placeholder</label>\n    <input [(ngModel)] =\"placeholder\"\n           class=\"form-control\"\n           type=\"text\"\n           placeholder=\"placeholder\"\n           id=\"placeholder\"\n           name =\"placeholder\"/>\n    <div class=\"checkbox\">\n      <label><input [(ngModel)] = \"formatted\" type=\"checkbox\" value=\"\"/><b>Formatted</b></label>\n    </div>\n\n    <a class=\"btn btn-danger btn-block\"\n       (click)=\"deleteText()\">Delete</a>\n    <div *ngIf=\"errorFlag\"\n         class=\"alert alert-danger\">\n      {{errorMsg}}\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n\n    <div class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId]\"\n         class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-user colorWhite\"></span>\n      </a>\n    </div>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_widget_model_client__ = __webpack_require__("../../../../../src/app/models/widget.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetTextComponent = (function () {
    function WidgetTextComponent(widgetService, router, route) {
        this.widgetService = widgetService;
        this.router = router;
        this.route = route;
    }
    WidgetTextComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            _this.editFlag = false;
        });
        this.widgetService.findWidgetById(this.widgetId)
            .subscribe(function (widget) {
            _this.widget = widget;
            _this.widgetType = _this.widget.widgetType;
            _this.text = _this.widget.text;
            _this.editFlag = true;
        });
    };
    WidgetTextComponent.prototype.updateText = function (rows, placeholder, text, formatted) {
        var _this = this;
        if ((text === undefined) || (text === '') || (text === null)) {
            this.errorMsg = 'Text field should not be empty!';
            this.errorFlag = true;
            return;
        }
        if ((rows <= 1) || (rows == null) || (rows === '')) {
            this.errorMsg = 'Rows should be greater than 1!';
            this.errorFlag = true;
            return;
        }
        var updatedHTML = new __WEBPACK_IMPORTED_MODULE_1__models_widget_model_client__["a" /* Widget */](this.widgetId, 'TEXT', this.pageId, null, null, text, null, rows, placeholder, formatted);
        this.widgetService.updateWidget(this.widgetId, updatedHTML)
            .subscribe(function (widget) {
            _this.widget = widget;
            _this.router.navigate(['user/', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetTextComponent.prototype.createText = function (rows, placeholder, text, formatted) {
        var _this = this;
        if ((text === undefined) || (text === '') || (text === null)) {
            this.errorMsg = 'Text field should not be empty!';
            this.errorFlag = true;
            return;
        }
        if ((rows <= 1) || (rows == null) || (rows === '')) {
            this.errorMsg = 'Rows should be greater than 1!';
            this.errorFlag = true;
            return;
        }
        var widget = new __WEBPACK_IMPORTED_MODULE_1__models_widget_model_client__["a" /* Widget */]('', 'TEXT', this.pageId, null, null, text, null, rows, placeholder, formatted);
        this.widgetService
            .createWidget(this.pageId, widget)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
            _this.router.navigate(['/user', _this.userId, 'website',
                _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetTextComponent.prototype.deleteText = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function () {
            _this.router.navigate(['user/', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    return WidgetTextComponent;
}());
WidgetTextComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-text',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], WidgetTextComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-text.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!editFlag\">\r\n<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"navbar-text pull-left\">\r\n      <a [routerLink]=\"['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']\"\r\n         class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-chevron-left colorWhite\"></span>\r\n      </a>\r\n    </div>\r\n\r\n    <a class=\"navbar-brand\">\r\n      <b class=\"colorWhite\">Widget Edit</b>\r\n    </a>\r\n\r\n    <div class=\"navbar-text pull-right\">\r\n      <a (click)=\"updateYoutube(text, url, width, name)\"\r\n         class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-ok colorWhite\"></span>\r\n      </a>\r\n    </div>\r\n\r\n  </div>\r\n</nav>\r\n</div>\r\n\r\n<div [hidden]=\"editFlag\">\r\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\r\n    <div class=\"container-fluid\">\r\n\r\n      <div class=\"navbar-text pull-left\">\r\n        <a [routerLink]=\"['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']\"\r\n           class=\"navbar-link\">\r\n          <span class=\"glyphicon glyphicon-chevron-left colorWhite\"></span>\r\n        </a>\r\n      </div>\r\n\r\n      <a class=\"navbar-brand\">\r\n        <b class=\"colorWhite\">Widget Edit</b>\r\n      </a>\r\n\r\n      <div class=\"navbar-text pull-right\">\r\n        <a (click)=\"createYoutube(text, url, width, name)\"\r\n           class=\"navbar-link\">\r\n          <span class=\"glyphicon glyphicon-ok colorWhite\"></span>\r\n        </a>\r\n      </div>\r\n\r\n    </div>\r\n  </nav>\r\n</div>\r\n\r\n\r\n<div class=\"container-fluid\">\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"name\">\r\n      Name\r\n    </label>\r\n    <input [(ngModel)]=\"name\"\r\n           value=\"Columbia\"\r\n           placeholder=\"Name of video\"\r\n           type=\"text\"\r\n           id=\"name\"\r\n           class=\"form-control\"/>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"text\">\r\n      Text\r\n    </label>\r\n    <input [(ngModel)]=\"text\"\r\n           value=\"Documentary on Columbia Space Shuttle Disaster\"\r\n           placeholder=\"Description of video\"\r\n           type=\"text\"\r\n           id=\"text\"\r\n           class=\"form-control\"/>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"url\">\r\n      URL\r\n    </label>\r\n    <input [(ngModel)]=\"url\"\r\n           value=\"https://www.youtube.com/watch?v=gWhqLVkjK50\"\r\n           placeholder=\"https://www.youtube.com/watch?v=gWhqLVkjK50\"\r\n           type=\"url\"\r\n           id=\"url\"\r\n           class=\"form-control\"/>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"width\">\r\n      Width\r\n    </label>\r\n    <input [(ngModel)]=\"width\"\r\n           value=\"100%\"\r\n           placeholder=\"100%\"\r\n           type=\"text\"\r\n           id=\"width\"\r\n           class=\"form-control\"/>\r\n  </div>\r\n\r\n  <a (click)=\"deleteYoutube()\"\r\n     class=\"btn btn-danger btn-block\">\r\n    Delete\r\n  </a>\r\n  <div *ngIf=\"errorFlag\"\r\n       class=\"alert alert-danger\">\r\n    {{errorMsg}}\r\n  </div>\r\n\r\n</div>\r\n\r\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"navbar-text pull-right\">\r\n      <a [routerLink]=\"['/user', userId]\"\r\n         class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-user colorWhite\"></span>\r\n      </a>\r\n    </div>\r\n\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_widget_model_client__ = __webpack_require__("../../../../../src/app/models/widget.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetYoutubeComponent = (function () {
    function WidgetYoutubeComponent(widgetService, route, router) {
        this.widgetService = widgetService;
        this.route = route;
        this.router = router;
        this.errorMsg = 'Name field cannot be empty!';
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            _this.editFlag = false;
            _this.widgetService.findWidgetById(_this.widgetId)
                .subscribe(function (widget) {
                _this.widget = widget;
                _this.size = _this.widget.size;
                _this.url = _this.widget.url;
                _this.text = _this.widget.text;
                _this.width = _this.widget.width;
                _this.editFlag = true;
            });
        });
    };
    WidgetYoutubeComponent.prototype.createYoutube = function (text, url, width, name) {
        var _this = this;
        if ((name === undefined) || (name === '') || (name === null)) {
            this.errorFlag = true;
            return;
        }
        var widget = new __WEBPACK_IMPORTED_MODULE_3__models_widget_model_client__["a" /* Widget */]('', 'YOUTUBE', this.pageId, null, width, text, url, null, null, null);
        widget.text = text;
        widget.width = width;
        widget.url = url;
        this.widgetService
            .createWidget(this.pageId, widget)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
            _this.router.navigate(['/user', _this.userId, 'website',
                _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetYoutubeComponent.prototype.updateYoutube = function (text, url, width, name) {
        var _this = this;
        if ((name === undefined) || (name === '') || (name === null)) {
            this.errorFlag = true;
            return;
        }
        var updatedYoutube = new __WEBPACK_IMPORTED_MODULE_3__models_widget_model_client__["a" /* Widget */](this.widgetId, 'YOUTUBE', this.pageId, null, width, text, url, null, null, null);
        this.widgetService.updateWidget(this.widgetId, updatedYoutube)
            .subscribe(function (widget) {
            _this.widget = widget;
            _this.router.navigate(['user/', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    WidgetYoutubeComponent.prototype.deleteYoutube = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function () {
            _this.router.navigate(['user/', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
        });
    };
    return WidgetYoutubeComponent;
}());
WidgetYoutubeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-youtube',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetYoutubeComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-youtube.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".youtube-widget {\r\n  position: relative;\r\n  padding-bottom: 56.25%; /* 16:9 */\r\n  height: 0;\r\n}\r\n.youtube-widget iframe {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"navbar-text pull-left\">\r\n      <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page']\"\r\n         class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-chevron-left colorWhite\"></span>\r\n      </a>\r\n    </div>\r\n\r\n    <a class=\"navbar-brand\">\r\n      <b class=\"colorWhite\">Widgets</b>\r\n    </a>\r\n\r\n    <div class=\"navbar-text pull-right\">\r\n      <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', pageId, 'widget', 'new']\"\r\n         class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-plus colorWhite\"></span>\r\n      </a>\r\n    </div>\r\n\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container-fluid nhs-padding\">\r\n  <div *ngFor=\"let widget of fetchWidgets()\">\r\n    <div [ngSwitch]=\"widget.widgetType\">\r\n      <div *ngSwitchCase=\"'HEADING'\">\r\n\r\n        <div class=\"nhs-widget\">\r\n          <div class=\"nhs-toolbar\">\r\n            <a (click)=\"updateWidget(widget._id)\">\r\n              <span class=\"glyphicon glyphicon-cog\"></span>\r\n            </a>\r\n            <a>\r\n              <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\r\n            </a>\r\n          </div>\r\n          <div [ngSwitch]=\"widget.size\" class=\"nhs-heading\">\r\n            <div *ngSwitchCase=\"1\">\r\n              <h1>{{widget.text}}</h1>\r\n            </div>\r\n            <div *ngSwitchCase=\"2\">\r\n              <h2>{{widget.text}}</h2>\r\n            </div>\r\n            <div *ngSwitchCase=\"3\">\r\n              <h3>{{widget.text}}</h3>\r\n            </div>\r\n            <div *ngSwitchCase=\"4\">\r\n              <h4>{{widget.text}}</h4>\r\n            </div>\r\n            <div *ngSwitchCase=\"5\">\r\n              <h5>{{widget.text}}</h5>\r\n            </div>\r\n            <div *ngSwitchCase=\"6\">\r\n              <h6>{{widget.text}}</h6>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngSwitchCase=\"'IMAGE'\">\r\n        <div class=\"nhs-widget\">\r\n          <div class=\"nhs-transparent-toolbar\">\r\n            <a (click)=\"updateWidget(widget._id)\">\r\n              <span class=\"glyphicon glyphicon-cog\"></span>\r\n            </a>\r\n            <a>\r\n              <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\r\n            </a>\r\n          </div>\r\n          <img class=\"nhs-image\"\r\n               [width]=\"widget.width\"\r\n               [src]=\"widget.url | safe\"/>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngSwitchCase=\"'HTML'\">\r\n        <div class=\"nhs-html\">\r\n        <div class=\"nhs-widget\">\r\n          <div class=\"nhs-toolbar\">\r\n            <a (click)=\"updateWidget(widget._id)\">\r\n              <span class=\"glyphicon glyphicon-cog\"></span>\r\n            </a>\r\n            <a>\r\n              <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\r\n            </a>\r\n          </div>\r\n          {{widget.text}}\r\n        </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngSwitchCase=\"'TEXT'\">\r\n        <div class=\"nhs-widget\">\r\n          <div class=\"nhs-toolbar\">\r\n            <a (click)=\"updateWidget(widget._id)\">\r\n              <span class=\"glyphicon glyphicon-cog\"></span>\r\n            </a>\r\n            <a>\r\n              <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\r\n            </a>\r\n          </div>\r\n        <div *ngIf=\"widget.formatted\">\r\n          <quill-editor [(ngModel)]=\"widget.text\" name=\"text\"></quill-editor>\r\n        </div>\r\n\r\n        <input *ngIf=\"!widget.formatted && (!widget.rows || widget.rows===1)\"\r\n               placeholder=\"{{widget.placeholder}}\" class=\"form-control\"/>\r\n\r\n        <textarea *ngIf=\"!widget.formatted && (widget.rows > 1)\"\r\n                  rows=\"{{widget.rows}}\" placeholder=\"{{widget.placeholder}}\"\r\n                  class=\"form-control\">{{widget.text}}</textarea>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngSwitchCase=\"'YOUTUBE'\">\r\n        <div class=\"nhs-widget\">\r\n          <div class=\"nhs-transparent-toolbar\">\r\n            <a (click)=\"updateWidget(widget._id)\">\r\n              <span class=\"glyphicon glyphicon-cog\"></span>\r\n            </a>\r\n            <a>\r\n              <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\r\n            </a>\r\n          </div>\r\n          <iframe class=\"nhs-frame\" class=\"youtube-widget\"\r\n                  [src]=\"widget.url | safe\">\r\n          </iframe>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"navbar-text pull-left\">\r\n      <a class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-play colorWhite\"></span>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"navbar-text pull-left\">\r\n      <a class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-eye-open colorWhite\"></span>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"navbar-text pull-right\">\r\n      <a [routerLink]=\"['/user', userId]\"\r\n         class=\"navbar-link\">\r\n        <span class=\"glyphicon glyphicon-user colorWhite\"></span>\r\n      </a>\r\n    </div>\r\n\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WidgetListComponent = (function () {
    function WidgetListComponent(websiteService, widgetService, route, pageService, router) {
        this.websiteService = websiteService;
        this.widgetService = widgetService;
        this.route = route;
        this.pageService = pageService;
        this.router = router;
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
        });
        this.widgetService.findWidgetsByPageId(this.pageId)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
        });
    };
    WidgetListComponent.prototype.fetchWidgets = function () {
        return this.widgets;
    };
    WidgetListComponent.prototype.updateWidget = function (_id) {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', _id]);
    };
    return WidgetListComponent;
}());
WidgetListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-list',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_widget_service_client__["a" /* WidgetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object])
], WidgetListComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=widget-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/page.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page; });
var Page = (function () {
    function Page(_id, name, websiteId, description) {
        this._id = _id;
        this.name = name;
        this.websiteId = websiteId;
        this.description = description;
    }
    return Page;
}());

//# sourceMappingURL=page.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/models/user.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(_id, username, password, firstName, lastName, email) {
        this._id = _id;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    return User;
}());

//# sourceMappingURL=user.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/models/website.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Website; });
var Website = (function () {
    function Website(_id, name, developerId, description) {
        this._id = _id;
        this.name = name;
        this.developerId = developerId;
        this.description = description;
    }
    return Website;
}());

//# sourceMappingURL=website.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/models/widget.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Widget; });
var Widget = (function () {
    function Widget(_id, widgetType, pageId, size, width, text, url, rows, placeholder, formatted) {
        this._id = _id;
        this.widgetType = widgetType;
        this.pageId = pageId;
        this.size = size;
        this.width = width;
        this.text = text;
        this.url = url;
        this.rows = rows;
        this.placeholder = placeholder;
        this.formatted = formatted;
    }
    return Widget;
}());

//# sourceMappingURL=widget.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        return this.userService.loggedIn();
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/flickr.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// injecting service into module
var FlickrService = (function () {
    function FlickrService(_http) {
        this._http = _http;
        this.key = 'e2d94f3a46602f6e79f15e6a43739d70';
        this.urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT';
    }
    FlickrService.prototype.searchPhotos = function (searchTerm) {
        var url = this.urlBase
            .replace('API_KEY', this.key)
            .replace('TEXT', searchTerm);
        return this._http.get(url);
    };
    return FlickrService;
}());
FlickrService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _a || Object])
], FlickrService);

var _a;
//# sourceMappingURL=flickr.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_page_model_client__ = __webpack_require__("../../../../../src/app/models/page.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// injecting service into module
var PageService = (function () {
    function PageService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.api = {
            'createPage': this.createPage,
            'findPagesByWebsiteId': this.findPagesByWebsiteId,
            'findPageById': this.findPageById,
            'updatePage': this.updatePage,
            'deletePage': this.deletePage
        };
    }
    PageService.prototype.createPage = function (websiteId, page) {
        var url = this.baseUrl + '/api/website/' + websiteId + '/page';
        var newPage = { _id: (Math.floor((Math.random() * 3001) + 3000)).toString(),
            name: page.name,
            websiteId: websiteId,
            description: page.description };
        return this.http.post(url, newPage)
            .map(function (response) {
            return response.json();
        });
    };
    PageService.prototype.findPagesByWebsiteId = function (websiteId) {
        var url = this.baseUrl + '/api/website/' + websiteId + '/page';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    PageService.prototype.findPageById = function (pageId) {
        var url = this.baseUrl + '/api/page/' + pageId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    PageService.prototype.updatePage = function (pageId, page) {
        var url = this.baseUrl + '/api/page/' + pageId;
        var updatedPage = new __WEBPACK_IMPORTED_MODULE_4__models_page_model_client__["a" /* Page */](pageId, page.name, page.websiteId, page.description);
        return this.http.put(url, updatedPage)
            .map(function (response) {
            return response.json();
        });
    };
    PageService.prototype.deletePage = function (pageId) {
        var url = this.baseUrl + '/api/page/' + pageId;
        return this.http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    return PageService;
}());
PageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], PageService);

var _a;
//# sourceMappingURL=page.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/shared.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SharedService = (function () {
    function SharedService() {
        this.user = '';
    }
    return SharedService;
}());
SharedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], SharedService);

//# sourceMappingURL=shared.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/test.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestService = (function () {
    function TestService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    TestService.prototype.findAllMessages = function () {
        console.log(this.baseUrl);
        return this._http.get(this.baseUrl + '/api/test')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.createMessage = function (message) {
        var obj = {
            message: message
        };
        return this._http.post(this.baseUrl + '/api/test', obj)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.deleteMessage = function (messageId) {
        return this._http.delete(this.baseUrl + '/api/test/' + messageId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return TestService;
}());
TestService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], TestService);

var _a;
//# sourceMappingURL=test.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_user_model_client__ = __webpack_require__("../../../../../src/app/models/user.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// injecting service into module
var UserService = (function () {
    function UserService(http, sharedService, router) {
        this.http = http;
        this.sharedService = sharedService;
        this.router = router;
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.api = {
            'createUser': this.createUser,
            'findUserById': this.findUserById,
            'findUserByUsername': this.findUserByUsername,
            'findUserByCredentials': this.findUserByCredentials,
            'updateUser': this.updateUser,
            'deleteUser': this.deleteUser
        };
    }
    UserService.prototype.register = function (username, password) {
        var url = this.baseUrl + '/api/register';
        var credentials = {
            username: username,
            password: password
        };
        this.options.withCredentials = true;
        return this.http.post(url, credentials, this.options)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.login = function (username, password) {
        var url = this.baseUrl + '/api/login';
        var credentials = {
            username: username,
            password: password
        };
        this.options.withCredentials = true;
        return this.http.post(url, credentials, this.options)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.logout = function () {
        var url = this.baseUrl + '/api/logout';
        this.options.withCredentials = true;
        return this.http.post(url, '', this.options)
            .map(function (status) {
            return status;
        });
    };
    UserService.prototype.loggedIn = function () {
        var _this = this;
        var url = this.baseUrl + '/api/loggedIn';
        this.options.withCredentials = true;
        return this.http.post(url, '', this.options)
            .map(function (res) {
            var user = res.json();
            if (user !== 0) {
                _this.sharedService.user = user;
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    UserService.prototype.createUser = function (user) {
        var url = this.baseUrl + '/api/user/';
        return this.http.post(url, user)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserById = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        var url = this.baseUrl + '/api/user?username=' + username;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        var url = this.baseUrl + '/api/user?username=' + username + '&password=' + password;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.updateUser = function (userId, user) {
        var url = this.baseUrl + '/api/user/' + userId;
        var newUser = new __WEBPACK_IMPORTED_MODULE_5__models_user_model_client__["a" /* User */](userId, user.username, user.password, user.firstName, user.lastName, user.email);
        return this.http.put(url, newUser)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.deleteUser = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object])
], UserService);

var _a, _b, _c;
//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_website_model_client__ = __webpack_require__("../../../../../src/app/models/website.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// injecting service into module
var WebsiteService = (function () {
    function WebsiteService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.api = {
            'createWebsite': this.createWebsite,
            'findWebsitesByUser': this.findAllWebsitesForUser,
            'findWebsiteById': this.findWebsiteById,
            'updateWebsite': this.updateWebsite,
            'deleteWebsite': this.deleteWebsite
        };
    }
    WebsiteService.prototype.createWebsite = function (userId, website) {
        var url = this.baseUrl + '/api/user/' + userId + '/website';
        return this.http.post(url, website)
            .map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.findAllWebsitesForUser = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId + '/website';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        var url = this.baseUrl + '/api/website/' + websiteId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        var url = this.baseUrl + '/api/website/' + websiteId;
        var updatedWebsite = new __WEBPACK_IMPORTED_MODULE_4__models_website_model_client__["a" /* Website */](websiteId, website.name, website.developerId, website.description);
        return this.http.put(url, updatedWebsite)
            .map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        var url = this.baseUrl + '/api/website/' + websiteId;
        return this.http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    return WebsiteService;
}());
WebsiteService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], WebsiteService);

var _a;
//# sourceMappingURL=website.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_widget_model_client__ = __webpack_require__("../../../../../src/app/models/widget.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// injecting service into module
var WidgetService = (function () {
    function WidgetService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.api = {
            'createWidget': this.createWidget,
            'findWidgetsByPageId': this.findWidgetsByPageId,
            'findWidgetById': this.findWidgetById,
            'updateWidget': this.updateWidget,
            'deleteWidget': this.deleteWidget
        };
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        widget.pageId = pageId;
        var url = this.baseUrl + '/api/page/' + pageId + '/widget';
        return this.http.post(url, widget)
            .map(function (response) {
            return response.json();
        });
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        var url = this.baseUrl + '/api/page/' + pageId + '/widget';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        var url = this.baseUrl + '/api/widget/' + widgetId;
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        var url = this.baseUrl + '/api/widget/' + widgetId;
        var updatedWidget = new __WEBPACK_IMPORTED_MODULE_4__models_widget_model_client__["a" /* Widget */](widgetId, widget.widgetType, widget.pageId, widget.size, widget.width, widget.text, widget.url, widget.rows, widget.placeholder, widget.formatted);
        return this.http.put(url, updatedWidget)
            .map(function (response) {
            return response.json();
        });
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        var url = this.baseUrl + '/api/widget/' + widgetId;
        return this.http.delete(url)
            .map(function (response) {
            return response.json();
        });
    };
    return WidgetService;
}());
WidgetService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], WidgetService);

var _a;
//# sourceMappingURL=widget.service.client.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseUrl: ''
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map