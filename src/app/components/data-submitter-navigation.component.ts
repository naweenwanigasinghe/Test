import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-data-submitter-navigation",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./data-submitter-navigation.component.html",

  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class DataSubmitterNavigationComponent {
  @Input() activeRoute?: string;

  isExpanded = false;

  navItems = [
    {
      label: "Dashboard",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/cc98f667230941ae3075229caf079ef6c36fdd45?width=48",
      route: "/data-submitter-dashboard",
    },
    {
      label: "Data Templates",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/452234bb60d99b356ba6311e6e799e095314ca87?width=48",
      route: "/data-template-summary",
    },
    {
      label: "Data Files",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/c7415cd43a008aac4e7ab1eb8c869bff352ff0a9?width=48",
      route: "/data-file-summary",
    },
    {
      label: "Data Table Summary",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/c8ba69aa9ba83c652dd93af762ca702c4b345901?width=48",
      route: "/data-table-summary",
    },
    {
      label: "User Manual",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/c1953e0eb7935f9d21a83a40acc77aef50f75e90?width=48",
      route: "/user-manual",
    },
  ];
}
