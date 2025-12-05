import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from '../components/navigation.component';
import { HeaderComponent } from '../components/header.component';

interface DataFileItem {
  id: string;
  name: string;
  ref: string;
  subRef: string;
  updated: string;
  size: string;
  tags: string[];
}

@Component({
  selector: 'app-data-file-summary',
  standalone: true,
  imports: [CommonModule, RouterModule, NavigationComponent, HeaderComponent],
  templateUrl: './admin-data-file-summary.component.html',
})
export class AdminDataFileSummaryComponent {
  items: DataFileItem[] = [
    { id: '1', name: 'Net Metering June 2024', ref: 'RE_2024/6', subRef: 'SUB-EE-2464193', updated: 'Aug 18, 2025 3:25 PM', size: '2.4 MB', tags: ['Energy','Operational','Electricity'] },
    { id: '2', name: 'Net Metering June 2024', ref: 'RE_2024/6', subRef: 'SUB-EE-2464193', updated: 'Aug 18, 2025 3:25 PM', size: '2.4 MB', tags: ['Energy','Operational','Electricity'] },
    { id: '3', name: 'Net Metering June 2024', ref: 'RE_2024/6', subRef: 'SUB-EE-2464193', updated: 'Aug 18, 2025 3:25 PM', size: '2.4 MB', tags: ['Energy','Operational','Electricity'] },
  ];
}