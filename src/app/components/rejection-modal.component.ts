import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-rejection-modal",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./rejection-modal.component.html",
})
export class RejectionModalComponent {
  @Input() isOpen = false;
  @Input() submission: any;
  @Output() close = new EventEmitter<void>();
  @Output() downloadErrorReport = new EventEmitter<void>();
  @Output() proceedToResubmit = new EventEmitter<void>();

  tableData = [
    {
      row: 1,
      installationId: "",
      capacity: "",
      installationDate: "",
      comments: "",
      hasError: false,
    },
    {
      row: 2,
      installationId: "",
      capacity: "",
      installationDate: "",
      comments: "",
      hasError: true,
    },
    {
      row: 3,
      installationId: "",
      capacity: "",
      installationDate: "",
      comments: "",
      hasError: false,
    },
    {
      row: 4,
      installationId: "",
      capacity: "",
      installationDate: "",
      comments: "",
      hasError: true,
    },
    {
      row: 5,
      installationId: "",
      capacity: "",
      installationDate: "",
      comments: "",
      hasError: false,
    },
    {
      row: 6,
      installationId: "",
      capacity: "",
      installationDate: "",
      comments: "",
      hasError: true,
    },
    {
      row: 7,
      installationId: "",
      capacity: "",
      installationDate: "",
      comments: "",
      hasError: false,
    },
    {
      row: 8,
      installationId: "",
      capacity: "",
      installationDate: "",
      comments: "",
      hasError: false,
    },
  ];

  generalRejectionComment = "";
  commentsMode = false;

  onClose() {
    this.close.emit();
  }

  onDownloadErrorReport() {
    this.downloadErrorReport.emit();
  }

  onProceedToResubmit() {
    this.proceedToResubmit.emit();
  }

  onBackdropClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  }
}
