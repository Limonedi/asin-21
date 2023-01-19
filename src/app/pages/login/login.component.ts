import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;
  invalidLogin = false;
  loading=false;
  static user = {username: 'AD', password: '123456'};

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    if(this.loginForm.controls['username'].value == LoginComponent.user.username &&
    this.loginForm.controls['password'].value == LoginComponent.user.password){
    localStorage.setItem('username', this.loginForm.controls['username'].value);
    this.router.navigate(['home']);
  }else{
      this.invalidLogin = true;
      alert("Invalid credentials.")
    }
  }
}

