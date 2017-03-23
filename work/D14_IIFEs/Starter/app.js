// Immediate Invoked Function Expressions

// function statement
    function greet(name) {
        console.log('Hello ' + name);
    }

    greet('John');

// function expression
    var greetFunc = function(name) {
        console.log('Hello ' + name);
    };
    greetFunc('John');

// IIFE - Immediate Invoked Function Expressions
    // run function once you created it
    var greeting = function(name) {
        return 'Hello ' + name;
    }('John');

    console.log(greeting);

    // function expression that is invoked
    // exectuting a function after it's created
    var firstName = 'John';
    (function(name) {
        var greeting = 'Inside IFFE: Hello'
        console.log(greeting + ' ' + name);
    }(firstName));
