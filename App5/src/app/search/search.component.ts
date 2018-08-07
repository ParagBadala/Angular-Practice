import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Movies } from '../entities/movies-entity';
import { Validators, FormGroup, FormControl,FormsModule,ReactiveFormsModule,FormBuilder} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser'
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

   public dataN: Movies[] = []; 
   public show: Movies[] = [];
  constructor(private user: UserService, private router:Router) { }
   
  oCategory=["Drama","Fiction","Satire"];
  category="";
  mcategoryrequired:string;

  searchForm:FormGroup;
  mcategory:FormControl;

  ngOnInit() {
    this.createFormControls();
    this.createForm(); 
    this.user.getData().subscribe(data => this.dataN=data);
  }

  createFormControls(){
    this.mcategory= new FormControl('',Validators.required);
  }

  createForm(){
    this.searchForm=new FormGroup({
      mcategory:this.mcategory,
    })
  }

onSubmit(){
  this.getdata();
  console.log(this.dataN);
}

  getdata(){
    if(this.searchForm.valid){
      console.log(this.searchForm.value);
      
      this.show = this.show.splice(0,this.show.length);
      console.log(this.mcategory.value)
      
      for(var i of this.dataN){
        console.log(i)
        if(i.movieCat==this.mcategory.value)
          this.show.push(i)
      }
    }
    else{
       if(this.mcategory.untouched){
        this.mcategoryrequired="Select Genre!!!";
      alert("Please fill the form as per requirement")
    }
  }
}

}
