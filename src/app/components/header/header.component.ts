import { Component, OnInit, inject, signal } from '@angular/core';
import { UpperCasePipe } from "@angular/common";
import { Planets } from '../../models/planets.model';
import { PlanetsService } from '../../services/planets.service';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [UpperCasePipe, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  planets = signal<Planets[]>([]);
  planets_service = inject(PlanetsService);

  ngOnInit(){
    this.planets_service.getPlanets().subscribe({
      next: (planets) => {
        this.planets.set(planets);
      }
    })
  }

}
