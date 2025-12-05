import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationComponent } from '../components/navigation.component';
import { HeaderComponent } from '../components/header.component';

interface UserItem {
  id: string;
  name: string;
  email: string;
  roles: ('Data Submitter'|'Data Viewer'|'Data Accepter'|'Admin')[];
  organization: string;
  accountType: 'Permanent' | 'Temporary';
  active: boolean;
}

@Component({
  selector: 'app-user-role-management',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, NavigationComponent, HeaderComponent],
  templateUrl: './user-role-management.component.html',
})
export class UserRoleManagementComponent {
  activeTab: 'all' | 'active' | 'inactive' = 'active';
  showNewUser = false;

  users: UserItem[] = [
    { id: 'u1', name: 'Sarah Johnson', email: 'sarah.j@agency.gov', roles: ['Data Viewer'], organization: 'Research Institute', accountType: 'Permanent', active: true }
  ];

  newUserForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.newUserForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      roleSubmitter: [false],
      roleViewer: [false],
      roleAccepter: [false],
      roleAdmin: [false]
    });
  }

  setTab(tab: 'all'|'active'|'inactive'){ this.activeTab = tab; }

  get counts(){
    return {
      all: this.users.length,
      active: this.users.filter(u=>u.active).length,
      inactive: this.users.filter(u=>!u.active).length,
    };
  }

  get filteredUsers(){
    if(this.activeTab==='all') return this.users;
    return this.users.filter(u => this.activeTab==='active' ? u.active : !u.active);
  }

  openNewUser(){ this.showNewUser = true; }
  closeNewUser(){ this.showNewUser = false; this.newUserForm.reset({ roleSubmitter:false, roleViewer:false, roleAccepter:false, roleAdmin:false }); }

  submitNewUser(){
    if(this.newUserForm.invalid){ return; }
    const v = this.newUserForm.value as any;
    const roles: UserItem['roles'] = [];
    if(v.roleSubmitter) roles.push('Data Submitter');
    if(v.roleViewer) roles.push('Data Viewer');
    if(v.roleAccepter) roles.push('Data Accepter');
    if(v.roleAdmin) roles.push('Admin');

    const newUser: UserItem = {
      id: 'u'+Date.now().toString(36),
      name: v.name,
      email: v.email,
      roles,
      organization: '—',
      accountType: 'Permanent',
      active: true
    };
    this.users.push(newUser);
    this.closeNewUser();
  }

  toggleActive(u: UserItem){ u.active = !u.active; }
  deleteAt(i: number){ this.users.splice(i,1); }
}
