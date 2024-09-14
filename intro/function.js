//basic math operation add, sub, div, mul.
// assignment a function to check if a number is odd or even and power(exponent) operation, concatenate strings , Logarithm operation., area of circumference operation, quadratic equation function. palindrome operation.
// function name (){

// ;
//add function
function add (x, y) {
    let addSum = x+y;
    return addSum;
}

let result = add(5, 100);

// console.log(result);

//sub function

function sub (i, j){
    let subtract = i-j;
    return subtract;
}

let result2 = sub(100, 50);
// console.log(result2);

//div function
function div(a,b){
    let divide = a/b;
    return divide;
}

let result3 = div(100, 9);
// console.log(result3);

//mul function
function mul(c,d){
    let multiply = c*d;
    return multiply;
}
let result4 = mul(10, 10);
// console.log(result4);

//odd or even function
function odd(number){
    if (number % 2 == 0){
        return "Even";
    } else {
        return "Odd";
    }
}

let result5 = odd(6);
// console.log(result5);

//power function

function power(base, exponent){
    let result = base ** exponent;
    return result;
}

let result6 = power(2, 4);
console.log(result6);