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
import { ParentComponent }   from './parent/parent.component';
import { FaisalComponent }    from './admin/faisal/faisal.component';
import { TorbenComponent }    from './admin/torben/torben.component';

@NgModule({
  declarations: [
    AppComponent,
    FaisalComponent,
    DashboardComponent,
    GroupComponent,
    ParentComponent,
    TorbenComponent
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
