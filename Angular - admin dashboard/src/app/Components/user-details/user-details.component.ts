import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UsersService } from '../../Serivces/users.service';
import {MatTabsModule} from '@angular/material/tabs';
import { CurrencyPipe } from '@angular/common';
import {CdkAccordionModule} from '@angular/cdk/accordion';





@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [MatTabsModule,CurrencyPipe,CdkAccordionModule,RouterLink],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {
  userId!:any;
  user!:any;
  rentedCars!: any [];
  ownedCars!:any [];

constructor(private _ActivatedRoute:ActivatedRoute,private _usersSerivce:UsersService,private router:Router){}
ngOnInit(): void {
this.getId()
this.getUser()
}

getId()
{
  this._ActivatedRoute.paramMap.subscribe((params)=>
  {
    this.userId = params.get('id')
  })
}
getUser()
{
  this._usersSerivce.getUser(this.userId).subscribe({
    next:(data)=>
    {
      this.user = data.data
     this.rentedCars = this.user.rentedCars
     this.ownedCars = this.user.ownedCars
    }
  })
}

deleteUser()
{
  this._usersSerivce.deleteUser(this.userId).subscribe({
    next:()=>
    {
      this.router.navigate(['/userLayout'])
    }
  })
}




}
