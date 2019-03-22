import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesComponent }      from './courses/courses.component';
import { DashboardComponent }      from './dashboard/dashboard.component';
import { PlaygroundComponent }      from './playground/playground.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'courses', component: CoursesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'playground', component: PlaygroundComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
