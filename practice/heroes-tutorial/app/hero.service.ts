import { Injectable } from '@angular/core';

import * as _ from 'lodash';

import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    getHeroes() {
        return Promise.resolve(HEROES);
    }

    getHero(id) {
        return Promise.resolve(_.find(HEROES, ['id', id]))
    }
}