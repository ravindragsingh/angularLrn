
import { Component } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';

@Component({
  
  selector: 'courses',
  template: `<h2>{{title}}</h2>
  <ul>
    <li *ngFor= "let course of courses"> 
    {{course}}
    </li>
  </ul>
  
  `
})
export class CoursesComponent { 
title = "List of courses";
courses = ["ngFor", "ngRx", "ngModule"]
}
