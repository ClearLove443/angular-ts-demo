import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProvinceRoutingModule } from './province-routing.module';
import { ProvinceComponent } from './province.component';
@NgModule({
  imports: [ProvinceRoutingModule,RouterModule,CommonModule],
  declarations: [
    ProvinceComponent
  ]
})
export class ProvinceModule { }
