import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonStoreService } from 'src/app/service/common-store.service';
import { CommonAxiosService } from 'src/app/service/common-axios.service';
@Component({
  selector: 'app-reigster',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userRegisterInfo: {} = {
    userName: "",
    userNickname: "",
    userEmail: "",
    password: ""
  };
  wranInfoList: {} = {
    userName: false,
    userNickname: false,
    userEmail: false,
    password: false
  };
  constructor(
    private commonService: CommonAxiosService,
    private router: Router,
    public store: CommonStoreService
  ) { }
  ngOnInit() {

  }
  register() {
    var isHaveEmpty: boolean = this.verifyEmptyInput();
    if (!isHaveEmpty) {
      console.log(this.userRegisterInfo);
      var url: string = this.commonService.baseUrl + "/WebSet/registered";
      this.commonService.service({
        url: url,
        method: "POST",
        data: {
          account: this.userRegisterInfo["userName"],
          password: this.userRegisterInfo["password"],
          name: this.userRegisterInfo["userNickname"],
          mail: this.userRegisterInfo["userEmail"]
        }
      })
      .then(({data}) => {
        console.log(data);
        let isSuccess: boolean = data.isSuccess;
        if (isSuccess) {
          let userRegisterInfo: {} = {
            account: this.userRegisterInfo["uesrName"],
            password: this.userRegisterInfo["password"],
          };
          localStorage.userRegisterInfo = JSON.stringify(userRegisterInfo);
          localStorage.webset_token = data.data;
          this.store.changeLoaginStatus(true);
          this.router.navigate(["/home"])
        } else {
          alert("register false!")
        }
      })
      console.log(this.commonService.baseUrl);
    }
  }
  verifyEmptyInput() {
    for (let key2 in this.wranInfoList) {
      this.wranInfoList[key2] = false;
    }
    for (let key in this.userRegisterInfo) {
      if (this.userRegisterInfo[key] === "") {
        this.wranInfoList[key] = true;
        return true
      }
    }
  }
}
