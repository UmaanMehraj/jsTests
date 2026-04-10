export class Calculator {
  add(a, b) {
    return a + b
  }
  subtract(a, b) {
    return a - b
  }
  divide(a, b) {
    if (b !== 0) {
      return a / b
    } else {
      throw new Error('Division by Zero not possible')
    }
  }
  multiply(a, b) {
    return a * b
  }
}

export function capitalize(str) {
  const char = str.slice(0, 1)
  str = char.toUpperCase() + str.slice(1, str.length)

  return str
}

export function strRev(str) {
  return str.split('').reverse().join('')
}

export function caesarCipher (str, key){
    let result = '';
    for (let char of str){
        if (/^[A-Z]$/.test(char)){
            result += String.fromCharCode((char.codePointAt(0) - 65 + key) % 26 + 65)
        }
        else if (/^[a-z]$/.test(char)){
            result += String.fromCharCode((char.codePointAt(0) - 97 + key) % 26 + 97)
        }
        else{
            result += char
        }
    }
    return result
}
