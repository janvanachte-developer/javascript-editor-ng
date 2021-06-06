import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CodeEditingTabsComponent} from './code-editing-tabs.component';

describe('CodeEtingTabComponent', () => {
  let component: CodeEditingTabsComponent;
  let fixture: ComponentFixture<CodeEditingTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeEditingTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeEditingTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
