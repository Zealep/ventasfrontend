import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
import { BrowserModule } from '@angular/platform-browser';
import { EmpleadoListComponent } from './mantenimiento/empleado/empleado-list/empleado-list.component';
import { EmpleadoFormComponent } from './mantenimiento/empleado/empleado-form/empleado-form.component';
import { EmpleadoAddComponent } from './mantenimiento/empleado/empleado-add/empleado-add.component';
import { EmpleadoEditComponent } from './mantenimiento/empleado/empleado-edit/empleado-edit.component';
import { MaterialModule } from '../shared/material/material.module';



@NgModule({
  declarations: [
    EmpleadoListComponent,
    EmpleadoFormComponent,
    EmpleadoAddComponent,
    EmpleadoEditComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgMaterialMultilevelMenuModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class PagesModule { }
