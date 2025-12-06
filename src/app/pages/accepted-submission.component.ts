import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { DataSubmitterNavigationComponent } from "../components/data-submitter-navigation.component";
import { TemplateManualModalComponent } from "../components/template-manual-modal.component";
import { HistoryModalComponent } from "../components/history-modal.component";

@Component({
  selector: "app-accepted-submission",
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    DataSubmitterNavigationComponent,
    TemplateManualModalComponent,
    HistoryModalComponent,
  ],
  templateUrl: "./accepted-submission.component.html",
})
export class AcceptedSubmissionComponent {
  showManualModal = false;
  showHistoryModal = false;
  selectedSubmission: any = null;

  acceptedSubmissions = [
    {
      id: "NM_202406",
      title: "Net Metering June 2024 | Version 2.1",
      subId: "SUB-EE-2464193",
      submittedDate: "2024 - 07 -05  3:25 PM",
      acceptedDate: "2024 - 07 -05  3:25 PM",
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
      acceptedDate: "2024 - 07 -05  3:25 PM",
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
      acceptedDate: "2024 - 07 -05  3:25 PM",
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
      acceptedDate: "2024 - 07 -05  3:25 PM",
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
      acceptedDate: "2024 - 07 -05  3:25 PM",
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
      acceptedDate: "2024 - 07 -05  3:25 PM",
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
      acceptedDate: "2024 - 07 -05  3:25 PM",
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
      acceptedDate: "2024 - 07 -05  3:25 PM",
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
    console.log("View submission:", submission);
  }

  onHistory(submission: any) {
    this.selectedSubmission = submission;
    this.showHistoryModal = true;
  }

  onDownload(submission: any) {
    console.log("Download submission:", submission);
  }

  openManualModal(submission: any) {
    this.selectedSubmission = submission;
    this.showManualModal = true;
  }

  closeManualModal() {
    this.showManualModal = false;
    this.selectedSubmission = null;
  }

  closeHistoryModal() {
    this.showHistoryModal = false;
    this.selectedSubmission = null;
  }
}
