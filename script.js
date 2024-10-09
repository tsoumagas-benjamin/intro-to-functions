// Part 1
function greet(name = "Jeff") {
    let greeting = `Hello ${name}`
    console.log(greeting);
    return
}

// Part 2
function addTwo(num1, num2) {
    let sum = num1 + num2;
    console.log(sum);
    return sum;
}

// Part 3
let x = 10;

function changeValue() {
    let x = 20;
    return x;
}

// Part 4
function outerFunction() {
    let count = 0;
    function innerFunction() {
        count += 5;
        console.log(count);
    }
    innerFunction();
}

function outer() {
    let company = "Google";
    function inner() {
        company = "Mozilla";
        console.log(company);
    }
    return inner();
}

// Part 1
greet("Ben");
greet();

// Part 2
addTwo(5, 6);

// Part 3
console.log(x);
console.log(changeValue());
console.log(x);

// Part 4
outerFunction();
outer();