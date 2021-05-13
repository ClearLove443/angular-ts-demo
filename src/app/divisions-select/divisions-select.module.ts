import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DivisionsRoutingModule } from './divisions-routing.module';
import { DivisionsSelectComponent } from './divisions-select.component';
@NgModule({
  imports: [DivisionsRoutingModule,RouterModule,CommonModule,FormsModule],
  declarations: [
    DivisionsSelectComponent
  ]
})
export class DivisionsSelectModule { }
