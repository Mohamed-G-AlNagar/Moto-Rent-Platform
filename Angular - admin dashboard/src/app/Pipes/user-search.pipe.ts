import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userSearch',
  standalone: true
})
export class UserSearchPipe implements PipeTransform {

  transform(users: any[], searchUsers:string): any[] {
    return users?.filter((user)=>user.firstName.toLowerCase().includes(searchUsers.toLocaleLowerCase())||user?.lastName.toLowerCase().includes(searchUsers.toLocaleLowerCase()));
  }

}
