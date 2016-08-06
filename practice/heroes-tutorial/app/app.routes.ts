import { provideRouter, RouterConfig }  from '@angular/router';
import { DashboardComponent } from 'app/components/dashboard/dashboard.component';
import { HeroesComponent } from 'app/components/heroes/heroes.component';
import { HeroDetailComponent } from 'app/components/hero-detail/hero-detail.component';

const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'heroes/:id',
        component: HeroDetailComponent
    },
];

export const appRouterProviders = [
    provideRouter(routes)
];