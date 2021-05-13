import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonService } from './service/common.service';
import { PcServiceService } from './service/PcServiceService';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IonicModule.forRoot()
  ],

  // 所有的组件都可以访问
  // providers: [AddService],
  // bootstrap: [AppComponent, DemoComponent]
  providers: [CommonService, PcServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
