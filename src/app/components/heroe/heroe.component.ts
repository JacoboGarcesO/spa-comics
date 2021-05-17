import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Heroe from 'src/app/models/heroe.model';
import { HeroesService } from './../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: Heroe;

  img: Img = {
    dc: '../../../assets/img/dc_logo.svg',
    marvel: '../../../assets/img/marvel-logo.jpg'
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: HeroesService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.heroe = this.service.getHeroe(params?.id);
    });
  }

  imgProductora(): string {
    if (this.heroe.casa === 'DC') {
      return this.img.dc;
    } else {
      return this.img.marvel;
    }
  }

  regresar(): void {
    this.router.navigate(['/heroes']);
  }


}



interface Img {
  dc: string;
  marvel: string;
}
