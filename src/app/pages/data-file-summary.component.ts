import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DataSubmitterNavigationComponent } from "../components/data-submitter-navigation.component";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-data-file-summary",
  standalone: true,
  imports: [CommonModule, RouterModule,DataSubmitterNavigationComponent],
  templateUrl: './data-file-summary.component.html',
})
export class DataFileSummaryComponent {
  summaryCards = [
    {
      number: "12",
      title: "Submission Summary",
      description: "data files awaiting entries",
    },
    {
      number: "05",
      title: "Acceptance Pending",
      description: "files currently under acceptance",
    },
    {
      number: "45",
      title: "Review Summary",
      description: "files awaiting and completed review",
    },
    {
      number: "89",
      title: "Accepted",
      description: "successfully processed files",
    },
    {
      number: "03",
      title: "Rejected",
      description: "files that require corrections",
    },
  ];
}
