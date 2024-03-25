import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,  FormGroup,  FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { UsersService } from '../../Serivces/users.service';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,MatSlideToggleModule,MatInputModule,MatFormFieldModule,ReactiveFormsModule,MatFormFieldModule,MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit    {
  formGroup!:FormGroup
  hide = true;
  error!:string

  ngOnInit(): void {

  }
  constructor(private formBuilder:FormBuilder,private _userService:UsersService,private router:Router)
  {
    this.formGroup = this.formBuilder.group({
      email :new FormControl('', [Validators.required, Validators.email]),
      password:new FormControl ('', [Validators.required]),
    })
  }

  get email ()
  {
    return this.formGroup.get('email')
  }
  get password ()
  {
    return this.formGroup.get('password')
  }

login ()

{
 this._userService.Login(this.formGroup.value).subscribe({
  next:(response)=>
  {

    if(response.status === 'success')
    {
      localStorage.setItem('adminToken',response.token)
      this.router.navigate(['/dashboard'])
    }
  },
  error:(err)=>
  {
    this.error = err.error.message
  }

  })


}


}


