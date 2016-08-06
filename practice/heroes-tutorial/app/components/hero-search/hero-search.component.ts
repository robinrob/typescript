import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'node_modules/rxjs/Observable';
import { Subject }           from 'node_modules/rxjs/Subject';

import { HeroSearchService } from 'app/services/hero-search/hero-search.service';
import { Hero } from 'app/hero';

@Component({
    selector: 'hero-search',
    templateUrl: 'app/components/hero-search/hero-search.component.html',
    providers: [HeroSearchService],
    styleUrls: ['styles.css', 'app/components/hero-search/hero-search.component.css'],
})

export class HeroSearchComponent implements OnInit {
    heroes: Observable<Hero[]>;
    private searchTerms = new Subject<string>();
    constructor(
        private heroSearchService: HeroSearchService,
        private router: Router) {}
    // Push a search term into the observable stream.
    search(term: string) { this.searchTerms.next(term); }
    ngOnInit() {
        this.heroes = this.searchTerms
            .debounceTime(300)        // wait for 300ms pause in eve
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => term   // switch to new observable each time
                // return the http search observable
                ? this.heroSearchService.search(term)
                // or the observable of empty heroes if no search term
                : Observable.of<Hero[]>([]))
            .catch(error => {
                // TODO: real error handling
                console.log(error);
                return Observable.of<Hero[]>([]);
            });
    }
    gotoDetail(hero: Hero) {
        let link = ['/heroes', hero.id];
        this.router.navigate(link);
    }
}