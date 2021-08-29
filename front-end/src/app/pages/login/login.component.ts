import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb : FormBuilder,
              private authService:AuthService,
              private router: Router) { }

  loginForm = this.fb.group({
    username:['', Validators.required],
    password:['',
      Validators.required,],
  });

  ngOnInit(): void {
  }
  onSubmit()
  {
    let user = this.loginForm.value;
    this.authService.login(user.username,user.password).subscribe(response=>{
        console.log("Response ",response);
        console.log("token ",response.token);
        localStorage.setItem("token",response.token);
        this.authService.setAuthentication(response.token);
        this.router.navigate(['/']);
    },error => {
        console.log("Error ",error);
        Swal.fire(
          'Invalid login!',
          'Invalid username or password',
          'warning'
        )
        this.loginForm.reset();
      });
  }
  get loginFormControl() {
    return this.loginForm.controls;
  }
}
