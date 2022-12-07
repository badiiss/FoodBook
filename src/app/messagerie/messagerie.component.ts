import { Component, OnInit } from '@angular/core';
import { MessagerieService } from '../services/messagerie.service';
import { Message } from '../shared/models/Message';
@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.component.html',
  styleUrls: ['./messagerie.component.css']
})
export class MessagerieComponent implements OnInit {

  messages: Message[] = [];

  constructor(public mes:MessagerieService) { }

  ngOnInit(): void {
    this.messages = this.mes.getAll();
  }

  delete(message: Message) {
   console.log(this.messages);
    let index = this.messages.indexOf(message);
    this.messages.splice(index, 1);
    alert("Message Supprimé");
    console.log(this.messages);
      }
    }
  

