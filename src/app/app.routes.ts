import { Routes } from '@angular/router';
import { ChartsComponent } from './charts/charts';
import { Ways } from './ways/ways';

export const routes: Routes = [
  { path: '', component: ChartsComponent },  // default route
  { path: 'ways', component: Ways },         // /ways
  { path: '**', redirectTo: '' }             // fallback
];
