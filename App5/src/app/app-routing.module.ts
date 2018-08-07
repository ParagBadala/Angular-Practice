import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { SearchComponent } from './search/search.component';
import { MainComponent } from './main/main.component';

const appRoutes:Routes = [
   {
      path: 'add',
      component: AddComponent
   },
   {
     path: 'search',
     component: SearchComponent
   },
]


@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot( appRoutes)    
  ],
  declarations: []
})
export class AppRoutingModule { }
