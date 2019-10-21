import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { HomeComponent } from './home/home.component';
import { CarDetailsComponent } from './cars/car-details/car-details.component';
import { CarListComponent } from './cars/car-list/car-list.component';
import { CommentListComponent } from './cars/comment-list/comment-list.component';
import { CarCreateComponent } from './cars/car-create/car-create.component';
import { ManufacturersComponent} from './manufacturers/manufacturers.component';
import { ModelComponent } from './model/model.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'cars', component: CarListComponent},
  { path: 'manufacturers', component: ManufacturersComponent },
  { path: 'users', component: UserListComponent},
  { path: 'users/:id', component: UserDetailsComponent},
  { path: 'manufacturers/:id', component: ModelComponent},
  { path: 'cars/:id', component: CarDetailsComponent},
  { path: 'add', component: CarCreateComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'cars/:id/comments', component: CommentListComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }