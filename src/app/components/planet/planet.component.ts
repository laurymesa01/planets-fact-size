import { Component, Input, OnInit, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsService } from '../../services/planets.service';
import { Planets } from '../../models/planets.model';
import { UpperCasePipe } from "@angular/common";
import { RouterLinkWithHref, RouterLinkActive, Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Subscription, filter, switchMap } from 'rxjs';
import { ColorsService } from '../../services/colors.service';


@Component({
  selector: 'app-planet',
  standalone: true,
  imports: [UpperCasePipe, RouterLinkWithHref, RouterLinkActive, CommonModule],
  templateUrl: './planet.component.html',
  styleUrl: './planet.component.scss'
})
export class PlanetComponent implements OnInit{

  planet = signal<Planets>({
    name: '',
    overview: {
      content: '',
      source: ''
    },
    structure: {
      content: '',
      source: ''
    },
    geology: {
      content: '',
      source: ''
    },
    rotation: '',
    revolution: '',
    radius: '',
    temperature: '',
    images: {
      planet: '',
      internal: '',
      geology: ''
    }
  });
  private planets_service = inject(PlanetsService);
  private colors_service = inject(ColorsService);
  routeActive: string = '';
  img: string = '';
  source: string = '';
  public subscriber!: Subscription;


  constructor(private route: ActivatedRoute,
              private router: Router){
  }

  ngOnInit(){
    this.route.params.pipe(
      switchMap( ( {name} ) => this.planets_service.getPlanetByName(name))
    )
    .subscribe({
      next: (planet: Planets[]) => {
        this.planet.set(planet[0]);
        this.img = this.planet().images.planet;
        this.source = this.planet().overview.source;
      }
    })
    this.getUrlSegment();
  }

  getUrlSegment(){
    this.subscriber = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
        this.routeActive = event['url'];
        this.getPropertiesByUrlSegment(event['url'])
    });
  }

  getPropertiesByUrlSegment(url: string){
    if (url.includes('surface')) {
      this.img = this.planet().images.geology;
      this.source = this.planet().geology.source;
    }
    else if(url.includes('structure')){
      this.img = this.planet().images.internal;
      this.source = this.planet().structure.source;
    }
    else{
      this.img = this.planet().images.planet;
      this.source = this.planet().overview.source;
    }
  }

  getButtonColorByPlanet(planetName: string){
    const c = this.colors_service.getColorButtonByPlanet(planetName);
    console.log('color',c);
    return c;
  }
}
