import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  currentColor: string = '';
  currentBorder: string = '';
  currentBorderHeader: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.getColorButtonByPlanet(event.urlAfterRedirects);
      }
    })
  }

  getColorButtonByPlanet(url: string){
    if (url.includes('Mercury')) {
      this.currentColor = 'bg-mercury';
      this.currentBorder = 'decoration-mercury';
      this.currentBorderHeader = 'border-mercury';

    }
    else if(url.includes('Venus')){
      this.currentColor = 'bg-venus';
      this.currentBorder = 'decoration-venus';
      this.currentBorderHeader = 'border-venus';

    }
    else if(url.includes('Earth')){
      this.currentColor = 'bg-earth';
      this.currentBorder = 'decoration-earth';
      this.currentBorderHeader = 'border-earth';

    }
    else if(url.includes('Mars')){
      this.currentColor = 'bg-mars';
      this.currentBorder = 'decoration-mars';
      this.currentBorderHeader = 'border-mars';

    }
    else if(url.includes('Jupiter')){
      this.currentColor = 'bg-jupiter';
      this.currentBorder = 'decoration-jupiter';
      this.currentBorderHeader = 'border-jupiter';

    }
    else if(url.includes('Saturn')){
      this.currentColor = 'bg-saturn';
      this.currentBorder = 'decoration-saturn';
      this.currentBorderHeader = 'border-saturn';

    }
    else if(url.includes('Uranus')){
      this.currentColor = 'bg-uranus';
      this.currentBorder = 'decoration-uranus';
      this.currentBorderHeader = 'border-uranus';
    }
    else if(url.includes('Neptune')){
      this.currentColor = 'bg-neptune';
      this.currentBorder = 'decoration-neptune';
      this.currentBorderHeader = 'border-neptune';

    }
    else{
      this.currentColor = 'bg-mercury';
      this.currentBorder = 'decoration-mercury';
      this.currentBorderHeader = 'border-mercury';

    }
    // this.currentColor = `bg-${planetName.toLowerCase()}`;
  }
}
