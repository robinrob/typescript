import { Component }       from '@angular/core';
import { HeroService }     from './hero.service';
import { HeroesComponent } from './heroes.component';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/app.html',
    directives: [HeroesComponent],
    providers: [
        HeroService
    ]
})
export class AppComponent {
    title = 'Tour of Heroes';
}