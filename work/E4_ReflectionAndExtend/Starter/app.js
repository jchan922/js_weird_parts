var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

// don't do this EVER! for demo purposes only!!!
john.__proto__ = person;

// loop through every member in object
    // prop will be current item we're looking at
for (var prop in john) {
    if (john.hasOwnProperty(prop)) {                // only log what's on the john object
                                                    // looking at metadata of object
        console.log(prop + ': ' + john[prop]);      // logging key: value on all props on john object
    }
}

// using underscore.js
var jane = {
    address: '111 Main St.',
    getFormalFullName: function(){
        return this.lastname + ', ' + this.firstname;
    }
}

var jim = {
    getFirstName: function(){
        return this.firstname;
    }
}

_.extend(john, jane, jim);      // .extend is a underscore.js method
                                    // combines all methods on all objects and adds to john directly
console.log(john);              // john now has access to:
                                    // itself
                                    // jane props
                                    // jim props
                                    // __proto__ object that points to the person object
