import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Validators, FormGroup, FormControl,FormsModule,ReactiveFormsModule,FormBuilder} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser'
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private router:Router, private user: UserService) { }

  category="";
  mnamerequired:string;
  mratingrequired:string;
  mcategoryrequired:string;

  movieForm:FormGroup;
  mname:FormControl;
  mrating:FormControl;
  mcategory:FormControl;

  ngOnInit(){
    this.createFormControls();
    this.createForm();
  }

  createFormControls(){
    this.mname= new FormControl('',Validators.compose([
		Validators.required,
		Validators.pattern('[a-zA-Z0-9]+')
	]));
    this.mrating= new FormControl('', Validators.compose([
		Validators.required,
		Validators.pattern('[0-5]')
	]));
    this.mcategory= new FormControl('',Validators.required);
  }
  createForm(){
    this.movieForm=new FormGroup({
      mname:this.mname,
      mrating:this.mrating,
      mcategory:this.mcategory,
    })
  }
  onSubmit(){
    if(this.movieForm.valid){
      console.log(this.movieForm.value);
    }
    else{
      if(this.mname.untouched){
        this.mnamerequired=" Movie Name is required!!";
      }
      if(this.mrating.untouched){
        this.mratingrequired="Rating is required!!";
      }
      if(this.mcategory.untouched){
        this.mcategoryrequired="Select Genre!!!";
      alert("Please fill the form as per requirement")
      
    }
  }

}
}
