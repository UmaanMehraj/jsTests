import { capitalize, strRev, Calculator } from './functions'

test('capitalize function', () => {
  expect(capitalize('hello')).toBe('Hello')
})

test('reverse function', () => {
  expect(strRev('meh')).toBe('hem')
})

// Calci object
const obj = new Calculator()

test('calculator: add', () => {
  expect(obj.add(1, 2)).toBe(3)
})

test('calculator: subtraction', () => {
  expect(obj.subtract(1, 2)).toBe(-1)
})

test('calculator: multiplication', () => {
  expect(obj.multiply(3,3)).toBe(9)
})
