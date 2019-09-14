import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { EmployeeModule } from '../employee/employee.module';
import { LoginComponent } from '../login/login.component';
import { EmployeeListComponent } from '../employee/component/employee-list/employee-list.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path : 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        children: [
        {
            path: 'employee',
            loadChildren: '../employee/employee.module#EmployeeModule'
        }
        ]
    },
    // {
    //     path: 'employee',
    //     loadChildren: '../employee/employee.module#EmployeeModule'
    // }
    // {
    // path: '**',
    // component: PageNotFoundComponent
    // }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRouteModule { }
