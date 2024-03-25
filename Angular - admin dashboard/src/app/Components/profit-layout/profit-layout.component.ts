import { Component } from '@angular/core';
import { NavbarComponent } from '../dashboard/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../dashboard/sidebar/sidebar.component';

@Component({
  selector: 'app-profit-layout',
  standalone: true,
  imports: [NavbarComponent,RouterOutlet,SidebarComponent],
  templateUrl: './profit-layout.component.html',
  styleUrl: './profit-layout.component.css'
})
export class ProfitLayoutComponent {

}
