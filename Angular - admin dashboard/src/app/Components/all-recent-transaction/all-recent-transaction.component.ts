import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RentalService } from '../../Serivces/rental.service';
import { BrandsService } from '../../Serivces/brands.service';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-all-recent-transaction',
  standalone: true,
  imports: [CurrencyPipe,RouterLink,DatePipe,MatProgressSpinner],
  templateUrl: './all-recent-transaction.component.html',
  styleUrl: './all-recent-transaction.component.css'
})
export class AllRecentTransactionComponent implements OnInit {
  recentRentedCars!: any[]
  brands!:any[];
  isLoading:boolean = false;

constructor(private rentalService:RentalService,private brandService:BrandsService){}

//This for calling when rendering
ngOnInit(): void {
  this.getAllrentals()
  this.getAllBrands()
}
// calling all rented cars from API
getAllrentals() {
  this.isLoading = true
  this.rentalService.getAllRentals().subscribe({
    next:(data)=>
    {
      this.recentRentedCars = data.data
      this.isLoading = false
    }
  })
}

//  calling all brands from API
getAllBrands()
{
  this.brandService.getAllBrands().subscribe({
    next:(data)=>
    {
      this.brands = data.data


    }
  })
}
}
