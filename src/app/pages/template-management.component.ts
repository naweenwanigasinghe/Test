import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from '../components/navigation.component';
import { HeaderComponent } from '../components/header.component';

interface Template {
  id: string;
  name: string;
  status: 'draft' | 'active' | 'archived';
  lastUpdated: string;
  categories: string[];
  isActivated: boolean;
}

@Component({
  selector: 'app-template-management',
  standalone: true,
  imports: [CommonModule, RouterModule, NavigationComponent, HeaderComponent],
  templateUrl: './template-management.component.html',
})
export class TemplateManagementComponent {
  activeTab: 'all' | 'active' | 'draft' | 'archived' = 'all';
  showSettings = false;

  templates: Template[] = [
    { id: '1', name: 'Net Metering Template (NM)', status: 'draft', lastUpdated: '05/07/2025', categories: ['Operational', 'Electricity'], isActivated: false },
    { id: '2', name: 'Net Metering Template (NM)', status: 'active', lastUpdated: '05/07/2025', categories: ['Operational', 'Electricity'], isActivated: true },
    { id: '3', name: 'Net Metering Template (NM)', status: 'archived', lastUpdated: '05/07/2025', categories: ['Operational', 'Electricity'], isActivated: false },
    { id: '4', name: 'Net Metering Template (NM)', status: 'draft', lastUpdated: '05/07/2025', categories: ['Operational', 'Electricity'], isActivated: false }
  ];

  setTab(tab: 'all' | 'active' | 'draft' | 'archived') {
    this.activeTab = tab;
  }

  toggleSettings() {
    this.showSettings = !this.showSettings;
  }

  closeSettings() {
    this.showSettings = false;
  }

  addItem(section: string) {
    // Implement add action for the specific section
    // This can be extended to open modals or forms per section
    this.showSettings = false;
  }

  get counts() {
    return {
      all: this.templates.length,
      active: this.templates.filter(t => t.status === 'active').length,
      draft: this.templates.filter(t => t.status === 'draft').length,
      archived: this.templates.filter(t => t.status === 'archived').length,
    };
  }

  get filteredTemplates() {
    if (this.activeTab === 'all') return this.templates;
    return this.templates.filter(t => t.status === this.activeTab);
  }
}
