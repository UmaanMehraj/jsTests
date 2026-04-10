import { capitalize, strRev, Calculator, caesarCipher } from './functions'

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

test('calcualtor: divsion', ()=>{
    expect(obj.divide(2,2)).toBe(1)
})

test('calculator: division by zero', ()=>{
    expect(obj.divide(3, 0)).toThrow(/^Division by Zero not possible$/)
})


test('Caesar Cipher', ()=>{
  expect(caesarCipher('xyz', 3)).toBe('abc')
})


