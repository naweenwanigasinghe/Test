import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Step {
  number: number;
  name: string;
  status: 'completed' | 'active' | 'inactive';
}

@Component({
  selector: 'app-step-indicator',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex w-full px-5 flex-col justify-center items-center gap-2.5 rounded-lg bg-white shadow-card h-16">
      <div class="flex justify-center items-center gap-6">
        <ng-container *ngFor="let step of steps; let i = index">
          <!-- Step -->
          <div class="flex items-center gap-2.5">
            <div [ngClass]="{ 'opacity-100': step.status !== 'inactive', 'opacity-60': step.status === 'inactive' }" class="flex items-center gap-2.5">
              <div class="flex p-3 items-center rounded-full" [ngClass]="{ 'bg-gradient-step': step.status !== 'inactive', 'bg-gradient-step opacity-60': step.status === 'inactive' }">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="white"/><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM18.21 8.94C19.29 10.45 19.93 12.29 19.97 14.26C19.73 14.2 17.24 13.67 14.73 14.01C14.68 13.87 14.63 13.74 14.58 13.6C14.4 13.21 14.21 12.82 14.01 12.44C16.68 11.2 18.05 9.5 18.21 8.94ZM12 3.53C14.2 3.53 16.23 4.32 17.77 5.65C17.63 6.18 16.38 7.79 13.82 8.87C12.46 6.26 10.95 4.08 10.73 3.78C11.15 3.61 11.58 3.53 12 3.53ZM9.22 4.43C9.43 4.72 10.91 6.91 12.28 9.46C8.55 10.49 5.26 10.48 4.92 10.48C5.44 7.69 7.17 5.35 9.22 4.43ZM3.53 12.01C3.53 11.93 3.53 11.85 3.54 11.77C3.87 11.78 7.99 11.83 12.18 10.56C12.39 10.98 12.58 11.41 12.76 11.84C12.66 11.87 12.56 11.9 12.47 11.94C8.09 13.38 6.05 16.85 5.87 17.17C4.55 15.67 3.53 13.93 3.53 12.01ZM12 20.47C10.17 20.47 8.5 19.85 7.17 18.82C7.31 18.52 8.83 15.73 13.62 14.01L13.67 13.99C14.8 16.94 15.28 19.49 15.4 20.23C14.32 20.65 13.17 20.47 12 20.47ZM16.65 19.41C16.57 18.88 16.13 16.54 15.08 13.64C17.57 13.24 19.8 13.9 20.06 13.98C19.71 16.25 18.39 18.22 16.65 19.41Z" fill="white"/></svg>
              </div>
              <div class="flex flex-col items-start">
                <div class="flex items-center gap-1" *ngIf="step.status === 'completed'">
                  <span class="text-gray-500 text-xs uppercase">Step {{ step.number }}</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.58214 0 0 3.58214 0 8C0 12.4179 3.58214 16 8 16C12.4179 16 16 12.4179 16 8C16 3.58214 12.4179 0 8 0ZM11.4554 5.3875L7.69464 10.6018C7.64208 10.6751 7.57279 10.7349 7.49251 10.7762C7.41224 10.8174 7.32329 10.8389 7.23304 10.8389C7.14279 10.8389 7.05384 10.8174 6.97356 10.7762C6.89328 10.7349 6.82399 10.6751 6.77143 10.6018L4.54464 7.51607C4.47679 7.42143 4.54464 7.28929 4.66071 7.28929H5.49821C5.68036 7.28929 5.85357 7.37679 5.96071 7.52679L7.23214 9.29107L10.0393 5.39821C10.1464 5.25 10.3179 5.16071 10.5018 5.16071H11.3393C11.4554 5.16071 11.5232 5.29286 11.4554 5.3875Z" fill="#10B99E"/></svg>
                </div>
                <div *ngIf="step.status !== 'completed'"><span class="text-gray-500 text-xs uppercase">Step {{ step.number }}</span></div>
                <span class="text-base font-medium" [ngClass]="{ 'text-primary-500': step.status === 'completed', 'text-gray-900': step.status === 'active', 'text-gray-600': step.status === 'inactive' }">{{ step.name }}</span>
              </div>
            </div>
          </div>
          <!-- Connector Line -->
          <div *ngIf="i < steps.length - 1" class="w-12 h-px bg-gradient-step"></div>
        </ng-container>
      </div>
    </div>
  `,
})
export class StepIndicatorComponent {
  @Input() currentStep: number = 1;
  @Input() labels?: string[];

  get steps(): Step[] {
    const defaults = [
      'Template Info & Config.',
      'Column Config.',
      'User Assign',
      'Template Manual',
      'Confirmation'
    ];

    const names = Array.isArray(this.labels) && this.labels.length >= 2 ? this.labels : defaults;

    return names.map((name, idx) => ({
      number: idx + 1,
      name,
      status: (idx + 1) < this.currentStep ? 'completed' : (idx + 1) === this.currentStep ? 'active' : 'inactive'
    }));
  }
}
