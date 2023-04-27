import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "../auth/login/login.component";
import {AdminModule} from "./admin.module";
import {RoleComponent} from "./role/role.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'role',
    pathMatch: 'full'
  },
  {
    path : 'role',
    component : RoleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
