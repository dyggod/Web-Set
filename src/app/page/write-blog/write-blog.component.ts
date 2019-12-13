import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-write-blog',
  templateUrl: './write-blog.component.html',
  styleUrls: ['./write-blog.component.scss']
})
export class WriteBlogComponent implements OnInit {
  blogText: string;
  constructor() { }

  ngOnInit() {
  }
  confirmSendBlog(str: string) {
    console.log(this.blogText);
  }
}
