import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewpostComponent } from './newpost/newpost.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path :'login', component:LoginComponent},
  {path:'search/:searchTerm', component:HomeComponent},
  {path:'tag/:tag' , component:HomeComponent},
  { path: 'food/:id', component: FoodPageComponent },
  { path: 'newpost', component: NewpostComponent },
  { path: 'register', component: RegisterComponent },
  {path : 'admin' , component :AdminComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
