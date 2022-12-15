import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UUID } from 'angular2-uuid';
import { AuthentificationService } from '../services/authentification.service';
import { User } from '../shared/models/User';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerFormGroup!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthentificationService) { }

  ngOnInit(): void {
    this.registerFormGroup = this.fb.group({
      id: UUID,
      username: [null, [Validators.required]],
      name: [null, [Validators.required]],
      surname: [null, [Validators.required]],
      email: [null, [
        Validators.required,
        Validators.email,
        Validators.minLength(6)
      ]],
      password: [null, [
        Validators.required,
        Validators.minLength(3),
      ]],

    })
  }

  onSubmit() {
    let user = this.registerFormGroup.value;
    this.authService.register(user).subscribe({
      next: () => {
        alert("Profil Crée");
        this.router.navigateByUrl('');
        this.registerFormGroup.reset;
      }, error: err => {
        
      }
    })
    if (this.registerFormGroup.invalid) {
      return;
    }
   // console.log(this.registerFormGroup.value);
    
  }
}

