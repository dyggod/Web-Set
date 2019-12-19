import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivEditorComponent } from './div-editor.component';

describe('DivEditorComponent', () => {
  let component: DivEditorComponent;
  let fixture: ComponentFixture<DivEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
