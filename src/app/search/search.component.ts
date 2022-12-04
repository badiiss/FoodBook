import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
searchTerm:string='';
  constructor(private route:ActivatedRoute, private router:Router,public authservice: AuthentificationService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['searchTerm'])
this.searchTerm=params['searchTerm'];
    })
  }

  search(): void {
    if(this.searchTerm)
    this.router.navigateByUrl('/search/'+ this.searchTerm)
    else 
    this.router.navigateByUrl('/')

  }

  add() {
    this.router.navigateByUrl('/newpost')
  }

}
