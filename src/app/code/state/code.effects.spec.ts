import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CodeEffects } from './code.effects';

describe('CodeEffects', () => {
  let actions$: Observable<any>;
  let effects: CodeEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CodeEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(CodeEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
