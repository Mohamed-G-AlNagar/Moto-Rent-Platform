import { Component } from '@angular/core';
import { NavbarComponent } from '../dashboard/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../dashboard/sidebar/sidebar.component';

@Component({
  selector: 'app-inbox-layout',
  standalone: true,
  imports: [NavbarComponent,RouterOutlet,SidebarComponent],
  templateUrl: './inbox-layout.component.html',
  styleUrl: './inbox-layout.component.css'
})
export class InboxLayoutComponent {

}
