import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';
import { Comment } from '../shared/models/Comment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  commentFormGroup! : FormGroup;
  errorMessage : any
  comment = { auteur: '', content: '' };
  
  postComment: Comment[] = [
    { auteur: 'Badis', content: 'Tasty' },
    { auteur: 'Badis', content: 'un repas delicieux' },
    
  ];
    

 constructor(private fb:FormBuilder, private router:Router,private authService : AuthentificationService ) { }
ngOnInit(): void {
    this.commentFormGroup = this.fb.group(  {
      content : this.fb.control("", Validators.required),
      auteur: this.authService.authentficatedUser?.surname,

    })
  }
  
  post() {
    let content = this.commentFormGroup.value.content;
    let auteur = this.authService.authentficatedUser?.username;
    let Comment = { auteur, content };
    if (this.authService.isAuthentificated()) {
      this.postComment?.push(Comment);
    console.log(this.postComment)
    }
    else alert("veuillez vous connecter pour commenter")
    
  }


}


    