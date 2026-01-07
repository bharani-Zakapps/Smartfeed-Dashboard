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
export class Sidenav implements OnChanges {
  selectedItem: any = [];
  seletedItemsArray: any = [];
  searchValue: string = '';
  filteredItems: any[] = [];
  @Input() title: string = '';
  @Input() items: any[] = [];
  @Input() placeholder: string = 'Search...';
  @Input() chipKeywords: any[] = [];

  @Output() itemSelected = new EventEmitter<any[]>();

  currentPath: string = window.location.pathname.replace('/Smartfeed-Dashboard', '');

  ngOnInit() {
    this.filteredItems = [...this.items];
    this.setDefaultSelection();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['chipKeywords'] && this.chipKeywords && this.chipKeywords.length > 0) {
      this.seletedItemsArray = this.chipKeywords;
      this.selectedItem = this.chipKeywords.map((k) => k.keyword);
    }
    if (changes['items'] && this.items.length > 0) {
      this.filteredItems = [...this.items];
      this.setDefaultSelection();
    }
  }

  setDefaultSelection() {
    const currentPath = this.currentPath;
    console.log('Current Path:', currentPath);
    
    // Select first item by default for all pages EXCEPT keyword tracker
    if (this.items.length > 0 && this.selectedItem.length === 0 && !currentPath.includes('/keyword-tracker')) {
      const firstItem = this.items[0];
      const name = firstItem.keyword || firstItem.name || firstItem;
      
      this.selectedItem = [name];
      this.seletedItemsArray = [firstItem];
      
      // Emit the selection
      this.itemSelected.emit(this.seletedItemsArray);
    }
  }

  onSelect(item: any) {
    let currentPath = window.location.pathname.replace('/Smartfeed-Dashboard', '');
    let name = item.keyword || item.name || item;
    const selectedIndex = this.selectedItem.indexOf(name);
    
    if (currentPath.includes('/keyword-tracker')) {
      if (this.selectedItem.length < 3 && this.selectedItem.indexOf(name) < 0) {
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