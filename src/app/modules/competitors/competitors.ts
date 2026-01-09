import { Component, effect, inject, signal } from '@angular/core';
import { HeaderData, Table } from '../../../shared/table/table';
import { Sidenav } from '../../../shared/sidenav/sidenav';
import { Slider } from '../../../shared/slider/slider';
import { MonthView } from '../../../shared/month-view/month-view';
import { DepartmentApi } from './competitors.api';
import { ApiResponse, ClientDataService } from '../../core/api/client-data.service';

export type department = {
  departmentId: number;
  departmentCode: string;
  departmentName: string;
};

export type competitorHeader = {
  clientName: string;
  competitors: string[];
};

@Component({
  selector: 'app-competitors',
  standalone: true,
  imports: [Table, Sidenav, Slider, MonthView],
  templateUrl: './competitors.html',
  styleUrl: './competitors.css',
})
export class Competitors {
  currentValue: number = 0;
  currentHighValue: number | undefined;

  tableHeader: HeaderData | any = [];
  data: any[] = [
    {
      division: 'Bakugan',
      client: 58.3,
      competitors: [58.23, 67.92, 67.92],
      keywords: 200,
    },
    {
      division: 'Goo Jit Zu',
      client: 58.3,
      competitors: [58.23, 67.92, 67.92],
      keywords: 400,
    },
  ];

  ngOnInit() {
    // if (this.categories.length) {
    //   this.data = this.categories[0].data;
    // }
  }
  private departmentApi = inject(DepartmentApi);
  private clientData = inject(ClientDataService);

  onCategorySelect(selectedDepartment: department[]) {
    const client = this.clientData?.clientInfo();
    const region = this.clientData?.selectedRegion();
    const clientId = client?.clientId;
    if (!region) return;
    const regionId = region.regionId;
    this.departmentApi
      .getCompetitorHeader<ApiResponse<competitorHeader>>(
        clientId,
        regionId,
        selectedDepartment[0].departmentId
      )
      .subscribe((res) => {
        if (res.success) {
          this.tableHeader = res.data;
        }
      });
  }

  handleChildValue(value: number, highValue: number) {
    this.currentValue = value;
    this.currentHighValue = highValue;

    console.log('Received value from child', value, 'High value:', highValue);
    // Process the value received from the child
  }

  departments = signal<department[]>([]);

  constructor() {
    effect(() => {
      const client = this.clientData?.clientInfo();
      const region = this.clientData?.selectedRegion();
      const clientId = client?.clientId;
      if (!clientId) return;

      if (!region) return;
      const regionId = region.regionId;
      if (!regionId) return;
      this.departmentApi
        .getDepartmentsByRegion<ApiResponse<department[]>>(clientId, regionId)
        .subscribe((res) => {
          if (res.success) {
            this.departments.set(res.data);

            this.departmentApi
              .getCompetitorHeader<ApiResponse<competitorHeader>>(
                clientId,
                regionId,
                res.data[0].departmentId
              )
              .subscribe((res) => {
                if (res.success) {
                  this.tableHeader = res.data;
                }
              });
          }
        });
    });
  }
}
