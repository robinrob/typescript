import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { HeroService }     from './hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/app.component.html',
    styleUrls: ['styles.css', 'app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        HeroService
    ]
})

export class AppComponent {
    title = 'Tour of Heroes';
}