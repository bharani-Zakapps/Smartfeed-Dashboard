import { Component, signal } from '@angular/core';
// import { ChartsComponent } from './charts/charts';
// import { Ways } from './ways/ways';
import { Home } from './Layout/home/home';


@Component({
  selector: 'app-root',
  standalone: true,
  imports:  [Home],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('Factboard');
}
