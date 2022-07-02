import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Empleado } from '../../../../model/empleado';
import { EmpleadoService } from '../../../../service/empleado.service';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {

  displayedColumns: string[] = ['apellidos', 'nombres', 'fechaNacimiento', 'direccion', 'telefono', 'celular', 'correo'];
  dataSource!: MatTableDataSource<Empleado>;
  empleados: Empleado[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private empleadoService:EmpleadoService) {

   }

  ngOnInit(): void {
    this.empleadoService.getAll().subscribe(x=>{
      this.empleados = x;
      this.dataSource = new MatTableDataSource(this.empleados);
    })

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
