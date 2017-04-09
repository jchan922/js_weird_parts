// new Greetr object
var g = G$('John', 'Doe');

// jQuery selector
var headline = $("#greeting");
console.log(headline);

g.renderGreeting(headline);
g.greet().setLang('es').greet(true).log();
