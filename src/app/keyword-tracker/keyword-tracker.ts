import { Component, viewChild, ViewChild } from '@angular/core';
import {
  NgApexchartsModule,
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexStroke,
  ApexYAxis,
  ApexMarkers,
  ApexLegend,
} from 'ng-apexcharts';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Sidenav } from '../../shared/sidenav/sidenav';
import { MonthView } from '../../shared/month-view/month-view';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  stroke: ApexStroke;
  markers: ApexMarkers;
  legend: ApexLegend;
};

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [NgApexchartsModule, Sidenav, MonthView, MatChipsModule, MatIconModule, CommonModule],
  templateUrl: './keyword-tracker.html',
  styleUrls: ['./keyword-tracker.css'],
})
export class ChartsComponent {
  @ViewChild('chart') chart!: ChartComponent;

  selectedKeywords: any[] = [];

  public chartOptions: ChartOptions = {
    series: [],
    chart: {
      type: 'line',
      height: 250,
      toolbar: {
        show: true,
        tools: {
          download: false,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false,
        },
      },
    },
    title: {
      text: '',
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      axisBorder: {
        show: true,
        color: '#000000',
        strokeWidth: 2,
      },
      axisTicks: {
        show: true,
        color: '#000000',
      },
    },
    yaxis: {
      axisBorder: {
        show: true,
        color: '#000000',
        width: 1,
      },
      axisTicks: {
        show: true,
        color: '#000000',
      },
    },
    stroke: {
      width: 1,
    },
    markers: {
      size: 5,
    },
    legend: {
      show: false,
      position: 'top',
      horizontalAlign: 'center',
      onItemClick: {
        toggleDataSeries: true,
      },
      onItemHover: {
        highlightDataSeries: true,
      },
    },
  };

  keywords = [
    {
      keyword: 'catan board game',
      volume: 890,
      data: [7, 7, 7, 6, 6, 7],
    },
    {
      keyword: 'lego flowers',
      volume: 350,
      data: [6, 6, 5, 5, 4, 5],
    },
    {
      keyword: 'lego flowers 490',
      volume: 490,
      data: [4, 4, 4, 4, 5, 5],
    },
    {
      keyword: 'barbie dreamhouse playset',
      volume: 921,
      data: [8, 7, 6, 5, 4, 3],
    },
    {
      keyword: 'balance bike for 2 year old',
      volume: 102,
      data: [2, 3, 4, 5, 6, 7],
    },
  ];

  onSelectKeyword(keywords: any[]) {
      this.selectedKeywords = keywords;
      this.updateChart();
  }

  onDeleteKeyword(keyword: string) {
    this.selectedKeywords = this.selectedKeywords.filter((k) => k.keyword !== keyword);
    this.updateChart();
  }

  private updateChart() {
    // Create series data from selected keywords
    const series: ApexAxisChartSeries = [];

    this.selectedKeywords.forEach((keyword, index) => {
      series.push({
        name: keyword.keyword,
        data: keyword.data,
      });
    });

    this.chartOptions = {
      ...this.chartOptions,
      series: series,
    };

    // Trigger chart update
    if (this.chart) {
      this.chart.updateOptions(this.chartOptions);
    }
  }


   
}
