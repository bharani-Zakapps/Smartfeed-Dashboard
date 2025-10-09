import { F } from '@angular/cdk/keycodes';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChanges, OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.css',
})
export class Sidenav {
  selectedItem: any = [];
  seletedItemsArray: any = [];
  searchValue: string = '';
  filteredItems: any[] = [];
  @Input() title: string = '';
  @Input() items: any[] = [];
  @Input() placeholder: string = 'Search...';
  @Input() chipKeywords: any[] = [];

  @Output() itemSelected = new EventEmitter<any[]>();
  ngOnInit() {
    this.filteredItems = [...this.items];
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
      (currentPath === '/competitors' || currentPath === '/position-visibility') &&
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
    const currentPath = window.location.pathname;
    const name = item.keyword || item.name || item;
    const selectedIndex = this.selectedItem.indexOf(name);

    if (currentPath === '/keyword-tracker') {
      if (selectedIndex < 0 && this.selectedItem.length < 3) {
        this.selectedItem.push(name);
        this.seletedItemsArray.push(item);
        this.itemSelected.emit(this.seletedItemsArray);
      } else if (selectedIndex >= 0) {
        this.selectedItem.splice(selectedIndex, 1);
        this.seletedItemsArray.splice(selectedIndex, 1);
        this.itemSelected.emit(this.seletedItemsArray);
      }
    } else {
      this.selectedItem = [name];
      this.seletedItemsArray = [item];
      this.itemSelected.emit(this.seletedItemsArray);
    }
  }

  onSearch() {
    const value = this.searchValue.toLowerCase();
    this.filteredItems = this.items.filter(
      (item) =>
        item.keyword?.toLowerCase().includes(value) ||
        item.name?.toLowerCase().includes(value) ||
        String(item).toLowerCase().includes(value)
    );
  }
}
