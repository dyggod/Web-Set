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
  blocked: boolean = true;
  panelHeaderText: string = "未注册-功能禁用";
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
      this.blocked = false;
      this.panelHeaderText = "已开启全部功能";
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
