import { AfterContentChecked, ChangeDetectorRef, Component, OnInit, inject, signal } from '@angular/core';
import { UpperCasePipe } from "@angular/common";
import { Planets } from '../../models/planets.model';
import { PlanetsService } from '../../services/planets.service';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';
import { MenuComponent } from "../menu/menu.component";
import { ColorsService } from '../../services/colors.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, UpperCasePipe, RouterLinkWithHref, RouterLinkActive, MenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  isOpenMenu: boolean = false;
  planets = signal<Planets[]>([]);
  planets_service = inject(PlanetsService);
  public colors_service = inject(ColorsService);

  constructor(){}

  ngOnInit(){
    this.planets_service.getPlanets().subscribe({
      next: (planets) => {
        this.planets.set(planets);
      }
    })
  }


  openMenu(){
    this.isOpenMenu = !this.isOpenMenu;
  }

}
