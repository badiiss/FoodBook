import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AuthentificationService } from '../services/authentification.service';
import { User } from '../shared/models/User';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user !: User;
  constructor(public authservice: AuthentificationService, private router: Router) { }

  ngOnInit(): void {
  }
  handleLogout() {

    this.authservice.logOut().subscribe({
      next: () => {
        this.router.navigateByUrl("/")
      }
    })
  }

}
