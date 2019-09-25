import { isUniformNumber } from './index';

describe('#isUniformNumber', () => {
  describe('正常系', () => {
    [...Array(100)].forEach((_, i) => {
      it(`一桁か二桁の数値の場合trueが返ること: ${i}`, () => {
        expect(isUniformNumber(i)).toBe(true);
      });
    });
  });
  describe('異常系', () => {
    it('空文字の場合falseが返ること', () => {
      expect(isUniformNumber('')).toBe(false);
    });
    it('nullの場合falseが返ること', () => {
      expect(isUniformNumber(null)).toBe(false);
    });
    it('undefinedの場合falseが返ること', () => {
      expect(isUniformNumber(undefined)).toBe(false);
    });
    it('3桁の数値の場合falseが返ること', () => {
      expect(isUniformNumber(100)).toBe(false);
    });
  });
});
