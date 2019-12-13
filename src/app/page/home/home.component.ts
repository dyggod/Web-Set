import { Component, OnInit } from '@angular/core';
import { CommonStoreService } from '../../service/common-store.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public loginStatus: boolean;
  isShowNotice: boolean = true;
  constructor(
    public store: CommonStoreService
  ) {}

  ngOnInit() {
    this.verifyIsRegister();
  }
  verifyIsRegister() {
    var localInfo = localStorage.getItem("userRegisterInfo");
    var isJSON: boolean = this.isJSON(localInfo);
    if (isJSON) {
      let userRegisterInfo = JSON.parse(localInfo);
      console.log(userRegisterInfo);
      // TODO: 需自动登录
      this.store.changeLoaginStatus(true);
      console.log(this.store.loginStatus);
      this.isShowNotice = false;
    } else {
      console.log(this.store.loginStatus);
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
