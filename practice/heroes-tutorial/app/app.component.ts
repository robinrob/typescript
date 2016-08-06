import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { HeroService } from './hero.service';
import { HeroDetailComponent } from './hero-detail.component'
import { DashboardComponent } from './dashboard.component'
import { HeroSearchComponent } from './hero-search.component'
import { HeroesComponent } from './heroes.component'

import './rxjs-extensions';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/app.component.html',
    styleUrls: ['styles.css', 'app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        HeroService
    ],
    precompile: [
        DashboardComponent,
        HeroDetailComponent,
        HeroSearchComponent,
        HeroesComponent
    ]
})

export class AppComponent {
    title = 'Tour of Heroes';
}