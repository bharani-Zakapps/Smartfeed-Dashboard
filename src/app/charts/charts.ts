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

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis:ApexYAxis;
  title: ApexTitleSubtitle;
  stroke: ApexStroke;
  markers: ApexMarkers;
  legend:ApexLegend;
};

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './charts.html',
  styleUrls: ['./charts.css'],
})
export class ChartsComponent {
  @ViewChild('chart') chart!: ChartComponent;

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
}
