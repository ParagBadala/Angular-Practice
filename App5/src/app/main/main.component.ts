import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private user: UserService, private router:Router){}
  move(){
    this.router.navigate(['add']);
  }
  search(){
    this.router.navigate(['search']);
  }

  ngOnInit() {
  }

}
