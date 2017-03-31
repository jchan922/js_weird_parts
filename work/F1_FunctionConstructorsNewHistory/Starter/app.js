// Function Constructors

// Using 'new' keyword operator for Javascript

function Person(firstname, lastname){
    console.log("'this' at the start is empty", this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is invoked');
    console.log("'this' at the end is set", this);
}

var john = new Person('John', 'Doe');        // once 'new' is used
                                                // an empty object is created
                                                // calls Person function
                                                // creates a variable called 'this'
                                                    // 'this' is pointing to brand new empty object
                                                // automatically returns object with Person properties
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);
