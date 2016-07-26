import { Component, Input } from '@angular/core';
import { Hero } from 'app/hero';
import { HEROES } from 'app/hero';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail.html'
})

export class HeroDetailComponent {
    @Input()
    hero: Hero;
}