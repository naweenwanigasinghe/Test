import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { DataSubmitterNavigationComponent } from "../components/data-submitter-navigation.component";
import { TemplateManualModalComponent } from "../components/template-manual-modal.component";
import { RejectionModalComponent } from "../components/rejection-modal.component";
import { HistoryModalComponent } from "../components/history-modal.component";
import { FileUploadModalComponent } from "../components/file-upload-modal.component";

@Component({
  selector: "app-rejected-submission",
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    DataSubmitterNavigationComponent,
    TemplateManualModalComponent,
    RejectionModalComponent,
    HistoryModalComponent,
    FileUploadModalComponent,
  ],
  templateUrl: "./rejected-submission.component.html",
})
export class RejectedSubmissionComponent {
  showManualModal = false;
  showRejectionModal = false;
  showHistoryModal = false;
  showFileUploadModal = false;
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
    this.selectedSubmission = submission;
    this.showHistoryModal = true;
  }

  onDownload(submission: any) {
    console.log("Download submission:", submission);
  }

  onManual(submission: any) {
    console.log("View manual:", submission);
  }

  onResubmit(submission: any) {
    this.selectedSubmission = submission;
    this.showFileUploadModal = true;
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
