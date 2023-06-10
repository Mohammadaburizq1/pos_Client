import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Observable, of } from 'rxjs';
import { user } from 'src/app/entities/user';
import { AccountService } from 'src/app/_services/account.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);
  hide = true;
  model:any = {};


  constructor( public accountService:AccountService) { }

  ngOnInit(): void {
  }

  login(){
    
    var email = this.emailFormControl.value?.toString();
    var password = this.passwordFormControl.value?.toString();

    this.model ={
      "username":email,
      "password":password
    }

    this.accountService.login(this.model).subscribe(
      {
        next: response => {
          console.log(response);
        },
        error:error =>console.log(error)
      }
    )
  }

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
