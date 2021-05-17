import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Heroe from 'src/app/models/heroe.model';
import { HeroesService } from './../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];
  constructor(
    private service: HeroesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.heroes = this.service.getHeroes();
  }

  verHeroe(id: number): void {
    this.router.navigate(['/heroe', id]);
  }
}
