import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DivisionsSelectComponent } from './divisions-select.component';

const routes: Routes = [{ path: '', component: DivisionsSelectComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class DivisionsRoutingModule { }
