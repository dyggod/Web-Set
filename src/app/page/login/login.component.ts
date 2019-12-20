import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonStoreService } from 'src/app/service/common-store.service';
import { CommonAxiosService } from 'src/app/service/common-axios.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userRegisterInfo: {} = {
    userName: "",
    userNickname: "",
    userEmail: "",
    password: ""
  };
  wranInfoList: {} = {
    userName: false,
    userNickname: "",
    userEmail: "",
    password: ""
  };
  constructor(
    private commonService: CommonAxiosService,
    private router: Router,
    public store: CommonStoreService,
    private http: HttpClient
  ) { }
  ngOnInit() {

  }
  register() {
    this.verifyEmptyInput();
    // var url: string = this.commonService.baseUrl + "/WebSet/registered";
    // this.commonService.service({
    //   url: url,
    //   method: "POST",
    //   data: {
    //     account: this.userRegisterInfo["uesrName"],
    //     password: this.userRegisterInfo["password"],
    //     name: this.userRegisterInfo["userNickname"],
    //     mail: this.userRegisterInfo["userEmail"]
    //   }
    // })
    // .then(({data}) => {
    //   console.log(data);
    //   let isSuccess: boolean = data.isSuccess;
    //   if (isSuccess) {
    //     let userRegisterInfo: {} = {
    //       account: this.userRegisterInfo["uesrName"],
    //       password: this.userRegisterInfo["password"],
    //     };
    //     localStorage.userRegisterInfo = JSON.stringify(userRegisterInfo);
    //     localStorage.webset_token = data.data;
    //     this.store.changeLoaginStatus(true);
    //     this.router.navigate(["/home"])
    //   } else {
    //     alert("register false!")
    //   }
    // })
    // console.log(this.commonService.baseUrl);
  }
  verifyEmptyInput() {
    console.log(this.userRegisterInfo);
    for (let key2 in this.wranInfoList) {
      this.wranInfoList[key2] = false;
    }
    for (let key in this.userRegisterInfo) {
      if (this.userRegisterInfo[key] === "") {
        this.wranInfoList[key] = true;
        return
      }
    }
  }
}
