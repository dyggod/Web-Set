import { Component, OnInit } from '@angular/core';
import { CommonAxiosService } from 'src/app/service/common-axios.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userLoginInfo: {} = {
    userName: "",
    password: ""
  };
  wranInfoList: {} = {
    userName: false,
    userNickname: false,
    userEmail: false,
    password: false
  };
  constructor(
    private commonService: CommonAxiosService
  ) { }

  ngOnInit() {
  }
  login() {
    console.log(this.userLoginInfo);
    var isHaveEmpty: boolean = this.verfyEmptyInput();
    // if (!isHaveEmpty) {
    //   var url: string = "";
    //   this.commonService.service({
    //     url: url,
    //     method: "post",
    //     data: {

    //     }
    //   })
    //   .then(({data}) => {
    //     console.log(data);
    //   })
    // }
  }
  verfyEmptyInput() {
    for (let key in this.wranInfoList) {
      this.wranInfoList[key] = false;
    }
    for (let key2 in this.userLoginInfo) {
      if (this.userLoginInfo[key2] === "") {
        this.wranInfoList[key2] = true;
        return true
      }
    }
  }
}
