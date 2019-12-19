import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DivEditorComponent } from '../../component/div-editor/div-editor.component'
import { CommonStoreService } from '../../service/common-store.service';
@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {
  @ViewChild(DivEditorComponent, {static: false})
  private divEditor: DivEditorComponent
  ws = null;
  messageList = [];
  messageOfSend: string = "";
  encodeMessageOfSend: string = "";
  count: number = 0;
  messageBoxHeight: number;
  userInfo: {} = {
    userName: "123",
    userId: 5,
    password: "123"
  };
  inputIsFocus: boolean = false;
  emojiList = [];
  isShowEmojiBox: boolean = false;
  messageHtml:string = "";
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
      var data = that.encodeMessage(event.data);
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
    this.divEditor.clearValue()
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
    this.getEmojiList();
    if (this.isShowEmojiBox === true) {
      this.isShowEmojiBox = false;
      this.emojiList = [];
    } else {
      this.isShowEmojiBox = true;
    }
  }
  getEmojiList(): void {
    for (let i = 1; i <= 75; i ++) {
      this.emojiList.push({
        src: "../../../assets/img/emoji/" + i + ".gif",
        title: i
      });
    }
  }
  selectEmoji(event): void {
    console.log(event.target.nodeName, event.target.title);
    // this.messageOfSend = this.messageOfSend + "[emoji:" + event.target.title + "]";
    this.messageOfSend = this.messageOfSend + "<img src='../../../assets/img/emoji/"+ event.target.title +".gif'>"
    console.log(this.messageOfSend);
  }
  input(event) {
    console.log(event.target.innerHTML);
    this.messageOfSend = event.target.innerHTML;
  }
  encodeMessage(str:string) {
    var reg = /\[emoji:\d+\]/g;
    var match = null, emojiIndex: string;
    var data: string = str;
    while (match = reg.exec(data)) {
      emojiIndex = match[0].slice(7, -1);
      data = data.replace(match[0], "<img src='../../../assets/img/emoji/" +  emojiIndex +".gif'>");
    }
    return data
  }
  keepLastIndex(obj) {
    console.log(obj)
    console.log(window.getSelection)
    // console.log(document.selection)
    if (window.getSelection) { //ie11 10 9 ff safari
        obj.focus(); //解决ff不获取焦点无法定位问题
        var range = window.getSelection(); //创建range
        range.selectAllChildren(obj); //range 选择obj下所有子内容
        range.collapseToEnd(); //光标移至最后
    }
    // else if (document.selection) { //ie10 9 8 7 6 5
    //     var range = document.selection.createRange(); //创建选择对象
    //     //var range = document.body.createTextRange();
    //     range.moveToElementText(obj); //range定位到obj
    //     range.collapse(false); //光标移至最后
    //     range.select();
    // }
  }
  changeMessageOfSend(data) {
    this.messageOfSend = data;
    console.log(this.messageOfSend);
  }
}
