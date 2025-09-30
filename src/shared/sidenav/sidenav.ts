import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.css',
})
export class Sidenav {
  selectedItem: any = [];
  seletedItemsArray: any = [];

  @Input() title: string = '';
  @Input() items: any[] = [];
  @Input() placeholder: string = 'Search...';
  @Input() chipKeywords: any[] = [];

  @Output() itemSelected = new EventEmitter<any[]>();
  ngOnInit() {
    this.setDefaultSelection();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['chipKeywords']) {
      this.seletedItemsArray = this.chipKeywords;
      this.selectedItem = this.chipKeywords.map((k) => k.keyword);
    }
    if (changes['items'] && this.items.length > 0) {
      this.setDefaultSelection();
    }
  }

  setDefaultSelection() {
    let currentPath = window.location.pathname;
    if (
      (currentPath === '/competitors' || currentPath === '/ways') &&
      this.items.length > 0 &&
      this.selectedItem.length === 0
    ) {
      const firstItem = this.items[0];
      const name = firstItem.keyword || firstItem.name || firstItem;
      this.selectedItem = [name];
      this.seletedItemsArray = [firstItem];
      this.itemSelected.emit(this.seletedItemsArray);
    }
  }
  onSelect(item: any) {
    let currentPath = window.location.pathname;
    let name = item.keyword || item.name || item;
    if (currentPath === '/charts') {
      if (this.selectedItem.length < 3 && this.selectedItem.indexOf(name) < 0) {
        this.selectedItem.push(name);
        this.seletedItemsArray.push(item);
        this.itemSelected.emit(this.seletedItemsArray);
      } else if (this.selectedItem.indexOf(name) >= 0) {
        this.selectedItem.splice(this.selectedItem.indexOf(name), 1);
        this.seletedItemsArray.splice(this.selectedItem.indexOf(name), 1);
        this.itemSelected.emit(this.seletedItemsArray);
      }
    } else {
      this.selectedItem = [name];
      this.seletedItemsArray = [item];
      this.itemSelected.emit(this.seletedItemsArray);
    }
  }
}
