#!/bin/node

// a simple calculator

console.log('Simple Calculator');

const x = parseFloat(prompt('Enter the 1st number'));
const oprator = prompt('Enter the operator (+, -, *, /, %)');
const y = parseFloat(prompt('Enter the 2nd number'));
let res;

switch (operator) {
  case '+':
    res = x + y;
    break;
  case '-':
    res = x - y;
    break;
  case '*':
    res = x * y;
    break;
  case '/':
    res = x / y;
  case '%':
    res = x % y;
    break;
  default:
    console.log('Invalid input');
}
console.log('${x} ${operator} ${y} = ${res}');
