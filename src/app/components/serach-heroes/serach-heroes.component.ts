import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from './../../services/heroes.service';
import Heroe from 'src/app/models/heroe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serach-heroes',
  templateUrl: './serach-heroes.component.html'
})
export class SerachHeroesComponent {

  heroes: Heroe[] = [];
  termino = '';
  constructor(
    private service: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe(param => {
      this.termino = param?.term;
      this.heroes = this.service.buscarHeroes(param?.term);
    });
  }

  regresar(): void {
    this.router.navigate(['/heroes']);
  }

  hayHeroes(): boolean {
    if (this.heroes.length === 0) {
      return false;
    } else {
      return true;
    }
  }
}
