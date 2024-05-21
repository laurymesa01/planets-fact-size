import { Component, Input, OnInit, inject, signal } from '@angular/core';
import { PlanetsService } from '../../services/planets.service';
import { Planets } from '../../models/planets.model';
import { UpperCasePipe } from "@angular/common";
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-planet',
  standalone: true,
  imports: [UpperCasePipe, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './planet.component.html',
  styleUrl: './planet.component.scss'
})
export class PlanetComponent implements OnInit{

  @Input() name: string = '';

  planet = signal<Planets | null>(null);
  private planets_service = inject(PlanetsService);

  ngOnInit(){
    this.planets_service.getPlanetByName(this.name).subscribe({
      next: (planet) => {
        this.planet.set(planet[0]);
      }
    })
  }


}
