import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { DataSubmitterNavigationComponent } from "../components/data-submitter-navigation.component";
import { FileUploadModalComponent } from "../components/file-upload-modal.component";
import { TemplateManualModalComponent } from "../components/template-manual-modal.component";

@Component({
  selector: "app-submission-pending",
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    DataSubmitterNavigationComponent,
    FileUploadModalComponent,
    TemplateManualModalComponent,
  ],
  templateUrl: "./submission-pending.component.html",
})
export class SubmissionPendingComponent {
  showUploadModal = false;
  showManualModal = false;
  selectedSubmission: any = null;

  submissions = [
    {
      id: "NM_202406",
      title: "Net Metering June 2024 | Version 2.1",
      subId: "SUB-EE-2464193",
      schedule: "Monthly",
      dueDate: "2024 - 07 -05",
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
      schedule: "Monthly",
      dueDate: "2024 - 07 -05",
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
      schedule: "Monthly",
      dueDate: "2024 - 07 -05",
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
      schedule: "Monthly",
      dueDate: "2024 - 07 -05",
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
      schedule: "Monthly",
      dueDate: "2024 - 07 -05",
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

  openUploadModal(submission: any) {
    this.selectedSubmission = submission;
    this.showUploadModal = true;
  }

  closeUploadModal() {
    this.showUploadModal = false;
    this.selectedSubmission = null;
  }

  openManualModal(submission: any) {
    this.selectedSubmission = submission;
    this.showManualModal = true;
  }

  closeManualModal() {
    this.showManualModal = false;
    this.selectedSubmission = null;
  }

  handleFileSubmit(file: File) {
    console.log("File submitted:", file);
    console.log("For submission:", this.selectedSubmission);
    // Here you can implement the actual file upload logic
    // For example: this.apiService.uploadFile(file, this.selectedSubmission.subId)
    alert(
      `File "${file.name}" has been uploaded successfully for ${this.selectedSubmission.id}`,
    );
  }
}
