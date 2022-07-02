import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule  } from './material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';




@NgModule({
  declarations: [
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    HeaderComponent
  ],
  entryComponents: []

})
export class SharedModule { }
