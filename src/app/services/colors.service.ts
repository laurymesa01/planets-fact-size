import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  constructor() { }

  getColorButtonByPlanet(planetName: string){
    const color = planetName.toLowerCase();
    return `bg-${color}`;
  }
}
