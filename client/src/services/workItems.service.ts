import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WorkItem } from 'src/models/WorkItem';

@Injectable({
  providedIn: 'root',
})
export class WorkItemsService {
  private readonly WORK_ITEMS_API_BASE = `${environment.apiUrl}/work-items`;

  constructor(private http: HttpClient) {}

  public getAllWorkItems(): Observable<WorkItem[]> {
    return this.http.get<WorkItem[]>(this.WORK_ITEMS_API_BASE);
  }

  public getWorkItemById(workItemId: number): Observable<WorkItem> {
    const url = `${this.WORK_ITEMS_API_BASE}/${workItemId}`;

    return this.http.get<WorkItem>(url);
  }
}
