import { Injectable, inject } from '@angular/core';
import { ApiService } from '../../core/api/api.service';

@Injectable({ providedIn: 'root' })
export class DepartmentApi {
  private api = inject(ApiService);

  getDepartmentsByRegion<T>(clientId: number, regionId: number) {
    return this.api.get<T>('/department-by-region', { clientId, regionId });
  }

  getCompetitorHeader<T>(clientId: number, regionId: number, departmentId: number) {
    return this.api.get<T>('/competitor-header-by-department', {
      clientId,
      regionId,
      departmentId,
    });
  }
}
