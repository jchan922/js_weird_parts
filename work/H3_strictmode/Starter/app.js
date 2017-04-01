// 'strict mode' aka 'use strict'

// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode


"use strict";               // use strict version of Javascript
                                // on top of JS files
                                // or in funcitons

var person;
persom = {};                // will fire off error on global level
console.log(persom);

function logNewPerson() {
    "use strict";

    var person2;
    persom2 = {};
    console.log(persom2);   // will fire off error during this function's exectution context
}

logNewPerson();
