// Function constructors and .prototype

function Person(firstname, lastname) {

    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is invoked.');

}

// Prototype
    // every object constructed in Javascript gets a prototype property
    // starts it's life as an empty object you can add to


// EX.
    // if 'new' is called to construct a Person object
    // we can set the prototype object properties on Person.prototype
    // therefore, all Person objects created with 'new' have access

Person.prototype.getFullName = function(){
    return this.firstname + ' ' + this.lastname;
}

var john = new Person('John', 'Doe');
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);

Person.prototype.getFormalFullName = function(){
    return this.lastname + ', ' + this.firstname;
}

console.log(john.getFormalFullName());      // getFormalFullName() is not on john...
                                            // but getFormalFullName() is found down the prototype chain
                                            // console.logs "Doe, John"
