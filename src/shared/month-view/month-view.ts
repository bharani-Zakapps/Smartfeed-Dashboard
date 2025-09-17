import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'app-month-view',
  imports: [MatButtonToggleModule, CommonModule, FormsModule],
  templateUrl: './month-view.html',
  styleUrl: './month-view.css'
})
export class MonthView {
  months = ['Dec', 'Nov', 'Oct', 'Sep', 'Aug', 'Jul', 'Jun', 'May', 'Apr', 'Mar', 'Feb', 'Jan'];
  years = [2025, 2024];
  today = new Date();
  selectedMonth = this.months[11 - this.today.getMonth()];
  selectedYear = this.today.getFullYear();


  selectMonth(month: string) {
    this.selectedMonth = month;
  }

  selectYear(year: number) {
    this.selectedYear = year;
  }
}
