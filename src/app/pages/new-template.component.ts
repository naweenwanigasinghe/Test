import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { NavigationComponent } from '../components/navigation.component';
import { HeaderComponent } from '../components/header.component';
import { StepIndicatorComponent } from '../components/step-indicator.component';

@Component({
  selector: 'app-new-template',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NavigationComponent,
    HeaderComponent,
    StepIndicatorComponent,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule
  ],
  templateUrl: './new-template.component.html',
})
export class NewTemplateComponent {
  currentStep = 1;
  totalSteps = 5;
  step2View: 'empty' | 'add' | 'list' | 'import' = 'empty';
  userAssignView: 'empty' | 'assigned' = 'empty';
  columns: { name: string; type: string; mandatory: boolean }[] = [];
  columnForm!: FormGroup;
  assignedUsers: { name: string; organization: string; type: 'Submitter' | 'Viewer' | 'Accepter'; permission: string; approval: string }[] = [];
  userModal: 'submitter' | 'viewer' | 'accepter' | null = null;

  templateInfoForm: FormGroup;
  metadataForm: FormGroup;
  submitterForm: FormGroup;
  viewerForm: FormGroup;
  accepterForm: FormGroup;

  stepLabels: string[] = ['Template Info & Config.', 'Column Config.', 'User Assign', 'Related Documents', 'Confirmation'];
  sectorOptions = ['Energy', 'Utilities', 'Transportation', 'Manufacturing'];
  categoryOptions = ['Renewable Energy', 'Grid Management', 'Efficiency'];
  subCategoryOptions = ['Solar', 'Wind', 'Hydro', 'Net Metering'];
  frequencyOptions = ['Monthly', 'Quarterly', 'Annually'];
  entityOptions = ['Ceylon Electricity Board', 'Power Grid Inc', 'Policy Analysis Unit'];

  constructor(private router: Router, private fb: FormBuilder) {
    this.templateInfoForm = this.fb.group({
      templateId: [''],
      sector: ['', Validators.required],
      category: ['', Validators.required],
      subCategory: ['', Validators.required],
      code: ['']
    });

    this.metadataForm = this.fb.group({
      description: ['', Validators.required],
      submissionFrequency: ['', Validators.required],
      effectiveStartDate: ['', Validators.required],
      effectiveEndDate: ['', Validators.required]
    });

    this.columnForm = this.fb.group({
      name: ['', Validators.required],
      type: ['Integer', Validators.required],
      mandatory: [false]
    });

    this.submitterForm = this.fb.group({
      user: ['', Validators.required],
      organization: [''],
      approval: ['one-tier', Validators.required]
    });

    this.viewerForm = this.fb.group({
      user: ['', Validators.required],
      organization: [''],
      effectiveFrom: [null],
      effectiveTo: [null]
    });

    this.accepterForm = this.fb.group({
      user: ['', Validators.required],
      organization: [''],
      sector: [''],
      entity: [''],
      category: [''],
      subCategory: ['']
    });
  }

  nextStep(){ if(this.currentStep < this.totalSteps){ this.currentStep++; } else { this.router.navigate(['/template-management']); } }
  previousStep(){ if(this.currentStep > 1){ this.currentStep--; } }
  goToStep(step: number){ this.currentStep = step; }

  showAddColumn(){ this.step2View = 'add'; }
  showImport(){ this.step2View = 'import'; }
  showList(){ this.step2View = 'list'; }
  addColumn(){ if(this.columnForm.valid){ this.columns.push({ ...(this.columnForm.value as any) }); this.columnForm.reset({ type: 'Integer', mandatory: false }); this.showList(); } }
  removeColumn(i: number){ this.columns.splice(i, 1); }

  openModal(type: 'submitter'|'viewer'|'accepter'){ this.userModal = type; }
  closeModal(){ this.userModal = null; }
  showAssignedView(){ this.userAssignView = 'assigned'; }

  addSubmitter(){
    if(this.submitterForm.valid){
      const v = this.submitterForm.value as any;
      const map: any = { 'one-tier':'One Tier','two-tier':'Two Tier','none':'N/A' };
      this.assignedUsers.push({ name: v.user, organization: v.organization || '—', type: 'Submitter', permission: 'N/A', approval: map[v.approval] ?? 'N/A' });
      this.closeModal();
      this.showAssignedView();
    }
  }

  addViewer(){
    if(this.viewerForm.valid){
      const v = this.viewerForm.value as any;
      this.assignedUsers.push({ name: v.user, organization: v.organization || '—', type: 'Viewer', permission: 'View Only', approval: 'N/A' });
      this.closeModal();
      this.showAssignedView();
    }
  }

  addAccepter(){
    if(this.accepterForm.valid){
      const v = this.accepterForm.value as any;
      this.assignedUsers.push({ name: v.user, organization: v.organization || '—', type: 'Accepter', permission: 'N/A', approval: 'N/A' });
      this.closeModal();
      this.showAssignedView();
    }
  }

  deleteUser(i: number){ this.assignedUsers.splice(i, 1); if(this.assignedUsers.length === 0){ this.userAssignView = 'empty'; } }
}
