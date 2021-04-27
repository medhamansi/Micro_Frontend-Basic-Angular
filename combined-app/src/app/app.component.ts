import { Component } from '@angular/core';
import * as postal from 'postal';
@Component({
  selector: 'app-root',
  template : `<app-train></app-train>
              <app-flight></app-flight>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'combined-app';


  
}
