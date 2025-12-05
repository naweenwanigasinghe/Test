import { Component, EventEmitter, Output, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-file-upload-modal",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./file-upload-modal.component.html",
})
export class FileUploadModalComponent {
  @Input() submission: any;
  @Output() close = new EventEmitter<void>();
  @Output() fileSubmit = new EventEmitter<File>();

  selectedFile: File | null = null;
  isDragging = false;

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;

    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.handleFile(files[0]);
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.handleFile(input.files[0]);
    }
  }

  handleFile(file: File) {
    const maxSize = 10 * 1024 * 1024; // 10MB
    const allowedTypes = [
      "text/csv",
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ];

    if (file.size > maxSize) {
      alert("File size exceeds 10MB limit");
      return;
    }

    if (!allowedTypes.includes(file.type) && !file.name.endsWith(".csv")) {
      alert("Only CSV and Excel files are allowed");
      return;
    }

    this.selectedFile = file;
  }

  onCancel() {
    this.selectedFile = null;
    this.close.emit();
  }

  onProceedToSubmit() {
    if (this.selectedFile) {
      this.fileSubmit.emit(this.selectedFile);
      this.selectedFile = null;
      this.close.emit();
    }
  }

  onBackdropClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.onCancel();
    }
  }
}
