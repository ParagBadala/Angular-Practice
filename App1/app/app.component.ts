import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LAB1.2';
  eId:string = '';
  eName:string='';
  eSalary:string='';
  eDepartment:string='';
  onclick(eId,eName,eSalary,eDepartment){
    alert(eId+" "+eName+" "+eSalary+" "+eDepartment);
  }
}
