import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DivisionsSelectComponent } from './divisions-select/divisions-select.component';
import { ProvinceComponent } from './province/province.component';
import { UserInsertComponent } from './user/user-insert/user-insert.component';
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
  { path: 'search-delete-updateusers', component: UserListComponent },
  { path: 'adduser', component: UserInsertComponent },
  { path: 'divisions', component: ProvinceComponent },
  { path: 'divisionsSelect', component: DivisionsSelectComponent },
  // { path: ':provinceCode', component: ProvinceComponent },
  // { path: ':provinceCode/:city.code', component: ProvinceComponent },
  { path: ':divisions.provinceCode', component: ProvinceComponent },
  { path: ':divisions.provinceCode/:divisions.cityCode', component: ProvinceComponent },
  { path: ':divisions.provinceCode/:divisions.cityCode/:divisions.areaCode', component: ProvinceComponent },
  { path: ':divisions.provinceCode/:divisions.cityCode/:divisions.areaCode/:divisions.streetCode', component: ProvinceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
