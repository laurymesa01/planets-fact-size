import { Component, Input, inject } from '@angular/core';
import { UpperCasePipe } from "@angular/common";
import { Planets } from '../../models/planets.model';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';
import { ColorsService } from '../../services/colors.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLinkWithHref, RouterLinkActive, UpperCasePipe,CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  public colors_service = inject(ColorsService);

  @Input() planets: Planets[] = [];


  buttonColorByPlanet(planetName: string){
    return `bg-${planetName.toLowerCase()}`;
    // return `bg-${this.colors_service.getColorButtonByPlanet(planetName)}`;
  }

}
