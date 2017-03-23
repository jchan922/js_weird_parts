// Objects, functions, and 'this'

function a(){
    console.log(this);                          // 'this' refers to the global object, window
    this.newvariable = 'hello';
}

var b = function(){
    console.log(this);                          // 'this' refers to the global object, window
}

a();
console.log(newvariable);                       // 'newvariable' refers to a property on the global object, window
b();


// BUGGED VERSION WITH THIS
var c = {
    name: 'The c object',
    log: function(){                            // log is a method of c
        this.name = 'Updated c object';
        console.log(this);                      // 'this' refers to the c object

        var setname = function(newname) {
            this.name = newname;                // 'this' refers to the global object, window
        }                                       // adds 'name' property to the global object, window
        setname('Updated again! The c object');
        console.log(this);
    }
}

c.log();

// IMPROVED VERSION WITH SELF
var c = {
    name: 'The c object',
    log: function(){                            // log is a method of c
        var self = this;                        // self is pointing to the c object in memory
                                                // internal functions in methods now work properly
        self.name = 'Updated c object';
        console.log(self);                      // 'self' refers to the c object

        var setname = function(newname) {
            self.name = newname;                // 'self' points to the entire c object
        }
        setname('Updated again! The c object');
        console.log(self);
    }
}

c.log();
