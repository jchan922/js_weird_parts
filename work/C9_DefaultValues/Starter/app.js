
function greet(name){
    name = name || '<Your name here>';
    // || returns value that can be coerced to true
    console.log('Hello '+name);
}

greet('Tony');
greet(0)
greet();

console.log(libraryName)
// unless you check for namespace collisions, prints out "Lib 2" because overwrites global namespace of libraryName
