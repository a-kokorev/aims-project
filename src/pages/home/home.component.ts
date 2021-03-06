import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { WorkItem } from "src/models/WorkItem";
import { WorkItemsService } from "src/services/workItems.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomePage implements OnInit {
  public workItems$!: Observable<WorkItem[]>;
  public displayedColumns: string[] = ['id', 'type', 'title', 'state'];

  constructor(private workItemsService: WorkItemsService) {}

  ngOnInit(): void {
    this.workItems$ = this.workItemsService.getAllWorkItems();
  }
}
