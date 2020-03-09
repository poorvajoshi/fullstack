import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserService } from './service/user.service';
import { GroupService } from './service/group.service';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { GroupComponent }   from './group/group.component';
import { AdminComponent }   from './admin/admin.component';
import { CustomDirective }          from './admin/custom.directive';
import { UserComponent }    from './admin/user.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GroupComponent,
    AdminComponent,
    UserComponent,
    CustomDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  entryComponents: [ 
   ],
  providers: [UserService, GroupService],
  bootstrap: [AppComponent]
})
export class AppModule { 
   constructor() {}
}
