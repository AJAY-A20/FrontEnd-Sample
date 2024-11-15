import { Routes } from '@angular/router';
import { HomeComponent } from './DashBoard/home/home.component';
import { HealthMetricsComponent } from './DashBoard/healthmetrics/healthmetrics.component';
import { PhysicalComponent } from './DashBoard/physical/physical.component';
import { DietComponent } from './DashBoard/diet/diet.component';
import {  MentalHealthComponent } from './DashBoard/mental-health/mental-health.component';
import { UserProfileComponent } from './DashBoard/user-profile/user-profile.component';
import { DashBoardUserComponent } from './DashBoard/dash-board-user/dash-board-user.component';
import { DashBoardAdminComponent } from './DashBoard-Admin/dash-board-admin/dash-board-admin.component';
import { UserDetailsComponent } from './DashBoard-Admin/user-details/user-details.component';


export const routes: Routes = [
{path:'app-dash-board-user', component: DashBoardUserComponent},
{ path: 'home', component: HomeComponent },
{ path: 'healthmetrics', component: HealthMetricsComponent },
{ path: 'physical', component: PhysicalComponent },
{ path: 'diet', component: DietComponent },
{ path: 'mental-health', component: MentalHealthComponent},
{ path: 'user-profile', component: UserProfileComponent},
{ path: '', redirectTo: 'app-dash-board-user', pathMatch:'full'},
{path:'app-dash-board-admin', component: DashBoardAdminComponent},
{path:'app-user-details', component: UserDetailsComponent },
];
