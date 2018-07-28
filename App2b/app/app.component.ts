import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LAB2.2';
  public store = [
    {"empId":10010,"empName":"Rahul","empSal":9000,"empDep":"JAVA","empjoiningData":"6/12/2014"},
    {"empId":1002,"empName":"Vikash","empSal":11000,"empDep":"ORAAPS","empjoiningData":"6/12/2017"},
    {"empId":1003,"empName":"uma","empSal":12000,"empDep":"JAVA","empjoiningData":"6/12/2010"},
    {"empId":1004,"empName":"Sachin","empSal":11500,"empDep":"ORAAPS","empjoiningData":"11/12/2017"},
    {"empId":1005,"empName":"Amol","empSal":7000,"empDep":".NET","empjoiningData":"1/1/2018"},
    {"empId":1006,"empName":"Vishal","empSal":17000,"empDep":"BI","empjoiningData":"9/12/2012"},
    {"empId":1007,"empName":"Rajita","empSal":21000,"empDep":"BI","empjoiningData":"6/7/2014"}
  ]

  id(){
      console.log("Id clicked");
      for(var i=0;i<this.store.length;i++){
        for(var j=0;j<this.store.length;j++){
          if(this.store[i].empId<this.store[j].empId){
            var temp=this.store[j].empId;
            this.store[j].empId=this.store[i].empId;
            this.store[i].empId=temp;
          }
        }
      }
    }

  name(){
      console.log("Name clicked");
      for(var i=0;i<this.store.length;i++){
        for(var j=0;j<this.store.length;j++){
          if(this.store[i].empName<this.store[j].empName){
            var temp=this.store[j].empName;
            this.store[j].empName=this.store[i].empName;
            this.store[i].empName=temp;
          }
        }
      }
    }

    sal(){
      console.log("Salary clicked");
      for(var i=0;i<this.store.length;i++){
        for(var j=0;j<this.store.length;j++){
          if(this.store[i].empSal<this.store[j].empSal){
            var temp=this.store[j].empSal;
            this.store[j].empSal=this.store[i].empSal;
            this.store[i].empSal=temp;
          }
        }
      }
    }

    dep(){
      console.log("Id clicked");
      for(var i=0;i<this.store.length;i++){
        for(var j=0;j<this.store.length;j++){
          if(this.store[i].empDep<this.store[j].empDep){
            var temp=this.store[j].empDep;
            this.store[j].empDep=this.store[i].empDep;
            this.store[i].empDep=temp;
          }
        }
      }
    }
  }

