import { Component, OnInit, ElementRef } from '@angular/core';
@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {
  messageList = [
    {userName: "游客1", userId: "1", message: "hello"},
    {userName: "游客2", userId: "2", message: "你好"},
    {userName: "游客1", userId: "3", message: "hello"},
    {userName: "游客2", userId: "4", message: "你好"},
    {userName: "游客1", userId: "5", message: "hello"},
    {userName: "游客2", userId: "6", message: "你好"},
    {userName: "游客1", userId: "7", message: "hello"},
    {userName: "游客2", userId: "8", message: "你好"},
    {userName: "游客1", userId: "9", message: "hello"},
    {userName: "游客2", userId: "10", message: "你好"},
    {userName: "游客1", userId: "11", message: "hello"}
  ];
  messageOfSend: string = "";
  count: number = 0;
  messageBoxHeight: number;
  constructor(
    private el: ElementRef
  ) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.messageBoxHeight = this.getMessageBoxHeight();
    this.moveScrollToButtomAtFirst();
  }
  getSocketConnection() {
    if ("WebSocket" in window) {
      var ws = new WebSocket("");
    } else {
      alert("浏览器不支持实时聊天");
    }
  }
  sendMessage(obj): void {
    this.messageList.push({userName:"游客9", userId: "12", message: "我是新来的！"});
    var timer = setTimeout(() => {
      var topHeight: number =
      this.el.nativeElement.querySelector("ul.messageContent").offsetHeight - this.messageBoxHeight;
      obj.scrollTop(topHeight);
      clearTimeout(timer);
      timer = null;
    }, 100);
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
}
