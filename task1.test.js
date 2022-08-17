// const { it } = require('node:test');
const stringLength = require('./task1')

it('"Love" should return 4', () => {
  expect(stringLength('Love')).toBe(4);
});

it('"Love you Ruth" should Throw an errow Message', () => {
  const t = new Error('Longer that 10 or Less than 1');
  expect(stringLength('Love you Ruth')).toBe('String Longer that 10 or Less than 1');
});