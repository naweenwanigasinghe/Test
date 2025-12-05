import { Component, Input, HostListener, OnInit, OnDestroy } from "@angular/core";
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
export class DataSubmitterNavigationComponent implements OnInit, OnDestroy {
  @Input() activeRoute?: string;

  isExpanded = false;
  isMobile = false;

  private resizeListener: (() => void) | null = null;

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

  ngOnInit(): void {
    this.checkScreenSize();
    this.resizeListener = this.checkScreenSize.bind(this);
    window.addEventListener("resize", this.resizeListener);
  }

  ngOnDestroy(): void {
    if (this.resizeListener) {
      window.removeEventListener("resize", this.resizeListener);
    }
  }

  private checkScreenSize(): void {
    this.isMobile = window.innerWidth < 768;
    if (this.isMobile) {
      this.isExpanded = true;
    }
  }

  onMouseEnter(): void {
    if (!this.isMobile) {
      this.isExpanded = true;
    }
  }

  onMouseLeave(): void {
    if (!this.isMobile) {
      this.isExpanded = false;
    }
  }

  onNavClick(): void {
    if (this.isMobile && this.isExpanded) {
      this.isExpanded = false;
    }
  }

  getNavClasses(): string {
    const baseClasses = "left-0 rounded-r-3xl";

    if (this.isMobile) {
      return `${baseClasses} bottom-0 top-auto w-full h-auto`;
    }

    const topPosition = "top-44";
    const width = this.isExpanded ? "w-[266px]" : "w-[66px]";

    return `${baseClasses} ${topPosition} ${width}`;
  }
}
