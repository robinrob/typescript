"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var hero_service_1 = require('app/services/hero/hero.service');
var hero_detail_component_1 = require('app/components/hero-detail/hero-detail.component');
var dashboard_component_1 = require('app/components/dashboard/dashboard.component');
var hero_search_component_1 = require('app/components/hero-search/hero-search.component');
var heroes_component_1 = require('app/components/heroes/heroes.component');
require('app/rxjs-extensions');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-heroes',
            templateUrl: 'app/components/app/app.component.html',
            styleUrls: ['styles.css', 'app/components/app/app.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [
                hero_service_1.HeroService
            ],
            precompile: [
                dashboard_component_1.DashboardComponent,
                hero_detail_component_1.HeroDetailComponent,
                hero_search_component_1.HeroSearchComponent,
                heroes_component_1.HeroesComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map