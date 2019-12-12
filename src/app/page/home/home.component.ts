import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.verifyIsRegister();
  }
  verifyIsRegister() {
    var localInfo = localStorage.getItem("userRegisterInfo");
    var isJSON: boolean = this.isJSON(localInfo);
    if (isJSON) {
      let userRegisterInfo = JSON.parse(localInfo);
      console.log(userRegisterInfo);
    } else {
      alert("you should register");
    }
  }
  isJSON(str: string) {
    if (typeof str === "string") {
      try {
        JSON.parse(str);
        return true
      } catch (error) {
        return false
      }
    }
  }
}
