import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./department/department').then((m) => m.Department),
  },
  {
    path: 'department',
    loadComponent: () => import('./department/department').then((m) => m.Department),
  },
  {
    path: 'competitors',
    loadComponent: () => import('./competitors/competitors').then((m) => m.Competitors),
  },
  {
    path: 'charts',
    loadComponent: () => import('./keyword-tracker/keyword-tracker').then((m) => m.ChartsComponent),
  },
  {
    path: 'ways',
    loadComponent: () => import('./position-visibility/position-visibility').then((m) => m.Ways), 
  },
  { path: '**', redirectTo: '' }, // fallback
];
