const reverseString = require('./task2');

it('"Ruth" should return <htuR>', () => {
  expect(reverseString('Ruth')).toBe('htuR');
})