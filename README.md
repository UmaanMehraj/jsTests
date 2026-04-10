# jsTests

A Test-Driven Development (TDD) practice repository featuring JavaScript utility functions and a Calculator class, tested with Jest.

## About

This project is part of _The Odin Project_ curriculum and demonstrates the principles of Test-Driven Development. All functions are developed and validated through comprehensive Jest test suites.

## Technologies

- **JavaScript (ES6)** - Modern JavaScript with ES6 module syntax
- **Jest** - JavaScript testing framework
- **Babel** - JavaScript transpiler for Node.js compatibility

## Project Structure

```
jsTests/
├── functions.js          # Core utility functions and Calculator class
├── fucntions.test.js     # Jest test suite (matching functions)
├── package.json          # Project dependencies and scripts
├── babel.config.js       # Babel configuration
└── README.md            # This file
```

## Setup

1. Clone or download the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Running Tests

Execute the test suite with:

```bash
npm test
```

This runs all tests in `fucntions.test.js` using Jest.

## Available Functions

### Calculator Class

A utility class with basic arithmetic operations:

- **`add(a, b)`** - Returns the sum of two numbers
- **`subtract(a, b)`** - Returns the difference between two numbers
- **`multiply(a, b)`** - Returns the product of two numbers
- **`divide(a, b)`** - Returns the quotient (throws error on division by zero)

### String Functions

- **`capitalize(str)`** - Capitalizes the first letter of a string
- **`strRev(str)`** - Reverses a string
- **`caesarCipher(str, key)`** - Encodes a string using Caesar Cipher with the specified shift key

### Array Functions

- **`analyzeArray(array)`** - Analyzes an array of numbers and returns an object with:
  - `average` - Mean of all elements
  - `min` - Smallest element
  - `max` - Largest element
  - `length` - Number of elements

## Example Usage

```javascript
import { Calculator, capitalize, strRev, caesarCipher, analyzeArray } from './functions';

// Calculator
const calc = new Calculator();
console.log(calc.add(5, 3)); // 8
console.log(calc.divide(10, 2)); // 5

// String functions
console.log(capitalize('hello')); // 'Hello'
console.log(strRev('hello')); // 'olleh'
console.log(caesarCipher('xyz', 3)); // 'abc'

// Array analysis
console.log(analyzeArray([1, 2, 3, 4, 5]));
// { average: 3, min: 1, max: 5, length: 5 }
```

## Learning Objectives

This project reinforces:
- **Test-Driven Development** - Writing tests before implementation
- **Unit Testing** - Testing individual functions in isolation
- **Jest Framework** - Using Jest for test specification and assertion
- **Babel Transpilation** - Configuring Babel for Node.js compatibility
- **ES6 Modules** - Using modern JavaScript module syntax