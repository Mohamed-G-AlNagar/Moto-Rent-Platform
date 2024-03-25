import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CarsService } from '../../../Serivces/cars.service';
import { CarsSearchPipe } from '../../../Pipes/cars-search.pipe';
import { FormsModule } from '@angular/forms';
import {MatProgressSpinner} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [RouterLink,CurrencyPipe,MatIcon,CarsSearchPipe,FormsModule,MatProgressSpinner],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent implements OnInit {
cars!: any [];
carSearch:string = ""
selectedStatus: string = '';
isLoading:boolean = false;


constructor(private carsSerivce:CarsService){

}

//getting the cars on render
ngOnInit(): void {
this.getCars()
}

// calling the cars from api
getCars(status?:string)
{
  this.isLoading = true
  this.carsSerivce.getCars(status).subscribe({
    next:(data)=>
    {
      this.cars = data.data

      this.isLoading = false

    }
  })
}
}
