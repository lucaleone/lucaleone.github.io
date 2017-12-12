webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/Guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        console.log('GUARD' + localStorage.getItem('currentUser'));
        return new Promise(function (resolve) {
            if (localStorage.getItem('currentUser')) {
                // logged in so return true
                resolve(true);
            }
            else {
                // not logged in so redirect to login page with the return url
                _this.router.navigateByUrl('/login');
                resolve(false);
            }
        });
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/Pages/page-esplora/page-esplora.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Pages/page-esplora/page-esplora.component.html":
/***/ (function(module, exports) {

module.exports = " <app-event-list [eventsId]=\"currentUser.eventi\" [esploraFilter]=\"true\"></app-event-list>\r\n"

/***/ }),

/***/ "../../../../../src/app/Pages/page-esplora/page-esplora.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEsploraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageEsploraComponent = (function () {
    function PageEsploraComponent() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.idTaken = (this.currentUser != null);
    }
    PageEsploraComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-esplora',
            template: __webpack_require__("../../../../../src/app/Pages/page-esplora/page-esplora.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Pages/page-esplora/page-esplora.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageEsploraComponent);
    return PageEsploraComponent;
}());



/***/ }),

/***/ "../../../../../src/app/Pages/page-home/page-home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Pages/page-home/page-home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-calendar></app-calendar>\r\n<div class=\"blurable\" [ngClass]=\"isCalendarOpen? 'blur' : 'focus'\">\r\n  <app-event-list *ngIf=\"idTaken\" [eventsId]=\"currentUser.eventi\" [goingFilter]=\"true\"></app-event-list>\r\n  <div class=\"pageButtonsContainer\">\r\n    <button [ngClass]=\"isCalendarOpen? 'hide': 'show'\" name=\"open calendar\"\r\n            class=\"calendarIcon\" (click)=\"OpenCalendar()\">\r\n    </button>\r\n    <button routerLink=\"/new-event\" class=\"newIcon\" name=\"nuovo evento\">\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/Pages/page-home/page-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__firebase_service__ = __webpack_require__("../../../../../src/app/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_eventsHandler_service__ = __webpack_require__("../../../../../src/app/Services/eventsHandler.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageHomeComponent = (function () {
    function PageHomeComponent(appService, service) {
        this.appService = appService;
        this.service = service;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log('HOME this.currentUser: ');
        console.log(this.currentUser);
        this.idTaken = (this.currentUser != null);
        this.isCalendarOpen = false;
    }
    PageHomeComponent.prototype.ngOnInit = function () {
        this.getIsCalendarOpen();
    };
    PageHomeComponent.prototype.OpenCalendar = function () {
        this.appService.setCalendarOpen(true);
    };
    PageHomeComponent.prototype.getIsCalendarOpen = function () {
        var _this = this;
        this.appService.getCalendarOpen().subscribe(function (calendarState) {
            console.log('3calendarState: ' + calendarState);
            _this.isCalendarOpen = calendarState;
        });
    };
    PageHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-home',
            template: __webpack_require__("../../../../../src/app/Pages/page-home/page-home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Pages/page-home/page-home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__Services_eventsHandler_service__["a" /* EventsHandler */], __WEBPACK_IMPORTED_MODULE_1__firebase_service__["a" /* FirebaseService */]])
    ], PageHomeComponent);
    return PageHomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/Pages/page-login/page-login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".backgroundImage{\r\n  background: url(" + __webpack_require__("../../../../../src/assets/loginBkg.jpg") + ") no-repeat top center;\r\n  background-size: cover;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  /*delete the following 2 line*/\r\n  position: fixed;\r\n  top: 0;\r\n  z-index: 500;\r\n}\r\n.errorLabel{\r\n  background-color: rgb(179, 58, 58);\r\n  color: white;\r\n}\r\n.loginContainter{\r\n  margin: 0\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Pages/page-login/page-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"backgroundImage paddingLayoutRoule\">\r\n  <div class=\"paddingLayoutRoule lightGrayBackground\">\r\n    <form #loginForm=\"ngForm\">\r\n      <h2>LOGIN</h2>\r\n      <label for=\"username\">Username:</label>\r\n      <input type=\"text\" id=\"username\" name=\"username\" required [(ngModel)]=\"email\">\r\n\r\n      <label for=\"password\">Password:</label>\r\n      <input type=\"password\" id=\"password\" name=\"password\" required [(ngModel)]=\"password\">\r\n      <!--<p [ngStyle]=\"{'visibility': loginForm.valid ? 'hidden' : 'visible'}\">-->\r\n      <p class=\" lineMargin paddingHalfLayoutRoule errorLabel\" [ngStyle]=\"{'visibility': loginError ? 'visible' : 'hidden'}\">\r\n        <span><strong>Invalid username or/and password.</strong></span>\r\n      </p>\r\n      <input name=\"login\" class=\"lineMargin squareButton accentButton\" type=\"button\" value=\"Login\"\r\n             [disabled]=\"!loginForm.valid || loginForm.pristine\" (click)=\"login()\">\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/Pages/page-login/page-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__firebase_service__ = __webpack_require__("../../../../../src/app/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageLoginComponent = (function () {
    function PageLoginComponent(router, service) {
        this.router = router;
        this.service = service;
        this.loginError = false;
        this.loginDone = false;
        // this.serviceUser.getEmail().subscribe(arg => console.log(arg));
    }
    PageLoginComponent.prototype.login = function () {
        var _this = this;
        this.service.getData('Utenti.json').subscribe(function (users) {
            for (var idx in users) {
                if (users[idx].email.toLowerCase() === _this.email.toLowerCase() &&
                    users[idx].password === _this.password) {
                    _this.loginError = false;
                    _this.loginDone = true;
                    localStorage.setItem('currentUser', JSON.stringify(users[idx]));
                    console.log('login effetuato con successo' + localStorage.getItem('currentUser'));
                    _this.router.navigateByUrl('/home');
                }
                else {
                    _this.loginError = true;
                    console.log('errore nel login');
                }
            }
        });
    };
    PageLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-login',
            template: __webpack_require__("../../../../../src/app/Pages/page-login/page-login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Pages/page-login/page-login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__firebase_service__["a" /* FirebaseService */]])
    ], PageLoginComponent);
    return PageLoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/Pages/page-newevent/newevent.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewEventGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NewEventGuard = (function () {
    function NewEventGuard() {
    }
    NewEventGuard.prototype.canDeactivate = function (component, currentRoute, currentState) {
        return new Promise(function (resolve) {
            if (component.onSave) {
                if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* isDevMode */])()) {
                    alert('Evento salvato con successo!');
                }
                resolve(true);
            }
            else {
                resolve(window.confirm('Ci sono modifiche non salvate. Sei sicuro di voler cancellare?'));
            }
        });
    };
    NewEventGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], NewEventGuard);
    return NewEventGuard;
}());



/***/ }),

/***/ "../../../../../src/app/Pages/page-newevent/page-newevent.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Pages/page-newevent/page-newevent.component.html":
/***/ (function(module, exports) {

module.exports = "<form novalidate *ngIf=\"show\" #newEventForm=\"ngForm\">\r\n  <div class=\"pageTitle\" [style.background-image]=\"'url('+currentEvent.immagine+')'\">\r\n  </div>\r\n  <div class=\"cardForm\">\r\n    <label for=\"nome_evento\">Nome dell'evento</label>\r\n    <input id=\"nome_evento\" name=\"nome evento\" type=\"text\" required [(ngModel)]=\"currentEvent.titolo\">\r\n    <div>\r\n      <label for=\"libreria\">Scegli libreria</label>\r\n      <select required [(ngModel)]=\"currentEvent.sede\" id=\"libreria\" name=\"libreria\">\r\n        <option value=\"Libreria Ostia\">Libreria Ostia</option>\r\n        <option value=\"Libreria Ostia 1\">Libreria Ostia 1</option>\r\n        <option value=\"Libreria Ostia 2\">Libreria Ostia 2</option>\r\n        <option value=\"Libreria Ostia 3\">Libreria Ostia 3</option>\r\n      </select>\r\n    </div>\r\n\r\n    <div class=\"flex\">\r\n      <div class=\"width50\">\r\n        <label for=\"data\">Data</label>\r\n        <input required [(ngModel)]=\"currentEvent.data\"\r\n               id=\"data\" name=\"data evento\" type=\"date\" placeholder=\"gg/mm/aaaa\">\r\n      </div>\r\n\r\n      <div class=\"width50\">\r\n        <label for=\"ora\">Ora</label>\r\n        <input required [(ngModel)]=\"currentEvent.ora\" type=\"time\"\r\n               id=\"ora\" name=\"ora evento\" value=\"14:30\" placeholder=\"hh:mm\" step=\"60\">\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Terza riga -->\r\n    <div>\r\n      <label for=\"descrizione\">Descrizione</label>\r\n      <textarea required [(ngModel)]=\"currentEvent.descrizione\"\r\n                rows=\"5\" id=\"descrizione\" name=\"descrizione evento\"\r\n                placeholder=\"Descrizione evento...\" maxlength=\"400\"> </textarea>\r\n    </div>\r\n    <div>\r\n      <label for=\"imgUrl\">Genere evento</label>\r\n      <select required [(ngModel)]=\"currentEvent.immagine\" id=\"imgUrl\" name=\"genere evento\" [value]=\"currentEvent.immagine\">\r\n        <option value=\"./assets/type-event/default.jpg\">Generale</option>\r\n        <option value=\"./assets/type-event/cinema.jpg\">Arte e cinema</option>\r\n        <option value=\"./assets/type-event/cucina.jpg\">Cucina</option>\r\n        <option value=\"./assets/type-event/fantascienza.jpg\">Fantascienza</option>\r\n        <option value=\"./assets/type-event/filosofia.jpg\">Filosofia</option>\r\n        <option value=\"./assets/type-event/fotografia.jpg\">Fotografia</option>\r\n        <option value=\"./assets/type-event/fumetti.jpg\">Fumetti e manga</option>\r\n        <option value=\"./assets/type-event/giallo.jpg\">Gialli</option>\r\n        <option value=\"./assets/type-event/horror.jpg\">Horror</option>\r\n        <option value=\"./assets/type-event/letteratura.jpg\">Letteratura</option>\r\n        <option value=\"./assets/type-event/manuali.jpg\">Manualistica</option>\r\n        <option value=\"./assets/type-event/tempo-libero.jpg\">Tempo libero e salute</option>\r\n        <option value=\"./assets/type-event/thriller.jpg\">Thriller</option>\r\n      </select>\r\n    </div>\r\n    <!-- Quarta riga -->\r\n  </div>\r\n  <div class=\"flex paddingLayoutRoule\">\r\n    <input class=\"flexGrow squareButton\" name=\"cancella evento\" type=\"button\" (click)=\"cancel()\" value=\"❮  cancella\">\r\n    <div class=\"widthLayoutRoule\"></div>\r\n    <input class=\"flexGrow squareButton accentButton\" type=\"button\" name=\"salva evento\"\r\n           [disabled]=\"!newEventForm.valid || newEventForm.pristine\" (click)=\"save()\" value=\"salva\">\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/Pages/page-newevent/page-newevent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNeweventComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_event__ = __webpack_require__("../../../../../src/app/models/event.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__firebase_service__ = __webpack_require__("../../../../../src/app/firebase.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageNeweventComponent = (function () {
    function PageNeweventComponent(router, activatedRoute, service) {
        var _this = this;
        this.router = router;
        this.service = service;
        this.show = false;
        // this.email = localStorage.getItem('email');
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log('this.currentUser ' + this.currentUser);
        // this.serviceUser.getEmail().subscribe(address => {this.email = address; console.log(address); });
        this.key = activatedRoute.snapshot.params['key'];
        if (this.key) {
            this.service.getEvent(this.key).subscribe(function (event) {
                _this.currentEvent = event;
                console.log(_this.key);
                console.log(_this.currentEvent);
                _this.show = true;
            });
        }
        else {
            this.currentEvent = new __WEBPACK_IMPORTED_MODULE_1__models_event__["a" /* Event */]();
            this.currentEvent.sede = 'Libreria Ostia'; // in questo modo la select viene impostata sulla prima option
            this.currentEvent.immagine = './assets/type-event/default.jpg';
            this.currentEvent.owner = this.currentUser.email;
            this.show = true;
        }
    }
    PageNeweventComponent.prototype.cancel = function () {
        this.onSave = false;
        this.router.navigateByUrl('/home');
    };
    PageNeweventComponent.prototype.save = function () {
        var _this = this;
        this.onSave = true;
        if (!this.key) {
            this.service.createEvent(this.currentEvent).subscribe(function (arg) {
                _this.router.navigateByUrl('/home');
                _this.onSuccess = 'Evento salvato';
                console.log(_this.onSuccess);
            }, function (err) {
                _this.onError = 'errore nel salvataggio';
                console.log(_this.onError);
            });
        }
        else {
            this.service.editEvent(this.key, this.currentEvent).subscribe(function (arg) {
                _this.router.navigateByUrl('/home');
                _this.onSuccess = 'Evento modificato';
                console.log(_this.onSuccess);
            }, function (err) {
                _this.onError = 'errore nella modifica';
                console.log(_this.onError);
            });
        }
    };
    PageNeweventComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-newevent',
            template: __webpack_require__("../../../../../src/app/Pages/page-newevent/page-newevent.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Pages/page-newevent/page-newevent.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__firebase_service__["a" /* FirebaseService */]])
    ], PageNeweventComponent);
    return PageNeweventComponent;
}());



/***/ }),

/***/ "../../../../../src/app/Pages/page-notfoundcomponent/page-notfoundcomponent.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Pages/page-notfoundcomponent/page-notfoundcomponent.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cardImg\"\n     style=\"height:14rem; background-image: url('../../../assets/404error.png');\"></div>\n<section class=\"cardDetail\">\n  <h2>404</h2>\n  <p class=\"textJustified lineMargin\">Take me back to <span routerLink=\"/home\">Home</span></p>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/Pages/page-notfoundcomponent/page-notfoundcomponent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotfoundcomponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotfoundcomponentComponent = (function () {
    function PageNotfoundcomponentComponent() {
    }
    PageNotfoundcomponentComponent.prototype.ngOnInit = function () {
    };
    PageNotfoundcomponentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-notfoundcomponent',
            template: __webpack_require__("../../../../../src/app/Pages/page-notfoundcomponent/page-notfoundcomponent.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Pages/page-notfoundcomponent/page-notfoundcomponent.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotfoundcomponentComponent);
    return PageNotfoundcomponentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/Pages/page-profile/page-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".profileBackground {\r\n  height: 14rem;\r\n  background: url(" + __webpack_require__("../../../../../src/assets/profile.jpg") + ") no-repeat;\r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Pages/page-profile/page-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"profileBackground\"></div>\n<section class=\"cardDetail\">\n  <h2>{{currentUser.nome}} {{currentUser.cognome}}</h2>\n  <h3>{{currentUser.email}}</h3>\n  <p class=\"textJustified lineMargin\">{{currentUser.descrizione}}</p>\n</section>\n<section>\n  <app-event-list [eventsId]=\"currentUser.eventi\" [ownerFilter]=\"true\"></app-event-list>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/Pages/page-profile/page-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageProfileComponent = (function () {
    function PageProfileComponent() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.idTaken = (this.currentUser != null);
    }
    PageProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-profile',
            template: __webpack_require__("../../../../../src/app/Pages/page-profile/page-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Pages/page-profile/page-profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageProfileComponent);
    return PageProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/Services/eventsHandler.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventsHandler = (function () {
    function EventsHandler() {
        this.isMenuOpen = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.isCalendarOpen = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    EventsHandler.prototype.setIsMenuOpen = function (_isMenuOpen) {
        this.isMenuOpen.next(_isMenuOpen);
    };
    EventsHandler.prototype.getIsMenuOpen = function () {
        return this.isMenuOpen.asObservable();
    };
    EventsHandler.prototype.setCalendarOpen = function (calendarState) {
        this.isCalendarOpen.next(calendarState);
    };
    EventsHandler.prototype.getCalendarOpen = function () {
        return this.isCalendarOpen.asObservable();
    };
    EventsHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], EventsHandler);
    return EventsHandler;
}());



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

module.exports = "<div class=\"page\">\n  <app-header></app-header>\n  <div class=\"pageContent\">\n    <app-sidemenu></app-sidemenu>\n    <main>\n      <!--contenuto della pagina-->\n      <router-outlet></router-outlet>\n    </main>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_service_worker__ = __webpack_require__("../../../service-worker/esm5/service-worker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Pages_page_home_page_home_component__ = __webpack_require__("../../../../../src/app/Pages/page-home/page-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Pages_page_newevent_page_newevent_component__ = __webpack_require__("../../../../../src/app/Pages/page-newevent/page-newevent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Pages_page_notfoundcomponent_page_notfoundcomponent_component__ = __webpack_require__("../../../../../src/app/Pages/page-notfoundcomponent/page-notfoundcomponent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Pages_page_profile_page_profile_component__ = __webpack_require__("../../../../../src/app/Pages/page-profile/page-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__sidemenu_sidemenu_component__ = __webpack_require__("../../../../../src/app/sidemenu/sidemenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__calendar_calendar_component__ = __webpack_require__("../../../../../src/app/calendar/calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Pages_page_login_page_login_component__ = __webpack_require__("../../../../../src/app/Pages/page-login/page-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__firebase_service__ = __webpack_require__("../../../../../src/app/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Pages_page_newevent_newevent_guard__ = __webpack_require__("../../../../../src/app/Pages/page-newevent/newevent.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__event_list_event_list_component__ = __webpack_require__("../../../../../src/app/event-list/event-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__Services_eventsHandler_service__ = __webpack_require__("../../../../../src/app/Services/eventsHandler.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__Guards_auth_guard__ = __webpack_require__("../../../../../src/app/Guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__Pages_page_esplora_page_esplora_component__ = __webpack_require__("../../../../../src/app/Pages/page-esplora/page-esplora.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__Pages_page_home_page_home_component__["a" /* PageHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__Pages_page_newevent_page_newevent_component__["a" /* PageNeweventComponent */],
                __WEBPACK_IMPORTED_MODULE_9__Pages_page_notfoundcomponent_page_notfoundcomponent_component__["a" /* PageNotfoundcomponentComponent */],
                __WEBPACK_IMPORTED_MODULE_10__Pages_page_profile_page_profile_component__["a" /* PageProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_11__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_12__sidemenu_sidemenu_component__["a" /* SideMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_13__calendar_calendar_component__["a" /* CalendarComponent */],
                __WEBPACK_IMPORTED_MODULE_14__Pages_page_login_page_login_component__["a" /* PageLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_17__event_list_event_list_component__["a" /* EventListComponent */],
                __WEBPACK_IMPORTED_MODULE_20__Pages_page_esplora_page_esplora_component__["a" /* PageEsploraComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_service_worker__["a" /* ServiceWorkerModule */].register('/ngsw-worker.js', { enabled: __WEBPACK_IMPORTED_MODULE_21__environments_environment__["a" /* environment */].production }),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* routing */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__firebase_service__["a" /* FirebaseService */],
                __WEBPACK_IMPORTED_MODULE_16__Pages_page_newevent_newevent_guard__["a" /* NewEventGuard */],
                __WEBPACK_IMPORTED_MODULE_19__Guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_18__Services_eventsHandler_service__["a" /* EventsHandler */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export appRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Pages_page_home_page_home_component__ = __webpack_require__("../../../../../src/app/Pages/page-home/page-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Pages_page_newevent_page_newevent_component__ = __webpack_require__("../../../../../src/app/Pages/page-newevent/page-newevent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Pages_page_notfoundcomponent_page_notfoundcomponent_component__ = __webpack_require__("../../../../../src/app/Pages/page-notfoundcomponent/page-notfoundcomponent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Pages_page_profile_page_profile_component__ = __webpack_require__("../../../../../src/app/Pages/page-profile/page-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Pages_page_newevent_newevent_guard__ = __webpack_require__("../../../../../src/app/Pages/page-newevent/newevent.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Pages_page_login_page_login_component__ = __webpack_require__("../../../../../src/app/Pages/page-login/page-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Guards_auth_guard__ = __webpack_require__("../../../../../src/app/Guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Pages_page_esplora_page_esplora_component__ = __webpack_require__("../../../../../src/app/Pages/page-esplora/page-esplora.component.ts");









var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__Pages_page_home_page_home_component__["a" /* PageHomeComponent */],
        pathMatch: 'full',
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__Guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'home',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: 'esplora',
        component: __WEBPACK_IMPORTED_MODULE_8__Pages_page_esplora_page_esplora_component__["a" /* PageEsploraComponent */],
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_6__Pages_page_login_page_login_component__["a" /* PageLoginComponent */],
        pathMatch: 'full'
    },
    {
        path: 'new-event',
        component: __WEBPACK_IMPORTED_MODULE_2__Pages_page_newevent_page_newevent_component__["a" /* PageNeweventComponent */],
        pathMatch: 'full',
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__Guards_auth_guard__["a" /* AuthGuard */]],
        canDeactivate: [__WEBPACK_IMPORTED_MODULE_5__Pages_page_newevent_newevent_guard__["a" /* NewEventGuard */]]
    },
    {
        path: 'new-event/:key',
        component: __WEBPACK_IMPORTED_MODULE_2__Pages_page_newevent_page_newevent_component__["a" /* PageNeweventComponent */],
        pathMatch: 'full',
        canDeactivate: [__WEBPACK_IMPORTED_MODULE_5__Pages_page_newevent_newevent_guard__["a" /* NewEventGuard */]],
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__Guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_4__Pages_page_profile_page_profile_component__["a" /* PageProfileComponent */],
        pathMatch: 'full',
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__Guards_auth_guard__["a" /* AuthGuard */]],
    },
    {
        path: 'page-not-found',
        component: __WEBPACK_IMPORTED_MODULE_3__Pages_page_notfoundcomponent_page_notfoundcomponent_component__["a" /* PageNotfoundcomponentComponent */],
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'Page-not-found',
        pathMatch: 'full'
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "../../../../../src/app/calendar/calendar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#Calendario {\r\n  padding: 16px;\r\n  padding: var(--margin-layout, 16px);\r\n  z-index: 15;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-flow: column;\r\n          flex-flow: column;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  transition: -webkit-transform .6s ease;\r\n  transition: transform .6s ease;\r\n  transition: transform .6s ease, -webkit-transform .6s ease; /* IE 9 */\r\n  -webkit-transform: scale(0);\r\n          transform: scale(0);\r\n}\r\n\r\n\r\n#Calendario > div:nth-child(2) {\r\n  width: 100%;\r\n  background: white;\r\n}\r\n\r\n.calendarHeader {\r\n  height: 7rem;\r\n  text-align: center;\r\n  background: #B30000;\r\n  color: white;\r\n  padding: 16px;\r\n  padding: var(--margin-layout, 16px)\r\n}\r\n\r\n.calendarButton {\r\n  width: 1.3rem;\r\n  height: 1.45rem;\r\n}\r\n\r\n#calendarBack {\r\n  background: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22iso-8859-1%22%3F%3E%0D%3C!-- Generator%3A Adobe Illustrator 19.1.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%0D%3Csvg version%3D%221.1%22 id%3D%22Capa_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%0D%09 viewBox%3D%220 0 477.175 477.175%22 style%3D%22enable-background%3Anew 0 0 477.175 477.175%3B%22 xml%3Aspace%3D%22preserve%22%3E%0D%3Cg%3E%0D%09%3Cpath d%3D%22M145.188%2C238.575l215.5-215.5c5.3-5.3%2C5.3-13.8%2C0-19.1s-13.8-5.3-19.1%2C0l-225.1%2C225.1c-5.3%2C5.3-5.3%2C13.8%2C0%2C19.1l225.1%2C225%0D%09%09c2.6%2C2.6%2C6.1%2C4%2C9.5%2C4s6.9-1.3%2C9.5-4c5.3-5.3%2C5.3-13.8%2C0-19.1L145.188%2C238.575z%22%2F%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3C%2Fsvg%3E%0D\") no-repeat center;\r\n}\r\n\r\n#calendarNext {\r\n  background: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22iso-8859-1%22%3F%3E%0D%3C!-- Generator%3A Adobe Illustrator 19.1.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%0D%3Csvg version%3D%221.1%22 id%3D%22Capa_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%0D%09 viewBox%3D%220 0 477.175 477.175%22 style%3D%22enable-background%3Anew 0 0 477.175 477.175%3B%22 xml%3Aspace%3D%22preserve%22%3E%0D%3Cg%3E%0D%09%3Cpath d%3D%22M360.731%2C229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1%2C0s-5.3%2C13.8%2C0%2C19.1l215.5%2C215.5l-215.5%2C215.5%0D%09%09c-5.3%2C5.3-5.3%2C13.8%2C0%2C19.1c2.6%2C2.6%2C6.1%2C4%2C9.5%2C4c3.4%2C0%2C6.9-1.3%2C9.5-4l225.1-225.1C365.931%2C242.875%2C365.931%2C234.275%2C360.731%2C229.075z%0D%09%09%22%2F%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3Cg%3E%0D%3C%2Fg%3E%0D%3C%2Fsvg%3E%0D\") no-repeat center;\r\n}\r\n\r\n.calendarSelectedDay {\r\n  display: table-cell;\r\n  background-color: #B30000;\r\n  color: white;\r\n  border-radius: 50%;\r\n}\r\n\r\n#calendarDaysGrid > div {\r\n  width: 14.28%;\r\n  height: 3rem;\r\n  text-align: center;\r\n  font-size: 1.36rem;\r\n}\r\n\r\n#calendarDaysGrid > div:hover {\r\n  background-color: rgb(224, 224, 224);\r\n}\r\n\r\n.fadeOut {\r\n  /*background-color: transparent !important;*/ /* IE 9 */\r\n  -webkit-transform: scale(0) !important; /* Safari */\r\n  transform: scale(0) !important;\r\n}\r\n.fadeIn {\r\n  /*background-color: rgba(0, 0, 0, 0.23) !important;*/ /* IE 9 */\r\n  -webkit-transform: scale(1) !important; /* Safari */\r\n  transform: scale(1) !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/calendar/calendar.component.html":
/***/ (function(module, exports) {

module.exports = "<div #miotest id=\"Calendario\" [ngClass]=\"isCalendarOpen ? 'fadeIn' : 'fadeOut'\">\r\n  <div class=\"flexGrow\"></div>\r\n  <div class=\"boxShadow\">\r\n    <div class=\"calendarHeader\">\r\n      <h2 id=\"calendar_date\">13 Aprile</h2>\r\n    </div>\r\n    <h2 class=\"texCenter halfLineMargin\" id=\"calendar_month\">Aprile 2017</h2>\r\n    <div class=\"flex paddingHalfLayoutRoule\">\r\n      <div class=\"calendarButton contentVerticalCenter\" id=\"calendarBack\"></div>\r\n      <div class=\"flexGrow flex flexWrap\" id=\"calendarDaysGrid\">\r\n        <div *ngFor=\"let day of dayOfMouth\" (click)=\"changeSelectedDay(day)\">{{day}}</div>\r\n      </div>\r\n      <div class=\"calendarButton contentVerticalCenter\" id=\"calendarNext\"></div>\r\n    </div>\r\n\r\n    <div class=\"flex paddingLayoutRoule\">\r\n      <input class=\"flexGrow squareButton\" name=\"chiudi calendario\" type=\"button\" (click)=\"changeCalendarState(false)\" value=\"chiudi\">\r\n      <div class=\"widthLayoutRoule\"></div>\r\n      <input class=\"flexGrow squareButton accentButton\" type=\"button\" name=\"seleziona giorno\" (click)=\"showDay()\" value=\"seleziona\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"flexGrow\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/calendar/calendar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__firebase_service__ = __webpack_require__("../../../../../src/app/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_eventsHandler_service__ = __webpack_require__("../../../../../src/app/Services/eventsHandler.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CalendarComponent = (function () {
    function CalendarComponent(appService, service) {
        this.appService = appService;
        this.service = service;
        this.dayOfMouth = [];
        for (var i = 1; i < 31; i++) {
            this.dayOfMouth.push(i);
        }
    }
    CalendarComponent.prototype.ngOnInit = function () {
        this.getIsCalendarOpen();
    };
    CalendarComponent.prototype.changeCalendarState = function (open) {
        this.appService.setCalendarOpen(open);
    };
    CalendarComponent.prototype.getIsCalendarOpen = function () {
        var _this = this;
        this.appService.getCalendarOpen().subscribe(function (calendarState) {
            console.log('calendarState: ' + calendarState);
            _this.isCalendarOpen = calendarState;
        });
    };
    CalendarComponent.prototype.showDay = function () {
        this.service.clickedDay.emit(this.selectedDay);
        this.changeCalendarState(false);
    };
    CalendarComponent.prototype.changeSelectedDay = function (dayNum) {
        this.selectedDay = dayNum;
    };
    CalendarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-calendar',
            template: __webpack_require__("../../../../../src/app/calendar/calendar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/calendar/calendar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__Services_eventsHandler_service__["a" /* EventsHandler */], __WEBPACK_IMPORTED_MODULE_1__firebase_service__["a" /* FirebaseService */]])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/event-list/event-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".EventiUtente{\r\n  width: 100%;\r\n  margin: 2% 0;\r\n  height: 20%;\r\n  background: lightblue;\r\n  box-sizing: border-box;\r\n  overflow: hidden;\r\n  border: 1px solid rgba(255, 0, 0, 0.14);\r\n}\r\ndiv.EventiUtente div.col-9{\r\n  background: white;\r\n  height: 100%;\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0 5%;\r\n}\r\ndiv.EventiUtente div.col-3{\r\n  background-image: url(" + __webpack_require__("../../../../../src/assets/EventDefault.jpg") + ");\r\n  background-size: cover;\r\n  height: 100%;\r\n}\r\ndiv.EventiUtente div.col-9 p{\r\n  margin-top: 4%;\r\n  margin-bottom: 4%;\r\n}\r\ndiv.EventiUtente div.col-9 p:first-child{\r\n  font-size: 25px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/event-list/event-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <button type=\"button\" (click)=\"mieiEventi()\">miei eventi</button>\r\n<button type=\"button\" (click)=\"esploraEventi()\">esploraFilter nuovi</button> -->\r\n<div class=\"flex flexWrap\">\r\n  <div *ngFor=\"let evento of showEvents\" class=\"card\">\r\n    <div class=\"cardImg\" [style.background-image]=\"'url('+evento.immagine+')'\"></div>\r\n    <div class=\"cardDetail\">\r\n      <div class=\"cardRoundButtonContainer\">\r\n        <button *ngIf=\"evento.owner === 'sandra.green@email.com'\" name=\"cancella evento\" class=\"cRBdelete\" (click)=\"deleteEvent(evento.key)\"></button>\r\n        <button *ngIf=\"evento.owner === 'sandra.green@email.com'\" name=\"modifica evento\" class=\"cRBedit\" (click)=\"editEvent(evento.key)\"></button>\r\n        <button *ngIf=\"evento.owner !== 'sandra.green@email.com'\" name=\"partecipa ad evento\" class=\"cRBnoPartecipa\" (click)=\"partecipaEvent(evento.key)\"></button>\r\n      </div>\r\n      <h2>{{evento.titolo}}</h2>\r\n      <div class=\"lineMargin\">\r\n        <img class=\"lineIcon\" src=\"./assets/calendarBlack.svg\" alt=\"calendar\" />\r\n        <span>{{evento.data}} {{evento.sede}}</span>\r\n      </div>\r\n      <div>\r\n        <img class=\"lineIcon\" src=\"./assets/users.svg\" alt=\"calendar\" />\r\n        <span>{{evento.partecipanti}}</span>\r\n      </div>\r\n      <div>\r\n        <p class=\"textJustified\">{{evento.descrizione}}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"space width100\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/event-list/event-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__firebase_service__ = __webpack_require__("../../../../../src/app/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventListComponent = (function () {
    function EventListComponent(router, activatedRoute, service) {
        this.router = router;
        this.service = service;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    EventListComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.eventsId !== []) {
            this.loadList(1);
        }
        this.service.clickedDay.subscribe(function (num) { return _this.showList(num); });
    };
    EventListComponent.prototype.loadList = function (day) {
        var _this = this;
        this.eventKeys = [];
        this.eventList = [];
        this.service.getData('Eventi.json').subscribe(function (events) {
            for (var idx in events) {
                console.log('event:' + idx);
                console.log(_this.eventsId);
                var isOwner = events[idx].owner.toLowerCase() === _this.currentUser.email.toLowerCase();
                var isGoing = __WEBPACK_IMPORTED_MODULE_3_lodash__["includes"](_this.currentUser.eventi, idx);
                console.log('isOwner:' + isOwner);
                console.log('isGoing:' + isGoing);
                if ((_this.esploraFilter && isOwner === false && isGoing === false) ||
                    (_this.goingFilter && (isOwner || isGoing)) ||
                    (_this.ownerFilter && isOwner)) {
                    console.log('add evento to list');
                    var tmpEvent = {
                        key: idx,
                        data: events[idx].data,
                        id: events[idx].id,
                        descrizione: events[idx].descrizione,
                        immagine: events[idx].immagine,
                        ora: events[idx].ora,
                        owner: events[idx].owner,
                        partecipanti: events[idx].partecipanti,
                        sede: events[idx].sede,
                        titolo: events[idx].titolo
                    };
                    _this.eventList.push(tmpEvent);
                }
            }
            _this.eventList = __WEBPACK_IMPORTED_MODULE_3_lodash__["sortBy"](_this.eventList, function (e) { return e.data; });
            _this.showList(day); // giorno odierno
        });
    };
    EventListComponent.prototype.showList = function (selectedDay) {
        console.log('showList');
        this.showEvents = [];
        for (var _i = 0, _a = this.eventList; _i < _a.length; _i++) {
            var event_1 = _a[_i];
            var dayNumber = (event_1.data.split('-'))[2];
            if (parseFloat(dayNumber) >= selectedDay) {
                // console.log(idx);
                this.showEvents.push(event_1);
            }
        }
        console.log('this.showEvents caricato:' + this.showEvents);
        console.log(this.showEvents);
    };
    // tasto cancella, occhio a id / key
    EventListComponent.prototype.deleteEvent = function (key) {
        var _this = this;
        if (window.confirm('sicuro di voler cancellare?')) {
            for (var eventidx in this.eventList) {
                if (this.eventList[eventidx].owner === 'sandra.green@email.com' && this.eventList[eventidx].key === key) {
                    // chiave evento
                    console.log(key);
                    console.log(eventidx);
                    this.service.deleteEvent(key).subscribe(function (arg) {
                        console.log('eliminato');
                        _this.loadList(1);
                    });
                }
            }
        }
    };
    EventListComponent.prototype.editEvent = function (key) {
        this.router.navigateByUrl('/new-event/' + key);
    };
    EventListComponent.prototype.partecipaEvent = function (key) {
        var _this = this;
        this.eventsId.push(key);
        this.service.edit('Utenti/' + this.currentUser + '/eventi.json', key).subscribe(function (ids) { return _this.loadList(1); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], EventListComponent.prototype, "eventsId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], EventListComponent.prototype, "esploraFilter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], EventListComponent.prototype, "ownerFilter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], EventListComponent.prototype, "goingFilter", void 0);
    EventListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-event-list',
            template: __webpack_require__("../../../../../src/app/event-list/event-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/event-list/event-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__firebase_service__["a" /* FirebaseService */]])
    ], EventListComponent);
    return EventListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/firebase.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FirebaseService = (function () {
    function FirebaseService(http) {
        this.clickedDay = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.apiUrl = 'https://ilclub-e17b5.firebaseio.com/';
        this.http = http;
    }
    FirebaseService.prototype.getData = function (data) {
        return this.http.get(this.apiUrl + data)
            .map(function (res) { return res.json(); });
    };
    FirebaseService.prototype.getEvent = function (key) {
        return this.http.get(this.apiUrl + 'Eventi/' + key + '.json').map(function (response) { return response.json(); });
    };
    FirebaseService.prototype.createEvent = function (event) {
        return this.http.post(this.apiUrl + 'Eventi.json', event).map(function (response) { return response.json(); });
    };
    FirebaseService.prototype.deleteEvent = function (key) {
        return this.http.delete(this.apiUrl + 'Eventi/' + key + '.json').map(function (response) { return response.json(); });
    };
    FirebaseService.prototype.editEvent = function (key, event) {
        return this.http.put(this.apiUrl + 'Eventi/' + key + '.json', event).map(function (response) { return response.json(); });
    };
    FirebaseService.prototype.edit = function (key, id) {
        return this.http.post(this.apiUrl + key, id).map(function (response) { return response.json(); });
    };
    FirebaseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], FirebaseService);
    return FirebaseService;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".headerButton {\r\n  cursor: pointer;\r\n  height: 100%;\r\n  width: 3.4rem;\r\n  text-align: center;\r\n  background-size: auto 50%;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n}\r\n.headerButton:hover {\r\n  background-color: rgba(255, 255, 255, 0.25);\r\n}\r\n.homeHeaderButton{\r\n  min-width: 9rem;\r\n}\r\n.headerButton>*{\r\n   line-height: 3.4rem;\r\n }\r\n#barra1, #barra2, #barra3{\r\n  width: 1.9rem;\r\n  height: 0.2rem;\r\n  background-color: white;\r\n  margin: 0.2rem 0px;\r\n  transition: 0.3s;\r\n  transition-timing-function: ease-in;\r\n}\r\n#barra2{\r\n  margin: 0.4rem 0px;\r\n}\r\n\r\n.change #barra1 {\r\n  -webkit-transform: rotate(-45deg) translate(-0.25rem, 0.6rem) ;\r\n  transform: rotate(-45deg) translate(-0.25rem, 0.6rem) ;\r\n}\r\n.change #barra2 {opacity: 0;}\r\n.change #barra3 {\r\n  -webkit-transform: rotate(45deg) translate(-0.25rem, -0.6rem) ;\r\n  transform: rotate(45deg) translate(-0.25rem, -0.6rem) ;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"blurable\" [ngClass]=\"isCalendarOpen? 'blur' : 'focus'\">\r\n  <div class=\"width35 mobile\">\r\n    <div id=\"menuButton\" class=\"headerButton\" [ngClass]=\"isMenuOpen ? 'change': '' \" (click)=\"menuClicked()\">\r\n      <div id=\"barra1\"></div>\r\n      <div id=\"barra2\"></div>\r\n      <div id=\"barra3\"></div>\r\n    </div>\r\n  </div>\r\n\r\n  <div routerLink=\"/home\" class=\"flexGrow headerButton mobile\" (click)=\"closeSideMenu()\">\r\n    <h1 class=\"contentVerticalCenter\">ilClub</h1>\r\n  </div>\r\n\r\n  <div class=\"width35 overflow mobile\">\r\n    <div routerLink=\"esplora\" class=\"headerButton floatRight\" [style.background-image]=\"'url(./assets/search.svg)'\" (click)=\"closeSideMenu()\">\r\n    </div>\r\n  </div>\r\n  <div routerLink=\"/home\" class=\"headerButton homeHeaderButton desktop\" (click)=\"closeSideMenu()\">\r\n    <h1 class=\"contentVerticalCenter\">&nbsp;&nbsp; ilClub</h1>\r\n  </div>\r\n  <div class=\"desktop\">\r\n    <div routerLink=\"new-event\" class=\"headerButton contentCenter\" [style.background-image]=\"'url(./assets/new.svg)'\"></div>\r\n  </div>\r\n  <div class=\"desktop\">\r\n    <div routerLink=\"profile\" class=\"headerButton contentCenter\" [style.background-image]=\"'url(./assets/user.svg)'\" ></div>\r\n  </div>\r\n  <div class=\"desktop\">\r\n    <div routerLink=\"esplora\" class=\"headerButton contentCenter\" [style.background-image]=\"'url(./assets/search.svg)'\"></div>\r\n  </div>\r\n</header>\r\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_eventsHandler_service__ = __webpack_require__("../../../../../src/app/Services/eventsHandler.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(appService, router, activatedRoute) {
        this.appService = appService;
        this.router = router;
        this.isMenuOpen = false;
        this.isCalendarOpen = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.serviceUser.setEmail(this.userEmail);
        this.appService.getCalendarOpen().subscribe(function (calendarState) {
            _this.isCalendarOpen = calendarState;
        });
        this.appService.getIsMenuOpen().subscribe(function (isMenuOpen) {
            console.log('HEADER getIsMenuOpen: ' + isMenuOpen);
            _this.isMenuOpen = isMenuOpen;
        });
    };
    HeaderComponent.prototype.closeSideMenu = function () {
        this.appService.setIsMenuOpen(false);
    };
    HeaderComponent.prototype.menuClicked = function () {
        this.appService.setIsMenuOpen(!this.isMenuOpen);
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_eventsHandler_service__["a" /* EventsHandler */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/event.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Event; });
var Event = (function () {
    function Event() {
    }
    return Event;
}());



/***/ }),

/***/ "../../../../../src/app/sidemenu/sidemenu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".menuNav{\r\n  width: 100vw;\r\n  height: calc(100% - 3.4rem);\r\n  position: fixed;\r\n  top: 3.4rem;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  color: white;\r\n  -webkit-transform: translateX(-100vw);\r\n          transform: translateX(-100vw);\r\n  transition: -webkit-transform 0.2s ease-in;\r\n  transition: transform 0.2s ease-in;\r\n  transition: transform 0.2s ease-in, -webkit-transform 0.2s ease-in;\r\n  z-index: 500;\r\n}\r\n.menuNav>*:first-child {\r\n  width: 300px;\r\n  height: 100%;\r\n  background-color: #B30000;\r\n  background-color: var(--ilClub-red, #B30000);\r\n  padding: 16px;\r\n  padding: var(--margin-layout, 16px);\r\n  box-shadow: 9px 0 10px -8px rgba(0, 0, 0, 0.35);\r\n}\r\n.menuNav>*:last-child{\r\n  background-color: transparent;\r\n}\r\n.change1 {\r\n  -webkit-transform: translateX(0) !important;\r\n  transform: translateX(0) !important;\r\n}\r\n.profileImg {\r\n  width: 9rem;\r\n  height: 9rem;\r\n  margin: 0 auto 0 auto;\r\n  border-radius: 50%;\r\n  border: 0.18rem white solid;\r\n  background: url(" + __webpack_require__("../../../../../src/assets/profile.jpg") + ") no-repeat;\r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\n.counterContainer {\r\n  width: 8rem;\r\n  margin: 0 auto 0 auto;\r\n}\r\n.counterContainer p {\r\n  color: white;\r\n  font-size: 1.75rem;\r\n}\r\n.counterContainer img {\r\n  height: 1.45rem;\r\n}\r\n.menuList li{\r\n  padding-bottom: 16px;\r\n  padding-bottom: var(--margin-layout, 16px);\r\n  padding-top: 16px;\r\n  padding-top: var(--margin-layout, 16px);\r\n  font-size: 1.3rem;\r\n  overflow: hidden;\r\n  transition: -webkit-transform 0.1s ease-in;\r\n  transition: transform 0.1s ease-in;\r\n  transition: transform 0.1s ease-in, -webkit-transform 0.1s ease-in;\r\n}\r\n\r\n.menuList li a{\r\n  width: 100%;\r\n  height: 100%;\r\n  display: inline-block;\r\n}\r\n.menuList li:hover {\r\n  -webkit-transform: translate(35px, 0);\r\n  transform: translate(35px, 0);\r\n}\r\n.menuList li img {\r\n  height: 1.45rem;\r\n  float: right;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidemenu/sidemenu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"menuNav\" [ngClass]=\"isMenuOpen? 'change1' : ''\">\n  <nav>\n    <div routerLink=\"profile\" (click)=\"close()\" class=\"profileImg\"></div>\n    <h2 routerLink=\"profile\" (click)=\"close()\" class=\"texCenter lineMargin\">Sandra Green</h2>\n    <div class=\"counterContainer overflow\">\n      <div class=\"floatLeft texCenter\">\n        <p id=\"menuNav_interestedCounter\">4</p>\n        <img class=\"halfLineMargin lineIcon\" alt=\"interested\" src=\"./assets/bookmark.svg\" />\n      </div>\n      <div class=\"floatRight texCenter\">\n        <p id=\"menuNav_goingCounter\">1</p>\n        <img class=\"halfLineMargin lineIcon\" alt=\"going\" src=\"./assets/bookmark.svg\" />\n      </div>\n    </div>\n    <ul class=\"menuList paddingLayoutRoule\">\n      <li routerLink=\"profile\" (click)=\"close()\">\n        <a>Profilo\n          <img src=\"./assets/next.svg\" alt=\"open\" />\n        </a>\n      </li>\n      <li routerLink=\"esplora\" (click)=\"close()\">\n        <a>Esplora\n          <img src=\"./assets/next.svg\" alt=\"open\" />\n        </a>\n\n      </li>\n      <li routerLink=\"new-event\" (click)=\"close()\">\n        <a>Nuovo evento\n          <img src=\"./assets/next.svg\" alt=\"open\" />\n        </a>\n      </li>\n      <li routerLink=\"logout\" (click)=\"close()\">\n        <a>Logout\n          <img src=\"./assets/next.svg\" alt=\"open\" />\n        </a>\n      </li>\n    </ul>\n  </nav>\n  <div class=\"flexGrow\" (click)=\"close()\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/sidemenu/sidemenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_eventsHandler_service__ = __webpack_require__("../../../../../src/app/Services/eventsHandler.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SideMenuComponent = (function () {
    function SideMenuComponent(appService) {
        this.appService = appService;
        this.isMenuOpen = false;
    }
    SideMenuComponent.prototype.ngOnInit = function () {
        this.getIsMenuOpen();
        console.log('sei in init');
    };
    SideMenuComponent.prototype.close = function () {
        this.appService.setIsMenuOpen(false);
    };
    SideMenuComponent.prototype.getIsMenuOpen = function () {
        var _this = this;
        console.log('SIDEMENU');
        this.appService.getIsMenuOpen().subscribe(function (isMenuOpen) {
            console.log('SIDEMENU getIsMenuOpen: ' + isMenuOpen);
            _this.isMenuOpen = isMenuOpen;
        });
    };
    SideMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidemenu',
            template: __webpack_require__("../../../../../src/app/sidemenu/sidemenu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sidemenu/sidemenu.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_eventsHandler_service__["a" /* EventsHandler */]])
    ], SideMenuComponent);
    return SideMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/assets/EventDefault.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "EventDefault.5c49ef99a5c51c8df97d.jpg";

/***/ }),

/***/ "../../../../../src/assets/loginBkg.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "loginBkg.d4a14c2f29971a9cc7e0.jpg";

/***/ }),

/***/ "../../../../../src/assets/profile.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "profile.c1f92b679c91b5e654ec.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map