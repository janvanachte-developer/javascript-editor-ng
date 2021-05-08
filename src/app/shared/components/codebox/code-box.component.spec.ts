import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CodeBoxComponent } from './code-box.component';

describe('CodeBoxComponent', () => {
  let component: CodeBoxComponent;
  let fixture: ComponentFixture<CodeBoxComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
