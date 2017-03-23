// FUNCTIONS ARE OBJECTS

function greet(){
    console.log("Hi");
}

// you can add a property to a function since it's an object
greet.language = 'english';
console.log(greet.language);
