import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import {
  RoleSelectionModalComponent,
  UserRole,
} from "../components/role-selection-modal.component";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule, RouterModule,FormsModule, RoleSelectionModalComponent],
  templateUrl: "./login.component.html",
})
export class LoginComponent {
  email = "";
  password = "";
  showPassword = false;
  showRoleModal = false;

  constructor(private router: Router) {}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSignIn() {
    // Show role selection modal after sign in
    this.showRoleModal = true;
  }

  onRoleSelected(role: UserRole) {
    this.showRoleModal = false;

    // Navigate based on role selection
    if (role === "admin") {
      this.router.navigate(["/dashboard"]);
    } else if (role === "dataSubmitter") {
      this.router.navigate(["/data-submitter-dashboard"]);
    } else if (role === "dataAccepter") {
      // Navigate to data accepter dashboard (using existing dashboard for now)
      this.router.navigate(["/dashboard"]);
    }
  }

  onLogout() {
    this.showRoleModal = false;
    // Clear any stored data and stay on login page
    this.email = "";
    this.password = "";
  }
}
