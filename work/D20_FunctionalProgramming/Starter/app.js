// Functional Programming
// think and code in terms of functions
// functions are objects

function mapForEach(arr, fn) {                                  // run a function at each array index
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])
        )
    };
    return newArr;
}

var arr1 = [1,2,3];
// console.log(arr1);

var arr2 = mapForEach(arr1, function(item){
    return item * 2;
})
// console.log(arr2);

var arr3 = mapForEach(arr1, function(item){
    return item > 2;
})
// console.log(arr3);

var checkPastLimit = function(limiter, item){
    return item > limiter;
}
var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));      // mapForEach() is invoked with...
                                                                // parameters: arr1 = [1,2,3], checkPastLimit()
                                                                // .bind() is creating a copy of checkPastLimit ...
                                                                // and setting the 'this'
                                                                // 'this' is checkPastLimit object
                                                                // 1 is the limiter parameter
                                                                // arr4 = result of mapForEach newArr...
                                                                // after checkPastLimit is run on each index
                                                                    // compares 1 > arr[i]
// console.log(arr4);                                              // => [false, true, true]

var checkPastLimitSimplified = function(limiter){
    return function(limiter, item){
        return item > limiter;
    }.bind(this, limiter);                                      // sets 'this' with .bind() to checkPastLimitSimplified
}

var arr5 = mapForEach(arr1, checkPastLimitSimplified(2));       // mapForEach() is invoked with...
                                                                // parametesr: arr1 = [1,2,3], checkPastLimitSimplified()
                                                                // returns annonymous function that...
                                                                // returns boolean for item > limiter
                                                                // 'this' is checkPastLimitSimplified() object
                                                                // 2 is the limiter parameter
                                                                // arr5 = result of mapForEach newArr...
                                                                // after checkPastLimit is run on each index
                                                                    // compares 2 > arr[i]
console.log(arr5);                                              // => [false, false, true]
