import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'seo/:client',
    children: [
      {
        path: 'department',
        loadComponent: () =>
          import('./modules/department/department').then(m => m.Department),
      },
      {
        path: 'competitors',
        loadComponent: () =>
          import('./modules/competitors/competitors').then(m => m.Competitors),
      },
      {
        path: 'keyword-tracker',
        loadComponent: () =>
          import('./modules/keyword-tracker/keyword-tracker').then(m => m.keywordTracker),
      },
      {
        path: 'position-visibility',
        loadComponent: () =>
          import('./modules/position-visibility/position-visibility').then(m => m.PositionVisibility),
      },
    ]
  },
  { path: '**', redirectTo: '' }
];
