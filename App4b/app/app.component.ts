import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service'
import { DataStruct } from '../entities/dataStruct'
import { ProductFilterPipeYear } from './product-filter-year.pipe'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  idFilter:string='';
  titleFilter:string='';
  authorFilter:string='';
  yearFilter:any='';
  public datalist:DataStruct[] = [];
  constructor(private user:UserService){}

  ngOnInit(){
    this.user.getData().subscribe(data => this.datalist=data);
  }

}
