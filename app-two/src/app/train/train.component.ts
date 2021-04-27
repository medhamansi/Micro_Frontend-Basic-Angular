import { Component, OnInit } from '@angular/core';
import  * as postal  from 'postal';  
@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css']
})
export class TrainComponent implements OnInit {
  
  ButtonCall(){
      postal.publish({
          
          topic : "disable.button",
          data : {
                disableButton : true
          }
      })
  };
  // disableButton(buttonid) {
  //   // Select the element with id "theButton" from App-one inside fligth component and disable it
  //   var theButton =<HTMLInputElement>document.getElementById(buttonid);
  //   alert(buttonid);
  //   theButton.setAttribute('disabled','true');
  // }
  constructor() {  }

  ngOnInit(): void {

    var subscription = postal.subscribe({
      //channel : "Disable",
      topic : "disable.button",
      callback : function(data, envelope){
        console.log('Inside Call Back function Train')
        console.log(data);
        console.log('Subscriber Train Called');
      }

    });
}

}



