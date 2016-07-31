import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeroDetailComponent } from './hero-detail.component';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['styles.css', 'app/heroes.component.css'],
    directives: [HeroDetailComponent],
})

export class HeroesComponent implements OnInit {
    heroes: Hero[];

    title = 'Tour of Heroes';

    selectedHero: Hero;

    constructor(
        private router: Router,
        private heroService: HeroService
    ) {}

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero) { this.selectedHero = hero; }

    gotoDetail() {
        this.router.navigate(['/heroes', this.selectedHero.id]);
    }
}
