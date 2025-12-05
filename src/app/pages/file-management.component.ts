import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from '../components/navigation.component';
import { HeaderComponent } from '../components/header.component';

interface FileItem {
  id: string;
  name: string;
  status: 'draft' | 'active' | 'archived';
  lastUpdated: string;
}

@Component({
  selector: 'app-file-management',
  standalone: true,
  imports: [CommonModule, RouterModule, NavigationComponent, HeaderComponent],
  templateUrl: './file-management.component.html',
})
export class FileManagementComponent {
  activeTab: 'all' | 'active' | 'draft' | 'archived' = 'all';
  showSettings = false;

  files: FileItem[] = [
    { id: 'f1', name: 'Net Metering Template (NM)', status: 'draft', lastUpdated: '05/07/2025' },
    { id: 'f2', name: 'Net Metering Template (NM)', status: 'active', lastUpdated: '05/07/2025' },
    { id: 'f3', name: 'Net Metering Template (NM)', status: 'archived', lastUpdated: '05/07/2025' }
  ];

  setTab(tab: 'all' | 'active' | 'draft' | 'archived') { this.activeTab = tab; }

  get counts() {
    return {
      all: this.files.length,
      active: this.files.filter(f => f.status==='active').length,
      draft: this.files.filter(f => f.status==='draft').length,
      archived: this.files.filter(f => f.status==='archived').length,
    };
  }

  get filteredFiles() { return this.activeTab==='all' ? this.files : this.files.filter(f=>f.status===this.activeTab); }

  toggleSettings(){ this.showSettings = !this.showSettings; }
  closeSettings(){ this.showSettings = false; }
}
