import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './shared/material/material.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { PagesComponent } from './pages/pages.component';
import { MultilevelMenuService, NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PagesModule } from './pages/pages.module';
import { BasicAuthHtppInterceptorService } from './service/basic-auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent
  ],
  imports: [
    PagesModule,
    SharedModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgMaterialMultilevelMenuModule,

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptorService, multi: true },
    MultilevelMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
