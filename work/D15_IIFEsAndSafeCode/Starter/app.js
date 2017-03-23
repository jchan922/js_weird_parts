// IIFE and Safe Code
var firstname = 'John';

// This syntax and style ensures function is run immediately
// Also ensures that there are no collisions with other js files/variables/namespaces
// Not accidently putting things in the global object

(function(name) {
    var greeting = 'Hello';
    console.log(greeting + ' ' + name);
}(firstname)); // IIFE
console.log(greeting);


// To intentionally effect global object...
// Pass through the global object as a parameter

(function(global, name) {
    var greeting = 'Hello';
    global.greeting = 'Hello';
    console.log(greeting + ' ' + name);

}(window, firstname)); // IIFE
console.log(greeting);
