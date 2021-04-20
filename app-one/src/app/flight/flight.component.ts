import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }
  myClickFunction(event: any) { 
    //just added console.log which will display the event details in browser on click of the button.
    alert("Button is clicked");
    parent.postMessage("message","http://localhost:8082");
    console.log(event);
 }
}
