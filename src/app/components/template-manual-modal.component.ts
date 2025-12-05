import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-template-manual-modal",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4"
      (click)="$event.target === $event.currentTarget && onClose()"
    >
      <div
        class="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-auto"
      >
        <!-- Header -->
        <div class="flex flex-col items-center pt-8 px-6 pb-6 border-b">
          <h1 class="text-3xl font-medium font-['Poppins'] text-[#0B0B0B] mb-2">
            Template Manual
          </h1>
          <p class="text-lg font-normal font-['Poppins'] text-[#909090]">
            {{ submission.id }} ({{ submission.title }})
          </p>
        </div>

        <!-- Content -->
        <div class="p-8">
          <!-- Dashed Border Container -->
          <div
            class="flex flex-col items-center gap-10 p-8 border-2 border-dashed border-[#290967] rounded-lg"
          >
            <!-- PDF Icon -->
            <div class="flex flex-col items-center gap-3">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/d351aca3fd7c846fa9df409fcf1b1a1706b5f80f?width=318"
                alt="PDF Icon"
                class="w-40 h-48 object-contain"
              />
              <p class="text-sm font-normal font-['Poppins'] text-[#080114]">
                {{ submission.fileSize }} | {{ submission.pages }}
              </p>
            </div>

            <!-- Action Buttons -->
            <div class="flex items-center gap-4">
              <button
                (click)="onViewOnline()"
                class="flex items-center justify-center gap-2 px-6 py-2.5 bg-[#290967] text-white rounded-lg hover:bg-[#3d147a] transition-colors font-medium font-['Poppins']"
              >
                <span>View Online</span>
                <svg
                  class="w-[18px] h-[18px]"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18H30M30 18L20.5 8.5M30 18L20.5 27.5"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>

              <button
                (click)="onDownloadPDF()"
                class="flex items-center justify-center gap-2 px-6 py-2.5 bg-[#12CEB0] text-white rounded-lg hover:bg-[#0FB59A] transition-colors font-medium font-['Poppins']"
              >
                <span>Download PDF</span>
                <svg
                  class="w-[18px] h-[18px]"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18H30M30 18L20.5 8.5M30 18L20.5 27.5"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>

            <!-- Metadata -->
            <div
              class="w-full flex items-center justify-between px-6 py-4 border border-[#290967] rounded-lg"
            >
              <p class="text-lg font-light font-['Poppins'] text-[#080114]">
                Updated: {{ submission.updated }}
              </p>
              <p class="text-lg font-light font-['Poppins'] text-[#080114]">
                {{ submission.version }}
              </p>
            </div>
          </div>
        </div>

        <!-- Close Button -->
        <div class="flex justify-end px-8 pb-8">
          <button
            (click)="onClose()"
            class="flex items-center justify-center gap-2 px-5 py-2.5 border-2 border-[#CE5212] text-[#CE5212] rounded-lg hover:bg-orange-50 transition-colors font-semibold font-['Poppins']"
          >
            <svg
              class="w-[18px] h-[18px]"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="#CE5212"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>Close</span>
          </button>
        </div>
      </div>
    </div>
  `,
})
export class TemplateManualModalComponent {
  @Input() submission: any;
  @Output() close = new EventEmitter<void>();

  onViewOnline() {
    console.log("View online:", this.submission);
  }

  onDownloadPDF() {
    console.log("Download PDF:", this.submission);
  }

  onClose() {
    this.close.emit();
  }
}
