import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { HeroDetailComponent } from './hero-detail.component';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.html',
    styleUrls: ['app/styles.css'],
    directives: [HeroDetailComponent],
    providers: [HeroService]
})

export class AppComponent implements OnInit {
    ngOnInit() {
        this.getHeroes();
    }

    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    heroes: Hero[];

    title = 'Tour of Heroes';

    selectedHero: Hero;

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    constructor(private heroService: HeroService) {}
}
