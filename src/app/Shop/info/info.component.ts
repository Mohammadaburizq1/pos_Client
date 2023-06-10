import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  ShopNameFormControl = new FormControl('', [Validators.required]);
  ShopNumberFormControl = new FormControl('', [Validators.required]);
  LocationFormControl = new FormControl('', [Validators.required]);
  CommercialNumberFormControl = new FormControl('', [Validators.required]);
  hide = true;
  constructor() { }

  ngOnInit(): void {
  }

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
