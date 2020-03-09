import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { GroupComponent }   from './group/group.component';
import { AdminComponent }   from './admin/admin.component';
import { AdminResolver }   from './admin/admin.resolver';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/:id', component: GroupComponent },
  { path: 'user/:id', component: AdminComponent, resolve: { user: AdminResolver } }
        
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [AdminResolver]
})
export class AppRoutingModule {}