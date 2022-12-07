import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from '../shared/models/Food';
import { AuthentificationService } from '../services/authentification.service';
import { User } from '../shared/models/User';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  foods: Food[] = [];
  users: User[] = [];
  food!: Food;
  user!: User;
  constructor(private router:Router,private foodService:FoodService , private route:ActivatedRoute, private authService:AuthentificationService) { }

  ngOnInit(): void {
    this.foods = this.foodService.getAll();
    this.users = this.authService.getAll();
  }

  handleDelete(food: Food) {
    console.log(this.foods);
    let index = this.foods.indexOf(food);
    this.foods.splice(index, 1);
    console.log(this.foods);
    this.foodService.deletPost(food.id).subscribe({
      next: () => {
        alert("Post Supprimé")
        this.router.navigateByUrl("/admin")
      }
    })
  }

  handleDeleteUser(user: User) {
    console.log(this.users);
    let index = this.users.indexOf(user);
    this.users.splice(index, 1);
    alert("Utilsateur Supprimé");
    console.log(this.users);/*
    this.foodService.deletPost(user.username).subscribe({
      next: () => {
        alert("Post Supprimé")
        this.router.navigateByUrl("/admin")
      }
    })*/
  }

}
