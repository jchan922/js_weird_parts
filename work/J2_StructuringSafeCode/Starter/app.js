// G$ points to the Greetr function
// G$ === Greetr
    // G$ returns a new Greetr.init that builds the object
    //

var g = G$('John', 'Doe');

g.log();
g.greet();
g.greet(true);
g.setLang('es').greet().greet(true);
g.log();

// G$ and Greetr are now both properties on window object
console.log(window);
