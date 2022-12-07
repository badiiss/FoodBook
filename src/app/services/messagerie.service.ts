import { Injectable } from '@angular/core';
import { Message } from '../shared/models/Message';
@Injectable({
  providedIn: 'root'
})
export class MessagerieService {

  messages : Message[]=[];

  constructor() { 
    this.messages.push({ sender: "Badis", content: "Hellow world " });
    this.messages.push({ sender: "Badis", content: "hiiiii" });
    this.messages.push({ sender: "Badis", content: "bonjouuuur" });
    this.messages.push({ sender:"Badis",content:"saluuut"});
    this.messages.push({ sender:"Badis",content:"saluuuuuuuuuuuuut"});
  
  }

   getAll() {
    return this.messages;
  }

}
