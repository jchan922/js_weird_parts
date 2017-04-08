///////////////
//  GREETR   //
///////////////

// When given first, last and optional language, formal/informal greetings are generated
// Supports English and Spanish languages
// Reusable and won't interfere with other libraries used
// Easy to type "G$()" structure
// Supports jQuery
    // GREETR will take jQuery objects and will fill element with greeting text




// Structuring safe code with an IFEE...
    // pass through the window and jQuery objects into the IFEE
(function ( global, $ ) {
    console.log("**** GREETR ON ****");

    // Greetr calls new Greetr.init

    // Thus, Greetr.init is actually just a new Greetr object
        // Greetr.init is a function constructor
        // returns a new Greetr object
        // Greeter.init.prototype = should point to Greetr.prototype each time

    var Greetr = function( firstName, lastName, language) {

        return new Greetr.init( firstName, lastName, language );

    }

    var supportedLangs = ['en', 'es'],
        greetings = {
            en: "Hello",
            es: "Hola"
        },
        formalGreetings = {
            en: "Greetings",
            es: "Saludos"
        },
        logMessages = {
            en: "Logged in",
            es: "Inicio sesion"
        };

    // Function constructor that creates an object
    Greetr.init = function( firstName, lastName, language ) {

        var self = this;

        // set object properties to arguments passed in, otherwise set defaults
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';

    }

    // Prototype factory methods attached to any objects created by Greetr.init
    Greetr.prototype = {

        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },

        validate: function() {
            // check if object language is not supported
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid language";   // if not found in supportedLangs array, throw error
            }
        },

        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName() + '.';
        },

        greet: function(formal) {
            var msg;

            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg);
            }

            return this;

        },
        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }

            return this;
        },

        setLang: function(lang) {
            this.language = lang;
            this.validate();

            return this;
        }

    };

    // Any objects created by Greetr.init, should point to Greetr.prototype for it's prototype chain
    Greetr.init.prototype = Greetr.prototype;

    // global is the window object
    // Attach Greetr to global object with alias G$
    global.Greetr = global.G$ = Greetr;

}( window, jQuery ));




//////////////////////
//                  //
//      SUMMARY     //
//                  //
//////////////////////

// app.js file runs G$ function
    // Greetr === G$
// Greetr runs Greetr.init that builds the object
// Greetr.init is a function constructor that returns a new object
// Greetr.prototype is a prototype method factory
// Greetr.init.prototype points to the Greetr.prototype
    // all new Greetr.init objects will have their prototypes point to Greetr.prototype
// Set the newly created Greetr object as a global object property with an alias of 'G$'
    // global.G$ = Greetr;
// Set global property of Greetr to the G$ object
    // global.Greetr = global.G$
