import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeFormComponent } from './component/employee-form/employee-form.component';

const employeeRoutes: Routes = [
    {
        path: '',
        component: EmployeeListComponent
    },
    {
        path: 'list',
        component: EmployeeListComponent
    },
    {
        path: 'form',
        component: EmployeeFormComponent
    }
];

@NgModule({
    declarations: [],
    imports: [
      RouterModule.forChild(employeeRoutes)
    ],
    exports: [RouterModule]
  })
  export class EmployeeRouteModule { }
