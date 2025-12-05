import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DataSubmitterNavigationComponent } from "../components/data-submitter-navigation.component";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-user-manual",
  standalone: true,
  imports: [CommonModule, RouterModule,DataSubmitterNavigationComponent],
  templateUrl: './user-manual.component.html',
})
export class UserManualComponent {}
