import { Component } from '@angular/core';
import { Table } from '../../shared/table/table';
import { Slider } from '../../shared/slider/slider';

@Component({
  selector: 'app-department',
  imports: [Table, Slider],
  templateUrl: './department.html',
  styleUrl: './department.css',
})
export class Department {
  currentValue: number = 0;
  currentHighValue: number | undefined;
  columns = [
    'Department',
    'Sep % ↓',
    'Aug %',
    'Jul %',
    'Jun %',
    'May %',
    'Apr %',
    'Mar %',
    'Feb %',
    'Jan25 %',
    'Dec %',
    'Nov %',
    'Oct %',
    'Keywords',
    'D/L',
  ];

  data = [
    {
      Department: 'Action Figures',
      'Sep %': 58.23,
      'Aug %': 67.92,
      'Jul %': 62.45,
      'Jun %': 30.54,
      'May %': 58.23,
      'Apr %': 67.92,
      'Mar %': 62.45,
      Keywords: 205,
      'D/L': 'images/download.png',
    },
    {
      Department: 'Dolls & Soft Toys',
      'Sep %': 58.23,
      'Aug %': 67.92,
      'Jul %': 62.45,
      'Jun %': 30.54,
      'May %': 49.17,
      'Apr %': 53.41,
      'Mar %': 47.88,
      Keywords: 92,
      'D/L': 'images/download.png',
    },
  ];

  handleChildValue(value: number, highValue: number) {
    this.currentValue = value;
    this.currentHighValue = highValue;

    console.log('Received value from child', value, 'High value:', highValue);
    // Process the value received from the child
  }
  
}
