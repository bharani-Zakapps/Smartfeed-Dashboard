import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';

export interface DropdownOption {
  regionId: number;
  regionName: string;
}

@Component({
  selector: 'app-dropdown-select',
  standalone: true,
  templateUrl: './dropdown-select.component.html',
  imports: [CommonModule],
})
export class DropdownSelectComponent {
  @Input() options: DropdownOption[] = [];
  @Output() selectedChange = new EventEmitter<DropdownOption>();

  select(opt: DropdownOption) {
    this.selectedChange.emit(opt);
  }
}
