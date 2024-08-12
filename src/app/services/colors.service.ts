import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  currentColor: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.getColorButtonByPlanet(event.urlAfterRedirects);
      }
    })
  }

  getColorButtonByPlanet(url: string){
    if (url.includes('Mercury')) {
      this.currentColor = 'bg-mercury'
    }
    else if(url.includes('Venus')){
      this.currentColor = 'bg-venus'
    }
    else if(url.includes('Earth')){
      this.currentColor = 'bg-earth'
    }
    else if(url.includes('Mars')){
      this.currentColor = 'bg-mars'
    }
    else if(url.includes('Jupiter')){
      this.currentColor = 'bg-jupiter'
    }
    else if(url.includes('Saturn')){
      this.currentColor = 'bg-saturn'
    }
    else if(url.includes('Uranus')){
      this.currentColor = 'bg-uranus'
    }
    else if(url.includes('Neptune')){
      this.currentColor = 'bg-neptune'
    }
    else{
      this.currentColor = 'bg-mercury';
    }
    // this.currentColor = `bg-${planetName.toLowerCase()}`;
  }
}
