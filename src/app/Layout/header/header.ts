import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { ClientContextService } from '../../core/context/client-context.service';
import { FirstLetterUppercasePipe } from '../../pipe/first-letter.pipe';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, FirstLetterUppercasePipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  client = inject(ClientContextService).client;
}
