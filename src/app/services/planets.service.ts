import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Planets } from '../models/planets.model';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  private http = inject(HttpClient);
  private url = 'https://planetsapi-1.onrender.com';

  constructor() { }

  getPlanets(){
    return this.http.get<Planets[]>(`${this.url}/planets`);
  }

  getPlanetByName(name: string){
    const params = new HttpParams().set('name', name);
    return this.http.get<Planets[]>(`${this.url}/planets`, { params });
  }
}
