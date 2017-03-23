// Closures

function greet(whattosay) {
    return function(name) {
        console.log(whattosay + ' ' + name);
    }
}

var sayHi = greet('Hi');    // greet returns a value that is a object that is a function
sayHi('Tony');              // sayHi is a function invoked
