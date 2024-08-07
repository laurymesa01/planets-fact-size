import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  constructor() { }

  getColorButtonByPlanet(planetName: string){
    return planetName.toLowerCase();
  }
}
