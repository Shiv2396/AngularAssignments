import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardlayout',
  templateUrl: './cardlayout.component.html',
  styleUrls: ['./cardlayout.component.css']
})
export class CardlayoutComponent implements OnInit {

  name = 'ss';
  productlist = [
    {productName : 'Digital Signature', productDetails : 'To sign digitally we can use this software'},
    {productName : 'Online Website', productDetails : 'To make effective websites'}
  ];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
