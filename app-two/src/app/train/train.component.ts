import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css']
})
export class TrainComponent implements OnInit {
  disableButton() {
    // Select the element with id "theButton" from App-one inside fligth component and disable it
    var theButton =<HTMLInputElement>document.getElementById("theButton");
    theButton.disabled=true;
  }
  
  constructor() { }

  ngOnInit(): void {
}
}