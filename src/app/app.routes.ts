import { Routes } from "@angular/router";
import { LoginComponent } from "./pages/login.component";
import { OverviewComponent } from "./pages/overview.component";
import { TemplateManagementComponent } from "./pages/template-management.component";
import { FileManagementComponent } from "./pages/file-management.component";
import { NewWizardComponent } from "./pages/new-wizard.component";
import { DataFileSummaryComponent } from "./pages/data-file-summary.component";
import { DataTableSummaryComponent } from "./pages/data-table-summary.component";
import { UserRoleManagementComponent } from "./pages/user-role-management.component";
import { DataSubmitterDashboardComponent } from "./pages/data-submitter-dashboard.component";
import { DataTemplateSummaryComponent } from "./pages/data-template-summary.component";
import { UserManualComponent } from "./pages/user-manual.component";
import { AdminDataFileSummaryComponent } from "./pages/admin-data-file-summary.component";
import { AdminDataTableSummaryComponent } from "./pages/admin-data-table-summary.component";
import { SubmissionPendingComponent } from "./pages/submission-pending.component";
import { AcceptancePendingComponent } from "./pages/acceptance-pending.component";
import { AcceptedSubmissionComponent } from "./pages/accepted-submission.component";
import { RejectedSubmissionComponent } from "./pages/rejected-submission.component";
import { AccessReviewComponent } from "./pages/access-review.component";

export const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "dashboard",
    component: OverviewComponent,
  },
  {
    path: "data-submitter-dashboard",
    component: DataSubmitterDashboardComponent,
  },
  {
    path: "data-template-summary",
    component: DataTemplateSummaryComponent,
  },
  {
    path: "submission-pending",
    component: SubmissionPendingComponent,
  },
  {
    path: "acceptance-pending",
    component: AcceptancePendingComponent,
  },
  {
    path: "accepted-submission",
    component: AcceptedSubmissionComponent,
  },
  {
    path: "rejected-submission",
    component: RejectedSubmissionComponent,
  },
  {
    path: "access-review",
    component: AccessReviewComponent,
  },
  {
    path: "admin-data-file-summary",
    component: AdminDataFileSummaryComponent,
  },
  {
    path: "admin-data-table-summary",
    component: AdminDataTableSummaryComponent,
  },
  {
    path: "overview",
    component: OverviewComponent,
  },
  {
    path: "template-management",
    component: TemplateManagementComponent,
  },
  {
    path: "new-template",
    component: NewWizardComponent,
    data: { mode: "template" },
  },
  {
    path: "file-management",
    component: FileManagementComponent,
  },
  {
    path: "new-file",
    component: NewWizardComponent,
    data: { mode: "file" },
  },
  {
    path: "data-file-summary",
    component: DataFileSummaryComponent,
  },
  {
    path: "data-table-summary",
    component: DataTableSummaryComponent,
  },
  {
    path: "user-role-management",
    component: UserRoleManagementComponent,
  },
  {
    path: "user-manual",
    component: UserManualComponent,
  },
  { path: "**", redirectTo: "/login" },
];
