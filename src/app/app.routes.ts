import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./charts/charts').then((m) => m.ChartsComponent), // default
  },
  {
    path: 'ways',
    loadComponent: () => import('./ways/ways').then((m) => m.Ways), // /ways
  },
  { path: '**', redirectTo: '' }, // fallback
];
