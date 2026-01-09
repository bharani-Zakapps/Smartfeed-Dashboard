import { Injectable, inject, signal } from '@angular/core';
import { ApiService } from './api.service';
import { ClientContextService } from '../context/client-context.service';

export interface ApiResponse<T> {
  success: boolean;
  data: T;
}

interface ClientInfo {
  clientId: number;
  clientName: string;
}

interface RegionInfo {
  regionId: number;
  regionCode: string;
  regionName: string;
}

@Injectable({ providedIn: 'root' })
export class ClientDataService {
  private api = inject(ApiService);
  private clientContext = inject(ClientContextService);

  clientInfo = signal<any | null>(null);
  regionInfo = signal<any | null>(null);

  loadClientInfo() {
    const client = this.clientContext.client();
    this.api
      .get<ApiResponse<ClientInfo>>('/client-info', { clientName: client })
      ?.subscribe((res) => {
        if (res.success) {
          this.clientInfo.set(res.data);

          const clientId = res.data.clientId;
          if (!clientId) return;

          this.api
            .get<ApiResponse<RegionInfo>>('/region-info', { clientId })
            ?.subscribe((regionRes) => {
              if (regionRes.success) {
                this.regionInfo.set(regionRes.data);
              }
            });
        }
      });
  }
}
