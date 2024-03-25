import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RentalService } from '../../../Serivces/rental.service';
import { BrandsService } from '../../../Serivces/brands.service';

@Component({
  selector: 'app-recent-transaction',
  standalone: true,
  imports: [RouterLink,CurrencyPipe],
  templateUrl: './recent-transaction.component.html',
  styleUrl: './recent-transaction.component.css'
})
export class RecentTransactionComponent implements OnInit {
  rentCars!: any [];
  brands!:any[];


  constructor(private rentalService:RentalService,private brandService:BrandsService){


  }

ngOnInit(): void {
  this.getTopRented()
  this.getAllBrands()


}
  getTopRented()
  {
    this.rentalService.getTop5RentedCars().subscribe({
      next:(data)=>
      {
        this.rentCars = data.data
        this.rentCars?.splice(5,this.rentCars.length)


      }
    })
  }

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
