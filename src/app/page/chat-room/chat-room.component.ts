import { Component, OnInit, ElementRef } from '@angular/core';
@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {
  messageList = [
    {userName: "游客1", message: "hello"},
    {userName: "游客2", message: "你好"},
    {userName: "游客1", message: "hello"},
    {userName: "游客2", message: "你好"},
    {userName: "游客1", message: "hello"},
    {userName: "游客2", message: "你好"},
    {userName: "游客1", message: "hello"},
    {userName: "游客2", message: "你好"},
    {userName: "游客1", message: "hello"},
    {userName: "游客2", message: "你好"},
    {userName: "游客1", message: "hello"}
  ];
  messageOfSend: string = "";
  count: number = 0;
  constructor(
    private el: ElementRef
  ) { }

  ngOnInit() {
  }
  getSocketConnection() {
    if ("WebSocket" in window) {
      var ws = new WebSocket("");
    } else {
      alert("浏览器不支持实时聊天");
    }
  }
  sendMessage(obj): void {
    this.messageList.push({userName:"游客9", message: "我是新来的！"})
    var topHeight: number =
      this.el.nativeElement.querySelector("ul").offsetHeight - 200;
    console.log(this.el.nativeElement.querySelector("ul").offsetHeight);
    console.log(this.messageOfSend);
    console.log(topHeight);
    obj.scrollTop(topHeight);
  }
}
