import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FoodService } from '../services/food/food.service';
import { Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {

  postFormGroup!: FormGroup;

  constructor( private authService: AuthentificationService,private router: Router,private fb : FormBuilder , private foodservice : FoodService) { }

  ngOnInit(): void {
    this.postFormGroup = this.fb.group({
      id: Math.floor(Math.random() * 100),
      name: this.fb.control("", Validators.required),
      description: this.fb.control("", Validators.required),
      tags : this.fb.control([]),
      imageUrl: this.fb.control(""),
      origins: this.fb.control([]),
      auteur: this.authService.authentficatedUser?.username,
      
    })
      
    
  }

  handleAddnewPost() {
    let post = this.postFormGroup.value;
    this.foodservice.addNewPost(post).subscribe({
      next: () => {
        alert("Poste Publié");
        this.postFormGroup.reset;
        this.router.navigateByUrl('');
      }, error: err => {
        
      }
    })
    console.log(this.postFormGroup.value);
  }

}
