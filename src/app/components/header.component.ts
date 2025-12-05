import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Input() title: string = 'Template Management';
  @Input() showBreadcrumb: boolean = false;
  @Input() breadcrumbParent: string = 'Template Management';

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/template-management']);
  }
}
