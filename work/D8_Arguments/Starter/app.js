// Agruments and Spread

function greet(first, last, language) {

    language = language || 'en';        // default parameter coersion

    if (arguments.length === 0){
        console.log('Missing parameters!');
        console.log('------------');
        return;
    }

    console.log(first);
    console.log(last);
    console.log(language);
    console.log(arguments);             // 'arguments' keyword acts like an array like structure w/ missing props
                                        // ex. arguments.length
    console.log('------------');

}

greet();        // JS doesn't error if there are no parameters

greet('John');

greet('John', 'Doe');

greet('John', 'Doe', 'es')
