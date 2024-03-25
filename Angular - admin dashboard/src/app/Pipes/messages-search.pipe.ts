import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'messagesSearch',
  standalone: true
})
export class MessagesSearchPipe implements PipeTransform {

  transform(messages: any[], searchUserMessages:string): any[] {
    return messages?.filter((message)=>message?.user?.firstName.toLowerCase().includes(searchUserMessages.toLocaleLowerCase())||message?.user?.lastName.toLowerCase().includes(searchUserMessages.toLocaleLowerCase()));
  }

}
