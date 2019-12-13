import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// 引入自定义服务
import { CommonStoreService } from './service/common-store.service';

// primeng UI组件的引用
import { ButtonModule } from "primeng/button";
import { EditorModule } from 'primeng/editor';

// 引入自定义page页面
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatRoomComponent } from './page/chat-room/chat-room.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { WriteBlogComponent } from './page/write-blog/write-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatRoomComponent,
    HomeComponent,
    LoginComponent,
    WriteBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    EditorModule
  ],
  entryComponents: [
    AppComponent,
    ChatRoomComponent
  ],
  providers: [
    CommonStoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
