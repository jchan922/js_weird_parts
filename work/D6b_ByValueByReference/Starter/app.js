// By Value or By Reference

// "By Value" (primitives)
var a = 3;
var b;

b = a;  // b is a copy of a
a = 2;  // a and b have separate spaces in memory

console.log(a);
console.log(b);

// "By Reference" (objects including functions)
var c = { greeting: 'hi'}
var d;

d = c;                    // c and d are pointing to same place in memory
c.greeting = 'hello';     // if you change one, you change both or all references to

console.log(c);
console.log(d);

// "By Reference" Parameters
function changeGreeting(obj){
    obj.greeting = 'Hola';
}

changeGreeting(d)
console.log(c);
console.log(d);

// Equals operator sets up new memory space
c = {greeting: 'howdy'};    // c is now pointing to a new space in memory from d
console.log(c);
console.log(d);
