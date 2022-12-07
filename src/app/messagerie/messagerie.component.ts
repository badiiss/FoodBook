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

}
