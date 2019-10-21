import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarsComponent } from './cars/cars.component';
import { CarListComponent } from './cars/car-list/car-list.component';
import { CarDetailsComponent } from './cars/car-details/car-details.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ManufacturersComponent } from './manufacturers/manufacturers.component';
import { CarCreateComponent } from './cars/car-create/car-create.component';
import { CommentListComponent } from './cars/comment-list/comment-list.component';
import { ModelComponent } from './model/model.component';
import { UsersComponent } from './users/users.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarsComponent,
    CarListComponent,
    CarDetailsComponent,
    HomeComponent,
    ManufacturersComponent,
    CarCreateComponent,
    CommentListComponent,
    ModelComponent,
    UsersComponent,
    UserCreateComponent,
    UserListComponent,
    UserDetailsComponent
     
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
