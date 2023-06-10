import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './OAuth/login/login.component';
import { RegisterComponent } from './OAuth/register/register.component';
import { AddEmployeComponent } from './Shop/add-employe/add-employe.component';
import { InfoComponent } from './Shop/info/info.component';

const routes: Routes = [
  {path:'',component:AppComponent},
  {path:'OAuth/Login',component:LoginComponent},
  {path:'OAuth/Register',component:RegisterComponent},

  {path:'Shop/AddEmploye',component:AddEmployeComponent},
  {path:'Shop/Info',component:InfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
