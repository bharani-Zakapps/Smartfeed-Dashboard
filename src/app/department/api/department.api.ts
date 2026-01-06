import { Injectable, inject } from '@angular/core';
import { ApiService } from '../../core/api/api.service';
import { DepartmentRow } from '../types/department.model';

@Injectable({ providedIn: 'root' })
export class DepartmentApi {
  private api = inject(ApiService);

   getDepartments() {
    return this.api.get<DepartmentRow[]>('/department');
  }

}
