import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {


  courselist = [
    {id : 1, name : 'Spring'},
    {id : 2, name : 'JUNIT'}
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // onNavigate(location: string) {
  //   this.router.navigate(['sim']);
  // }

  // goToProductDetails(id) {
  //   this.router.navigate(['/coursedetails', id]);
  // }

}
