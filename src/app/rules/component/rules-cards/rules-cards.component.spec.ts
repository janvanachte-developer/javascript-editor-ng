import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RulesCardsComponent} from './rules-cards.component';

describe('RulesCardsComponent', () => {
  let component: RulesCardsComponent;
  let fixture: ComponentFixture<RulesCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RulesCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
