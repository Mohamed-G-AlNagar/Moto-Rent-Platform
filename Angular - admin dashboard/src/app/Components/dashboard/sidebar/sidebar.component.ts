import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { MessagesService } from '../../../Serivces/messages.service';
import { MatBadgeModule } from '@angular/material/badge';



@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule,MatIconModule,MatBadgeModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  activeLink: string = '/dashboard' ;
  pendingMessages!:number
  constructor(private router:Router,private messsagesSerivce:MessagesService){}

  ngOnInit(): void {
    this.getpendingMessages()
  }
 getpendingMessages ()
{
  this.messsagesSerivce.getPendingMessages().subscribe({
    next:(data)=>
    {
    this.pendingMessages = data.data.length
  }})
}

  setActiveLink(link: string) {
    this.activeLink = link;
}

logOut()
{
  localStorage.removeItem("adminToken")
  this.router.navigate(['/'])
}
}
