import { Component, OnInit } from '@angular/core';
import { MessagerieService } from '../services/messagerie.service';
import { Message } from '../shared/models/Message';
import {
  ModalDismissReasons,
  NgbModal
} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.component.html',
  styleUrls: ['./messagerie.component.css']
})
export class MessagerieComponent implements OnInit {

  messages: Message[] = [];
  closeResult: string = '';
  constructor(private modalService: NgbModal, public mes:MessagerieService) { }

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

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }


  }
    }
  

