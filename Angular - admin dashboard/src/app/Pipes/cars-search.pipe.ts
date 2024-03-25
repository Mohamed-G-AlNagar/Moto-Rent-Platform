import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carsSearch',
  standalone: true
})
export class CarsSearchPipe implements PipeTransform {

  transform(cars: any[], carSearch:string): any[] {
    return cars?.filter((car)=>car.brand.brand.toLowerCase().includes(carSearch.toLocaleLowerCase())||car.model.toLowerCase().includes(carSearch.toLocaleLowerCase()));
  }

}
