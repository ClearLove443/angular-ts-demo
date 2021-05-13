import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonInsertComponent } from '@app/app-common/common-insert.component';
import { CommonSelectDeleteUpdateComponent } from '@app/app-common/common-select_delete_update.component';
import { AgGridModule } from 'ag-grid-angular';
import { UserFormComponent } from './user-form/user-form.component';
import { UserInsertComponent } from './user-insert/user-insert.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserRoutingModule } from './user-routing.module';
@NgModule({
  imports: [UserRoutingModule,RouterModule,CommonModule,FormsModule,
    AgGridModule.withComponents([])],
  declarations: [
    UserListComponent,
    UserFormComponent,
    UserInsertComponent,
    CommonInsertComponent,
    CommonSelectDeleteUpdateComponent
  ]
})
export class UserModule { }
