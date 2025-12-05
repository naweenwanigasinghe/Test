import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DataSubmitterNavigationComponent } from "../components/data-submitter-navigation.component";
import { RouterModule } from "@angular/router";

interface DataTableItem {
  id: string;
  name: string;
  ref: string;
  subRef: string;
  schedule: string;
  due: string;
  tags: Array<{
    label: string;
    color: string;
    borderColor: string;
    bgColor: string;
  }>;
}

@Component({
  selector: "app-data-table-summary",
  standalone: true,
  imports: [CommonModule, RouterModule,DataSubmitterNavigationComponent],
  templateUrl: './data-table-summary.component.html',
})
export class DataTableSummaryComponent {
  items: DataTableItem[] = [
    {
      id: "202406",
      name: "Net Metering June 2024",
      ref: "RE_2024/6",
      subRef: "SUB-EE-2464193",
      schedule: "Monthly",
      due: "2024 - 07 -05",
      tags: [
        {
          label: "Energy",
          color: "#F35353",
          borderColor: "#F35353",
          bgColor:
            "linear-gradient(0deg, rgba(243, 83, 83, 0.10) 0%, rgba(243, 83, 83, 0.10) 100%), #FFF",
        },
        {
          label: "Operational",
          color: "#128ECE",
          borderColor: "#128ECE",
          bgColor:
            "linear-gradient(0deg, rgba(18, 142, 206, 0.10) 0%, rgba(18, 142, 206, 0.10) 100%), #FFF",
        },
        {
          label: "Electricity",
          color: "#12CEB0",
          borderColor: "#12CEB0",
          bgColor:
            "linear-gradient(0deg, rgba(18, 206, 176, 0.10) 0%, rgba(18, 206, 176, 0.10) 100%), #FFF",
        },
      ],
    },
    {
      id: "202406",
      name: "Net Metering June 2024",
      ref: "RE_2024/6",
      subRef: "SUB-EE-2464193",
      schedule: "Monthly",
      due: "2024 - 07 -05",
      tags: [
        {
          label: "Energy",
          color: "#F35353",
          borderColor: "#F35353",
          bgColor:
            "linear-gradient(0deg, rgba(243, 83, 83, 0.10) 0%, rgba(243, 83, 83, 0.10) 100%), #FFF",
        },
        {
          label: "Operational",
          color: "#128ECE",
          borderColor: "#128ECE",
          bgColor:
            "linear-gradient(0deg, rgba(18, 142, 206, 0.10) 0%, rgba(18, 142, 206, 0.10) 100%), #FFF",
        },
        {
          label: "Electricity",
          color: "#12CEB0",
          borderColor: "#12CEB0",
          bgColor:
            "linear-gradient(0deg, rgba(18, 206, 176, 0.10) 0%, rgba(18, 206, 176, 0.10) 100%), #FFF",
        },
      ],
    },
    {
      id: "202406",
      name: "Net Metering June 2024",
      ref: "RE_2024/6",
      subRef: "SUB-EE-2464193",
      schedule: "Monthly",
      due: "2024 - 07 -05",
      tags: [
        {
          label: "Energy",
          color: "#F35353",
          borderColor: "#F35353",
          bgColor:
            "linear-gradient(0deg, rgba(243, 83, 83, 0.10) 0%, rgba(243, 83, 83, 0.10) 100%), #FFF",
        },
        {
          label: "Operational",
          color: "#128ECE",
          borderColor: "#128ECE",
          bgColor:
            "linear-gradient(0deg, rgba(18, 142, 206, 0.10) 0%, rgba(18, 142, 206, 0.10) 100%), #FFF",
        },
        {
          label: "Electricity",
          color: "#12CEB0",
          borderColor: "#12CEB0",
          bgColor:
            "linear-gradient(0deg, rgba(18, 206, 176, 0.10) 0%, rgba(18, 206, 176, 0.10) 100%), #FFF",
        },
      ],
    },
    {
      id: "202406",
      name: "Net Metering June 2024",
      ref: "RE_2024/6",
      subRef: "SUB-EE-2464193",
      schedule: "Monthly",
      due: "2024 - 07 -05",
      tags: [
        {
          label: "Energy",
          color: "#F35353",
          borderColor: "#F35353",
          bgColor:
            "linear-gradient(0deg, rgba(243, 83, 83, 0.10) 0%, rgba(243, 83, 83, 0.10) 100%), #FFF",
        },
        {
          label: "Operational",
          color: "#128ECE",
          borderColor: "#128ECE",
          bgColor:
            "linear-gradient(0deg, rgba(18, 142, 206, 0.10) 0%, rgba(18, 142, 206, 0.10) 100%), #FFF",
        },
        {
          label: "Electricity",
          color: "#12CEB0",
          borderColor: "#12CEB0",
          bgColor:
            "linear-gradient(0deg, rgba(18, 206, 176, 0.10) 0%, rgba(18, 206, 176, 0.10) 100%), #FFF",
        },
      ],
    },
    {
      id: "202406",
      name: "Net Metering June 2024",
      ref: "RE_2024/6",
      subRef: "SUB-EE-2464193",
      schedule: "Monthly",
      due: "2024 - 07 -05",
      tags: [
        {
          label: "Energy",
          color: "#F35353",
          borderColor: "#F35353",
          bgColor:
            "linear-gradient(0deg, rgba(243, 83, 83, 0.10) 0%, rgba(243, 83, 83, 0.10) 100%), #FFF",
        },
        {
          label: "Operational",
          color: "#128ECE",
          borderColor: "#128ECE",
          bgColor:
            "linear-gradient(0deg, rgba(18, 142, 206, 0.10) 0%, rgba(18, 142, 206, 0.10) 100%), #FFF",
        },
        {
          label: "Electricity",
          color: "#12CEB0",
          borderColor: "#12CEB0",
          bgColor:
            "linear-gradient(0deg, rgba(18, 206, 176, 0.10) 0%, rgba(18, 206, 176, 0.10) 100%), #FFF",
        },
      ],
    },
  ];
}
