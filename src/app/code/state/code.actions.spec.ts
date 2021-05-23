import * as fromCode from './code.actions';

describe('loadCodes', () => {
  it('should return an action', () => {
    expect(fromCode.setFilePath(null).type).toBe('[Code] Load Codes');
  });
});
