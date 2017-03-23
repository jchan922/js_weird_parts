// Function Statements and Function Expressions

// function statement
greet();
function greet(){
    console.log('hi');
}

// function expression
var annoymousGreet = function(){
    console.log('hi');
}
annoymousGreet();

// functional programming w/ callbacks
function log(a){
    a();
}

log(function(){console.log('hi');});
