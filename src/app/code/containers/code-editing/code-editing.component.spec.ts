import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeEditingComponent } from './code-editing.component';

describe('CodeEditingComponent', () => {
  let component: CodeEditingComponent;
  let fixture: ComponentFixture<CodeEditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeEditingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
