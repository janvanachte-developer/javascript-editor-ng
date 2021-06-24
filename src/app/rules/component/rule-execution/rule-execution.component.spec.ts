import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RuleExecutionComponent} from './rule-execution.component';

describe('RuleExecutionComponent', () => {
  let component: RuleExecutionComponent;
  let fixture: ComponentFixture<RuleExecutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuleExecutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleExecutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
