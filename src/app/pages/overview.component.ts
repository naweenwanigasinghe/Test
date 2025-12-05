import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from '../components/navigation.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule, RouterModule, NavigationComponent],
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {
  notifications = [
    { title: 'Data Table Submission - NM_202406', description: 'John Doe submitted net Metering data for June 2024. Requires review by data Accepter.', time: '20 min ago', read: false },
    { title: 'Data Table Submission - NM_202406', description: 'John Doe submitted net Metering data for June 2024. Requires review by data Accepter.', time: '20 min ago', read: false },
    { title: 'Data Table Submission - NM_202406', description: 'John Doe submitted net Metering data for June 2024. Requires review by data Accepter.', time: '20 min ago', read: false },
    { title: 'Data Table Submission - NM_202406', description: 'John Doe submitted net Metering data for June 2024. Requires review by data Accepter.', time: '20 min ago', read: true },
  ];

  draftTemplates = [
    { name: 'Net Metering Template (NM)', lastUpdated: 'Last Updated: 05/07/2025', status: 'draft' },
    { name: 'Net Metering Template (NM)', lastUpdated: 'Last Updated: 05/07/2025', status: 'draft' },
    { name: 'Net Metering Template (NM) | Version 2.1', lastUpdated: 'Last Updated: 05/07/2025', status: 'active' },
    { name: 'Net Metering Template (NM) | Version 2.1', lastUpdated: 'Last Updated: 05/07/2025', status: 'active' },
    { name: 'Net Metering Template (NM)', lastUpdated: 'Last Updated: 05/07/2025', status: 'draft' },
  ];

  activities = [
    { title: 'New Template Created: Energy Storage Q3 2024', time: '2 hours ago' },
    { title: 'New Template Created: Energy Storage Q3 2024', time: '2 hours ago' },
    { title: 'New Template Created: Energy Storage Q3 2024', time: '2 hours ago' },
    { title: 'New Template Created: Energy Storage Q3 2024', time: '2 hours ago' },
    { title: 'New Template Created: Energy Storage Q3 2024', time: '2 hours ago' },
  ];
}
