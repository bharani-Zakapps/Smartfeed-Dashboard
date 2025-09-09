import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.css'
})
export class Sidenav {
  @Input() title: string = '';
  @Input() items: any[] = [];
  @Input() placeholder: string = 'Search...';

  @Output() itemSelected = new EventEmitter<string>();

  selectedItem: any = null;
  onSelect(item: any) {
     this.selectedItem = item;
    this.itemSelected.emit(item.keyword ? item.keyword : item);
  }
}
