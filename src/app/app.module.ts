import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainFooterComponent } from './main-footer/main-footer.component';

import { AppRoutingModule } from './app-routing.module';
import { CourseBoxComponent } from './course-box/course-box.component';
import { CoursesComponent } from './courses/courses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlaygroundComponent } from './playground/playground.component';
import { MenuComponent } from './menu/menu.component';
import { MainHeaderComponent } from './main-header/main-header.component';

@NgModule({
  declarations: [
    AppComponent,
    MainFooterComponent,
    CourseBoxComponent,
    CoursesComponent,
    DashboardComponent,
    PlaygroundComponent,
    MenuComponent,
    MainHeaderComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
