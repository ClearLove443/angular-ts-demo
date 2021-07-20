import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DivisionsSelectComponent } from './divisions-select.component';

const routes: Routes = [{ path: '', component: DivisionsSelectComponent },];

@NgModule({
  // imports: [DivisionsRoutingModule,RouterModule,CommonModule,FormsModule],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule],
  declarations: [
    DivisionsSelectComponent
  ]
})
export class DivisionsSelectModule { }
