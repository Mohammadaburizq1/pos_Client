import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { user } from '../entities/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = 'https://localhost:5001/api/';
  private currentUserSource = new BehaviorSubject<user | null>(null);
  currentUser$ = this.currentUserSource.asObservable(); 
  constructor(private http:HttpClient) { }
  

  login(model:any){
    return this.http.post<user>(this.baseUrl + 'account/login',model).pipe(
      map((response:user) => {
           const  user = response;
           if(user){
            localStorage.setItem('user',JSON.stringify(user));
            this.currentUserSource.next(user);
            debugger
           }
      })
    );
  }


  setCurrentUser(user:user){
    this.currentUserSource.next(user);
  }

  logout(){
    localStorage.removeItem('user');
    this.currentUserSource.next(null);

  }

}
