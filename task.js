// start task 1
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(Number("100000")); // 100000
console.log(Math.trunc(100000.9)); // 100000
console.log(parseInt("100000.2")); // 100000
console.log(Math.round(100000.1)); // 100000
console.log(Math.ceil(99999.9)); // 100000
console.log(Math.floor(100000.6)); // 100000
console.log(Math.min(100000,100000000,2000000)); // 100000
console.log(Math.max(100000,100,20000)); // 100000
console.log(+"100000"); // 100000
console.log(10**5); // 100000
// end task 1
// start task 2
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991

// end task 2
// start task 3
console.log(Number.MAX_SAFE_INTEGER.toString().length); // 16
// end task 3
// start task 4
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(Number(parseFloat(myVar).toFixed(2))); // 100.57

// end task 4
// start task 5
let num = 10;

console.log(Number.isInteger(num)+true); // 2
// end task 5
// start task 6

let flt = 10.4;

console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Number((flt).toFixed(0))); // 10

// end task 6
// start task 7
console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4

// end task 7
// string task
// start task1
let userName = "Elzero";
console.log(userName[0].toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.slice(0,1).toLowerCase()); // e
console.log(userName.substring(0,1).toLowerCase()); // e
console.log(userName.substr(0,1).toLowerCase()); // e
console.log((userName[0].toLowerCase()).repeat(3)); // eee
// end task1
// start task 2
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toLocaleUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True


// end task 2