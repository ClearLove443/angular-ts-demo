import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInsertComponent } from './user/user-insert/user-insert.component';
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
  { path: 'search-delete-updateusers', component: UserListComponent },
  { path: 'adduser', component: UserInsertComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
