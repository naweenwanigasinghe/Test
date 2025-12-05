import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterLink, RouterModule } from "@angular/router";
import { DataSubmitterNavigationComponent } from "../components/data-submitter-navigation.component";

@Component({
  selector: "app-data-submitter-dashboard",
  standalone: true,
  imports: [CommonModule, RouterModule,DataSubmitterNavigationComponent],
  templateUrl: './data-submitter-dashboard.component.html',
})
export class DataSubmitterDashboardComponent {
  statsCards = [
    {
      title: "Acceptance\nPending",
      description: "submissions currently under acceptance",
    },
    {
      title: "Review\nSummary",
      description: "Tasks awaiting and completed review process",
    },
    { title: "Accepted", description: "successfully processed submissions" },
    { title: "Rejected", description: "submissions that require corrections" },
  ];

  taskTabs = [
    { label: "All", count: 34, active: true },
    { label: "Overdue", count: 16, active: false },
    { label: "Draft", count: 16, active: false },
    { label: "Rejected", count: 16, active: false },
    { label: "Review", count: 16, active: false },
  ];

  tasks = [
    {
      title: "NM_202406 (Net Metering June 2024)",
      details:
        "SUB-EE-2464193          Schedule: Monthly        Due: 2024 - 07 -05",
      borderColor: "#F35353",
      tags: [
        { label: "Energy", color: "#F35353", bg: "rgba(243, 83, 83, 0.10)" },
        {
          label: "Operational",
          color: "#128ECE",
          bg: "rgba(18, 142, 206, 0.10)",
        },
        {
          label: "Electricity",
          color: "#12CEB0",
          bg: "rgba(18, 206, 176, 0.10)",
        },
      ],
      actions: [
        {
          label: "Manual",
          style: "white",
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/5472228bb04ab304a3a93f096314ef5177b8f905?width=38",
        },
        {
          label: "Download",
          style: "white",
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/e8abcc41aa5a9950b72172e59e2b22d4e335b683?width=38",
        },
        {
          label: "Upload",
          style: "teal",
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/f51daf531eda29f9e0e67ab6e247bc7a0bab9ae0?width=38",
        },
      ],
    },
    {
      title: "NM_202406 (Net Metering June 2024 | Version 2.1)",
      details:
        "SUB-EE-2464193          Submitted: 2024 - 07 -05  3:25 PM       Assigned to: John Doe",
      borderColor: "#12CEB0",
      tags: [
        { label: "Energy", color: "#F35353", bg: "rgba(243, 83, 83, 0.10)" },
        {
          label: "Operational",
          color: "#128ECE",
          bg: "rgba(18, 142, 206, 0.10)",
        },
        {
          label: "Electricity",
          color: "#12CEB0",
          bg: "rgba(18, 206, 176, 0.10)",
        },
      ],
      actions: [
        {
          label: "View",
          style: "white",
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/8b6bf39db2a27b64573df87119d5663b0f3c3bcd?width=38",
        },
        {
          label: "Download",
          style: "white",
          icon: "https://api.builder.io/api/v1/image/assets/TEMP/e8abcc41aa5a9950b72172e59e2b22d4e335b683?width=38",
        },
      ],
    },
  ];

  activities = [
    {
      text: "New Template Created: Energy Storage Q3 2024",
      time: "2 hours ago",
    },
    {
      text: "New Template Created: Energy Storage Q3 2024",
      time: "2 hours ago",
    },
    {
      text: "New Template Created: Energy Storage Q3 2024",
      time: "2 hours ago",
    },
    {
      text: "New Template Created: Energy Storage Q3 2024",
      time: "2 hours ago",
    },
  ];
}
