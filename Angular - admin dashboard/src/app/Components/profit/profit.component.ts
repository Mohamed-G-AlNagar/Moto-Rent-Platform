import { Component, OnInit, ViewChild } from '@angular/core';
import { ApexMarkers, ApexStroke, NgApexchartsModule } from "ng-apexcharts";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexTooltip,
  ApexXAxis,
  ApexLegend,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexYAxis
} from "ng-apexcharts";
import { ProfitsService } from '../../Serivces/profits.service';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  markers: ApexMarkers; // Change from any to ApexMarkers
  stroke: ApexStroke; // Change from any to ApexStroke
  yaxis: ApexYAxis | ApexYAxis[];
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
  legend: ApexLegend;
  fill: ApexFill;
  tooltip: ApexTooltip;
};
@Component({
  selector: 'app-profit',
  standalone: true,
  imports: [NgApexchartsModule,FormsModule,MatProgressSpinner],
  templateUrl: './profit.component.html',
  styleUrl: './profit.component.css'
})
export class ProfitComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: any;
  yearRevenue!:any[]
  totalRevenue!:any []
  isLoading:boolean = false
  selectedYear:number =2024
  totalYearRevenue!:number

  constructor(private profitService: ProfitsService) {}

  ngOnInit(): void {
    this.getYearRevenue(this.selectedYear);
    this.getTotalRevenue();
  }

  getYearRevenue(selectedYear:number) {
    this.isLoading=true;
    this.profitService.getYearRevenue(selectedYear).subscribe({
      next: (data) => {
        this.yearRevenue = data.data;
        this.isLoading = false;
        this.totalYearRevenue = this.yearRevenue.reduce((acc, cur) => acc + cur.revenue, 0);
        const incomeData = this.yearRevenue.map(item => item.total);
        const usersIncome = this.yearRevenue.map(item => item.total - item.revenue);
        const revenueData = this.yearRevenue.map(item => item.revenue);


        this.chartOptions = {
          series: [
            {
              name: 'Revenue',
              type: 'column',
              data: revenueData
            },
            {
              name: 'usersIncome',
              type: 'column',
              data: usersIncome
            },
            {
              name: 'Income',
              type: 'line',
              data: incomeData
            },

          ],
          chart: {
            height: 500,
            type: 'line',
            stacked: false
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            width: [1, 1, 4]
          },
          title: {
            text: 'Platform Revenue Aggregation',
            align: 'left',
            offsetX: 110
          },
          xaxis: {
            categories: this.yearRevenue.map(item => item.monthName)
          },
          yaxis: [
            {
              axisTicks: {
                show: true
              },
              axisBorder: {
                show: true,
                color: '#008FFB'
              },
              labels: {
                style: {
                  colors: '#008FFB'
                }
              },
              title: {
                text: 'Revenue',
                style: {
                  color: '#008FFB'
                }
              },
              tooltip: {
                enabled: true
              }
            },
            {
              seriesName: 'Income',
              opposite: true,
              axisTicks: {
                show: true
              },
              axisBorder: {
                show: true,
                color: '#00E396'
              },
              labels: {
                style: {
                  colors: '#00E396'
                }
              },
              title: {
                text: 'Users Income',
                style: {
                  color: '#00E396'
                }
              }
            },
            {
              seriesName: 'Revenue',
              opposite: true,
              axisTicks: {
                show: true
              },
              axisBorder: {
                show: true,
                color: '#FEB019'
              },
              labels: {
                style: {
                  colors: '#FEB019'
                }
              },
              title: {
                text: 'Total Income',
                style: {
                  color: '#FEB019'
                }
              }
            }
          ],
          tooltip: {
            fixed: {
              enabled: true,
              position: 'topLeft',
              offsetY: 30,
              offsetX: 60
            }
          },
          legend: {
            horizontalAlign: 'left',
            offsetX: 40
          },
          markers: {},
          fill: {}
        };
      }
    });
  }

  getTotalRevenue() {
    this.profitService.getTotalRevenue().subscribe({
      next: (data) => {
        this.totalRevenue = data.data;
      }
    });
  }
}
