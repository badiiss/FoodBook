import { Injectable } from '@angular/core';
import { Message } from '../shared/models/Message';
@Injectable({
  providedIn: 'root'
})
export class MessagerieService {

  messages : Message[]=[];

  constructor() { 
    this.messages.push({ sender: "Badis", content: "Praesent molestie augue eu nulla porttitor posuere. Praesent consequat tellus in elit tincidunt ornare. Pellentesque. ", date:"09/10/2022" });
    this.messages.push({ sender: "Olivier", content: "Praesent molestie augue eu nulla porttitor posuere. Praesent consequat tellus in elit tincidunt ornare. Pellentesque.", date:"03/09/2022" });
    this.messages.push({ sender: "Antoine", content: "bonjour", date:"15/11/2022" });
    this.messages.push({ sender:"Ousmane",content:"saluuut", date:"09/12/2022"});
    this.messages.push({ sender:"Kylian",content:"salut, ça va?", date:"03/12/2022"});
  
  }

   getAll() {
    return this.messages;
  }

}
