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
    if (typeof(input) == 5) {
        return true;
    } else if (input == "5") {
        return true;
    }
    return false;
}
console.log(isFive(5));