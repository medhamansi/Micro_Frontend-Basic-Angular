import { Component, OnInit} from '@angular/core';
import * as postal from 'postal'; //not sure about this line just trying
export default postal;

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  constructor(private postal : postal) { 
  }
  ngOnInit(): void {
    var subscription = this.postal.subscribe({
      channel : "Disable",
      topic : "disable.button",
      callback : function(data, envelope){
        console.log('Hi,Message is passing');
      }
    });
  }
 
  myClickFunction(event: any) { 
    //just added a console.log which will display the event details in browser on click of the button.
    alert("Button is clicked");
    parent.postMessage("message","http://localhost:8082");
    console.log(event);
 }
}
