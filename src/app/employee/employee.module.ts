import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { EmployeeFormComponent } from './component/employee-form/employee-form.component';
import { EmployeeRouteModule } from './employee-route.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeFormComponent
  ],
  imports: [
    CommonModule,
    EmployeeRouteModule,
    SharedModule
  ],
  exports: [
    EmployeeListComponent,
    EmployeeFormComponent
  ]
})
export class EmployeeModule { }
