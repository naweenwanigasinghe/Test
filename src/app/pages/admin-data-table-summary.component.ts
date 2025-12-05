import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from '../components/navigation.component';
import { HeaderComponent } from '../components/header.component';

interface DataTableItem {
  id: string;
  name: string;
  version: string;
  ref: string;
  subRef: string;
  updated: string;
  size: string;
  tags: string[];
}

@Component({
  selector: 'app-data-table-summary',
  standalone: true,
  imports: [CommonModule, RouterModule, NavigationComponent, HeaderComponent],
  templateUrl: './admin-data-table-summary.component.html',
})
export class AdminDataTableSummaryComponent {
  items: DataTableItem[] = [
    { id: '1', name: 'Net Metering June 2024', version: '2.1', ref: 'RE_2024/6', subRef: 'SUB-EE-2464193', updated: 'Aug 18, 2025 3:25 PM', size: '2.4 MB', tags: ['Energy','Operational','Electricity'] },
    { id: '2', name: 'Net Metering June 2024', version: '2.1', ref: 'RE_2024/6', subRef: 'SUB-EE-2464193', updated: 'Aug 18, 2025 3:25 PM', size: '2.4 MB', tags: ['Energy','Operational','Electricity'] },
    { id: '3', name: 'Net Metering June 2024', version: '2.1', ref: 'RE_2024/6', subRef: 'SUB-EE-2464193', updated: 'Aug 18, 2025 3:25 PM', size: '2.4 MB', tags: ['Energy','Operational','Electricity'] },
  ];
}