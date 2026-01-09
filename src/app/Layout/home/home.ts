import { Component, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { ClientDataService } from '../../core/api/client-data.service';
import { ApiService } from '../../core/api/api.service';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, Header],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  private clientDataService = inject(ClientDataService);
  private api = inject(ApiService);

  constructor() {
    effect(() => {
      // wait until client is available
      const base = this.api['baseUrl']();
      if (!base) return;

      // then call API only once
      this.clientDataService.loadClientInfo();
    });
  }
}
