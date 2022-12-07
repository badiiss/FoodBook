import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';
import { Comment } from '../shared/models/Comment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  commentFormGroup! : FormGroup;
  errorMessage : any

  
  postComment: Comment[] = [];
  
    

 constructor(public foodService:FoodService,private fb:FormBuilder, private router:Router,public authService : AuthentificationService ) { }
  ngOnInit(): void {
    this.postComment = this.foodService.getComments();

    this.commentFormGroup = this.fb.group(  {
      content : this.fb.control("", Validators.required),
      auteurCom: this.authService.authentficatedUser?.username,

    })
  }
  
  post() {
    //let content = this.commentFormGroup.value.content;
    //let auteur = this.authService.authentficatedUser!.username;
    //console.log(auteur);
    let Comment = this.commentFormGroup.value;
    console.log(Comment);
    if (this.authService.isAuthentificated()) {
      this.postComment?.push(Comment);
    console.log(this.postComment)
    }
    else alert("veuillez vous connecter pour commenter")
    
  }

  canDeleteComment() {
    
    return this.authService.getUsername == this.foodService.getAuteurCom;

  }

  delete() {
    alert("le commentaire est supprimé");
  }








}


    