import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RecentTransactionComponent } from './recent-transaction/recent-transaction.component';
import { TopRentalComponent } from './top-rental/top-rental.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet,SidebarComponent,RecentTransactionComponent,TopRentalComponent,NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
