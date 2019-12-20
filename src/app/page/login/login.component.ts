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
  userName: string = "";
  userEmail: string = "";
  passWord: string = "";
  constructor(
    private commonService: CommonAxiosService,
    private router: Router,
    public store: CommonStoreService,
    private http: HttpClient
  ) { }
  register() {
    console.log(this.userName);
    console.log(this.userEmail);
    console.log(this.passWord);
    alert("register success!");
    //TODO: 换成注册接口
    var url: string = this.commonService.baseUrl + "/WebSet/registered";
    this.commonService.service({
      url: url,
      method: "POST",
      data: {
        account: "123",
        password: "123",
        nameMail: "123"
      }
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
    console.log(this.commonService.baseUrl);
    // var data: {} ={
    //   account: "123",
    //   password: "123",
    //   nameMail: "123"
    // };
    // this.http.post(url, data).subscribe(data => {
    //   console.log(data);
    // })
  }
  ngOnInit() {

  }
}
