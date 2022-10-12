// helloWorld function
function helloWorld() {
    return "Hello, World!";
}

function sayHello(name) {
    if (name === undefined || typeof name !== "string" || !isNaN(name)){
        return "Hello, World!"
    } else {
        return "Hello, " + name + "!";
    }
}

console.log(sayHello(null));
    // if (name === "Alex") {
    //     return "Hello, Alex!";
    // } else if (name === "Pat") {
    //     return "Hello, Pat!";
    // } else {
    //     return "Hello, Jane!";
    // }
// }

function isFive(num){
    return num == 5;
}