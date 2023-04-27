import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { RoleComponent } from './role/role.component';
import {FormControlDirective} from "@coreui/angular";


@NgModule({
  declarations: [
    RoleComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormControlDirective
  ]
})
export class AdminModule { }
