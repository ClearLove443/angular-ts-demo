import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'divisions',
    loadChildren: () => import('./divisions-select/divisions-select.module').then(m => m.DivisionsSelectModule)
  },  
   {
    path: 'divisions',
    loadChildren: () => import('./province/province.module').then(m => m.ProvinceModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
