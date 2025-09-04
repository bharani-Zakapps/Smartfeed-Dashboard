import { Component, signal } from '@angular/core';
// import { ChartsComponent } from './charts/charts';
// import { Ways } from './ways/ways';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('smartfeed');
}
