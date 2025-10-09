import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'department',
    pathMatch: 'full'
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
    path: 'keyword-tracker',
    loadComponent: () => import('./keyword-tracker/keyword-tracker').then((m) => m.keywordTracker),
  },
  {
    path: 'position-visibility',
    loadComponent: () => import('./position-visibility/position-visibility').then((m) => m.PositionVisibility),
  },
  { path: '**', redirectTo: '' }, // fallback
];
