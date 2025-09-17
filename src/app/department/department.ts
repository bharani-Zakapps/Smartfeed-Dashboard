import { Component } from '@angular/core';
import { Table } from '../../shared/table/table';
import { Slider } from '../../shared/slider/slider';

@Component({
  selector: 'app-department',
  imports: [Table,Slider],
  templateUrl: './department.html',
  styleUrl: './department.css'
})
export class Department {
columns = [
    'Department', 'May %', 'Apr %', 'Mar %', 'Feb %', 'Jan25 %','Dec %', 'Nov %', 'Oct %', 'Keywords', 'D/L'
  ];

  data = [
    { Department: 'Action Figures', 'May %': 58.23, 'Apr %': 67.92, 'Mar %': 62.45, 'Keywords': 205, 'D/L': '↓' },
    { Department: 'Dolls & Soft Toys', 'May %': 49.17, 'Apr %': 53.41, 'Mar %': 47.88, 'Keywords': 92, 'D/L': '↓' },
   
  ];
}
