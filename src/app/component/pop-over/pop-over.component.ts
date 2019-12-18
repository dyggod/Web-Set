import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pop-over',
  templateUrl: './pop-over.component.html',
  styleUrls: ['./pop-over.component.scss']
})
export class PopOverComponent implements OnInit {
  @Input() direction: boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
