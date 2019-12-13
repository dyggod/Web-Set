import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonStoreService } from 'src/app/service/common-store.service';
import { CommonAxiosService } from 'src/app/service/common-axios.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName: string = "";
  passWord: string = "";
  confirmPassWord: string = "";
  constructor(
    private commonService: CommonAxiosService,
    private router: Router,
    public store: CommonStoreService
  ) { }
  register() {
    console.log(this.userName);
    console.log(this.passWord);
    console.log(this.confirmPassWord);
    alert("register success!");
    //TODO: 换成注册接口
    var url: string = "https://jsonplaceholder.typicode.com/todos?_page=1&_limit=10";
    this.commonService.service({
      url: url,
      method: "get"
    })
    .then(({data}) => {
      console.log(data);
      let isSuccess: boolean = true;
      if (isSuccess) {
        let userRegisterInfo: {} = {
          userName: this.userName,
          passWord: this.passWord
        };
        localStorage.userRegisterInfo = JSON.stringify(userRegisterInfo);
        this.store.changeLoaginStatus(true);
        this.router.navigate(["/home"])
      } else {
        alert("register false!")
      }
    })
  }
  ngOnInit() {

  }
}
