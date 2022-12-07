import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comment = "";
  postComment : string[]= ["Tasty","La cuisson dure combien de temps?","Je recommande"];
  constructor(public authService:AuthentificationService) { }

  post() {
    if (this.authService.isAuthentificated()) {
      this.postComment?.push(this.comment);
    console.log(this.postComment)
    }
    else alert("veuillez vous connecter pour commenter")
    
  }
  ngOnInit(): void {
  }

}
