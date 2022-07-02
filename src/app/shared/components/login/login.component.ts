import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin = false

  @Input() error: string | null | undefined ;

  form: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  submit() {
    if(this.form.valid) {
      this.checkLogin();
    }
  }


  checkLogin() {
    (this.loginservice.authenticate(this.form.get('username')?.value,this.form.get('password')?.value).subscribe(
      data => {
        this.router.navigate(['pages'])
        this.invalidLogin = false
      },
      error => {
        this.invalidLogin = true
        console.log(error)
        this.error = error.error.message;

      }
    )
    );

  }

}
