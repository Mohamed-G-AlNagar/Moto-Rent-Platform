import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../Serivces/users.service';
import { RouterLink } from '@angular/router';
import { UserSearchPipe } from '../../../Pipes/user-search.pipe';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterLink,UserSearchPipe,FormsModule,MatProgressSpinner],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users!:any[]
  userSearch:string = ""
  isLoading:boolean = false
constructor(private _userSerivce:UsersService){}
ngOnInit(): void {
  this.getUsers()
}
getUsers()
{
  this.isLoading = true;
  this._userSerivce.getAllUsers().subscribe({
    next:(data)=>
    {
      this.users = data.data
      this.isLoading = false;

    }
  })
}
}
