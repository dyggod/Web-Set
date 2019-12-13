import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';
import { CommonStoreService } from 'src/app/service/common-store.service';
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
    private http: HttpClient,
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
    this.http.get(url).subscribe((data: any) => {
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
