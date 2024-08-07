import { Component, Input, inject } from '@angular/core';
import { UpperCasePipe } from "@angular/common";
import { Planets } from '../../models/planets.model';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';
import { ColorsService } from '../../services/colors.service';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLinkWithHref, RouterLinkActive, UpperCasePipe],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  private colors_service = inject(ColorsService);

  @Input() planets: Planets[] = [];

  buttonColorByPlanet(planetName: string){
    return `bg-${this.colors_service.getColorButtonByPlanet(planetName)}`;
  }

}
