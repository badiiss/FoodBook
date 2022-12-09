import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/User';
import { ActivatedRoute } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user!: User;
  users!: User[];
  constructor(private router:Router, private activatedRoute:ActivatedRoute,  public authservice: AuthentificationService) {
    activatedRoute.params.subscribe((params)=> {
      if(params["username"])
      this.user = authservice.getUserByUsername(params["username"]);
    })
   }

  ngOnInit(): void {
    this.users = this.authservice.getAll();
  }
  handleDeleteUser(user: User) {
    if (confirm("Etes-vous sur de vouloir supprimer votre compte ?")) {
      let index = this.users.indexOf(user);
    this.users.splice(index, 1);
    alert("Utilsateur Supprimé");
     console.log(this.users);
     this.router.navigateByUrl('/'); 

    }
     
   
    /*
    
    this.foodService.deletPost(user.username).subscribe({
      next: () => {
        alert("Post Supprimé")
        this.router.navigateByUrl("/admin")
      }
    })*/
  }

}
