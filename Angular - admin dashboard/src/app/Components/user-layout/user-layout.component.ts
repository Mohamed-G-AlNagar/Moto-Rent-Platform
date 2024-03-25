import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../dashboard/sidebar/sidebar.component';
import { NavbarComponent } from '../dashboard/navbar/navbar.component';

@Component({
  selector: 'app-user-layout',
  standalone: true,
  imports: [RouterOutlet,SidebarComponent,NavbarComponent],
  templateUrl: './user-layout.component.html',
  styleUrl: './user-layout.component.css'
})
export class UserLayoutComponent {

}
