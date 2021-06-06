import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RuleEditingComponent} from './rule-editing.component';

describe('RuleEditingComponent', () => {
  let component: RuleEditingComponent;
  let fixture: ComponentFixture<RuleEditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuleEditingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
