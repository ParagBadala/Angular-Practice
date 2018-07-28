import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserService } from './user.service'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductFilterPipeName} from './product-filter-name.pipe';
import { ProductFilterPipeAuthor } from './product-filter-author.pipe';
import { ProductFilterPipeYear } from './product-filter-year.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductFilterPipe,
    ProductFilterPipeName,
    ProductFilterPipeAuthor,
    ProductFilterPipeYear
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
