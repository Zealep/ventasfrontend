import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { EmpleadoListComponent } from './mantenimiento/empleado/empleado-list/empleado-list.component';
import { EmpleadoAddComponent } from './mantenimiento/empleado/empleado-add/empleado-add.component';
import { EmpleadoEditComponent } from './mantenimiento/empleado/empleado-edit/empleado-edit.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: '', //
      pathMatch: 'full',
      redirectTo: 'empleado'
    },

    {
      path: 'empleado', //
      component:EmpleadoListComponent
    },

    {
      path: 'empleado', //
      component:EmpleadoListComponent
    },
    {
      path: 'empleado/add',
      component: EmpleadoAddComponent
    },
    {
      path: 'empleado/edit/:id',
      component: EmpleadoEditComponent
    },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
