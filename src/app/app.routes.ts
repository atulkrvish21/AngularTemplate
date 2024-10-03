import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import path from 'path';
import { LayoutComponent } from './Components/layout/layout.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { Dashboard2Component } from './Components/dashboard2/dashboard2.component';
import { Dashboard3Component } from './Components/dashboard3/dashboard3.component';
import { FormsComponent } from './Components/forms/forms.component';

export const routes: Routes = [
    {
        path:'',
        component:LoginComponent,
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent,
        pathMatch:'full'
    },
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'dashboard',
                component:DashboardComponent,
                pathMatch:'full',
                title:'Dashboard'
            },
            {
                path:'dashboard2',
                component:Dashboard2Component,
                pathMatch:'full',
                title:'Dashboard 2'
            },
            {
                path:'dashboard3',
                component:Dashboard3Component,
                pathMatch:'full',
                title:'Dashboard'
            },
            {
                path:'forms',
                component:FormsComponent,
                pathMatch:'full',
                title:'Forms'
            }
        ]
    }
];
