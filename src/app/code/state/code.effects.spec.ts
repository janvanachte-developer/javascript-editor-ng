import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CodeEffects } from './code.effects';
import {FileReadService} from "../file/file-read.service";
//import {readFile} from "fs";
//import {readFileAndUpdateCodeAsString} from "./code.actions";

describe('CodeEffects', () => {
  let actions$: Observable<any>;
  let effects: CodeEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CodeEffects,
        provideMockActions(() => actions$),
          FileReadService
      ]
    });

    effects = TestBed.inject(CodeEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  /*
  // https://dev.to/jdpearce/how-to-test-five-common-ngrx-effect-patterns-26cb
  it('should call the service', () => {
    // set up the initial action that triggers the effect
    const action = readFileAndUpdateCodeAsString;

    // spy on the service call
    // this makes sure we're not testing the service, just the effect
    spyOn(service, 'performAction').and().;

    // set up our action list
    actions = hot('a', { a: action });

    // check that the output of the effect is what we expect it to be
    // (by doing this we will trigger the service call)
    // Note that because we don't transform the stream in any way,
    // the output of the effect is the same as the input.
    expect(effects.performThingAction$).toBeObservable(cold('a', { a: action }));

    // check that the service was called
    expect(service.performAction).toHaveBeenCalled();
  });

  it('should return error action when file reader raises error', () => {
    expect(effects).toBeTruthy();
  });
*/
});
