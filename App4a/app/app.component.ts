import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service'
import { DataStruct } from '../entities/dataStruct'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public datalist:DataStruct[] = [];
  constructor(private user:UserService){}

  ngOnInit(){
    this.user.getData().subscribe(data => this.datalist=data);
  }


}
