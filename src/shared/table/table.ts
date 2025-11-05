import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Input } from '@angular/core';

@Component({
  selector: 'app-table',
  imports: [CommonModule, MatTableModule],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table {
  @Input() displayedColumns: string[] = [];
  @Input() tableData: any[] = [];

  currentPath: string = window.location.pathname.replace('/Smartfeed-Dashboard', '');;

  getTotal(col: string): number | string {
    if (col === 'Department') {
      return 'Total';
    }
    let total = 0;
    for (const row of this.tableData) {
      const value = parseFloat(row[col]) || 0;
      total += value;
    }
    if (col === 'Keywords') {
      return total.toFixed(0);
    }
    return total.toFixed(2);
  }
}
