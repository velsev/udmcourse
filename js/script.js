'use strict';

function showFirstMessage(text) {
    console.log(text);
}

showFirstMessage("Hello world!");

const calc = (a, b) => {return a+b;};

console.log(calc(4, 6));

let val = 7;
function createAdder() {
    function addNumbers(a, b) {
       let ret = a + b;
       return ret;
    }
    return addNumbers;
 }
let adder = createAdder();
let sum = adder(val, 8);
console.log('example of function returning a function: ', sum);

