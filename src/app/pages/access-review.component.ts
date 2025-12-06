import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { DataSubmitterNavigationComponent } from "../components/data-submitter-navigation.component";
import { AcceptanceModalComponent } from "../components/acceptance-modal.component";
import { HistoryModalComponent } from "../components/history-modal.component";

@Component({
  selector: "app-access-review",
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    DataSubmitterNavigationComponent,
    AcceptanceModalComponent,
    HistoryModalComponent,
  ],
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
        { label: "Renewables", color: "#12CEB0" },
        { label: "Net Metering", color: "#128ECE" },
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
        { label: "Renewables", color: "#12CEB0" },
        { label: "Net Metering", color: "#128ECE" },
      ],
    },
  ];

  isModalOpen = false;
  isHistoryModalOpen = false;
  selectedSubmission: any = null;

  onView(submission: any) {
    this.selectedSubmission = submission;
    this.isModalOpen = true;
  }

  onHistory(submission: any) {
    this.selectedSubmission = submission;
    this.isHistoryModalOpen = true;
  }

  onDownload(submission: any) {
    console.log("Download submission:", submission);
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedSubmission = null;
  }

  closeHistoryModal() {
    this.isHistoryModalOpen = false;
    this.selectedSubmission = null;
  }

  onAccept() {
    console.log("Accept submission:", this.selectedSubmission);
    this.closeModal();
  }

  onReject() {
    console.log("Reject submission:", this.selectedSubmission);
    this.closeModal();
  }

  onModalDownload() {
    console.log("Download from modal:", this.selectedSubmission);
  }

  onSaveAsDraft() {
    console.log("Save as draft:", this.selectedSubmission);
    this.closeModal();
  }
}
