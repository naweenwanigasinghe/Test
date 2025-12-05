import { Component, EventEmitter, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

export type UserRole = "admin" | "dataSubmitter" | "dataAccepter";

@Component({
  selector: "app-role-selection-modal",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './role-selection-modal.component.html',
})
export class RoleSelectionModalComponent {
  @Output() roleSelected = new EventEmitter<UserRole>();
  @Output() logout = new EventEmitter<void>();

  selectRole(role: UserRole) {
    this.roleSelected.emit(role);
  }

  onLogout() {
    this.logout.emit();
  }
}
