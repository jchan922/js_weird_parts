// typeof, instanceof keywords

// typeof keyword
    // what type thing is this?

var a = 3;
console.log(typeof a);  // number

var b = "Hello";
console.log(typeof b);  // string

var c = {};
console.log(typeof c);  // object

var d = [];
console.log(typeof d);  // weird! type of d is object
                        // Array's are objects

console.log(Object.prototype.toString.call(d));     // better!
                                                    // invoke toString() from Object.prototype
                                                    // .call(d) makes 'this' refer to the d object
                                                    // type of d is now [object Array]


function Person(name) {
    this.name = name;
}

// instanceof keyword
    // if anywhere down the entire prototype chain,
    // we find something is an instance of something return True

var e = new Person('Jane');
console.log(typeof e);              // object
console.log(e instanceof Person);   // True

console.log(typeof undefined);      // makes sense
                                        // undefined is nothing and has no value
console.log(typeof null);           // a bug since, like, forever...
                                        // type of is object

var z = function() { };
console.log(typeof z);              // function
                                        // technically just an object
