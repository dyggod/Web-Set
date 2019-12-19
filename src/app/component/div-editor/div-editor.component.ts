import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-div-editor',
  templateUrl: './div-editor.component.html',
  styleUrls: ['./div-editor.component.scss']
})
export class DivEditorComponent implements OnInit {
  @Input() innerText: string = "";
  @Output() fromChild = new EventEmitter();
  @Output() fromChild2 = new EventEmitter();
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
    var html = event.target.innerHTML.replace(/<div>/g, "<br/>");
    html = html.replace(/<\/div>/g, "");
    html = html.replace(/<br>/g, "");
    this.value = html;
  }
  clearValue() {
    this.value = "";
  }
  keydown(event) {
    if (event.keyCode == 13 && event.ctrlKey) {
      event.target.blur();
      this.fromChild2.emit();
      event.target.innerHTML = "";
      event.target.focus();
    }
  }
}
