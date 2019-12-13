import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 引入自定义页面
import { HomeComponent } from './page/home/home.component';
import {ChatRoomComponent } from './page/chat-room/chat-room.component';
import { LoginComponent } from './page/login/login.component';
import { WriteBlogComponent } from './page/write-blog/write-blog.component';

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "chatRoom", component: ChatRoomComponent},
  {path: "writeBlog", component: WriteBlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
