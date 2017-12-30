webpackJsonp([1,4],{

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(668),
            styles: [__webpack_require__(666)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/home/osboxes/repos/kennethSite/src/home.component.js.map

/***/ }),

/***/ 387:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 387;


/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(509);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/osboxes/repos/kennethSite/src/main.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(328);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=/home/osboxes/repos/kennethSite/src/app-routing.module.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(667),
            styles: [__webpack_require__(665)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/osboxes/repos/kennethSite/src/app.component.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__(507);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/osboxes/repos/kennethSite/src/app.module.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/osboxes/repos/kennethSite/src/environment.js.map

/***/ }),

/***/ 665:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 666:
/***/ (function(module, exports) {

module.exports = "\n @font-face\n\t{font-family:\"Cambria Math\";\n\tpanose-1:2 4 5 3 5 4 6 3 2 4;\n\tmso-font-charset:1;\n\tmso-generic-font-family:roman;\n\tmso-font-pitch:variable;\n\tmso-font-signature:0 0 0 0 0 0;}\n@font-face\n\t{font-family:Tahoma;\n\tpanose-1:2 11 6 4 3 5 4 4 2 4;\n\tmso-font-charset:0;\n\tmso-generic-font-family:swiss;\n\tmso-font-pitch:variable;\n\tmso-font-signature:-520081665 -1073717157 41 0 66047 0;}\n /* Style Definitions */\n p.MsoNormal, li.MsoNormal, div.MsoNormal\n\t{mso-style-unhide:no;\n\tmso-style-qformat:yes;\n\tmso-style-parent:\"\";\n\tmargin:0in;\n\tmargin-bottom:.0001pt;\n\tmso-pagination:widow-orphan;\n\tfont-size:12.0pt;\n\tfont-family:\"Times New Roman\",serif;\n\tmso-fareast-font-family:\"Times New Roman\";\n\tmso-fareast-theme-font:minor-fareast;\n\tcolor:black;}\nh1\n\t{mso-style-priority:9;\n\tmso-style-unhide:no;\n\tmso-style-qformat:yes;\n\tmso-style-link:\"Heading 1 Char\";\n\tmso-margin-top-alt:auto;\n\tmargin-right:0in;\n\tmso-margin-bottom-alt:auto;\n\tmargin-left:0in;\n\tmso-pagination:widow-orphan;\n\tmso-outline-level:1;\n\tfont-size:24.0pt;\n\tfont-family:\"Times New Roman\",serif;\n\tmso-fareast-font-family:\"Times New Roman\";\n\tmso-fareast-theme-font:minor-fareast;\n\tcolor:black;\n\tfont-weight:bold;}\nh3\n\t{mso-style-priority:9;\n\tmso-style-unhide:no;\n\tmso-style-qformat:yes;\n\tmso-style-link:\"Heading 3 Char\";\n\tmso-margin-top-alt:auto;\n\tmargin-right:0in;\n\tmso-margin-bottom-alt:auto;\n\tmargin-left:0in;\n\tmso-pagination:widow-orphan;\n\tmso-outline-level:3;\n\tfont-size:13.5pt;\n\tfont-family:\"Times New Roman\",serif;\n\tmso-fareast-font-family:\"Times New Roman\";\n\tmso-fareast-theme-font:minor-fareast;\n\tcolor:black;\n\tfont-weight:bold;}\na:link, span.MsoHyperlink\n\t{mso-style-priority:99;\n\tcolor:blue;\n\ttext-decoration:underline;\n\ttext-underline:single;}\na:visited, span.MsoHyperlinkFollowed\n\t{mso-style-noshow:yes;\n\tmso-style-priority:99;\n\tcolor:blue;\n\ttext-decoration:underline;\n\ttext-underline:single;}\np\n\t{mso-style-noshow:yes;\n\tmso-style-priority:99;\n\tmso-margin-top-alt:auto;\n\tmargin-right:0in;\n\tmso-margin-bottom-alt:auto;\n\tmargin-left:0in;\n\tmso-pagination:widow-orphan;\n\tfont-size:12.0pt;\n\tfont-family:\"Times New Roman\",serif;\n\tmso-fareast-font-family:\"Times New Roman\";\n\tmso-fareast-theme-font:minor-fareast;\n\tcolor:black;}\naddress\n\t{mso-style-noshow:yes;\n\tmso-style-priority:99;\n\tmso-style-link:\"HTML Address Char\";\n\tmargin:0in;\n\tmargin-bottom:.0001pt;\n\tmso-pagination:widow-orphan;\n\tfont-size:12.0pt;\n\tfont-family:\"Times New Roman\",serif;\n\tmso-fareast-font-family:\"Times New Roman\";\n\tmso-fareast-theme-font:minor-fareast;\n\tcolor:black;\n\tfont-style:italic;}\np.MsoAcetate, li.MsoAcetate, div.MsoAcetate\n\t{mso-style-noshow:yes;\n\tmso-style-priority:99;\n\tmso-style-link:\"Balloon Text Char\";\n\tmargin:0in;\n\tmargin-bottom:.0001pt;\n\tmso-pagination:widow-orphan;\n\tfont-size:8.0pt;\n\tfont-family:\"Tahoma\",sans-serif;\n\tmso-fareast-font-family:\"Times New Roman\";\n\tmso-fareast-theme-font:minor-fareast;\n\tcolor:black;}\nspan.HTMLAddressChar\n\t{mso-style-name:\"HTML Address Char\";\n\tmso-style-noshow:yes;\n\tmso-style-priority:99;\n\tmso-style-unhide:no;\n\tmso-style-locked:yes;\n\tmso-style-link:\"HTML Address\";\n\tmso-ansi-font-size:12.0pt;\n\tmso-bidi-font-size:12.0pt;\n\tfont-family:\"Times New Roman\",serif;\n\tmso-ascii-font-family:\"Times New Roman\";\n\tmso-fareast-font-family:\"Times New Roman\";\n\tmso-fareast-theme-font:minor-fareast;\n\tmso-hansi-font-family:\"Times New Roman\";\n\tmso-bidi-font-family:\"Times New Roman\";\n\tcolor:black;\n\tfont-style:italic;}\nspan.Heading1Char\n\t{mso-style-name:\"Heading 1 Char\";\n\tmso-style-priority:9;\n\tmso-style-unhide:no;\n\tmso-style-locked:yes;\n\tmso-style-link:\"Heading 1\";\n\tmso-ansi-font-size:14.0pt;\n\tmso-bidi-font-size:14.0pt;\n\tfont-family:\"Cambria\",serif;\n\tmso-ascii-font-family:Cambria;\n\tmso-ascii-theme-font:major-latin;\n\tmso-fareast-font-family:\"Times New Roman\";\n\tmso-fareast-theme-font:major-fareast;\n\tmso-hansi-font-family:Cambria;\n\tmso-hansi-theme-font:major-latin;\n\tmso-bidi-font-family:\"Times New Roman\";\n\tmso-bidi-theme-font:major-bidi;\n\tcolor:#365F91;\n\tmso-themecolor:accent1;\n\tmso-themeshade:191;\n\tfont-weight:bold;}\nspan.Heading3Char\n\t{mso-style-name:\"Heading 3 Char\";\n\tmso-style-noshow:yes;\n\tmso-style-priority:9;\n\tmso-style-unhide:no;\n\tmso-style-locked:yes;\n\tmso-style-link:\"Heading 3\";\n\tmso-ansi-font-size:12.0pt;\n\tmso-bidi-font-size:12.0pt;\n\tfont-family:\"Cambria\",serif;\n\tmso-ascii-font-family:Cambria;\n\tmso-ascii-theme-font:major-latin;\n\tmso-fareast-font-family:\"Times New Roman\";\n\tmso-fareast-theme-font:major-fareast;\n\tmso-hansi-font-family:Cambria;\n\tmso-hansi-theme-font:major-latin;\n\tmso-bidi-font-family:\"Times New Roman\";\n\tmso-bidi-theme-font:major-bidi;\n\tcolor:#4F81BD;\n\tmso-themecolor:accent1;\n\tfont-weight:bold;}\np.msonormal0, li.msonormal0, div.msonormal0\n\t{mso-style-name:msonormal;\n\tmso-style-priority:99;\n\tmso-style-unhide:no;\n\tmso-margin-top-alt:auto;\n\tmargin-right:0in;\n\tmso-margin-bottom-alt:auto;\n\tmargin-left:0in;\n\tmso-pagination:widow-orphan;\n\tfont-size:12.0pt;\n\tfont-family:\"Times New Roman\",serif;\n\tmso-fareast-font-family:\"Times New Roman\";\n\tmso-fareast-theme-font:minor-fareast;\n\tcolor:black;}\nspan.BalloonTextChar\n\t{mso-style-name:\"Balloon Text Char\";\n\tmso-style-noshow:yes;\n\tmso-style-priority:99;\n\tmso-style-unhide:no;\n\tmso-style-locked:yes;\n\tmso-style-link:\"Balloon Text\";\n\tmso-ansi-font-size:8.0pt;\n\tmso-bidi-font-size:8.0pt;\n\tfont-family:\"Tahoma\",sans-serif;\n\tmso-ascii-font-family:Tahoma;\n\tmso-fareast-font-family:\"Times New Roman\";\n\tmso-fareast-theme-font:minor-fareast;\n\tmso-hansi-font-family:Tahoma;\n\tmso-bidi-font-family:Tahoma;\n\tcolor:black;}\nspan.SpellE\n\t{mso-style-name:\"\";\n\tmso-spl-e:yes;}\nspan.GramE\n\t{mso-style-name:\"\";\n\tmso-gram-e:yes;}\n.MsoChpDefault\n\t{mso-style-type:export-only;\n\tmso-default-props:yes;\n\tfont-size:10.0pt;\n\tmso-ansi-font-size:10.0pt;\n\tmso-bidi-font-size:10.0pt;}\n@page WordSection1\n\t{size:8.5in 11.0in;\n\tmargin:1.0in 1.0in 1.0in 1.0in;\n\tmso-header-margin:.5in;\n\tmso-footer-margin:.5in;\n\tmso-paper-source:0;}\ndiv.WordSection1\n\t{page:WordSection1;}"

/***/ }),

/***/ 667:
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>"

/***/ }),

/***/ 668:
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"WordSection1\">\n\n<h1 align=\"center\" style=\"text-align:center\"><span style=\"mso-fareast-font-family:\n&quot;Times New Roman&quot;\">Kenneth Kuttler</span></h1>\n\n<p><a name=\"_x0000_i1025\"></a><span style=\"mso-no-proof:yes\"><img width=\"542\" height=\"6\" id=\"_x0000_i1040\" src=\"cline.gif\"></span></p>\n\n<p>&nbsp; </p>\n\n<table class=\"MsoNormalTable\" border=\"0\" cellpadding=\"0\" style=\"mso-cellspacing:1.5pt;\n mso-yfti-tbllook:1184;mso-padding-alt:0in 0in 0in 0in\">\n <tbody><tr style=\"mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes\">\n  <td style=\"padding:0in 0in 0in 0in\">\n  <h3><a name=\"_x0000_i1026\"></a><span style=\"mso-fareast-font-family:&quot;Times New Roman&quot;;\n  mso-no-proof:yes\"><img width=\"14\" height=\"14\" id=\"_x0000_i1039\" src=\"bb.gif\"></span><span style=\"mso-fareast-font-family:&quot;Times New Roman&quot;\">General Information</span></h3>\n  <p class=\"MsoNormal\" style=\"mso-margin-top-alt:auto;mso-margin-bottom-alt:auto\"><a name=\"_x0000_i1027\"></a>I am a professor at Brigham Young University&nbsp;<span style=\"mso-no-proof:yes\"><img width=\"93\" height=\"123\" id=\"_x0000_i1038\" src=\"/assets/images/klkuttle.jpg\"></span>&nbsp;</p>\n  </td>\n  <td style=\"padding:0in 0in 0in 0in\">\n  <h3><a name=\"_x0000_i1028\"></a><span style=\"mso-fareast-font-family:&quot;Times New Roman&quot;;\n  mso-no-proof:yes\"><img width=\"14\" height=\"14\" id=\"_x0000_i1037\" src=\"bb.gif\"></span><span style=\"mso-fareast-font-family:&quot;Times New Roman&quot;\">Address</span></h3>\n  <p class=\"MsoNormal\" style=\"mso-margin-top-alt:auto;mso-margin-bottom-alt:auto\">Department\n  of Math<span class=\"GramE\">&nbsp; </span><br>\n  Brigham Young University&nbsp; <br>\n  342 TMCB&nbsp; <br>\n  Provo, Utah 84602&nbsp; <br>\n  U.S.A.&nbsp; </p>\n  <p class=\"MsoNormal\" style=\"mso-margin-top-alt:auto;mso-margin-bottom-alt:auto\">&nbsp;Office\n  Room: 352&nbsp; </p>\n  <p class=\"MsoNormal\" style=\"mso-margin-top-alt:auto;mso-margin-bottom-alt:auto\"><a href=\"mailto:klkuttle@math.byu.edu\">klkuttle@math.byu.edu</a></p>\n  <p class=\"MsoNormal\" style=\"mso-margin-top-alt:auto;mso-margin-bottom-alt:auto\"><a href=\"mailto:klkuttler@gmail.com\">klkuttler@gmail.com</a></p>\n  <p class=\"MsoNormal\" style=\"mso-margin-top-alt:auto;mso-margin-bottom-alt:auto\"><br>\n  Telephone: 801-422-4756&nbsp; </p>\n  <p class=\"MsoNormal\" style=\"mso-margin-top-alt:auto;mso-margin-bottom-alt:auto\">801-358-4668</p>\n  <p class=\"MsoNormal\" style=\"mso-margin-top-alt:auto\">&nbsp; </p>\n  <address><span style=\"mso-fareast-font-family:&quot;Times New Roman&quot;\">Fax:\n  801-422-0504&nbsp;</span></address>\n  </td>\n </tr>\n</tbody></table>\n\n<p><a name=\"_x0000_i1029\"></a><span style=\"mso-no-proof:yes\"><img border=\"0\" width=\"542\" height=\"6\" id=\"_x0000_i1036\" src=\"cline.gif\"></span></p>\n\n<p>&nbsp; </p>\n\n<h3><a name=\"_x0000_i1030\"></a><span style=\"mso-fareast-font-family:&quot;Times New Roman&quot;;\nmso-no-proof:yes\"><img border=\"0\" width=\"14\" height=\"14\" id=\"_x0000_i1035\" src=\"bb.gif\"></span><span style=\"mso-fareast-font-family:&quot;Times New Roman&quot;\">Some\nCourses I've taught&nbsp;</span></h3>\n\n<p>&nbsp; <span style=\"color:blue\">Calculus and Analytic Geometry </span>&nbsp;\n<br>\n&nbsp; <span style=\"color:blue\">Introduction to Ordinary Differential Equations</span>\n<br>\n&nbsp; <span style=\"color:blue\">Vector Analysis</span>&nbsp; <br>\n&nbsp; <span style=\"color:blue\">Matrix Analysis </span><br>\n&nbsp; <span style=\"color:blue\">Advanced Calculus </span><br>\n&nbsp; <span style=\"color:blue\">Point Set Topology</span> <br>\n&nbsp; <span style=\"color:blue\">Real Analysis </span>&nbsp; <br>\n&nbsp; <span style=\"color:blue\">Complex Analysis</span></p>\n\n<p><span style=\"color:blue\">My main course to teach in the last 17 years has\nbeen engineering math: Multivariable calculus and watered down linear algebra. </span></p>\n\n<p>&nbsp;</p>\n\n<p><a name=\"_x0000_i1031\"></a>&nbsp;<span style=\"mso-no-proof:yes\"><img border=\"0\" width=\"542\" height=\"6\" id=\"_x0000_i1034\" src=\"cline.gif\"></span> </p>\n\n<p>&nbsp; </p>\n\n<h3><a name=\"_x0000_i1032\"></a><span style=\"mso-fareast-font-family:&quot;Times New Roman&quot;;\nmso-no-proof:yes\"><img border=\"0\" width=\"14\" height=\"14\" id=\"_x0000_i1033\" src=\"bb.gif\"></span><span style=\"mso-fareast-font-family:&quot;Times New Roman&quot;\">Areas\nof research</span></h3>\n\n<p>My primary area of research is <b>Partial Differential Equations and\nInclusions.&nbsp; </b>I work on abstract methods for determining whether\nproblems of this sort are well posed. Lately, I have been working on the\nmathematical theory of problems from contact mechanics including friction,\nwear, and damage.&nbsp;I have also been studying extensions to stochastic\nequations and inclusions.&nbsp; </p>\n\n<p><a name=\"_x0000_i1033\"></a>&nbsp;<span style=\"mso-no-proof:yes\"><img border=\"0\" width=\"542\" height=\"6\" id=\"_x0000_i1032\" src=\"cline.gif\"></span> </p>\n\n<p>&nbsp; </p>\n\n<h3><a name=\"_x0000_i1034\"></a><span style=\"mso-fareast-font-family:&quot;Times New Roman&quot;;\nmso-no-proof:yes\"><img border=\"0\" width=\"14\" height=\"14\" id=\"_x0000_i1031\" src=\"bb.gif\"></span><span style=\"mso-fareast-font-family:&quot;Times New Roman&quot;\">Other\ninterests</span></h3>\n\n<p>I am usually interested in topics in analysis, especially measure and\nintegration, functional analysis and such things.</p>\n\n<p><a name=\"_x0000_i1035\"></a>&nbsp;<span style=\"mso-no-proof:yes\"><img border=\"0\" width=\"542\" height=\"6\" id=\"_x0000_i1030\" src=\"cline.gif\"></span> </p>\n\n<h3><a name=\"_x0000_i1039\"></a><span style=\"mso-fareast-font-family:&quot;Times New Roman&quot;;\nmso-no-proof:yes\"><img border=\"0\" width=\"14\" height=\"14\" id=\"_x0000_i1029\" src=\"bb.gif\"></span><span style=\"mso-fareast-font-family:&quot;Times New Roman&quot;\">A\nVita</span></h3>\n\n<p>Here is a pdf file of a vita <a href=\"http://math.byu.edu/%7Eklkuttle/vitaforweb.pdf\"><span class=\"SpellE\">vita</span></a>\n. .</p>\n\n<p><a name=\"_x0000_i1040\"></a>&nbsp;<span style=\"mso-no-proof:yes\"><img border=\"0\" width=\"542\" height=\"6\" id=\"_x0000_i1028\" src=\"cline.gif\"></span> </p>\n\n<p>&nbsp; </p>\n\n<p>&nbsp; </p>\n\n<h3><a name=\"_x0000_i1036\"></a><span style=\"mso-fareast-font-family:&quot;Times New Roman&quot;;\nmso-no-proof:yes\"><img border=\"0\" width=\"14\" height=\"14\" id=\"_x0000_i1027\" src=\"bb.gif\"></span><span style=\"mso-fareast-font-family:&quot;Times New Roman&quot;\">Some\nPublications</span></h3>\n\n<p>A Book, <i>Basic Analysis </i><span class=\"SpellE\">Rinton</span> Press\n2001.&nbsp; <br>\nThere are some things I have found in this book which would be better\nchanged.&nbsp; Here is a pdf file containing these pages<span class=\"GramE\">&nbsp;\n</span><a href=\"http://math.byu.edu/%7Eklkuttle/errorsbasicanalysis.pdf\">errors</a>\n. If you have trouble with the pdf file, here is a <span class=\"SpellE\">postscipt</span>\nfile of the same thing <a href=\"http://math.byu.edu/%7Eklkuttle/errorsbasicanalysis.ps\">mistakes</a> .</p>\n\n<p>A Book, <i>Modern Analysis</i> CRC press 1998. <br>\nThere are some things I have found in this book which would be better\nchanged.&nbsp; Here is a pdf file containing these pages<span class=\"GramE\">&nbsp;\n</span><a href=\"http://math.byu.edu/%7Eklkuttle/errors.pdf\">errors</a> . If you\nhave trouble with the pdf file, here is a <span class=\"SpellE\">postscipt</span>\nfile of the same thing <a href=\"http://math.byu.edu/%7Eklkuttle/errors.ps\">mistakes</a>\n<br>\n<br>\nQuasi-Static <span class=\"SpellE\">Thermoviscoelastic</span> Contact Problem with\nSlip Dependent Friction Coefficient With A. <span class=\"SpellE\">Amassad</span>,\nM. <span class=\"SpellE\">Rochdi</span> and M. <span class=\"SpellE\">Shillor</span>,\n{{ '{' }}Mathematical and Computer Modelling{{ '}' }}, 36, (2002) pp. 839-854.<br>\n<br>\nDynamic Contact with Normal Compliance Wear and Discontinuous Friction\nCoefficient. With <span class=\"SpellE\">Shillor</span>. SIMA Vol. 34 #1 pp. 1-27,\n(2002).<br>\n<br>\nJ. <span class=\"SpellE\">Bajkowski</span>, Fernandez, Kuttler, and M. <span class=\"SpellE\">Shillor</span>,<span class=\"GramE\">&nbsp; A</span> <span class=\"SpellE\">thermoviscoelastic</span> beam model for brakes,'' European.\nJournal of Applied Math. 15(2<span class=\"GramE\">)(</span>2004), 181-202<br>\n<br>\nExistence for a <span class=\"SpellE\">thermoviscoelastic</span> beam model of\nbrakes,&nbsp; With <span class=\"SpellE\">Shillor</span> and Fernandez. Nonlinear\nAnalysis: 5 (2004) 857-880.<br>\n<br>\nAnalysis and Simulations of Vibrations of a Beam with a Slider with Dumont and <span class=\"SpellE\">Shillor</span>. Journal of Engineering Mathematics 47 61-82. (2003<span class=\"GramE\">)</span><br>\n<br>\nK. L. Kuttler, Meir <span class=\"SpellE\">Shillor</span> and J. R. Fernandez,\n``Existence for the <span class=\"SpellE\">Thermoviscoelastic</span> Thermistor <span class=\"SpellE\">Problem,''J</span>. Diff. Eqn. <span class=\"SpellE\">Dyn</span>.\nSystems, to appear<br>\n<br>\nK. L. Kuttler, Meir <span class=\"SpellE\">Shillor</span>, Heat conduction with\nflux condition on a free patch, Journal of Applied Math. <span class=\"GramE\">and</span>\nOptimization., 50(2)(2004), 143-159<br>\n<br>\nDynamic contact with <span class=\"SpellE\">Signorini's</span> condition and slip\nrate dependent friction, With <span class=\"SpellE\">Shillor</span>.&nbsp;\nElectron. J. Diff. Eqns., Vol. 2004(2004), No. 83, pp. 1-21.<br>\n<br>\nRegularity of solutions for dynamic frictionless contact problems with normal\ncompliance, with <span class=\"SpellE\">Shillor</span>. To appear in Nonlinear\nAnalysis as of Sept. 2004. </p>\n\n<p><span class=\"SpellE\">Quasistatic</span> evolution of damage in an elastic-<span class=\"SpellE\">viscoplastic</span> material, Electron. J. Diff. Eqns., Vol.\n2005(2005), No. 147, pp. 1-25. </p>\n\n<p>Dynamic frictional contact for elastic <span class=\"SpellE\">viscoplastic</span>\nmaterial, Electron. J. Diff. Eqns., Vol. 2007(2007), No. 75, pp. 1-20. </p>\n\n<p>An Elastic <span class=\"SpellE\">viscoplastic</span> <span class=\"SpellE\">quasistatic</span>\ncontact problem: existence and uniqueness of a weak solution, with Campo and\nFernandez. Archive Rational Mechanics and Analysis, 191, March (2009) 423-445.</p>\n\n<p>An Existence and uniqueness result for an <span class=\"SpellE\">Elasto</span>-piezoelectric\nproblem with damage, with Fernandez. Mathematical Models and Methods in <span class=\"SpellE\">Aplied</span> Sciences, Vol. 19, No. 1 pp. 31 -50. January 2009</p>\n\n<p>Existence Results for Dynamic Adhesive Contact of a Rod. With <span class=\"SpellE\">Menike</span> R.S.R. and <span class=\"SpellE\">Shillor</span> M.\nJournal of math analysis and applications. 351, March (2009)<span class=\"GramE\">,781</span>-791.</p>\n\n<p>Two rods in dynamic adhesive contact, with <span class=\"SpellE\">Shillor</span>,\nM. and <span class=\"SpellE\">Nassar</span> A. Sayed. Annals of the Academy of\nRomanian Scientists Series on Mathematics and its Applications 1(1) (2009),\n83-111.</p>\n\n<p><a name=\"_x0000_i1037\"></a><span style=\"mso-no-proof:yes\"><img border=\"0\" width=\"14\" height=\"14\" id=\"_x0000_i1026\" src=\"bb.gif\"></span><b><span style=\"font-size:13.0pt\">Lecture Notes&nbsp;<span class=\"GramE\">And</span> Books</span></b>\n</p>\n\n<p>Here is a pdf<span class=\"GramE\">&nbsp; file</span> of my calculus book with a\nshorter collection of exercises and no solutions manual and answers to\nexercises. The published version is described at\nhttp://www.worldscibooks.com/mathematics/7917.html. &nbsp; <a href=\"http://math.byu.edu/%7Eklkuttle/calcbookBshortold.pdf\">Calculus,\nApplications and Theory </a>Here is page 170 of the published calculus book. It\nwas defective. &nbsp; <a href=\"http://math.byu.edu/%7Eklkuttle/p170.pdf\"><span class=\"GramE\">page170 </span></a>. Here is Page 178 of Volume 2 of the calculus\nbook. It has an obvious error. <span style=\"mso-fareast-font-family:&quot;Times New Roman&quot;;\ncolor:windowtext\"><span style=\"mso-spacerun:yes\">&nbsp;</span><a href=\"http://math.byu.edu/%7Eklkuttle/p184.pdf\"><span class=\"GramE\">page178 </span></a>.f\nHere is Page 279 of Volume 1 of the calculus book. It has a garbled explanation\ncorrected in what follows. <a href=\"http://math.byu.edu/%7Eklkuttle/Page279.pdf\"><span class=\"GramE\"><span class=\"grame\">page279 </span></span></a>. </span></p>\n\n<p>Here is a pdf<span class=\"GramE\">&nbsp; file</span> of Notes for Math 214.\nThis is mostly a subset of the material in the calculus book consisting of\nmultivariable calculus and a brief treatment of linear algebra<span class=\"GramE\">..</span> &nbsp; <a href=\"http://math.byu.edu/%7Eklkuttle/Math214Notes.pdf\">Math 214 Notes</a></p>\n\n<p>Here is a pdf file for a more elementary linear algebra book. This one\npresents everything for the first time in terms of the row reduced echelon form\nand emphasizes row operations. I have made many changes recently. There is a\nsolutions manual available on request. &nbsp; <a href=\"http://math.byu.edu/%7Eklkuttle/xxElementaryLinearAlgebra.pdf\"><span class=\"GramE\">elementary</span> linear algebra book </a>Also, here are alternate\nversions of the exercises along with their solutions. &nbsp; <a href=\"http://math.byu.edu/%7Eklkuttle/LinearAlgebraProblems.pdf\"><span class=\"SpellE\">LinearAlgebraProblems</span> </a>&nbsp; <a href=\"http://math.byu.edu/%7Eklkuttle/LinearAlgebraSolutions.pdf\"><span class=\"SpellE\"><span class=\"GramE\">LinearAlgebraSolutions</span></span><span class=\"GramE\"> </span></a>. These files were computer generated using Scientific\nNotebook. The source files from which these were generated are available if\nanyone would like to use them and modify them as desired. </p>\n\n<p>Here is a pdf<span class=\"GramE\">&nbsp; for</span> lecture notes for math 302\n.Fall 2009&nbsp; <a href=\"http://math.byu.edu/%7Eklkuttle/00000302lecturenotes.pdf\">Math 302\nlecture notes </a></p>\n\n<p>Here is a pdf<span class=\"GramE\">&nbsp; file</span> for the latest version of\na linear algebra book. &nbsp; <a href=\"http://math.byu.edu/%7Eklkuttle/xxLinearalgebra.pdf\"><span class=\"GramE\">linear</span>\nalgebra book</a></p>\n\n<p>Here is a re-written version of this book. It has additional topics and is\narranged differently. &nbsp; <a href=\"http://math.byu.edu/%7Eklkuttle/xxLinearAlgebraAndAnalysis.pdf\"><span class=\"GramE\">linear</span> algebra and analysis</a></p>\n\n<p>Here is a pdf<span class=\"GramE\">&nbsp; file</span> for a single variable\nadvanced calculus book. It is mostly done. &nbsp; <a href=\"http://math.byu.edu/%7Eklkuttle/AdvancedCalculusSV.pdf\">Single Variable\nAdvanced Calculus</a></p>\n\n<p>Here is a pdf<span class=\"GramE\">&nbsp; file</span> for a <span class=\"SpellE\">multvariable</span>\nadvanced calculus book. I am still working on it.&nbsp; <a href=\"http://math.byu.edu/%7Eklkuttle/AdvancedCalculusMV.pdf\">Many Variable\nAdvanced Calculus</a></p>\n\n<p>Here is a pdf<span class=\"GramE\">&nbsp; file</span> for Nonlinear Analysis\nNotes. I am still working on it.&nbsp; <a href=\"http://math.byu.edu/%7Eklkuttle/NonlinearAnalysis.pdf\">Nonlinear analysis</a></p>\n\n<p>Here is a pdf<span class=\"GramE\">&nbsp; file</span> of the latest version of\nmy book on topics on analysis.. It contains a review of advanced calculus and\nthen discusses<span class=\"GramE\">&nbsp; measure</span> and integration, and\ncomplex analysis at a more advanced level than the other complex variable notes\non this page. It also includes the main theorems about <span class=\"SpellE\">Sobolev</span>\nSpaces<span class=\"GramE\">&nbsp; and</span> interpolation theorems in <span class=\"SpellE\">Banach</span> space as well as other abstract topics. I am still\nworking on it<span class=\"GramE\">..</span>&nbsp; <a href=\"http://math.byu.edu/%7Eklkuttle/xxTopicsInAnalysis.pdf\">Topics</a></p>\n\n<p>Here is a pdf file for some courses on analysis. Apparently not for BYU. <a href=\"http://math.byu.edu/%7Eklkuttle/Analysis.pdf\">Analysis</a></p>\n\n<p>Here is a pdf<span class=\"GramE\">&nbsp; file</span> of notes for a seminar on\nstochastic integration and probability. It is a subset of the large topics\nbook. &nbsp; <a href=\"http://math.byu.edu/%7Eklkuttle/NotesA.pdf\"><span class=\"GramE\">notes</span></a></p>\n\n<p>Here is a pdf<span class=\"GramE\">&nbsp; for</span> lecture notes for math 113\n.Fall 2006&nbsp; <a href=\"http://math.byu.edu/%7Eklkuttle/113lecturenotes.pdf\">Math\n113 lecture notes </a></p>\n\n<p>Here is a pdf<span class=\"GramE\">&nbsp; for</span> a short differential\nequations book. It is not done yet. &nbsp; <a href=\"http://math.byu.edu/%7Eklkuttle/Shortmath334.pdf\">Differential equations\nnotes</a></p>\n\n<p>Here is a pdf file of a few notes for math 547, Partial Differential\nEquations to be used in the <span class=\"GramE\">Fall</span> of 2003. You should\nclick on the blue phrase \"547 notes\". Then save the pdf file in\nwhatever folder you want. <a href=\"http://math.byu.edu/%7Eklkuttle/547notesB.pdf\">547 notes</a> </p>\n\n<p>Here is a pdf file of notes on vector analysis. This is also an appendix in\nthe above calculus book. Then save the pdf file in whatever folder you want. <a href=\"http://math.byu.edu/%7Eklkuttle/547curvilinear.pdf\"><span class=\"GramE\">vector</span>\nanalysis</a></p>\n\n<p>Here is a pdf file for some lecture notes for Math 532, complex variables,\nto be used in the summer of 2001. These notes have a more elementary flavor\nthan those found in the above Topics book and 641-642 book. However there are\nsome things in these notes which are not in the above. &nbsp; <a href=\"http://math.byu.edu/%7Eklkuttle/math532notes01.pdf\"><span class=\"GramE\">complex</span>\nvariable notes</a></p>\n\n<p>Here is a postscript file for notes for <span class=\"SpellE\">pde</span>\nseminar based on book by <span class=\"SpellE\">Panagiotopolous</span> and <span class=\"SpellE\">Naniewicz</span>. <a href=\"http://math.byu.edu/%7Eklkuttle/pdeseminarnotes.ps\"><span class=\"GramE\">notes</span>\npostscript</a> </p>\n\n<p>Here is a pdf. <span class=\"GramE\">file</span> for a pattern for a gingerbread\nhouse. It is a Latex exercise using the picture environment.&nbsp; <a href=\"http://math.byu.edu/%7Eklkuttle/adele.pdf\"><span class=\"GramE\">ginger</span>\nbread house</a></p>\n\n<p><a name=\"_x0000_i1038\"></a>&nbsp;<span style=\"mso-no-proof:yes\"><img border=\"0\" width=\"542\" height=\"6\" id=\"_x0000_i1025\" src=\"cline.gif\"></span> </p>\n\n<p>&nbsp;<a href=\"http://math.byu.edu/\"><i>Go back to main page</i></a> </p>\n\n<p><a href=\"http://math.mtu.edu/\">&nbsp;</a> </p>\n\n</div>\n\n"

/***/ }),

/***/ 701:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(388);


/***/ })

},[701]);
//# sourceMappingURL=main.bundle.map