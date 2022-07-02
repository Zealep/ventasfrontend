import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Empleado } from '../../../../model/empleado';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { EmpleadoService } from '../../../../service/empleado.service';

@Component({
  selector: 'app-empleado-add',
  templateUrl: './empleado-add.component.html',
  styleUrls: ['./empleado-add.component.css']
})
export class EmpleadoAddComponent implements OnInit {

  constructor(private service: EmpleadoService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  submit(empleado: Empleado) {
    this.service.save(empleado)
      .pipe(
        catchError(error => {
          this.snackBar.open(error, '', {
            duration: 3000
          });
          return EMPTY;
        })
      )
      .subscribe(result => {
        this.snackBar.open('Empleado fue registrado', 'Cerrar', {
          duration: 3000
        });
      });
  }

  cancel() {
    this.router.navigate(['/pages/empleado']);
  }
}
