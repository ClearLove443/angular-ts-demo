import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { DemosComponent } from './demos/demos.component';
import { UserService } from './service/user.service';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { UserInsertComponent } from './user-insert/user-insert.component';
@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    DemosComponent,
    UserListComponent,
    UserFormComponent,
    UserComponent,
    UserInsertComponent
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
  providers: [UserService],
  bootstrap: [ AppComponent]
})
export class AppModule { }
