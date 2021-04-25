import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
  { path: 'searchusers', component: UserListComponent },
  { path: 'adduser', component: UserFormComponent },
  // { path: 'updateuser', component: UserFormComponent },
  // { path: 'deleteuser', component: UserFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
