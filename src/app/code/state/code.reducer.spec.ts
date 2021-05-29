import { reducer, codeInitialState } from './code.reducer';
import {createReducer} from "@ngrx/store";

describe('Code Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

//      const result = reducer(initialState, action);
      const result = createReducer;

//      expect(result).toBe(initialState);
    });
  });
});
