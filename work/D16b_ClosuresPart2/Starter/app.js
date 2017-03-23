// Closures Pt 2

function buildFunctions(){
    var arr = [];
    for (var i = 0; i < 3; i++) {
        arr.push(
            function(){
                console.log(i);
            }
        )
    }
    return arr;
}

var fs = buildFunctions();  // fs is an arr that is returned from buildFunctions();

fs[0]();    // => 3
fs[1]();    // => 3
fs[2]();    // => 3

// all 3 show 3 in the console because of Closures
// since fs[i] is invoke after fact,
// i = 3 at the time the buildFunctions() ends

function buildFunctions2(){
    var arr = [];
    for (var i = 0; i < 3; i++) {
        // let j = i;                   // ES6 syntax - let refers to the scope within the function
        //                              //

        arr.push(                       // ES5 - using closures and IIFE
            (function(j){               // pushing an IIFE into the arr
                return function(){          // IIFE returns a function that logs j
                    console.log(j);
                }
            }(i))                           // IIFE is invoked with index value of i
        )

    }
    return arr;
}

var fs2 = buildFunctions2();  // fs is an arr that is returned from buildFunctions();

fs2[0]();    // => 0
fs2[1]();    // => 1
fs2[2]();    // => 2
