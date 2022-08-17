const Calculator = require('./task3');
const calculate = new Calculator();
describe('Magic Calculator:', () => {
  describe('Additional Operator', () => {
    test('2 + 6 = 8', () => {
      expect(calculate.add(2,6)).toBe(8)
    });
    test('2 + 0 = 2', () => {
      expect(calculate.add(2,0)).toBe(2)
    });
    test('3 + 3 = 6', () => {
      expect(calculate.add(3,3)).toBe(6)
    });
  });
  describe('Substraction Operator', () => {
    test('2 - 6 = -4', () => {
      expect(calculate.subtract(2,6)).toBe(-4)
    });
    test('2 - 0 = 2', () => {
      expect(calculate.subtract(2,0)).toBe(2)
    });
    test('3 - 3 = 0', () => {
      expect(calculate.subtract(3,3)).toBe(0)
    });
  });
  describe('Multiplication Operator', () => {
    test('2 * 6 = 12', () => {
      expect(calculate.multiply(2,6)).toBe(12)
    });
    test('2 * 0 = 0', () => {
      expect(calculate.multiply(2,0)).toBe(0)
    });
    test('3 * 3 = 6', () => {
      expect(calculate.multiply(3,3)).toBe(9)
    });
  });
  describe('Division Operator', () => {
    test('6 / 2 = 3', () => {
      expect(calculate.divide(6,2)).toBe(3)
    });
    test('2 / 1 = 2', () => {
      expect(calculate.divide(2,1)).toBe(2)
    });
    test('3 / 3 = 1', () => {
      expect(calculate.divide(3,3)).toBe(1)
    });
  });
});