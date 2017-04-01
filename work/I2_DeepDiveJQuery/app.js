
// JQUERY

var q = $("ul.people li");  // $ = jQuery
                            // "find all li children of ul's that have a class='people' inside the DOM tree"

console.log(q);             // console.logs =>
                                // jQuery.fn.init[3]
    // jQuery is a function
        // jQuery is invoked with "ul.people li" passed in as selector argument
        // return new jQuery.fn.init( selector, context )
            // creates new empty object
            // jQuery.fn = jQuery.prototype
                // points prototype object to jQuery.prototype
                    // .fn is the .prototype object
                // .fn.init( selector, context ) refers to the .init prototype method
                    // .fn.init ( selector, context ) is invoked
                    // return jQuery.makeArray( selector, this );
                    // makeArray is a jQuery method that returns an array
            // init.prototype = jQuery.fn
                // makes sure that any new objects created using init will have jQuery prototype methods available
