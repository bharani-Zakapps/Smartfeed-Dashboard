import { Component } from '@angular/core';
import { Table } from '../../shared/table/table';
import { Sidenav } from '../../shared/sidenav/sidenav';

@Component({
  selector: 'app-competitors',
  standalone: true,
  imports: [Table, Sidenav],
  templateUrl: './competitors.html',
  styleUrl: './competitors.css'
})
export class Competitors {
  columns = ['Division', 'Smyths', 'Argos', 'Amazon', 'Keywords', 'D/L'];

  categories = [
    {
      name: 'Action Figures',
      data: [
        { Division: 'Bakugan', Smyths: 58.23, Argos: 67.92, Amazon: 62.45, Keywords: 205, 'D/L': '↓' },
        { Division: 'Goo Jit Zu', Smyths: 49.17, Argos: 53.41, Amazon: 47.88, Keywords: 92, 'D/L': '↓' }
      ]
    },
    {
      name: 'Dolls & Soft Toys',
      data: [
        { Division: 'Barbie', Smyths: 70.12, Argos: 66.45, Amazon: 68.33, Keywords: 150, 'D/L': '↑' }
      ]
    }
  ];

  data: any[] = [];

ngOnInit() {
    if (this.categories.length) {
      this.data = this.categories[0].data;
    }
  }

  onCategorySelect(category: any) {
    this.data = category.data || [];
  }
}
