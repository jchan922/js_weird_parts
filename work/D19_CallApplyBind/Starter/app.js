// call(), apply(), bind()
// all functions have access to all three as methods
// used to set up the 'this' keyword

var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function(){
        var fullname = this.firstname + ' ' + this.lastname;    // this refers to person object
        return fullname;

    }
}

var logName = function(lang1, lang2) {

    console.log('Logged: '+this.getFullName());                 // this is the global object
    console.log('Arguments: '+ lang1 + ' ' +lang2);
    console.log('===========');
}

// .bind() creates a copy of whatever function you're calling it on
var logPersonName = logName.bind(person);                       // in this case .bind is copying logName
                                                                // passing through the person object
                                                                // this = person object
logPersonName();                                                // => "Logged: John Doe"
logPersonName('en');

// .call() executes and establishes 'this' and parameters in one step
// no copy is created
logName.call(person, 'en', 'es');

// .apply() executes and establishes 'this' and array of parameters in one step
// no copy is created
logName.apply(person, ['en', 'es']);


// IIFE with .apply()
(function(lang1, lang2) {
    console.log('Logged: '+this.getFullName());         // this is the global object
    console.log('Arguments: '+ lang1 + ' ' +lang2);
    console.log('===========');
}).apply(person, ['en','es'])                           // set this to person object instead




// function borrowing
var person2 = {
    firstname: 'Jane',
    lastname: 'Doe'
}

console.log(person.getFullName.apply(person2));         // run getFullName method from person
                                                        // set 'this' to person2 instead


// function curringing
function multiply(a,b){
    return a*b;
}

var multipleByTwo = multiply.bind(this, 2);             // this is the multiply function, 2 is the a parameter
console.log(multipleByTwo(4));                          // 4 is the b parameter

var multipleByThree = multiply.bind(this, 3);           // this is the multiply function, 3 is the a parameter
console.log(multipleByThree(4));                        // 4 is the b parameter
