import { Component, OnInit } from '@angular/core';
import  postal  from 'postal';  
@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css']
})
export class TrainComponent implements OnInit {
  
  ButtonCall(){
      this.postal.publish({
          channel : "Disbale",
          topic : "disbale.button",
          data : {
                disbaleButton : true
          }
      });
  }
  // disableButton(buttonid) {
  //   // Select the element with id "theButton" from App-one inside fligth component and disable it
  //   var theButton =<HTMLInputElement>document.getElementById(buttonid);
  //   alert(buttonid);
  //   theButton.setAttribute('disabled','true');
  // }
  constructor(private postal : postal) {  }

  ngOnInit(): void {
}

}




