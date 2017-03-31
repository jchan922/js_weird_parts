// Understanding Classical vs Prototypal inheritance

var person = {
    firstname: 'default',
    lastname: 'default',
    getFullName: function(){
        return this.firstname + ' ' + this.lastname;
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

// for demo only. not good practice.
john.__proto__ = person;            // john inherates from the person object
console.log(john.getFullName());
console.log(john.firstname);

var jane = {
    firstname: 'Jane'
}

// for demo only. not good practice.
jane.__proto__ = person;            // jane points to the person object in memory
console.log(jane.getFullName());
