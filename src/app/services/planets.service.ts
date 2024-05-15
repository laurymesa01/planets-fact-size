import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Planets } from '../models/planets.model';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  private http = inject(HttpClient);
  private url = 'http://localhost:3000/planets';

  constructor() { }

  getPlanets(){
    return this.http.get<Planets[]>(this.url);
  }
}
