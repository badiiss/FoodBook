import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';
import { AuthentificationService } from '../services/authentification.service';
import { User } from '../shared/models/User';
import { Router } from '@angular/router';
@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {

  food!:Food;
  constructor(private router:Router, private activatedRoute:ActivatedRoute, public foodService:FoodService , public authservice: AuthentificationService) {
    activatedRoute.params.subscribe((params)=> {
      if(params["id"])
      this.food = foodService.getFoodById(params["id"]);
    })
   }

  ngOnInit(): void {
  }

  handleDelete() {
    this.foodService.deletPost(this.food.id).subscribe({
      next: () => {
        alert("Post Supprimé")
        this.router.navigateByUrl("/")
      }
    })
  }

}
