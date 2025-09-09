import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-table',
  imports: [CommonModule, MatTableModule],
  templateUrl: './table.html',
  styleUrl: './table.css'
})
export class Table {
 @Input() displayedColumns: string[] = [];
  @Input() tableData: any[] = [];

}
import { Input } from '@angular/core';