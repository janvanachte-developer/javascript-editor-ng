import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeEditingComponent } from './code-editing.component';
import CodeStateService from "../../state/code-state.service";
import {StoreModule} from "@ngrx/store";
import * as fromCode from "../../state/code.reducer";

describe('CodeEditingComponent', () => {
  let component: CodeEditingComponent;
  let fixture: ComponentFixture<CodeEditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeEditingComponent ],
      providers: [CodeStateService],
      imports: [StoreModule.forRoot({}),StoreModule.forFeature(fromCode.codeFeatureKey, fromCode.reducer)]
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
