import { Component, OnInit} from '@angular/core';
import * as postal from 'postal';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  constructor() { 
  }
  ngOnInit(): void {
    // var channel = postal.channel("mychannel");
    // channel.publish("name.change",{name : "Dr. Who"});
    var subscription = postal.subscribe({
      channel : "Disable",
      topic : "disable.button",
      callback : function(data, envelope){
        console.log('Flight');
        console.log(data);
        console.log('Subscriber Flight Called');
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
