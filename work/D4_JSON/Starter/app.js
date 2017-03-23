// JSON AND OBJECT LITERALS

var objectLiteral = {
    firstname: 'Mary',
    isAProgrammer: true
}

console.log(JSON.stringify(objectLiteral));

// JSON SYNTAX
    // comes wrapped in quotes as a string
    // JSON.parse converts JSON to object literal

var jsonValue = JSON.parse('{"firstname": "Mary","isAProgrammer": true}');

console.log(jsonValue);
