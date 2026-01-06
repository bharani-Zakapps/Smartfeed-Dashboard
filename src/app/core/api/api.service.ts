import { Injectable, inject, computed } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ClientContextService } from '../context/client-context.service';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private clientContext = inject(ClientContextService);

  private baseUrl = computed(() => {
    const client = this.clientContext.client();
    if (!client) {
      throw new Error('Client not resolved yet');
    }
    return `/api/seo/${client}`;
  });

  get<T>(url: string, params?: Record<string, any>) {
    return this.http.get<T>(`${this.baseUrl()}${url}`, {
      params: new HttpParams({ fromObject: params }),
    });
  }

  post<T>(url: string, body: any) {
    return this.http.post<T>(`${this.baseUrl()}${url}`, body);
  }
}
