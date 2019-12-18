import { Component, OnInit, ElementRef } from '@angular/core';
import { CommonStoreService } from '../../service/common-store.service';
@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {
  ws = null;
  messageList = [];
  messageOfSend: string = "";
  count: number = 0;
  messageBoxHeight: number;
  userInfo: {} = {
    userName: "123",
    userId: 5,
    password: "123"
  };
  inputIsFocus: boolean = false;
  constructor(
    private el: ElementRef,
    private store: CommonStoreService
  ) { }

  ngOnInit() {
    // this.userInfo = JSON.parse(localStorage.getItem("userRegisterInfo"));
    // console.log(this.userInfo["userName"]);
    this.getSocketConnection();
  }
  ngAfterViewInit() {
    this.messageBoxHeight = this.getMessageBoxHeight();
    this.moveScrollToButtomAtFirst();
  }
  getSocketConnection() {
    if ("WebSocket" in window) {
      this.ws = new WebSocket("ws://49.232.166.197:8080/WebSet/realcom/" + this.userInfo["userName"]);
      this.ws.onclose = this.wsOnClose;
      this.ws.onopen = this.wsOnOpen;
      this.ws.onmessage = this.wsOnMesaage();
    } else {
      alert("浏览器不支持实时聊天");
    }
  }
  wsOnOpen() {
    console.log("连接成功");
  }
  wsOnClose() {
    console.log("断开连接");
  }
  wsOnMesaage() {
    var that = this;
    var onmessage = function (event) {
      event.userId = 6;
      var direction: boolean;
      if (event.userId == that.userInfo["userId"]) {
        direction = false;
      } else {
        direction = true;
      }
      that.messageList.push({
        userName: "游客",
        userId: 5,
        message: event.data,
        direction: direction
      });
    }
    return onmessage
  }
  sendMessage(obj): void {
    this.ws.send(this.messageOfSend);
    var timer = setTimeout(() => {
      var topHeight: number =
      this.el.nativeElement.querySelector("ul.messageContent").offsetHeight - this.messageBoxHeight;
      obj.scrollTop(topHeight);
      clearTimeout(timer);
      timer = null;
    }, 100);
    this.messageOfSend = "";
  }
  moveScrollToButtomAtFirst(): void {
    var topHeight: number =
      this.el.nativeElement.querySelector("ul.messageContent").offsetHeight - this.messageBoxHeight;
    this.el.nativeElement.querySelector("div.ui-scrollpanel-content").scrollTop = topHeight;
  }
  getMessageBoxHeight() {
    var height: number = this.el.nativeElement.querySelector("div.messageBox").offsetHeight;
    return height
  }
  showUserInfo() {
    console.log("展示用户信息");
  }
  showEmoji() {

  }
}
