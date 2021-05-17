import { SerachHeroesComponent } from './components/serach-heroes/serach-heroes.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';


const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'heroes', component: HeroesComponent},
    {path: 'heroe/:id', component: HeroeComponent},
    {path: 'search/:term', component: SerachHeroesComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const ROUTING = RouterModule.forRoot(ROUTES);

