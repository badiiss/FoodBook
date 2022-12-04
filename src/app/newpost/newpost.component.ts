import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {

  postFormGroup!: FormGroup;

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.postFormGroup = this.fb.group({
      name: this.fb.control("", Validators.required),
      description: this.fb.control("", Validators.required),
      tags : this.fb.control([]),
      imageUrl: this.fb.control(""),
      origins: this.fb.control([]),
      
    })
      
    
  }

}
