#!/bin/node

// a simple calculator

console.log('Simple Calculator');

const x = prompt('Enter the 1st number');
const oprator = prompt('Enter the operator (+, -, *, /, %)');
const y = prompt('Enter the 2nd number');


switch(operator) {
	case '+':
		console.log('Sum = '+ (x + y));
		break;
	case '-':
		console.log('Difference = ' + (x - y));
		break;
	case '*':
		console.log('Product = '+  (x * y));
		break;
	case '/':
		console.log('Quotient = ' + (x / y));
	case '%':
		console.log('Modulus = ' + (x % y));
		break;
	default:
		console.log('Invalid input');
}
