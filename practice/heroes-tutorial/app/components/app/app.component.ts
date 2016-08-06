import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { HeroService } from 'app/services/hero/hero.service';
import { HeroDetailComponent } from 'app/components/hero-detail/hero-detail.component'
import { DashboardComponent } from 'app/components/dashboard/dashboard.component'
import { HeroSearchComponent } from 'app/components/hero-search/hero-search.component'
import { HeroesComponent } from 'app/components/heroes/heroes.component'

import 'app/rxjs-extensions';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/components/app/app.component.html',
    styleUrls: ['styles.css', 'app/components/app/app.component.css'],
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