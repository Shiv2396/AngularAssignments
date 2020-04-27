import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-reactive-form',
  templateUrl: './register-reactive-form.component.html',
  styleUrls: ['./register-reactive-form.component.css']
})
export class RegisterReactiveFormComponent implements OnInit {
  
   angForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
   }

  ngOnInit(): void {
  }


  createForm() {
    this.angForm = this.fb.group({
       name: ['', Validators.required ],
       address: ['', Validators.required ]
    });
  }
}
