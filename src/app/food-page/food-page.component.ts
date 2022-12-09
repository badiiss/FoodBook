import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';
import { AuthentificationService } from '../services/authentification.service';
import { User } from '../shared/models/User';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {

  food!: Food;
  closeResult: string = '';
  constructor(private modalService: NgbModal, private router: Router, private activatedRoute: ActivatedRoute, public foodService: FoodService, public authservice: AuthentificationService) {
    activatedRoute.params.subscribe((params) => {
      if (params["id"])
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

  canDelete() {
    
    return this.authservice.getUsername == this.foodService.getAuteur;
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
