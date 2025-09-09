import { Component, ViewChild } from '@angular/core';
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
  ApexLegend
} from 'ng-apexcharts';
import { Sidenav } from '../../shared/sidenav/sidenav';

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
  imports: [NgApexchartsModule, Sidenav],
  templateUrl: './keyword-tracker.html',
  styleUrls: ['./keyword-tracker.css'],
})
export class ChartsComponent {
  @ViewChild('chart') chart!: ChartComponent;
  ngOnInit(): void {
    series: [
      { name: 'Sales', data: [10, 5, 3, 5, 4, 6] },
      { name: 'Management', data: [8, 9, 3, 1, 9, 2] }
    ]
  }
  public chartOptions: ChartOptions = {
    series: [
      {
        name: 'Sales',
        data: [10, 5, 3, 5, 4, 6],
      },
      {
        name: 'Management',
        data: [8, 9, 3, 1, 9, 2],
      },
    ],
    chart: {
      type: 'line',
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
    title: {
      text: 'Product Sales',
    },
    xaxis: {
      categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
      axisBorder: {
        show: true,
        color: '#000000', // dark X axis line
        strokeWidth: 2,
      },
      axisTicks: {
        show: true,
        color: '#000000', // dark tick marks
        // height: 6,
      },
    },
    yaxis: {
      axisBorder: {
        show: true,
        color: '#000000', // dark Y axis line
        width: 1,
      },
      axisTicks: {
        show: true,
        color: '#000000', // dark Y ticks
      },
    },
    stroke: {
      width: 1, // 👈 makes the line thinner
    },
    markers: {
      size: 5, // size of the dots
    },
    legend: {
      show: true,
      position: 'top',   // 👈 show legend on top
      horizontalAlign: 'center',
      onItemClick: {
        toggleDataSeries: true // 👈 allows hiding/removing series when clicked
      },
      onItemHover: {
        highlightDataSeries: true
      }
    }
  };

  keywords = [
    { keyword: 'barbie dreamhouse playset', volume: 479,sales: [1, 2, 3, 4, 5, 6], management: [18, 17, 16, 15, 14, 13] },
    { keyword: 'catan board game',volume: 479, sales: [7, 8, 9, 10, 11, 12], management: [12, 11, 10, 9, 8, 7] },
    { keyword: 'balance bike for 2 year old', volume: 479, sales: [13, 14, 15, 16, 18, 18], management: [6, 5, 4, 3, 2, 1] }
  ];

  
  onSelectKeyword(item: any) {
    
    const selected = this.keywords.find(k => k.keyword === item.keyword || k.keyword === item);

    if (selected) {
      this.chartOptions.series = [
        { name: 'Sales', data: selected.sales },
        { name: 'Management', data: selected.management }
      ];
    }
  }
}