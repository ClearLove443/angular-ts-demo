import { NgModule } from '@angular/core';
import { InfrastructureModule } from 'src/shared/infrastructure.module';
import { ProvinceComponent } from './pages/province.component';

/**
 * Province module
 *
 * @export
 * @class ProvinceModule
 */
@NgModule({
  imports: [
    InfrastructureModule
  ],
  declarations: [
    ProvinceComponent
  ],
  entryComponents: [
    ProvinceComponent
  ]
})
export class ProvinceModule { }
