import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'LAB2';
  public store = [
    {"empId":"1001","empName":"Rahul","empSal":"9000","empDep":"Java"},
    {"empId":"1002","empName":"Sachin","empSal":"19000","empDep":"OraApp"},
    {"empId":"1003","empName":"Vikash","empSal":"29000","empDep":"BI"}
  ];
  public value1:string='';
  public value2:string='';
  public value3:string='';
  public value4:string='';
  public i=0;
  onclick(eId,eName,eSalary,eDepartment){
    var temp ={"empId":eId,"empName":eName,"empSal":eSalary,"empDep":eDepartment}
    this.store.push(temp);
    alert(eId+" "+eName+" "+eSalary+" "+eDepartment);
  }
  onRemove(eId:string){
    var i=0;
  //  console.log("deleted clicked"+eId);
    for(var emp of this.store){
      i++;
    //  console.log(emp);
      if(emp.empId==eId){
      //  console.log(emp.empId);
        this.store.splice(i-1,1);
      }
    }
  }
  onUpdate(eId:string){
    var x=0;
    for(var emp of this.store){
      if(emp.empId==eId){
          this.value1 = emp.empId;
          this.value2 = emp.empName;
          this.value3 = emp.empSal;
          this.value4 = emp.empDep;
          //console.log(this.value1,this.value2,this.value3,this.value4);
          this.i=x;
      }
      x++;
    }
  }

  onChangeData(eId:string,eName:string,eSal:string,eDep:string){
    this.store[this.i].empId=eId;
    this.store[this.i].empName=eName;
    this.store[this.i].empSal=eSal;
    this.store[this.i].empDep=eDep;
  }
}
