import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-history-modal",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./history-modal.component.html",
})
export class HistoryModalComponent {
  @Input() isOpen = false;
  @Input() submission: any;
  @Output() close = new EventEmitter<void>();

  historyStats = {
    initialSubmission: "2024 - 07 -05  3:25 PM",
    totalProcessingTime: "6 Days",
    reviewCycles: "2 Cycles",
    finalStatus: "Accepted",
  };

  timelineEvents = [
    {
      date: "2024 - 07 -05",
      time: "3:25 PM",
      description: "Initial submission received",
    },
    {
      date: "2024 - 07 -04",
      time: "2:45 PM",
      description: "Review completed",
    },
  ];

  onClose() {
    this.close.emit();
  }

  onBackdropClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  }
}
