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

function isEven(num){
    if (typeof num == "boolean") {
        return false
    } else {
    return num % 2 === 0;
    }
}

function isVowel(letter){
    let vowels = "aeiou";
    if (typeof letter !== 'string'){
        return false;
    } else {
        return vowels.includes(letter.toLowerCase());
    }
}


function add(num1, num2){
    return parseFloat(num1) + parseFloat(num2);
}