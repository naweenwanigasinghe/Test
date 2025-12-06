import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { DataSubmitterNavigationComponent } from "../components/data-submitter-navigation.component";
import { HistoryModalComponent } from "../components/history-modal.component";

@Component({
  selector: "app-acceptance-pending",
  standalone: true,
  imports: [CommonModule, RouterModule, DataSubmitterNavigationComponent, HistoryModalComponent],
  templateUrl: "./acceptance-pending.component.html",
})
export class AcceptancePendingComponent {
  showHistoryModal = false;
  selectedSubmission: any = null;

  submissions = [
    {
      id: "NM_202406",
      title: "Net Metering June 2024 | Version 2.1",
      subId: "SUB-EE-2464193",
      submitted: "2024 - 07 -05  3:25 PM",
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
      submitted: "2024 - 07 -05  3:25 PM",
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
      submitted: "2024 - 07 -05  3:25 PM",
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
      submitted: "2024 - 07 -05  3:25 PM",
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
      submitted: "2024 - 07 -05  3:25 PM",
      tags: [
        { label: "Energy", color: "#F35353" },
        { label: "Operational", color: "#128ECE" },
        { label: "Electricity", color: "#12CEB0" },
      ],
    },
  ];

  openHistoryModal(submission: any) {
    this.selectedSubmission = submission;
    this.showHistoryModal = true;
  }

  closeHistoryModal() {
    this.showHistoryModal = false;
    this.selectedSubmission = null;
  }
}
