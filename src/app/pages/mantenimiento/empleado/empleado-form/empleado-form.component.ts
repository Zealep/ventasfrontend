import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Empleado } from '../../../../model/empleado';

@Component({
  selector: 'app-empleado-form',
  templateUrl: './empleado-form.component.html',
  styleUrls: ['./empleado-form.component.css']
})
export class EmpleadoFormComponent implements OnInit {

  form: FormGroup = new FormGroup({
    apellidos: new FormControl(''),
    nombres: new FormControl(''),
    dni: new FormControl(''),
    sexo: new FormControl(''),
    fechaNacimiento: new FormControl(''),
    direccion: new FormControl(''),
    telefono: new FormControl(''),
    celular: new FormControl(''),
    correo: new FormControl(''),
    usuario: new FormControl(''),
    clave: new FormControl(''),
    rol: new FormControl(''),
    fechaIngreso: new FormControl(''),
    sueldo: new FormControl('')
  });

  @Input() title!: string;
  @Input() labelSubmit!: string;
  @Input()
  set model(m: Empleado){
    if(!m) {
      return;
    }
    this.form.patchValue(m);
  }

  @Output() enviar: EventEmitter<Empleado> = new EventEmitter<Empleado>();
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();


  constructor() { }

  ngOnInit():void {
  }

  onSubmit() {
    if(this.form.valid) {
      this.enviar.emit(this.form.value); // Enviamos el modelo de datos: Egreso
    } else {
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
