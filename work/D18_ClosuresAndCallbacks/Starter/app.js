// Closures and Callbacks

function sayHiLater(){
    var greeting = 'Hi!'

    setTimeout(function(){          // Callback
        console.log(greeting);
    }, 3000);

}

sayHiLater();

// jQuery uses function expressions and first-class functions
// $("button").click(function(){
//
// });



// Callback Example
function tellMeWhenDone(callback) {
    var a = 1000;
    var b = 2000;
    callback(a, b);                         // pass a and b to callback function
}

tellMeWhenDone(function(a,b){               // invoke tellMeWhenDone w/ annoymous function as callback w/ a, b as agruments
    console.log('I am done!', a+b);         // run the callback and console log message
});

tellMeWhenDone(function(a,b){
    console.log('All done!', a,b);
});
