import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'planet/Mercury',
        pathMatch: 'prefix'
      },
      {
        path:'planet/:name',
        loadComponent: () => import('./components/planet/planet.component').then(m => m.PlanetComponent),
        children: [
          {
            path: '',
            redirectTo: 'overview',
            pathMatch: 'prefix'
          },
          {
            path: 'overview',
            loadComponent: () => import('./components/planet/planet.component').then(m => m.PlanetComponent),
          },
          {
            path: 'structure',
            loadComponent: () => import('./components/planet/planet.component').then(m => m.PlanetComponent)
          },
          {
            path: 'surface',
            loadComponent: () => import('./components/planet/planet.component').then(m => m.PlanetComponent)
          },
        ]
      }
    ]
  }
];
