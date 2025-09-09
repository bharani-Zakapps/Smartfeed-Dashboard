import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./department/department').then((m) => m.Department), // default
  },
  {
    path: 'department',
    loadComponent: () => import('./department/department').then((m) => m.Department), // default
  },
  {
    path: 'competitors',
    loadComponent: () => import('./competitors/competitors').then((m) => m.Competitors), // default
  },
  {
    path: 'charts',
    loadComponent: () => import('./keyword-tracker/keyword-tracker').then((m) => m.ChartsComponent), // default
  },
  {
    path: 'ways',
    loadComponent: () => import('./position-visibility/position-visibility').then((m) => m.Ways), // /ways
  },
  { path: '**', redirectTo: '' }, // fallback
];
