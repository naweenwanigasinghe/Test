import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { DataSubmitterNavigationComponent } from "../components/data-submitter-navigation.component";
import { TemplateManualModalComponent } from "../components/template-manual-modal.component";
import { RejectionModalComponent } from "../components/rejection-modal.component";

@Component({
  selector: "app-rejected-submission",
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    DataSubmitterNavigationComponent,
    TemplateManualModalComponent,
    RejectionModalComponent,
  ],
  templateUrl: "./rejected-submission.component.html",
})
export class RejectedSubmissionComponent {
  showManualModal = false;
  showRejectionModal = false;
  selectedSubmission: any = null;

  rejectedSubmissions = [
    {
      id: "NM_202406",
      title: "Net Metering June 2024 | Version 2.1",
      subId: "SUB-EE-2464193",
      submittedDate: "2024 - 07 -05  3:25 PM",
      rejectedDate: "2024 - 07 -05  3:25 PM",
      tags: [
        { label: "Energy", color: "#F35353" },
        { label: "Operational", color: "#128ECE" },
        { label: "Electricity", color: "#12CEB0" },
      ],
      fileSize: "1.2 MB",
      pages: "24 Pages",
      updated: "August 2025",
      version: "Version 2.1",
    },
    {
      id: "NM_202406",
      title: "Net Metering June 2024 | Version 2.1",
      subId: "SUB-EE-2464193",
      submittedDate: "2024 - 07 -05  3:25 PM",
      rejectedDate: "2024 - 07 -05  3:25 PM",
      tags: [
        { label: "Energy", color: "#F35353" },
        { label: "Operational", color: "#128ECE" },
        { label: "Electricity", color: "#12CEB0" },
      ],
      fileSize: "1.2 MB",
      pages: "24 Pages",
      updated: "August 2025",
      version: "Version 2.1",
    },
    {
      id: "NM_202406",
      title: "Net Metering June 2024 | Version 2.1",
      subId: "SUB-EE-2464193",
      submittedDate: "2024 - 07 -05  3:25 PM",
      rejectedDate: "2024 - 07 -05  3:25 PM",
      tags: [
        { label: "Energy", color: "#F35353" },
        { label: "Operational", color: "#128ECE" },
        { label: "Electricity", color: "#12CEB0" },
      ],
      fileSize: "1.2 MB",
      pages: "24 Pages",
      updated: "August 2025",
      version: "Version 2.1",
    },
    {
      id: "NM_202406",
      title: "Net Metering June 2024 | Version 2.1",
      subId: "SUB-EE-2464193",
      submittedDate: "2024 - 07 -05  3:25 PM",
      rejectedDate: "2024 - 07 -05  3:25 PM",
      tags: [
        { label: "Energy", color: "#F35353" },
        { label: "Operational", color: "#128ECE" },
        { label: "Electricity", color: "#12CEB0" },
      ],
      fileSize: "1.2 MB",
      pages: "24 Pages",
      updated: "August 2025",
      version: "Version 2.1",
    },
  ];

  onView(submission: any) {
    this.selectedSubmission = submission;
    this.showRejectionModal = true;
  }

  onHistory(submission: any) {
    console.log("View history:", submission);
  }

  onDownload(submission: any) {
    console.log("Download submission:", submission);
  }

  onManual(submission: any) {
    console.log("View manual:", submission);
  }

  onResubmit(submission: any) {
    console.log("Resubmit submission:", submission);
  }

  openManualModal(submission: any) {
    this.selectedSubmission = submission;
    this.showManualModal = true;
  }

  closeManualModal() {
    this.showManualModal = false;
    this.selectedSubmission = null;
  }

  closeRejectionModal() {
    this.showRejectionModal = false;
    this.selectedSubmission = null;
  }

  onDownloadErrorReport() {
    console.log("Download error report:", this.selectedSubmission);
  }

  onProceedToResubmit() {
    console.log("Proceed to resubmit:", this.selectedSubmission);
    this.closeRejectionModal();
  }
}
