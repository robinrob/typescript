import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from 'app/hero';
import { HeroService } from 'app/services/hero/hero.service';
import { HeroSearchComponent } from 'app/components/hero-search/hero-search.component'

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/components/dashboard/dashboard.component.html',
    styleUrls: ['styles.css', 'app/components/dashboard/dashboard.component.css'],
    directives: [HeroSearchComponent]
})

export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];

    constructor(
        private router: Router,
        private heroService: HeroService
    ) {}

    ngOnInit() {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }

    gotoDetail(hero: Hero) {
        let link = ['/heroes', hero.id];
        this.router.navigate(link);
    }
}