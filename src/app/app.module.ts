import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonService } from './service/common.service';
import { PcServiceService } from './service/PcServiceService';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],

  // 所有的组件都可以访问
  // providers: [AddService],
  // bootstrap: [AppComponent, DemoComponent]
  providers: [CommonService, PcServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
