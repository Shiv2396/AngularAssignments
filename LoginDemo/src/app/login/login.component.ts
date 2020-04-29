// import { Component, OnInit } from '@angular/core';
import { Input, Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router} from '@angular//router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent // implements OnInit {
{

  [x: string]: any;
  username: string;
  password: string;
  errormessage= 'Wrong credential';
  iserror = false;


  form: FormGroup = new FormGroup({
    username: new FormControl('ss'),
    password: new FormControl('ss'),
  });

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  register()
  {
    this.router.navigate(['/register']);
  }

  submit() { 
    console.log('ss  ' + this.username);    

    if (this.username === 'admin' && this.password === 'admin')
    {
      this.iserror = false;
      this.router.navigate(['/dashboard', this.username]);
    }
    else{
      this.iserror = true;
      // console.log("Wrong credentials")
    }
  }
}
