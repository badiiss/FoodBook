import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MessagerieComponent } from './messagerie/messagerie.component';
import { NewpostComponent } from './newpost/newpost.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path :'', component:LoginComponent},
  {path:'search/:searchTerm', component:HomeComponent},
  {path:'tag/:tag' , component:HomeComponent},
  { path: 'food/:id', component: FoodPageComponent },
  { path: 'newpost', component: NewpostComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'inbox', component: MessagerieComponent },
  {path: 'profil/:username', component : ProfileComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
