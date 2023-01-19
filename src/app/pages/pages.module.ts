import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';




@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    LoginComponent,
    HomeComponent,
    NavbarComponent
  ]
})
export class PagesModule { }
