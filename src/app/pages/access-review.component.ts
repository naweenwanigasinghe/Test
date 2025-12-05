import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { DataSubmitterNavigationComponent } from "../components/data-submitter-navigation.component";

@Component({
  selector: "app-access-review",
  standalone: true,
  imports: [CommonModule, RouterModule, DataSubmitterNavigationComponent],
  templateUrl: "./access-review.component.html",
})
export class AccessReviewComponent {
  reviewSubmissions = [
    {
      id: "NM_202406",
      title: "Net Metering June 2024 | Version 2.1",
      subId: "SUB-EE-2464193",
      submittedDate: "2024 - 07 -05  3:25 PM",
      assignedTo: "John Doe",
      status: "Review Pending",
      tags: [
        { label: "Energy", color: "#F35353" },
        { label: "Operational", color: "#128ECE" },
        { label: "Electricity", color: "#12CEB0" },
      ],
    },
    {
      id: "NM_202406",
      title: "Net Metering June 2024 | Version 2.1",
      subId: "SUB-EE-2464193",
      submittedDate: "2024 - 07 -05  3:25 PM",
      assignedTo: "John Doe",
      status: "Review Pending",
      tags: [
        { label: "Energy", color: "#F35353" },
        { label: "Operational", color: "#128ECE" },
        { label: "Electricity", color: "#12CEB0" },
      ],
    },
  ];

  onView(submission: any) {
    console.log("View submission:", submission);
  }

  onHistory(submission: any) {
    console.log("View history:", submission);
  }

  onDownload(submission: any) {
    console.log("Download submission:", submission);
  }
}
