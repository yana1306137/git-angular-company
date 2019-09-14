import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  keEmployee() {
    this.router.navigate(['home/employee/list']);
  }

  keAddEmployee() {
    this.router.navigate(['home/employee/form']);
  }

  keHome() {
    this.router.navigate(['home']);
  }
}
