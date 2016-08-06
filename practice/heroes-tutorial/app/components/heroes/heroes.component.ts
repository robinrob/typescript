import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeroDetailComponent } from 'app/components/hero-detail/hero-detail.component';
import { Hero } from 'app/hero';
import { HeroService } from 'app/services/hero/hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/components/heroes/heroes.component.html',
    styleUrls: ['styles.css', 'app/components/heroes/heroes.component.css'],
    directives: [HeroDetailComponent]
})

export class HeroesComponent implements OnInit {
    heroes: Hero[];

    title = 'Tour of Heroes';

    selectedHero: Hero;

    addingHero = false;

    error = null

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

    addHero() {
        this.addingHero = true;
        this.selectedHero = null;
    }

    close(savedHero: Hero) {
        this.addingHero = false;
        if (savedHero) { this.getHeroes(); }
    }

    deleteHero(hero: Hero, event: any) {
        event.stopPropagation();
        this.heroService
            .delete(hero)
            .then(res => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) { this.selectedHero = null; }
            })
            .catch(error => this.error = error);
    }
}
