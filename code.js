// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(name) {
    if (name === undefined) {
        return "Hello, World!";
    } else if (typeof(name) === "boolean") {
        return "Hello, World!";
    }
    return ("Hello, " + name + "!")
}

console.log(sayHello())

//     if (name === "") {
//         return "Hello, World!";
//     } else {
//         return ("Hello, " + name + "!");
//     }
// }