import { Injectable } from '@angular/core';
import { User } from '../shared/models/User';
import { UUID } from 'angular2-uuid';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  users : User[]=[];
  authentficatedUser : User | undefined;
  constructor() { 
    this.users.push({userId: UUID.UUID(), username:"badis",password:"badis",roles : ["user"]});
    this.users.push({userId: UUID.UUID(), username:"asus",password:"badis",roles : ["user"]});
    this.users.push({userId: UUID.UUID(), username:"zohra",password:"badis",roles : ["user","admin"]});
  
  }

  public login(username:string,password:string):Observable<User>{
 let user = this.users.find(u=>u.username==username);
 if(!user)return throwError(()=> new Error("User not found"));
 if(user.password!==password){
  return throwError(()=> new Error("Mot de passe erroné"));
 }return of(user); 

}

public authentficateUser(user:User):Observable<boolean>{
this.authentficatedUser=user;
localStorage.setItem("authUser",JSON.stringify({username:user.username, roles : user.roles, jwt:"JWT_TOKEN"}))
return of(true);
}

/*
public hasRole(role : string):boolean {
 return this.authentficatedUser!.roles.includes(role);
}*/

public isAuthentificated (){
  return this.authentficatedUser != undefined;
}
  public getUsername() {
    return this.authentficatedUser?.username;
  }

  public logOut() : Observable<boolean>{
    this.authentficatedUser = undefined;
    localStorage.removeItem("authUser");
    return of(true);

  }

  public register(user: User ) : Observable<User>{
    this.users.push(user);
    console.log(this.users);
    return of(user)
  }

  }

