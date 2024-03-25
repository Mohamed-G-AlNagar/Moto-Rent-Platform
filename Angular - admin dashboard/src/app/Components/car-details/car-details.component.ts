import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarsService } from '../../Serivces/cars.service';
import { UsersService } from '../../Serivces/users.service';

@Component({
  selector: 'app-car-details',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.css'
})
export class CarDetailsComponent implements OnInit {
  carId!: any;
  car!:any;
  carOwner!:any;
  constructor(private _ActivatedRoute:ActivatedRoute,private carsSerivce:CarsService,private userSerive:UsersService,private router:Router ){}

  // for calling the functions on render
  ngOnInit(): void {

    this.getId()
    this.getCar()
  }

// getting the id from  params
  getId()
{
  this._ActivatedRoute.paramMap.subscribe((params)=>
  {
    this.carId = params.get('id')
  })
}

// getting the car by id
  getCar(){
    this.carsSerivce.getCarId(this.carId).subscribe({
      next:(data)=>
      {
        this.car = data.data
        this.userSerive.getUser(this.car.ownerId).subscribe({
          next:(data)=>
          {
            this.carOwner = data.data
          }
        })
      }
    })
  }

// delete the car
deleteCar()
{
  this.carsSerivce.deleteCar(this.carId).subscribe({
    next:()=>
    {

      this.router.navigate(['/carsLayout'])
    }
  })
}
// approve the car
approveCar()
{
  this.carsSerivce.approveCar(this.carId).subscribe({
    next:(data)=>
    {
      this.car = data.data
      this.getCar()
    }
  })
}
// decline the car
declineCar()
{
  this.carsSerivce.declineCar(this.carId).subscribe({
    next:(data)=>
    {
      this.car = data.data
      this.getCar()
    }
  })
}

// active the car if its approved but its not active
activeCar()
{
  this.carsSerivce.activeCar(this.carId).subscribe({
    next:(data)=>
    {
      this.car = data.data
      this.getCar()
    }
  })
}
// suspend the car if the car have issues
suspendCar()
{
  this.carsSerivce.suspendCar(this.carId).subscribe({
    next:(data)=>
    {
      this.car = data.data
      this.getCar()
    }
  })
}

}
