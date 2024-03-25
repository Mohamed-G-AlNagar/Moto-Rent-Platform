import { Component, Input, OnInit } from '@angular/core';
import { MessagesService } from '../../../Serivces/messages.service';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { MatFormField } from '@angular/material/form-field';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessagesSearchPipe } from '../../../Pipes/messages-search.pipe';
import { MatIcon } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';



@Component({
  selector: 'app-inbox',
  standalone: true,
  imports: [CdkAccordionModule,MatFormField,ReactiveFormsModule,FormsModule,MessagesSearchPipe,MatIcon,MatProgressSpinner],
  templateUrl: './inbox.component.html',
  styleUrl: './inbox.component.css'
})
export class InboxComponent implements OnInit {
  messages!: any [];
  formGroup!:FormGroup
  replayIndex: number = -1;
  searchUserMessages:string = ''
  isLoading:boolean = false;
  constructor(private messagesService:MessagesService,formBuilder:FormBuilder){
    this.formGroup = formBuilder.group({
      replay :new FormControl('', )})
  }
  ngOnInit(): void {
    this.getAllMessages()

  }

  selectedStatus: string = '';
  getAllMessages(selectedStatus?:string)
  {
    this.isLoading = true;
     this.messagesService.getMessages().subscribe({
      next:(data)=>
      {
        this.messages=data.data;
        this.isLoading = false;
        if (selectedStatus) {
          this.isLoading = true;
          this.messages = this.messages.filter(message => message.status === selectedStatus);
          this.isLoading = false;
        }

      }
    })
  }



  handleReplay(index:any)
  {
    this.replayIndex = this.replayIndex === index ? -1 : index;

  }

  replayMessage(id:any)
  {
    this.messagesService.replayMessage(id,this.formGroup.value).subscribe({
      next:(data)=>
      {
        this.replayIndex = this.replayIndex === id ? -1 : id;
        this.getAllMessages()

      }
    })
  }

  deleteMessage(id:string)
  {
    this.messagesService.deleteMessage(id).subscribe({
      next:(data)=>
      {
        this.getAllMessages()
    }})
  }


  }


