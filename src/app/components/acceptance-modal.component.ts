import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-acceptance-modal",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./acceptance-modal.component.html",
})
export class AcceptanceModalComponent {
  @Input() isOpen = false;
  @Input() submission: any;
  @Output() close = new EventEmitter<void>();
  @Output() accept = new EventEmitter<void>();
  @Output() reject = new EventEmitter<void>();
  @Output() download = new EventEmitter<void>();
  @Output() saveAsDraft = new EventEmitter<void>();

  tableData = [
    { row: 1, installationId: "", capacity: "", installationDate: "", comments: "" },
    { row: 2, installationId: "", capacity: "", installationDate: "", comments: "" },
    { row: 3, installationId: "", capacity: "", installationDate: "", comments: "" },
    { row: 4, installationId: "", capacity: "", installationDate: "", comments: "" },
    { row: 5, installationId: "", capacity: "", installationDate: "", comments: "" },
    { row: 6, installationId: "", capacity: "", installationDate: "", comments: "" },
    { row: 7, installationId: "", capacity: "", installationDate: "", comments: "" },
    { row: 8, installationId: "", capacity: "", installationDate: "", comments: "" },
  ];

  generalComment = "";

  onClose() {
    this.close.emit();
  }

  onAccept() {
    this.accept.emit();
  }

  onReject() {
    this.reject.emit();
  }

  onDownload() {
    this.download.emit();
  }

  onSaveAsDraft() {
    this.saveAsDraft.emit();
  }

  onBackdropClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  }
}
