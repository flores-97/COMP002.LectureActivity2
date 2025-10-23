let myGreeting;
myGreeting = "Hello world!"; //generic greeting

console.log(myGreeting);

const pi = 3.14;
console.log(pi);

//pi = 2; // error "Uncaught TypeError: assignment to constant variable" This happened because "pi" was assigned "Const" meaning it will not change

let myNumber;
myNumber = "45";

console.log(Math.min(pi, myNumber)); //the result returned the number of pi because it was lower than the number that I choose, 45. 
