import { describe } from '@jest/globals';
import { Tennis } from './Tennis';

describe('tennis', function () {
  it('love all', function () {
    const tennis = new Tennis();
    expect(tennis.Score()).toBe('love all');
  });
});
