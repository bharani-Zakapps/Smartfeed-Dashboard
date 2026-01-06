import { Component, inject, signal } from '@angular/core';
import { Table } from '../../shared/table/table';
import { Slider } from '../../shared/slider/slider';
import { DepartmentApi } from './api/department.api';
import { DepartmentRow } from './types/department.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department',
  imports: [Table, Slider],
    standalone: true,
  templateUrl: './department.html',
  styleUrl: './department.css',
})
export class Department {
  private departmentApi = inject(DepartmentApi);
  private route = inject(ActivatedRoute);
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

  data1 = signal<DepartmentRow[]>([]);
  loading = signal(false);

  ngOnInit() {
    // 🔥 Wait until route params are ready
    this.route.paramMap.subscribe(() => {
      this.loadDepartments();
    });
  }

  loadDepartments() {
    this.loading.set(true);

    this.departmentApi.getDepartments().subscribe({
      next: (res) => this.data1.set(res),
      error: (err) => console.error('Department API error', err),
      complete: () => this.loading.set(false),
    });
  }

  handleChildValue(value: number, highValue: number) {
    this.currentValue = value;
    this.currentHighValue = highValue;

    console.log('Received value from child', value, 'High value:', highValue);
    // Process the value received from the child
  }
}
