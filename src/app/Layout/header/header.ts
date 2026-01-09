import { Component, computed, effect, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { ClientContextService } from '../../core/context/client-context.service';
import { FirstLetterUppercasePipe } from '../../pipe/first-letter.pipe';
import { DropdownSelectComponent } from '../../../shared/dropdown/dropdown-select.component';
import { CommonModule } from '@angular/common';
import { ClientDataService } from '../../core/api/client-data.service';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive,
    FirstLetterUppercasePipe,
    DropdownSelectComponent,
    CommonModule,
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
  standalone: true,
})
export class Header {
  client = inject(ClientContextService).client;
  private clientData = inject(ClientDataService);

  dropdownOpen = signal(false);

  regionData = [];
  selectedRegion: any = [];

  constructor() {
    effect(() => {
      this.regionData = this.clientData?.regionInfo();
      this.selectedRegion = this.clientData?.selectedRegion();
    });
  }

  toggleDropdown() {
    this.dropdownOpen.set(!this.dropdownOpen());
  }

  onSelect(option: any) {
    console.log('Selected:', option);
    this.dropdownOpen.set(false);
    this.clientData.selectedRegion.set(option)
  }
}
