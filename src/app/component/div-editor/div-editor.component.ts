import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-div-editor',
  templateUrl: './div-editor.component.html',
  styleUrls: ['./div-editor.component.scss']
})
export class DivEditorComponent implements OnInit {
  @Input() innerText: string = "";
  @Output() fromChild = new EventEmitter();
  value: string = "";
  isFocus:boolean = false;
  constructor() { }

  ngOnInit() {
  }
  mouseBlur() {
    this.fromChild.emit(this.value);
  }
  mouseFocus() {
    this.value = this.innerText;
  }
  changeText(event) {
    this.value = event.target.innerHTML;
  }
  clearValue() {
    this.value = "";
  }
}
