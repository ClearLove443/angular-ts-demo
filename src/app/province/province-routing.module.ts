import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvinceComponent } from './province.component';

const routes: Routes = [
  // { path: ':provinceCode', component: ProvinceComponent },
  // { path: ':provinceCode/:city.code', component: ProvinceComponent },
  { path: 'divisions', component: ProvinceComponent },
  { path: ':divisions.provinceCode', component: ProvinceComponent },
  { path: ':divisions.provinceCode/:divisions.cityCode', component: ProvinceComponent },
  { path: ':divisions.provinceCode/:divisions.cityCode/:divisions.areaCode', component: ProvinceComponent },
  { path: ':divisions.provinceCode/:divisions.cityCode/:divisions.areaCode/:divisions.streetCode', component: ProvinceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class ProvinceRoutingModule { }
