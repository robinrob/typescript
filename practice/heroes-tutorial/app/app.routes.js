"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('app/components/dashboard/dashboard.component');
var heroes_component_1 = require('app/components/heroes/heroes.component');
var hero_detail_component_1 = require('app/components/hero-detail/hero-detail.component');
var routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'heroes/:id',
        component: hero_detail_component_1.HeroDetailComponent
    },
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map