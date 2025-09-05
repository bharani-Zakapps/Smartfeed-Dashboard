import { Component, ViewChild } from '@angular/core';
import {
  NgApexchartsModule,
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexMarkers,
  ApexStroke,
  ApexFill,
  ApexDataLabels,
} from 'ng-apexcharts';

export type WaysChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  markers: ApexMarkers;
  stroke: ApexStroke;
  fill: ApexFill;
  colors: string[];
  legend: ApexLegend;
  dataLabels:ApexDataLabels
};

@Component({
  selector: 'app-ways',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './ways.html',
  styleUrls: ['./ways.css'],
})
export class Ways {
  @ViewChild('chart') chart!: ChartComponent;

  public chartOptions: WaysChartOptions;

  constructor() {
    this.chartOptions = {
       dataLabels: { enabled: false },
      series: [
        { name: '1-3', data: [5, 6, 4, 7, 5, 6, 7, 8, 6, 9, 7, 8] },
        { name: '4-10', data: [10, 9, 11, 10, 12, 9, 12, 11, 13, 12, 14, 11] },
        { name: '11-20', data: [20, 18, 19, 21, 20, 22, 22, 20, 21, 23, 22, 24] },
        { name: '21-50', data: [50, 45, 48, 52, 50, 49, 52, 47, 50, 54, 52, 51] },
        { name: '51+', data: [100, 110, 105, 115, 108, 112, 102, 112, 107, 117, 110, 114] },
      ],
      chart: {
        type: 'area',
        stacked: true,
        height: 250,
        toolbar: {
          show: true,
          tools: {
            download: false, // download as PNG/SVG/CSV
            selection: false,
            zoom: false,
            zoomin: false,
            zoomout: false,
            pan: false,
            reset: false,
          },
        },
      },
      title: { text: 'Sales vs Management' },
      colors: ['#0d47a1', '#1976d2', '#42a5f5', '#90caf9', '#cfd8dc'], // dark to light
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.6,
          opacityTo: 0.1,
          stops: [0, 100],
        },
      },
      xaxis: {
        categories: [
          'WK17',
          'WK18',
          'WK19',
          'WK20',
          'WK21',
          'WK22',
          'WK23',
          'WK24',
          'WK25',
          'WK26',
          'WK27',
          'WK28',
        ],
      },
      yaxis: { opposite: true },
      stroke: { width: 2 },
      markers: { size: 5 },
      legend: {
        show: true,
        position: 'top', // 👈 show legend on top
        horizontalAlign: 'center',
        onItemClick: {
          toggleDataSeries: true, // 👈 allows hiding/removing series when clicked
        },
        onItemHover: {
          highlightDataSeries: true,
        },
      },
    };
  }
}
