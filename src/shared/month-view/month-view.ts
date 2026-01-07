import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-month-view',
  imports: [MatButtonToggleModule, CommonModule, FormsModule],
  templateUrl: './month-view.html',
  styleUrl: './month-view.css',
})
export class MonthView {
  @Input() showMonths: boolean = true;
  constructor(private router: Router) {}

  months = ['Dec', 'Nov', 'Oct', 'Sep', 'Aug', 'Jul', 'Jun', 'May', 'Apr', 'Mar', 'Feb', 'Jan'];
  years = [new Date().getFullYear(), new Date().getFullYear() - 1];
  today = new Date();
  selectedMonth = this.months[11 - this.today.getMonth()];
  selectedYear = this.today.getFullYear();

  selectMonth(month: string) {
    this.selectedMonth = month;
  }

  selectYear(year: number) {
    this.selectedYear = year;
  }
  toggleView() {
    console.log('Toggle view clicked');
    const currentPath = this.router.url;
    if (currentPath === '/competitors') {
      this.router.navigate(['/charts']);
    } else if (currentPath === '/charts') {
      this.router.navigate(['/competitors']);
    }
  }
}
