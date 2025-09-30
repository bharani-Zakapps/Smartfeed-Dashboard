import { Component } from '@angular/core';
import { Table } from '../../shared/table/table';
import { Sidenav } from '../../shared/sidenav/sidenav';
import { Slider } from '../../shared/slider/slider';
import { MonthView } from '../../shared/month-view/month-view';

@Component({
  selector: 'app-competitors',
  standalone: true,
  imports: [Table, Sidenav, Slider, MonthView],
  templateUrl: './competitors.html',
  styleUrl: './competitors.css',
})
export class Competitors {
  currentValue: number = 0;
  currentHighValue: number | undefined;

  columns = ['Division', 'Smyths', 'Argos', 'Amazon', 'Keywords', 'D/L'];

  categories = [
    {
      name: 'Action Figures',
      data: [
        {
          Division: 'Bakugan',
          Smyths: 58.23,
          Argos: 67.92,
          Amazon: 62.45,
          Keywords: 205,
          'D/L': 'images/download.png',
        },
        {
          Division: 'Goo Jit Zu',
          Smyths: 49.17,
          Argos: 53.41,
          Amazon: 47.88,
          Keywords: 92,
          'D/L': 'images/download.png',
        },
      ],
    },
    {
      name: 'Dolls & Soft Toys',
      data: [
        {
          Division: 'Barbie',
          Smyths: 70.12,
          Argos: 66.45,
          Amazon: 68.33,
          Keywords: 150,
          'D/L': 'images/download.png',
        },
      ],
    },
  ];
  data: any[] = [];

  ngOnInit() {
    if (this.categories.length) {
      this.data = this.categories[0].data;
    }
  }

  onCategorySelect(selectedCategories: any[]) {
    if (!selectedCategories || selectedCategories.length === 0) {
      this.data = [];
      return;
    }

    // Just take the first selected category's data
    this.data = selectedCategories[0].data || [];

    console.log('Updated table data:', this.data);
  }
  handleChildValue(value: number, highValue: number) {
    this.currentValue = value;
    this.currentHighValue = highValue;

    console.log('Received value from child', value, 'High value:', highValue);
    // Process the value received from the child
  }

 
}
