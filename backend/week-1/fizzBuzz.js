#!/bin/node

// a script that will print nos from 1 to 50 and for multiples of 3 it will print "Fizz", for the multiples of 5 it will print "Buzz",  and for the multiples of both it will print "FIzzBuzz"

for (let i = 1; i <= 50; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log('FizzBuzz');
  } else if (i % 3 == 0) {
    console.log('Fizz');
  } else if (i % 5 == 0) {
    console.log('Buzz');
  } else { console.log(i); }
}
