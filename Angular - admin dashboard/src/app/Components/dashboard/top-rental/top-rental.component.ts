
import {Component, OnInit, ViewChild } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";
import { NgApexchartsModule } from 'ng-apexcharts';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";
import { RentalService } from "../../../Serivces/rental.service";

export type ChartOptions = {

  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-top-rental',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './top-rental.component.html',
  styleUrl: './top-rental.component.css'
})
export class TopRentalComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
   chartOptions: ChartOptions;
topRental: { name: string, value: number }[] = [];
  constructor(private rentalService:RentalService) {

    this.chartOptions = {
      series: [],
      chart: {
        type: "donut",
      },
      labels: [],
      responsive:[
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]


    };
  }
  ngOnInit(): void {
    this.getTopRental()
  }
  updateChart() {
    this.chartOptions.series = this.topRental?.map(item => item.value);
    this.chartOptions.labels = this.topRental?.map(item => item.name);
  }

  getTopRental() {
    this.rentalService.getTop5Categories().subscribe({
      next: (data:any) => {
        this.topRental = data.data.map((item:any) => ({ name: item.category, value: item.count }));
        this.updateChart();
      }
    });
  }
}

