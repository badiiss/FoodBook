import { Injectable } from '@angular/core';
import { User } from '../shared/models/User';
import { UUID } from 'angular2-uuid';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  users: User[] = [];
  authentficatedUser? : User ;
  constructor() { 
    this.users.push({userId: UUID.UUID(),photo:'/assets/images/profil.jpg',nbPub:3,email :"badis@gmail.com",surname :"Bouakaz",name :"Badis", username:"Badis",password:"badis",roles : ["user","admin"]});
    this.users.push({userId: UUID.UUID(),photo:'/assets/images/profil.jpg',nbPub:23,email :"anis@outlook.com",surname :"Kadri",name :"Anis", username:"anis",password:"badis",roles : ["user"]});
    this.users.push({ userId: UUID.UUID(),photo:'/assets/images/profil.jpg',nbPub:18,email :"hicham@uga.com",surname :"Neghiz",name :"Hicham", username: "hicham", password: "badis", roles: ["user"] });
    this.users.push({ userId: UUID.UUID(),photo:'/assets/images/profil.jpg',nbPub:0,email :"ion@dciss.com",surname :"Velesco",name :"Ion", username: "ion", password: "badis", roles: ["user"] });
    this.users.push({ userId: UUID.UUID(),photo:'/assets/images/profil.jpg',nbPub:11,email :"salwa@wic.com",surname :"Benkaour",name :"Salwa", username: "salwa", password: "badis", roles: ["user"] });
    this.users.push({userId: UUID.UUID(),photo:'/assets/images/profil.jpg',nbPub:53,email :"ouma@gmail.com",surname :"Bouakaz",name :"Oumaima", username:"oumaima",password:"badis",roles : ["user"]});

  
  }

  getAll() {
    return this.users;
  }

  getUserByUsername(username: string): User{
    return this.getAll().find(authentficatedUser => authentficatedUser.username == username)!;
  }

  public login(username:string,password:string):Observable<User>{
 let user = this.users.find(u=>u.username==username);
 if(!user)return throwError(()=> new Error("Identifiant Erroné"));
 if(user.password!==password){
  return throwError(()=> new Error("Mot de passe erroné"));
 }return of(user); 

  }
  
  

public authentficateUser(user:User):Observable<boolean>{
this.authentficatedUser=user;
localStorage.setItem("authUser",JSON.stringify({username:user.username, roles : user.roles, jwt:"JWT_TOKEN"}))
return of(true);
}


  public hasRole(role: string): boolean { // Pour verfifier si le user connecté à un role ou non pour avoir acces à certains fonctionnalité
    if (this.authentficatedUser?.roles) {
     return this.authentficatedUser.roles.includes(role);
    }
    return false;
}

public isAuthentificated (){
  return this.authentficatedUser != undefined;
}
  // un methode intermediaire pour verifier si lauteur du post et qui est connecté
  public getUsername() {
    return this.authentficatedUser?.username;
  }

  public logOut() : Observable<boolean>{
    this.authentficatedUser = undefined;
    localStorage.removeItem("authUser");
    alert("Vous etes maintenant deconnecté ")
    return of(true);

  }

  public register(user: User ) : Observable<User>{
    this.users.push(user);
    console.log(this.users);
    return of(user)
  }

  }

