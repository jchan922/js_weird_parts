// Object.create and Pure Prototypal Inheritance


// Some older browsers/engines don't support Object.create...
// Use Polyfills

// EXAMPLE:
    // if object.create is undefined in the browser...
    // implement our own .create method onto Object
    if(!Object.create){
        Object.create = function (o) {
            // check for errors
            if (arguments.length > 1) {
                throw new Error('Object.create implementation' + ' only accepts the first parameter')
            }
            // constructor
            function F(){}
            // constructor's prototype is o
            // o is the object passed in
            F.prototype = o;
            // return a new empty object that points to o
            return new F();
        };
    }

    // else, Object.create is not undefined and available...
    // so we can use Object.create
    var person = {
        firstname: 'default',
        lastname: 'default',
        greet: function(){
            return 'Hi ' + this.firstname;
        }
    }

    var john = Object.create(person);       // Object.create(person) creates an empty object...
                                                // points the prototype object to the person object
    john.firstname = "John";                    // free to overwrite the person object fields as needed
    john.lastname = "Doe";
    console.log(john.greet());


// ES6 and 'class'
class Person {

        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }

        greet() {
            return 'Hi ' + firstname;
        }

    }

var john = new Person('John', 'Doe');

// extends keyword sets the prototype
class InformalPerson extends Person {

        constructor(firstname, lastname) {
            // super allows us to call constructor or prototype
            // lets us pass arguments and values down the chain
            super(firstname, lastname);
        }

        // override the prototype class's greet() function
        greet() {
            return 'Yo ' + firstname;
        }

    }
