import { Component } from '@angular/core';
import { HeroDetailComponent } from 'app/hero-detail.component';
import { Hero } from 'app/hero';
import { HEROES } from 'app/hero';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.html',
    styleUrls: ['app/styles.css'],
    directives: [HeroDetailComponent]
})

export class AppComponent {
    heroes = HEROES;

    title = 'Tour of Heroes';

    selectedHero: Hero;

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }
}
