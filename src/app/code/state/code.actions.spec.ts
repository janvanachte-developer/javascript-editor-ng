import * as fromCode from './code.actions';
import {updateCodeAsString} from "./code.actions";

describe('updateCodeAsString', () => {
  it('should return an action', () => {
    expect(fromCode.updateCodeAsString(null).type).toBe('SET_CODE');
  });
});
