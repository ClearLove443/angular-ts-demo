import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonService } from './service/common.service';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserInsertComponent } from './user/user-insert/user-insert.component';
import { CommonInsertComponent } from './app-common/common-insert.component';
import { PcServiceService } from './service/PcServiceService';
import { CommonSelectDeleteUpdateComponent } from './app-common/common-select_delete_update.component';
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    UserInsertComponent,
    CommonInsertComponent,
    CommonSelectDeleteUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgGridModule.withComponents([])
  ],

  // 所有的组件都可以访问
  // providers: [AddService],
  // bootstrap: [AppComponent, DemoComponent]
  providers: [CommonService, PcServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
