import { Injectable, inject, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ClientContextService {
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  client = signal<string | null>(null);

  constructor() {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        const root = this.router.routerState.snapshot.root;
        const client = root.firstChild?.params['client'] ?? null;
        this.client.set(client);
      });
  }
}
