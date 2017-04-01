// Built in function constructors


// NUMBER CONSTRUCTOR

var a = new Number(3);          // creates a new Number object
console.log(a)                  // logs a new Number object with [[Primitive Value]] of 3

console.log(Number.prototype);  // logs Number object with built in prototype methods listed
                                    // EXAMPLES
                                    // .toFixed()
                                    // .toExponential()
                                    // .toString()
                                    // .valueOf()
                                    // __proto__

console.log(a.toFixed(2))       // logs 3.00

// add features onto all Number function constructors
Number.prototype.isPositive = function(){
    return this > 0;
}
// all Number objects constructed with 'new' now have access to isLengthGreaterThan()
console.log(a.isPositive());


// STRING CONSTRUCTOR

var b = new String("John");
console.log(b)                  // logs a new String object with [[Primitive Value]] of "John"

console.log(String.prototype);  // logs String object with built in prototype methods listed

// add features onto all String function constructors
String.prototype.isLengthGreaterThan = function(limit){
    return this.length > limit;
}
// all String objects constructed with 'new' now have access to isLengthGreaterThan()
console.log(b.isLengthGreaterThan(3));


// DATE CONSTRUCTOR

var c = new Date("3/31/2017");
console.log(c)                  // logs a new Date object with date

console.log(Date.prototype);    // logs Date object with built in prototype methods listed
