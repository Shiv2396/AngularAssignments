// import { Component, OnInit } from '@angular/core';
import { Input, Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router} from '@angular//router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent //implements OnInit {
{
  [x: string]: any;

  form: FormGroup = new FormGroup({
    username: new FormControl('ss'),
    password: new FormControl('ss'),
  });

   @Input() error: string | null;

   @Output() submitEM = new EventEmitter();


  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  register()
  {
    this.router.navigate(["/register"]);
  }

  submit() {
   
    
     if (this.form.valid) {
      //this.router.navigate(["/dashboard"]);
      this.submitEM.emit(this.form.value);     
     }
  }

}