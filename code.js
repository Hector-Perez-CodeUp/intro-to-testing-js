// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// function sayHello(name) {
//     if (name === undefined) {
//         return "Hello, World!";
//     } else if (typeof(name) === "boolean") {
//         return "Hello, World!";
//     }
//     return ("Hello, " + name + "!")
// }

function sayHello(name) {
    if(typeof(name) !== "string") {
        return "Hello, World!";
    }
    return "Hello, " + name + "!";
}

function isFive(input) {
    if (parseInt(input) == 5 ){
        return true;
    }
    return false;
}

//     if (input == 5 || input == "5") {
//         return true;
//     }
//     return false;
// }

function isEven(input) {
    if (typeof(input) == "boolean" || typeof(Number(input)) != "number") {
        return false;
    } else if ((input % 2 == 0) == true) {
        return true;
    }
    return false;
}

const vowels = ['a', 'e', 'i', 'o', 'u']
function isVowel(input) {
    if (typeof(input) != "string") {
        return false;
    }
    input = input.toLowerCase()
    return vowels.includes(input);
}


function add(x, y) {
    if (isNaN(x) == NaN || Number(y) == NaN) {
        return Number(x) + Number(y);
    }
    return parseInt(x) + parseInt(y);
}
